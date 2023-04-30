import app from "../../app";
import request from "supertest";
import { STATUS_CODES } from "../constants";

describe("tests for /mortgage", () => {
  describe("tests for /mortgage/payment endpoint", () => {
    describe("check query params validations", () => {
      it("should return bad request when any query param is missing", async () => {
        const res1 = await request(app)
          .get("/mortgage/payment")
          .query({
            propertyPrice: 400000,
            downPayment: 20,
            anualInterestRate: 5,
            amortizationPeriod: 25,
          })
          .send();
        expect(res1.statusCode).toEqual(STATUS_CODES.BAD_REQUEST);

        const res2 = await request(app)
          .get("/mortgage/payment")
          .query({
            propertyPrice: 400000,
            downPayment: 20,
            anualInterestRate: 5,
            paymentSchedule: "monthly",
          })
          .send();
        expect(res2.statusCode).toEqual(STATUS_CODES.BAD_REQUEST);

        // TODO: check the other query params
      });

      it("should return bad request when any query param has an incorrect type", async () => {
        const res1 = await request(app)
          .get("/mortgage/payment")
          .query({
            propertyPrice: 400000,
            downPayment: 20,
            anualInterestRate: 5,
            amortizationPeriod: 25,
            paymentSchedule: 22,
          })
          .send();
        expect(res1.statusCode).toEqual(STATUS_CODES.BAD_REQUEST);

        // TODO: check the other query params
      });

      // TODO: add other needed validations
    });

    describe("check results", () => {
      it("should return monthly payment", async () => {
        const expected = { mortgagePayment: "2053.08" };
        const res1 = await request(app)
          .get("/mortgage/payment")
          .query({
            propertyPrice: 400000,
            downPayment: 15,
            anualInterestRate: 5,
            amortizationPeriod: 25,
            paymentSchedule: "monthly",
          })
          .send();
        expect(res1.body).toEqual(expected);
      });

      // TODO: check all other necessary scenarios
    });
  });
});
