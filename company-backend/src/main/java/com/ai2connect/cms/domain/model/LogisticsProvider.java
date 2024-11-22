package com.ai2connect.cms.domain.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "logistics_providers")
@PrimaryKeyJoinColumn(name = "id")
@Getter
@Setter
@NoArgsConstructor
public class LogisticsProvider extends Company {
    @ElementCollection
    @CollectionTable(name = "provider_logistics_categories", 
                    joinColumns = @JoinColumn(name = "provider_id"))
    @Enumerated(EnumType.STRING)
    private Set<LogisticsCategory> categories = new HashSet<>();

    @ElementCollection
    @CollectionTable(name = "provider_transport_types", 
                    joinColumns = @JoinColumn(name = "provider_id"))
    @Enumerated(EnumType.STRING)
    private Set<TransportationType> transportationTypes = new HashSet<>();

    @ElementCollection
    @CollectionTable(name = "provider_warehouse_types", 
                    joinColumns = @JoinColumn(name = "provider_id"))
    @Enumerated(EnumType.STRING)
    private Set<WarehouseType> warehouseTypes = new HashSet<>();

    @ElementCollection
    @CollectionTable(name = "provider_certifications", 
                    joinColumns = @JoinColumn(name = "provider_id"))
    private Set<String> certifications = new HashSet<>();

    @ElementCollection
    @CollectionTable(name = "geographical_coverage", 
                    joinColumns = @JoinColumn(name = "provider_id"))
    private Set<String> geographicalCoverage = new HashSet<>();

    @Embedded
    private PerformanceMetrics performanceMetrics;

    @ElementCollection
    @CollectionTable(name = "provider_specialized_equipment", 
                    joinColumns = @JoinColumn(name = "provider_id"))
    private Set<String> specializedEquipment = new HashSet<>();

    @Column(name = "fleet_size")
    private Integer fleetSize;

    @Column(name = "warehouse_capacity")
    private Integer warehouseCapacity; // in square meters

    @Column(name = "has_tracking_system")
    private Boolean hasTrackingSystem = false;

    @Column(name = "has_temperature_monitoring")
    private Boolean hasTemperatureMonitoring = false;

    @ElementCollection
    @CollectionTable(name = "provider_value_added_services", 
                    joinColumns = @JoinColumn(name = "provider_id"))
    private Set<String> valueAddedServices = new HashSet<>();
}

