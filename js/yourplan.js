import {user} from './budget.js';
google.charts.load('current', {'packages':['corechart']});
window.addEventListener('load', displayPlan);

function displayPlan() {
    google.charts.setOnLoadCallback(drawChart);
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
        ['Remaining', user.remaining],
        ['Groceries', user.grocery],
        ['Miscellaneous', user.unexpectedExpenses]

      ]);


    var options = {
        'legend':'bottom',
        'title': 'Your current monthly expenses breakdown'
    };

    var chart = new google.visualization.PieChart(document.getElementById('expenses_breakdown'));

    chart.draw(data, options);
}