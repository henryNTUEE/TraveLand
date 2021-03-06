import React, { Component,PropTypes } from 'react';
import {Link} from 'react-router';
import {request_yelp} from '../actions/yelp';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Beverages extends Component {
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
      
          <button type="button" onClick={() => this.handleClick('coffee')} className="btn_coffee">
            <div className="view third-effect_beverage">
               <div className="mask">
                Coffee & Tea
               </div>  
            </div>
          </button>
		      <button type="button" onClick={() => this.handleClick('beer_and_wine')} className="btn_beer">
            <div className="view third-effect_beverage">
               <div className="mask">
                Alcohol
               </div>  
            </div>
          </button>
		      <button type="button" onClick={() => this.handleClick('bubbletea')} className="btn_bubbletea">
            <div className="view third-effect_beverage">
               <div className="mask">
                Bubble Tea
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

export default connect(null, mapDispatchToProps)(Beverages);
