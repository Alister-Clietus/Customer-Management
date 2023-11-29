package com.library.auth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.library.auth.entity.UserEntity;

@Repository
public interface AuthRepository extends JpaRepository<UserEntity, Long>
{

	Optional<UserEntity> findIdByEmail(String username);
	
	

}
