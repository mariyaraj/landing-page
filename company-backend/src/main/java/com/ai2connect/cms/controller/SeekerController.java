package com.ai2connect.cms.controller;


import com.ai2connect.cms.domain.model.Seeker;
import com.ai2connect.cms.domain.repository.SeekerRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/seekers")
public class SeekerController {

    private final SeekerRepository seekerRepository;

    public SeekerController(SeekerRepository seekerRepository) {
        this.seekerRepository = seekerRepository;
    }

    @PostMapping
    public ResponseEntity<Seeker> createSeeker(@RequestBody Seeker seeker) {
        Seeker savedSeeker = seekerRepository.save(seeker);
        return new ResponseEntity<>(savedSeeker, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Seeker>> getAllSeekers() {
        List<Seeker> seekers = seekerRepository.findAll();
        return new ResponseEntity<>(seekers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Seeker> getSeekerById(@PathVariable UUID id) {
        Optional<Seeker> seeker = seekerRepository.findById(id);
        return seeker.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                     .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Seeker> updateSeeker(@PathVariable UUID id, @RequestBody Seeker seekerDetails) {
        Optional<Seeker> seekerOptional = seekerRepository.findById(id);

        if (seekerOptional.isPresent()) {
            Seeker seeker = seekerOptional.get();
            seeker.setName(seekerDetails.getName());
            seeker.setEmail(seekerDetails.getEmail());
            seeker.setWebsite(seekerDetails.getWebsite());
            seeker.setPhone(seekerDetails.getPhone());
            seeker.setCompanySize(seekerDetails.getCompanySize());
            seeker.setStatus(seekerDetails.getStatus());
//            seeker.setCurrentTechStack(seekerDetails.getCurrentTechStack());
//            seeker.setImplementationTimeline(seekerDetails.getImplementationTimeline());
//            seeker.setBudgetRange(seekerDetails.getBudgetRange());
//            seeker.setUseCases(seekerDetails.getUseCases());

            Seeker updatedSeeker = seekerRepository.save(seeker);
            return new ResponseEntity<>(updatedSeeker, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSeeker(@PathVariable UUID id) {
        if (seekerRepository.existsById(id)) {
            seekerRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
