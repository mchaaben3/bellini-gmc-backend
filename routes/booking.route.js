
const express = require("express");
const mongoose = require("mongoose");
const {
    makeBooking,
    findBooking
 
} = require("../controllers/Booking.Controller");


const Router = express.Router();

Router.post("/make", makeBooking);
Router.get("/find", findBooking);



module.exports = Router;
