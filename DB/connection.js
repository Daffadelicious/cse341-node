// const { MongoClient } = require('mongodb')

// async function connectDB() {
//     const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tz73yso.mongodb.net/?retryWrites=true&w=majority`;
//     const client = new MongoClient(URI);
//     try {
//         await client.connect();
//     } catch (e){
//         console.error(e);
//     } finally {
//         await client.close();
//     }
    
// }



const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tz73yso.mongodb.net/?retryWrites=true&w=majority`;
const connectDB = async()=>{
    await mongoose.connect(URI, {useUnifiedTopology: true,useNewUrlParser:true});
    console.log("Database has been connected.")
}

module.exports = connectDB;

