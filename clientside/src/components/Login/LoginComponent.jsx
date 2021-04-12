import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faLock, faSignInAlt} from "@fortawesome/free-solid-svg-icons";//prateek123

class LoginComponent extends React.Component{

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            err: ''
        };
      }

      credentialChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    login(e) {
         e.preventDefault();
        if(this.state.username === "admin" && this.state.password === "test@123")
        {
            this.props.history.push('/home/');     
        }
        else 
        {
            this.setState({
                err: 'Invalid Username or Password'
            });
        }
    }

    render() {

        let format = {
            color: "red"
        };

        return(
            <div>
            <br></br>
               <div className = "login-form">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h1>Hospital Management</h1>
                        <br/><h2 className="text-center">Welcome</h2>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> <FontAwesomeIcon icon={faEnvelope}/>Username</label>
                                        <br/><input type="text" placeholder="Username" name="username" className="form-control" 
                                            value={this.state.username}  onChange={this.credentialChange}/>
                                    </div>
                                    <br/>
                                    <div className = "form-group">
                                        <label> <FontAwesomeIcon icon={faLock}/>Password </label>
                                        <br/><input type="password" placeholder="Password" name="password" className="form-control" 
                                            value={this.state.password} onChange={this.credentialChange.bind(this)}/>
                                    </div>
                                    <br/> <span style = {format}> {this.state.err !== '' ? this.state.err : ''} </span>
                                    
                                    <br/><button className="btn-lg btn-block" onClick={this.login.bind(this)}>
                                    <FontAwesomeIcon icon={faSignInAlt}/> Log In
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
        );
    }
}

export default LoginComponent;
