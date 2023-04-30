import express from "express";
import { checkSchema } from "express-validator";
import controller from "./payment/controller";
import validations from "./payment/validations";

const router = express.Router();

router.get("/payment", checkSchema(validations, ["query"]), controller);

export default router;
