require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose'); // Import Mongoose for MongoDB interaction

const router = require("./routes/routes");

// Connect to MongoDB using the configured connection string
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(process.env.PORT, function() {
    console.log(`App listening at port ${process.env.PORT}`);
});

// console.log(env.MONGODB_URI);