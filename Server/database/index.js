import mongoose from "mongoose";

//const MONGO_URI = process.env.MONGO_URI;

// database connection
export const mongoDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}