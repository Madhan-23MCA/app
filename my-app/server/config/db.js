// const mongoose=require('mongoose')

// mongoose.connect(process.env.mongodb:localhost:27017/travelapp,{
//     useNewUrlParser:true
// })
// .then(()=>{
//     console.log("connected to db")
// })
// .catch((err)=>{
//     console.log(err)
// })


// const mongoose = require('mongoose');
// require('dotenv').config();  // Ensure dotenv is required if using .env file

// // Correct the MongoDB URI
// mongoose.connect('mongodb://localhost:27017/travelapp', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log("Connected to the database");
// })
// .catch((err) => {
//     console.log("Error connecting to the database:", err);
// });


// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();

// // Set up the port - fallback to 3000 if not defined in environment variables
// const PORT = process.env.PORT || 3000;

// // Database connection
// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/travelapp', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log("Connected to the database");
// })
// .catch((err) => {
//     console.log("Error connecting to the database:", err);
// });

// // Server listen
// app.listen(PORT, () => {
//     console.log(`App is listening on port ${PORT}`);
// });


// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log("Connected to the database");
// })
// .catch((err) => {
//     console.log("Error connecting to the database:", err);
// });



// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();

// // Hardcoded MongoDB URI for testing
// const MONGO_URI = 'mongodb://localhost:27017/travelapp';

// mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log("Connected to the database");
// })
// .catch((err) => {
//     console.log("Error connecting to the database:", err);
// });

// // Start your Express server here if needed
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const mongoose = require('mongoose');
require('dotenv').config(); // Ensure you have dotenv installed

// Correct the connection URI and use process.env.MONGO_URI
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to the database");
})
.catch((err) => {
    console.error("Error connecting to the database:", err);
});
