 const config=require('../Configs/dbConfig')
var sql = require("mssql");

const homeDetails= (req:any,resp:any)=>{
     // connect to your database
    sql.connect(config, function (err) {
    
        if (err){
            console.log("Db Data",err);
            return err }
        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
        request.query('select * from Persons', function (err, recordset) {
            if (err) console.log(err)
           // send records as a response
            resp.send(recordset);
          });
    });
}

module.exports=homeDetails