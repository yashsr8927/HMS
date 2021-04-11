import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import {Jumbotron, Card} from 'react-bootstrap';

function Welcome(props) {
    let history = useHistory();

    function login()
    {
        history.push('/login');
    }

    return (
        <Jumbotron className="bg-dark text-white">
            <h3>{props.heading}</h3>
            <blockquote className="blockquote mb-0">
                <p>
                    {props.quote}
                </p>
                <footer className="blockquote-footer">
                    {props.footer}
                </footer>
            </blockquote>
            <Card.Header>
                <FontAwesomeIcon icon={faSignInAlt} /><button onClick={login}>Login</button>
            </Card.Header>
        </Jumbotron>
    );
}
export default Welcome;