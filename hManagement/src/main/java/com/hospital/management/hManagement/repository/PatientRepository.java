package com.hospital.management.hManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.hospital.management.hManagement.models.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{

	@Query("from Patient where category = :abc")
	public List<Patient> f1 (@Param("abc")String category);
	
}
