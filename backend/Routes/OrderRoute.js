import express from 'express'
import asyncHandler from 'express-async-handler'
import Order from '../models/Order.js';

const orderRoute = express.Router();
//GET ALL PRODUCTS
orderRoute.get("/",asyncHandler(
    async(req,res) =>{
        const orders = await Order.find({});
        res.json(orders);
    }
));
//GET SINGLE PRODUCT
orderRoute.get("/:id",asyncHandler(
    async(req,res) =>{
        const id =req.params.id.toString();
        const order = await Order.findById(id);
        console.log("SERVER PRODUCT"+order);
        if(order){
            res.json(order);
        }else{
            res.status(404)
            throw new Error("Product not found");
        }
        
    }
));
//INSERT ORDER
orderRoute.post("/save",asyncHandler(
    async(req,res) =>{
        const newOrder= new Order({
            orderid:req.body.orderid,
            fullname:req.body.fullname,
            phone:req.body.phone,
            email:req.body.email, 
            address:req.body.address,
            msg:req.body.msg,
            paymethod:req.body.paymethod,
            deliverycharge:req.body.deliverycharge,
          transporter:req.body.transporter,
          productdetails:req.body.productdetails,
          price:req.body.price,
          quantity:req.body.quantity,
        });
      console.log("Order"+req.body.orderid+"Full name"+req.body.fullname+"Phone"+req.body.phone+"Email"+req.body.email+"MSG"+req.body.msg+"paymethod"+req.body.paymethod+"req.body.productdetails"+req.body.productdetails);
        try {
            const savedOrder = await newOrder.save();
            console.log("Saved Order"+savedOrder);
            res.status(201).json(savedOrder);
        } catch (error) {
            console.log("Order saving ERROR"+error);
            res.status(500).json(error);
        }
    }
));
export default orderRoute;