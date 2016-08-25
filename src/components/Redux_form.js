import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
//import { createPost } from '../actions/index';
import { Link } from 'react-router';
import {request_yelp} from '../actions/yelp';

class FormSumbit extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    console.log(this.props);

    const lat = this.props.params.lat;
    const lng = this.props.params.lng;
    const filter = this.props.params.filter

    console.log('params', this.props.params);
    console.log('query',this.props.query)

    var default_parameters = {
        category_filter: filter,
        ll: lat+ ","+ lng,
        radius_filter: this.props.fields.title.value,
        sort: this.props.fields.categories.value
      };
    this.props.request_yelp(default_parameters);

    this.context.router.push("/YelpList/"+this.props.params.lat+"/"+this.props.params.lng);
    //"YelpList/"+this.props.params.lat+"/"+this.props.params.lng

    // this.props.createPost(props)
    //   .then(() => {
    //     // blog post has been created, navigate the user to the index
    //     // We navigate by calling this.context.router.push with the
    //     // new path to navigate to.
    //     console.log(this.props);
    //     this.context.router.push('/');
    //   });
  }

  render() {
    //const handleSubmit = this.props.handleSubmit
    const { fields: { title, categories }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Search Radius (meter)</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Type of Sorting: 1=>'By distance', 2=>'By reviews', 3=>'Best Match' </label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        

        
        <button type="submit" className="btn btn-primary">Submit</button>
     
        <Link to={"yelp/" + this.props.params.lat + "/" + this.props.params.lng }  params={{lat: this.props.params.lat},{lng: this.props.params.lng}} className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

//<Link to={"YelpList/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.categories) {
    errors.categories = 'Enter categories';
  }
  

  return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories'],
  validate
}, null, {request_yelp})(FormSumbit);
