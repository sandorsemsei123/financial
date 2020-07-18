$('#income-btn').on("click", function() {
    $('#income-div').toggleClass('d-flex');
    $('#expense-div').removeClass('d-flex');
});
$('#expense-btn').on("click", function() {
    $('#expense-div').toggleClass('d-flex');
    $('#income-div').removeClass('d-flex');
});