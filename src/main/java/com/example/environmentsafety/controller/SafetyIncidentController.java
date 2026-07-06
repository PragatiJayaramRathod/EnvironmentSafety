package com.example.environmentsafety.controller;

import com.example.environmentsafety.entity.SafetyIncident;
import com.example.environmentsafety.repository.SafetyIncidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/incidents")
public class SafetyIncidentController {

    @Autowired
    private SafetyIncidentRepository repository;

    @GetMapping
    public List<SafetyIncident> getAllIncidents() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<SafetyIncident> getIncidentById(@PathVariable Long id) {
        Optional<SafetyIncident> incident = repository.findById(id);
        return incident.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<SafetyIncident> createIncident(@RequestBody SafetyIncident incident) {
        SafetyIncident savedIncident = repository.save(incident);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedIncident);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SafetyIncident> updateIncident(@PathVariable Long id, @RequestBody SafetyIncident incidentDetails) {
        return repository.findById(id).map(incident -> {
            incident.setTitle(incidentDetails.getTitle());
            incident.setDescription(incidentDetails.getDescription());
            incident.setLocation(incidentDetails.getLocation());
            incident.setSeverity(incidentDetails.getSeverity());
            SafetyIncident updatedIncident = repository.save(incident);
            return ResponseEntity.ok(updatedIncident);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIncident(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
