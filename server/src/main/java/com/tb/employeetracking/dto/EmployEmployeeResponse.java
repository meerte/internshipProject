package com.tb.employeetracking.dto;

import com.tb.employeetracking.entity.Enrollment;
import lombok.Data;

@Data
public class EmployEmployeeResponse {
    private Long facilityId;
    private String facilityName;
    private Long employeeId;
    private String employeeName;
    private String employeeEmail;

    /**
     * ÇALIŞMAYABİLİR
     */

    public EmployEmployeeResponse(Enrollment entity) {
        this.facilityId = entity.getFacility().getId();
        this.facilityName = entity.getFacility().getName();
        this.employeeId = entity.getEmployee().getId();
        this.employeeName = entity.getEmployee().getName();
        this.employeeEmail = entity.getEmployee().getEmail();
    }
}
