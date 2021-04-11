import axios from 'axios';

const PATIENT_API_BASE_URL = "http://localhost:8888/api/v1/patient_details";

class PatientService {

    getPatient(){
        return axios.get(PATIENT_API_BASE_URL);
    }

    createPatient(patient){
        return axios.post(PATIENT_API_BASE_URL, patient);
    }

    getPatientByCategory(category){
        return axios.get(PATIENT_API_BASE_URL, category)
    }

    getPatientById(patientId){
        return axios.get(PATIENT_API_BASE_URL + '/' + patientId);
    }

    updatePatient(patient, patientId){
        return axios.put(PATIENT_API_BASE_URL + '/' + patientId, patient);
    }

    deletePatient(patientId){
        return axios.delete(PATIENT_API_BASE_URL + '/' + patientId);
    }
}

export default new PatientService()