const express = require("express");
const { BookLibraryModel } = require("../model/booklibrary.model");


const BookLibraryRouter = express.Router()

BookLibraryRouter.get("/get", async(req,res) => {
    try {
        const BookLibraryData = await BookLibraryModel.find({})
        res.send(BookLibraryData)
    } catch (error) {
        res.send({ Msg: "Something went wrong. Please try again later", error });
    }
})

BookLibraryRouter.get("/get/:id", async (req, res) => {
    try {
        const { id } = req.params
        const SingleBookData = await BookLibraryModel.find({ _id: id });
        res.send(SingleBookData)

    } catch (err) {
        res.send({ Msg: "Something Went Wrong",err })
    }
})

BookLibraryRouter.post("/add", async(req,res) => {
    const {image, title, description} = req.body
    try {
        const BookLibraryData = new BookLibraryModel({image,title,description})
        await BookLibraryData.save()
        res.send({Msg:"Item Added Successfully" })
    } catch (error) {
        res.send({ Msg: "Something went wrong. Please try again later", error });
    }
})

BookLibraryRouter.patch("/update/:id", async(req,res) => {
    try {
        const { id } = req.params;
        await BookLibraryModel.findByIdAndUpdate({_id:id},req.body)
        res.send({Msg:`Item Updated Successfully with id: ${id}`})
    } catch (error) {
        res.send({ Msg: "Something went wrong. Please try again later", error });
    }
})
BookLibraryRouter.delete("/delete/:id", async(req,res) => {
    try {
        const { id } = req.params;
        await BookLibraryModel.findByIdAndDelete({_id:id})
        res.send({Msg:`Item Delete Successfully with id: ${id}`})
    } catch (error) {
        res.send({ msg: "Something went wrong. Please try again later", error });
    }
})


module.exports = {
    BookLibraryRouter
}