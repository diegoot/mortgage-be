export enum PaymentSchedule {
  acceleratedBiWeekly = "acceleratedBiWeekly",
  biWeekly = "biWeekly",
  monthly = "monthly",
}

export const MONTHS_PER_YEAR = 12;

export const HUNDRED_PERCENTAGE = 100;

export const DOWN_PAYMENT = {
  SMALL: 0.05,
  MEDIUM: 0.1,
  BIG: 0.15,
  HUGE: 0.2,
};

export const INSURANCE_PERCENTAGE = {
  NONE: 0,
  SMALL: 0.028,
  MEDIUM: 0.031,
  BIG: 0.04,
};

export const PAYMENTS_PER_YEAR = {
  MONTHLY: 12,
  BI_WEEKLY: 26,
  ACCELERATED_BI_WEEKLY: 24,
};
