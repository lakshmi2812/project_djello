import React, { Component } from "react";
import { connect } from "react-redux";
import Lists from "../components/Lists";
import { getInitialLISTS } from "../actions";

// Define the class so that we can populate componentDidMount
class ListContainer extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isFormVisible: false
  //   };
  // }

  componentDidMount() {
    //pls clarify how this works
    //I am not having constructor(props) and super(props).
    //Am I still able to refer to this.props just because of the connect function
    //and mapStateToProps and mapDispatchToProps
    this.props.getInitialLISTS();
  }

  // toggleBoard = () => {
  //   console.log("Entered toggle board");
  //   const result = !this.state.isFormVisible;
  //   this.setState({
  //     isFormVisible: result
  //   });
  // };

  // onDeleteHandler = id => {
  //   this.props.deleteBoards(id);
  // };

  // createFormClickHandler => {
  //   this.props.createBoard(titleValue);
  // }

  // Render is required for all class components
  render() {
    const { lists, isFetchingLists } = this.props;
    console.log("lists in props:", lists);

    // Manually set the props - the presentational component
    // does not need the getInitialBOARDS action since it
    // was already dispatched
    return <Lists lists={lists} isFetchingLists={isFetchingLists} />;
  }
}

const mapStateToProps = state => {
  console.log("lists state in container", state.lists);
  return {
    lists: state.lists,
    //you may have to change isFetching later!Now, its common while fetching boards and lists right!
    isFetchingLists: state.isFetchingLists
  };
};

// Add our new getInitialBOARDS action dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    getInitialLISTS: () => {
      dispatch(getInitialLISTS());
    }
  };
};

// Map props and dispatch to ApodContainer which will
// now render Apod itself.
// Export the result of `connect` directly.
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
