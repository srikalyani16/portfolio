const mongoose=require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;



