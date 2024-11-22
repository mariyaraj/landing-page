package com.ai2connect.cms.domain.model;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import jakarta.persistence.JoinColumn;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "logistics_seekers")
@PrimaryKeyJoinColumn(name = "id")
@Getter
@Setter
@NoArgsConstructor
public class LogisticsSeeker extends Company {
    @ElementCollection
    @CollectionTable(name = "seeker_required_categories", 
                    joinColumns = @JoinColumn(name = "seeker_id"))
    @Enumerated(EnumType.STRING)
    private Set<LogisticsCategory> requiredCategories = new HashSet<>();

    @ElementCollection
    @CollectionTable(name = "seeker_required_transport_types", 
                    joinColumns = @JoinColumn(name = "seeker_id"))
    @Enumerated(EnumType.STRING)
    private Set<TransportationType> requiredTransportationTypes = new HashSet<>();

    @Column(name = "estimated_monthly_volume")
    private Double estimatedMonthlyVolume;

    @Column(name = "cargo_type")
    private String cargoType;

    @Column(name = "special_handling_requirements")
    private String specialHandlingRequirements;

    @ElementCollection
    @CollectionTable(name = "seeker_required_coverage", 
                    joinColumns = @JoinColumn(name = "seeker_id"))
    private Set<String> requiredGeographicalCoverage = new HashSet<>();

    @Column(name = "temperature_requirements")
    private String temperatureRequirements;

    @Column(name = "budget_range")
    private String budgetRange;

    @Column(name = "service_start_date")
    private LocalDateTime serviceStartDate;

    @Column(name = "contract_duration")
    private Integer contractDuration; // in months

    @ElementCollection
    @CollectionTable(name = "seeker_required_certifications", 
                    joinColumns = @JoinColumn(name = "seeker_id"))
    private Set<String> requiredCertifications = new HashSet<>();

    @Column(name = "tracking_system_required")
    private Boolean trackingSystemRequired = false;

    @Column(name = "integration_requirements")
    private String integrationRequirements;
}