export enum DeploymentType {
    CLOUD = 'cloud',
    ON_PREMISE = 'on_premise',
    HYBRID = 'hybrid',
    EDGE = 'edge'
}

export enum SecurityLevel {
    BASIC = 'basic',
    ENHANCED = 'enhanced',
    HIGH = 'high',
    MILITARY_GRADE = 'military_grade'
}

export enum DataFrequency {
    REAL_TIME = 'real_time',
    HOURLY = 'hourly',
    DAILY = 'daily',
    WEEKLY = 'weekly',
    MONTHLY = 'monthly'
}

export enum DataVolume {
    SMALL = 'small',      // < 1GB/Tag
    MEDIUM = 'medium',    // 1-50GB/Tag
    LARGE = 'large',      // 50-500GB/Tag
    VERY_LARGE = 'very_large' // > 500GB/Tag
}