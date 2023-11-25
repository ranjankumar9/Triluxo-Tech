const mongoose = require("mongoose")

const BookLibrarySchema = mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date:{type:Date, default: Date.now}
},{
    versionKey:false
})

const BookLibraryModel = mongoose.model("BookLibraryDetails", BookLibrarySchema) 

module.exports = {
    BookLibraryModel
}