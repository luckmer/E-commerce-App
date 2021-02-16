const mongoose = require("mongoose");
const { Schema } = mongoose;

let ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: Object,
    },
    price: {
        type: Number,
        trim:true,
    },
    count: {
        type: Number,
        default: 1
    },
}, {
    timestamps:true,
});


let data = mongoose.model("Products", ProductSchema);

module.exports = data;
