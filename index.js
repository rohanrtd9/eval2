const express = require('express');
const mongoose = require('mongoose');
const connectToMongo=require('./db');

var cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());
const routes = require('./routes/routes');
app.use('/api', routes)
app.get("/", (req, res) => res.send("API is Running"));
connectToMongo();
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

