const startForm = document.forms['user-info'];
startForm.addEventListener('submit',redirect);

function redirect(event) {
    event.preventDefault();
    let baseURL = window.location.protocol + "//" + window.location.host + "/";
    window.location.href = baseURL + "WDD330-BudgetingApp/budget.html";
    //alert('got here');
    /*
    var startOption = document.getElementsByName("start_option");
    let result = "";
    for (let i = 0; i < startOption.length; i++) {
        if (startOption[i].checked) {
            result = startOption[i].value;
        }
    }

    if (result == "Create a Monthly Budget") {
        window.location.href = "//budget.html";


    } else if (result == "Create a Savings Goal") {
        window.location.href = "http://www.w3schools.com";


    } else {
        window.location.href = "http://www.w3schools.com";
    }*/
    }