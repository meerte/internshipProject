package com.tb.employeetracking.api.controller;


import com.tb.employeetracking.dto.*;
import com.tb.employeetracking.entity.Facility;
import com.tb.employeetracking.service.FacilityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/facilities")
public class FacilityController {

    private final FacilityService facilityService;

    public FacilityController(FacilityService facilityService) {
        this.facilityService = facilityService;
    }

    @GetMapping
    public List<FacilityInfoResponse> getAll() {
        return facilityService.getAllFacilities();
    }

    @PostMapping
    public Facility addFacility(@RequestBody Facility facility) {
        return facilityService.createFacility(facility);
    }

    @PutMapping("/employ/executive")
    public EmployExecutiveResponse employExecutive(@RequestBody
                                                               EmployExecutiveRequest employExecutiveRequest) {
        return facilityService.appointExecutive(employExecutiveRequest);
    }
    @DeleteMapping("/{facilityId}")
    public void deleteFacility(@PathVariable Long facilityId){
        facilityService.delete(facilityId);
    }
}
