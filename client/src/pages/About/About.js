import React, { Component } from "react";
import { Container, Row, Col, Slide, Slider, Caption } from 'react-materialize';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './About.css';

// Images
const backgroundImg = './assets/images/tips5.jpg';
const first = './assets/images/workout1.jpg';
const second = './assets/images/thing1.jpg';
const third = './assets/images/flight2.jpg';
const fourth = './assets/images/travelicon.jpg';

class About extends Component {
  render() {
    return (
      <div className="mainWrapper" >
        <Slider className="slider">
          <Slide image={<img src={first} alt="Travel"/>}>
            <Caption>
              <h3>
                Your travel tips!
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Travel cheap!
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img src={backgroundImg} alt="Tips"/>}>
            <Caption placement="left">
              <h3>
                Travel the world!
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Be happier!
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img src={second} alt="Things"/>}>
            <Caption placement="right">
              <h3 className="light teal-text text-darken-4">
                Know how to travel right.
              </h3>
              <h5 className="light teal-text text-darken-4">
                Learn to live a full life!
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img src={third} alt="Flight"/>}>
            <Caption>
              <h3>
                Travel will impact your life and will boost your energy and will broadens your horizons.
              </h3>
              <h5 className="light grey-text text-lighten-3">
                We want to inspire you to feel the same!
              </h5>
            </Caption>
          </Slide>
        </Slider>

        <Container>
          <Row className="info">
            <Col className="s12">
              <h5>
                Traveling you wil get bring you many bright emotions!
              </h5>
              <p>
                See how you can travel cheaper with our advices!
              </p>
              <p className="center-align">-Travel Tips</p>
            </Col>
          </Row>
          <Row className="travel"> 
            <Col className="s12">
              <img src={fourth} alt="travel"/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
