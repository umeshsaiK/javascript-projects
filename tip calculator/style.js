const billvalue = document.getElementById("billvalue");
const tipvalue = document.getElementById("tipvalue");
const totalvalueOutput = document.getElementById("totalvalue"); // Renamed to avoid shadowing
const btn = document.getElementById("btn");

function calculateTotal() {
  const billAmount = parseFloat(billvalue.value); // Get value and convert to a number
  const tipPercentage = parseFloat(tipvalue.value); // Get value and convert to a number

  if (isNaN(billAmount) || isNaN(tipPercentage)) {
    totalvalueOutput.textContent = "Please enter valid input for bill and tip.";
    return;
  }

  if(billAmount < 0 || billAmount === 0){
    totalvalueOutput.textContent = "Bill amount cannot be negative and can't be zero.";
    return;
  }
  else if(tipPercentage < 0 || tipPercentage === 0){
    totalvalueOutput.textContent = "Tip percentage cannot be negative and value can't be zero.";
    return;
  }

  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;

  totalvalueOutput.textContent = `$${totalAmount.toFixed(2)}`; 

}

