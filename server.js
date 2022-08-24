const app=require('./config/app')
require('dotenv').config()
require('./config/db')

const port=process.env.PORT || 8000
app.listen(port,()=>{
  console.log(`${port} to listening !`)
})