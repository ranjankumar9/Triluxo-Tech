const express = require("express");
const { BookLibraryRouter } = require("./routes/booklibrary.route");
const { dbconnection } = require("./database/server");
require('dotenv').config()
const cors = require('cors')

const app = express()


app.get("/", (req,res) => {
    res.send("Welcome to Book Library Service Backend");
})

app.use(express.json())
app.use(cors())
app.use("/book", BookLibraryRouter)


app.listen(process.env.port, async() => {
    try {
        await dbconnection
        console.log({Msg:"Server is Connected with Mongodb Database"})
    } catch (err) {
    console.log({Msg:"server Connection Failed", err})
    }
    console.log(`Backend is Running On The Port ${process.env.port}`)
})