const form = document.getElementById("transaction-form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const list = document.getElementById("list");
const balance = document.getElementById("balance");

let transactions = [];
function addTransaction(e) {
    e.preventDefault();

    const transaction = {
        text: text.value,
        amount: Number(amount.value)
    };

    transactions.push(transaction);
    updateUI();

    text.value = "";
    amount.value = "";
}

form.addEventListener("submit", addTransaction);

