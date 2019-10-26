import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import User from "./pages/User";
import Nav from "./components/Nav";
import TravelPlanner from "./pages/TravelPlanner";
import Footer from "./components/Footer";

import axios from "axios";

if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/travel-planner" component={TravelPlanner} />
        <Route exact path="/user" component={User} />
        <Route exact path="*" component={About} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
