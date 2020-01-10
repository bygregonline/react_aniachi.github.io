import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

class GMap extends Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 20.6477521, lng: -103.321976 }}
        defaultZoom={17}
      ></GoogleMap>
    ));
    return (
      <div>
        <GoogleMapExample
          containerElement={
            <div
              className="chart_2"
              style={{ height: "500px", width: "500px" }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
export default GMap;
