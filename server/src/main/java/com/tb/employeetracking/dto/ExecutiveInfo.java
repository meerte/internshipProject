package com.tb.employeetracking.dto;


import com.tb.employeetracking.entity.Executive;
import lombok.Data;

@Data
public class ExecutiveInfo {
    private String executiveId;
    private String name;
    private String surname;
    private int age ;
    private String phoneNumber;
    private String nationalId;
    private String email;
    private String school;
    private String mission;
    private String birthdayDate;
    private String startedDate;

    public ExecutiveInfo(Executive entity){
        this.executiveId= entity.getExecutiveId();
        this.name= entity.getName();
        this.surname= entity.getSurname();
        this.age=entity.calculateAge(entity.getBirthdayDate());
        this.phoneNumber= entity.getPhoneNumber();
        this.nationalId = entity.getNationalId();
        this.email= entity.getEmail();
        this.school= entity.getSchool();
        this.mission= entity.getMission();
        this.birthdayDate= entity.getBirthdayDate();
        this.startedDate= entity.getStartedDate();
    }
}
