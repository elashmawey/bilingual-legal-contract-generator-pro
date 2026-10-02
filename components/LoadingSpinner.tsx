import React, { useState, useEffect } from 'react';

const verificationSteps = [
  {
    icon: 'fa-landmark',
    titleAr: 'مضاهاة بوابة التشريعات المصرية والقوانين المعمول بها',
    titleEn: 'Benchmarking Egyptian Statutory Framework (Civil Code 131/1948)',
    detail: 'فحص صحة الأركان والتكييف القانوني للعقد وخلوه من البطلان',
  },
  {
    icon: 'fa-scale-balanced',
    titleAr: 'مطابقة مبادئ وقواعد محكمة النقض المصرية المستقرة',
    titleEn: 'Verifying Court of Cassation Precedents (Commercial & Civil)',
    detail: 'التحقق من نفاذ الشروط الرضائية والشرط الفاسخ الصريح والتعويض الاتفاقي',
  },
  {
    icon: 'fa-shield-halved',
    titleAr: 'التدقيق الشرعي القطعي (ضوابط المعاملات الإسلامية)',
    titleEn: 'Sharia Jurisprudence Audit (No Riba, Gharar, or Jahala)',
    detail: 'استبعاد أي فوائد ربوية تأخيرية واستبدالها بالتعويض عن الضرر الفعلي المباشر',
  },
  {
    icon: 'fa-stamp',
    titleAr: 'مطابقة صيغ الشهر العقاري ونقابة المحامين والعرف القضائي',
    titleEn: 'Cross-checking Notary Models & Egyptian Bar Association Formats',
    detail: 'التأكد من جاهزية المحرر للتوثيق الرسمي وإثبات التاريخ',
  },
  {
    icon: 'fa-language',
    titleAr: 'الصياغة والترجمة القانونية المعتمدة (عربي / إنجليزي)',
    titleEn: 'Certified Mirror Legal Drafting & Translation',
    detail: 'صياغة متقابلة فقرة بفقرة وفق معايير العقود الدولية',
  },
];

const LoadingSpinner: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);

    const stepInterval = setInterval(() => {
      setActiveStepIndex((prev) => (prev < verificationSteps.length - 1 ? prev + 1 : prev));
    }, 1200);

    return () => {
      clearInterval(timer);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 md:p-8 bg-white rounded-2xl shadow-xl border border-slate-200 text-center animate-fadeIn">
      {/* Top Animated Pulse Badge */}
      <div className="relative inline-flex items-center justify-center mb-5">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center animate-pulse">
          <i className="fas fa-gavel text-2xl text-blue-700"></i>
        </div>
        <div className="absolute -inset-1 rounded-full border-2 border-blue-500/40 animate-ping pointer-events-none"></div>
      </div>

      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-1">
        جاري هندسة وتدقيق العقد ومطابقته قانونياً وشرعياً
      </h3>
      <p className="text-xs md:text-sm text-slate-500 mb-6 font-medium" style={{ direction: 'ltr' }}>
        Verifying against Egyptian statutory laws, Court of Cassation rulings, & Bar formats ({secondsElapsed}s)
      </p>

      {/* Progress Steps List */}
      <div className="space-y-3 text-right">
        {verificationSteps.map((step, idx) => {
          const isDone = idx < activeStepIndex;
          const isCurrent = idx === activeStepIndex;
          const isPending = idx > activeStepIndex;

          return (
            <div
              key={idx}
              className={`p-3 rounded-xl border transition-all duration-300 flex items-start gap-3.5 ${
                isCurrent
                  ? 'bg-blue-50/80 border-blue-400 shadow-xs scale-[1.01]'
                  : isDone
                  ? 'bg-emerald-50/50 border-emerald-200 opacity-90'
                  : 'bg-slate-50/50 border-slate-200 opacity-40'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs mt-0.5 font-bold ${
                  isDone
                    ? 'bg-emerald-600 text-white'
                    : isCurrent
                    ? 'bg-blue-600 text-white animate-bounce'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {isDone ? <i className="fas fa-check"></i> : <i className={`fas ${step.icon}`}></i>}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h4
                    className={`font-bold text-xs md:text-sm ${
                      isCurrent ? 'text-blue-950 font-black' : isDone ? 'text-emerald-950' : 'text-slate-600'
                    }`}
                  >
                    {step.titleAr}
                  </h4>
                  {isCurrent && (
                    <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold animate-pulse">
                      جاري التدقيق...
                    </span>
                  )}
                  {isDone && (
                    <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                      <i className="fas fa-check-circle"></i> تم التحقق
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">{step.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
        <i className="fas fa-bolt text-amber-500"></i>
        <span>تم تحسين المحرك ليعمل بسرعة فائقة مع ضمان فحص كافة المواقع الرسمية</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
