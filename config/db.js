import mongoose from "mongoose";
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    }
    catch (err) {
        console.error("Database connection error:", err);
    }
}
export default dbConnect;
