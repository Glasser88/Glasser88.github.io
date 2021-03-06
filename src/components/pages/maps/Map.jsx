import React, { PropTypes } from 'react';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// import { default as MarkerClusterer } from 'react-google-maps/lib/addons/MarkerClusterer';
//
// <MarkerClusterer
//   averageCenter
//   enableRetinaIcons
//   gridSize={60}
// >
// </MarkerClusterer>

import fancyMapStyles from '../../../constants/fancy-map-styles';

const Map = withGoogleMap(({
  onMapLoad,
  onMapClick,
  markers,
  onMarkerRightClick
}) => (
  <GoogleMap
    ref={onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: 32.766462, lng: -79.894853 }}
    defaultOptions={{
      styles: fancyMapStyles,
      scrollwheel: false,
      disableDefaultUI: true,
    }}
    onClick={onMapClick}>
    {markers.map(marker => (
      <Marker
        defaultAnimation={marker.defaultAnimation}
        key={marker.key}
        position={marker.position}
        icon={marker.icon}
        onRightClick={() => onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

Map.propTypes = {
  onMapLoad: PropTypes.func.isRequired,
  onMapClick: PropTypes.func.isRequired,
  markers: PropTypes.array,
  onMarkerRightClick: PropTypes.func,
}

export default Map;
