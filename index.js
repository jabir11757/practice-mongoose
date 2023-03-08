const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose")
const port = process.env.PORT || 5000;
require('dotenv').config()


app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.yt0e1fj.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const userRoute = require('./routers/user.router')
// app.use("/post-user", userRoute)
const userData = require('./routers/user.router')
app.use("/post-user", userData)

app.get('/', (req, res) => {
    res.send('Practice server running!');
})

app.listen(port, () => {
    console.log(`Practice server is running on port ${port}`)
})