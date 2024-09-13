const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    flat_no: {
        type: String,
        required: false
    },
    address_line1: {
        type: String,
        required: true
    },
    address_line2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    pincode: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    del_flag: {
        type: String,
        default: "0"
    }
}, { timestamps: true })
module.exports = mongoose.model("address", addressSchema)