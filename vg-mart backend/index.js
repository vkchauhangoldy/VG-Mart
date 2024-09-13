const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path")
require("./database/connection");
const port = 2002;
const userRoutes = require("./routes/user");
const addressRoutes = require("./routes/address");
const categoryRoutes = require("./routes/category");
//set middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set static folder
app.use("/uploads", express.static("uploads"));

// set Headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
//routes
app.use("/users", userRoutes);
app.use("/address", addressRoutes);
app.use("/category", categoryRoutes);

//server 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
