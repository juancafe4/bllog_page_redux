import React, { Component } from 'react';

import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
class PostsIndex extends Component {
  componentWillMount() {
    console.log('This is a good time to call on an action creator to fetch posts')
    this.props.fetchPosts();
  }
  render() {
    return <div>List of blog posts</div>
  }
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}
export default connect(null, mapDispatchtoProps)(PostsIndex)