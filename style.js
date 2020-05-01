//monday's function
let firstDay = document.getElementsByClassName('btn');
let oneP1 = document.querySelector('.oneP1');
let oneP2 = document.querySelector('.oneP2');
let oneP3 = document.querySelector('.oneP3');
let day1 = document.querySelector('.day1');
let day1_1 = document.querySelector('.day1_1');
let day1_2 = document.querySelector('.day1_2');
 
for(let a=0; a<firstDay.length; a++){
    firstVariable = firstDay[a];
    firstVariable.addEventListener('click', firstFunction);
}
let firstEffect = true;
function firstFunction(event){
    firstVariable = event.target;
    firstEffect = !firstEffect;
if(!firstEffect){
    oneP1.innerHTML = "Cereals with Apple & Banana";
    oneP2.innerHTML = "Rice with vegetables";
    oneP3.innerHTML = "Lentil soup/bread";
    day1.style.background = "rgba(75,7,36, .5)";
    day1.style.borderBottom = "5px solid silver";
    day1.style.background = "rgba(75,7,36, .5)";
    day1.style.color = "white";
    day1_1.style.background = "rgba(75,7,36, .5)";
    day1_1.style.borderBottom = "5px solid silver";
    day1_1.style.background = "rgba(75,7,36, .5)";
    day1_1.style.color = "white";
    day1_2.style.background = "rgba(75,7,36, .5)";
    day1_2.style.borderBottom = "5px solid silver";
    day1_2.style.background = "rgba(75,7,36, .5)";
    day1_2.style.color = "white";
} else if(firstEffect){
    document.location.reload();
}
}
//Tuesday's function
let secondDay = document.getElementsByClassName('btn1');
let twoP1 = document.querySelector('.twoP1');
let twoP2 = document.querySelector('.twoP2');
let twoP3 = document.querySelector('.twoP3');
let day2 = document.querySelector('.day2');
let day2_1 = document.querySelector('.day2_1');
let day2_2 = document.querySelector('.day2_2');

for(let b=0; b<secondDay.length; b++){
    secondVariable = secondDay[b];
secondVariable.addEventListener('click', secondFunction);
}
let secondEffect = true;
function secondFunction(event){
    secondVariable = event.target;
    secondEffect = !secondEffect;
if(!secondEffect){
    twoP1.innerHTML = "Musli with Apple & Banana";
    twoP2.innerHTML = "Rice with Lensel or etc...";
    twoP3.innerHTML = "Soupe / bread";
    day2.style.background = "rgba(75,7,36, .5)";
    day2.style.borderBottom = "5px solid silver";
    day2.style.background = "rgba(75,7,36, .5)";
    day2.style.color = "white";
    day2_1.style.background = "rgba(75,7,36, .5)";
    day2_1.style.borderBottom = "5px solid silver";
    day2_1.style.background = "rgba(75,7,36, .5)";
    day2_1.style.color = "white";
    day2_2.style.background = "rgba(75,7,36, .5)";
    day2_2.style.borderBottom = "5px solid silver";
    day2_2.style.background = "rgba(75,7,36, .5)";
    day2_2.style.color = "white";
} else if(secondEffect){
    document.location.reload();
}
}
//Wednesday's function
let thirdDay = document.getElementsByClassName('btn2');
let threeP1 = document.querySelector('.threeP1');
let threeP2 = document.querySelector('.threeP2');
let threeP3 = document.querySelector('.threeP3');
let day3 = document.querySelector('.day3');
let day3_1 = document.querySelector('.day3_1');
let day3_2 = document.querySelector('.day3_2');

for(let c=0; c<thirdDay.length; c++){
    thirdVariable = thirdDay[c];
thirdVariable.addEventListener('click', thirdFunction);
}
let thirdEffect = true;
function thirdFunction(event){
    thirdVariable = event.target;
    thirdEffect = !thirdEffect;
if(!thirdEffect){
    threeP1.innerHTML = "Musli with Apple & Banana";
    threeP2.innerHTML = "Rice with Lensel or etc...";
    threeP3.innerHTML = "Soupe / bread";
    day3.style.background = "rgba(75,7,36, .5)";
    day3.style.borderBottom = "5px solid silver";
    day3.style.background = "rgba(75,7,36, .5)";
    day3.style.color = "white";
    day3_1.style.background = "rgba(75,7,36, .5)";
    day3_1.style.borderBottom = "5px solid silver";
    day3_1.style.background = "rgba(75,7,36, .5)";
    day3_1.style.color = "white";
    day3_2.style.background = "rgba(75,7,36, .5)";
    day3_2.style.borderBottom = "5px solid silver";
    day3_2.style.background = "rgba(75,7,36, .5)";
    day3_2.style.color = "white";
} else if(thirdEffect){
    document.location.reload();
}
}
//Thursday's function
let fourthDay = document.getElementsByClassName('btn3');
let fourP1 = document.querySelector('.fourP1');
let fourP2 = document.querySelector('.fourP2');
let fourP3 = document.querySelector('.fourP3');
let day4 = document.querySelector('.day4');
let day4_1 = document.querySelector('.day4_1');
let day4_2 = document.querySelector('.day4_2');

for(let d=0; d<fourthDay.length; d++){
    fourthVariable = fourthDay[d];
fourthVariable.addEventListener('click', fourthFunction);
}
let fourthEffect = true;
function fourthFunction(event){
    fourthVariable = event.target;
    fourthEffect = !fourthEffect;
if(!fourthEffect){
    fourP1.innerHTML = "Musli with Apple & Banana";
    fourP2.innerHTML = "Rice with Lensel or etc...";
    fourP3.innerHTML = "Soupe / bread";
    day4.style.background = "rgba(75,7,36, .5)";
    day4.style.borderBottom = "5px solid silver";
    day4.style.background = "rgba(75,7,36, .5)";
    day4.style.color = "white";
    day4_1.style.background = "rgba(75,7,36, .5)";
    day4_1.style.borderBottom = "5px solid silver";
    day4_1.style.background = "rgba(75,7,36, .5)";
    day4_1.style.color = "white";
    day4_2.style.background = "rgba(75,7,36, .5)";
    day4_2.style.borderBottom = "5px solid silver";
    day4_2.style.background = "rgba(75,7,36, .5)";
    day4_2.style.color = "white";
} else if(fourthEffect){
    document.location.reload();
}
}
//Friday's function
let fivthDay = document.getElementsByClassName('btn4');
let fiveP1 = document.querySelector('.fiveP1');
let fiveP2 = document.querySelector('.fiveP2');
let fiveP3 = document.querySelector('.fiveP3');
let day5 = document.querySelector('.day5');
let day5_1 = document.querySelector('.day5_1');
let day5_2 = document.querySelector('.day5_2');

for(let e=0; e<fivthDay.length; e++){
    fivthVariable = fivthDay[e];
fivthVariable.addEventListener('click', fivthFunction);
}
let fivthEffect = true;
function fivthFunction(event){
    fivthVariable = event.target;
    fivthEffect = !fivthEffect;
if(!fivthEffect){
    fiveP1.innerHTML = "Musli with Apple & Banana";
    fiveP2.innerHTML = "Rice with Lensel or etc...";
    fiveP3.innerHTML = "Soupe / bread";
    day5.style.background = "rgba(75,7,36, .5)";
    day5.style.borderBottom = "5px solid silver";
    day5.style.background = "rgba(75,7,36, .5)";
    day5.style.color = "white";
    day5_1.style.background = "rgba(75,7,36, .5)";
    day5_1.style.borderBottom = "5px solid silver";
    day5_1.style.background = "rgba(75,7,36, .5)";
    day5_1.style.color = "white";
    day5_2.style.background = "rgba(75,7,36, .5)";
    day5_2.style.borderBottom = "5px solid silver";
    day5_2.style.background = "rgba(75,7,36, .5)";
    day5_2.style.color = "white";
} else if(fivthEffect){
    document.location.reload();
}
}
//Saturday's function
let sixthDay = document.getElementsByClassName('btn5');
let sixP1 = document.querySelector('.sixP1');
let sixP2 = document.querySelector('.sixP2');
let sixP3 = document.querySelector('.sixP3');
let day6 = document.querySelector('.day6');
let day6_1 = document.querySelector('.day6_1');
let day6_2 = document.querySelector('.day6_2');

for(let f=0; f<sixthDay.length; f++){
    sixthVariable = sixthDay[f];
sixthVariable.addEventListener('click', sixthFunction);
}
let sixthEffect = true;
function sixthFunction(event){
    sixthVariable = event.target;
    sixthEffect = !sixthEffect;
if(!sixthEffect){
    sixP1.innerHTML = "Musli with Apple & Banana";
    sixP2.innerHTML = "Rice with Lensel or etc...";
    sixP3.innerHTML = "Soupe / bread";
    day6.style.background = "rgba(75,7,36, .5)";
    day6.style.borderBottom = "5px solid silver";
    day6.style.background = "rgba(75,7,36, .5)";
    day6.style.color = "white";
    day6_1.style.background = "rgba(75,7,36, .5)";
    day6_1.style.borderBottom = "5px solid silver";
    day6_1.style.background = "rgba(75,7,36, .5)";
    day6_1.style.color = "white";
    day6_2.style.background = "rgba(75,7,36, .5)";
    day6_2.style.borderBottom = "5px solid silver";
    day6_2.style.background = "rgba(75,7,36, .5)";
    day6_2.style.color = "white";
} else if(sixthEffect){
    document.location.reload();
}
}

//Sunday's function
let seventhDay = document.getElementsByClassName('btn6');
let sevenP1 = document.querySelector('.sevenP1');
let sevenP2 = document.querySelector('.sevenP2');
let sevenP3 = document.querySelector('.sevenP3');
let day7 = document.querySelector('.day7');
let day7_1 = document.querySelector('.day7_1');
let day7_2 = document.querySelector('.day7_2');

for(let g=0; g<seventhDay.length; g++){
    seventhVariable = seventhDay[g];
seventhVariable.addEventListener('click', seventhFunction);
}
let seventhEffect = true;
function seventhFunction(event){
    seventhVariable = event.target;
    seventhEffect = !seventhEffect;
if(!seventhEffect){
    sevenP1.innerHTML = "Musli with Apple & Banana";
    sevenP2.innerHTML = "Rice with Lensel or etc...";
    sevenP3.innerHTML = "Soupe / bread";
    day7.style.background = "rgba(75,7,36, .5)";
    day7.style.borderBottom = "5px solid silver";
    day7.style.background = "rgba(75,7,36, .5)";
    day7.style.color = "white";
    day7_1.style.background = "rgba(75,7,36, .5)";
    day7_1.style.borderBottom = "5px solid silver";
    day7_1.style.background = "rgba(75,7,36, .5)";
    day7_1.style.color = "white";
    day7_2.style.background = "rgba(75,7,36, .5)";
    day7_2.style.borderBottom = "5px solid silver";
    day7_2.style.background = "rgba(75,7,36, .5)";
    day7_2.style.color = "white";
} else if(seventhEffect){
    document.location.reload();
}
}


 

