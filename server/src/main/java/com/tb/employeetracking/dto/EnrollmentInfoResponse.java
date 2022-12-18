package com.tb.employeetracking.dto;


import com.tb.employeetracking.entity.Enrollment;
import lombok.Data;

@Data
public class EnrollmentInfoResponse {

    private Long enrollmentId;
    private Long facilityId;
    private String facilityName;
    private Long employeeId;
    private String employeeName;
    private String employeeEmail;

    public EnrollmentInfoResponse(Enrollment entity){
        this.enrollmentId = entity.getId();
        this.facilityId = entity.getFacility().getId();
        this.facilityName = entity.getFacility().getName();
        this.employeeId = entity.getEmployee().getId();
        this.employeeName = entity.getEmployee().getName();
        this.employeeEmail = entity.getEmployee().getEmail();
    }
}
