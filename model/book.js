const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Siz kitob nomini kiriting !"]
  },
  status:{
    type:Number,
    required:[true,"Siz status kiriting !"],
    enum:[0,1,2],
  }
})

const Book=mongoose.model('books',bookSchema)
module.exports=Book