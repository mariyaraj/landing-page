package com.ai2connect.cms.domain.repository;

import com.ai2connect.cms.domain.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface CompanyRepository extends JpaRepository<Company, UUID> {
    
    // Suche nach Namen (case-insensitive)
    List<Company> findByNameContainingIgnoreCase(String name);
    
    // Finde Company by exactem Namen
    Optional<Company> findByName(String name);
    
    // Prüfe ob Company mit diesem Namen existiert
    boolean existsByName(String name);
}