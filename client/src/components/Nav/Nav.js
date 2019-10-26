import React, { Component } from "react";
import { Navbar, NavItem, Modal, Button, TextInput, Icon, Select } from 'react-materialize';
import AuthService from '../AuthService';
import API from '../../utils/API';
import { withRouter } from 'react-router-dom';
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
  }

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  handleFormLoginSubmit = () => {
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

  handleUserSignUp = () => {
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      activity: this.state.activity,
    };

    fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newUserData)
    })
      .then(response => {
        if(response.ok) {
          this.handleFormLoginSubmit();
        }
      })
  }

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange = (stateKey, value) => {
    this.setState({
      [stateKey]: value
    });
  };

  showNavigation = () => {
    if (this.Auth.loggedIn()) {
      return (
        <Navbar brand={<a className="navLogoText" href="/">Travel Tips</a>} alignLinks="right">
          <NavItem className="navText" href="/travel-planner">Plan a Trip</NavItem>
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
                <TextInput
                  email
                  validate
                  label="Email"
                  name="email"
                  value={this.state.email}
                  onChange={event => this.handleChange('email', event.target.value)}
                />
                <TextInput
                  password
                  label="Password"
                  name="password"
                  value={this.state.password}
                  onChange={event => this.handleChange('password', event.target.value)}
                />
                <Button
                  type="button"
                  waves="light"
                  onClick={this.handleFormLoginSubmit}
                >
                  Submit
                  <Icon right>send</Icon>
                </Button>
              </form>
            </Modal>

            <Modal trigger={<NavItem className="navText" href="">Create Profile</NavItem>}>
              <form>
                <TextInput
                  value={this.state.name}
                  label="Name"
                  name="name"
                  onChange={event => this.handleChange('name', event.target.value)}
                />
                <TextInput
                  value={this.state.age}
                  label="Age"
                  name="age"
                  onChange={event => this.handleChange('age', event.target.value)}
                />
                <TextInput
                  value={this.state.email}
                  email
                  validate
                  label="Email"
                  name="email"
                  onChange={event => this.handleChange('email', event.target.value)}
                />
                <TextInput
                  value={this.state.password}
                  password
                  label="Password"
                  name="password"
                  onChange={event => this.handleChange('password', event.target.value)}
                />
                <Select
                  value={this.state.activity}
                  onChange={event => this.handleChange('activity', event.target.value)}
                  label="Activity Level"
                  name="activity"
                >
                  <option value="" disabled>Choose an option</option>
                  <option value="Lazy">Light</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Very Active">Very Active</option>
                  <option value="Extremely Active">Extremely Active</option>
                </Select>
                <br />
                <Select
                  value={this.state.gender}
                  onChange={event => this.handleChange('gender', event.target.value)}
                  label="Gender"
                  name="gender"
                >
                  <option value="" disabled>Choose an option</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
                <Button
                  type="button"
                  waves="light"
                  onClick={this.handleUserSignUp}
                >
                  Submit
                  <Icon right>send</Icon>
                </Button>
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
