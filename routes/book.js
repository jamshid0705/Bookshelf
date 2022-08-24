const express = require("express");
const bookController = require("../controller/book.js");
const Rout = express.Router();

Rout.route("/").get(bookController.getAllBook).post(bookController.addBook);
Rout.route("/:id")
  .get(bookController.getOneBook)
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = Rout;
