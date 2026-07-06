package com.example.environmentsafety.repository;

import com.example.environmentsafety.entity.SafetyIncident;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SafetyIncidentRepository extends JpaRepository<SafetyIncident, Long> {
}
