import express from 'express'
import asyncHandler from 'express-async-handler'
import TermsCondition from '../models/TermsCondition.js';

const productRoute = express.Router();
//GET ALL PRODUCTS
productRoute.get("/",asyncHandler(
    async(req,res) =>{
        const tcs = await TermsCondition.find({});
        res.json(tcs);
    }
));
//GET SINGLE PRODUCT
productRoute.get("/:id",asyncHandler(
    async(req,res) =>{
        const id =req.params.id.toString();
        const tc = await TermsCondition.findById(id);
        console.log("SERVER PRODUCT"+tc);
        if(product){
            res.json(tc);
        }else{
            res.status(404)
            throw new Error("Product not found");
        }
        
    }
));
export default productRoute;