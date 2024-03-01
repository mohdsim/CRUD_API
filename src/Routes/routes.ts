const express = require("express");
const router = express.Router();
const homeDetails = require("../Controllers/user");

router.get("/home/data", homeDetails);

module.exports = router;
