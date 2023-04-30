import { HUNDRED_PERCENTAGE, INSURANCE_PERCENTAGE } from "./constants";
import { getInsuranceAmount } from "./utils";

describe("tests for utils", () => {
  describe("tests for getInsuranceAmount function", () => {
    it("should return no amount when downpayment is 20% or more", () => {
      const propertyPrice = 400000;
      expect(getInsuranceAmount(propertyPrice, 20)).toEqual(0);
      expect(getInsuranceAmount(propertyPrice, 25)).toEqual(0);
    });

    it(`should return an amount equal to ${Number(
      INSURANCE_PERCENTAGE.SMALL * HUNDRED_PERCENTAGE
    ).toFixed(2)} when downpayment is 15% or more and less to 20%`, () => {
      const propertyPrice = 400000;
      expect(getInsuranceAmount(propertyPrice, 15)).toEqual(
        propertyPrice * INSURANCE_PERCENTAGE.SMALL
      );
      expect(getInsuranceAmount(propertyPrice, 18)).toEqual(
        propertyPrice * INSURANCE_PERCENTAGE.SMALL
      );
    });

    // TODO: Cover missing scenarios
  });

  // RODO: Include describe blocks for getMonthlyMortgagePayment and getMortgagePayment
});
