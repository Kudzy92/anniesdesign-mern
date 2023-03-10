import mongoose from 'mongoose'
const connectMongoDb= async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser:true,
        }); 
        console.log('Mongo DB connected !');
    } catch (error) {
        console.log(`ERROR : ${error.message}`);
        process.exit(1);
    }
   
};
export default connectMongoDb;

