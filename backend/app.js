import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
const app = express();
config();

//middlewares
app.use(express.json());
app.use(cookieParser());

app.use("/api", appRouter);

export default app;
