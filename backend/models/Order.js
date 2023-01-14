import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    orderid: {
      type: String,
      required: true,
      maxlength: 60,
      unique:true,
    },
    fullname: {
      type: String,
      required: true,
      maxlength: 60,
    },
     phone: {
      type: String,
      required: true,
      maxlength: 60,
    },
    email: {
        type: String,
        maxlength: 200,
      },
       address: {
      type: String,
      required: true,
      maxlength: 200,
    },
     msg: {
      type: String,
      required: true,
    },
    paymethod: {
        type: String,
        required: true,
        maxlength: 200,
      },
      deliverycharge: {
        type: Number,
        required: true,
        maxlength: 60,
      },
    transporter: {
      type: String,
      maxlength: 200,
    },
    productdetails: {
      type:[
        {
          pid:{type:String,required: true},
           size:{type:String},
           material:{type:String},
           price:{type:Number},
           qty:{type:Number},
        }
       ]
    },
    price: {
      type: Number,
      required:true,
    },
    quantity: {
      type: Number,
      required:true
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);