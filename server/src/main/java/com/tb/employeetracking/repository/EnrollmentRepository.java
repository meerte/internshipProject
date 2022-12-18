package com.tb.employeetracking.repository;

import com.tb.employeetracking.entity.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollment , Long> {
    List<Enrollment> findByFacilityId(Long facilityId);
    List<Enrollment> findByEmployeeId(Long employeeId);
}
