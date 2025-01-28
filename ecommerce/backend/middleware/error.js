const ErrorHandler = require("./utils/ErrorHandler");

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = errr.message || "Internal server Error";
}

// wrong mongodb id error 
if (err.name == "CastError"){
    const message = `Resource not found with this id .. Invalid ${err.path} `;
    err = new ErrorHandler(message , 400);
}

// duplicate key error 
if (err.code === 11000) {
    const message =`Duplicate key ${Object.keys(err.keyValue)}
    Entered`;
}

// wrong jwt error
if(err.name === "jsonWebTokenError"){
    const message = `Your url is invalid please try again letter`;
    err= new ErrorHandler(message , 400);
}

// just expired 
if(err.name === "TokenExpiredError"){
    const message = `Your Url is expired please try again later`;
    err = new ErrorHandler(message,400);
}

res.status(err.statusCode).json({
    success: false , 
    message: err.message,
});