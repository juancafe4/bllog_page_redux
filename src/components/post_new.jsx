import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect} from 'react-redux';
import { createPost } from '../actions/index';


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
let PostNew = (props) =>  {
    const { handleSubmit } = props;
  
    return (
      <form onSubmit={handleSubmit(props.createPost)}>
        <h3>Create a New Post</h3>
          <Field label="Title" name="title" component={renderInput} />
          <Field label="Categories" name="categories" component={renderInput } className="form-control"/>
          <Field label="Content" name="content" component={renderTextArea} />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  
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