package com.tb.employeetracking.api.controller;

import com.tb.employeetracking.dto.EmployEmployee;
import com.tb.employeetracking.dto.EnrollmentInfoResponse;
import com.tb.employeetracking.entity.Enrollment;
import com.tb.employeetracking.service.EnrollmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/enrollments")
public class EnrollmentController {

    private final EnrollmentService enrollmentService;

    public EnrollmentController(EnrollmentService enrollmentService) {
        this.enrollmentService = enrollmentService;
    }


    @GetMapping
    public List<EnrollmentInfoResponse> getAllEnrollments(@RequestParam Optional<Long> facilityId ,
                                                          @RequestParam Optional<Long> employeeId) {
        return enrollmentService.getAll(facilityId , employeeId);
    }

    @PostMapping("/enroll/employee")
    public Enrollment enrollEmployee(@RequestBody EmployEmployee employEmployee) {
        return enrollmentService.enrollTheEmployee(employEmployee);
    }

    @DeleteMapping("/{enrollmentId}")
    public void deleteEnrollment(@PathVariable Long enrollmentId){
        enrollmentService.delete(enrollmentId);
    }
}
