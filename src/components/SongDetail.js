import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select your favorite song</div>;
  }
  // console.log(song);
  //console.log(props);
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title:{song.title}
        <br />
        Duration:{song.duration}
      </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { song: state.selectedSong }; //from combineReducers
};

export default connect(mapStateToProps)(SongDetail);
