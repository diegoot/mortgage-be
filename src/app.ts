import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mortgageRoutes from "./routes/mortgage";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use("/mortgage", mortgageRoutes);

export default app;
