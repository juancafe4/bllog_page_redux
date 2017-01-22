import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

export default class PostNew extends Component {
  render() {
    return (
      <form>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control"/>
        </div>

        <button type="submit" className="button button-primary">Submit</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'], 
})(PostNew);