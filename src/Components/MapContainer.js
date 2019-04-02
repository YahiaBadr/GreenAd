import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 30.0754484,
         lng: 31.1947263
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCg2ZxnWAPfiNWAwA6MbPRRg6QCzt_0VSw'
})(MapContainer);