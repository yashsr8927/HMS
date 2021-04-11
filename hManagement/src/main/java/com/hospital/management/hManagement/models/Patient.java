package com.hospital.management.hManagement.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "patient_details")
public class Patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long p_id;
	
	@Column(name = "p_name")
	private String patientName;

	@Column(name = "sf_name")
	private String sfName;
	
	@Column(name = "age")
	private int age;
	
	@Column(name = "gender")
	private String gender;

	@Column(name = "city")
	private String city;
	
	@Column(name = "malady")
	private String malady;
	
	@Column(name = "category")
	private String category;
	
	@Column(name = "Ward")
	private String ward;
	
	@Column(name = "Room_no")
	private int r_no;
	
	@Column(name = "Admit_on")
	private String a_date;
	
	public Patient() {
		
	}

	public Patient(long p_id, String patientName, String sfName, int age, String gender, String city, String malady,
			String category, String ward, int r_no, String a_date) 
	{
		this.p_id = p_id;
		this.patientName = patientName;
		this.sfName = sfName;
		this.age = age;
		this.gender = gender;
		this.city = city;
		this.malady = malady;
		this.category = category;
		this.ward = ward;
		this.r_no = r_no;
		this.a_date = a_date;
	}

	public long getP_id() {
		return p_id;
	}

	public void setP_id(long p_id) {
		this.p_id = p_id;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getSfName() {
		return sfName;
	}

	public void setSfName(String sfName) {
		this.sfName = sfName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getMalady() {
		return malady;
	}

	public void setMalady(String malady) {
		this.malady = malady;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getWard() {
		return ward;
	}

	public void setWard(String ward) {
		this.ward = ward;
	}

	public int getR_no() {
		return r_no;
	}

	public void setR_no(int r_no) {
		this.r_no = r_no;
	}

	public String getA_date() {
		return a_date;
	}

	public void setA_date(String a_date) {
		this.a_date = a_date;
	}
	
}
