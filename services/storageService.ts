import type { UserAccount, SavedContractItem, GeneratedContract, LawFirmBranding, SubscriptionTier } from '../types';

const STORAGE_KEYS = {
  USER: 'adala_user_account_v1',
  CONTRACTS: 'adala_saved_contracts_v1',
  BRANDING: 'adala_law_firm_branding_v1',
};

const DEFAULT_USER: UserAccount = {
  id: `usr-${Date.now().toString(36)}`,
  name: '',
  email: '',
  title: '',
  role: 'lawyer',
  tier: 'free',
  creditsRemaining: 3,
  createdAt: new Date().toISOString(),
};

export const getStoredUser = (): UserAccount => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load user from localStorage:', e);
  }
  // Store default user initially
  saveStoredUser(DEFAULT_USER);
  return DEFAULT_USER;
};

export const saveStoredUser = (user: UserAccount): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  } catch (e) {
    console.error('Failed to save user to localStorage:', e);
  }
};

export const deductCredit = (): boolean => {
  const user = getStoredUser();
  if (user.tier === 'pro' || user.tier === 'enterprise') {
    // Pro/Enterprise can still track or have generous credits
    if (user.creditsRemaining > 0) {
      user.creditsRemaining -= 1;
      saveStoredUser(user);
    }
    return true;
  }
  if (user.creditsRemaining > 0) {
    user.creditsRemaining -= 1;
    saveStoredUser(user);
    return true;
  }
  return false;
};

export const addCredits = (amount: number, newTier?: SubscriptionTier): UserAccount => {
  const user = getStoredUser();
  user.creditsRemaining += amount;
  if (newTier) {
    user.tier = newTier;
  }
  saveStoredUser(user);
  return user;
};

export const getSavedContracts = (): SavedContractItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CONTRACTS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load contracts from localStorage:', e);
  }
  return [];
};

export const saveContractToArchive = (contract: GeneratedContract, referenceId: string, contractType: string): SavedContractItem => {
  const contracts = getSavedContracts();
  const newItem: SavedContractItem = {
    id: `cnt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    referenceId,
    titleArabic: contract.contractTitleArabic || 'عقد قانوني رسمي',
    titleEnglish: contract.contractTitleEnglish || 'Official Legal Contract',
    contractType,
    createdAt: new Date().toISOString(),
    contractData: contract,
  };

  // Prepend to list
  const updated = [newItem, ...contracts];
  try {
    localStorage.setItem(STORAGE_KEYS.CONTRACTS, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save contract to archive:', e);
  }
  return newItem;
};

export const deleteContractFromArchive = (id: string): SavedContractItem[] => {
  const contracts = getSavedContracts();
  const filtered = contracts.filter((c) => c.id !== id);
  try {
    localStorage.setItem(STORAGE_KEYS.CONTRACTS, JSON.stringify(filtered));
  } catch (e) {
    console.error('Failed to update contracts after deletion:', e);
  }
  return filtered;
};

export const getLawFirmBranding = (): LawFirmBranding | undefined => {
  const user = getStoredUser();
  return user.branding;
};

export const updateLawFirmBranding = (branding: LawFirmBranding): UserAccount => {
  const user = getStoredUser();
  user.branding = branding;
  saveStoredUser(user);
  return user;
};
