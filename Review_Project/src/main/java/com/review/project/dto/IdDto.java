package com.review.project.dto;

import jakarta.validation.constraints.NotEmpty;

public class IdDto 
{
	@NotEmpty
	private String name;
	@NotEmpty
	private String id;
	
	private String currentuser;
	
	public String getCurrentuser() {
		return currentuser;
	}
	public void setCurrentuser(String currentuser) {
		this.currentuser = currentuser;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	

}
