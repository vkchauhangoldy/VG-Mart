const userModel = require('../models/user')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const cron = require("node-cron")
//registration api
const secrete_key = process.env.SECRETE_KEY;
exports.userRegister = async (req, res) => {
    try {
        const { name, email, password, mobile } = req.body;
        if (!name || !email || !password || !mobile) {
            return res.status(404).json({ message: "Please fill all the fields" })
        }
        const user = await userModel.findOne({ email: email });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            mobile
        })
        res.status(201).json({ newUser, message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//loin api
exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" })
        }
        const user = await userModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        } else {
            const token = jwt.sign({ id: user._id, email: user.email }, secrete_key)
            res.status(200).json({ message: "User logged in successfully", token: token })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
const data = [
    { name: "John", email: "john@gmail.com", password: "123456" },
    { name: "Jane", email: "jane@gmail.com", password: "123456" }
]

const getData = () => {
    console.log(data);
}

// cron.schedule('*/2 * * * * *', () => {
//     console.log(new Date().toLocaleString());
//     console.log('running a task every 5 sec');
//     getData()
// });