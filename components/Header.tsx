import React from 'react';
import type { UserAccount } from '../types';

export type AppTab = 'landing' | 'create' | 'encyclopedia' | 'clause-bank' | 'archive';

interface HeaderProps {
  currentTab: AppTab;
  onNavigateTab: (tab: AppTab) => void;
  savedContractsCount: number;
  user: UserAccount;
  onOpenPricing: () => void;
  onOpenBranding: () => void;
  onOpenDisclaimer: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigateTab,
  savedContractsCount,
  user,
  onOpenPricing,
  onOpenBranding,
  onOpenDisclaimer,
}) => {
  return (
    <header className="bg-slate-950 text-slate-100 border-b border-slate-800/80 sticky top-0 z-40 print:hidden shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-3">
        {/* Brand & Slogan */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div
            onClick={() => onNavigateTab('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center text-base font-black shadow-sm group-hover:scale-105 transition-transform">
              <i className="fas fa-scale-balanced"></i>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-black tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  عدالة كونتراكت
                </span>
                <span className="text-[10px] text-amber-400 font-bold tracking-wider">
                  منظومة الصياغة والتوثيق
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-tight" style={{ direction: 'ltr' }}>
                Egyptian Certified Legal Drafting System
              </p>
            </div>
          </div>

          {/* Mobile Quick Action for Pricing */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenPricing}
              className="text-xs bg-amber-500/15 text-amber-300 font-bold px-2.5 py-1 rounded-lg border border-amber-500/30 flex items-center gap-1 cursor-pointer"
            >
              <i className="fas fa-coins text-[10px]"></i>
              <span>{user.creditsRemaining} عقد</span>
            </button>
          </div>
        </div>

        {/* Central Segmented Navigation */}
        <nav className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-bold gap-1 overflow-x-auto max-w-full">
          <button
            onClick={() => onNavigateTab('landing')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              currentTab === 'landing'
                ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <i className={`fas fa-compass text-xs ${currentTab === 'landing' ? 'text-slate-950' : 'text-amber-400'}`}></i>
            <span>الرئيسية والمزايا</span>
          </button>

          <button
            onClick={() => onNavigateTab('create')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              currentTab === 'create'
                ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <i className={`fas fa-feather-pointed text-xs ${currentTab === 'create' ? 'text-slate-950' : 'text-blue-400'}`}></i>
            <span>صياغة وتوليد عقد</span>
          </button>

          <button
            onClick={() => onNavigateTab('encyclopedia')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              currentTab === 'encyclopedia'
                ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <i className={`fas fa-landmark text-xs ${currentTab === 'encyclopedia' ? 'text-slate-950' : 'text-amber-400'}`}></i>
            <span>الموسوعة الرسمية</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-black ${currentTab === 'encyclopedia' ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-amber-300'}`}>
              50
            </span>
          </button>

          <button
            onClick={() => onNavigateTab('clause-bank')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              currentTab === 'clause-bank'
                ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <i className={`fas fa-cubes-stacked text-xs ${currentTab === 'clause-bank' ? 'text-slate-950' : 'text-emerald-400'}`}></i>
            <span>بنك الشروط</span>
          </button>

          <button
            onClick={() => onNavigateTab('archive')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              currentTab === 'archive'
                ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <i className={`fas fa-box-archive text-xs ${currentTab === 'archive' ? 'text-slate-950' : 'text-slate-400'}`}></i>
            <span>الأرشيف</span>
            {savedContractsCount > 0 && (
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-black ${currentTab === 'archive' ? 'bg-slate-950 text-amber-400' : 'bg-blue-600 text-white'}`}>
                {savedContractsCount}
              </span>
            )}
          </button>
        </nav>

        {/* User Account, Branding & Pricing Controls */}
        <div className="flex items-center gap-2">
          {/* Law Firm Branding Trigger */}
          <button
            onClick={onOpenBranding}
            className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold transition-all border border-slate-800 flex items-center gap-1.5 cursor-pointer"
            title="تخصيص هوية وشعار مكتب المحاماة ورقم القيد"
          >
            <i className="fas fa-stamp text-amber-400"></i>
            <span className="hidden sm:inline">هوية المكتب</span>
          </button>

          {/* Pricing & Credits Trigger */}
          <button
            onClick={onOpenPricing}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 text-xs font-black transition-all shadow-sm flex items-center gap-1.5 transform active:scale-95 cursor-pointer"
            title="ترقية الباقة وشحن رصيد العقود"
          >
            <i className="fas fa-crown text-slate-950"></i>
            <span>{user.tier === 'pro' ? 'باقة PRO' : 'شحن الرصيد'}</span>
            <span className="bg-slate-950/20 px-1.5 py-0.5 rounded text-[10px] font-mono font-black">
              {user.creditsRemaining} عقد
            </span>
          </button>

          {/* Terms Trigger */}
          <button
            onClick={onOpenDisclaimer}
            className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-xs transition-colors border border-slate-800 cursor-pointer"
            title="شروط الاستخدام والمسؤولية"
          >
            <i className="fas fa-circle-info"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
