const colorFrame  = [

"#7CB6DE" ,
"#DE867C",
"#7CDE80",
"#992AA7"
];

let currentIndex = 0;

const btn = document.getElementById('click');
btn.addEventListener('click', () => {

    const body = document.getElementById('body-color');

    const bodyColor = colorFrame[currentIndex+1];

    body.style.backgroundColor = colorFrame[(currentIndex + 1) % colorFrame.length];



    // --------------

    const box = document.getElementById('box');

    const hexText = document.getElementById('hex-color');

    const color = colorFrame[currentIndex];

box.style.backgroundColor= color;
hexText.textContent=color;

currentIndex=(currentIndex + 1) % colorFrame.length;


});