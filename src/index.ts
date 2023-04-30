import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mortgageRoutes from "./routes/mortgage";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use("/mortgage", mortgageRoutes);

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
