import React, { Component } from "react";
import logo from "./rideshare_logo-1.png";
import leaflet from 'leaflet';
import "./App.css";
import Map from "./Map";


//const user_list = [[37.0352826, -78.5024838],[35.0352826, -78.5024838],[38.0352826, -78.5024838]];
const images = {};



class App extends React.Component {
   state = {
    users: [[38.0336, -78.5080],[38.036, -78.5085],[38.0352826, -78.5024838],[38.05, -78.50804],[38.03, -78.506]],
    nextPage: ""
  };

  render() {
    //console.log(this.state.users)

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
