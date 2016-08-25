import React, { Component,PropTypes } from 'react';
import {Link} from 'react-router';
import {request_yelp} from '../actions/yelp';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Transports extends Component {
  constructor(props) {
    super(props);

    
    this.handleClick = this.handleClick.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

	handleClick(a) {
		this.context.router.push({pathname: "/Form/"+this.props.params.lat+"/"+this.props.params.lng + "/" + a});
  	}
  
  	render() {
      
    return (
   
      <div>
      <div className="bkBtn" style={{marginTop: '5px'}}>
        <Link to={"yelp/" + this.props.params.lat + "/" + this.props.params.lng }  params={this.props.params} ><strong>Back</strong></Link>
      </div>
      
            <button type="button" onClick={() => this.handleClick('transport')} className="btn_all">
               <div className="view third-effect_transport">
               <div className="mask">
                All Transportations
               </div>
               </div> 
            </button>
        
          	<button type="button" onClick={() => this.handleClick('travelservices')} className="btn_travel">
               <div className="view third-effect_transport">
               <div className="mask">
                Travel Services
               </div>
               </div> 
            </button>
		    
            <button type="button" onClick={() => this.handleClick('carrental')} className="btn_car">
               <div className="view third-effect_transport">
               <div className="mask">
                Car Rental
               </div>
               </div> 
            </button>
        
            <button type="button" onClick={() => this.handleClick('motorcycle_rental')} className="btn_motor">
               <div className="view third-effect_transport">
               <div className="mask">
                Motorcycle Rental
               </div>
               </div> 
            </button>
     
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ request_yelp }, dispatch);
}

export default connect(null, mapDispatchToProps)(Transports);
