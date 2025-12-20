{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.2274;
        const rateUSD = 3.6376;
        const rateGBP = 4.7854;
        const rateCHF = 4.5918;

        switch (currency) {
            case "EUR":
                return amount / rateEUR

            case "USD":
                return amount / rateUSD

            case "GBP":
                return amount / rateGBP

            case "CHF":
                return amount / rateCHF
        }
    };

    const scoreText = (amount, score, currency) => {
        const scoreElement = document.querySelector(".js-score")
        scoreElement.innerText = `${amount.toFixed(2)} PLN = ${score.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount")
        const currencyElement = document.querySelector(".js-currency")

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const score = calculateResult(amount, currency);

        scoreText(amount, score, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form")

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}