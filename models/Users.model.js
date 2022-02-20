const mongoose = require("mongoose");

/**
 * Users Schema
 */
const UsersSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
    },

  googleId:{
    type:String,
    required:true
  }
  
  },
  { timestamps: true }
);

let Users = mongoose.model("users", UsersSchema);

module.exports = Users;
