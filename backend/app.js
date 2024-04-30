import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
const app = express();
config();

//middlewares
app.use(express.json());

app.use("/api", appRouter);

export default app;
