import React from "react";

const EachList = ({ list }) => {
  const { title, description, boardId } = list;
  return (
    <div>
      <h2>{title}</h2>
      <h5>
        <i>belongs to board {boardId}</i>
      </h5>
      <h4>{description}</h4>
    </div>
  );
};

//BoardList
const Lists = ({ lists, isFetchingLists }) => {
  if (isFetchingLists) {
    console.log("is Fetching lists: ", isFetchingLists);
    return <p>Loading...</p>;
  }
  //console.log("List in component", boards);
  const listOfLists = lists.map(list => {
    return <EachList list={list} key={list.id} />;
  });

  //const noBoards = <p>Oops..no boards!</p>;
  //const stillFetching = <p>Loading...</p>;

  return (
    <div>
      <div>
        <p>Our Lists...</p>
      </div>
      <div>
        <div>{listOfLists}</div>
      </div>
    </div>
  );
};

export default Lists;
