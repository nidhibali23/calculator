// global variables
var currentValue = "";
var previousValue = "";
var selectedOperator = "";

//dom selectors
var displayInput = document.getElementById("display");


document.querySelectorAll(".inputBtn").forEach(function (btn) {
    btn.addEventListener("click", handleNumbers)
})

document.querySelectorAll(".operator").forEach(function (btn) {
    btn.addEventListener("click", handleOperators)
})

document.getElementById("result").addEventListener("click", handleCalculation);

document.getElementById("ac").addEventListener("click", handleClear);

document.getElementById("delete").addEventListener("click", handleDelete);


function handleNumbers() {
    var btnText = this.innerHTML;
    displayInput.value += btnText;
    currentValue += btnText;
}


function handleOperators() {
    var operatorText = this.innerHTML;
    previousValue = currentValue;
    displayInput.value = "";
    currentValue = "";
    selectedOperator = operatorText;
}
function handleCalculation() {
    var num1 = Number(currentValue);
    var num2 = Number(previousValue);
    switch(selectedOperator) {
        case "+": displayInput.value = num1 + num2;
           break;
           case "-": displayInput.value = num1 - num2;
           break;
           case "*": displayInput.value = num1 * num2;
           break;
           case "/": displayInput.value = num1 / num2;
           break;
           default:displayInput.value = ""

    }
}
function handleClear() {
    currentValue = "";
    previousValue = "";
    selectedOperator = "";
    displayInput.value = "";
      
}
function handleDelete() {
        displayInput.value = displayInput.value.slice(0, -1);
        currentValue = currentValue.slice(0, -1);
    

}