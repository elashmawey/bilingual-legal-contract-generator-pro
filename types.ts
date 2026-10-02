export interface ContractFormData {
  contractType: string;
  disputeResolution: 'egyptian_courts' | 'arbitration';
  includeShariaClauses?: boolean;
  details: { [key: string]: string | undefined }; 
}

export interface ContractClause {
  titleArabic: string;
  titleEnglish: string;
  contentArabic: string;
  contentEnglish: string;
}

export interface LegalAuditChecklistItem {
  item: string;
  status: string;
  reference: string;
}

export interface LegalAuditBenchmarking {
  officialPortalValidation: string;
  cassationPrinciplesValidation: string;
  customaryPracticeValidation: string;
  shariaAuditStatement: string;
  complianceScore: number;
  verificationChecklist: LegalAuditChecklistItem[];
}

export interface LawFirmBranding {
  firmNameArabic: string;
  firmNameEnglish: string;
  registrationNumber: string; // رقم القيد بنقابة المحامين أو السجل التجاري
  phone: string;
  address: string;
  logoUrl?: string;
  authorizedCounselor?: string;
}

export interface ExecutionSignatory {
  name: string;
  nationalIdOrCr: string;
  titleOrCapacity: string;
  signatureDataUrl?: string;
  signedAt?: string;
}

export interface DigitalExecutionCertificate {
  certificateId: string;
  documentHashSha256: string;
  party1: ExecutionSignatory;
  party2: ExecutionSignatory;
  executedAt: string;
  statutoryReference: string;
  verificationQrData: string;
}

export interface SmartClauseItem {
  id: string;
  category: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  statutoryBasis: string;
  importance: 'critical' | 'recommended' | 'optional';
  practicalAdvice: string;
}

export interface GeneratedContract {
  contractTitleArabic?: string;
  contractTitleEnglish?: string;
  preambleArabic: string;
  preambleEnglish: string;
  recitalsArabic: string;
  recitalsEnglish: string;
  clauses: ContractClause[];
  legalNotes: string;
  shariaComplianceNotes?: string;
  certificationStatement?: string;
  legalAudit?: LegalAuditBenchmarking;
  branding?: LawFirmBranding;
  qrVerificationData?: string;
  isOfflineGenerated?: boolean;
  executionCertificate?: DigitalExecutionCertificate;
}

export interface SavedContractItem {
  id: string;
  referenceId: string;
  titleArabic: string;
  titleEnglish: string;
  contractType: string;
  createdAt: string;
  contractData: GeneratedContract;
}

export type SubscriptionTier = 'free' | 'starter' | 'pro' | 'enterprise';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  title: string;
  role: 'lawyer' | 'business' | 'individual';
  tier: SubscriptionTier;
  creditsRemaining: number;
  branding?: LawFirmBranding;
  createdAt: string;
}

export interface PricingPlan {
  id: SubscriptionTier | 'pay_per_contract';
  nameAr: string;
  nameEn: string;
  priceEgp: number;
  priceUsd: number;
  periodAr: string;
  badge?: string;
  popular?: boolean;
  featuresAr: string[];
  creditsText: string;
}

export interface PayPalVerificationReceipt {
  verified: boolean;
  orderId: string;
  transactionId: string;
  amountPaid: number;
  currency: string;
  amountUSD: number;
  assignedTier: SubscriptionTier;
  addedCredits: number;
  planNameArabic: string;
  payerEmail: string;
  payerName: string;
  timestamp: string;
}

// Contract Reviewer & Risk Audit Types
export interface ContractReviewRiskItem {
  clauseTitle: string;
  riskLevel: 'critical' | 'high' | 'medium' | 'low';
  issueDescription: string;
  statutoryReference: string;
  suggestedReplacement: string;
}

export interface ContractReviewResult {
  overallScore: number; // 0 - 100
  riskRating: 'آمن ومحكم' | 'متوسط المخاطر' | 'شديد الخطورة ويحتاج تعديل فوري';
  summary: string;
  risksFound: ContractReviewRiskItem[];
  shariaComplianceStatus: string;
  cassationNotes: string;
  barAssociationRecommendations: string[];
}

// Official Statutory Encyclopedia Contract
export interface OfficialEncyclopediaContract {
  id: string;
  category: string;
  titleAr: string;
  titleEn: string;
  source: string;
  statutoryBasis: string;
  totalClauses: number;
  contractData: GeneratedContract;
}

declare module 'html2pdf.js';
