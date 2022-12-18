package com.tb.employeetracking.repository;

import com.tb.employeetracking.entity.Executive;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExecutiveRepository extends JpaRepository<Executive , String> {

}
