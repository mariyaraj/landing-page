package com.ai2connect.cms.domain.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "providers")
@PrimaryKeyJoinColumn(name = "id")
@Getter
@Setter
@NoArgsConstructor
public class Provider extends Company {

   @ElementCollection
   @CollectionTable(name = "provider_tech_stack", joinColumns = @JoinColumn(name = "provider_id"))
   @Column(name = "technology")
   private Set<String> techStack = new HashSet<>();

   @ElementCollection
   @CollectionTable(name = "provider_services", joinColumns = @JoinColumn(name = "provider_id"))
   @Column(name = "service")
   private Set<String> services = new HashSet<>();

   @Column(name = "team_size")
   private Integer teamSize;

   @ElementCollection
   @CollectionTable(name = "provider_certifications", joinColumns = @JoinColumn(name = "provider_id"))
   @Column(name = "certification")
   private Set<String> certifications = new HashSet<>();

   @Column(name = "hourly_rate")
   private String hourlyRate;

public Set<String> getTechStack() {
	return techStack;
}

public void setTechStack(Set<String> techStack) {
	this.techStack = techStack;
}

public Set<String> getServices() {
	return services;
}

public void setServices(Set<String> services) {
	this.services = services;
}

public Integer getTeamSize() {
	return teamSize;
}

public void setTeamSize(Integer teamSize) {
	this.teamSize = teamSize;
}

public Set<String> getCertifications() {
	return certifications;
}

public void setCertifications(Set<String> certifications) {
	this.certifications = certifications;
}

public String getHourlyRate() {
	return hourlyRate;
}

public void setHourlyRate(String hourlyRate) {
	this.hourlyRate = hourlyRate;
}
   
   
}