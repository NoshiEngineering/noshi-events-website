import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("Connected", () => {
      console.log("Mongo db connected successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "MongoDb connection error, please make sure MongoDb is running" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
};
