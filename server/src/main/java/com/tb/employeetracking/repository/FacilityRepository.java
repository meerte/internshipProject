package com.tb.employeetracking.repository;

import com.tb.employeetracking.entity.Facility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FacilityRepository extends JpaRepository<Facility , Long> {
}
