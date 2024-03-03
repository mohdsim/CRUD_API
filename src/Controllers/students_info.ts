
const express = require('express');
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
const config=require('../Configs/dbConfig')
var sql = require("mssql");

//Create Student
//Static Post Api

// const createStudent= (req:any,resp:any)=>{

//       const data= {
//         "userId":4,
//         "userName":""
//        }

//     sql.connect(config, function (err) {
    
//         if (err){
//              console.log("Db Data in student_info.ts--->",err);
//              return err }
//         // create Request object

//         var request = new sql.Request();
//         // query to the database and get the records 
//        // VALUES(4,"Mohd Rizwan")
//        //var res=request.query('insert into Mytab values(req.query.first_name ,req.query.last_name)');
//     //});
//         request.query(`INSERT INTO loged_in_user values(4,Raju)`, function (err, recordset) {
//             if (err) console.log(err)
//            // send records as a response
//            return resp.send(recordset);
//           });
//     });

// }



//Dynamic Post Api
const createUser = (req: any, resp: any) => {
    
      sql.connect(config, function (err) {
        if (err) {
            console.log("Db Data in student_info.ts--->", err);
            return resp.status(500).send(err); // Sending error response
        }

        var request = new sql.Request();

        // Using parameterized query to prevent SQL injection
        request.input('userId', sql.Int, req.body.userId); 
        request.input('userName', sql.VarChar(255),req.body.userName);
        
        request.query('INSERT INTO loged_in_user VALUES (@userId, @userName)', function (err, recordset) {
            if (err) {
                console.log(err);
                return resp.status(500).send(err); // Sending error response
            }

            // Sending success response
            //return resp.send("Student created successfully.");
            resp.json(
                {
                "message":"Added Successfully",
                "data":recordset
               })
        });
    });
}


//**************************


//const cors = require('cors');



const createBook =(req, res)=>{
// Where we will keep books
let books = [];

//app.use(cors());

// Configuring body parser middleware
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());
// app.use(express.json());


    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);
    
    res.send(req.body);
   // res.send('Book is added to the database');
   // res.send(JSON.parse(req));
//});
//***************************
}




const getAllUsers= (req:any,resp:any)=>{
     // connect to your database
    sql.connect(config, function (err) {
    
        if (err){
             console.log("Db Data in user.ts--->",err);
             return err
         }
        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
        request.query('select *from loged_in_user', function (err, recordset) {
            if (err) console.log(err)
           // send records as a response
           return resp.send(recordset);
          });
    });
}



//Get Student Info By Id
const getUserById= (req:any,resp:any)=>{
    // connect to your database
   sql.connect(config, function (err) {
     if (err){
            console.log("Db Data in user.ts--->",err);
            return err
        }
      
       // create Request object
       const userId = parseInt(req.params.userId)
       var request = new sql.Request();
       request.input('userId', sql.Int,userId);
       // query to the database and get the records
       request.query('SELECT * FROM loged_in_user Where userId=@userId', function (err, recordset) {
           if (err) console.log(err)
          // send records as a response
        //    resp.send(recordset);
        resp.json(
            {
            "message":"Fetche Successfully",
            "data":recordset
           })
         });
   });
}

//Update User

const updateUserById= (req:any,resp:any)=>{
    // connect to your database
   sql.connect(config, function (err) {
     if (err){
            console.log("Db Data in user.ts--->",err);
            return err
        }
        // create Request object
       var request = new sql.Request();
       request.input('userId', sql.Int,req.body.userId); 
       request.input('userName', sql.VarChar(255), req.body.userName);
       //request.input('userId', sql.Int, id);
       // query to the database and Delete the records
       request.query('UPDATE loged_in_user SET userId=@userId, userName=@userName WHERE userId=@userId',function (err, recordset) {
           if (err) console.log(err)
            resp.json(
            {
            "message":"Updated Successfully",
            "data":recordset
           })
         });
   });
}


//Get Student Info By Id
const deletUserById= (req:any,resp:any)=>{
    // connect to your database
   sql.connect(config, function (err) {
     if (err){
            console.log("Db Data in user.ts--->",err);
            return err
        }
       
        const id = parseInt(req.params.userId)

       // create Request object
       var request = new sql.Request();
       request.input('userId', sql.Int, id);
       // query to the database and Delete the records
       request.query('DELETE FROM loged_in_user WHERE userId=@userId',function (err, recordset) {
           if (err) console.log(err)
          // send records as a response
           //resp.send(recordset);
          // console.log("recordset--->",recordset)
           resp.json(
            {
            "message":"Deleted Successfully",
            "data":recordset
           })
         });
   });
}



module.exports={
    createUser,
    createBook,
    getAllUsers,
    getUserById,
    updateUserById,
    deletUserById,
}
