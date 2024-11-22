import { CompanySize } from './shared';
import { DeploymentType, SecurityLevel, DataFrequency, DataVolume } from './integrations';

export interface SeekerProfile {
    currentTechStack: string[];
    challenges: Challenge[];
    requirements: Requirements;
    timeline: string;
    decisionMakers: string[];
    budget: Budget;
    projectScope?: ProjectScope;
    preferences?: Preferences;
}

export interface Challenge {
    area: string;
    description: string;
    priority: Priority;
    impact: Impact;
    currentSolution?: string;
    constraints?: string[];
}

export interface Requirements {
    technical: TechnicalRequirements;
    business: BusinessRequirements;
    integration: SeekerIntegration;
    compliance: ComplianceRequirements;
}

export interface SeekerIntegration {
    preferredDeployment: DeploymentType[];
    dataRequirements: SeekerDataRequirements;
    existingTools: string[];
    customizationNeeds: string[];
}

export interface SeekerDataRequirements {
    types: string[];
    volume: DataVolume;
    frequency: DataFrequency;
    security: SecurityLevel[];
}

export interface TechnicalRequirements {
    existingSystem: string[];
    integrationPreferences: string[];
    inHouseExpertise: string[];
    securityRequirements: string[];
    performanceRequirements?: {
        responseTime?: string;
        availability?: string;
        scalability?: string;
    };
}

export interface BusinessRequirements {
    goals: string[];
    successCriteria: string[];
    timelineConstraints: string[];
    stakeholders: string[];
    expectedOutcomes: string[];
    kpis?: string[];
}

export interface ComplianceRequirements {
    regulations: string[];
    certifications: string[];
    dataProtection: string[];
    auditRequirements: string[];
}

export interface Budget {
    range: BudgetRange;
    timeframe: string;
    constraints: string[];
    allocationDetails?: {
        implementation?: number;
        licensing?: number;
        maintenance?: number;
        training?: number;
    };
    flexibility: BudgetFlexibility;
}

export interface ProjectScope {
    departments: string[];
    users: number;
    locations: string[];
    phases?: string[];
    milestones?: string[];
}

export interface Preferences {
    providerSize?: CompanySize[];
    supportLevel?: SupportLevel[];
    communicationPreferences?: CommunicationChannel[];
    implementationPreferences?: ImplementationPreference[];
}

export enum Priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    CRITICAL = 'critical'
}

export enum Impact {
    MINIMAL = 'minimal',
    MODERATE = 'moderate',
    SIGNIFICANT = 'significant',
    TRANSFORMATIVE = 'transformative'
}

export enum BudgetRange {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    ENTERPRISE = 'enterprise'
}

export enum BudgetFlexibility {
    FIXED = 'fixed',
    SOMEWHAT_FLEXIBLE = 'somewhat_flexible',
    FLEXIBLE = 'flexible',
    VERY_FLEXIBLE = 'very_flexible'
}

export enum SupportLevel {
    BASIC = 'basic',
    BUSINESS_HOURS = 'business_hours',
    EXTENDED = 'extended',
    TWENTYFOURSEVEN = '24/7'
}

export enum CommunicationChannel {
    EMAIL = 'email',
    PHONE = 'phone',
    VIDEO = 'video',
    IN_PERSON = 'in_person',
    CHAT = 'chat'
}

export enum ImplementationPreference {
    RAPID = 'rapid',
    PHASED = 'phased',
    CAREFUL = 'careful',
    CUSTOM = 'custom'
}