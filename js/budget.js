//import {drawChart} from 'chart.js';
google.charts.load('current', {'packages':['corechart']});
const budgetForm = document.forms['user-info'];
budgetForm.addEventListener('submit', getBudget);
budgetForm.other_expenses_yes.addEventListener('click', displayOtherExpense);
budgetForm.other_expenses_no.addEventListener('click', hideOtherExpense);

const customInfo = document.forms['customize_info'];
customInfo.addEventListener('submit', customizeValues);


function displayOtherExpense() {
    document.getElementById("other_expenses_amount").style.display = "block";
}

function hideOtherExpense() {
    document.getElementById("other_expenses_amount").style.display = "none";
}

function getBudget(event) {
    event.preventDefault();
    collectValues();
    displayOptions();
    google.charts.setOnLoadCallback(drawChart);
    google.charts.setOnLoadCallback(drawOptionOne);
    google.charts.setOnLoadCallback(drawOptionTwo);
    google.charts.setOnLoadCallback(drawOptionThree);
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
    grocery: 0,
    unexpectedExpenses: 0,
    savings: 0,
    misc: 0

}

////////////////////////////////////// Compute values //////////////////////////////////////
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
    calculateGrocery();
    calculateUnexpected();
    calculateSavings();
    calculateMisc();
}

function calculateRemaining() {
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
}

function calculateGrocery() {
    if (user.remaining >= (user.numPeople * 200)) {
        user.grocery = user.numPeople * 200;
        alert(user.grocery);
    } else {
        user.grocery = user.remaining;
    }
    user.remaining -= user.grocery;
    alert(user.remaining);
}

function calculateUnexpected() {
    if (user.remaining >= 200) {
        user.unexpectedExpenses = 200;
    } else {
        user.unexpectedExpenses = user.remaining;
    }
    
    user.remaining -= user.unexpectedExpenses;
}

function calculateSavings() {
    if (user.remaining > 0){
        if (user.remaining >= 1000) {
            user.savings = user.remaining * .75;
        } else if (user.remaing >= 500) {
            user.savings = user.remaining * .6;
        } else if (user.remaining >= 250) {
            user.savings = 200;
        } else {
            user.savings = user.remaining;
        }
    }
    user.remaining -= user.savings;
}

function calculateMisc() {
    if (user.remaining > 0) {
        user.misc = user.remaining;
    } 
    user.remaining = 0;
}

function customizeValues(event) {
    event.preventDefault();
    groceryAmount = Number(customInfo.custom_groceries.value);
    savingsAmount = Number(customInfo.custom_savings.value);
    spendingAmount = Number(customInfo.custom_misc.value);

    alert('Here!');

    if (groceryAmount > 0) {
        user.groceries = groceryAmount;
    }

    if (groceryAmount > 0) {
        user.savings = savingsAmount;
    }

    if (groceryAmount > 0) {
        user.misc = spendingAmount;
    }

    google.charts.setOnLoadCallback(drawCustom);
    document.getElementById("select_custom").style.display = "block";
}

////////////////////////////////////// Display budget options //////////////////////////////////////
function displayOptions() {
    document.getElementById("main-content-holder").style.height = "500px";
    document.getElementById("three_options_container").style.display = "block";
    document.getElementById("customize_plan").style.display = "block";

}


////////////////////////////////////// Chart drawing functions //////////////////////////////////////
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
        ['Remaining', user.remaining],
        ['Groceries', user.grocery],
        ['Miscellaneous', user.unexpectedExpenses]

      ]);


    var options = {
      title: 'Your current monthly expenses breakdown'
    };

    var chart = new google.visualization.PieChart(document.getElementById('main-content-holder'));

    chart.draw(data, options);
  }

function drawOptionOne() {

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
        ['Groceries', user.grocery],
        ['Unexpected Expenses', user.unexpectedExpenses],
        ['Entertainment', user.misc]

      ]);

      var options = {
        'legend':'bottom',
        'title': 'Recommended Option One'
      };

      var chart = new google.visualization.PieChart(document.getElementById('option_one'));

      chart.draw(data, options);
}

function drawOptionTwo() {

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
        ['Other Fixed',  user.other],
        ['Groceries', user.grocery],
        ['Unexpected Expenses', user.unexpectedExpenses],
        ['Entertainment', user.misc]

      ]);

      var options = {
          'legend':'bottom',
        title: 'Option Two'
      };

      var chart = new google.visualization.PieChart(document.getElementById('option_two'));

      chart.draw(data, options);
}

function drawOptionThree() {

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
        ['Groceries', user.grocery],
        ['Unexpected Expenses', user.unexpectedExpenses],
        ['Entertainment', user.misc]

      ]);

      var options = {
        'legend':'bottom',
        title: 'Option Three'
      };

      var chart = new google.visualization.PieChart(document.getElementById('option_three'));

      chart.draw(data, options);
}

function drawCustom() {
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
        ['Groceries', user.grocery],
        ['Unexpected Expenses', user.unexpectedExpenses],
        ['Entertainment', user.misc]

      ]);

      var options = {
        'legend':'bottom',
        title: 'Your Option'
      };

      var chart = new google.visualization.PieChart(document.getElementById('display_custom'));

      chart.draw(data, options);

}
