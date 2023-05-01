import { PaymentSchedule } from "./constants";

const maxPropertyPrice = 499999.99;
const minDownPayment = 5;
const maxDownPayment = 100;
const minAnnualInterestRate = 0;
const maxAnnualInterestRate = 100;
const validAmortizationPeriods = [5, 10, 15, 20, 25, 30];

export default {
  propertyPrice: {
    notEmpty: {
      errorMessage: "propertyPrice cannot be empty",
    },
    isFloat: {
      options: { max: maxPropertyPrice },
      errorMessage: `propertyPrice must be a number less than ${maxPropertyPrice}`,
    },
    toFloat: true,
  },
  downPayment: {
    notEmpty: {
      errorMessage: "downPayment cannot be empty",
    },
    isFloat: {
      options: { min: minDownPayment, max: maxDownPayment },
      errorMessage: `downPayment must be a number between ${minDownPayment} and ${maxDownPayment}`,
    },
    toFloat: true,
  },
  annualInterestRate: {
    notEmpty: {
      errorMessage: "annualInterestRate cannot be empty",
    },
    isFloat: {
      options: { min: minAnnualInterestRate, max: maxAnnualInterestRate },
      errorMessage: `annualInterestRate must be a number between ${minAnnualInterestRate} and ${maxAnnualInterestRate}`,
    },
    toFloat: true,
  },
  amortizationPeriod: {
    notEmpty: {
      errorMessage: "amortizationPeriod cannot be empty",
    },
    isInt: {
      errorMessage: "amortizationPeriod must be an integer",
    },
    isIn: {
      options: [validAmortizationPeriods],
      errorMessage: `amortizationPeriod must be one of ${validAmortizationPeriods.join(
        ","
      )}`,
    },
    toInt: true,
  },
  paymentSchedule: {
    notEmpty: {
      errorMessage: "paymentSchedule cannot be empty",
    },
    isIn: {
      options: [Object.values(PaymentSchedule).filter((v) => isNaN(Number(v)))],
      errorMessage: `amortizationPeriod must be one of ${Object.values(
        PaymentSchedule
      )
        .filter((v) => isNaN(Number(v)))
        .join(",")}`,
    },
  },
};
