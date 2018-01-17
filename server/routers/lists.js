var express = require("express");
var router = express.Router();

//allow usage of database via sequelizer
var models = require("../models");
var List = models.List;
var sequelize = models.sequelize;

router.get("/", async (req, res) => {
  let lists = await List.findAll();
  console.log("All lists: ", lists);
  res.json(lists);
});

module.exports = router;
