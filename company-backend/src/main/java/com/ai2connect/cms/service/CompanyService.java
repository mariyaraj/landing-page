package com.ai2connect.cms.service;

import com.ai2connect.cms.domain.model.Company;
import com.ai2connect.cms.domain.model.CompanySize;
import com.ai2connect.cms.domain.model.Provider;
import com.ai2connect.cms.domain.model.Seeker;
import com.ai2connect.cms.domain.repository.CompanyRepository;
import com.ai2connect.cms.domain.repository.ProviderRepository;
import com.ai2connect.cms.domain.repository.SeekerRepository;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class CompanyService {

    private final CompanyRepository companyRepository;
    private final ProviderRepository providerRepository;
    private final SeekerRepository seekerRepository;

    public CompanyService(CompanyRepository companyRepository, 
                         ProviderRepository providerRepository,
                         SeekerRepository seekerRepository) {
        this.companyRepository = companyRepository;
        this.providerRepository = providerRepository;
        this.seekerRepository = seekerRepository;
    }

    // Company methods
    public Company createCompany(Company company) {
        return companyRepository.save(company);
    }

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Optional<Company> getCompanyById(UUID id) {
        return companyRepository.findById(id);
    }

    public Company updateCompany(UUID id, Company companyDetails) {
        Company company = companyRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Company not found"));
        
        company.setName(companyDetails.getName());
        // andere Updates
        
        return companyRepository.save(company);
    }

    public void deleteCompany(UUID id) {
        companyRepository.deleteById(id);
    }

 // Provider spezifische Methoden
    public Provider createProvider(Provider provider) {
        return providerRepository.save(provider);
    }

    public List<Provider> getAllProviders() {
        return providerRepository.findAll();
    }

  
    


    public Provider getProviderById(UUID id) {
        return providerRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Provider not found with id: " + id));
    }

    public Seeker getSeekerById(UUID id) {
        return seekerRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Seeker not found with id: " + id));
    }
    
    
    
    
    
    

    // Provider Suchmethoden
    public List<Provider> findProvidersByTechnology(String technology) {
        return providerRepository.findByTechStackContaining(technology);
    }

    public List<Provider> findProvidersByService(String service) {
        return providerRepository.findByServicesContaining(service);
    }

    public List<Provider> findProvidersByCompanySize(CompanySize minSize, CompanySize maxSize) {
        if (minSize != null && maxSize != null) {
            return providerRepository.findAll().stream()
                    .filter(p -> isInSizeRange(p.getCompanySize(), minSize, maxSize))
                    .collect(Collectors.toList());
        } else if (minSize != null) {
            return providerRepository.findByCompanySizeGreaterThanEqual(minSize);
        } else if (maxSize != null) {
            return providerRepository.findByCompanySizeLessThanEqual(maxSize);
        }
        return providerRepository.findAll();
    }

    private boolean isInSizeRange(CompanySize size, CompanySize minSize, CompanySize maxSize) {
        return size.ordinal() >= minSize.ordinal() && size.ordinal() <= maxSize.ordinal();
    }

    public List<Provider> findProvidersByCertification(String certification) {
        return providerRepository.findByCertificationsContaining(certification);
    }
    public Seeker createSeeker(Seeker seeker) {
        return seekerRepository.save(seeker);
    }

    public List<Seeker> getAllSeekers() {
        return seekerRepository.findAll();
    }



    // Spezielle Suchmethoden
    public List<Seeker> findSeekersByTechnology(String technology) {
        return seekerRepository.findByCurrentTechStackContaining(technology);
    }

    public List<Seeker> findSeekersByBudgetRange(String budgetRange) {
        return seekerRepository.findByBudgetRange(budgetRange);
    }

    // Validation methods
    private void validateCompany(Company company) {
        // Add validation logic
        if (company.getName() == null || company.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("Company name cannot be empty");
        }
        // Add more validation as needed
    }

    // Error handling methods
    private void handleError(String message) {
        // Add error handling logic
        throw new RuntimeException(message);
    }

	


}