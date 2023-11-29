package com.review.project.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="USER_DETAILS_TABLE")
public class EntityClass 
{
	@EmbeddedId
	EntityID id;
	
	@Column(name="email")
	private String email;
	@Column(name="phonenumber")
	private String phonenumber;
	@Column(name="status")
	private String Status;
	@Column(name="mdate")
	private Date mdate;
	@Column(name="cdate")
	private Date cdate;
	@Column(name="DOB")
	private String dob;
	@Column(name="blood")
	private String blood;
	
	@Column(name="CREATED_BY")
	private String createdby;
	
	@Column(name="MODIFIED_BY")
	private String modifiedby;

	
	
	public String getCreatedby() {
		return createdby;
	}
	public void setCreatedby(String createdby) {
		this.createdby = createdby;
	}
	public String getModifiedby() {
		return modifiedby;
	}
	public void setModifiedby(String modifiedby) {
		this.modifiedby = modifiedby;
	}
	public String getBlood() {
		return blood;
	}
	public void setBlood(String blood) {
		this.blood = blood;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public EntityID getId() {
		return id;
	}
	public void setId(EntityID id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
	public Date getMdate() {
		return mdate;
	}
	public void setMdate(Date mdate) {
		this.mdate = mdate;
	}
	public Date getCdate() {
		return cdate;
	}
	public void setCdate(Date currentDate) {
		this.cdate = currentDate;
	}
	
}
