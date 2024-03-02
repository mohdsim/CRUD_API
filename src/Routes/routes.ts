const express = require("express");
const router = express.Router();
const getStudents = require("../Controllers/students_info");

//Create Student Records
router.post("/students/createStudent", getStudents.createStudent);

//Get Students Record
router.get("/students/getStudents", getStudents.getStudents);

//Get Student By Id
router.get("/students/getStudentById/:id", getStudents.getStudentById);


module.exports = router;
