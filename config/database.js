const mongoose = require("mongoose");

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if(connected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch(err) {
    console.log(err);
  }
}

export default connectDB;
