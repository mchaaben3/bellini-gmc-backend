const Booking = require("../models/Booking.model");
const Space = require("../models/Space.model");

/*
** Make a booking
*/
exports.makeBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
  
    try {
      const savedBooking = await newBooking.save();
      res.status(200).json(savedBooking);
    } catch (err) {
      res.status(500).json(err);
    }
  };

/*
** Update a booking
*/
exports.updateBooking = async (req, res) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedBooking);
      } catch (err) {
        res.status(500).json(err);
      }
  };

  /*
** Delete a booking
*/
exports.deleteBooking = async (req, res) => {
    try {
        const updatedBooking = await Booking.findByIdAndRemove(
          req.params.id
         
        );
        res.status(200).json(updatedBooking);
      } catch (err) {
        res.status(500).json(err);
      }
  };
 /*
** find a booking
*/
exports.findBooking = async (req, res) => {
  try {
    const {date, space} = req.body;
      const bookingFinded = await Booking.find({ date, space });
      const spacefounded = await Space.find({id:bookingFinded.space})
      res.status(200).json({bookingFinded,spacefounded});
    } catch (err) {
      res.status(500).json(err);
    }
};
  