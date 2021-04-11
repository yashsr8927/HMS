package com.hospital.management.hManagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.management.hManagement.exception.ResourceNotFoundException;
import com.hospital.management.hManagement.models.Patient;
import com.hospital.management.hManagement.repository.PatientRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class AllPatientController {

	@Autowired
	private PatientRepository patientRepository;
	
	// get all patients
	@GetMapping("/patient_details")
	public List<Patient> getAllPatients(){
		return patientRepository.findAll();
	}		
	
	// get patient by id rest api
	@GetMapping("/patient_details/{id}")
	public ResponseEntity<Patient> getPatientById(@PathVariable Long id) {
		Patient patient = patientRepository.findById(id)
			   .orElseThrow(() -> new ResourceNotFoundException("Doctors not exist with id :" + id));
			return ResponseEntity.ok(patient);
		}
	
	// update patient rest api
	@PutMapping("/patient_details/{id}")
	public ResponseEntity<Patient> updatePatient(@PathVariable Long id, @RequestBody Patient patient_details){
		Patient patient = patientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + id));
		
		patient.setPatientName(patient_details.getPatientName());
		patient.setSfName(patient_details.getSfName());
		patient.setAge(patient_details.getAge());
		patient.setGender(patient_details.getGender());
		patient.setCity(patient_details.getCity());
		patient.setWard(patient_details.getWard());
		patient.setR_no(patient_details.getR_no());
		patient.setA_date(patient_details.getA_date());
		
		Patient updatedPatient = patientRepository.save(patient);
		return ResponseEntity.ok(updatedPatient);
	}
	
	// delete patient rest api
	@DeleteMapping("/patient_details/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable Long id){
		Patient patient = patientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("patient not exist with id :" + id));
		
		patientRepository.delete(patient);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
