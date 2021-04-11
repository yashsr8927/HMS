import {React, Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from './components/Login/LoginComponent';
import HomeComponent from './components/Login/HomeComponent';
import WelcomeComponent from './components/Login/WelcomeComponent';
import ListPatientComponent from './components/ListPatient/ListPatientComponent';
import UpdatePatientComponent from './components/ListPatient/UpdatePatientComponent';
import ListOutPatientComponent from './components/ListPatient/ListOutPatientComponent';
import ListAllPatientComponent from './components/ListPatient/ListAllPatientComponent';
import CreateOutPatientComponent from './components/Register Patient/CreateOutPatientComponent';
import CreateInPatientComponent from './components/Register Patient/CreateInPatientComponent';
import ListDoctorComponent from './components/DoctorList/ListDoctorComponent';
import CreateDoctorComponent from './components/DoctorList/CreateDoctorComponent';
import UpdateDoctorComponent from './components/DoctorList/UpdateDoctorComponent';

class App extends Component {
  constructor() {
    super();
    this.state ={
       heading: 'Welcome to Hospital Management System',
       quote: 'A hospital alone shows what war is',
      footer: 'Enrich Maria Remarque'
    };
  }

  render(){
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch> 
                        <Route exact path ="/" component={() => <WelcomeComponent heading={this.state.heading} 
                         quote={this.state.quote} footer={this.state.footer}/>}></Route> 
                        <Route exact path= "/home/" component={HomeComponent}></Route>
                        <Route path= "/login" component={LoginComponent}></Route>
                        <Route path = "/patient_details" component = {CreateOutPatientComponent}></Route>
                        <Route path = "/inpatient_details" component = {CreateInPatientComponent}></Route>
                        <Route path = "/in-patients/:category" component = {ListPatientComponent}></Route>
                        <Route path = "/out-patients/:category" component = {ListOutPatientComponent}></Route>
                        <Route path = "/all-patients" component = {ListAllPatientComponent}></Route>
                        <Route path = "/update-patients/:id" component = {UpdatePatientComponent}></Route>
                        <Route path = "/doctors" component = {ListDoctorComponent}></Route>
                        <Route path = "/add-doctor/:id" component = {CreateDoctorComponent}></Route>
                        <Route path = "/update-doctor/:id" component = {UpdateDoctorComponent}></Route>                    </Switch>
                </div>
        </Router>
    </div>
  );
}
}

export default App;
