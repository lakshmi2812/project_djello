import React from "react";

const CreateBoardForm = ({ createBoard }) => {
  return (
    <form className="form">
      <input type="text" name="title" id="title" />
      <button
        onClick={e => {
          e.preventDefault();
          createBoard(document.getElementById("title").value);
        }}
      >
        Create Board
      </button>
    </form>
  );
};

export default CreateBoardForm;
