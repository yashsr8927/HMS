package com.hospital.management.hManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.management.hManagement.models.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long>{
	

}
