package com.tb.employeetracking.service;

import com.tb.employeetracking.dto.*;
import com.tb.employeetracking.entity.Employee;
import com.tb.employeetracking.entity.Executive;
import com.tb.employeetracking.entity.Facility;
import com.tb.employeetracking.repository.FacilityRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FacilityService {

    private final FacilityRepository facilityRepository;
    private final ExecutiveService executiveService;


    public FacilityService(FacilityRepository facilityRepository, ExecutiveService executiveService) {
        this.facilityRepository = facilityRepository;
        this.executiveService = executiveService;
    }

    public List<FacilityInfoResponse> getAllFacilities() {
        List<Facility> facilities = facilityRepository.findAll();
        return facilities.stream().map(FacilityInfoResponse::new).collect(Collectors.toList());
    }

    public Facility getFacility(Long facilityId) {
        return facilityRepository.findById(facilityId).orElse(null);
    }

    public Facility createFacility(Facility facility) {
        return facilityRepository.save(facility);
    }

    public EmployExecutiveResponse appointExecutive(EmployExecutiveRequest employExecutiveRequest) {
        Facility toUpdate = getFacility(employExecutiveRequest.getFacilityId());
        Executive toAppoint = executiveService.getExecutive(employExecutiveRequest.getExecutiveId());

        if (toAppoint != null) {
            toUpdate.setExecutive(toAppoint);
            facilityRepository.save(toUpdate);
            return new EmployExecutiveResponse(toUpdate);
        } else
            return null;
    }


    public void delete(Long facilityId) {
        facilityRepository.deleteById(facilityId);
    }
}
