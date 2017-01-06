import _ from 'lodash';

import React, { Component } from 'react';

import Helmet from 'react-helmet';

import Map from './Map';

import STYLES from './GoogleMaps.scss';

const homeIcon = require('../../../assets/images/home.png');

class GoogleMaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [{
        position: {
          lat: 32.766462,
          lng: -79.894853,
        },
        key: `Taiwan`,
        icon: homeIcon,
        defaultAnimation: 2,
      }],
    };

    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
  }

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        icon: '../../../assets/images/smiley.png',
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });

    if (nextMarkers.length === 3) {
      this.props.toast(
        `Right click on the marker to remove it`,
        `Also check the code!`
      );
    }
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }

  render() {
    const { markers } = this.state;

    return (
      <div style={{height: `40em`}}>
        <Helmet
          title="Trevor Glass"
        />
        <Map
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>
    );
  }
}

export default GoogleMaps;
