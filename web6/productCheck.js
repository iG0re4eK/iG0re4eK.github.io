function updatePrice() {
  // Находим select по имени в DOM.
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }

  // Скрываем или показываем радиокнопки.
  let radioDiv = document.getElementById("radios");

  // Скрываем или показываем чекбоксы.
  let checkDiv = document.getElementById("checkboxes");

  if (select.value == "1") {
    radioDiv.style.display = "none";
    checkDiv.style.display = "none";
  } else if (select.value == "2") {
    radioDiv.style.display = "none";
    checkDiv.style.display = "block";
  } else if (select.value == "3") {
    radioDiv.style.display = "block";
    checkDiv.style.display = "none";
  }

  // Смотрим какая товарная опция выбрана.
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }
  });

  // Смотрим какие товарные свойства выбраны.
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });
  document.getElementById("prodPrice").innerHTML =
    "Введите корректное количество товара.";
  let amount = document.getElementById("amount").value;
  if (amount != null) {
    let isDecimal = /^-?\d+\.\d+$/.test(amount);
    let isZero = amount.trim()[0] == "0" ? 1 : 0;
    let isNegative = parseFloat(amount) < 0 ? 1 : 0;
    let isString = isNaN(amount) ? 1 : 0;
    let isSpace = amount.trim() == "" ? 1 : 0;

    if (isNegative || isString || isZero || isDecimal || isSpace) {
    } else {
      let parsedAmount = parseFloat(amount);
      price *= parsedAmount;
      let prodPrice = document.getElementById("prodPrice");
      prodPrice.innerHTML = "Итого: " + price + " рублей";
    }
  }
}

function getPrices() {
  return {
    prodTypes: [59, 454, 154],
    prodOptions: {
      option2: 10,
      option3: 20,
    },
    prodProperties: {
      prop1: 40,
      prop2: 45,
    },
  };
}

window.addEventListener("DOMContentLoaded", function (event) {
  // Скрываем радиокнопки.
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";
  let checkboxDiv = this.document.getElementById("checkboxes");
  checkboxDiv.style.display = "none";

  // Находим select по имени в DOM.
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let i = this.document.getElementByName;

  // Назначаем обработчик на изменение select.
  select.addEventListener("change", function (event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });

  // Назначаем обработчик радиокнопок.
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    radio.addEventListener("change", function (event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });

  // Назначаем обработчик радиокнопок.
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function (event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });

  let input = document.getElementById("amount");
  input.addEventListener("input", () => {
    updatePrice();
  });
  updatePrice();
});
