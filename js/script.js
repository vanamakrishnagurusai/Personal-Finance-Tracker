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
    if(text.value.trim()==="" || amount.value=== ""){
       alert("please enter valid data");
       return;
    }
}

form.addEventListener("submit", addTransaction);

function updateUI() {
    list.innerHTML = "";
    let total = 0;

    transactions.forEach(t => {
        const li = document.createElement("li");
        li.innerHTML = ;
        list.appendChild(li);
        total += t.amount;
    });

    balance.innerText = ;
}

function saveTransactions() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function loadTransactions() {
    const data = localStorage.getItem("transactions");
    if (data) {
        transactions = JSON.parse(data);
        updateUI();
    }
}

function updateUI() {
    list.innerHTML = "";
    let total = 0;

    transactions.forEach(t => {
        const li = document.createElement("li");
        li.innerHTML = ;
        list.appendChild(li);
        total += t.amount;
    });

    balance.innerText = ;
    saveTransactions();
}

loadTransactions();

