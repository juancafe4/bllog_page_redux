import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect} from 'react-redux';
import { createPost } from '../actions/index';

import { Link } from 'react-router';
const renderInput = ({ input, label, type, meta: { touched, error, invalid } }) => {
  return (
    <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
      <label>{label}</label>
      <input className="form-control" {...input} placeholder={label} type={type}/>
      <div className="text-help">
        {touched ? error : ''}
      </div>
   </div> 
  );
};
const renderTextArea = ({ input, label, type, meta: { touched, error, invalid } }) => {
  return (
    <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
      <label>{label}</label>
      <textarea className="form-control" {...input} placeholder={label} type={type}/>
      <div className="text-help">
        {touched ? error : ''}
      </div>
   </div> 
  );
};

class PostNew extends Component  {   
    static contextTypes = {
      router: PropTypes.object,
    }
    onSubmit(values) {
      console.log(values)
      this.props.createPost(values)
        .then( () => {
          // blog post  has been created, navigate the user to the index
          // We navigate by calling this.context.router.push with the
          // new path ti navigate to.

          this.context.router.push('/');
        });
    }
    
    render() {
      const { handleSubmit } = this.props;
      return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Create a New Post</h3>
            <Field label="Title" name="title" component={renderInput} />
            <Field label="Categories" name="categories" component={renderInput } className="form-control"/>
            <Field label="Content" name="content" component={renderTextArea} />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger"> Cancel </Link>
        </form>     
      );
    }
}

const validate = values =>  {
  const error = {};
  if (!values.title)
    error.title = 'Enter a username';
  if (!values.categories)
    error.categories = 'Enter categories';
  if (!values.content)
    error.content = 'Enter some content';
  return error;
}

PostNew = reduxForm({
  form: 'initializeFromState',
  validate
})(PostNew);

export default connect(null, { createPost })(PostNew);