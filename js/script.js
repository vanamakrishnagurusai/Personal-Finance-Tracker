const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let transactions = [];
let myChart;

function updateChart(inc, exp) {
    const ctx = document.getElementById('myChart').getContext('2d');
    if (myChart) myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Income', 'Expense'],
            datasets: [{
                data: [inc, exp],
                backgroundColor: ['#27ae60', '#e74c3c']
            }]
        },
        options: { plugins: { legend: { display: false } } }
    });
}

function updateValues() {
    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const inc = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const exp = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    balance.innerText = `$${total}`;
    money_plus.innerText = `+$${inc}`;
    money_minus.innerText = `-$${exp}`;
    updateChart(inc, exp);
}

function addTransaction(e) {
    e.preventDefault();
    const transaction = { id: Date.now(), text: text.value, amount: +amount.value };
    transactions.push(transaction);
    
    const item = document.createElement('li');
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = `${transaction.text} <span>${transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span>`;
    list.appendChild(item);
    
    updateValues();
    text.value = ''; amount.value = '';
}

form.addEventListener('submit', addTransaction);
