//Imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors")

dotenv.config();

// Set up Server
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));

// Connect to MongoDB
mongoose.connect(process.env.MDB_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true
} , (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
});

// Set the Routes
app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));