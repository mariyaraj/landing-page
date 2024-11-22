package com.ai2connect.cms.controller;

import com.ai2connect.cms.domain.model.Provider;
import com.ai2connect.cms.domain.repository.ProviderRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/providers")
public class ProviderController {

	private final ProviderRepository providerRepository;

	public ProviderController(ProviderRepository providerRepository) {
		this.providerRepository = providerRepository;
	}

	@PostMapping
	public ResponseEntity<Provider> createProvider(@RequestBody Provider provider) {
		Provider savedProvider = providerRepository.save(provider);
		return new ResponseEntity<>(savedProvider, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<Provider>> getAllProviders() {
		List<Provider> providers = providerRepository.findAll();
		return new ResponseEntity<>(providers, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Provider> getProviderById(@PathVariable UUID id) {
		Optional<Provider> provider = providerRepository.findById(id);
		return provider.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
				.orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Provider> updateProvider(@PathVariable UUID id, @RequestBody Provider providerDetails) {
		Optional<Provider> providerOptional = providerRepository.findById(id);

		if (providerOptional.isPresent()) {
			Provider provider = providerOptional.get();
			provider.setName(providerDetails.getName());
			provider.setEmail(providerDetails.getEmail());
			provider.setWebsite(providerDetails.getWebsite());
			provider.setPhone(providerDetails.getPhone());
			provider.setCompanySize(providerDetails.getCompanySize());
			provider.setStatus(providerDetails.getStatus());
//			provider.setSolutions(providerDetails.getSolutions());
//			provider.setSupportModel(providerDetails.getSupportModel());
//			provider.setCustomizationAvailable(providerDetails.isCustomizationAvailable());
//			provider.setCertifications(providerDetails.getCertifications());

			Provider updatedProvider = providerRepository.save(provider);
			return new ResponseEntity<>(updatedProvider, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteProvider(@PathVariable UUID id) {
		if (providerRepository.existsById(id)) {
			providerRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
