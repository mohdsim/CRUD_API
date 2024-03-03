const express = require("express");
const app = express();
const router = express.Router();
const getStudents = require("../Controllers/students_info");

router.post('/createBook',getStudents.createBook)

//Create Student Records
router.post("/students/createUser", getStudents.createUser);

//Get All Records Record
router.get("/students/getAllUsers", getStudents.getAllUsers);

//Get Student By Id
router.get("/students/getUserById/:userId", getStudents.getUserById);

//Update the User By Id
router.put("/students/updateUserById/:userId", getStudents.updateUserById);


//Get Student By Id
router.delete("/students/deletUserById/:userId", getStudents.deletUserById);


module.exports = router;
