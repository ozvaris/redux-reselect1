import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchPost } from '../store';
import { List } from './common';

const Post = props => (
  <List fetch={props.fetchPost} data={props.post} count={count} reselectCount={reselectCount} />
);

/* CONTAINER */
let count = -1;
let reselectCount = -1;

const postSelector = createSelector(
  state => state.post,
  post => {
    reselectCount += 1;
    return post;
  }
);

const mapStateToProps = state => {
  count += 1;
  return {
    post: state.post,
    reselectPost: postSelector(state),
    count,
    reselectCount,
  };
};

export default connect(mapStateToProps, { fetchPost })(Post);
