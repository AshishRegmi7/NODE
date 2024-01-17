const CC = require("currency-converter-lt");

const currencyConverter = new CC({
  from: "USD",
  to: "NPR",
  amount: 1000,
  //   isDecimalComma: true,
});

currencyConverter.convert().then((response) => {
  console.log(response);
});
//converts the currency

currencyConverter.rates().then((response) => {
  console.log(`Rate of conversion is : ${response}`);
});
//displays the rate of exchange
