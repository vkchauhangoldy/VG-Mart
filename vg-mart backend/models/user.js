const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            default: "user",
        },
        address: [{ type: mongoose.Schema.Types.ObjectId, ref: "address" }],
        del_flag: {
            type: String,
            default: "0"
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
