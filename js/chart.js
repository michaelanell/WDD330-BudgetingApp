google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    let rent = Number(budgetForm.rent_amount.value);
   // let rent = 2;

/*
    var data = google.visualization.arrayToDataTable([
      ['Expense', 'Amount'],
      ['Rent/Mortgage', rent],
      ['Car Payment', carPayment],
      ['Car Insurance', carInsurance],
      ['School Payment', school],
      ['Phone Bill', phoneBill],
      ['Car Payment', carPayment],
      ['Utilities',  utilities],
      ['Donations', donations],
      ['Subscriptions', subscriptions]
    ]);*/

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Rent',     rent],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]);


    var options = {
      title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }