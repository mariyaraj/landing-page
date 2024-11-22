// api.ts

import { Company } from "./types";


const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const createCompany = async (companyData: Company): Promise<Company> => {
  try {
    console.log('Attempting to fetch from:', process.env.NEXT_PUBLIC_API_URL);
    const response = await fetch(`${API_URL}/companies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY!,
      },
      body: JSON.stringify(companyData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create company');
    }

    return response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};