import React from 'react';

import { GoogleMapLoader, GoogleMap,Marker } from 'react-google-maps';

export default (props) => {
  return (
  	<div >
    <GoogleMapLoader 
      containerElement={ <div  className="myfkmap"style={{height: '50%', width:'50%'}} /> }
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
      }
      />
      </div>
  );
}
