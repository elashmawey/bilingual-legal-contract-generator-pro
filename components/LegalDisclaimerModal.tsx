import React from 'react';

interface LegalDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalDisclaimerModal: React.FC<LegalDisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
        <div className="bg-slate-900 text-white p-6 relative flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center text-lg font-bold">
              <i className="fas fa-scale-balanced"></i>
            </div>
            <div>
              <h2 className="text-lg font-black">شروط الاستخدام وإخلاء المسؤولية القانونية</h2>
              <p className="text-xs text-slate-400">Terms of Service & Statutory Legal Disclaimer</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-4 text-xs text-slate-700 max-h-[70vh] overflow-y-auto leading-relaxed">
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 font-bold">
            <i className="fas fa-triangle-exclamation ml-1.5 text-amber-600"></i>
            تنبيه قانوني وإجرائي هام وفقاً لقانون المحاماة وقوانين جمهورية مصر العربية:
          </div>

          <section>
            <h4 className="font-black text-slate-900 text-sm mb-1">1. طبيعة المنصة ونطاق الخدمة</h4>
            <p>
              تعمل منصة "منشئ العقود القانونية" كنظام ذكي متخصص في المساعدة القانونية وصياغة مسودات العقود ثنائية اللغة وفقاً لأحكام القانون المدني المصري رقم 131 لسنة 1948 والقوانين المكملة وقواعد الشريعة الإسلامية. تمثل المخرجات مسودات استرشادية واحترافية عالية الجودة تمهيداً للتوقيع والتوثيق.
            </p>
          </section>

          <section>
            <h4 className="font-black text-slate-900 text-sm mb-1">2. إثبات التاريخ والتوثيق الرسمي</h4>
            <p>
              لا تغني الصياغة الذكية للعقد عن استيفاء الإجراءات الشكلية والرسمية الواجبة قانوناً، كالتصديق على التوقيعات أو إثبات التاريخ أمام مكاتب ومأموريات مصلحة الشهر العقاري والتوثيق المختصة بجمهورية مصر العربية عند اشتراط القانون ذلك لاكتساب الحجية في مواجهة الغير.
            </p>
          </section>

          <section>
            <h4 className="font-black text-slate-900 text-sm mb-1">3. سرية البيانات وحماية الخصوصية</h4>
            <p>
              تلتزم المنصة بأقصى معايير التشفير والسرية لبيانات الأطراف والبنود التعاقدية المدخلة وفقاً لأحكام قانون حماية البيانات الشخصية المصري رقم 151 لسنة 2020، ولا يتم مشاركة أي مستند مع أطراف خارجية دون إذن المستخدم.
            </p>
          </section>

          <section>
            <h4 className="font-black text-slate-900 text-sm mb-1">4. حقوق الملكية الفكرية</h4>
            <p>
              جميع الصيغ المحررة، وقوالب الترجمة المعتمدة، وخوارزميات التدقيق المقارن مع بوابة التشريعات ومحكمة النقض محمية بحقوق الملكية الفكرية. يُمنح العميل ترخيصاً كاملاً غير حصري لاستخدام، طباعة، وتقديم العقود المنتجة أمام كافة الجهات الرسمية والقضائية.
            </p>
          </section>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg"
          >
            فهمت وموافق على الشروط
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalDisclaimerModal;
