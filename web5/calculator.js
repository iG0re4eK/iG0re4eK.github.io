function calculatePrice() {
  let selectedProduct = document.getElementById("selection").value;
  let amount = document.getElementById("amount").value;
  let isNumber = /^[0-9]*(\.[0-9]+)?$/.test(amount);
  let price = getProductPrice(selectedProduct);

  if (isNumber) {
    let parsedAmount = parseFloat(amount);
    if (Number.isInteger(parsedAmount)) {
      let totalCost = price * parsedAmount;
      document.getElementById("result").textContent =
        "ИТОГО: " + totalCost.toFixed(2) + " руб";
    }
  } else {
    document.getElementById("result").textContent =
      "Введите корректное количество товара.";
  }
}

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
