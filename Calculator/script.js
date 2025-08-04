const display = document.getElementById('display');
// const menuBTn = DocumentType.getElementById("menu-btn");
// const menu = document.getElementById("menu");
// const backhandle = document.querySelectorAll('backhandle');
// const calculate = document.querySelectorAll('calculatebtn');
// const clearbtn = document.querySelectorAll('clearbtn');

function appendtoDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error.."
    }
}

function handleBackspace(){
    let currentValue = display.value;
    let newValue = currentValue.slice(0, -1);
    display.value = newValue;
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

// Hide menu when clicking outside
document.addEventListener("click", function(event) {
  const menu = document.getElementById("menu");
  const button = document.getElementById("menu-btn");

  // If the clicked target is NOT the button or inside the menu, hide it
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.add("hidden");
  }
});