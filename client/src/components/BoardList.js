import React from "react";
import CreateBoardForm from "./createBoardForm";

const EachBoard = ({ board, deleteBoard }) => {
  const { id, title } = board;
  return (
    <div>
      <h4>{id}</h4>
      <h2>{title}</h2>
      <button
        onClick={e => deleteBoard(e, id)}
        className="btn btn-sm btn-danger"
      >
        Delete
      </button>
    </div>
  );
};

//BoardList
const BoardList = ({
  boards,
  isFetchingBoards,
  deleteBoard,
  createBoard,
  isFormVisible,
  toggleBoard
}) => {
  if (isFetchingBoards) {
    return <p>Loading...</p>;
  }
  console.log("boardList in component", boards);
  console.log("deleteBoards in component", deleteBoard);
  const boardList = boards.map(board => {
    return <EachBoard board={board} deleteBoard={deleteBoard} key={board.id} />;
  });

  //const noBoards = <p>Oops..no boards!</p>;
  //const stillFetching = <p>Loading...</p>;

  return (
    <div>
      <div>
        <p>Our Boards...</p>
      </div>
      <div>
        <div>{boardList}</div>
        <button className="btn btn-md btn-success" onClick={toggleBoard}>
          Toggle Board
        </button>
        {isFormVisible ? (
          <CreateBoardForm
            createBoard={createBoard}
            style={{ padding: "2px" }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default BoardList;
