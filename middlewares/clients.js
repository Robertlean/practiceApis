const { check } = require("express-validator");
const { checkValidationResults } = require("./validation");

const validator = [
  check("firstName", "First name is required").not().isEmpty(),
  check("lastName", "Last Name is required").not().isEmpty(),
  check("address", "Address is required").not().isEmpty(),
  check("city", "City is required").not().isEmpty(),
  checkValidationResults,
];

module.exports = { validator };