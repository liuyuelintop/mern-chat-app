import { Router } from "express";
import authRoutes from "./auth.routes.js";
import messageRoutes from "./message.routes.js";

const appRouter = Router();

appRouter.use("/auth", authRoutes);
appRouter.use("/messages", messageRoutes);

export default appRouter;
