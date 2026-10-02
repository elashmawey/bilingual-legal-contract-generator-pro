import React, { useState, useEffect } from 'react';
import type {
  ContractFormData,
  GeneratedContract,
  UserAccount,
  SavedContractItem,
  LawFirmBranding,
  SubscriptionTier,
  OfficialEncyclopediaContract,
} from './types';
import ContractForm from './components/ContractForm';
import ContractDisplay from './components/ContractDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import Header, { type AppTab } from './components/Header';
import PricingModal from './components/PricingModal';
import ContractsArchive from './components/ContractsArchive';
import BrandingSettingsModal from './components/BrandingSettingsModal';
import LegalDisclaimerModal from './components/LegalDisclaimerModal';
import OfficialEncyclopediaView from './components/OfficialEncyclopediaView';
import SmartClauseBank from './components/SmartClauseBank';
import LandingPage from './components/LandingPage';
import type { SmartClauseItem } from './types';
import { generateContract } from './services/geminiService';
import {
  getStoredUser,
  saveStoredUser,
  getSavedContracts,
  saveContractToArchive,
  deleteContractFromArchive,
  addCredits,
  updateLawFirmBranding,
  deductCredit,
} from './services/storageService';

const App: React.FC = () => {
  const [contractData, setContractData] = useState<GeneratedContract | null>(null);
  const [customizingFormData, setCustomizingFormData] = useState<ContractFormData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<AppTab>('create');

  // Modals state
  const [isPricingOpen, setIsPricingOpen] = useState<boolean>(false);
  const [isBrandingOpen, setIsBrandingOpen] = useState<boolean>(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState<boolean>(false);

  // Persistent user & contracts
  const [user, setUser] = useState<UserAccount>(() => getStoredUser());
  const [savedContracts, setSavedContracts] = useState<SavedContractItem[]>(() => getSavedContracts());

  useEffect(() => {
    setUser(getStoredUser());
    setSavedContracts(getSavedContracts());
  }, []);

  const handleFormSubmit = async (formData: ContractFormData) => {
    // Check credits if on free plan with 0 credits
    if (user.tier === 'free' && user.creditsRemaining <= 0) {
      setIsPricingOpen(true);
      return;
    }

    setIsLoading(true);
    setError(null);
    setContractData(null);

    try {
      const result = await generateContract(formData);

      // Attach user's law firm branding if available
      if (user.branding) {
        result.branding = user.branding;
      }

      setContractData(result);

      // Deduct credit
      deductCredit();
      const updatedUser = getStoredUser();
      setUser(updatedUser);

      // Auto-save to archive library
      const refId = `EGY-LEG-2026-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      saveContractToArchive(result, refId, formData.contractType);
      setSavedContracts(getSavedContracts());
    } catch (err) {
      if (err instanceof Error && err.message === 'RATE_LIMIT_EXCEEDED') {
        setError('لقد تجاوزت حد الاستخدام المؤقت. يرجى الانتظار دقيقة أو اختيار عقد من الموسوعة الرسمية المدمجة.');
      } else {
        setError('حدث خطأ أثناء هندسة العقد. يرجى التأكد من البيانات أو تصفح موسوعة العقود الرسمية المعتمدة.');
      }
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setContractData(null);
    setError(null);
  };

  const handleSelectFromArchive = (contract: GeneratedContract) => {
    setContractData(contract);
    setCurrentTab('create');
  };

  const handleDeleteFromArchive = (id: string) => {
    deleteContractFromArchive(id);
    setSavedContracts(getSavedContracts());
  };

  const handleSaveBranding = (branding: LawFirmBranding) => {
    updateLawFirmBranding(branding);
    setUser(getStoredUser());
    if (contractData) {
      setContractData({
        ...contractData,
        branding,
      });
    }
  };

  const handleSubscribe = (tier: SubscriptionTier, creditsToAdd: number) => {
    addCredits(creditsToAdd, tier);
    setUser(getStoredUser());
  };

  const handleSelectEncyclopediaContract = (contract: GeneratedContract) => {
    if (user.branding) {
      contract.branding = user.branding;
    }
    setContractData(contract);
    setCurrentTab('create');
  };

  const handleCustomizeEncyclopediaTemplate = (template: OfficialEncyclopediaContract) => {
    const cData = template.contractData;
    // Map template into rich prefilled form data
    const formData: ContractFormData = {
      contractType: cData.contractTitleEnglish || template.titleEn || 'Real Estate Purchase Agreement',
      disputeResolution: 'egyptian_courts',
      details: {
        partyDetails: cData.preambleArabic || '',
        agreementSubject: cData.clauses[1]?.contentArabic || '',
        financialTerms: cData.clauses[2]?.contentArabic || '',
        contractTerm: cData.clauses[3]?.contentArabic || '',
      }
    };
    setCustomizingFormData(formData);
    setContractData(null);
    setCurrentTab('create');
  };

  const handleInsertClauseIntoContract = (clause: SmartClauseItem) => {
    if (!contractData) {
      const newContract: GeneratedContract = {
        contractTitleArabic: 'مسودة عقد قانوني مخصص',
        contractTitleEnglish: 'Custom Legal Agreement Draft',
        preambleArabic: 'إنه في يوم الموافق ... تم الاتفاق والتعاقد بين كل من الطرفين:',
        preambleEnglish: 'On this day ... by and between the Parties:',
        recitalsArabic: 'يُعتبر هذا التمهيد جزءاً لا يتجزأ من العقد وبنداً جوهرياً متمماً له.',
        recitalsEnglish: 'This recital constitutes an integral and binding part of the Agreement.',
        clauses: [
          {
            titleArabic: clause.titleAr,
            titleEnglish: clause.titleEn,
            contentArabic: clause.contentAr,
            contentEnglish: clause.contentEn,
          },
        ],
        legalNotes: `تم إدراج شرط "${clause.titleAr}" من بنك الشروط الذكية. السند القانوني: ${clause.statutoryBasis}`,
        certificationStatement: 'محرر تعاقدي مقنن ومطابق للأصول القانونية والتشريعات السارية.',
      };
      setContractData(newContract);
      setCurrentTab('create');
      return;
    }

    const updatedClauses = [
      ...contractData.clauses,
      {
        titleArabic: clause.titleAr,
        titleEnglish: clause.titleEn,
        contentArabic: clause.contentAr,
        contentEnglish: clause.contentEn,
      },
    ];

    setContractData({
      ...contractData,
      clauses: updatedClauses,
    });
    setCurrentTab('create');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between font-sans">
      <div>
        {/* Global Navigation Header */}
        <Header
          currentTab={currentTab}
          onNavigateTab={(tab) => {
            setCurrentTab(tab);
            if (tab === 'archive') {
              setContractData(null);
            }
          }}
          savedContractsCount={savedContracts.length}
          user={user}
          onOpenPricing={() => setIsPricingOpen(true)}
          onOpenBranding={() => setIsBrandingOpen(true)}
          onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
        />

        <main className="container mx-auto p-4 md:p-8">
          {currentTab === 'landing' ? (
            <LandingPage
              onNavigateTab={(tab) => {
                setCurrentTab(tab);
                if (tab === 'create') setContractData(null);
              }}
              onOpenPricing={() => setIsPricingOpen(true)}
              onOpenBranding={() => setIsBrandingOpen(true)}
            />
          ) : currentTab === 'archive' ? (
            <ContractsArchive
              contracts={savedContracts}
              onSelectContract={handleSelectFromArchive}
              onDeleteContract={handleDeleteFromArchive}
              onNewContract={() => {
                setCurrentTab('create');
                setContractData(null);
              }}
            />
          ) : currentTab === 'encyclopedia' ? (
            <OfficialEncyclopediaView
              onSelectContract={handleSelectEncyclopediaContract}
              onCustomizeTemplate={handleCustomizeEncyclopediaTemplate}
            />
          ) : currentTab === 'clause-bank' ? (
            <SmartClauseBank
              currentContract={contractData}
              onInsertClauseIntoContract={handleInsertClauseIntoContract}
              onNavigateToContract={() => setCurrentTab('create')}
            />
          ) : (
            <>
              {!contractData && !isLoading && (
                <ContractForm onSubmit={handleFormSubmit} initialData={customizingFormData} />
              )}

              {isLoading && <LoadingSpinner />}

              {error && (
                <div className="max-w-xl mx-auto text-center p-8 bg-white rounded-3xl shadow-xl border border-rose-200 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-2xl mx-auto">
                    <i className="fas fa-circle-exclamation"></i>
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 mb-1">تنبيه استقرار المنظومة</h3>
                    <p className="text-rose-600 text-xs font-semibold">{error}</p>
                  </div>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-blue-600 text-white font-black text-xs rounded-xl hover:bg-blue-700 shadow-md transition-colors"
                    >
                      إعادة المحاولة
                    </button>
                    <button
                      onClick={() => setCurrentTab('encyclopedia')}
                      className="px-6 py-2.5 bg-slate-800 text-white font-black text-xs rounded-xl hover:bg-slate-900 shadow-md transition-colors flex items-center gap-1.5"
                    >
                      <i className="fas fa-landmark text-amber-400"></i>
                      <span>فتح موسوعة العقود المعتمدة أوفلاين</span>
                    </button>
                  </div>
                </div>
              )}

              {contractData && !isLoading && (
                <ContractDisplay
                  contract={contractData}
                  onReset={handleReset}
                  onUpdateContract={setContractData}
                  onOpenClauseBank={() => setCurrentTab('clause-bank')}
                />
              )}
            </>
          )}
        </main>
      </div>

      {/* Commercial Modals */}
      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        currentTier={user.tier}
        creditsRemaining={user.creditsRemaining}
        onSubscribe={handleSubscribe}
      />

      <BrandingSettingsModal
        isOpen={isBrandingOpen}
        onClose={() => setIsBrandingOpen(false)}
        branding={user.branding}
        onSave={handleSaveBranding}
      />

      <LegalDisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      {/* Official Legal Footer */}
      <footer className="mt-12 bg-slate-900 text-slate-400 text-xs py-6 border-t border-slate-800 print:hidden">
        <div className="container mx-auto px-4 text-center space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300 font-bold">
            <button onClick={() => setCurrentTab('landing')} className="hover:text-amber-400 transition-colors text-amber-300 font-black cursor-pointer">
              <i className="fas fa-crown ml-1"></i> مزايا المنظومة
            </button>
            <span>•</span>
            <button onClick={() => setIsPricingOpen(true)} className="hover:text-amber-400 transition-colors cursor-pointer">
              باقات الاشتراك والأسعار
            </button>
            <span>•</span>
            <button onClick={() => setCurrentTab('encyclopedia')} className="hover:text-amber-400 transition-colors cursor-pointer">
              موسوعة العقود الرسمية (50)
            </button>
            <span>•</span>
            <button onClick={() => setCurrentTab('clause-bank')} className="hover:text-amber-400 transition-colors cursor-pointer">
              بنك الشروط الذكية
            </button>
            <span>•</span>
            <button onClick={() => setIsBrandingOpen(true)} className="hover:text-amber-400 transition-colors cursor-pointer">
              هوية وشعار مكتب المحاماة
            </button>
            <span>•</span>
            <button onClick={() => setIsDisclaimerOpen(true)} className="hover:text-amber-400 transition-colors cursor-pointer">
              شروط الاستخدام وإخلاء المسؤولية
            </button>
            <span>•</span>
            <span className="text-emerald-400">
              <i className="fas fa-shield-halved ml-1"></i> معتمد ومطابق للقانون والشريعة
            </span>
          </div>
          <p className="text-slate-500 text-[11px]">
            منصة "عدالة كونتراكت" — منظومة الصياغة والترجمة القانونية المعتمدة رسمياً لنقابة المحامين والشهر العقاري والقضاء المصري © 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
