package com.library.auth.serviceImp;

import java.util.Collections;
import java.util.Optional;
import java.util.Set;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.library.auth.dto.LoginDTO;
import com.library.auth.dto.SignupDTO;
import com.library.auth.entity.UserEntity;
import com.library.auth.repository.AuthRepository;
import com.library.auth.service.AuthService;

@Service
public class AuthServiceImp implements AuthService
{
	private static Logger logger = LogManager.getLogger(AuthServiceImp.class);

	PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	@Autowired
	AuthRepository repo;
	
	public ResponseEntity<?> addUser(SignupDTO dto)
	{
		UserEntity entity = new UserEntity();
		try
		{
			entity.setEmail(dto.getEmail());
			entity.setName(dto.getName());
			String encodedPassword = passwordEncoder.encode(dto.getPassword());
			entity.setPassword(encodedPassword);
			entity.setPhoneNumber(dto.getPhoneNumber());
			entity.setRoles("USER");
			repo.save(entity);
			return new ResponseEntity<>("Successfully Inserted",HttpStatus.OK);
		}
		catch(Exception e)
		{
			logger.error("Error:" + e.getMessage(), e);
			return new ResponseEntity<>("Exception Occured",HttpStatus.OK);


		}

	}
	
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException 
	{
		try
		{
	        Optional<UserEntity> opt = repo.findIdByEmail(email);
	        if (opt.isEmpty()) {
	            throw new UsernameNotFoundException("User with email: " + email + " not found!");
	        } else {
	            UserEntity user = opt.get();
	            Set<SimpleGrantedAuthority> authorities = Collections.singleton(new SimpleGrantedAuthority(user.getRoles()));
	            return new org.springframework.security.core.userdetails.User(
	                    user.getEmail(),
	                    user.getPassword(),
	                    authorities
	            );
	        }
			
		}
		catch(Exception e)
		{
			logger.error("Error:" + e.getMessage(), e);
            return new org.springframework.security.core.userdetails.User(null,null,null
            );
		}

    }
	
	public boolean checkemailpassword(LoginDTO ldto)
	{
		try
		{
			Optional<UserEntity> opt = repo.findIdByEmail(ldto.getEmail());
	        if (opt.isEmpty()) 
	        {
	        	return false;
	        }
	        else
	        {
	        	UserEntity user = opt.get();
	    		if(user.getEmail().equals(ldto.getEmail()) && passwordEncoder.matches(ldto.getPassword(), user.getPassword()))
	    		{
	    			return true;
	    		}
	    		return false;
			
	        }
		}
		catch(Exception e)
		{
			logger.error("Error:" + e.getMessage(), e);
			return false;
		}

	
	

    }
	

}
