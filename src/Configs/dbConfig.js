 const dotenv=require('dotenv')
 const assert=require('assert')
 dotenv.config()
 //console.log("process.env-->",process.env)
 //const{SQL_USER,SQL_PASSWORD,SQL_DATABASE,SQL_SERVER,SQL_ENCRYPT}=process.env
//const sqlEncript=process.env.sqlEncript ==='true'
//const sqlEncript=process.env.sqlEncript ==='false'

//  assert(PORT,'PORT IS REQUIRED')
//  assert(HOST,'HOST IS REQUIRED')
assert(8081,'PORT IS REQUIRED')
assert('localhost','HOST IS REQUIRED')

//  *******************
//#express server config
// NODE_ENV=development
// PORT=8081
// HOST=localhost
// HOST_URL=http://localhost:8081

//#sql server config
// SQL_USER=mohdtest
// SQL_PASSWORD=Btech@2k21
// SQL_DATABASE=tsttdb
// SQL_SERVER=127.0.0.1
// SQL_ENCRYPT=false
//  ******************
// const  config = {
//     user:SQL_USER, // sql user
//     password: SQL_PASSWORD, //sql user password
//     server:SQL_SERVER, // if it does not work try- localhost
//     database:SQL_DATABASE,
//     options: {
//       trustedconnection:  true,
//       enableArithAbort:  true,
//       instancename:  'SQLEXPRESS'  // SQL Server instance name
//     },
//     port:PORT
//   }

// const  config = {
//   user:'mohdtest', // sql user
//   password:'Btech@2k21', //sql user password
//   server:'127.0.0.1', // if it does not work try- localhost
//   database:'testDB',
//   options: {
//     trustedconnection:  true,
//     enableArithAbort:  true,
//    instancename: 'DESKTOP-PKRMF1F/SQLEXPRESS' || 'SQLEXPRESS'  // SQL Server instance name
//   },
//   port:8081 //PORT
// }

const  config = {
  user:'mohdtest', // sql user
  password:'Btech@2k21', //sql user password
  // server:'127.0.0.1', 
  //   OR
  server:'localhost',
  port:49863,//PORT
  database:'testDB',
  options: {
      encrypt:false,
      trustServerCertificate: false,
      enableArithAbort:  true,
     },
}

  //module.exports =config
  module.exports = config