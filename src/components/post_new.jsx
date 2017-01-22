import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect} from 'react-redux';
import { createPost } from '../actions/index';

let PostNew = (props) =>  {
    const { handleSubmit } = props;
    console.log(props.createPost)
    return (
      <form onSubmit={handleSubmit(props.createPost)}>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <Field name="title" component="input" type="text" className="form-control"/>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <Field name="categories" component="input" type="text" className="form-control"/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <Field name="content" component="textarea" type="text" className="form-control"/>
        </div>

        <button type="submit" className="button button-primary">Submit</button>
      </form>
    );
  
}

// connect first argument is mapStateToProps second mapDispatchToProps
// reduxForm1st is from config  2nd is mapStateToProps 3rd mapDispatchToProps 


PostNew = reduxForm({
  form: 'initializeFromState',
})(PostNew);

export default connect(null, { createPost })(PostNew);