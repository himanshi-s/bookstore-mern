import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router()

//add a new book
router.post('/create', async (req,res)=>{
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send("send all required fields.");
        }
        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear
        }
        const book = await Book.create(newBook)
        return res.status(201).send(book);
    } catch (error) {
        return res.status(400).send({msg: `${error}`})
    }
})

//get all books
router.get('/',async (req,res)=>{
    try {
        const allBooks = await Book.find({});
        const books = {
            count: allBooks.length,
            data :allBooks
        }
        return res.status(201).send(books)
        
    } catch (error) {
        return res.status(400).send({msg: `${error.message}`})
    }
})

//search a book by it's Id
router.get('/:id',async (req,res)=>{
    try {
        const book = await Book.findById(req.params.id);
        return res.status(201).send(book)
        
    } catch (error) {
        return res.status(400).send({msg: `${error.message}`})
    }
})
router.get("/book/:id", async (req,res)=>{
    try {
        const book = await Book.findById('65f08e1e8ca4197754dd212e')
        console.log(book);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error);
    }
})

// findByIdAndUpdate a book 
router.put('/:id',async (req,res)=>{
    try {
        const book = await Book.findByIdAndUpdate(req.params.id,req.body);
        console.log(book);
        if(book){
            return res.status(201).send(`book updated successfully`)
        }
        
    } catch (error) {
        return res.status(400).send({msg: `${error.message}`})
    }
})

export default router;