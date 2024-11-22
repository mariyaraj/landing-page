package com.ai2connect.cms.domain.repository;

import com.ai2connect.cms.domain.model.Seeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface SeekerRepository extends JpaRepository<Seeker, UUID> {
    
	List<Seeker> findAll();
    Optional<Seeker> findById(UUID id);
    List<Seeker> findByName(String name);
    
    // Spezifische Suchen für Seeker
    List<Seeker> findByCurrentTechStackContaining(String technology);
    List<Seeker> findByBudgetRange(String budgetRange);
}