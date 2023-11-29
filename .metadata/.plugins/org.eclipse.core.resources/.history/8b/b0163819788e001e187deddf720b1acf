package com.library.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.auth.dto.JwtResponseDTO;
import com.library.auth.dto.LoginDTO;
import com.library.auth.dto.SignupDTO;
import com.library.auth.jwt.JWTServices;
import com.library.auth.serviceImp.AuthServiceImp;

@RestController
@RequestMapping("/auth")
public class AuthController 
{
    @Autowired
    private JWTServices jwtUtil;
    
	@Autowired
	AuthServiceImp service;
    
    
	@PostMapping("/signup")
	ResponseEntity<?> registerUser(@RequestBody SignupDTO dto)
	{
		return new ResponseEntity<>(service.addUser(dto),HttpStatus.OK);
	}
	
    @PostMapping("/login")
    public ResponseEntity<?> LoginandGenerate(@RequestBody LoginDTO dto) 
    {
    	if(service.checkemailpassword(dto))
    	{
            final UserDetails userDetails = service.loadUserByUsername(dto.getEmail());
            String token = jwtUtil.generateToken(userDetails);
            JwtResponseDTO jwt=new JwtResponseDTO();
            jwt.setToken(token);
            jwt.setUsername(dto.getName());
            return new ResponseEntity<>(jwt,HttpStatus.OK);
    	}
    	else
    	{
            return new ResponseEntity<>("UserName or Password is Incorrect",HttpStatus.OK);

    	}

    }

}
