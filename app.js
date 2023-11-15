require("dotenv").config();

const express=require("express");
const app=express();
const port=7000 || process.env.port;
const products_route=require("./routes/products");
const connectDB=require("./db/connect");

app.get("/",(req,res)=>{
    res.send("hello this server is live");
});

app.use("/api/products", products_route);
const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(port,()=>{
            console.log(`${port} yes i am connected`);
        });
    }catch(error){
        console.log(error);
    }
}
start();

