import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ritika123:030105@cluster0.va7ocw7.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}