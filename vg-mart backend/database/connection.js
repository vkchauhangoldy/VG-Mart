const mongoose = require("mongoose");
const uri = process.env.DATABASE_URL;

mongoose.connect(uri, {
}).then(() => {
    console.log("Connected to database");
}).catch(err => {
    console.log("Error connecting to database", err);
})


//close databse connection 
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose connection is disconnected due to application termination');
        process.exit(0);
    });
});
