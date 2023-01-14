const notFound =(req,res, next) =>{
    const error= new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};
const errorHandler =(err,req,res, next) =>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    //const statusCode = res.statusCode;
    //(statusCode ==== 200) ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message:err.message,
        stack : process.env.NODE_ENV === "production" ? null : err.stack,
    })
};
const headers=(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    next();  // Add this line
}
export { notFound, errorHandler,headers };