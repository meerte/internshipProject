package com.tb.employeetracking.service;


import com.tb.employeetracking.dto.ExecutiveInfo;
import com.tb.employeetracking.entity.Executive;
import com.tb.employeetracking.repository.ExecutiveRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExecutiveService {

    private final ExecutiveRepository executiveRepository;

    public ExecutiveService(ExecutiveRepository executiveRepository) {
        this.executiveRepository = executiveRepository;
    }

    /*
    public List<Executive> getAll() {
        return executiveRepository.findAll();
    }
     */
    public ExecutiveInfo getExecutiveInfo(String executiveId){
        return new ExecutiveInfo(executiveRepository.findById(executiveId).get());
    }

    public Executive createExecutive(Executive executive) {
        return executiveRepository.save(executive);
    }

    public Executive getExecutive(String executiveId) {
        return executiveRepository.findById(executiveId).orElse(null);
    }

    public List<ExecutiveInfo> getAll() {
        List<Executive> executives = executiveRepository.findAll();
        return executives.stream().map(ExecutiveInfo::new).collect(Collectors.toList());
    }
}
