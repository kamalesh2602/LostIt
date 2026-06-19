const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        location: String,
        contact: String,
        category: String,
        image: String,
        type: String,
        ownerToken: {
            type: String,
        },
        status: {
            type: String,
            default: "ACTIVE",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Item",
    itemSchema
);