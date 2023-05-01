import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import { STATUS_CODES } from "../../constants";
import {
  getInsuranceAmount,
  getMonthlyMortgagePayment,
  getMortgagePayment,
} from "./utils";

export default (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(STATUS_CODES.BAD_REQUEST).json({
      success: false,
      errors: errors.array(),
    });
  }

  const {
    propertyPrice,
    downPayment,
    annualInterestRate,
    amortizationPeriod,
    paymentSchedule,
  } = matchedData(req);

  const insuranceAmount = getInsuranceAmount(propertyPrice, downPayment);
  const monthlyMortgagePayment = getMonthlyMortgagePayment(
    propertyPrice,
    insuranceAmount,
    downPayment,
    annualInterestRate,
    amortizationPeriod
  );
  const mortgagePayment = getMortgagePayment(
    monthlyMortgagePayment,
    paymentSchedule
  );

  res
    .status(STATUS_CODES.SUCCESS)
    .json({ mortgagePayment: Number(mortgagePayment).toFixed(2) });
};
