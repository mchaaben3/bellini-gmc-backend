const mongoose = require("mongoose");

/**
 * Space Schema
 */
const SpaceSchema = new mongoose.Schema({
    name: String,

    n: Number,

    m: Number,

    tables: [{
        isVip: Boolean,
        x: Number,
        y: Number,
        capacity: Number
    }],
}, {
    timestamps: true
});

let Space = mongoose.model("Space", SpaceSchema);

module.exports = Space;