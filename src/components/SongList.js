//VAR 1  old
// import React from "react";
// class SongList extends React.Component {}
//VAR 2
// import React, { Component } from "react";
// class SongList extends Component {}
////////////////////////////////////////////
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectedSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props);
    // console.log(this.props.songs);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//Соглашение(конвенция) ТРЕБУЕТ именно такое название  этой функции!! gg241
const mapStateToProps = (state) => {
  //console.log(state);
  //return state;
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectedSong: selectedSong })(
  SongList
); //IMPORTANT!!
