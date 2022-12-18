package com.tb.employeetracking.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Data
@Table(name = "enrollments")
public class Enrollment {

    @Id
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Employee employee;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "facility_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Facility facility;
}
