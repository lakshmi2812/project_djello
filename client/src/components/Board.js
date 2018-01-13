import React from "react";

const EachBoard = ({ board }) => {
  const { id, title } = board;
  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
    </div>
  );
};

const Board = ({ boards }) => {
  const boardList = boards.map(board => {
    <EachBoard board={board} key={board.id} />;
  });

  const noBoards = <p>Oops..no boards!</p>;

  return (
    <div>
      <div>
        <p>Our Boards...</p>
      </div>
      <div>
        <p>{boardList ? boardList : noBoards}</p>
      </div>
    </div>
  );
};

export default Board;
