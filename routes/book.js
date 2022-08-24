const express = require("express");
const bookController = require("../controller/book.js");
const Rout = express.Router();

Rout.route('/get/add/:isbn').get(bookController.addBook)
Rout.route('/post/read').post(bookController.updateBook)
Rout.route('/get/book').get(bookController.getAllBook)


module.exports = Rout;
