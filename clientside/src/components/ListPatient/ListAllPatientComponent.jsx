//imports
import React, { Component } from 'react';
import AllPatientService from '../../services/AllPatientService';

import Addicon from '../../addicon.svg';

class ListAllPatientComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                patient_details: []
        }
        this.ediPatient = this.editPatient.bind(this);
        this.deletePatient = this.deletePatient.bind(this);
    }

    deletePatient(p_id){
        AllPatientService.deletePatient(p_id).then( res => {
            this.setState({patient_details: this.state.patient_details.filter(patient => patient.p_id !== p_id)});
        });
    }
    
    editPatient(p_id){     
        this.props.history.push(`/update-patients/${p_id}`);
    }

    componentDidMount(){
        AllPatientService.getPatient().then((res) => {
            this.setState({  patient_details: res.data});
        });
    }


    render() {
        return (
            <div>
                 <h2 className="text-left" style={{fontFamily:"Times New Roman",fontSize:"30px",}} >Patients List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered"  style={{border: "2px solid black"}}>

                            <thead  style={{border: "2px solid black"}}>
                                <tr style={{fontFamily:"Times New Roman",fontSize:'18px',fontSmooth:'10px',textAlign:'center',fontFamily:"sans-serif"}} class="alert alert-secondary" role="alert">
                                    <th style={{border: "2px solid black"}}> Patient's Name</th>
                                    <th style={{border: "2px solid black"}}> s/f_Name</th>
                                    <th style={{border: "2px solid black"}}> Gender</th>
                                    <th style={{border: "2px solid black"}}> Age </th>
                                    <th style={{border: "2px solid black"}}> City </th>
                                    <th style={{border: "2px solid black"}}> Malady</th>
                                    <th style={{border: "2px solid black"}}> Ward</th>
                                    <th style={{border: "2px solid black"}}> Room no</th>
                                    <th style={{border: "2px solid black"}}> Admit date</th>
                                    <th style={{border: "2px solid black"}}> Action</th>
                                </tr>
                            </thead>
                            <tbody  style={{border: "2px solid black"}}>
                                {
                                    this.state.patient_details.map(
                                        patient => 
                                        <tr key = {patient.p_id}  style={{border: "3px solid black"}}>
                                             <td class="alert alert-danger" role="alert" style={{textAlign:"center",border: "2px solid black"}}> { patient.patientName} </td>   
                                             <td class="alert alert-info" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {patient.sfName}</td>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {patient.gender}</td>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {patient.age}</td>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {patient.city}</td>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {patient.malady}</td>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {patient.ward}</td>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {patient.r_no}</td>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {patient.a_date}</td>
                                             <td style={{textAlign:"center"}}>
                                                 <button onClick={ () => this.editPatient(patient.p_id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePatient(patient.p_id)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListAllPatientComponent
