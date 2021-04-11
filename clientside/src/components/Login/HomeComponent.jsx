import React from 'react';

class WelcomeComponent extends React.Component{

    logout() {
        this.props.history.push('/');
    }

    allList() {
        this.props.history.push('/all-patients');
    }

    outList() {
        this.props.history.push('/out-patients/:category');
    }
    
    inList() {
        this.props.history.push('/in-patients/:category');
    }

    doctorList() {
        this.props.history.push('/doctors');
    }

    registerIn() {
        this.props.history.push('/inpatient_details');
    }

    registerNew() {
        this.props.history.push('/patient_details');
    }

    render() {
       // const {username} = this.props.match.params;
        return (
            <div className = "home-page">
                 <div className = "row">
                     <div className = "card col-md-6 offset-md-3 offset-md-3">
                         <h3 className= "text-center">Welcome</h3>
                         <div className = "card-body">
                            <form>
                                <br/>
                                <button className= "btn-lg btn-dark btn-block" onClick={this.registerNew.bind(this)}>
                                 Register New Patient
                                </button>
                                <br/><button className= "btn-lg btn-dark btn-block" onClick={this.registerIn.bind(this)} >
                                 Register New In-patient
                                </button>
                                <br/><button className= "btn-lg btn-dark btn-block" onClick={this.doctorList.bind(this)} >
                                 Doctors Available
                                </button>
                                <br/><button className= "btn-lg btn-dark btn-block" onClick={this.inList.bind(this)} >
                                 In-patient's list
                                </button>
                                <br/><button className= "btn-lg btn-dark btn-block" onClick={this.outList.bind(this)}>
                                 Out-Patient's list
                                </button>
                                <br/><button className= "btn-lg btn-dark btn-block" onClick={this.allList.bind(this)} >
                                 All-patient's list
                                </button>
                                <br/><button className= "text-allign:right" onClick={this.logout.bind(this)}>Logout</button>
                            </form>
                        </div>
                    </div> 
                </div>         
            </div>
        );
    }
}

export default WelcomeComponent;