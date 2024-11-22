package com.ai2connect.cms.domain.repository;


import com.ai2connect.cms.domain.model.CompanySize;
import com.ai2connect.cms.domain.model.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, UUID> {
    List<Provider> findByTechStackContaining(String technology);
    List<Provider> findByServicesContaining(String service);
    List<Provider> findByCompanySize(CompanySize size);
    List<Provider> findByCompanySizeGreaterThanEqual(CompanySize size);
    List<Provider> findByCompanySizeLessThanEqual(CompanySize size);
    List<Provider> findByCertificationsContaining(String certification);
}