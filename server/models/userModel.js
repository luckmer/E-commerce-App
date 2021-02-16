const mongoose = require("mongoose");
const { Schema } = mongoose;

let PostSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter your email!"],
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        cart: {
            type: Array,
            default: [],
        },
        role: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

let data = mongoose.model("Users", PostSchema);

module.exports = data;
