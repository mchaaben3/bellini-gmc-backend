const Space = require("../models/Space.model");

/*
** Make a Space
*/
exports.makeSpace = async (req, res) => {
    const newSpace = new Space(req.body);
  
    try {
      const savedSpace = await newSpace.save();
      res.status(200).json(savedSpace);
    } catch (err) {
      res.status(500).json(err);
    }
  };
