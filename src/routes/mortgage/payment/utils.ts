import {
  DOWN_PAYMENT,
  HUNDRED_PERCENTAGE,
  INSURANCE_PERCENTAGE,
  MONTHS_PER_YEAR,
  PaymentSchedule,
  PAYMENTS_PER_YEAR,
} from "./constants";

export const getInsuranceAmount = (
  propertyPrice: number,
  downPayment: number
): number => {
  const downPaymentPercentage = downPayment / HUNDRED_PERCENTAGE;
  let insurancePercentage = INSURANCE_PERCENTAGE.BIG;

  if (downPaymentPercentage >= DOWN_PAYMENT.MEDIUM) {
    insurancePercentage = INSURANCE_PERCENTAGE.MEDIUM;
  }

  if (downPaymentPercentage >= DOWN_PAYMENT.BIG) {
    insurancePercentage = INSURANCE_PERCENTAGE.SMALL;
  }

  if (downPaymentPercentage >= DOWN_PAYMENT.HUGE) {
    insurancePercentage = INSURANCE_PERCENTAGE.NONE;
  }

  return propertyPrice * (1 - downPaymentPercentage) * insurancePercentage;
};

export const getMonthlyMortgagePayment = (
  propertyPrice: number,
  insuranceAmount: number,
  downPayment: number,
  annualInterestRate: number,
  amortizationPeriod: number
): number => {
  const n = MONTHS_PER_YEAR * amortizationPeriod;
  const i = annualInterestRate / HUNDRED_PERCENTAGE / MONTHS_PER_YEAR;
  const p =
    propertyPrice * (1 - downPayment / HUNDRED_PERCENTAGE) + insuranceAmount;

  const dividend = p * (i * Math.pow(1 + i, n));
  const divisor = Math.pow(1 + i, n) - 1;

  return dividend / divisor;
};

export const getMortgagePayment = (
  monthlyMortgagePayment: number,
  paymentSchedule: string
): number => {
  let result = monthlyMortgagePayment;

  switch (paymentSchedule) {
    case PaymentSchedule.monthly:
      result = monthlyMortgagePayment;
      break;
    case PaymentSchedule.biWeekly:
      result =
        (monthlyMortgagePayment * MONTHS_PER_YEAR) /
        PAYMENTS_PER_YEAR.BI_WEEKLY;
      break;
    case PaymentSchedule.acceleratedBiWeekly:
      result =
        (monthlyMortgagePayment * MONTHS_PER_YEAR) /
        PAYMENTS_PER_YEAR.ACCELERATED_BI_WEEKLY;
      break;
    default:
      break;
  }

  return result;
};
