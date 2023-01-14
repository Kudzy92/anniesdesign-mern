import mongoose from "mongoose";


const UserSchema =new mongoose.Schema(
    {
        name:{
            type:String,
            required: 'Please enter your  name',
            trim: true,
           
        },
        surname:{
            type:String,
            required: 'Please enter your tc surname',
            trim: true,
           
        },
        email:{
            type:String,
            required: 'Please enter your email',
            trim: true,
            unique: true,
        },
        department:{
            type: String,
            required: 'Please enter your department',
            trim: true,
        },
    },
    {timestamps: true}
);
export default mongoose.models.User || mongoose.model('User',UserSchema);