import React, { Component } from "react";
import { Navbar, NavItem, Modal, Button, TextInput, Icon, Select } from 'react-materialize';
import AuthService from '../AuthService';
import API from '../../utils/API';
import { withRouter } from 'react-router-dom';
// import helper from '../../helpers/calculations'

import './Nav.css';



class Nav extends Component {

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.state = {
      open: false,
      width: window.innerWidth,
      name: "",
      id: "",
      activity: "",
      gender: ""
    };

    this.activityToExercise = {
      "Sedentary": 0,
      "Light": 1,
      "Moderate": 2,
      "Very Active": 3,
      "Extremely Active": 4
    };
  }


  
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
    // console.log(JSON.stringify(this.state));
  }
  
    updateWidth = () => {
      const newState = { width: window.innerWidth };
  
      if (this.state.open && newState.width > 991) {
        newState.open = false;
      }
  
      this.setState(newState);
    };

    handleChange = event => {
      const {name, value} = event.target;
      this.setState({
          [name]: value
      });
    };

    
  
    signIn() {
      this.Auth.login(this.state.email, this.state.password)
        .then(res => {
          // once user is logged in
          // take them to their profile page
          this.props.history.replace(`/day`);
        })
        .catch(err => {
          alert(err.response.data.message)
        });
    }
  
    handleFormLoginSubmit = event => {
      event.preventDefault();
      this.signIn();
    }

    //   API.signUpUser(this.state.email, this.state.password, this.state.name, this.state.age,  this.state.gender, this.state.activity)
    //     .then(res => {
    //       // once the user has signed up
    //       // log them in
    //       this.signIn();
    //     })
    //     .catch(err => alert(err));
    //     API.signUpUser()
    // }
    
    toggleNav = () => {
      this.setState({ open: !this.state.open });
    };

    componentWillMount() {
      if (this.Auth.loggedIn() && this.props.history.location.pathname === '/') {
        this.props.history.replace('/day');
        // console.log("history " + JSON.stringify(this.props.history));
      }
    }
  
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWidth);
    }

    showNavigation = () => {
      if (this.Auth.loggedIn()) {
          return (
            <Navbar brand={<a className="navLogoText" href="/">Travel Tips</a>} alignLinks="right">
              <NavItem className="navText" href="/day">week1</NavItem>
              <NavItem className="navText" href="/week">week2</NavItem>
              <NavItem className="navText" href="/user">Profile</NavItem>
              <NavItem className="navText" href="/" onClick={() => this.Auth.logout()}>Logout</NavItem>
            </Navbar>
          );
      } else {
          return (
            <div>
              <Navbar brand={<a className="navLogoText" href="/">Travel Tips</a>} alignLinks="right">
              <Modal trigger={<NavItem className="navText" href="">Login</NavItem>}>
                <form onSubmit={this.handleFormLoginSubmit}>
                  <TextInput email validate label="Email" name = "email" onChange = {this.handleChange}/>
                  <TextInput password label="Password" name = "password" onChange = {this.handleChange}/>
                  <Button type="submit" waves="light">Submit<Icon right>send</Icon></Button>
                </form>
            </Modal>
    
            <Modal trigger={<NavItem className="navText" href="">Create Profile</NavItem>}>
              <form onSubmit={this.handleFormSignupSubmit}>
                <TextInput label="Name" name = "name" onChange = {this.handleChange}/>
                <TextInput label="Age" name = "age" onChange = {this.handleChange}/>
                <TextInput email validate label="Email" name = "email" onChange = {this.handleChange}/>
                <TextInput password label="Password" name = "password" onChange = {this.handleChange}/>
                <Select value={this.state.activity} onChange={this.handleChange} label="Activity Level" name="activity">
                  <option value="" disabled>Choose an option</option>
                  <option value="Lazy">Light</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Very Active">Very Active</option>
                  <option value="Extremely Active">Extremely Active</option>
                </Select>
                <br/>
                <Select value={this.state.gender} onChange={this.handleChange} label="Gender" name="gender">
                <option value="" disabled>Choose an option</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
                <Button type="submit" waves="light">Submit<Icon right>send</Icon></Button>
              </form>
            </Modal>
            </Navbar>
          </div>
          );
      }
  };
  
    render() {
      return (
        <div>
          {this.showNavigation()}
        </div>
      );
    }
  }
  
  export default withRouter(Nav);
