package com.example.MypfaProject.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.example.MypfaProject.exception.ResourceNotFoundException;
import com.example.MypfaProject.model.Employee;
import com.example.MypfaProject.repository.EmployeeRepository;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;



@RestController

@RequestMapping("/api/v1/")

@CrossOrigin(origins="http://localhost:4200")

public class EmployeeController {

	@Autowired

	private EmployeeRepository employeeRepository;

	

	// get all employees

	@GetMapping("/employees")

	public List<Employee> getAllEmployee(){

		return employeeRepository.findAll();

	}

	//create employee rest api

	@PostMapping("/employees")

	public Employee createEmployee(@RequestBody Employee employee) {

		return employeeRepository.save(employee);

	}
	//get employee by id rest api
	@GetMapping("/employees/{id}")
public ResponseEntity <Employee >getEmployeeById( @PathVariable Long id) {
		
		Employee employee=employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id:" + id));
		return ResponseEntity.ok(employee);
	}
	//update employee rest api
	@PutMapping("/employees/{id}")
public ResponseEntity<Employee>updateEmployee(@PathVariable Long id,@RequestBody Employee employeeDetails){
		Employee employee=employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id:" + id));
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmail(employeeDetails.getEmail());
		Employee updateEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updateEmployee);
	}
       //delete employee rest api
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String,Boolean>>deleteEmployee(@PathVariable Long id){
		Employee employee =employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not exist with id :"+id));
		employeeRepository.delete(employee);
		Map<String,Boolean>response =new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}