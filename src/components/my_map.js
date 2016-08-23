import React from 'react';

import { GoogleMapLoader, GoogleMap,Marker } from 'react-google-maps';

export default (props) => {

return (
<GoogleMapLoader
            containerElement={ <div style={{height: '40%', width:'23%',position: 'absolute',
              left: '40%', right: '50px', top: '50%'
          }} /> }
            
            googleMapElement={
               <GoogleMap
                  defaultZoom={12} 
                  center={{lat: props.lat,lng: props.lng}}
                  onClick={props.myClick}
                >
                   <Marker />
                   <Marker position={props.pos} />
                   
                </GoogleMap>
            }
            
          />

  );

}