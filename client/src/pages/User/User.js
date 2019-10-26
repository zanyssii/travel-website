import React, { Component } from "react";
import { Container, Row, Col, Button, TextInput, Icon, Select } from "react-materialize";
import API from "../../utils/API";
import withAuth from './../../components/withAuth';
import moment from "moment";

import './User.css';

// Images
const backgroundImg ='./assets/images/background1.jpg';


class User extends Component {
  state = {
    user: [],
    firstName: "",
    lastName: "",
    age: "",
    weight: "",
    feet: "",
    inches: "",
    activity: "",
    exercise: "",
    sleep: "",
    gender: ""
  };

  activityToExercise = {
    "Sedentary": 0,
    "Light": 1,
    "Moderate": 2,
    "Very Active": 3,
    "Extremely Active": 4
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState(
        {
          id: res.data._id,
          name: res.data.name,
          age: res.data.age,
          gender: res.data.gender,
          activity: res.data.activity
        }
      );
      console.log(res.data);
      console.log(moment().subtract(10,"days").format("YYYY-MMDD"));
      console.log(this.state);
    });
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSelectChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    // const BMI = Math.round(helper.calculateBMI(this.state.height, this.state.weight)*10)/10;
    // const water_goal = Math.round(helper.calculateWaterGoal(this.state.weight));
    // const intake_goal =  Math.round(helper.calculateCalorieRec(this.state.weight, this.state.height, this.state.age, this.state.gender, this.state.activity));

    API.updateUser(this.props.user.id, {
      email: this.state.email, 
      name: this.state.name, 
      age: this.state.age,  
      gender: this.state.gender, 
      activity: this.state.activity, 
      travel_goal: this.activityToTravel[this.state.activity],
    })
    .then(res => {
      this.props.history.replace('/day');
    });
  };

  render() {
    return (
      <div className="mainWrapper" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <Container className="containerUser">
          <Row>
            <Col className="s8 offset-s2 black-text center-align">
              Update Profile
              <hr/>
            </Col>
          </Row>
          <form className="userForm">
          <Row className="userFormSection">
            <Col className="s12 center-align">
                <TextInput 
                  s={12} 
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  label="Name"
                />
              </Col>
            </Row>
            <Row>
              <Col className="s12 center-align">
                <TextInput
                  s={12} 
                  value={this.state.age}
                  onChange={this.handleInputChange}
                  name="age"
                  label="Age"
                />
                </Col>
            </Row>
            <Row>
    
            </Row>
            <Row>
              <Col className="s12 center-align">
                <Select s={12} value={this.state.activity} onChange={this.handleSelectChange} label="Activity Level" name = "activity">
              
                  <option value="Lazy">Lazy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Very Active">Very Active</option>
                  <option value="Extremely Active">Extremely Active</option>
                </Select>
                </Col>
            </Row>
            <br/>
            <Row>
              <Col className="s12 center-align">
                <Select s={12} value={this.state.gender} onChange={this.handleSelectChange} label="Gender" name="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
                </Col>
            </Row>
            <Row>
              <Col className="s12 center-align">
                <Button type="submit" waves="light" onClick={this.handleFormSubmit}>
                  Update<Icon right>send</Icon>
                </Button>
              
            </Col>
          </Row>
          </form>
        </Container>
      </div>
    );
  }
}

export default withAuth(User);
