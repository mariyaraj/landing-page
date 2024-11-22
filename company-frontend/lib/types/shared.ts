// src/lib/types.ts



export interface AttributeValue {
    name: string;
    value: string;
}

export interface Company {
    id?: string;
    name: string;
    email: string;
    website?: string; // Optional machen
    phone?: string;   // Optional machen
    companySize: CompanySize;
    status: CompanyStatus;
    attributes: AttributeValue[];
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    version?: number |undefined;
}

export interface ApplicationContentProps {
    onClose: () => void;
    type: 'provider' | 'seeker' | 'pilot';
}

export enum CompanyStatus {
    DRAFT = 'DRAFT',           // Registrierung begonnen
    PENDING = 'PENDING',       // Wartet auf Verifizierung
    ACTIVE = 'ACTIVE',         // Aktiv und verifiziert
    INACTIVE = 'INACTIVE',     // Temporär deaktiviert
    SUSPENDED = 'SUSPENDED'    // Gesperrt
}


export enum CompanySize {
    MICRO = 'MICRO',      // < 10 Mitarbeiter
    SMALL = 'SMALL',      // 10-49 Mitarbeiter
    MEDIUM = 'MEDIUM',    // 50-249 Mitarbeiter
    LARGE = 'LARGE',      // 250+ Mitarbeiter
    ENTERPRISE = 'ENTERPRISE' // 1000+ Mitarbeiter
}

export enum Industry {
    LOGISTICS = 'Logistics',
    MANUFACTURING = 'Manufacturing',
    RETAIL = 'Retail',
    HEALTHCARE = 'Healthcare',
    FINANCE = 'Finance',
    IT = 'Information Technology',
    AUTOMOTIVE = 'Automotive',
    ENERGY = 'Energy',
    CONSTRUCTION = 'Construction',
    OTHER = 'Other'
}



export enum ContactMethod {
    EMAIL = 'email',
    PHONE = 'phone',
    BOTH = 'both'
}

export interface Address {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    state?: string;
}

export interface ContactPerson {
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    phone: string;
    department?: string;
    preferredContactMethod?: ContactMethod;
}