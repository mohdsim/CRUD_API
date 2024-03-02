//https://www.youtube.com/watch?v=s8qKcbyKEwo&list=PLolI8AY2AS9ZXyuY2WQrpKCSPQbHmj2vq&index=3
const express =require('express')
const app = express();
const PORT= process.env.PORT || 8082;
const sql = require('mssql')
//const cores=require('cores')
//const bodyParser=require('body-parser')
const userRoutes=require('./Routes/routes')


app.use('/',userRoutes)

app.listen(PORT,():void=>{ 
    console.log(`Server running on Port ${PORT}`)
})








