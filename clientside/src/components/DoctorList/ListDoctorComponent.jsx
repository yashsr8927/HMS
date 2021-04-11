import React, { Component } from 'react'
import DoctorService from '../../services/DoctorService'
import Addicon from '../../addicon.svg'

class ListDoctorComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                doctors: []
        }
        this.addDoctor = this.addDoctor.bind(this);
        this.editDoctor = this.editDoctor.bind(this);
        this.deleteDoctor = this.deleteDoctor.bind(this);
    }

    deleteDoctor(id){
        DoctorService.deleteDoctor(id).then( res => {
            this.setState({doctors: this.state.doctors.filter(doctor => doctor.id !== id)});
        });
    }
   
    editDoctor(id){
        this.props.history.push(`/add-doctor/${id}`);
    }

    componentDidMount(){
        DoctorService.getDoctors().then((res) => {
            this.setState({ doctors: res.data});
        });
    }

    addDoctor(){
        this.props.history.push('/add-doctor/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-left" style={{fontFamily:"Times New Roman",fontSize:"30px",}} >Doctors List</h2>
                 <br></br>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addDoctor} style={{float:"right",textAlign:"right",backgroundColor:'lightgreen',color:'black',fontFamily:'Comic Sans MS'}}> Add Doctor<img src={Addicon}></img></button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered"  style={{border: "2px solid black"}}>

                            <thead  style={{border: "2px solid black"}}>
                                <tr style={{fontFamily:"Times New Roman",fontSize:'18px',fontSmooth:'10px',textAlign:'center',fontFamily:"sans-serif"}} class="alert alert-secondary" role="alert">
                                    <th style={{border: "2px solid black"}}> First Name</th>
                                    <th style={{border: "2px solid black"}}> Last Name</th>
                                    <th style={{border: "2px solid black"}}> Email Id</th>
                                    <th style={{border: "2px solid black"}}> Specialization</th>
                                    <th style={{border: "2px solid black"}}> Action</th>
                                </tr>
                            </thead>
                            <tbody  style={{border: "2px solid black"}}>
                                {
                                    this.state.doctors.map(
                                        doctor => 
                                        <tr key = {doctor.id}  style={{border: "3px solid black"}}>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> { doctor.firstName} </td>   
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {doctor.lastName}</td>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {doctor.emailId}</td>
                                             <td class="alert alert-primary" role="alert" style={{textAlign:"center",border: "2px solid black"}}> {doctor.specialization}</td>
                                             <td style={{textAlign:"center"}}>
                                                 <button onClick={ () => this.editDoctor(doctor.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDoctor(doctor.id)} className="btn btn-danger">Delete </button>
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

export default ListDoctorComponent
