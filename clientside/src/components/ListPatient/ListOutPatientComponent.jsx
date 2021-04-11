import React, { Component } from 'react';
import PatientService from '../../services/PatientService';
import Addicon from '../../addicon.svg';

class ListOutPatientComponent extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            category: 'out',
            patient_details: []
        }
    }

    componentDidMount(){
        PatientService.getPatientByCategory().then((res) => {
            this.setState({ patient_details: res.data.filter(patient => patient.category === this.state.category)});
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
                                    <th style={{border: "2px solid black"}}>Age</th>
                                    <th style={{border: "2px solid black"}}>City </th>
                                    <th style={{border: "2px solid black"}}> Malady</th>
                                </tr>
                            </thead>
                            <tbody  style={{border: "2px solid black"}}>
                                {
                                    this.state.patient_details.map(
                                        patient => 
                                        <tr key = {patient.id}  style={{border: "3px solid black"}}>
                                             <td class="alert alert-danger" role="alert" style={{textAlign:"center",border: "2px solid black"}}> { patient.patientName} </td>   
                                             <td class="alert alert-info" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {patient.sfName}</td>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {patient.gender}</td>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {patient.age}</td>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {patient.city}</td>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {patient.malady}</td>
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

export default ListOutPatientComponent
