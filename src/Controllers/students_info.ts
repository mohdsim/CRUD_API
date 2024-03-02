//const logger = require('./logger').createLogger(); // logs to STDOUT
// logger = require('./logger').createLogger('development.log');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8082;

// Middleware to parse JSON bodies
app.use(express.json());

 const config=require('../Configs/dbConfig')
var sql = require("mssql");

//Create Student


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

const createStudent = (req: any, resp: any) => {
    // console.log("req---->",req)
    // console.log("req B---->",req.body)
    // const { userId, userName } = req.body;
    // console.log("userId---->",userId)
    // console.log("userName---->",userName)
   
    const data= {
        "userId": 4,
        "userName": "Mohd Rizwan" // Assuming "Raju" is the user name to be inserted
    };

    sql.connect(config, function (err) {
        if (err) {
            console.log("Db Data in student_info.ts--->", err);
            return resp.status(500).send(err); // Sending error response
        }

        var request = new sql.Request();

        // Using parameterized query to prevent SQL injection
        request.input('userId', sql.Int, data.userId); 
        request.input('userName', sql.VarChar(255), data.userName);
        
        request.query('INSERT INTO loged_in_user VALUES (@userId, @userName)', function (err, recordset) {
            if (err) {
                console.log(err);
                return resp.status(500).send(err); // Sending error response
            }

            // Sending success response
            return resp.send("Student created successfully.");
        });
    });
}






const getStudents= (req:any,resp:any)=>{
     // connect to your database
    sql.connect(config, function (err) {
    
        if (err){
             console.log("Db Data in user.ts--->",err);
             return err
         }
        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
        request.query('select * from loged_in_user', function (err, recordset) {
            if (err) console.log(err)
           // send records as a response
           return resp.send(recordset);
          });
    });
}



//Get Student Info By Id
const getStudentById= (req:any,resp:any)=>{
    // connect to your database
   sql.connect(config, function (err) {
     if (err){
            console.log("Db Data in user.ts--->",err);
            return err
        }
       // create Request object
       var request = new sql.Request();
       // query to the database and get the records
       request.query('select * from Persons WHERE id=?',[req.parama.id], function (err, recordset) {
           if (err) console.log(err)
          // send records as a response
           resp.send(recordset);
         });
   });
}



module.exports={
    createStudent,
    getStudents,
    getStudentById
}
