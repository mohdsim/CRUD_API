//Best Tutorial for SQL SSMS
//https://www.youtube.com/watch?v=9lp3RP22XDU&t=1092s
const dotenv = require("dotenv");
const assert = require("assert");
dotenv.config();

// Get Data From Envoirnment
const { SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER, PORT } = process.env;
const config = {
  user: SQL_USER, // sql user
  password: SQL_PASSWORD, //sql user password
  // server:'127.0.0.1',
  //   OR
  server: SQL_SERVER || "localhost",
  port: 49863, //PORT
  database: SQL_DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: false,
    enableArithAbort: true,
  },
};



//Given The Static Value or Withiout Envoirnment Both Will Work
// const  config = {
//   user:'mohdtest', // sql user
//   password:'Btech@2k21', //sql user password
//   // server:'127.0.0.1',
//   //   OR
//   server:'localhost',
//   port:49863,//PORT
//   database:'testDB',
//   options: {
//       encrypt:false,
//       trustServerCertificate: false,
//       enableArithAbort:  true,
//      },
// }

module.exports = config;
