import { combineReducers } from "redux";
import axios from "axios";

/*UTILS************************************** */

const randomId = (num) => Math.floor(Math.random() * num);

/*ALBUMS************************************* */

// type
const FETCH_ALBUM = "FETCH_ALBUM";

// action creator
const fetchAlbum = () => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/albums/${randomId(100)}`)
    .then((results) => {
      dispatch({ type: FETCH_ALBUM, payload: results.data });
    });
};

// reducer
const album = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALBUM:
      return action.payload;
    default:
      return state;
  }
};

/*POSTS************************************* */

// type
const FETCH_POST = "FETCH_POST";

// action creator
const fetchPost = () => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${randomId(100)}`)
    .then((results) => {
      dispatch({ type: FETCH_POST, payload: results.data });
    });
};

// reducer
const post = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST:
      return action.payload;
    default:
      return state;
  }
};

/*ROOT REDUCER************************************* */

export default combineReducers({
  post,
  album
});

export { fetchAlbum, fetchPost };
