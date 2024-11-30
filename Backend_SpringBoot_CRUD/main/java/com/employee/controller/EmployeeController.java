package com.employee.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.entity.Employee;
import com.employee.exc.ResNotFoundExc;
import com.employee.repo.EmployeeRepo;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/")
public class EmployeeController {

	@Autowired
	private EmployeeRepo employeeRepo;
	
	
	
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getSingleEmployee1(@PathVariable Integer id)
	{
		Employee emp= this.employeeRepo.findById(id).orElseThrow( ()-> new ResNotFoundExc("Not found "));
	
		return ResponseEntity.ok( emp );
		
		
	}
	
	@GetMapping("/employees")
	public ResponseEntity<List<Employee>> getAllEmployee()
	{
		 return ResponseEntity.ok(  this.employeeRepo.findAll() );
	}
	
	
	@PostMapping("/employees")
	public ResponseEntity<Employee> CreateEMp( @RequestBody Employee emp)
	{
		Employee emp1=this.employeeRepo.save(emp);
		return new ResponseEntity<Employee>( emp1,HttpStatus.CREATED);
		
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmp( @PathVariable Integer id)
	{
		Map<String,Boolean> map=new HashMap<String, Boolean>();
		
		Employee emp= this.employeeRepo.findById(id).orElseThrow( ()-> new ResNotFoundExc("Not found "));

		this.employeeRepo.delete(emp);
		map.put("deleted", true);
		return ResponseEntity.ok( map );
	}
}















