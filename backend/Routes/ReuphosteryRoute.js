import express from 'express'
import asyncHandler from 'express-async-handler'
import Reuphostery from '../models/Reuphostery.js';

const reuphosteryRoute = express.Router();
//GET ALL PRODUCTS
reuphosteryRoute.get("/",asyncHandler(
    async(req,res) =>{
        const reuphosterys = await Reuphostery.find({});
        res.json(reuphosterys);
    }
));
//GET SINGLE PRODUCT
reuphosteryRoute.get("/:id",asyncHandler(
    async(req,res) =>{
        const id =req.params.id.toString();
        const reuphostery = await Reuphostery.findById(id);
        console.log("SERVER PRODUCT"+reuphostery);
        if(reuphostery){
            res.json(reuphostery);
            
        }else{
            res.status(404)
            throw new Error("Reuphostery not found");
        }
        
    }
));
//INSERT ORDER
reuphosteryRoute.post("/save",asyncHandler(
    async(req,res) =>{
        const newReuphostery= new Reuphostery({
            orderid:req.body.orderid,
            fullname:req.body.fullname,
            phone:req.body.phone,
            email:req.body.email, 
            address:req.body.address,
            message:req.body.message,
            images:req.body.images,
            reply_amount:req.body.reply_amount,
          reply_msg:req.body.reply_msg,
        });
      console.log("Order"+req.body.orderid+"Full name"+req.body.fullname+"Phone"+req.body.phone+"Email"+req.body.email+"MSG"+req.body.message+"address"+req.body.address+"req.body.images"+req.body.images);
        try {
            const savedReuphostery = await newReuphostery.save();
            //console.log("Saved Order"+savedReuphostery+"ORder"+ req.body.images.length);
            res.status(201).json(savedReuphostery);
            //update 
            /*await Reuphostery.findByIdAndUpdate({
                orderid :req.body.orderid,
            },
            {
                $push:{
                    images : req.body.images,
                }
            })*/
        } catch (error) {
            console.log("Order saving ERROR"+error);
            res.status(500).json(error);
        }
    }
));
export default reuphosteryRoute;