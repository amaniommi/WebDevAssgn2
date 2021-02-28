/* 
File Name: users.js
Student Name : Naga Amani Ommi
Student ID : 301152577
Date : 28/02/2021  
*/

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
