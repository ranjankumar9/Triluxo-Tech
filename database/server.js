const mongoose = require("mongoose");
require("dotenv").config()

const dbconnection = mongoose.connect(process.env.mongourl)


module.exports = {
    dbconnection
}