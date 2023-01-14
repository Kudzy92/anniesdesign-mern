import express from 'express'
//import User from '../models/User.js'
import Product from './models/Product.js'
import products from './data/Products.js'
import asyncHandler from 'express-async-handler'

const importData = express.Router();

/*importData.post("/user",async (req,res)=>{
    await User.remove({});
    const importUser= await User.insertMany(users);
    res.send({importUser});
});

importData.post("/user",

asyncHandler(async (req,res)=>{
    await User.remove({});
    const importUser= await User.insertMany(users);
    res.send({importUser});
})
);
*/


/*importData.post("/products", async (req,res)=>{
    await User.remove({});
    const importProducts= await Product.insertMany(products);
    res.send({importProducts});
});*/
importData.post("/products", 
asyncHandler(async (req,res)=>{
    await Product.remove({});
    const importProducts= await Product.insertMany(products);
    res.send({importProducts});
})
);
export default importData;