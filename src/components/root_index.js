import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { GoogleMapLoader, GoogleMap,Marker } from 'react-google-maps';

import { fetchWeather } from '../actions/index';
import {request_yelp} from '../actions/yelp';
import Geosuggest from '../GeoSuggest/Geosuggest';
import MyMap from './my_map';
// <div>City Detail {this.props.params.name} {this.props.params.lon1} {this.props.params.lat1}</div>

class RootIndex extends Component {

	constructor(props) {
    	super(props);

    	this.state = { term: '',lat1:'', lng1:'',marker:{
            position: {
                    lat: 25.0112183,
                    lng: 121.52067570000001,
                  },
            key: `Taiwan`,
            defaultAnimation: 2,
            check: 1
          }
      };
    	this.onInputChange = this.onInputChange.bind(this);
    	this.onMapClick = this.onMapClick.bind(this);
      this.geoSetPosition = this.geoSetPosition.bind(this);
      this.change_map_view = this.change_map_view.bind(this);
  	}

  	onInputChange(event) {
    	this.setState({ term: event.target.value });
  	}
    onMapClick(event){
   
      this.setState(
        {lat1: event.latLng.lat(),lng1: event.latLng.lng()}
      );
    }
    geoSetPosition(lat,lng) {
      this.setState(
        {lat1: lat,lng1: lng}
      );
    }
    change_map_view(check){
      this.setState(
        {check: check}
      );
    }

	render(){
	  var pos={lat: this.state.lat1, lng:this.state.lng1};
		var fixtures = [];
    let dlat = pos.lat || 25.0152287;
    let dlng = pos.lng || 121.5315251;
		return (
      <div className = "Root_background">
      <Link to="weather">
      <h3 style={{textAlign: 'right'}}>Search For Weather</h3>
      </Link>
      <div>
        <MyMap lat={dlat} lng={dlng} pos={pos} check={this.state.check} myClick={this.onMapClick}/>
      </div>
				<div className="root_center second_root">

          <div className="root_text_top">
        
					   <h1 className="mark1">TraveLand</h1>
               <div style={{marginBottom: '2px'}}>&copy;Copyright Henry, Kevin -- from NTUEE</div>
	      		</div>
	       <div className="root_text_top1">
					<Geosuggest
            className = "mySearch"
						hello_lat={this.state.lat1}
            hello_lng={this.state.lng1}
            hello_pos={this.geoSetPosition}
            change_map_view={this.change_map_view}
						placeholder="Search any place"
						onChange={this.onInputChange}
						fixtures={fixtures}
						initialValue={this.state.term}
						location={new google.maps.LatLng(121,25) }
						radius="20"
          />

           

          </div>
          
        </div>


			</div>
			
		);
	}

}


function mapStateToProps(state) {  
  return {city: state.city}
}

export default RootIndex;
