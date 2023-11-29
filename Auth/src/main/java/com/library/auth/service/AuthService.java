package com.library.auth.service;

import org.springframework.http.ResponseEntity;

import com.library.auth.dto.LoginDTO;
import com.library.auth.dto.SignupDTO;

public interface AuthService 
{
	public ResponseEntity<?> addUser(SignupDTO dto);
	public boolean checkemailpassword(LoginDTO ldto);

}
