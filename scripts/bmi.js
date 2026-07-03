const age = document.getElementById('age');
const height = document.getElementById('height');
const weight = document.getElementById('weight');

const ageValue = document.getElementById('ageValue');
const heightValue = document.getElementById('heightValue');
const weightValue = document.getElementById('weightValue');

const bmiEl = document.getElementById('bmi');
const categoryEl = document.getElementById('category');
const pointer = document.getElementById('pointer');

function calculateBMI(){

    let h = height.value / 100;
    let w = weight.value;

    let bmi = w / (h*h);

    bmiEl.textContent = bmi.toFixed(1);

    let category = '';
    let color = '';

    if(bmi < 18.5){
        category = 'תת משקל';
        color = '#3b82f6';
    }
    else if(bmi < 25){
        category = 'משקל תקין';
        color = '#22c55e';
    }
    else if(bmi < 30){
        category = 'עודף משקל';
        color = '#f59e0b';
    }
    else{
        category = 'השמנת יתר';
        color = '#ef4444';
    }

    categoryEl.textContent = category;
    categoryEl.style.color = color;
    bmiEl.style.color = color;

    // ageValue.textContent = age.value;
    heightValue.textContent = height.value + ' ס"מ';
    weightValue.textContent = weight.value + ' ק"ג';

    let position = Math.min(Math.max((bmi / 40) * 100,0),100);
    // pointer.style.left = `calc(${position}% - 60px)`;
}
// age.addEventListener('input', calculateBMI);
height.addEventListener('input', calculateBMI);
weight.addEventListener('input', calculateBMI);

calculateBMI();

function openHelp(){
    document.getElementById("helpModal").style.display="block";
}

function closeHelp(){
    document.getElementById("helpModal").style.display="none";
}

window.onclick=function(e){
    if(e.target==document.getElementById("helpModal")){
        closeHelp();
    }
}

document.addEventListener("keydown",function(e){
    if(e.key==="Escape"){
        closeHelp();
    }
});