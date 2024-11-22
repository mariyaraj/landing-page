package com.ai2connect.cms.domain.model.dtos;



import java.util.HashSet;
import java.util.Set;

import jakarta.validation.constraints.Min;

public class ProviderDTOs {

    // Request DTO für Provider
    public static class ProviderRequestDTO extends CompanyDTOs.CompanyRequestDTO {
        private Set<String> techStack = new HashSet<>();
        private Set<String> services = new HashSet<>();
        
        @Min(value = 1, message = "Teamgröße muss mindestens 1 sein")
        private Integer teamSize;
        
        private Set<String> certifications = new HashSet<>();
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

    // Response DTO für Provider
    public static class ProviderResponseDTO extends CompanyDTOs.CompanyResponseDTO {
        private Set<String> techStack = new HashSet<>();
        private Set<String> services = new HashSet<>();
        private Integer teamSize;
        private Set<String> certifications = new HashSet<>();
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
}