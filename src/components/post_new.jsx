import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect} from 'react-redux';
import { createPost } from '../actions/index';

const renderInput = ({meta: { touched, error} }) => (
  <div>
    <input className="form-control" type="text"/>
    <div>
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)
const renderTextArea = ({meta: { touched, error} }) => (
  <div>
    <textarea className="form-control" type="text"/>
    <div>
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)
let PostNew = (props) =>  {
    const { handleSubmit } = props;
  
    return (
      <form onSubmit={handleSubmit(props.createPost)}>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <Field name="title" component={renderInput} type="text" className="form-control"/>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <Field name="categories" component={renderInput} type="text" className="form-control"/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <Field name="content" component={renderTextArea} type="text" className="form-control"/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  
}

const validate = values =>  {
  const error = {};
  if (!values.title)
    error.title = 'Enter a username';
  return error;
}

PostNew = reduxForm({
  form: 'initializeFromState',
  validate
})(PostNew);

export default connect(null, { createPost })(PostNew);