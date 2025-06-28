import express from "express";
import dotenv from "dotenv";
import { ConnectionTOdb } from "./config/db.js";
import Payment from "./routes/payment.js";

ConnectionTOdb();
const app = express();
dotenv.config();





app.get("/", (req, res) => {
  res.json("Payment deploy");
});

app.use("/api/payment", Payment);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is runnign   http://localhost:${port}`);
});
