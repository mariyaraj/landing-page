package com.ai2connect.cms.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ai2connect.cms.domain.model.Company;
import com.ai2connect.cms.domain.model.Provider;
import com.ai2connect.cms.domain.model.Seeker;
import com.ai2connect.cms.domain.model.dtos.CompanyDTOs.CompanyRequestDTO;
import com.ai2connect.cms.domain.model.dtos.CompanyDTOs.CompanyResponseDTO;
import com.ai2connect.cms.domain.model.dtos.ProviderDTOs.ProviderRequestDTO;
import com.ai2connect.cms.domain.model.dtos.ProviderDTOs.ProviderResponseDTO;
import com.ai2connect.cms.domain.model.dtos.SeekerDTOs.SeekerRequestDTO;
import com.ai2connect.cms.domain.model.dtos.SeekerDTOs.SeekerResponseDTO;
import com.ai2connect.cms.mapper.CompanyMapper;
import com.ai2connect.cms.service.CompanyService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/companies")
public class CompanyController {

	
	 @Autowired
	    private CompanyMapper companyMapper;
	    
	    @Autowired
	    private CompanyService companyService;
	    
	    public CompanyController(CompanyService companyService) {
	    	System.out.println("Inside CompanyController constructor");
	        this.companyService = companyService;
	    }

	    @PostMapping
	    public ResponseEntity<CompanyResponseDTO> createCompany(
	            @Valid @RequestBody CompanyRequestDTO request) {
	    	System.out.println("Inside createCompany");
	        Company company = companyMapper.toEntity(request);
	        company = companyService.createCompany(company);
	     
	        return ResponseEntity.ok(companyMapper.toDto(company));
	    }

	    @PostMapping("/providers")
	    public ResponseEntity<ProviderResponseDTO> createProvider(
	            @Valid @RequestBody ProviderRequestDTO request) {
	        Provider provider = companyMapper.toEntity(request);
	        provider = companyService.createProvider(provider);
	        return ResponseEntity.ok(companyMapper.toDto(provider));
	    }
	  
	    @PostMapping("/seekers")
	    public ResponseEntity<SeekerResponseDTO> createSeeker(
	            @Valid @RequestBody SeekerRequestDTO request) {
	        Seeker seeker = companyMapper.toEntity(request);
	        seeker = companyService.createSeeker(seeker);
	        return ResponseEntity.ok(companyMapper.toDto(seeker));
	    }

	    @GetMapping("/providers/{id}")
	    public ResponseEntity<ProviderResponseDTO> getProvider(@PathVariable UUID id) {
	        Provider provider = companyService.getProviderById(id);
	        return ResponseEntity.ok(companyMapper.toDto(provider));
	    }

	    @GetMapping("/seekers/{id}")
	    public ResponseEntity<SeekerResponseDTO> getSeeker(@PathVariable UUID id) {
	        Seeker seeker = companyService.getSeekerById(id);
	        return ResponseEntity.ok(companyMapper.toDto(seeker));
	    }
	
//   private final CompanyService companyService;

  

//   // Company endpoints
//   @PostMapping
//   public ResponseEntity<Company> createCompany(@RequestBody Company company) {
//       Company savedCompany = companyService.createCompany(company);
//       return ResponseEntity.ok(savedCompany);
//   }
//
//   @GetMapping
//   public ResponseEntity<List<Company>> getAllCompanies() {
//       List<Company> companies = companyService.getAllCompanies();
//       return ResponseEntity.ok(companies);
//   }
//
//   @GetMapping("/{id}")
//   public ResponseEntity<Company> getCompanyById(@PathVariable UUID id) {
//       return companyService.getCompanyById(id)
//               .map(ResponseEntity::ok)
//               .orElse(ResponseEntity.notFound().build());
//   }
//
//   @PutMapping("/{id}")
//   public ResponseEntity<Company> updateCompany(@PathVariable UUID id, @RequestBody Company company) {
//       return ResponseEntity.ok(companyService.updateCompany(id, company));
//   }
//
//   @DeleteMapping("/{id}")
//   public ResponseEntity<Void> deleteCompany(@PathVariable UUID id) {
//       companyService.deleteCompany(id);
//       return ResponseEntity.ok().build();
//   }
//
//   // Provider endpoints
//   @PostMapping("/providers")
//   public ResponseEntity<Provider> createProvider(@RequestBody Provider provider) {
//       Provider savedProvider = companyService.createProvider(provider);
//       return ResponseEntity.ok(savedProvider);
//   }
//
//   @GetMapping("/providers")
//   public ResponseEntity<List<Provider>> getAllProviders() {
//       List<Provider> providers = companyService.getAllProviders();
//       return ResponseEntity.ok(providers);
//   }
//
//   @GetMapping("/providers/{id}")
//   public ResponseEntity<Provider> getProviderById(@PathVariable UUID id) {
//       return companyService.getProviderById(id)
//               .map(ResponseEntity::ok)
//               .orElse(ResponseEntity.notFound().build());
//   }
//
//   // Provider search endpoints
//   @GetMapping("/providers/search/tech")
//   public ResponseEntity<List<Provider>> findProvidersByTechnology(
//           @RequestParam String technology) {
//       return ResponseEntity.ok(companyService.findProvidersByTechnology(technology));
//   }
//
//   @GetMapping("/providers/search/service")
//   public ResponseEntity<List<Provider>> findProvidersByService(
//           @RequestParam String service) {
//       return ResponseEntity.ok(companyService.findProvidersByService(service));
//   }
//
//   @GetMapping("/providers/search/size")
//   public ResponseEntity<List<Provider>> findProvidersByCompanySize(
//           @RequestParam(required = false) CompanySize minSize,
//           @RequestParam(required = false) CompanySize maxSize) {
//       return ResponseEntity.ok(companyService.findProvidersByCompanySize(minSize, maxSize));
//   }
//
//   @GetMapping("/providers/search/certification")
//   public ResponseEntity<List<Provider>> findProvidersByCertification(
//           @RequestParam String certification) {
//       return ResponseEntity.ok(companyService.findProvidersByCertification(certification));
//   }
//
//   // Seeker search endpoints
//   @GetMapping("/seekers/search/tech")
//   public ResponseEntity<List<Seeker>> findSeekersByTechnology(
//           @RequestParam String technology) {
//       List<Seeker> seekers = companyService.findSeekersByTechnology(technology);
//       return ResponseEntity.ok(seekers);
//   }
//
//   @GetMapping("/seekers/search/budget")
//   public ResponseEntity<List<Seeker>> findSeekersByBudgetRange(
//           @RequestParam String budgetRange) {
//       List<Seeker> seekers = companyService.findSeekersByBudgetRange(budgetRange);
//       return ResponseEntity.ok(seekers);
//   }
//
//   // Error handling
//   @ExceptionHandler(RuntimeException.class)
//   public ResponseEntity<String> handleRuntimeException(RuntimeException ex) {
//       return ResponseEntity.badRequest().body(ex.getMessage());
//   }
}