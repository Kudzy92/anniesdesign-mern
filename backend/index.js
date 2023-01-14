/*const express =require('express');
const dotenv =require('dotenv');
const mongoose =require('mongoose');
const bodyParser = require("body-parser");
const cors=require("cors");
const ProductModel=require("./models/Product");
const connectMongoDb = require('./config/DbConnect');
*/
import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import products from './data/Products.js'
import importData from './DataImport.js';

//import ProductModel from './models/Product'
import connectMongoDb from './config/DbConnect.js';
import cors from 'cors'
import bodyParser from 'body-parser'
import ProductRoute from './Routes/ProductRoute.js';
import OrderRoute from './Routes/orderRoute.js';
import ReuphosteryRoute from './Routes/ReuphosteryRoute.js'
import TermsAndConditionRoute from './Routes/TermsAndConditionsRoute.js'
import { errorHandler, notFound, headers } from './Middleware/Errors.js';

dotenv.config();
connectMongoDb();
const app= express();

//IMPLEMENTING MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

connectMongoDb();
//LOAD PRODUCT FROM SERVER
/*app.get('/api/products',(req,res)=>{
    res.json(products);
});
//LOAD SINGLE PRODUCT FROM SERVER
app.get('/api/products/:id',(req,res)=>{
    const product=products.find((product)=> product._id.toString()===req.params.id);
    console.log("product"+product);
    res.json(product);
});
//LOAD PRODUCT FROM SERVER
app.get('/',(req,res)=>{
    res.send('API is running ....');
});*/

//API
//app.use("/api/import", importData);
app.use("/api/products", ProductRoute);
app.use("/api/terms-and-conditions", TermsAndConditionRoute);
//app.use("/api/product/:id", productRoute);

//POST API
app.use("/api/orders", OrderRoute);
app.use("/api/reuphostery", ReuphosteryRoute);

app.use(notFound);
app.use(errorHandler);
app.use(headers);
const PORT= process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("Sever running on port "+PORT);
})
//let server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

//const wss = new SocketServer({ server });