import { DeploymentType, DataFrequency } from './integrations';

export interface ProviderProfile {
    solutions: Solution[];
    references: Reference[];
    certifications: string[];
    supportModel: SupportType[];
    customizationOptions: boolean;
}

export interface Solution {
    name: string;
    category: string[];
    technology: string[];
    description: string;
    useCase: string[];
    targetIndustries: string[];
    implementationTime: ImplementationTime;
    pricing: Pricing;
    integration: ProviderIntegration;
}

export interface ProviderIntegration {
    type: IntegrationType[];
    requirements: string[];
    deploymentOptions: DeploymentType[];
    timeEstimate: {
        minimum: number;
        maximum: number;
        unit: TimeUnit;
    };
    technicalRequirements: ProviderTechnicalRequirements;
    supportedPlatforms: string[];
    dataRequirements?: ProviderDataRequirements;
}

export interface ProviderTechnicalRequirements {
    hardware?: string[];
    software?: string[];
    infrastructure?: string[];
    security?: string[];
}

export interface ProviderDataRequirements {
    type: string[];
    format: string[];
    volume?: string;
    frequency?: DataFrequency;
}

export interface Reference {
    industry: string;
    projectDescription: string;
    results: string;
    year: number;
    companyName?: string;
    testimonial?: string;
    contactPerson?: {
        name: string;
        position: string;
    };
}

export interface Pricing {
    model: PricingModel;
    range: PriceRange;
    details?: {
        setupCost?: number;
        monthlyFee?: number;
        userBasedCost?: number;
        volumeBasedCost?: number;
        customization?: number;
    };
    currency?: 'EUR' | 'USD';
    customNotes?: string;
}

export enum PricingModel {
    SUBSCRIPTION = 'Subscription',
    ONE_TIME = 'One-Time',
    USAGE_BASED = 'Usage-Based',
    USER_BASED = 'User-Based',
    HYBRID = 'Hybrid',
    CUSTOM = 'Custom'
}

export enum PriceRange {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    ENTERPRISE = 'enterprise',
    CUSTOM = 'custom'
}

export enum IntegrationType {
    API = 'API',
    SDK = 'SDK',
    EMBEDDED = 'Embedded',
    STANDALONE = 'Standalone',
    PLUGIN = 'Plugin',
    CUSTOM = 'Custom Integration'
}

export enum TimeUnit {
    DAYS = 'days',
    WEEKS = 'weeks',
    MONTHS = 'months'
}

export enum ImplementationTime {
    SHORT = 'short',   // < 1 Monat
    MEDIUM = 'medium', // 1-3 Monate
    LONG = 'long'      // > 3 Monate
}

export type SupportType = 'TWENTYFOURSEVEN' | 'REMOTE' | 'ON_SITE' | 'EMAIL' | 'PHONE' | 'CHAT';