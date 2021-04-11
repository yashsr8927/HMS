import axios from 'axios';

const PATIENT_API_BASE_URL = "http://localhost:8888/api/patient_details";

class AllPatientService {

    getPatient(){
        return axios.get(PATIENT_API_BASE_URL);
    }

    getPatientById(patientId){
        return axios.get(PATIENT_API_BASE_URL + '/' + patientId);
    }

    updatePatient(patient, patientId){
        return axios.put(PATIENT_API_BASE_URL + '/' +  patient, patientId);
    }

    deletePatient(patientId){
        return axios.delete(PATIENT_API_BASE_URL + '/' + patientId);
    }
}

export default new AllPatientService()