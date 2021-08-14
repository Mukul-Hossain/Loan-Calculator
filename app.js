
const submit = document.getElementById('loan-form');

function calculateResult(){

    //Hide Loading
    const loading= document.getElementById('loading');
    loading.style.display = 'none';

    //Show Result
    const result = document.getElementById('result');
    result.style.display = 'block';
    

const amount = document.getElementById('amount').value;
const interest = document.getElementById('interest').value
const years = document.getElementById('years').value;
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

//Calculation
 
const princiapl = parseFloat(amount);
const calculateInterest = parseFloat(interest)/100/12;
const calculatePayments = parseFloat(years)*12;

//Compute Monthly Payment
const x = Math.pow(1 + calculateInterest, calculatePayments);
const monthly = (princiapl*x*calculateInterest)/(x-1);
if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly*calculatePayments).toFixed(2);
    totalInterest.value = ((monthly*calculatePayments)-princiapl).toFixed(2);
}else{
    showError('Please Check Your Numbers');
}
   
}
function showError(error){

    //Hide Loading
    loading.style.display = 'none';

    //Hide Result
    result.style.display = 'none';

    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    card.insertBefore(errorDiv, heading);
    setTimeout(clearError, 2000);
}
function clearError(){
    document.querySelector('.alert').remove();
}

submit.addEventListener("submit", function(e){
    e.preventDefault();
    //Show Loading
    const loading= document.getElementById('loading');
    loading.style.display = 'block';

    setTimeout(calculateResult, 2000);
});