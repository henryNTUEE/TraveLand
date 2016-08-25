import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
//import { createPost } from '../actions/index';
import { Link } from 'react-router';

class FormSumbit extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    console.log(this.props);

    // const lat = this.props.params.lat;
    // const lng = this.props.params.lng;
    // var default_parameters = {
    //     category_filter: a,
    //     ll: lat+ ","+ lng,
    //     radius_filter: '1000',
    //     sort: '2'
    //   };
    // this.props.request_yelp(default_parameters);

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
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        
        <button type="submit" className="btn btn-primary">Submit</button>
     
        <Link to="/" className="btn btn-danger">Cancel</Link>
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
  if(!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {})(FormSumbit);
