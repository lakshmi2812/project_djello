var express = require("express");
var router = express.Router();

//allow usage of database via sequelizer
var models = require("../models");
var Board = models.Board;
var List = models.List;
var sequelize = models.sequelize;

//* GET boards. */  "Read" boards "CRUD"
router.get("/", async (req, res, next) => {
  try {
    let boards = await Board.findAll();
    console.log("Boards is here:");
    console.log(boards);
    res.json(boards);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id/lists", async (req, res) => {
  let _boardId = req.params.id;
  let lists = await Board.findAll({
    where: { id: _boardId },
    include: [{ model: List }]
  });

  console.log("All lists for board 1: ", lists);
  res.json(lists);
});

//curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/data
//Create a new board "CRUD"
router.post("/", async (req, res, next) => {
  let _title = req.body.title;
  console.log("req.body: ", req.body);
  console.log("****************************");
  console.log("The new title is: ", _title);
  try {
    await Board.create({ title: _title }, { fields: ["title"] });
    let boards = await Board.findAll();
    res.json(boards);
  } catch (err) {
    console.error(err);
  }
});

//curl -X "DELETE" http://localhost:3001/boards/2   --> testing
router.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    await Board.destroy({
      where: {
        id: id
      }
    });
    let boards = await Board.findAll();
    console.log("Boards after deletion is here:");
    console.log(boards);
    res.json(boards);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
