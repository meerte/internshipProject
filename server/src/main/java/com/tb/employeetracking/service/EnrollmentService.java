package com.tb.employeetracking.service;

import com.tb.employeetracking.dto.EmployEmployee;
import com.tb.employeetracking.dto.EnrollmentInfoResponse;
import com.tb.employeetracking.entity.Employee;
import com.tb.employeetracking.entity.Enrollment;
import com.tb.employeetracking.entity.Facility;
import com.tb.employeetracking.repository.EnrollmentRepository;
import org.jetbrains.annotations.NotNull; //line 40
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EnrollmentService {
    private final EnrollmentRepository enrollmentRepository;
    private final EmployeeService employeeService;
    private final FacilityService facilityService;

    public EnrollmentService(EnrollmentRepository enrollmentRepository,
                             EmployeeService employeeService,
                             FacilityService facilityService) {
        this.enrollmentRepository = enrollmentRepository;
        this.employeeService = employeeService;
        this.facilityService = facilityService;
    }

    public List<EnrollmentInfoResponse> getAll(Optional<Long> facilityId,
                                               Optional<Long> employeeId) {
        List<Enrollment> enrollments;
        if (facilityId.isPresent()) {
            enrollments = enrollmentRepository.findByFacilityId(facilityId.get());
        } else if (employeeId.isPresent()) {
            enrollments = enrollmentRepository.findByEmployeeId(employeeId.get());
        } else
            enrollments = enrollmentRepository.findAll();
        return enrollments.stream().map(EnrollmentInfoResponse::new).collect(Collectors.toList());
    }

    public Enrollment enrollTheEmployee(@NotNull EmployEmployee employEmployee) {
        Employee toEnroll = employeeService.getEmployee(employEmployee.getEmployeeId());
        Facility toUpdate = facilityService.getFacility(employEmployee.getFacilityId());

        if (toEnroll != null && toUpdate != null) {
            Enrollment enroll = new Enrollment();
            enroll.setEmployee(toEnroll);
            enroll.setFacility(toUpdate);
            enroll.setId(employEmployee.getId());
            return enrollmentRepository.save(enroll);
        } else
            return null;
    }
    public void delete(Long enrollmentId) {
        enrollmentRepository.deleteById(enrollmentId);
    }

}
