package com.tb.employeetracking.api.controller;

import com.tb.employeetracking.dto.EmployeeInfo;
import com.tb.employeetracking.dto.UpdateEmployeeRequest1;
import com.tb.employeetracking.dto.UpdateEmployeeRequest2;
import com.tb.employeetracking.entity.Employee;
import com.tb.employeetracking.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    /*@GetMapping
    public List<Employee> getAllEmployees(@RequestParam Optional<String> mission) {
        return employeeService.getAll(mission);
    }

     */

    @GetMapping
    public List<EmployeeInfo> getAllEmployees(@RequestParam Optional<String> mission){
        return employeeService.getInfo(mission);
    }

    @GetMapping("/{employeeId}")
    public EmployeeInfo getTheEmployee(@PathVariable Long employeeId) {
        return employeeService.getEmployeeInfo(employeeId);
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    @DeleteMapping("/{employeeId}")
    public void deleteEmployee(@PathVariable Long employeeId) {
        employeeService.delete(employeeId);
    }

    @PutMapping("/{employeeId}/nsn") // JUST UPDATE FOR NAME , SURNAME AND NATIONAL ID
    public Employee updateEmployee(@PathVariable Long employeeId ,
                                   @RequestBody UpdateEmployeeRequest1 updateEmployeeRequest1){
        return employeeService.update1(employeeId ,updateEmployeeRequest1);
    }
    @PutMapping("/{employeeId}/ep") // JUST UPDATE FOR E-MAIL AND PHONE NUMBER
    public Employee updateEmployee(@PathVariable Long employeeId ,
                                   @RequestBody UpdateEmployeeRequest2 updateEmployeeRequest2){
        return employeeService.update2(employeeId , updateEmployeeRequest2);
    }

}
