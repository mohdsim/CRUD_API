//https://www.youtube.com/watch?v=s8qKcbyKEwo&list=PLolI8AY2AS9ZXyuY2WQrpKCSPQbHmj2vq&index=3
const express =require('express')
const app = express();
const PORT= process.env.PORT || 3000;
const sql = require('mssql')
const router=require('./Routes/routes')
const getStudentInfo=require('./Configs/dbConfigOperation')

app.use('/',router)

app.listen(PORT,():void=>{ 
    console.log(`Server running on Port ${PORT}`)
})








