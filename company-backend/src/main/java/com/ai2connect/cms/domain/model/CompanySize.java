package com.ai2connect.cms.domain.model;

public enum CompanySize {
    MICRO("< 10 Mitarbeiter"),
    SMALL("10-49 Mitarbeiter"),
    MEDIUM("50-249 Mitarbeiter"),
    LARGE("≥ 250 Mitarbeiter"),
	ENTERPRISE("≥ 1000 Mitarbeiter");

    private final String description;

    CompanySize(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}