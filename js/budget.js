//import {drawChart} from 'chart.js';
const budgetForm = document.forms['user-info'];
budgetForm.addEventListener('submit', getBudget);
budgetForm.other_expenses_yes.addEventListener('click', displayOtherExpense);
budgetForm.other_expenses_no.addEventListener('click', hideOtherExpense);

function displayOtherExpense() {
    document.getElementById("other_expenses_amount").style.display = "block";
}

function hideOtherExpense() {
    document.getElementById("other_expenses_amount").style.display = "none";
}

function getBudget(event) {
    event.preventDefault();
    collectValues();
}

// Create a user object that hold's users financial information
const user = {
    income : 0,
    numPeople: 0,
    rent: 0,
    utilities: 0,
    carPayment: 0,
    school: 0,
    carInsurance: 0,
    donations: 0,
    subscriptions: 0,
    phoneBill: 0,
    other: 0,
    remaining: 0,

}

function collectValues() {
    user.income = Number(budgetForm.net_income.value);
    user.numPeople = Number(budgetForm.num_people.value);
    user.rent = Number(budgetForm.rent_amount.value);
    user.utilities = Number(budgetForm.utilities.value);
    user.carPayment = Number(budgetForm.car_payment.value);
    user.school = Number(budgetForm.school_payment.value);
    user.carInsurance = Number(budgetForm.car_insurance.value);
    user.donations = Number(budgetForm.donations.value);
    user.subscriptions = Number(budgetForm.subscriptions.value);
    user.phoneBill = Number(budgetForm.subscriptions.value);
    calculateRemaining();
}

function calculateRemaining(income, numPeople, rent, utilities, carPayment, school, carInsurance, donations, subscriptions, phoneBill) {
let sum = 0;
    sum += user.numPeople;
    sum += user.rent;
    sum += user.utilities;
    sum += user.carPayment;
    sum += user.school;
    sum += user.carInsurance;
    sum += user.donations;
    sum += user.subscriptions;
    sum += user.phoneBill;

    user.remaining = user.income - sum;
    alert(user.remaining);
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
}

function displayResults() {
    
}

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Expense', 'Amount'],
        ['Rent/Mortgage', user.rent],
        ['Car Payment', user.carPayment],
        ['Car Insurance', user.carInsurance],
        ['School Payment', user.school],
        ['Phone Bill', user.phoneBill],
        ['Car Payment', user.carPayment],
        ['Utilities',  user.utilities],
        ['Donations', user.donations],
        ['Subscriptions', user.subscriptions],
        ['Other',  user.other],
        ['Remaining', user.remaining]

      ]);


    var options = {
      title: 'Monthly Budget'
    };

    var chart = new google.visualization.PieChart(document.getElementById('main-content-holder'));

    chart.draw(data, options);
  }

