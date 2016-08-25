import React, { Component,PropTypes } from 'react';
import {Link} from 'react-router';
import {request_yelp} from '../actions/yelp';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Desserts extends Component {
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
   
      <div  className = "Desert_background">
      <div className="bkBtn" style={{marginTop: '5px'}}>
        <Link to={"yelp/" + this.props.params.lat + "/" + this.props.params.lng }  params={this.props.params} ><strong>Back</strong></Link>
      </div>
      
        <button type="button"  onClick={() => this.handleClick('desserts')} className="desert_b1"> 
                 <div className="view third-effect">
                          <div className="mask">
                               Desserts
                          </div>  
                 </div>
        </button>

        <button type="button"  onClick={() => this.handleClick('chese')} className="desert_b2"> 
                 <div className="view third-effect">
           
                        <div className="mask">
                             Chese
                          </div>  
                 </div>
        </button>

        <button type="button"  onClick={() => this.handleClick('convenience')} className="desert_b3"> 
                 <div className="view third-effect">
                     
                        <div className="mask">
                               Convenience
                          </div>  
                 </div>
        </button>


        <button type="button"  onClick={() => this.handleClick('chocolate')} className="desert_b4"> 
                 <div className="view third-effect">
              
                        <div className="mask">
                               Chocolate
                          </div>  
                 </div>
        </button>


        <button type="button"  onClick={() => this.handleClick('bakeries')} className="desert_b5"> 
                 <div className="view third-effect">
                        <div className="mask">
                                 Bakeries
                          </div>  
                 </div>
        </button>


        <button type="button"  onClick={() => this.handleClick('cakeshop')} className="desert_b6"> 
                 <div className="view third-effect">
                  
                        <div className="mask">
                                  Cakeshop
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

export default connect(null, mapDispatchToProps)(Desserts);
