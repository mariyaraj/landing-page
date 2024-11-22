// src/lib/types.ts

import { CompanySize } from "./types/shared";

export interface Company {
  id?: string;
  name: string;
  email: string;
  website?: string;
  phone?: string;
  companySize: CompanySize;
  description?: string;
}
