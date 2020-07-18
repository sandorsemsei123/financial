
////////  Income/Expense Div ////////


//Toggle Divs
$('#income-btn').on("click", function() {
    $('#income-div').toggleClass('d-flex');
    $('#expense-div').removeClass('d-flex');
});
$('#expense-btn').on("click", function() {
    $('#expense-div').toggleClass('d-flex');
    $('#income-div').removeClass('d-flex');
});


//Count/Display money
$('#income-submit-btn').on("click", function() {
    var inputMoney = parseInt(document.getElementById('income-input').value);
    var totalMoney = parseInt(document.getElementById('total-money').innerHTML);
    var finalMoney = totalMoney + inputMoney;

    document.querySelector('#total-money').innerHTML = finalMoney;

    $('#income-input').val('');
    $('#income-div').removeClass('d-flex');
});

$('#expense-submit-btn').on("click", function() {
    var inputMoney = parseInt(document.getElementById('expense-input').value);
    var totalMoney = parseInt(document.getElementById('total-money').innerHTML);
    var finalMoney = totalMoney - inputMoney;

    document.querySelector('#total-money').innerHTML = finalMoney;

    $('#expense-input').val('');
    $('#expense-div').removeClass('d-flex');
});

