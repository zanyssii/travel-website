import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Updates a user in the database
  updateUser: function(id, data) {
    return axios.put("/api/users/" + id, data);
  },
  //signs up a user
  signUpUser: (email, password, name, age, gender, activity) => {
    return axios.post("/api/users", 
    {
      email: email, 
      password: password, 
      name: name, 
      age: age, 
      gender: gender,
      activity: activity,
      // exercise_goal: exercise_goal,
      
    });
  },

  getFoodInfo: (food) => {
    // return axios.get("hhttps://leopieters-iata-and-icao-v1.p.rapidapi.com/airlineDatabase"+trip+"&app_id=859c90a7&app_key=396a5766admshd0330f0efceaaf2p1f4194jsn1a2a70785233");
  }
 };
