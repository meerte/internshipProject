package com.tb.employeetracking.entity;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;

@Entity
@Data
@Table(name = "employees")

public class Employee {

    @Id
    @Column(name = "employee_id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    /*
    @Column(name = "age")
    private int age ;
     */
    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "national_id" , length = 11)
    private String nationalId;

    @Column(name = "school")
    private String school;

    @Column(name = "mission")
    private String mission;

    @Column(name = "birthday")
    private String birthdayDate;

    @Column(name = "job_start_date")
    private String startedDate;

    public int calculateAge(String birthdayDate){
        int day = Integer.parseInt(birthdayDate.substring(0,2));
        int month = Integer.parseInt(birthdayDate.substring(3,5));
        int year = Integer.parseInt(birthdayDate.substring(6));
        LocalDate today = LocalDate.now();
        LocalDate birthday =LocalDate.of(year ,month , day);
        Period period = Period.between(birthday, today);
        return period.getYears();
    }


}
