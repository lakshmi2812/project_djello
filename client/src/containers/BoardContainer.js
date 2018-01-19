import React, { Component } from "react";
import { connect } from "react-redux";
import BoardList from "../components/BoardList";
import { getInitialBOARDS, deleteBoard, createBoard } from "../actions";

// Define the class so that we can populate componentDidMount
class BoardContainer extends Component {
  constructor() {
    super();
    this.state = {
      isFormVisible: false
    };
  }

  componentDidMount() {
    //pls clarify how this works
    //I am not having constructor(props) and super(props).
    //Am I still able to refer to this.props just because of the connect function
    //and mapStateToProps and mapDispatchToProps
    this.props.getInitialBOARDS();
  }

  toggleBoard = () => {
    console.log("Entered toggle board");
    const result = !this.state.isFormVisible;
    this.setState({
      isFormVisible: result
    });
  };

  // onDeleteHandler = id => {
  //   this.props.deleteBoards(id);
  // };

  // createFormClickHandler => {
  //   this.props.createBoard(titleValue);
  // }

  // Render is required for all class components
  render() {
    const { boards, isFetching, deleteBoards } = this.props;
    console.log("boards in props:", boards);

    // Manually set the props - the presentational component
    // does not need the getInitialBOARDS action since it
    // was already dispatched
    return (
      <BoardList
        boards={boards}
        isFetchingBoards={isFetching}
        deleteBoard={this.props.deleteBoard}
        createBoard={this.props.createBoard}
        isFormVisible={this.state.isFormVisible}
        toggleBoard={this.toggleBoard}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log("state in container", state.boards);
  return {
    boards: state.boardData.boards,
    isFetching: state.isFetchingBoards
  };
};

// Add our new getInitialBOARDS action dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    getInitialBOARDS: () => {
      dispatch(getInitialBOARDS());
    },
    deleteBoard: (e, id) => {
      e.preventDefault();
      dispatch(deleteBoard(id));
    },
    createBoard: titleValue => {
      console.log("Entering create Board");
      dispatch(createBoard(titleValue));
    }
  };
};

// Map props and dispatch to ApodContainer which will
// now render Apod itself.
// Export the result of `connect` directly.
export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
