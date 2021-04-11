import React, { Component } from 'react'
import PatientService from '../../services/PatientService';


class CreateOutPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            patientName: '',
            sfName: '',
            age: '',
            gender:'',
            city:'',
            malady:'',
            category:'out',
            ward:'null',
            room_no: 0,
            admit_on: 'null'
        }

        this.changepatientNameHandler = this.changepatientNameHandler.bind(this);
        this.changesfNameHandler = this.changesfNameHandler.bind(this);
        this.changegenderHandler = this.changegenderHandler.bind(this);
        this.changeageHandler = this.changeageHandler.bind(this);
        this.changecityHandler = this.changecityHandler.bind(this);
        this.changemaladyHandler = this.changemaladyHandler.bind(this);
        this.changecategoryHandler = this.changecategoryHandler.bind(this);
        this.savePatient = this.savePatient.bind(this);
    }

    savePatient = (e) => {
        e.preventDefault();
        let outpatient = {patientName: this.state.patientName, sfName: this.state.sfName, 
                          gender: this.state.gender ,age: this.state.age, 
                          city: this.state.city, malady: this.state.malady, 
                          category: this.state.category};
        console.log('outpatient => ' + JSON.stringify(outpatient));

        PatientService.createPatient(outpatient).then(res =>{
                this.props.history.push('/home');
            });}
    
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

    cancel(){
        this.props.history.push('/outpatient');
    }

    getTitle(){
      
            return <h3 className="text-center">Add Patient</h3>
        
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
                                            <label> Age: </label>
                                            <input placeholder="Age" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeageHandler}/>
                                        </div>
                                         
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" name="gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changegenderHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> City: </label>
                                            <input placeholder="City" name="city" className="form-control" 
                                                value={this.state.address} onChange={this.changecityHandler}/>
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


                                        <button className="btn btn-success" onClick={this.savePatient}>Save</button>
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

export default CreateOutPatientComponent
