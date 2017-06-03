import React from "react";
import { Map, TileLayer, Marker, Popup , latlng} from "react-leaflet";
//import leaflet from 'leaflet';

const userMap = ({ users }) => (
  <Map center={[38.0352826, -78.5024838]} zoom={14} style={{ height: "800px" }}>
    <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
    {users.map(user => (
    <Marker position={user}/>
    ))}
  </Map>
);

export default userMap;
