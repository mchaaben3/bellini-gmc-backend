
const express = require("express");
const mongoose = require("mongoose");
const {
    makeSpace
 
} = require("../controllers/Space.Controller");


const Router = express.Router();

Router.post("/space", makeSpace);


module.exports = Router;
