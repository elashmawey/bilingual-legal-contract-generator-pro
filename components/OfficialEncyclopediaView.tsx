import React, { useState } from 'react';
import { OFFICIAL_STATUTORY_ENCYCLOPEDIA } from '../services/officialEncyclopedia';
import type { GeneratedContract, OfficialEncyclopediaContract } from '../types';

interface OfficialEncyclopediaViewProps {
  onSelectContract: (contract: GeneratedContract) => void;
  onCustomizeTemplate: (template: OfficialEncyclopediaContract) => void;
}

const normalizeCategory = (cat: string): string => {
  if (cat.includes('تأسيس') || cat.includes('GAFI') || cat.includes('استثمار') || cat.includes('مساهمة') || cat.includes('شخص واحد') || cat.includes('تضامن') || cat.includes('توصية')) return 'عقود تأسيس الشركات (هيئة الاستثمار GAFI)';
  if (cat.includes('بيع') || cat.includes('ملكية') || cat.includes('منقول')) return 'عقود البيع والملكية العقارية';
  if (cat.includes('إيجار') || cat.includes('انتفاع')) return 'عقود الإيجار والانتفاع العقاري';
  if (cat.includes('شرك')) return 'عقود الشركات والشراكات التجارية';
  if (cat.includes('مقاول') || cat.includes('إنشاء') || cat.includes('تشييد') || cat.includes('هندس')) return 'عقود المقاولات والتشييد والأعمال الهندسية';
  if (cat.includes('عمل') || cat.includes('موظف') || cat.includes('وساط') || cat.includes('سمسر') || cat.includes('مستقل')) return 'عقود العمل والموارد البشرية والوساطة';
  if (cat.includes('تكنولوج') || cat.includes('برمج') || cat.includes('اتصال') || cat.includes('فكر') || cat.includes('بيانات') || cat.includes('سحاب')) return 'عقود التكنولوجيا والاتصالات والملكية الفكرية';
  if (cat.includes('توريد') || cat.includes('تجار') || cat.includes('صلح') || cat.includes('تسوي') || cat.includes('لوجست') || cat.includes('تخصيم')) return 'عقود المعاملات التجارية والتوريد والتسويات';
  return 'عقود تجارية ومدنية متنوعة';
};

const OfficialEncyclopediaView: React.FC<OfficialEncyclopediaViewProps> = ({
  onSelectContract,
  onCustomizeTemplate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePreview, setActivePreview] = useState<OfficialEncyclopediaContract | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const categories = [
    'ALL',
    'عقود تأسيس الشركات (هيئة الاستثمار GAFI)',
    'عقود البيع والملكية العقارية',
    'عقود الإيجار والانتفاع العقاري',
    'عقود الشركات والشراكات التجارية',
    'عقود المقاولات والتشييد والأعمال الهندسية',
    'عقود العمل والموارد البشرية والوساطة',
    'عقود التكنولوجيا والاتصالات والملكية الفكرية',
    'عقود المعاملات التجارية والتوريد والتسويات',
  ];

  const filteredContracts = OFFICIAL_STATUTORY_ENCYCLOPEDIA.filter((item) => {
    const itemNormCat = normalizeCategory(item.category);
    const matchesCat = selectedCategory === 'ALL' || itemNormCat === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.titleAr.toLowerCase().includes(q) ||
      item.titleEn.toLowerCase().includes(q) ||
      item.statutoryBasis.toLowerCase().includes(q) ||
      item.source.toLowerCase().includes(q) ||
      itemNormCat.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const handleCopyModalText = (contract: OfficialEncyclopediaContract) => {
    const text = `${contract.titleAr}\n${contract.titleEn}\nالسند التشريعي: ${contract.statutoryBasis}\nالمصدر والاعتماد: ${contract.source}\n\n[الديباجة]\n${contract.contractData.preambleArabic}\n\n${contract.contractData.clauses.map((c) => `${c.titleArabic}\n${c.contentArabic}\n\n${c.titleEnglish}\n${c.contentEnglish}`).join('\n\n---\n\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedNotification('تم نسخ صيغة العقد بالكامل للحافظة بنجاح!');
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-950 text-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-800 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-bold tracking-wide">
              <i className="fas fa-landmark"></i>
              <span>الموسوعة الرسمية المعتمدة · نقابة المحامين والشهر العقاري والهيئة العامة للاستثمار</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              موسوعة العقود والنماذج القانونية الرسمية ({OFFICIAL_STATUTORY_ENCYCLOPEDIA.length} عقداً كاملاً)
            </h2>
            <p className="text-xs text-slate-300 max-w-3xl leading-relaxed font-normal">
              صيغ قانونية نموذجية معتمدة وفق أحدث تعديلات التشريعات المصرية ونماذج هيئة الاستثمار GAFI، جاهزة للاستخدام والتحميل الفوري لـ Word و PDF في أي وقت دون حاجة للإنترنت.
            </p>
          </div>

          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center flex-shrink-0">
            <span className="text-[10px] text-amber-400 block font-bold">جاهزة أوفلاين</span>
            <span className="text-base font-black text-white font-mono">{OFFICIAL_STATUTORY_ENCYCLOPEDIA.length} عقداً معتمداً</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 space-y-4">
        {/* Search Input & Count */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث بالاسم، السند التشريعي، الوزارة، أو الكلمات الدلالية..."
              className="w-full pl-3 pr-9 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
            />
            <i className="fas fa-search absolute right-3 top-3 text-slate-400 text-xs"></i>
          </div>

          <div className="text-xs text-slate-500 self-end sm:self-center">
            عرض <strong className="text-slate-900 font-bold">{filteredContracts.length}</strong> من أصل <strong className="text-slate-900 font-bold">{OFFICIAL_STATUTORY_ENCYCLOPEDIA.length}</strong> صيغة معتمدة
          </div>
        </div>

        {/* Category Tabs (Segmented Buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat === 'ALL' ? `جميع العقود الرسمية (${OFFICIAL_STATUTORY_ENCYCLOPEDIA.length})` : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Encyclopedia Contracts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredContracts.map((item) => {
          const normCat = normalizeCategory(item.category);
          return (
            <div
              key={item.id}
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-slate-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div>
                {/* Clean unboxed metadata per Zero-Pill discipline */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium mb-1.5">
                  <span className="text-amber-700 font-bold">{normCat}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.totalClauses} مادة قانونية</span>
                </div>

                <h3 className="text-sm font-black text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                  {item.titleAr}
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1" style={{ direction: 'ltr' }}>
                  {item.titleEn}
                </p>

                <div className="mt-3 p-3 bg-slate-50 rounded-xl text-[11px] text-slate-600 space-y-1 border border-slate-100">
                  <p>
                    <strong className="text-slate-800">المصدر والاعتماد:</strong> {item.source}
                  </p>
                  <p>
                    <strong className="text-slate-800">السند التشريعي:</strong> {item.statutoryBasis}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <button
                  onClick={() => setActivePreview(item)}
                  className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <i className="fas fa-eye text-xs text-slate-500"></i>
                  <span>معاينة المواد ({item.totalClauses})</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onCustomizeTemplate(item)}
                    className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                    title="تعبئة وتخصيص بياناتك في نموذج التوليد"
                  >
                    <i className="fas fa-pen-to-square text-amber-700"></i>
                    <span>تخصيص البيانات</span>
                  </button>

                  <button
                    onClick={() => onSelectContract(item.contractData)}
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-black text-white text-xs font-black rounded-lg shadow-xs transition-all transform active:scale-95 flex items-center gap-1.5 cursor-pointer"
                  >
                    <i className="fas fa-file-export text-amber-400"></i>
                    <span>فتح وتصدير</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Preview for Full Encyclopedia Contract */}
      {activePreview && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn my-6 max-h-[90vh] flex flex-col">
            <div className="p-5 bg-slate-950 text-white flex justify-between items-center flex-shrink-0 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-bold mb-1">
                  <span>{normalizeCategory(activePreview.category)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activePreview.totalClauses} مادة كاملة</span>
                </div>
                <h3 className="text-base font-black text-white">{activePreview.titleAr}</h3>
                <p className="text-xs text-slate-400" style={{ direction: 'ltr' }}>{activePreview.titleEn}</p>
              </div>
              <button
                onClick={() => setActivePreview(null)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 flex-1 text-xs">
              {copiedNotification && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl font-bold flex items-center gap-2">
                  <i className="fas fa-check-circle text-emerald-600"></i>
                  <span>{copiedNotification}</span>
                </div>
              )}

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 space-y-1">
                <p><strong className="text-slate-900">المصدر والاعتماد الرسمي:</strong> {activePreview.source}</p>
                <p><strong className="text-slate-900">السند القضائي والتشريعي:</strong> {activePreview.statutoryBasis}</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-black text-slate-900 mb-1">الديباجة والتمهيد الرسمي المعتمد:</h4>
                <p className="whitespace-pre-wrap text-slate-800 leading-relaxed font-serif text-sm">
                  {activePreview.contractData.preambleArabic}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-black text-slate-900 text-sm">بنود ومواد العقد ({activePreview.totalClauses} مادة كاملة):</h4>
                  <button
                    onClick={() => handleCopyModalText(activePreview)}
                    className="text-blue-700 hover:text-blue-900 font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <i className="fas fa-copy"></i>
                    <span>نسخ نص العقد بالكامل</span>
                  </button>
                </div>

                {activePreview.contractData.clauses.map((clause, idx) => (
                  <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <h5 className="font-black text-slate-900 text-xs flex items-center gap-2">
                      <span className="text-amber-600 font-mono">[{idx + 1}]</span>
                      <span>{clause.titleArabic}</span>
                    </h5>
                    <p className="text-slate-800 leading-relaxed font-serif text-sm">{clause.contentArabic}</p>
                    <p className="text-slate-500 font-sans text-[11px] pt-1.5 border-t border-slate-100" style={{ direction: 'ltr' }}>
                      {clause.contentEnglish}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap justify-between items-center gap-2 flex-shrink-0">
              <button
                onClick={() => setActivePreview(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                إغلاق المعاينة
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const template = activePreview;
                    setActivePreview(null);
                    onCustomizeTemplate(template);
                  }}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs rounded-xl shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <i className="fas fa-pen-to-square"></i>
                  <span>تخصيص البيانات في النموذج</span>
                </button>

                <button
                  onClick={() => {
                    const contract = activePreview.contractData;
                    setActivePreview(null);
                    onSelectContract(contract);
                  }}
                  className="px-5 py-2 bg-slate-900 hover:bg-black text-white font-black text-xs rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <i className="fas fa-file-export text-amber-400"></i>
                  <span>فتح وتصدير Word / PDF فوراً</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfficialEncyclopediaView;
