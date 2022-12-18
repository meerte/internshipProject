package com.tb.employeetracking.dto;

import com.tb.employeetracking.entity.Facility;
import lombok.Data;

@Data
public class EmployExecutiveResponse {
    private Long facilityId;
    private String facilityName;
    private String executiveId;
    private String executiveName;
    private String executiveEmail;


    public EmployExecutiveResponse(Facility entity) {
        this.facilityId = entity.getId();
        this.facilityName = entity.getName();
        this.executiveId = entity.getExecutive().getExecutiveId();
        this.executiveName = entity.getExecutive().getName();
        this.executiveEmail = entity.getExecutive().getEmail();
    }
}
