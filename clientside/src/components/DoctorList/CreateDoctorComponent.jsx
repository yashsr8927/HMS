import React, { Component } from 'react'
import DoctorService from '../../services/DoctorService';

class CreateDoctorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            specialization: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateDoctor = this.saveOrUpdateDoctor.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            DoctorService.getDoctorById(this.state.id).then( (res) =>{
                let doctor = res.data;
                this.setState({
                    firstName: doctor.firstName,
                    lastName: doctor.lastName,
                    emailId : doctor.emailId,
                    specialization: doctor.specialization
                });
            });
        }        
    }
    saveOrUpdateDoctor = (e) => {
        e.preventDefault();
        let doctor = {firstName: this.state.firstName, lastName: this.state.lastName, 
                      emailId: this.state.emailId, specialization: this.state.specialization};
        console.log('doctor => ' + JSON.stringify(doctor));

        if(this.state.id === '_add'){
            DoctorService.createDoctor(doctor).then(res =>{
                this.props.history.push('/doctors');
            });
        }
        else{
            DoctorService.updateDoctor(doctor, this.state.id).then( res => {
                this.props.history.push('/doctors');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changeSpecializationHandler= (event) => {
        this.setState({specialization: event.target.value});
    }
    cancel(){
        this.props.history.push('/doctors');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Doctor</h3>
        }else{
            return <h3 className="text-center">Update Doctor</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="first_name" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="last_name" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email_id" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Specialization Id: </label>
                                            <input placeholder="Specialization" name="specialization" className="form-control" 
                                                value={this.state.specialization} onChange={this.changeSpecializationHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateDoctor}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateDoctorComponent
