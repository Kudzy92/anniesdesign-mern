import mongoose from 'mongoose'
//const mongoose=require("mongoose");
/*const sizeSchema=mongoose.Schema({

});*/

const ProductSchema =new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
            maxLength: 100,
        },
        category:{
            type:String,
            required: true,
        },
        homestatus:{
            type:String,
            default: '',
        },
        rating:{
            type:Number,
            required: true,
            maxLength: 1,
            default:0,
        },
        nowprice:{
            type:[Number],
            required: true,
            default:[0],
        },
        wasprice:{
            type:[Number],
            required: true,
            default:[0],
        },
        viewers:{
            type:Number,
            required: true,
            maxLength: 100,
            default:0,
        },
        description:{
            type:String,
            required: true,
            maxLength: 500,
        },
        count:{
            type:Number,
            required: true,
            maxLength: 100,
            default:0,
        },
        sizeOptions:{
            type:[
             {
                name:{type:String,required: true},
                price:{type:Number,required:true}
             }
            ]
        },
        fabricOptions:{
            type:[
             {
                name:{type:String,required: true},
                img:{type:String,required: true},
                price:{type:Number,required:true}
             }
            ]
        },
        points:{
            type:[
             {
                title:{type:String,required: true},
                description:{type:String,required: true},
             }
            ]
        },
       
        img:{
            type: [String],
            required:true,
        },
    },
    {timestamps: true}
);
export default mongoose.models.Product || mongoose.model('Product',ProductSchema);
//const products= mongoose.models.Product || mongoose.model("Product",ProductSchema);
//module.exports=products