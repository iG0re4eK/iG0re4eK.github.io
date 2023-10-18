function calculatePrice(event) {
  event.preventDefault();
  let selectedProduct = document.getElementById("selection").value;
  let amount = document.getElementById("amount").value;

  let isDecimal = /^\d+\.\d+$/.test(amount);
  let isZero = amount.trim()[0] == "0" ? 1 : 0;
  let isNegative = parseFloat(amount) < 0 ? 1 : 0;
  let isString = isNaN(amount) ? 1 : 0;
  let isSpace = amount.trim() == "" ? 1 : 0;

  if (isNegative || isString || isZero || isDecimal || isSpace) {
    document.getElementById("result").textContent =
      "Введите корректное количество товара.";
  } else {
    let price = getProductPrice(selectedProduct);
    let parsedAmount = parseFloat(amount);
    let totalCost = price * parsedAmount;
    document.getElementById("result").textContent =
      "ИТОГО: " + totalCost.toFixed(2) + " руб";
  }
}

window.addEventListener("DOMContentLoaded", function (event) {
  let payButton = document.getElementById("pay-button");
  payButton.addEventListener("click", calculatePrice);
});

function getProductPrice(productName) {
  switch (productName) {
    case "Мясо1":
      return 159.0;
    case "Мясо2":
      return 149.0;
    case "Мясо3":
      return 239.0;
    case "Мясо4":
      return 249.0;
    case "Мясо5":
      return 169.0;
    case "Мясо6":
      return 145.0;
    case "Мясо7":
      return 315.0;

    default:
      return 0.0;
  }
}
