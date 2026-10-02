import React, { useState } from 'react';
import type { SavedContractItem, GeneratedContract } from '../types';

interface ContractsArchiveProps {
  contracts: SavedContractItem[];
  onSelectContract: (contract: GeneratedContract) => void;
  onDeleteContract: (id: string) => void;
  onNewContract: () => void;
}

const ContractsArchive: React.FC<ContractsArchiveProps> = ({
  contracts,
  onSelectContract,
  onDeleteContract,
  onNewContract,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('ALL');

  const filtered = contracts.filter((c) => {
    const matchesSearch =
      c.titleArabic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.titleEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.referenceId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'ALL' || c.contractType === filterType;
    return matchesSearch && matchesType;
  });

  const uniqueTypes = Array.from(new Set(contracts.map((c) => c.contractType)));

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header bar */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg font-bold">
              <i className="fas fa-box-archive"></i>
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">مكتبة وأرشيف عقودي المحفوظة</h2>
              <p className="text-xs text-slate-500">
                إجمالي {contracts.length} عقد قانوني رسمي محفوظ ومسجل برقم مرجعي
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-stretch md:self-auto">
          <button
            onClick={onNewContract}
            className="flex-1 md:flex-none inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-transform transform active:scale-95 gap-2"
          >
            <i className="fas fa-plus"></i>
            <span>صياغة عقد جديد</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث في عقودك المحفوظة برقم القيد أو اسم العقد..."
            className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
          />
          <i className="fas fa-search absolute right-3.5 top-3 text-slate-400 text-xs"></i>
        </div>

        {uniqueTypes.length > 0 && (
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full sm:w-auto px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
          >
            <option value="ALL">جميع أنواع العقود ({contracts.length})</option>
            {uniqueTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Contracts List */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400 text-2xl">
            <i className="fas fa-folder-open"></i>
          </div>
          <h3 className="font-bold text-slate-800 text-base mb-1">لا توجد عقود محفوظة حالياً</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
            عند إنشاء أي عقد جديد، سيتم حفظه تلقائياً في مكتبتك ليمكنك مراجعته، تعديله، أو إعادة تحميله بصيغة Word و PDF في أي وقت.
          </p>
          <button
            onClick={onNewContract}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-sm hover:bg-blue-700"
          >
            <i className="fas fa-magic ml-1.5"></i>
            إنشاء أول عقد لك الآن
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => {
            const formattedDate = new Date(item.createdAt).toLocaleDateString('ar-EG', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <div
                key={item.id}
                className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {item.referenceId}
                    </span>
                    <span className="text-[10px] text-slate-400">{formattedDate}</span>
                  </div>

                  <h3 className="text-base font-black text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                    {item.titleArabic}
                  </h3>
                  <h4 className="text-xs text-slate-500 font-medium mb-3 line-clamp-1" style={{ direction: 'ltr' }}>
                    {item.titleEnglish}
                  </h4>

                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-4">
                    <span className="text-slate-800 font-bold">{item.contractType}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.contractData.clauses.length} مادة</span>
                    {item.contractData.legalAudit && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-700 font-bold">{item.contractData.legalAudit.complianceScore}% مطابقة</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectContract(item.contractData)}
                    className="flex-1 py-1.5 px-3 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <i className="fas fa-eye text-xs"></i>
                    <span>فتح واستعراض</span>
                  </button>

                  <button
                    onClick={() => onDeleteContract(item.id)}
                    className="w-8 h-8 rounded-lg bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white flex items-center justify-center text-xs transition-colors"
                    title="حذف من الأرشيف"
                  >
                    <i className="fas fa-trash-can"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ContractsArchive;
