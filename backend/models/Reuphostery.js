import mongoose from 'mongoose'


const ReuphosterySchema =new mongoose.Schema(
    {
        orderid:{
            type:String,
            required: true,
            maxLength: 100,
            unique:true,
        },
        fullname:{
            type:String,
            required: true,
        },
        phone:{
            type:String,
            required: true,
        },
        email:{
            type:String,
        },
        address:{
            type:String,
            required:true,
        },
        message:{
            type:String,
        },
        images:{
            type:Array,
        },
        reply_amount:{
            type:Number,
        },
        reply_msg:{
            type:String,
        },
        
    },
    {timestamps: true}
);
export default mongoose.models.Reuphostery || mongoose.model('Reuphostery',ReuphosterySchema);
