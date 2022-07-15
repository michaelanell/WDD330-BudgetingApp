//import {drawChart} from 'chart.js';
const budgetForm = document.forms['user-info'];
budgetForm.addEventListener('submit', getBudget);

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

    remaining = user.income - sum;
    alert(remaining);
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
        ['Subscriptions', user.subscriptions]
      ]);

    /*var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Rent',     rent],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]);*/


    var options = {
      title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }

