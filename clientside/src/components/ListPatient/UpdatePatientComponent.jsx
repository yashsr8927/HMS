import React, { Component } from 'react';
import AllPatientService from '../../services/AllPatientService';

class UpdatePatientComponent extends Component {
    constructor(props) {

        super(props)

        this.state = {
            id: this.props.match.params.id,
            patientName: '',
            sfName: '',
            gender: '',
            age: '',
            city: '',
            malady: '',
            ward: '',
        }
        this.changepNameHandler = this.changepNameHandler.bind(this);
        this.changesfNameHandler = this.changesfNameHandler.bind(this);
        this.changegenderHandler = this.changegenderHandler.bind(this);
        this.changeageHandler = this.changeageHandler.bind(this);

        this.updatePatient = this.updatePatient.bind(this);
    }

    componentDidMount(){
        AllPatientService.getPatientById(this.state.id).then( (res) =>{
            let patient = res.data;
            this.setState({
                patientName: patient.patientName,
                sfName: patient.sfName,
                gender : patient.gender,
                age:  patient.age,
                city: patient.city,
                malady: patient.malady,
                ward: patient.ward,
                r_no: patient.r_no,
                a_date: patient.a_date
            });
        });
    }

    updatePatient = (e) => {
        e.preventDefault();

        let patient = {patientName: this.state.patientName, sfName: this.state.sfName, 
            gender: this.state.gender, age: this.state.age,
            city: this.state.city, malady: this.state.malady, 
            ward: this.state.ward, r_no: this.state.r_no,
            a_date: this.state.a_date}

        console.log('id => ' + JSON.stringify(this.state.id));               
        console.log('patient => ' + JSON.stringify(patient));
        AllPatientService.updatePatient(this.state.id, patient).then( res => {
            this.props.history.push('/all-patients');
            });
    }
    
    changepNameHandler= (event) => {
        this.setState({patientName: event.target.value});
    }
    changesfNameHandler= (event) => {
        this.setState({sfName: event.target.value});
    }
    changegenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
    changeageHandler= (event) => {
        this.setState({age: event.target.value});
    }
    changecityHandler= (event) => {
        this.setState({city: event.target.value});
    }
    changemaladyHandler= (event) => {
        this.setState({malady: event.target.value});
    }
    changewardHandler= (event) => {
        this.setState({ward: event.target.value});
    }
    changerNoHandler= (event) => {
        this.setState({r_no: event.target.value});
    }
    changeadmitonHandler= (event) => {
        this.setState({a_date: event.target.value});
    }

    cancel(){
        this.props.history.push('/all-patients');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Patient </h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Patient Name: </label>
                                            <input placeholder="pName" name="patientName" className="form-control" 
                                                value={this.state.patientName} onChange={this.changepNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> sf Name: </label>
                                            <input placeholder="sf Name" name="sfName" className="form-control" 
                                                value={this.state.sfName} onChange={this.changesfNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="gender" name="gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changegenderHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeageHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> City: </label>
                                            <input placeholder="City" name="city" className="form-control" 
                                                value={this.state.city} onChange={this.changecityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Ward: </label>
                                            <input placeholder="Ward" name="ward" className="form-control" 
                                                value={this.state.ward_no} onChange={this.changewardHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Room_no: </label>
                                            <input placeholder="Room_no" name="Room_no" className="form-control" 
                                                value={this.state.r_no} onChange={this.changerNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Admit_on: </label>
                                            <input placeholder="Admit_on" name="Admit_on" className="form-control" 
                                                value={this.state.a_date} onChange={this.changeadmitonHandler}/>
                                        </div>

                                        <button className="btn btn-outline-primary" onClick={this.updatePatient}>Save</button>
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

export default UpdatePatientComponent
