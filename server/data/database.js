import mongoose from "mongoose";

// export const connectDB = () => {
//   mongoose
//     .connect(process.env.MONGO_URL, {
//       dbName: "portfolio",
//     })
//     .then((c) => {
//       console.log(`DataBase Connected with ${c.connection.host}`);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URL);
  console.log(`MongoDB Connected with ${connection.host}`);
};
