import React, { Component } from 'react';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={20}
        style={mapStyles}
        initialCenter={{
         lat: 30.0470959,
         lng: 31.2143296
        }}
      >
      <Marker position={{
         lat: 30.0470959,
         lng: 31.2143296
        }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFt7X28rdTdQ0d2dya9sdSMs1cJoVRPpk'
})(MapContainer);