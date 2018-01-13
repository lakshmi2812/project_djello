import React, { Component } from "react";
import { connect } from "react-redux";
import Board from "../components/Board";
import { getInitialBOARDS } from "../actions";

// Define the class so that we can populate componentDidMount
class BoardContainer extends Component {
  componentDidMount() {
    this.props.getInitialBOARDS();
  }

  // Render is required for all class components
  render() {
    const { boards, isFetching } = this.props;

    // Manually set the props - the presentational component
    // does not need the getInitialBOARDS action since it
    // was already dispatched
    return <Board boards={boards} isFetching={isFetching} />;
  }
}

const mapStateToProps = state => {
  return {
    boards: state.boards,
    isFetching: state.isFetching
  };
};

// Add our new getInitialBOARDS action dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    getInitialBOARDS: () => {
      dispatch(getInitialBOARDS());
    }
  };
};

// Map props and dispatch to ApodContainer which will
// now render Apod itself.
// Export the result of `connect` directly.
export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
