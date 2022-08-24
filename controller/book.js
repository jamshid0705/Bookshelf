const Book = require("../model/book");
const catchError = require("../utility/catchError");

const responseFunction = (res, statusCode, data) => {
  if (Array.isArray(data)) {
    res.status(statusCode).json({
      status: "success",
      results: data.length,
      data: data,
    });
  } else {
    res.status(statusCode).json({
      status: "success",
      data: data,
    });
  }
};

///////////// get all book ////////////////
const getAllBook = catchError(async (req, res) => {
  const book = await Book.find();

  responseFunction(res, 200, book);
});

//////////// get one book ////////////////
const getOneBook = catchError(async (req, res) => {
  const book = await Book.findById(req.params.id);

  responseFunction(res, 200, book);
});

////////////// add book //////////////////
const addBook = catchError(async (req, res) => {
  const data = req.body;
  const book = await Book.create(data);
  responseFunction(res, 200, book);
});

///////////// update book ///////////////
const updateBook = catchError(async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    validator: true,
  });
  responseFunction(res, 201, book);
});

//////////// delete book //////////////
const deleteBook=catchError(async(req,res)=>{
  const book=await Book.findByIdAndDelete(req.params.id)

  responseFunction(res,200,book)
})


module.exports={getAllBook,getOneBook,addBook,updateBook,deleteBook}