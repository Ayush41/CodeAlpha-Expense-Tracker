// alert("javascript connected")
let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.querySelector('#add-btn');
const expensesTableBody = document.getElementById('expenses-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value; // Corrected variable name
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (date === '') {
        alert('Please select a date');
        return;
    }
    expenses.push({ category, amount, date });

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow(); 
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        const index = expenses.indexOf(expense); 
        const deletedExpense = expenses.splice(index, 1)[0]; 
        totalAmount -= deletedExpense.amount;
        totalAmountCell.textContent = totalAmount;
        expensesTableBody.removeChild(newRow);
    });
    categoryCell.textContent = category;
    amountCell.textContent = amount;
    dateCell.textContent = date;
    deleteCell.appendChild(deleteBtn);
});

// Iterate over expenses
for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow(); 
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        const index = expenses.indexOf(expense); // 
        const deletedExpense = expenses.splice(index, 1)[0]; 
        totalAmount -= deletedExpense.amount;
        totalAmountCell.textContent = totalAmount;
        expensesTableBody.removeChild(newRow);
    });
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
}
