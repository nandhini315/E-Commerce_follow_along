const app = require("./app");
const connectDatabase = require("./db/database");

process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server for handling uncaught exception `);
});

// config
if (process.env.NODE_ENV !=="PRODUCTION"){
    require("dotenv").config({
        path:"./config/.env",
    });
};

connectDatabase();
// create server 
const server = app.listen(process.env.PORT,()=>{
    console.log(
        `server is running on http://localhost:${process.env.PORT}`
    );
});
process.on("unhandledRejection",(err)=>{
    console.error(`unhandled Rejection: ${err.message}`);
    console.log("Shutting down the server due to unhandled prommise rejection.");

    server.close(()=>{
        process.exit(1);
    });
});
  
    
