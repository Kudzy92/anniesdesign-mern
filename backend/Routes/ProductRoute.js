import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/Product.js';

const productRoute = express.Router();
//GET ALL PRODUCTS
productRoute.get("/",asyncHandler(
    async(req,res) =>{
        const products = await Product.find({});
        res.json(products);
    }
));
//GET SINGLE PRODUCT
productRoute.get("/:id",asyncHandler(
    async(req,res) =>{
        const id =req.params.id.toString();
        const product = await Product.findById(id);
        console.log("SERVER PRODUCT"+product);
        if(product){
            res.json(product);
        }else{
            res.status(404)
            throw new Error("Product not found");
        }
        
    }
));
export default productRoute;