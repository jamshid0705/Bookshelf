const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => {
    console.log("DATABASE to connected !");
  })
  .catch((error) => {
    console.log(error.message);
  });


module.exports=mongoose