package com.tb.employeetracking.api.controller;

import com.tb.employeetracking.dto.ExecutiveInfo;
import com.tb.employeetracking.entity.Executive;
import com.tb.employeetracking.service.ExecutiveService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/executives")
public class ExecutiveController {

    private final ExecutiveService executiveService;

    public ExecutiveController(ExecutiveService executiveService) {
        this.executiveService = executiveService;
    }

    /*
    @GetMapping
    public List<Executive> getAllExecutives(){
        return executiveService.getAll();
    }
     */

    @GetMapping
    public List<ExecutiveInfo> getAllExecutives(){
        return executiveService.getAll();
    }

    @GetMapping("/{executiveId}")
    public ExecutiveInfo getTheExecutive(@PathVariable String executiveId){
        return executiveService.getExecutiveInfo(executiveId);
    }

    @PostMapping
    public Executive addExecutive(@RequestBody Executive executive){
        return executiveService.createExecutive(executive);
    }
}
