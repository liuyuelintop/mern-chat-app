import { Router } from "express";
import authRoutes from "./auth.routes.js";
import messageRoutes from "./message.routes.js";
import userRoutes from "./user.routes.js";

const appRouter = Router();

appRouter.use("/auth", authRoutes);
appRouter.use("/messages", messageRoutes);
appRouter.use("/users", userRoutes);

export default appRouter;
