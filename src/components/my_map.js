import React from 'react';

import { GoogleMapLoader, GoogleMap,Marker } from 'react-google-maps';

export default (props) => {




if(props.check==2) {
  return (
    <GoogleMapLoader
            containerElement={ <div style={{height: '250px', width:'350px',position: 'absolute',
              left: '0px', top: '0px'
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
  else {
    return (
<GoogleMapLoader
            containerElement={ <div style={{height: '300px', width:'400px',position: 'absolute',
              left: '35%', right: '50px', top: '50%'
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

}
