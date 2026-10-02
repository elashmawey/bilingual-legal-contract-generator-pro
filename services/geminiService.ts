import type { ContractFormData, GeneratedContract } from '../types';
import { buildAccurateStatutoryContract } from './contractBuilder';

export const generateContract = async (formData: ContractFormData): Promise<GeneratedContract> => {
  try {
    const response = await fetch('/api/generate-contract', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data: GeneratedContract = await response.json();
        return data;
      }
    }

    if (response.status === 429) {
      throw new Error('RATE_LIMIT_EXCEEDED');
    }

    // If server is not present or non-200 (e.g. static hosting on Vercel/Netlify), fallback seamlessly
    console.warn('[GeminiService] API returned non-JSON/status, generating accurate statutory contract directly');
    return buildAccurateStatutoryContract(formData);
  } catch (error) {
    if (error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED') {
      throw error;
    }
    console.warn('[GeminiService] Server offline or fetch failed, using client statutory contract builder:', error);
    return buildAccurateStatutoryContract(formData);
  }
};
