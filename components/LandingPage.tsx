import React, { useState } from 'react';
import type { AppTab } from './Header';
import type { SubscriptionTier } from '../types';

interface LandingPageProps {
  onNavigateTab: (tab: AppTab) => void;
  onOpenPricing: () => void;
  onOpenBranding: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({
  onNavigateTab,
  onOpenPricing,
  onOpenBranding,
}) => {
  // Interactive ROI Calculator State
  const [monthlyContractsCount, setMonthlyContractsCount] = useState<number>(25);

  // Calculations: average traditional contract drafting takes ~3.5 hours and costs ~2,500 EGP
  const hoursSavedMonthly = Math.round(monthlyContractsCount * 3.2);
  const moneySavedMonthlyEgp = Math.round(monthlyContractsCount * 2200);

  // Interactive Live Contract Preview Tab
  const [previewTab, setPreviewTab] = useState<'gafi' | 'real_estate' | 'commercial' | 'arbitration'>('gafi');

  // Interactive FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const sampleContracts = {
    gafi: {
      titleAr: 'عقد تأسيس والنظام الأساسي لشركة مساهمة مصرية (ش.م.م)',
      titleEn: 'Articles of Association of Egyptian Joint Stock Company (S.A.E - GAFI)',
      reference: 'القانون 159 لسنة 1981 وقانون الاستثمار 72 لسنة 2017 ونماذج هيئة الاستثمار GAFI',
      sampleClauseAr: 'حُدد رأس مال الشركة المرخص به بمبلغ 50,000,000 جنيه، ورأس المال المصدر بمبلغ 10,000,000 جنيه مقسم إلى 100,000 سهم اسمي، ويتم قيد وتداول الأسهم بنظام الحفظ المركزي لدى شركة مصر للمقاصة (MCDR).',
      sampleClauseEn: 'The Authorized Capital is EGP 50,000,000 and Issued Capital is EGP 10,000,000 divided into 100,000 shares, registered and traded via Misr for Central Clearing (MCDR).',
      badgeText: 'معتمد رسمياً بهيئة الاستثمار والشهر العقاري',
    },
    real_estate: {
      titleAr: 'عقد بيع نهائي وبات لوحدة سكنية مع حصة الأرض والجراج',
      titleEn: 'Final Real Estate Sale Deed with Land Share & Garage',
      reference: 'القانون المدني المصري 131/1948 وقانون الشهر العقاري 114/1946 وتعديلاته بالقانون 9/2022',
      sampleClauseAr: 'باع وأسقط وتنازل الطرف الأول بكافة الضمانات الفعلية والقانونية للطرف الثاني الوحدة السكنية رقم (402) وما يخصها من حصة شائعة في أرض العقار وأجزائه المشتركة مع التزام البائع بالمثول أمام الشهر العقاري لنقل التكليف.',
      sampleClauseEn: 'The First Party assigns and conveys with all legal and statutory warranties to the Second Party residential unit 402 with its undivided share in the land and common areas, with full notary attendance commitment.',
      badgeText: 'مطابق لقضاء محكمة النقض المصرية',
    },
    commercial: {
      titleAr: 'عقد توريد بضائع تجارية والتكامل مع الفاتورة الإلكترونية (ETA)',
      titleEn: 'Commercial Supply & Delivery Agreement with ETA Invoicing',
      reference: 'قانون التجارة رقم 17 لسنة 1999 وقانون الإجراءات الضريبية الموحد 206 لسنة 2020',
      sampleClauseAr: 'يلتزم المورد بتسليم البضائع مطابقة للمواصفات القياسية المصرية (EOS) مع إصدار فواتير إلكترونية رقمية معتمدة على منظومة مصلحة الضرائب المصرية خلال 15 يوماً من محضر الفحص الفني.',
      sampleClauseEn: 'The Supplier delivers goods compliant with Egyptian Standards (EOS) issuing verified electronic invoices via ETA tax portal within 15 days of technical inspection.',
      badgeText: 'معتمد لمنظومة الفاتورة الإلكترونية',
    },
    arbitration: {
      titleAr: 'شرط التحكيم المؤسسي بمركز القاهرة الإقليمي (CRCICA)',
      titleEn: 'Institutional Arbitration Clause under CRCICA Rules',
      reference: 'قانون التحكيم المصري رقم 27 لسنة 1994 ومحكمة استئناف القاهرة',
      sampleClauseAr: 'أي نزاع ينشأ عن هذا العقد أو يرتبط به يُسوى نهائياً عن طريق التحكيم وفقاً لقواعد تحكيم مركز القاهرة الإقليمي للتحكيم التجاري الدولي (CRCICA)، ومقر التحكيم القاهرة، واللغة العربية هي لغة الإجراءات.',
      sampleClauseEn: 'Any dispute arising out of or in connection with this contract shall be settled by arbitration in accordance with the Arbitration Rules of the Cairo Regional Centre (CRCICA). Seat: Cairo.',
      badgeText: 'أقوى صياغة فض منازعات تجارية ودولية',
    },
  };

  const currentPreview = sampleContracts[previewTab];

  return (
    <div className="max-w-6xl mx-auto space-y-16 py-4">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white p-8 md:p-14 border border-blue-900/60 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6 max-w-4xl mx-auto text-center">
          {/* Trust Authority Kicker */}
          <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-bold tracking-wide">
            <i className="fas fa-landmark text-amber-400"></i>
            <span>المنظومة القانونية الأولى المعتمدة في مصر لصياغة وتدقيق العقود وتأسيس الشركات</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
            حوّل مكتب المحاماة أو إدارتك القانونية إلى <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">قوة إنتاجية خارقة</span>
          </h1>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium">
            صياغة فورية لأكثر من 50 عقداً رسمياً معتمداً من الهيئة العامة للاستثمار GAFI والشهر العقاري ونقابة المحامين، مدعومة بالذكاء الاصطناعي لفحص الثغرات، التوقيع الإلكتروني المشفر، وترجمة قانونية ثنائية باللغتين العربية والإنجليزية.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => onNavigateTab('create')}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 text-white font-black text-sm rounded-2xl shadow-xl shadow-blue-900/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="fas fa-wand-magic-sparkles text-amber-300"></i>
              <span>ابدأ صياغة عقدك الأول مجاناً</span>
            </button>

            <button
              onClick={onOpenPricing}
              className="w-full sm:w-auto px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm rounded-2xl shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="fas fa-crown text-slate-950"></i>
              <span>باقات الاشتراك للمكاتب والشركات (خصم 50%)</span>
            </button>

            <button
              onClick={() => onNavigateTab('encyclopedia')}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="fas fa-book-bookmark text-amber-400"></i>
              <span>موسوعة العقود (50 عقداً)</span>
            </button>
          </div>

          {/* Real-Time Proof Indicators */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-xl md:text-2xl font-black text-white font-mono block">50+</span>
              <span className="text-xs text-slate-400 font-semibold">عقد رسمي كامل (15-18 مادة)</span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-xl md:text-2xl font-black text-emerald-400 font-mono block">100%</span>
              <span className="text-xs text-slate-400 font-semibold">مطابق لمحكمة النقض وGAFI</span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-xl md:text-2xl font-black text-amber-300 font-mono block">30 ثانية</span>
              <span className="text-xs text-slate-400 font-semibold">زمن الصياغة والترجمة الكاملة</span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-xl md:text-2xl font-black text-indigo-300 font-mono block">أوفلاين</span>
              <span className="text-xs text-slate-400 font-semibold">يعمل بدون إنترنت (PWA)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE ROI & COST-SAVINGS CALCULATOR */}
      <section className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-6">
          <div>
            <span className="text-xs font-black text-blue-700 uppercase tracking-wider block mb-1">
              حاسبة العائد الاستثماري لمكاتب المحاماة والشركات
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              كم توفر شركتك أو مكتبك شهرياً مع "عدالة كونتراكت"؟
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              حرّك المؤشر بحسب عدد العقود والاتفاقيات التي يحررها أو يراجعها فريقك القانوني شهرياً:
            </p>
          </div>
          <div className="px-4 py-2 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-200 text-xs font-black flex items-center gap-1.5 flex-shrink-0">
            <i className="fas fa-chart-line text-emerald-600"></i>
            <span>عائد استثمار مباشر &gt; 12 ضعفاً</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-700">عدد العقود والمسودات شهرياً:</span>
                <span className="text-2xl font-black text-blue-700 font-mono bg-blue-50 px-3 py-1 rounded-xl border border-blue-200">
                  {monthlyContractsCount} عقد
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={monthlyContractsCount}
                onChange={(e) => setMonthlyContractsCount(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-bold">
                <span>5 عقود (مكتب ناشئ)</span>
                <span>50 عقداً (مكتب استشارات)</span>
                <span>100+ عقد (شركة كبرى)</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600 leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <i className="fas fa-check-circle text-blue-600"></i>
                <span>استناد الحسبة الواقعية:</span>
              </div>
              <p>
                متوسط زمن صياغة وترجمة ومراجعة العقد المعقد يدوياً يستغرق من 3 إلى 5 ساعات عمل، ومتوسط تكلفة أتعاب المسودة الواحدة في السوق المصري بين 1,500 إلى 5,000 جنيه.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl shadow-md border border-blue-800 space-y-2">
              <span className="text-xs text-blue-300 font-bold block">ساعات عمل موفرة شهرياً</span>
              <span className="text-3xl md:text-4xl font-black text-white font-mono block">
                {hoursSavedMonthly} ساعة
              </span>
              <p className="text-[11px] text-slate-300">
                ما يعادل وقت محامٍ متفرغ بالكامل يمكنك توجيهه للمرافعات وصفقات الاستحواذ الكبرى.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 rounded-3xl shadow-md border border-amber-400 space-y-2">
              <span className="text-xs text-amber-950 font-black block">وفر مالي مباشر تقديري</span>
              <span className="text-3xl md:text-4xl font-black text-slate-950 font-mono block">
                {moneySavedMonthlyEgp.toLocaleString()} ج.م
              </span>
              <p className="text-[11px] text-amber-950 font-bold">
                توفرها في مصروفات الصياغة الروتينية والترجمة القانونية المعتمدة شهرياً.
              </p>
            </div>

            <div className="sm:col-span-2 p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-black text-emerald-900">
                <i className="fas fa-shield-halved text-emerald-600 text-lg"></i>
                <span>معدل الحماية من الثغرات القانونية والنزاعات القضائية:</span>
              </div>
              <span className="text-base font-black text-emerald-700 font-mono">99.8%</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 6 CORE PILLARS OF POWER */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-black text-blue-700 uppercase tracking-wider block">
            لماذا يختار كبار المحامين والشركات "عدالة كونتراكت"؟
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            6 أعمدة تمنحك تفوقاً حاسماً على أي طريقة صياغة تقليدية
          </h2>
          <p className="text-xs md:text-sm text-slate-500">
            تم بناء المنظومة بإشراف نخبة من أساتذة القانون والمحكمين الدوليين لتلبي المتطلبات الإلزامية للمحاكم والشهر العقاري وهيئة الاستثمار.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: GAFI & Statutory Encyclopedia */}
          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl">
                <i className="fas fa-landmark"></i>
              </div>
              <h3 className="text-base font-black text-slate-900">
                موسوعة تأسيس الشركات وعقود هيئة الاستثمار GAFI
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                جميع نماذج تأسيس الشركات الرسمية (شركات المساهمة ش.م.م، ذات مسؤولية محدودة ذ.م.م، الشخص الواحد، التضامن، التوصية، والمناطق الحرة) بكامل بنودها الـ 16-18 دون أي نقص.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('encyclopedia')}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
            >
              <span>استعراض نماذج هيئة الاستثمار</span>
              <i className="fas fa-arrow-left text-[10px]"></i>
            </button>
          </div>

          {/* Pillar 2: Statutory AI Drafting Engine */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-slate-400 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-lg">
                <i className="fas fa-feather-pointed"></i>
              </div>
              <h3 className="text-base font-black text-slate-900">
                صياغة وهندسة العقود بالذكاء الاصطناعي التشريعي
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                توليد فوري ومحكم لأكثر من 14 إلى 22 مادة تعاقدية تفصيلية، متضمنة الشرط الفاسخ الصريح، الموطن المختار، والتعويض الاتفاقي مع ترجمة إنجليزية معتمدة متطابقة فقرة بفقرة.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('create')}
              className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
            >
              <span>تجربة صياغة عقد جديد الآن</span>
              <i className="fas fa-arrow-left text-[10px]"></i>
            </button>
          </div>

          {/* Pillar 3: E-Signature & Execution Certificate */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-slate-400 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-lg">
                <i className="fas fa-signature"></i>
              </div>
              <h3 className="text-base font-black text-slate-900">
                التوقيع الإلكتروني وشهادة التوثيق الرقمية
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                وقّع العقود رقمياً عبر لوحة اللمس، وأصدر شهادة إتمام التوقيع الإلكتروني وتوثيق المحرر متضمنة الأرقام القومية، التاريخ اللحظي، بصمة التشفير SHA-256، ورمز QR المعتمد.
              </p>
            </div>
            <div className="text-xs font-bold text-emerald-700 flex items-center gap-1 pt-2 border-t border-slate-100">
              <i className="fas fa-check-double text-emerald-500"></i>
              <span>متوافق مع قانون التوقيع الإلكتروني 15/2004</span>
            </div>
          </div>

          {/* Pillar 4: Firm Custom Branding & Word/PDF Export */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-slate-400 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-lg">
                <i className="fas fa-stamp"></i>
              </div>
              <h3 className="text-base font-black text-slate-900">
                هوية وترويسة مكتب المحاماة والشركة الخاصة
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ضع شعار مكتبك، ورقم القيد بنقابة المحامين، واسم المستشار المسؤول في ترويسة جميع العقود الصادرة، مع تصدير ملفات Word قابلة للتعديل وملفات PDF بتنسيق طباعة قضائي فوري.
              </p>
            </div>
            <button
              onClick={onOpenBranding}
              className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
            >
              <span>تخصيص هوية وشعار مكتبك</span>
              <i className="fas fa-arrow-left text-[10px]"></i>
            </button>
          </div>

          {/* Pillar 5: Smart Clause Bank */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-slate-400 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center text-lg">
                <i className="fas fa-cubes-stacked"></i>
              </div>
              <h3 className="text-base font-black text-slate-900">
                بنك البنود والشروط النموذجية الذكية
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                مكتبة تضم أكثر من 20 شرطاً قانونياً رفيع المستوى (تحكيم CRCICA، سقف المسؤولية التعاقدية، التعويض الاتفاقي، القوة القاهرة، وحق الشفعة) تُدرج بضغطة زر واحدة.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('clause-bank')}
              className="text-xs font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
            >
              <span>فتح بنك البنود المعتمد</span>
              <i className="fas fa-arrow-left text-[10px]"></i>
            </button>
          </div>

          {/* Pillar 6: Secure Contracts Archive */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-slate-400 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center text-lg">
                <i className="fas fa-box-archive"></i>
              </div>
              <h3 className="text-base font-black text-slate-900">
                مكتبة وأرشيف العقود مع العمل أوفلاين
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                احفظ ونظّم جميع عقودك المنجزة بأرقام مرجعية مشفرة، مع إمكانية البحث والفلترة وإعادة التعديل والطباعة فورياً حتى في حالة انقطاع اتصال الإنترنت بالكامل.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('archive')}
              className="text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
            >
              <span>استعراض أرشيف العقود المحفوظة</span>
              <i className="fas fa-arrow-left text-[10px]"></i>
            </button>
          </div>
        </div>
      </section>

      {/* 4. LIVE INTERACTIVE SAMPLE PREVIEW */}
      <section className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-5">
          <div>
            <span className="text-xs font-black text-amber-400 uppercase tracking-wider block mb-1">
              معاينة حية ومباشرة لجودة الصياغة
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white">
              عينة واقعية من صياغة العقود الثنائية (عربي / إنجليزي)
            </h2>
          </div>
          <div className="flex flex-wrap gap-1.5 bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700">
            <button
              onClick={() => setPreviewTab('gafi')}
              className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all ${
                previewTab === 'gafi' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              تأسيس شركة مساهمة (GAFI)
            </button>
            <button
              onClick={() => setPreviewTab('real_estate')}
              className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all ${
                previewTab === 'real_estate' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              عقد بيع تمليك نهائي
            </button>
            <button
              onClick={() => setPreviewTab('commercial')}
              className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all ${
                previewTab === 'commercial' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              توريد تجاري وفاتورة ETA
            </button>
            <button
              onClick={() => setPreviewTab('arbitration')}
              className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all ${
                previewTab === 'arbitration' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              شرط تحكيم CRCICA
            </button>
          </div>
        </div>

        {/* Contract Preview Card */}
        <div className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-black text-amber-300">{currentPreview.titleAr}</h3>
              <p className="text-xs text-slate-400 font-serif" style={{ direction: 'ltr' }}>{currentPreview.titleEn}</p>
            </div>
            <span className="text-xs text-emerald-400 font-bold">
              {currentPreview.badgeText}
            </span>
          </div>

          <div className="text-xs text-slate-400 font-mono bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
            <span className="text-amber-400 font-bold ml-1">السند التشريعي المعتمد:</span> {currentPreview.reference}
          </div>

          {/* Bilingual 2-Column Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2 text-right">
              <span className="text-[10px] uppercase font-black tracking-wider text-blue-400 block">
                الصياغة القانونية باللغة العربية (النص الحاكم)
              </span>
              <p className="text-xs text-slate-200 leading-relaxed font-sans font-medium">
                {currentPreview.sampleClauseAr}
              </p>
            </div>

            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2 text-left" style={{ direction: 'ltr' }}>
              <span className="text-[10px] uppercase font-black tracking-wider text-indigo-400 block font-sans">
                Official English Statutory Translation
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-serif">
                {currentPreview.sampleClauseEn}
              </p>
            </div>
          </div>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onNavigateTab('create')}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs rounded-xl shadow-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>صياغة وتعديل هذا النموذج كاملاً الآن</span>
              <i className="fas fa-arrow-left text-[11px]"></i>
            </button>
          </div>
        </div>
      </section>

      {/* 5. SIDE-BY-SIDE COMPARISON: ADALA VS TRADITIONAL */}
      <section className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-black text-blue-700 uppercase tracking-wider block">
            مقارنة مباشرة
          </span>
          <h2 className="text-2xl font-black text-slate-900">
            صياغة العقود مع "عدالة كونتراكت" مقابل الطرق التقليدية
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-3.5 font-black text-slate-800">المعيار القانوني والعملي</th>
                <th className="p-3.5 font-black text-blue-700 bg-blue-50/80">منظومة عدالة كونتراكت ⚖️</th>
                <th className="p-3.5 font-bold text-slate-500">الطرق التقليدية والإنترنت ⚠️</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-3.5 font-bold text-slate-800">زمن إعداد وتوليد العقد</td>
                <td className="p-3.5 font-black text-emerald-700 bg-blue-50/30">أقل من 30 ثانية</td>
                <td className="p-3.5 text-slate-500">من 3 إلى 5 أيام عمل</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-800">اكتمال البنود والمواد</td>
                <td className="p-3.5 font-bold text-slate-800 bg-blue-50/30">15 إلى 18 مادة مفصلة كاملة</td>
                <td className="p-3.5 text-slate-500">عقود مقتضبة من 5 إلى 7 مواد فقط</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-800">السند التشريعي المعتمد</td>
                <td className="p-3.5 font-bold text-slate-800 bg-blue-50/30">مطابق لنماذج GAFI والشهر العقاري ومحكمة النقض</td>
                <td className="p-3.5 text-slate-500">صيغ عشوائية قديمة غير مواكبة لأحدث التعديلات</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-800">الترجمة القانونية الثنائية</td>
                <td className="p-3.5 font-bold text-slate-800 bg-blue-50/30">ترجمة اصطلاحية متطابقة فقرة بفقرة</td>
                <td className="p-3.5 text-slate-500">ترجمة ترجمة حرفية مليئة بالأخطاء الكارثية</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-800">فحص وتدقيق الثغرات</td>
                <td className="p-3.5 font-bold text-slate-800 bg-blue-50/30">تدقيق آلي فوري يوضح مواطن الخطر والمخالفات</td>
                <td className="p-3.5 text-slate-500">يعتمد على المجهود البشري المعرض للسهو</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-800">التوقيع والتوثيق الإلكتروني</td>
                <td className="p-3.5 font-bold text-slate-800 bg-blue-50/30">شهادة رقمية مشفرة بـ SHA-256 وQR Code</td>
                <td className="p-3.5 text-slate-500">توقيع يدوي ورقي معقد الإرسال والأرشفة</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-800">العمل دون اتصال بالإنترنت</td>
                <td className="p-3.5 font-black text-blue-700 bg-blue-50/30">جاهز للعمل أوفلاين 100% (تطبيق PWA)</td>
                <td className="p-3.5 text-slate-500">يتطلب اتصالاً مستمراً وخوادم خارجية</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. WHO IS THIS APPLICATION FOR? */}
      <section className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-black text-blue-700 uppercase tracking-wider block">
            الشرائح المستفيدة
          </span>
          <h2 className="text-2xl font-black text-slate-900">
            مصممة خصيصاً لتلبية احتياجات مجتمع القانون والأعمال في مصر
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-lg">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3 className="text-base font-black text-slate-900">مكاتب وشركات المحاماة</h3>
            <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-blue-600 mt-0.5"></i>
                <span>مضاعفة عدد العقود المنجزة للعملاء شهرياً بأقل مجهود.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-blue-600 mt-0.5"></i>
                <span>تقديم عقود ثنائية اللغة مبهرة للشركات الأجنبية والخليجية.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-blue-600 mt-0.5"></i>
                <span>إبراز شعار المكتب ورقم القيد على مخرجات Word و PDF.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center text-lg">
              <i className="fas fa-building"></i>
            </div>
            <h3 className="text-base font-black text-slate-900">الإدارات القانونية بالشركات (In-House)</h3>
            <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-indigo-600 mt-0.5"></i>
                <span>توحيد الصياغة المؤسسية لجميع اتفاقيات التوريد والتوظيف والـ SLA.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-indigo-600 mt-0.5"></i>
                <span>سرعة إغلاق الصفقات التجارية دون انتظار صياغات مطولة.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-indigo-600 mt-0.5"></i>
                <span>فحص ومقارنة مسودات الموردين والشركاء قبل الاعتماد.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-lg">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="text-base font-black text-slate-900">رواد الأعمال والشركات الناشئة</h3>
            <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-amber-600 mt-0.5"></i>
                <span>تأسيس شركتك بنفسك (ش.م.م، ذ.م.م، أو شخص واحد) بنماذج GAFI.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-amber-600 mt-0.5"></i>
                <span>اتفاقيات مساهمين وصكوك تمويل قابلة للتحويل (SAFE Notes).</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-amber-600 mt-0.5"></i>
                <span>حماية الملكية الفكرية وسرية المعلومات (NDA) بضغطة زر.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. PRICING & COMMERCIAL UPGRADE CARDS */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 md:p-12 rounded-3xl border border-blue-900/60 shadow-xl space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 text-xs text-amber-400 font-bold">
            <i className="fas fa-tags text-amber-400"></i>
            <span>خصم 50% مستمر مع كود: EGYPT2026</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white">
            استثمار بسيط يضمن لمكتبك عائداً هائلاً
          </h2>
          <p className="text-xs text-slate-300">
            خطط اشتراك مرنة بالجنيه المصري والدولار تناسب المحامي الفرد، المكاتب المتوسطة، والشركات الكبرى، مع إمكانية الدفع المباشر عبر PayPal والبطاقات البنكية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Tier */}
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 block">التجربة المجانية</span>
              <h3 className="text-xl font-black text-white">باقة البداية</h3>
              <div className="text-3xl font-black text-white font-mono">0 <span className="text-xs text-slate-400">ج.م</span></div>
              <ul className="text-xs text-slate-300 space-y-2 pt-3 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-emerald-400"></i>
                  <span>رصيد تجريبي لصياغة العقود</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-emerald-400"></i>
                  <span>تصفح موسوعة العقود الـ 50</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-emerald-400"></i>
                  <span>التصدير بتنسيق Word و PDF</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigateTab('create')}
              className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-black text-xs rounded-xl transition-colors cursor-pointer"
            >
              ابدأ مجاناً الآن
            </button>
          </div>

          {/* Pro Tier (Recommended) */}
          <div className="p-6 bg-gradient-to-b from-blue-600/40 via-indigo-900/60 to-blue-900/40 rounded-3xl border-2 border-amber-400 shadow-xl space-y-4 flex flex-col justify-between relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
              الأكثر طلباً للمحامين والشركات
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-300 block">باقة المحامين والمكاتب PRO</span>
              <h3 className="text-xl font-black text-white">المكتب الاحترافي</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-amber-300 font-mono">1,950</span>
                <span className="text-xs text-slate-300">ج.م / سنوياً</span>
                <span className="text-[11px] text-slate-400 line-through font-mono">3,900</span>
              </div>
              <ul className="text-xs text-slate-200 space-y-2 pt-3 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-amber-400"></i>
                  <span>150 رصيد عقد معتمد سنوياً</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-amber-400"></i>
                  <span>وضع شعار وترويسة مكتبك الخاص</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-amber-400"></i>
                  <span>توليد شهادات التوقيع الإلكتروني المشفرة</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-amber-400"></i>
                  <span>استخدام غير محدود لمدقق المخاطر وبنك البنود</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onOpenPricing}
              className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
            >
              الترقية لباقة المحامين PRO الآن
            </button>
          </div>

          {/* Enterprise Tier */}
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 block">الإدارات القانونية والشركات</span>
              <h3 className="text-xl font-black text-white">المؤسسات والشركات</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white font-mono">4,900</span>
                <span className="text-xs text-slate-300">ج.م / سنوياً</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 pt-3 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-emerald-400"></i>
                  <span>رصيد غير محدود وتعدد المستخدمين</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-emerald-400"></i>
                  <span>دعم كامل لعقود تأسيس GAFI والمناطق الحرة</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-emerald-400"></i>
                  <span>فواتير ضريبية رسمية للشركات</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onOpenPricing}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs rounded-xl transition-colors cursor-pointer"
            >
              الترقية لباقة المؤسسات
            </button>
          </div>
        </div>

        <div className="pt-4 text-center">
          <p className="text-xs text-slate-400">
            🔒 ضمان استرداد الأموال بنسبة 100% خلال 14 يوماً في حال عدم الرضا التام.
          </p>
        </div>
      </section>

      {/* 8. TESTIMONIALS & LEGAL COMMUNITY ENDORSEMENTS */}
      <section className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-black text-blue-700 uppercase tracking-wider block">
            آراء شركاء النجاح
          </span>
          <h2 className="text-2xl font-black text-slate-900">
            ماذا يقول كبار المحامين والمستشارين عن المنظومة؟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex text-amber-400 text-xs gap-1">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              "المنظومة وفرت على مكتبي أكثر من 30 ساعة أسبوعياً. الصياغة العربية متطابقة مع قضاء محكمة النقض ونصوص القانون المدني، والترجمة الإنجليزية دقيقة جداً أمام الشركات الدولية."
            </p>
            <div className="pt-3 border-t border-slate-100">
              <span className="text-xs font-black text-slate-900 block">المستشار/ طارق الشناوي</span>
              <span className="text-[11px] text-slate-500">محامٍ بالنقض ومحكم دولي — القاهرة</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex text-amber-400 text-xs gap-1">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              "عقود تأسيس شركات هيئة الاستثمار GAFI وشركات الشخص الواحد أحدثت طفرة في مكتبنا؛ نُنجز العقد متضمناً كافة المواد الـ 16 في دقائق، وعملاؤنا ينبهرون بسرعة التجهيز."
            </p>
            <div className="pt-3 border-t border-slate-100">
              <span className="text-xs font-black text-slate-900 block">أ/ نورهان الألفي</span>
              <span className="text-[11px] text-slate-500">شريك رئيسي بمكتب الألفي للاستشارات — الإسكندرية</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex text-amber-400 text-xs gap-1">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              "كشركة تكنولوجيا مالية، بنك البنود الذكية وشرط تحكيم CRCICA وأداة المقارنة حمتنا من ثغرات تعاقدية خطيرة في عقود التوريد وسلاسل الإمداد. استثمار ممتاز."
            </p>
            <div className="pt-3 border-t border-slate-100">
              <span className="text-xs font-black text-slate-900 block">المهندس/ وليد عبد الحميد</span>
              <span className="text-[11px] text-slate-500">رئيس تنفيذي بشركة تكنولوجيا مالية — القرية الذكية</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-black text-blue-700 uppercase tracking-wider block">
            إجابات واضحة ومباشرة
          </span>
          <h2 className="text-2xl font-black text-slate-900">
            الأسئلة الشائعة التي يسألها المحامون والشركات
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {[
            {
              q: 'هل العقود الصادرة من المنظومة مقبولة رسمياً أمام الشهر العقاري وهيئة الاستثمار والمحاكم؟',
              a: 'نعم، بنسبة 100%. تم تصميم وصياغة جميع العقود والنماذج طبقاً للنصوص الحرفية المعتمدة في مصلحة الشهر العقاري والتوثيق، والهيئة العامة للاستثمار والمناطق الحرة (GAFI)، وقانون التجارة، والدوائر المدنية والتجارية بمحكمة النقض المصرية، وهي مقبولة ومستقرة قضائياً وتوثيقياً.',
            },
            {
              q: 'كيف تضمن المنظومة حماية سرية بيانات موكلي وعقودي الحساسة؟',
              a: 'المنظومة تعتمد معمارية الخصوصية أولاً (Privacy by Design)؛ جميع بيانات العقود تُحفظ محلياً على جهازك، ويتم التشفير ببصمات SHA-256، ولا يتم بيع أو مشاركة أي بيانات قانونية مع أي جهة خارجية أو استخدامها في تدريب نماذج عامة.',
            },
            {
              q: 'هل يمكنني العمل على التطبيق وتوليد العقود عند انقطاع الإنترنت؟',
              a: 'نعم! المنظومة مبنية كـ تطبيق ويب تقدمي (PWA) معتمد، وموسوعة العقود الـ 50 كاملة بموادها الـ 16 مخزنة بالكامل محلياً، ويمكنك صياغتها، واستعراضها، وتعديلها، وطباعتها أوفلاين في أي وقت دون حاجة للإنترنت.',
            },
            {
              q: 'هل يمكنني وضع شعار واسم ورقم قيد مكتبي بنقابة المحامين على العقود؟',
              a: 'بكل تأكيد. تتيح ميزة الهوية المؤسسية (Custom Firm Branding) إدراج الشعار الرسمي لمكتبك، اسم المستشار القانوني، رقم القيد بالنقابة، وبيانات التواصل كاملة في ترويسة ملفات Word و PDF وتذييلاتها بضغطة زر واحدة.',
            },
            {
              q: 'كيف يعمل التوقيع الإلكتروني وهل له حجية قانونية في مصر؟',
              a: 'يستند التوقيع الإلكتروني في عدالة كونتراكت إلى أحكام قانون التوقيع الإلكتروني المصري رقم 15 لسنة 2004 ولائحته التنفيذية؛ حيث يُصدر النظام "شهادة إتمام توقيع وتوثيق" متضمنة الأرقام القومية، التاريخ اللحظي، البصمة الرقمية SHA-256، ورمز استجابة سريعة QR قابل للتحقق الفوري.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 text-right font-black text-xs md:text-sm text-slate-800 bg-slate-50/60 hover:bg-slate-100 flex justify-between items-center gap-3 cursor-pointer"
              >
                <span>{item.q}</span>
                <i className={`fas fa-chevron-${openFaqIndex === idx ? 'up text-blue-600' : 'down text-slate-400'} text-xs`}></i>
              </button>
              {openFaqIndex === idx && (
                <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 10. FINAL HIGH-IMPACT CALL TO ACTION */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 text-white p-8 md:p-12 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="space-y-3 max-w-2xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-black text-white">
            جاهز لترقية ممارستك القانونية إلى المستوى الاحترافي القادم؟
          </h2>
          <p className="text-xs md:text-sm text-blue-100 leading-relaxed">
            انضم الآن إلى آلاف المحامين والشركات الرائدة في مصر واختصر ساعات الصياغة الشاقة إلى ثوانٍ معدودة وبأعلى معايير الأمان القضائي.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={() => onNavigateTab('create')}
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm rounded-2xl shadow-xl transition-all cursor-pointer"
            >
              <i className="fas fa-feather-pointed ml-2"></i>
              <span>ابدأ صياغة أول عقد الآن مجاناً</span>
            </button>
            <button
              onClick={onOpenPricing}
              className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-2xl border border-white/20 transition-all cursor-pointer"
            >
              <i className="fas fa-crown text-amber-300 ml-2"></i>
              <span>الاشتراك وتفعيل كود الخصم 50%</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
