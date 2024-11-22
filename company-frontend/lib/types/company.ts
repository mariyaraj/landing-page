import { CompanySize, Industry, CompanyStatus, Address, ContactPerson } from './shared';
import type { ProviderProfile } from './provider';
import type { SeekerProfile } from './seeker';

export interface CompanyBase {
    id: string;
    name: string;
    address: Address;
    contactPerson: ContactPerson;
    companySize: CompanySize;
    industry: Industry[];
    website: string;
    foundedYear: number;
    description: string;
    status: CompanyStatus;
    lastUpdated: Date;
}

export interface MatchingMetrics {
    overall: number;
    categoryScores: {
        technicalFit: number;
        industryFit: number;
        budgetFit: number;
        culturalFit: number;
        requirementsFit: number;
        experienceFit: number;
    };
    potentialMatches: Array<{
        companyId: string;
        matchScore: number;
        strengthFactors: string[];
        weaknessFactors: string[];
    }>;
    lastCalculated: Date;
    confidenceScore: number;
    recommendations?: string[];
}

export enum VerificationDocumentType {
    BUSINESS_REGISTRATION = 'business_registration',
    TAX_ID = 'tax_id',
    TRADE_LICENSE = 'trade_license',
    COMPANY_REGISTER = 'company_register',
    ID_PROOF = 'id_proof',
    ADDRESS_PROOF = 'address_proof',
    BANK_STATEMENT = 'bank_statement',
    CERTIFICATION = 'certification',
    OTHER = 'other'
}

export enum VerificationStatus {
    PENDING = 'pending',
    IN_REVIEW = 'in_review',
    APPROVED = 'approved',
    REJECTED = 'rejected',
    EXPIRED = 'expired',
    REQUIRES_UPDATE = 'requires_update'
}

export interface VerificationDocument {
    id: string;
    type: VerificationDocumentType;
    url: string;
    uploadDate: Date;
    status: VerificationStatus;
    expiryDate?: Date;
    verifiedBy?: string;
    verificationNotes?: string;
}

export enum VerificationLevel {
    NONE = 'none',
    BASIC = 'basic',
    ADVANCED = 'advanced',
    PREMIUM = 'premium'
}

export interface CompanyVerification {
    isVerified: boolean;
    verificationDate?: Date;
    verificationLevel: VerificationLevel;
    documents: VerificationDocument[];
    notes?: string;
    lastVerificationAttempt?: Date;
    trustScore?: number;
}

export enum SubscriptionType {
    FREE = 'free',
    BASIC = 'basic',
    PROFESSIONAL = 'professional',
    ENTERPRISE = 'enterprise'
}

export interface Subscription {
    type: SubscriptionType;
    startDate: Date;
    endDate: Date;
    features: string[];
    autoRenewal: boolean;
    paymentStatus: PaymentStatus;
}

export enum PaymentStatus {
    ACTIVE = 'active',
    PENDING = 'pending',
    OVERDUE = 'overdue',
    CANCELLED = 'cancelled'
}

export interface Company extends CompanyBase {
    roles: {
        isProvider: boolean;
        isSeeker: boolean;
    };
    providerProfile?: ProviderProfile;
    seekerProfile?: SeekerProfile;
    matchingMetrics?: MatchingMetrics;
    verification?: CompanyVerification;
    subscription?: Subscription;
    analytics?: {
        profileViews: number;
        matchRequests: number;
        successfulMatches: number;
        lastActivity: Date;
        engagementScore: number;
        responseRate: number;
    };
}