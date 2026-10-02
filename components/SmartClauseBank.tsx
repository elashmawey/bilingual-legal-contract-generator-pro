import React, { useState } from 'react';
import { SMART_CLAUSES_BANK } from '../services/clauseBankData';
import type { SmartClauseItem, GeneratedContract } from '../types';

interface SmartClauseBankProps {
  currentContract: GeneratedContract | null;
  onInsertClauseIntoContract?: (clause: SmartClauseItem) => void;
  onNavigateToContract?: () => void;
}

const SmartClauseBank: React.FC<SmartClauseBankProps> = ({
  currentContract,
  onInsertClauseIntoContract,
  onNavigateToContract,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [insertedId, setInsertedId] = useState<string | null>(null);

  const categories = ['all', ...Array.from(new Set(SMART_CLAUSES_BANK.map((c) => c.category)))];

  const filteredClauses = SMART_CLAUSES_BANK.filter((clause) => {
    const matchesCategory = selectedCategory === 'all' || clause.category === selectedCategory;
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !query ||
      clause.titleAr.toLowerCase().includes(query) ||
      clause.titleEn.toLowerCase().includes(query) ||
      clause.contentAr.toLowerCase().includes(query) ||
      clause.contentEn.toLowerCase().includes(query) ||
      clause.statutoryBasis.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const handleCopyClause = (clause: SmartClauseItem, lang: 'ar' | 'en' | 'bilingual') => {
    let textToCopy = '';
    if (lang === 'ar') {
      textToCopy = `${clause.titleAr}\n${clause.contentAr}\n[السند القانوني: ${clause.statutoryBasis}]`;
    } else if (lang === 'en') {
      textToCopy = `${clause.titleEn}\n${clause.contentEn}`;
    } else {
      textToCopy = `${clause.titleAr} | ${clause.titleEn}\n\n[النص العربي]:\n${clause.contentAr}\n\n[English Translation]:\n${clause.contentEn}\n\n[المستند القانوني / Statutory Reference]: ${clause.statutoryBasis}`;
    }

    navigator.clipboard.writeText(textToCopy);
    setCopiedId(`${clause.id}-${lang}`);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleInsert = (clause: SmartClauseItem) => {
    if (onInsertClauseIntoContract) {
      onInsertClauseIntoContract(clause);
      setInsertedId(clause.id);
      setTimeout(() => setInsertedId(null), 3000);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Hero Banner */}
      <div className="bg-slate-950 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden border border-slate-800">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-bold mb-2">
              <i className="fas fa-cubes-stacked"></i>
              <span>ميزة للمكاتب والشركات الكبرى · بنك الشروط المعتمد</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight mb-1 text-white">
              بنك الشروط والبنود القانونية الذكية
            </h2>
            <p className="text-slate-300 text-xs max-w-2xl leading-relaxed">
              مكتبة متكاملة من أدق الشروط التعاقدية الحساسة المصاغة وفقاً للقانون المدني والتجاري المصري وأحكام محكمة النقض. يمكنك نسخ أي بند أو إدراجه فورياً في عقدك المفتوح.
            </p>
          </div>

          {currentContract && (
            <div className="bg-slate-900 rounded-xl p-3.5 border border-slate-800 text-xs w-full md:w-auto">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>عقدك الحالي نشط وجاهز للحقن</span>
              </div>
              <p className="text-slate-200 font-semibold truncate max-w-xs mb-2">
                {currentContract.contractTitleArabic || 'عقد قيد الصياغة'}
              </p>
              <button
                onClick={onNavigateToContract}
                className="w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-1.5 px-3 rounded-lg transition-all cursor-pointer shadow-xs"
              >
                العودة لعرض وتصدير العقد &larr;
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="bg-white rounded-2xl p-4 md:p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <i className="fas fa-search absolute right-4 top-3.5 text-slate-400 text-sm"></i>
            <input
              type="text"
              placeholder="ابحث عن شرط (تحكيم، قوة قاهرة، غرامة تأخير، ملكية فكرية، عدم منافسة، ضرائب...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-11 pl-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
            />
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 shrink-0">
            <span>البنود المتاحة:</span>
            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg border border-blue-200 font-mono">
              {filteredClauses.length} شرطاً
            </span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'جميع التصنيفات' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Clauses Cards Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredClauses.map((clause) => (
          <div
            key={clause.id}
            className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 p-5 md:p-6 shadow-xs hover:shadow-md transition-all space-y-4"
          >
            {/* Header: Title, Category & Importance Badge */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
                  <span className="text-slate-800 font-bold">{clause.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className={clause.importance === 'critical' ? 'text-rose-600 font-bold' : 'text-amber-700 font-bold'}>
                    {clause.importance === 'critical' ? 'جوهري وحاسم' : 'موصى به قانوناً'}
                  </span>
                </div>
                <h3 className="text-base font-black text-slate-900">{clause.titleAr}</h3>
                <p className="text-xs font-medium text-slate-500" style={{ direction: 'ltr' }}>
                  {clause.titleEn}
                </p>
              </div>

              {/* Action Buttons: Copy / Insert */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  onClick={() => handleCopyClause(clause, 'bilingual')}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all border border-slate-200 flex items-center gap-1.5 cursor-pointer"
                  title="نسخ البند بالعربية والإنجليزية"
                >
                  <i className="fas fa-copy text-slate-500"></i>
                  <span>
                    {copiedId === `${clause.id}-bilingual` ? 'تم النسخ بنجاح ✓' : 'نسخ ثنائي اللغة'}
                  </span>
                </button>

                <button
                  onClick={() => handleCopyClause(clause, 'ar')}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all border border-slate-200 flex items-center gap-1.5 cursor-pointer"
                  title="نسخ النص العربي فقط"
                >
                  <i className="fas fa-align-right text-slate-500"></i>
                  <span>{copiedId === `${clause.id}-ar` ? 'تم نسخ العربي ✓' : 'نسخ عربي'}</span>
                </button>

                {currentContract && onInsertClauseIntoContract && (
                  <button
                    onClick={() => handleInsert(clause)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                      insertedId === clause.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white'
                    }`}
                  >
                    <i
                      className={`fas ${insertedId === clause.id ? 'fa-check' : 'fa-plus-circle'}`}
                    ></i>
                    <span>
                      {insertedId === clause.id ? 'تم الإدراج بالعقد بنجاح!' : 'إدراج بالعقد الحالي'}
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Practical Advice Banner */}
            <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
              <i className="fas fa-lightbulb text-amber-600 mt-0.5 shrink-0 text-sm"></i>
              <div>
                <span className="font-bold">نصيحة الصياغة وأحكام محكمة النقض: </span>
                <span className="leading-relaxed">{clause.practicalAdvice}</span>
              </div>
            </div>

            {/* Bilingual Content Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Arabic Content */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-slate-500 font-bold border-b border-slate-200 pb-1.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>النص العربي المقنن (المحاكم ومصلحة الشهر العقاري)</span>
                  </span>
                </div>
                <p className="text-slate-800 leading-relaxed font-serif text-[13px] whitespace-pre-line">
                  {clause.contentAr}
                </p>
              </div>

              {/* English Content */}
              <div
                className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2 text-left"
                style={{ direction: 'ltr' }}
              >
                <div className="flex items-center justify-between text-slate-500 font-bold border-b border-slate-200 pb-1.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span>Certified English Legal Translation</span>
                  </span>
                </div>
                <p className="text-slate-800 leading-relaxed font-sans text-xs whitespace-pre-line">
                  {clause.contentEn}
                </p>
              </div>
            </div>

            {/* Statutory Reference Footer */}
            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <i className="fas fa-scale-balanced text-indigo-600"></i>
              <span className="font-bold text-slate-700">السند التشريعي:</span>
              <span className="font-mono">{clause.statutoryBasis}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartClauseBank;
