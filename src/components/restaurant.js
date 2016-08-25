import React, { Component,PropTypes } from 'react';
import {Link} from 'react-router';
import {request_yelp} from '../actions/yelp';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


class Restaurants extends Component {
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
      <div className="Food_background">
      <div className="bkBtn" style={{marginTop: '5px'}}>
        <Link to={"yelp/" + this.props.params.lat + "/" + this.props.params.lng }  params={this.props.params} ><strong>Back</strong></Link>
      </div>
      
        <button type="button"  onClick={() => this.handleClick('newamerican')} className="luF_button1"> 
                            <div className="view third-effect">
                               <div className="mask">
                                AMERICA
                               </div>  
                            </div>
        </button>
        
        <button type="button"  onClick={() => this.handleClick('chinese')} className="luF_button2"> 
                            <div className="view third-effect">
                               <div className="mask">
                                Chinese
                               </div>  
                            </div>
        </button> 
        
        <button type="button"  onClick={() => this.handleClick('french')} className="luF_button3"> 
                            <div className="view third-effect">
                               <div className="mask">
                                France
                               </div>  
                            </div>
        </button> 
        
        
        <button type="button"  onClick={() => this.handleClick('german')} className="luF_button4"> 
                            <div className="view third-effect">
                               <div className="mask">
                                German
                               </div>  
                            </div>
        </button>  
        <button type="button"  onClick={() => this.handleClick('restaurants')} className="luF_button5"> 
                            <div className="view third-effect">
                               <div className="mask">
                                All
                               </div>  
                            </div>
        </button> 
        <button type="button"  onClick={() => this.handleClick('italian')} className="luF_button6"> 
                            <div className="view third-effect">
                               <div className="mask">
                                Italy
                               </div>  
                            </div>
        </button> 
        <button type="button"  onClick={() => this.handleClick('japanese')} className="luF_button7">
                            <div className="view third-effect">
                               <div className="mask">
                                Japan
                               </div>  
                            </div>
        </button> 
        <button type="button"  onClick={() => this.handleClick('korean')} className="luF_button8"> 
                                  <div className="view third-effect">
                                     <div className="mask">
                                      Korea
                                     </div>  
                                  </div>
        </button> 
        <button type="button"  onClick={() => this.handleClick('thai')} className="luF_button9"> 
                            <div className="view third-effect">
                               <div className="mask">
                                Thailand
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

export default connect(null, mapDispatchToProps)(Restaurants);
