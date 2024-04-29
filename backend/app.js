import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
const app = express();
config();

//middlewares
app.use(express.json());

app.use("/api/auth", appRouter);

export default app;
