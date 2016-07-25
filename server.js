var phoneNumberFixer = require('phone-number-fixer');

module.exports.check = function (number, countryCode, callback) {
  callback(null, phoneNumberFixer.check(number, countryCode));
};

module.exports.suggest = function (name, callback) {
  callback(null, phoneNumberFixer.suggestion(number));
};
