import React, { useState } from 'react';
import type { SubscriptionTier, PayPalVerificationReceipt } from '../types';
import PayPalCheckoutModal from './PayPalCheckoutModal';
import { calculateTierFromAmount } from '../services/paypalService';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTier: SubscriptionTier;
  creditsRemaining: number;
  onSubscribe: (tier: SubscriptionTier, addedCredits: number) => void;
}

const TESTIMONIALS = [
  {
    quote: 'المنظومة وفرت على مكتبي أكثر من 30 ساعة أسبوعياً. الصياغة العربية متطابقة مع قضاء محكمة النقض ونصوص القانون المدني، والترجمة الإنجليزية دقيقة جداً.',
    name: 'المستشار/ طارق الشناوي',
    title: 'محامٍ بالنقض ومحكم دولي — القاهرة',
  },
  {
    quote: 'تصدير ملفات Word بالترويسة والشعار الرسمي لمكتبنا أضفى احترافية عالية أمام كبار العملاء والشركات الأجنبية. استثمار يستحق كل جنيه.',
    name: 'أ/ نورهان الألفي',
    title: 'شريك رئيسي بمكتب الألفي للاستشارات القانونية — الإسكندرية',
  },
  {
    quote: 'سددت بالجنيه المصري عبر PayPal وتم تفعيل باقة المحامين PRO فوراً في ثوانٍ دون أي تعقيد، الخدمة والبنود ممتازة جداً.',
    name: 'المهندس/ وليد عبد الحميد',
    title: 'رئيس تنفيذي بشركة تكنولوجيا مالية — الجيزة',
  },
];

const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  currentTier,
  creditsRemaining,
  onSubscribe,
}) => {
  const [currency, setCurrency] = useState<'USD' | 'EGP'>('EGP'); // Default to EGP for Egyptian lawyers
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionTier | 'pay_as_you_go'>('pro');
  const [customAmount, setCustomAmount] = useState<number>(1950);
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [isPayPalModalOpen, setIsPayPalModalOpen] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'EGYPT2026' || code === 'LAUNCH50') {
      setDiscountPercent(50);
      setPromoMessage('تم تفعيل كود الخصم الحصري 50%! 🎉');
    } else if (code === 'LAWYER100') {
      setDiscountPercent(100);
      setPromoMessage('كود مجاني كامل مخصص للمحامين الشركاء! ⚖️');
    } else {
      setPromoMessage('كود الخصم غير صحيح أو منتهي الصلاحية.');
    }
  };

  // Base prices in USD and EGP
  const planPrices: Record<string, { usd: number; egp: number; nameAr: string }> = {
    pay_as_you_go: { usd: 10, egp: 500, nameAr: 'باقة شحن الرصيد الفردي' },
    starter: { usd: billingCycle === 'annual' ? 15 : 19, egp: billingCycle === 'annual' ? 750 : 950, nameAr: 'باقة المحامي الفردي' },
    pro: { usd: billingCycle === 'annual' ? 39 : 49, egp: billingCycle === 'annual' ? 1950 : 2450, nameAr: 'باقة مكاتب المحاماة PRO' },
    enterprise: { usd: billingCycle === 'annual' ? 89 : 119, egp: billingCycle === 'annual' ? 4450 : 5950, nameAr: 'باقة كبريات المكاتب والشركات الكبرى' },
  };

  // Compute final payable amount after discount
  let rawAmount = isCustomMode
    ? customAmount
    : (currency === 'EGP' ? planPrices[selectedPlan]?.egp || 1950 : planPrices[selectedPlan]?.usd || 39);

  if (discountPercent > 0) {
    rawAmount = Math.max(1, Math.round(rawAmount * (1 - discountPercent / 100)));
  }

  const finalAmount = rawAmount;
  const finalAmountUSD = currency === 'USD' ? finalAmount : Math.round((finalAmount / 50) * 100) / 100;
  const finalAmountEGP = currency === 'EGP' ? finalAmount : Math.round(finalAmount * 50);

  // Automatically determine tier based on the final payable amount
  const dynamicTierResult = calculateTierFromAmount(finalAmount, currency);

  const handlePaymentSuccess = (receipt: PayPalVerificationReceipt) => {
    setIsPayPalModalOpen(false);
    onSubscribe(receipt.assignedTier, receipt.addedCredits);
    onClose();
  };

  const handleCurrencyChange = (newCurrency: 'USD' | 'EGP') => {
    if (newCurrency === currency) return;
    if (newCurrency === 'EGP') {
      setCustomAmount(isCustomMode ? Math.round(customAmount * 50) : 1950);
    } else {
      setCustomAmount(isCustomMode ? Math.max(5, Math.round(customAmount / 50)) : 39);
    }
    setCurrency(newCurrency);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
        <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn my-6 max-h-[92vh] flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white p-6 md:p-8 relative flex-shrink-0">
            <button
              onClick={onClose}
              className="absolute top-5 left-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 mb-2">
                الدفع حصرياً عبر PayPal • بالجنيه المصري (EGP) والدولار (USD)
              </span>
              <h2 className="text-2xl md:text-3xl font-black">باقات الاشتراك وشحن رصيد العقود القانونية</h2>
              <p className="text-xs md:text-sm text-slate-300 mt-1 leading-relaxed">
                حدد الباقة أو ادخل أي مبلغ بالجنيه المصري أو الدولار، وسيقوم النظام بالتحقق منه تلقائياً وتحديد باقتك ورصيدك الممنوح فور إتمام الدفع عبر PayPal.
              </p>
            </div>

            {/* Currency and Billing Controls */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-300 font-bold">دورة الدفع:</span>
                <div className="inline-flex rounded-xl bg-white/10 p-1 border border-white/20 text-xs font-bold">
                  <button
                    onClick={() => { setBillingCycle('monthly'); setIsCustomMode(false); }}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      billingCycle === 'monthly' && !isCustomMode ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    دفع شهري
                  </button>
                  <button
                    onClick={() => { setBillingCycle('annual'); setIsCustomMode(false); }}
                    className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                      billingCycle === 'annual' && !isCustomMode ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>دفع سنوي</span>
                    <span className="text-[10px] bg-amber-400 text-slate-950 px-1 rounded-full font-black">وفر 30%</span>
                  </button>
                </div>
              </div>

              {/* Currency Toggle: EGP vs USD */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-300 font-bold">عملة السداد المفضلة:</span>
                <div className="inline-flex rounded-xl bg-white/10 p-1 border border-white/20 text-xs font-bold font-mono">
                  <button
                    onClick={() => handleCurrencyChange('EGP')}
                    className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                      currency === 'EGP' ? 'bg-amber-400 text-slate-950 font-black' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>🇪🇬 الجنيه المصري (EGP)</span>
                  </button>
                  <button
                    onClick={() => handleCurrencyChange('USD')}
                    className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                      currency === 'USD' ? 'bg-amber-400 text-slate-950 font-black' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>🌐 USD ($)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1">
            {/* Live Amount Verification & Dynamic Tier Banner */}
            <div className="p-4 bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl shadow-md border border-blue-400/30 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-sm">
                  <i className="fa-brands fa-paypal"></i>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-amber-300">
                      التحقق الذكي من المبلغ المسدد ({currency === 'EGP' ? 'بالجنيه المصري' : 'بالدولار'}) عبر PayPal:
                    </span>
                    <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.2 rounded-full font-bold">محدد تلقائياً</span>
                  </div>
                  <h3 className="text-base md:text-lg font-black mt-0.5">
                    ستحصل تلقائياً على: <span className="text-amber-400 underline decoration-amber-400">{dynamicTierResult.planNameArabic}</span>
                  </h3>
                  <p className="text-xs text-blue-200 mt-0.5">
                    الرصيد الممنوح: <strong className="text-white font-mono">{dynamicTierResult.creditsToAdd} عقد معتمد</strong> • {dynamicTierResult.descriptionArabic}
                  </p>
                </div>
              </div>

              <div className="text-center md:text-left flex-shrink-0 bg-white/10 px-4 py-2.5 rounded-2xl border border-white/20">
                <span className="text-[10px] text-slate-300 block font-bold">المبلغ المطلوب سداده:</span>
                <span className="text-2xl font-black text-amber-400 font-mono">
                  {currency === 'EGP' ? `${finalAmountEGP.toLocaleString()} ج.م` : `$${finalAmountUSD} USD`}
                </span>
                <span className="block text-[10px] text-slate-300">
                  {currency === 'EGP' ? `(ما يعادل: $${finalAmountUSD} USD عبر PayPal)` : `(ما يعادل: ${finalAmountEGP.toLocaleString()} ج.م)`}
                </span>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Plan 1: Pay-as-you-go */}
              <div
                onClick={() => { setSelectedPlan('pay_as_you_go'); setIsCustomMode(false); }}
                className={`p-5 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  selectedPlan === 'pay_as_you_go' && !isCustomMode
                    ? 'border-blue-600 bg-blue-50/40 shadow-lg ring-2 ring-blue-600/30'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    رصيد فردي
                  </span>
                  <h4 className="text-sm font-black text-slate-900 mt-2">شحن رصيد بالقطعة</h4>
                  <p className="text-[11px] text-slate-500">للأفراد والحاجة الطارئة</p>

                  <div className="my-3">
                    <span className="text-2xl font-black text-slate-900 font-mono">
                      {currency === 'EGP' ? '500 ج.م' : '$10 USD'}
                    </span>
                    <span className="text-[11px] text-slate-500"> (4 عقود)</span>
                  </div>

                  <ul className="space-y-1.5 text-[11px] text-slate-600 mb-4">
                    <li className="flex items-center gap-1.5 font-bold text-blue-900">
                      <i className="fas fa-check text-emerald-600"></i>
                      <span>4 عقود رسمية كاملة</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fas fa-check text-emerald-600"></i>
                      <span>تصدير Word و PDF فوري</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fas fa-check text-emerald-600"></i>
                      <span>صالح للاستخدام دون انتهاء</span>
                    </li>
                  </ul>
                </div>

                <div className={`p-2 rounded-xl text-center text-xs font-bold ${selectedPlan === 'pay_as_you_go' && !isCustomMode ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                  {selectedPlan === 'pay_as_you_go' && !isCustomMode ? 'الباقة المحددة' : (currency === 'EGP' ? 'اختيار (500 ج)' : 'اختيار ($10)')}
                </div>
              </div>

              {/* Plan 2: Starter */}
              <div
                onClick={() => { setSelectedPlan('starter'); setIsCustomMode(false); }}
                className={`p-5 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  selectedPlan === 'starter' && !isCustomMode
                    ? 'border-blue-600 bg-blue-50/40 shadow-lg ring-2 ring-blue-600/30'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                    للمحامين الشباب
                  </span>
                  <h4 className="text-sm font-black text-slate-900 mt-2">باقة المحامي الفردي</h4>
                  <p className="text-[11px] text-slate-500">للمكاتب الناشئة</p>

                  <div className="my-3">
                    <span className="text-2xl font-black text-blue-900 font-mono">
                      {currency === 'EGP'
                        ? (billingCycle === 'annual' ? '750 ج.م' : '950 ج.م')
                        : (billingCycle === 'annual' ? '$15' : '$19')}
                    </span>
                    <span className="text-[11px] text-slate-500"> {currency === 'EGP' ? '/شهرياً' : '/mo'}</span>
                  </div>

                  <ul className="space-y-1.5 text-[11px] text-slate-600 mb-4">
                    <li className="flex items-center gap-1.5 font-bold text-blue-900">
                      <i className="fas fa-bolt text-amber-500"></i>
                      <span>60 عقداً سنوياً (5/شهر)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fas fa-check text-emerald-600"></i>
                      <span>حفظ وأرشفة العقود سحابياً</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fas fa-check text-emerald-600"></i>
                      <span>فحص بوابة التشريعات ومحكمة النقض</span>
                    </li>
                  </ul>
                </div>

                <div className={`p-2 rounded-xl text-center text-xs font-bold ${selectedPlan === 'starter' && !isCustomMode ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                  {selectedPlan === 'starter' && !isCustomMode ? 'الباقة المحددة' : (currency === 'EGP' ? 'اختيار (750 ج)' : 'اختيار ($15)')}
                </div>
              </div>

              {/* Plan 3: Pro (Most Popular) */}
              <div
                onClick={() => { setSelectedPlan('pro'); setIsCustomMode(false); }}
                className={`p-5 rounded-3xl border-2 transition-all cursor-pointer relative flex flex-col justify-between bg-gradient-to-b from-white to-amber-50/40 ${
                  selectedPlan === 'pro' && !isCustomMode
                    ? 'border-amber-500 shadow-xl ring-2 ring-amber-500/30'
                    : 'border-amber-300 hover:border-amber-400'
                }`}
              >
                <div className="absolute -top-3 left-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[10px] px-3 py-0.5 rounded-full shadow-xs">
                  الأكثر طلباً لنقابة المحامين ⚖️
                </div>

                <div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                    مكاتب المحاماة المعتمدة
                  </span>
                  <h4 className="text-base font-black text-slate-900 mt-2">باقة المحامين PRO</h4>
                  <p className="text-[11px] text-slate-500">للمستشارين والشركات الكبرى</p>

                  <div className="my-3">
                    <span className="text-3xl font-black text-amber-700 font-mono">
                      {currency === 'EGP'
                        ? (billingCycle === 'annual' ? '1,950 ج.م' : '2,450 ج.م')
                        : (billingCycle === 'annual' ? '$39' : '$49')}
                    </span>
                    <span className="text-[11px] text-slate-500"> {currency === 'EGP' ? '/شهرياً' : '/mo'}</span>
                  </div>

                  <ul className="space-y-1.5 text-[11px] text-slate-700 mb-4">
                    <li className="flex items-center gap-1.5 font-black text-amber-950">
                      <i className="fas fa-crown text-amber-500"></i>
                      <span>300 عقد سنوياً (25/شهر)</span>
                    </li>
                    <li className="flex items-center gap-1.5 font-bold text-blue-900">
                      <i className="fas fa-stamp text-blue-600"></i>
                      <span>وضع اسم وشعار وترويسة مكتبك</span>
                    </li>
                    <li className="flex items-center gap-1.5 font-bold text-emerald-800">
                      <i className="fas fa-file-word text-emerald-600"></i>
                      <span>تصدير Word مخصص وفخم بمكتبك</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fas fa-qrcode text-indigo-600"></i>
                      <span>كود التحقق الرقمي والختم الرسمي</span>
                    </li>
                  </ul>
                </div>

                <div className={`p-2 rounded-xl text-center text-xs font-black ${selectedPlan === 'pro' && !isCustomMode ? 'bg-amber-500 text-slate-950 shadow-xs' : 'bg-amber-100 text-amber-900'}`}>
                  {selectedPlan === 'pro' && !isCustomMode ? 'الباقة المحددة' : (currency === 'EGP' ? 'اختيار باقة PRO (1,950 ج)' : 'اختيار باقة PRO ($39)')}
                </div>
              </div>

              {/* Plan 4: Enterprise */}
              <div
                onClick={() => { setSelectedPlan('enterprise'); setIsCustomMode(false); }}
                className={`p-5 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  selectedPlan === 'enterprise' && !isCustomMode
                    ? 'border-indigo-600 bg-indigo-50/40 shadow-lg ring-2 ring-indigo-600/30'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-indigo-100 text-indigo-900">
                    كبار المكاتب
                  </span>
                  <h4 className="text-sm font-black text-slate-900 mt-2">باقة Enterprise الشاملة</h4>
                  <p className="text-[11px] text-slate-500">للشركات والمكاتب الدولية</p>

                  <div className="my-3">
                    <span className="text-2xl font-black text-indigo-900 font-mono">
                      {currency === 'EGP'
                        ? (billingCycle === 'annual' ? '4,450 ج.م' : '5,950 ج.م')
                        : (billingCycle === 'annual' ? '$89' : '$119')}
                    </span>
                    <span className="text-[11px] text-slate-500"> {currency === 'EGP' ? '/شهرياً' : '/mo'}</span>
                  </div>

                  <ul className="space-y-1.5 text-[11px] text-slate-600 mb-4">
                    <li className="flex items-center gap-1.5 font-bold text-indigo-950">
                      <i className="fas fa-building text-indigo-600"></i>
                      <span>1200 عقد سنوي (غير محدود)</span>
                    </li>
                    <li className="flex items-center gap-1.5 font-bold text-emerald-800">
                      <i className="fas fa-headset text-emerald-600"></i>
                      <span>دعم فني واستشاري قانوني VIP</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fas fa-infinity text-blue-600"></i>
                      <span>أرشفة سحابية شاملة وتدقيق كامل</span>
                    </li>
                  </ul>
                </div>

                <div className={`p-2 rounded-xl text-center text-xs font-bold ${selectedPlan === 'enterprise' && !isCustomMode ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                  {selectedPlan === 'enterprise' && !isCustomMode ? 'الباقة المحددة' : (currency === 'EGP' ? 'اختيار (4,450 ج)' : 'اختيار ($89)')}
                </div>
              </div>
            </div>

            {/* Custom Amount to Pay Selector in EGP or USD */}
            <div className="p-4 bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h4 className="text-xs font-black text-slate-900 flex items-center gap-2">
                    <i className="fas fa-calculator text-blue-600"></i>
                    <span>تحديد مبلغ مخصص للدفع ({currency === 'EGP' ? 'بالجنيه المصري' : 'بالدولار'}) مع الترقية التلقائية:</span>
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    أدخل أي مبلغ ترغب بسداده وسيقوم النظام بتعيين باقتك ورصيدك بدقة بناءً على المبلغ المدفوع.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-600">المبلغ:</span>
                  <input
                    type="number"
                    min={currency === 'EGP' ? 250 : 5}
                    max={currency === 'EGP' ? 50000 : 1000}
                    step={currency === 'EGP' ? 50 : 1}
                    value={customAmount}
                    onChange={(e) => {
                      const val = Math.max(currency === 'EGP' ? 250 : 5, parseFloat(e.target.value) || 0);
                      setCustomAmount(val);
                      setIsCustomMode(true);
                    }}
                    className="w-28 p-2 bg-white border border-slate-300 rounded-xl font-mono text-center font-bold text-sm"
                  />
                  <span className="text-slate-700 font-bold">{currency === 'EGP' ? 'جنيه' : '$'}</span>
                  <button
                    onClick={() => setIsCustomMode(true)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isCustomMode ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    تطبيق المبلغ المخصص
                  </button>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="p-4 bg-slate-50 rounded-3xl border border-slate-200">
              <h4 className="text-xs font-black text-slate-900 mb-2 flex items-center gap-1.5">
                <i className="fas fa-comments text-amber-500"></i>
                <span>آراء مستشاري ومحامي المنصة المعتمدين:</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {TESTIMONIALS.map((t, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-2xl border border-slate-200 text-xs flex flex-col justify-between">
                    <p className="text-slate-700 italic mb-2 leading-relaxed">"{t.quote}"</p>
                    <div>
                      <span className="font-black text-slate-900 block">{t.name}</span>
                      <span className="text-[10px] text-slate-500 block">{t.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusive PayPal Checkout Box & Promo Code */}
            <div className="p-5 bg-gradient-to-r from-blue-50/70 via-indigo-50/70 to-blue-50/70 rounded-3xl border border-blue-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Promo Code Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">
                  هل لديك كود خصم تجاري؟
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="كود: EGYPT2026 أو LAUNCH50"
                    className="flex-1 px-3.5 py-2 text-xs bg-white border border-slate-300 rounded-xl uppercase font-mono font-bold"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
                  >
                    تطبيق
                  </button>
                </div>
                {promoMessage && (
                  <p className={`text-[11px] font-bold ${discountPercent > 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {promoMessage}
                  </p>
                )}
                <p className="text-[10px] text-slate-500">
                  * كود <span className="font-mono font-bold text-blue-900">EGYPT2026</span> يمنحك خصماً فورياً 50% على جميع الباقات.
                </p>
              </div>

              {/* PayPal Checkout Trigger Box */}
              <div className="space-y-3 p-4 bg-white rounded-2xl border border-blue-200 shadow-sm text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#003087] text-white flex items-center justify-center text-lg">
                    <i className="fa-brands fa-paypal"></i>
                  </div>
                  <div className="text-right">
                    <span className="font-black text-xs text-slate-900 block">بوابة الدفع الحصرية: PayPal العالمية</span>
                    <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                      <i className="fas fa-lock"></i>
                      <span>سداد مباشر بالجنيه المصري (EGP) والدولار (USD)</span>
                    </span>
                  </div>
                </div>

                <div className="py-2 border-y border-slate-100 flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-600">المبلغ المطلوب اعتماده:</span>
                  <div className="text-right">
                    <span className="text-xl font-black text-[#003087] font-mono">
                      {currency === 'EGP' ? `${finalAmountEGP.toLocaleString()} ج.م` : `$${finalAmountUSD} USD`}
                    </span>
                    {currency === 'EGP' && (
                      <span className="block text-[10px] text-slate-500 font-mono">
                        (ما يعادل: ${finalAmountUSD} USD عبر PayPal)
                      </span>
                    )}
                  </div>
                </div>

                {/* Primary PayPal Trigger Button */}
                <button
                  type="button"
                  onClick={() => setIsPayPalModalOpen(true)}
                  className="w-full py-3.5 bg-[#FFC439] hover:bg-[#F2BA36] active:bg-[#E1AC30] text-slate-950 font-black rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <i className="fa-brands fa-paypal text-lg text-[#003087]"></i>
                  <span>
                    {currency === 'EGP'
                      ? `متابعة الدفع عبر PayPal (${finalAmountEGP.toLocaleString()} ج.م)`
                      : `متابعة الدفع عبر PayPal ($${finalAmountUSD} USD)`}
                  </span>
                </button>

                <p className="text-[10px] text-slate-500">
                  تدعم بطاقات البنوك المصرية (Visa/Mastercard) وحسابات PayPal بجميع العملات.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive PayPal Checkout & Verification Modal */}
      <PayPalCheckoutModal
        isOpen={isPayPalModalOpen}
        onClose={() => setIsPayPalModalOpen(false)}
        targetAmount={currency === 'EGP' ? finalAmountEGP : finalAmountUSD}
        currency={currency}
        planName={dynamicTierResult.planNameArabic}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </>
  );
};

export default PricingModal;
