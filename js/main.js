const startForm = document.forms['user-info'];
startForm.addEventListener('submit',redirect);

function redirect(event) {
    event.preventDefault();
    let baseURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
    
    var startOption = document.getElementsByName("start_option");
    let result = "";
    for (let i = 0; i < startOption.length; i++) {
        if (startOption[i].checked) {
            result = startOption[i].value;
            console.log(startOption[i].value);
        }
    }

    if (result == "Create a Monthly Budget") {
        window.location.href = baseURL + "budget.html";


    } else if (result == "View Your Budget") {
        window.location.href = baseURL + "yourplan.html";


    } else {
        window.location.href = baseURL + "expenses.html";
    }
    }