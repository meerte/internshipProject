package com.tb.employeetracking.dto;


import com.tb.employeetracking.entity.Employee;
import lombok.Data;

@Data
public class EmployeeInfo {
    private Long id;
    private String name;
    private String surname;
    private int age ;
    private String nationalId;
    private String phoneNumber;
    private String email;
    private String school;
    private String mission;
    private String birthdayDate;
    private String startedDate;

    public EmployeeInfo(Employee entity){
        this.id= entity.getId();
        this.name= entity.getName();
        this.surname= entity.getSurname();
        this.nationalId =entity.getNationalId();
        this.age=entity.calculateAge(entity.getBirthdayDate());
        this.phoneNumber= entity.getPhoneNumber();
        this.email= entity.getEmail();
        this.school= entity.getSchool();
        this.mission= entity.getMission();
        this.birthdayDate= entity.getBirthdayDate();
        this.startedDate= entity.getStartedDate();
    }
}
