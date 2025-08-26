const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

function reset() {
    count = 0;
    counter.innerText = count;
    counter.style.color = 'black';
    counter.style.fontSize="5rem";
    removeError();
}

function increase() {
    if (count < 10) {
        count++;
        counter.innerText = count;
        counter.style.color = 'green';
counter.style.fontSize = `${5 + count * 0.5}rem`;
    }
    else {
        showError("Max=10")
    }
  
}

function decrease() {
   if(count > -10){
    count--;
    counter.innerText=count;
    counter.style.color='red';
    counter.style.fontSize = `${5 + count * 0.5}rem`;
   }
   else{
    showError("Min = -10");
   }
 
}

function showError(msg) {
    let errorBox = document.getElementById("error");
    if (!errorBox) {
        // if it doesnt exist, create it dynamically
        errorBox = document.createElement("p");
        // it creates a paragraph
        errorBox.id = "error";
        // this add "id" to the paragraph, so that we can acces it 
        errorBox.style.color = "red";
        errorBox.style.marginTop = "10px";
        document.querySelector(".center").appendChild(errorBox);
        // ^ the above line adds the errormsg to the center div.

    }
    errorBox.innerText = msg;
    // ^here msg= "max=10", it will be shown.
}

function removeError() {
    const errorBox = document.getElementById("error");
    if (errorBox) {
        errorBox.remove();
    }
}