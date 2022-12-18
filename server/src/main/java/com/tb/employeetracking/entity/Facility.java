package com.tb.employeetracking.entity;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "facilities")

public class Facility {

    @Id
    @Column(name = "facility_id")
    private Long id;

    @Column(name = "facility_name")
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "executive_id")
    private Executive executive;

}
