package com.ai2connect.cms.domain.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class PerformanceMetrics {
    @Column(name = "on_time_delivery_rate")
    private Double onTimeDeliveryRate;

    @Column(name = "damage_rate")
    private Double damageRate;

    @Column(name = "average_response_time")
    private Integer averageResponseTime; // in minutes

    @Column(name = "customer_satisfaction_score")
    private Double customerSatisfactionScore;
}