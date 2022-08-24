const express = require("express");
const app = express();
const appErrorController=require('../controller/appError')
const appError=require('../utility/appError')
const bookRout=require('../routes/book')

app.use(express.json());

app.use('/',bookRout)

app.all("*", function (req, res, next) {
  next(new appError("Bunday page mavjud emas", 404));
});

app.use(appErrorController);

module.exports = app;
