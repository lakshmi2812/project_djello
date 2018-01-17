import React, { Component } from "react";
import "./App.css";
import BoardContainer from "./containers/BoardContainer";
import ListContainer from "./containers/ListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <BoardContainer />
        </div>
        <div>
          <ListContainer />
        </div>
      </div>
    );
  }
}

export default App;
