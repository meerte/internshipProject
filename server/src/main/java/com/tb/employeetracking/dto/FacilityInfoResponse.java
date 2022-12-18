package com.tb.employeetracking.dto;


import com.tb.employeetracking.entity.Facility;
import lombok.Data;
import org.jetbrains.annotations.NotNull;

@Data
public class FacilityInfoResponse {


    private Long facilityId;
    private String facilityName;
    private String executiveId;
    private String executiveName;
    private String executiveEmail;

    public FacilityInfoResponse(@NotNull Facility entity) {
        if (entity.getExecutive() != null) {
            this.executiveId= entity.getExecutive().getExecutiveId();
            this.executiveName = entity.getExecutive().getName();
            this.executiveEmail = entity.getExecutive().getEmail();
        } else {
            this.executiveId = null;
            this.executiveName = null;
            this.executiveEmail = null;
        }
        this.facilityId = entity.getId();
        this.facilityName = entity.getName();

    }

}
