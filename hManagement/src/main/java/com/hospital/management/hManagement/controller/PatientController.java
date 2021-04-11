package com.hospital.management.hManagement.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.management.hManagement.models.Patient;
import com.hospital.management.hManagement.repository.PatientRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PatientController {

	@Autowired
	private PatientRepository patientRepository;
	
	// get all patients
	@GetMapping("/patient_details")
	public List<Patient> getAllPatients(){
		return patientRepository.findAll();
	}		
	
	// create patient rest api
	@PostMapping("/patient_details")
	public Patient createPatient(@RequestBody Patient patient) {
		
		if(patient.getCategory().equals("out"))
		{
			patient.setWard(null);
			patient.setR_no(0);
			patient.setA_date(null);
		}
		else
		{
			return patientRepository.save(patient);
		}
		return patientRepository.save(patient);
	}
	
	// get patient by category rest api
	@GetMapping("/patient_details/{category}")
	public  List<Patient> getPateintByCategory(@RequestParam("x")String category) {
		List<Patient> patient = patientRepository.f1(category);
		return patient;
	}
	
}

