const { check } = require("express-validator");
const { checkValidationResults } = require("./validation");

const validator = [
    check("code", "Code is required").not().isEmpty(),
    check("name", "Name product is required").not().isEmpty(),
    check("price", "Price is required").not().isEmpty(),
    check("stock", "Stock is required").not().isEmpty(),
    checkValidationResults
];

module.exports = { validator }