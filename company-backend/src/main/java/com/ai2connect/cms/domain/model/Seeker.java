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
@Table(name = "seekers")
@PrimaryKeyJoinColumn(name = "id")
@Getter
@Setter
@NoArgsConstructor
public class Seeker extends Company {
	
	@ElementCollection
	@CollectionTable(name = "seeker_tech_stack", joinColumns = @JoinColumn(name = "seeker_id"))
	@Column(name = "technology")
	private Set<String> currentTechStack = new HashSet<>();

	@Column(name = "implementation_timeline")
	private String implementationTimeline;

	@Column(name = "budget_range")
	private String budgetRange;

	@ElementCollection
	@CollectionTable(name = "seeker_use_cases", joinColumns = @JoinColumn(name = "seeker_id"))
	@Column(name = "use_case")
	private Set<String> useCases = new HashSet<>();

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
