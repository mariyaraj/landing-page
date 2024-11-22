package com.ai2connect.cms.domain.model.dtos;


import java.util.HashSet;
import java.util.Set;

import jakarta.validation.constraints.NotEmpty;

public class SeekerDTOs {

    // Request DTO für Seeker
    public static class SeekerRequestDTO extends CompanyDTOs.CompanyRequestDTO {
        private Set<String> currentTechStack = new HashSet<>();
        private String implementationTimeline;
        private String budgetRange;
        
        @NotEmpty(message = "Mindestens ein Use-Case muss angegeben werden")
        private Set<String> useCases = new HashSet<>();

        // Getter und Setter
        public Set<String> getCurrentTechStack() {
            return currentTechStack;
        }

        public void setCurrentTechStack(Set<String> currentTechStack) {
            this.currentTechStack = currentTechStack;
        }

        public String getImplementationTimeline() {
            return implementationTimeline;
        }

        public void setImplementationTimeline(String implementationTimeline) {
            this.implementationTimeline = implementationTimeline;
        }

        public String getBudgetRange() {
            return budgetRange;
        }

        public void setBudgetRange(String budgetRange) {
            this.budgetRange = budgetRange;
        }

        public Set<String> getUseCases() {
            return useCases;
        }

        public void setUseCases(Set<String> useCases) {
            this.useCases = useCases;
        }
    }

    // Response DTO für Seeker
    public static class SeekerResponseDTO extends CompanyDTOs.CompanyResponseDTO {
        private Set<String> currentTechStack = new HashSet<>();
        private String implementationTimeline;
        private String budgetRange;
        private Set<String> useCases = new HashSet<>();

        // Getter und Setter
        public Set<String> getCurrentTechStack() {
            return currentTechStack;
        }

        public void setCurrentTechStack(Set<String> currentTechStack) {
            this.currentTechStack = currentTechStack;
        }

        public String getImplementationTimeline() {
            return implementationTimeline;
        }

        public void setImplementationTimeline(String implementationTimeline) {
            this.implementationTimeline = implementationTimeline;
        }

        public String getBudgetRange() {
            return budgetRange;
        }

        public void setBudgetRange(String budgetRange) {
            this.budgetRange = budgetRange;
        }

        public Set<String> getUseCases() {
            return useCases;
        }

        public void setUseCases(Set<String> useCases) {
            this.useCases = useCases;
        }
    }
}