const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //   userNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected:  ${conn.connection.host}`);
  } catch (e) {
    console.log(`Error: ${e.message}`);
    process.exit();
  }
};

module.exports = connectDB;
