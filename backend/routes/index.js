import { Router } from "express";
import authRoutes from "./auth.routes.js";

const appRouter = Router();

appRouter.use("/auth", authRoutes);

export default appRouter;
