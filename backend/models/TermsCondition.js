import mongoose from "mongoose";


const TermsConditionSchema =new mongoose.Schema(
    {
        tctype:{
            type:String,
            required: 'Please enter your tc type',
            trim: true,
           
        },
        title:{
            type:String,
            required: 'Please enter your tc title',
            trim: true,
        },
        description:{
            type: String,
            required: 'Please enter your tc description',
            trim: true,
        },
    },
    {timestamps: true}
);
export default mongoose.models.TermsCondition || mongoose.model('TermsCondition',TermsConditionSchema);