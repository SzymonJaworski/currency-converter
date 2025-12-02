let formElement = document.querySelector(".js-form")
let amountElement = document.querySelector(".js-amount")
let currencyElement = document.querySelector(".js-currency")
let scoreElement = document.querySelector(".js-score")

let rateEUR = 4.2274;
let rateUSD = 3.6376;
let rateGBP = 4.7854;
let rateCHF = 4.5918;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;


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

    scoreElement.innerText = `${amount.toFixed(2)} PLN = ${score.toFixed(2)} ${currency}`;
})