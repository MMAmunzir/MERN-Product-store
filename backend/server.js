import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouts from "./routs/product.routs.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/products", productRouts);

const PORT = process.env.PORT;

app.listen(5000, () => {
  connectDB();
  console.log("app is running on http://localhost:" + PORT);
});

//5KxzhVvxlY9Hqpqx
//munzirmr22
//mongodb+srv://munzirmr22:5KxzhVvxlY9Hqpqx@cluster0.3cgdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
