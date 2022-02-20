const mongoose = require("mongoose");

/**
 * Booking Schema
 */
const BookingSchema = new mongoose.Schema(
  {
    space : {type:mongoose.Schema.Types.ObjectId, ref:'Space'},
    x:Number,
    y:Number,
    date: Date,
    phone:String,
    full_name:String,
    email:String
},
  { timestamps: true }
);

let Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
