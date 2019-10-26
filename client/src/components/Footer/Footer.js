import React, { Component } from "react";
import {Footer, Row, Container} from 'react-materialize';

import './Footer.css';

class Foot extends Component {
  
    render() {
        return (
            <div>
                <Footer
                
                   
                    links={
                        <ul className="footerUL">
                            <p className="center-align">
                                Team
                            </p>
                            <hr/>
                            <li>
                                <ul>
                                    <li className="teamMember">
                                        Inna Atamanova
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/inna-atamanova-10825a74/" target="_blank" rel="noopener noreferrer" title="My linkedin">
                                            <i className="fab fa-linkedin-in"></i>
                                            <br/>
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://github.com/zanyssii" target="_blank" rel="noopener noreferrer" title="Projects on GitHub">
                                            <i className="fab fa-github"></i>
                                            <br/>
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            
                        </ul>
                    }
                    className="footer"
                    >
                    <Container>
                        <Row className="text">
                            
                                <h5 className="center-align">
                                    Travel tips
                                </h5>
                                <p className="center-align">
                                    Your best way travel cheap
                                </p>
                                <p className="text">
                                  Tips to budget travelers. You might wondering how to travel cheap. Don’t let money problems stop you from traveling. Here are a few ways to travel cheap that can help you see the world on a budget.
                                </p>
                            
                        </Row>
                    </Container>
                </Footer>
            </div>
        );
    }
}
  
export default Foot;
  