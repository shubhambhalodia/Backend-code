const connectDB=require("./db/connect");
const Product=require("./models/products");
const ProductJson=require("./products.json");
require("dotenv").config();

const start=async()=>{
    try{
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success");
    }catch(e){
        console.log(e);
    }
}

start();