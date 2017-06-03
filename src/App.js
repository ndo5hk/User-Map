import React, { Component } from "react";
import logo from "./rideshare_logo-1.png";
import leaflet from 'leaflet';
import "./App.css";
import Map from "./Map";
import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyARkJ9vtTHNp41_cLr5AvQ4Oq5Lq4m2a_w",
    authDomain: "ride-share-51bb8.firebaseapp.com",
    databaseURL: "https://ride-share-51bb8.firebaseio.com",
    projectId: "ride-share-51bb8",
    storageBucket: "ride-share-51bb8.appspot.com",
    messagingSenderId: "624345683130"
  };
  firebase.initializeApp(config);

class App extends React.Component {
   state = {
    users: [[38.0336, -78.5080],[38.036, -78.5085],[38.0352826, -78.5024838],[38.05, -78.50804],[38.03, -78.506]],
    nextPage: ""
  };

  render() {
    return (
      <div className="App">
        <div
          className="App-header"
          style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
        <h3>RideShare Users in Charlottesville</h3>
          </div>
        <div className="App-body">
          <div style={{ flex: 1 }}>
            <Map users={this.state.users} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
