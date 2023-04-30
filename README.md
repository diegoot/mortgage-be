# About the project

This project defines an API that calculates the canadian mortgage payment. It was implemented with express and typescript. It also uses:

- express-validator: to validate endpoint query parameters
- cors: to enable CORS
- dotenv: to setup the environment
- jest: as a test engine
- supertest: as an utility package to test endpoints

## How to work locally

- git clone https://github.com/diegoot/mortgage-be.git
- cd mortgage-be
- echo "PORT=9000" > .env
- npm install
- npm run dev

If you want to run tests then npm `run test`

## Assumptions

- This version of the API only accepts amounts under 500.000
- CMHC insurance will always be paid gradually through the mortgage payments (because [this page](https://wowa.ca/calculators/cmhc-insurance) says we can choose how to pay for it)
- Premium Percentage Table used to calculare mortgage insurance
  | Down Payment (% of Purchase Price) | 5 - 9.99 | 10 - 14.99 | 15 - 19.99 | 20 or higher |
  | -------------------------------------|--------- | ----------- |------------|--------------|
  | CMHC Insurance (% of Mortgage Amount)| 4 | 3.1 | 2.8 | 0 |
- Minimum down payment is 5%
- The API only returns mortagage payment, not closing costs so we are not taking into account land transfer tax or provincial sales tax

## Possible improvements

- Improve scope (e.g. accepts properties values > 500k)
- Add missing validation to express-validator (if amortizationPeriod > 25 then downPayment must be at least 20%)
- Improve tech stack by adding eslint and husky
- Add more unit tests
- Add swagger documentation
