let formElement = document.querySelector(".js-form")
let amountElement = document.querySelector(".js-amount")
let currencyElement = document.querySelector(".js-currency")
let scoreElement = document.querySelector(".js-score")

let rateEUR = 4.4642;
let rateUSD = 4.2267;
let rateGBP = 5.1266;
let rateCHF = 4.6935;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let score;

    switch (currency) {
        case "EUR":
            score = amount / rateEUR
            break;

        case "USD":
            score = amount / rateUSD
            break;

        case "GBP":
            score = amount / rateGBP
            break;

        case "CHF":
            score = amount / rateCHF
            break;
    }

    scoreElement.innerHTML = `${amount.toFixed(2)} PLN = ${score.toFixed(2)} ${currency}`;
})