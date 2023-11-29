package com.review.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.review.project.entity.EntityClass;
import com.review.project.entity.EntityID;

@Repository
public interface RepositoryClass extends JpaRepository<EntityClass,EntityID>,JpaSpecificationExecutor<EntityClass>
{

}