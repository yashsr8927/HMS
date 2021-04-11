import React, { Component } from 'react'
import PatientService from '../../services/PatientService';


class CreateInPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            p_id: this.props.match.params.p_id,
            patientName: '',
            sfName: '',
            age: '',
            gender: '',
            city: '',
            malady: '',
            category:'in',
            ward:'',
            r_no:'',
            a_date: ''
        }

        this.changepatientNameHandler = this.changepatientNameHandler.bind(this);
        this.changesfNameHandler = this.changesfNameHandler.bind(this);
        this.changeageHandler = this.changeageHandler.bind(this);
        this.changegenderHandler = this.changegenderHandler.bind(this);
        this.changecityHandler = this.changecityHandler.bind(this);
        this.changemaladyHandler = this.changemaladyHandler.bind(this);
        this.changecategoryHandler = this.changecategoryHandler.bind(this);
        this.changewardHandler = this.changewardHandler.bind(this);
        this.changeroom_noHandler = this.changeroom_noHandler.bind(this);
        this.changeadmit_onHandler = this.changeadmit_onHandler.bind(this);
        
        this.saveInPatient = this.saveInPatient.bind(this);
    }

    
    saveInPatient = (e) => {
        e.preventDefault();
        let patient = {patientName: this.state.patientName, sfName: this.state.sfName, 
                       age: this.state.age, gender: this.state.gender, city: this.state.city, 
                       malady: this.state.malady, category: this.state.category,
                       ward: this.state.ward, r_no: this.state.r_no, 
                       a_date: this.state.a_date};
        console.log('patient => ' + JSON.stringify(patient));
    
        PatientService.createPatient(patient).then(res =>{
                this.props.history.push('/home');
         
            })
    }
    
    changepatientNameHandler= (event) => {
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

    changecategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }

    changewardHandler= (event) => {
        this.setState({ward: event.target.value});
    }

    changeroom_noHandler= (event) => {
        this.setState({r_no: event.target.value});
    }

    changeadmit_onHandler= (event) => {
        this.setState({a_date: event.target.value});
    }

    cancel(){
        this.props.history.push('/inpatient_details');
    }

    getTitle(){
         <h3 className="text-center">Add Patient</h3>
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container2">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Patient Name: </label>
                                            <input placeholder="Patient Name" name="patientName" className="form-control" 
                                                value={this.state.patientName} onChange={this.changepatientNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Spouse/Father Name: </label>
                                            <input placeholder="Spouse/Father Name" name="sfName" className="form-control" 
                                                value={this.state.sfName} onChange={this.changesfNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" name="gender" className="form-control" 
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
                                            <label> Malady: </label>
                                            <input placeholder="Malady" name="malady" className="form-control" 
                                                value={this.state.malady} onChange={this.changemaladyHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Category: </label>
                                            <input placeholder="Category" name="category" className="form-control" 
                                                value={this.state.category} onChange={this.changecategoryHandler}/>
                                        </div>
                                       
                                        <div className = "form-group">
                                            <label> Ward: </label>
                                            <input placeholder="Ward" name="ward" className="form-control" 
                                                value={this.state.ward} onChange={this.changewardHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Room_no: </label>
                                            <input placeholder="Room NO" name="Room_no" className="form-control" 
                                                value={this.state.r_no} onChange={this.changeroom_noHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Date" name="Admit_on" className="form-control" 
                                                value={this.state.a_date} onChange={this.changeadmit_onHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.saveInPatient}>Save</button>
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

export default CreateInPatientComponent
