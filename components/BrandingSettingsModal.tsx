import React, { useState } from 'react';
import type { LawFirmBranding } from '../types';

interface BrandingSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  branding?: LawFirmBranding;
  onSave: (branding: LawFirmBranding) => void;
}

const BrandingSettingsModal: React.FC<BrandingSettingsModalProps> = ({
  isOpen,
  onClose,
  branding,
  onSave,
}) => {
  const [formData, setFormData] = useState<LawFirmBranding>(() => ({
    firmNameArabic: branding?.firmNameArabic || 'مكتب المستشار للمحاماة والاستشارات القانونية',
    firmNameEnglish: branding?.firmNameEnglish || 'Legal Advisory & Counsel Bureau',
    registrationNumber: branding?.registrationNumber || 'قيد نقابة المحامين المصرية: 12345',
    phone: branding?.phone || '+20 100 000 0000',
    address: branding?.address || 'القاهرة، جمهورية مصر العربية',
    authorizedCounselor: branding?.authorizedCounselor || 'المستشار القانوني المعتمد',
    logoUrl: branding?.logoUrl || '',
  }));

  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 left-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center text-xl font-bold shadow-md">
              <i className="fas fa-stamp"></i>
            </div>
            <div>
              <h2 className="text-xl font-black">هوية مكتب المحاماة والترويسة المعتمدة</h2>
              <p className="text-xs text-slate-300">
                خصص بيانات مكتبك أو شركتك لتظهر على رأس العقود المطبوعة وملفات Word
              </p>
            </div>
          </div>
        </div>

        {savedSuccess && (
          <div className="p-3 bg-emerald-600 text-white text-center font-bold text-xs flex items-center justify-center gap-1.5 animate-bounce">
            <i className="fas fa-check-circle"></i>
            <span>تم حفظ بيانات مكتب المحاماة بنجاح وتطبيقها على كافة العقود!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              اسم مكتب المحاماة / الشركة (بالعربية):
            </label>
            <input
              type="text"
              value={formData.firmNameArabic}
              onChange={(e) => setFormData({ ...formData, firmNameArabic: e.target.value })}
              required
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              اسم المكتب / الشركة بالإنجليزية (Law Firm English Title):
            </label>
            <input
              type="text"
              value={formData.firmNameEnglish}
              onChange={(e) => setFormData({ ...formData, firmNameEnglish: e.target.value })}
              required
              style={{ direction: 'ltr' }}
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                رقم القيد بالنقابة / السجل التجاري:
              </label>
              <input
                type="text"
                value={formData.registrationNumber}
                onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                required
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                اسم المستشار أو الشريك المسؤول:
              </label>
              <input
                type="text"
                value={formData.authorizedCounselor || ''}
                onChange={(e) => setFormData({ ...formData, authorizedCounselor: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">هاتف التواصل الرسمي:</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ direction: 'ltr' }}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">العنوان والمقر الرئيسي:</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black rounded-lg shadow-sm transition-all transform active:scale-95 flex items-center gap-1.5"
            >
              <i className="fas fa-check"></i>
              <span>حفظ وتطبيق الهوية</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrandingSettingsModal;
