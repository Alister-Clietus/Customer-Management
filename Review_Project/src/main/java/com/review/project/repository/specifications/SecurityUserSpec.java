package com.review.project.repository.specifications;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Order;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

import com.review.project.entity.EntityClass;


public class SecurityUserSpec {
	public static Specification<EntityClass> getUserSpec(String searchParam) {
		return new Specification<EntityClass>() {
			public Predicate toPredicate(Root<EntityClass> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
				Predicate finalPredicate = null;
				JSONParser parser = new JSONParser();
				JSONObject searchObject;
				try {
					searchObject = (JSONObject) parser.parse(searchParam);
					String id = (String) searchObject.get("id");
					String name = (String) searchObject.get("name");
					String email = (String) searchObject.get("email");
					String phonenumber = (String) searchObject.get("phonenumber");
					String dob = (String) searchObject.get("dob");
					String status = (String) searchObject.get("status");
					String blood = (String) searchObject.get("blood");
					
		            if(!StringUtils.isEmpty(id)) 
		            {
		            	
		            	Predicate idPredicate = criteriaBuilder.like(criteriaBuilder.upper(root.get("id").get("id")),"%"+id.toUpperCase()+"%");
		            	finalPredicate = criteriaBuilder.and(idPredicate);
		            }
		            
		            if(!StringUtils.isEmpty(name)) 
		            {
		            	
		            	Predicate namePredicate = criteriaBuilder.like(criteriaBuilder.upper(root.get("id").get("name")),"%"+name.toUpperCase()+"%");
		            	if(finalPredicate!=null) {
		            		namePredicate = criteriaBuilder.and(finalPredicate, namePredicate);
		            	}else {
		            		finalPredicate = criteriaBuilder.and(namePredicate);
		            	}
		            	
		            }
		            
		            if(!StringUtils.isEmpty(email)) 
		            {
		            	
		            	Predicate emailPredicate = criteriaBuilder.like(criteriaBuilder.upper(root.get("email")),"%"+email.toUpperCase()+"%");
		            	if(finalPredicate!=null) {
		            		emailPredicate = criteriaBuilder.and(finalPredicate, emailPredicate);
		            	}else {
		            		finalPredicate = criteriaBuilder.and(emailPredicate);
		            	}
		            	
		            }
		            
		            
		            if(!StringUtils.isEmpty(phonenumber)) 
		            {
		            	
		            	Predicate phonenumberPredicate = criteriaBuilder.like(criteriaBuilder.upper(root.get("phonenumber")), "%"+phonenumber.toUpperCase()+"%");
		            	if(finalPredicate!=null) {
		            		finalPredicate = criteriaBuilder.and(finalPredicate, phonenumberPredicate);
		            	}else {
		            		finalPredicate = criteriaBuilder.and(phonenumberPredicate);
		            	}
		            }
		            
		            if(!StringUtils.isEmpty(dob)) 
		            {
		            	
		            	Predicate dobPredicate = criteriaBuilder.like(criteriaBuilder.upper(root.get("dob")), "%"+dob.toUpperCase()+"%");
		            	if(finalPredicate!=null) {
		            		finalPredicate = criteriaBuilder.and(finalPredicate, dobPredicate);
		            	}else {
		            		finalPredicate = criteriaBuilder.and(dobPredicate);
		            	}
		            }
		            
		            if(!StringUtils.isEmpty(status)) 
		            {
		          
		            	Predicate statusPredicate = criteriaBuilder.like(criteriaBuilder.upper(root.get("Status")), "%"+status.toUpperCase()+"%");
		            	if(finalPredicate!=null) {
		            		finalPredicate = criteriaBuilder.and(finalPredicate, statusPredicate);
		            	}else {
		            		finalPredicate = criteriaBuilder.and(statusPredicate);
		            	}
		            }
		            if(!StringUtils.isEmpty(blood)) 
		            {
		          
		            	Predicate bloodPredicate = criteriaBuilder.like(criteriaBuilder.upper(root.get("blood")), "%"+blood.toUpperCase()+"%");
		            	if(finalPredicate!=null) {
		            		finalPredicate = criteriaBuilder.and(finalPredicate, bloodPredicate);
		            	}else {
		            		finalPredicate = criteriaBuilder.and(bloodPredicate);
		            	}
		            }
		            
		            Order proTimeOrder = criteriaBuilder.desc(root.get("id"));
		            query.orderBy(proTimeOrder);
		            
				} catch (ParseException e) 
				{
					e.printStackTrace();
				}
	            
				return finalPredicate;
			}
		};
	}
}


