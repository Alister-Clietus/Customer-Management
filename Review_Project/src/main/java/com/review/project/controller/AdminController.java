package com.review.project.controller;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.review.project.dto.IdDto;
import com.review.project.dto.UserDto;
import com.review.project.serviceimp.ServiceImplementation;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class AdminController 
{
	@Autowired 
	ServiceImplementation service;
	
	@PostMapping("/add")
	ResponseEntity<?> addDetails(@Valid @RequestBody UserDto dto)
	{
		return new ResponseEntity(service.postDetails(dto),HttpStatus.OK);
	}
	
	@PutMapping("/update")
	ResponseEntity<?> updateDetails(@Valid @RequestBody UserDto dto)
	{
		return new ResponseEntity(service.updateDetails(dto),HttpStatus.OK);
	}
	
	@PostMapping("/delete")
	ResponseEntity<?> deleteDetails(@Valid @RequestBody IdDto id)
	{
		return new ResponseEntity(service.deleteDetails(id),HttpStatus.OK);
	}

	@PostMapping("/getid")
	ResponseEntity<?> getByIdDetails(@Valid @RequestBody IdDto id)
	{
		return new ResponseEntity(service.getall(id),HttpStatus.OK);
	}
	
	@PutMapping("/verify")
	ResponseEntity<?> verifyDetails(@Valid @RequestBody IdDto id)
	{
		return new ResponseEntity(service.verifyDetails(id),HttpStatus.OK);
	}
	
	@GetMapping("/search")
	ResponseEntity<?> searchDetails(@RequestParam("searchParam") String searchParam, @RequestParam("iDisplayStart") String iDisplayStart,
			@RequestParam("iDisplayLength") String iDisplayLength)
	{
		JSONObject list = service.searchfor(searchParam, Integer.parseInt(iDisplayStart),
				Integer.parseInt(iDisplayLength));
		return new ResponseEntity(list,HttpStatus.OK);
	}
}
