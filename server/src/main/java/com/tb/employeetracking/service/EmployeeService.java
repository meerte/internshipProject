package com.tb.employeetracking.service;

import com.tb.employeetracking.dto.EmployeeInfo;
import com.tb.employeetracking.dto.UpdateEmployeeRequest1;
import com.tb.employeetracking.dto.UpdateEmployeeRequest2;
import com.tb.employeetracking.entity.Employee;
import com.tb.employeetracking.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAll(Optional<String> mission) {
        List<Employee> employeeList;
        if (mission.isPresent()){
            employeeList = employeeRepository.findByMission(mission.get());
        }else
            employeeList = employeeRepository.findAll();
        return employeeList;
    }

    public List<EmployeeInfo> getInfo(Optional<String> mission){
        List<Employee> employeeList;
        if (mission.isPresent()){
            employeeList = employeeRepository.findByMission(mission.get());
        }else
            employeeList = employeeRepository.findAll();
        return employeeList.stream().map(EmployeeInfo::new).collect(Collectors.toList());

    }


    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee getEmployee(Long employeeId) {
        return employeeRepository.findById(employeeId).orElse(null);
    }


    public EmployeeInfo getEmployeeInfo(Long employeeId){
        return new EmployeeInfo(employeeRepository.findById(employeeId).get());
    }

    public void delete(Long employeeId) {
        employeeRepository.deleteById(employeeId);
    }

    public Employee update1(Long employeeId, UpdateEmployeeRequest1 updateEmployeeRequest1) {
        Optional<Employee> toUpdateOptional = employeeRepository.findById(employeeId);
        if (toUpdateOptional.isPresent()){
            Employee toUpdate = toUpdateOptional.get();
            toUpdate.setName(updateEmployeeRequest1.getName());
            toUpdate.setSurname(updateEmployeeRequest1.getSurname());
            toUpdate.setNationalId(updateEmployeeRequest1.getNationalId());
            return employeeRepository.save(toUpdate);
        } else
            return null;
    }
    public Employee update2(Long employeeId , UpdateEmployeeRequest2 updateEmployeeRequest2){
        Optional<Employee> toUpdateOptional = employeeRepository.findById(employeeId);
        if (toUpdateOptional.isPresent()){
            Employee toUpdate = toUpdateOptional.get();
            toUpdate.setEmail(updateEmployeeRequest2.getEmail());
            toUpdate.setPhoneNumber(updateEmployeeRequest2.getPhoneNumber());
            return employeeRepository.save(toUpdate);
        }
        else
            return null;
    }
}
