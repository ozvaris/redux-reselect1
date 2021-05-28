import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { fetchAlbum } from "../store";
import { List } from "./common";

const Album = props => (
  <List
    fetch={props.fetchAlbum}
    data={props.album}
    count={count}
    reselectCount={reselectCount}
  />
);

/* CONTAINER */

let count = -1;
let reselectCount = -1;

const albumSelector = createSelector(
  state => state.album,
  album => {
    reselectCount += 1;
    return album;
  }
);

const mapStateToProps = state => {
  count += 1;
  return {
    album: state.album,
    reselectAlbum: albumSelector(state),
    count,
    reselectCount
  };
};

export default connect(mapStateToProps, { fetchAlbum })(Album);
