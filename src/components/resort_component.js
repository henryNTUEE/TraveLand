import React, { Component,PropTypes } from 'react';
import {Link} from 'react-router';
import {request_yelp} from '../actions/yelp';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Resorts extends Component {
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
      
        
            <button type="button" onClick={() => this.handleClick('resorts')} className="btn_resort">
               <div className="view third-effect_resort">
               <div className="mask">
                Resorts
               </div>  
            </div>
            </button>
        
          	<button type="button" onClick={() => this.handleClick('tours')} className="btn_tour">
               <div className="view third-effect_resort">
               <div className="mask">
                Tours
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

export default connect(null, mapDispatchToProps)(Resorts);
