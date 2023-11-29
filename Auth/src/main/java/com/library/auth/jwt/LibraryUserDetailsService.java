package com.library.auth.jwt;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.library.auth.entity.UserEntity;
import com.library.auth.repository.AuthRepository;

public class LibraryUserDetailsService implements UserDetailsService
{
	
	@Autowired
	AuthRepository repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException 
	{
		
        if (usernameExistsInYourSystem(username)) 
        {

            return buildUserDetails(username);
        } 
        else 
        {
            
            throw new UsernameNotFoundException("Username not found: " + username);
        }
	}
	
    private boolean usernameExistsInYourSystem(String username) 
    {
        Optional<UserEntity> opt = repo.findIdByEmail(username);
        if(opt!=null)
        {
        	UserEntity details=opt.get();
        	return true;
        }
        else
        {
        	return false;
        }
        
    }
    
    private UserDetails buildUserDetails(String username) 
    {
    	Optional<UserEntity> opt = repo.findIdByEmail(username);
    	UserEntity details=opt.get();
    	return (UserDetails) details;
    }

}
