import React, { Component } from 'react'
import DoctorService from '../../services/DoctorService';

class UpdateDoctorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            first_name: '',
            last_name: '',
            email_id: '',
            specialization: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeSpecializationHandler = this.changeSpecializationHandler.bind(this)
        this.updateDoctor = this.updateDoctor.bind(this);
    }

    componentDidMount(){
        DoctorService.getDoctorById(this.state.id).then( (res) =>{
            let doctor = res.data;
            this.setState({
                first_name: doctor.first_name,
                last_name: doctor.last_name,
                email_id : doctor.email_id,
                specialization:  doctor.specialization
            });
        });
    }

    updateDoctor = (e) => {
        e.preventDefault();
        let doctor = {first_name: this.state.first_name, last_name: this.state.last_name, email_id: this.state.email_id, specialization: this.state.specialization};
        console.log('doctor => ' + JSON.stringify(doctor));
        console.log('id => ' + JSON.stringify(this.state.id));
        DoctorService.updateDoctor(doctor, this.state.id).then( res => {
            this.props.history.push('/doctors');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({first_name: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({last_name: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email_id: event.target.value});
    }

    changeSpecializationHandler= (event) => {
        this.setState({specialization: event.target.value});
    }
   
    cancel(){
        this.props.history.push('/doctors');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Doctor</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.first_name} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.last_name} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.email_id} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Specialization Id: </label>
                                            <input placeholder="Specialization" name="spcId" className="form-control" 
                                                value={this.state.specialization} onChange={this.changeSpecializationHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateDoctor}>Save</button>
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

export default UpdateDoctorComponent
