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
    day1.style.padding = "0px 20px";
    day1_1.style.background = "rgba(75,7,36, .5)";
    day1_1.style.borderBottom = "5px solid silver";
    day1_1.style.background = "rgba(75,7,36, .5)";
    day1_1.style.color = "white";
    day1_1.style.padding = "0px 20px";
    day1_2.style.background = "rgba(75,7,36, .5)";
    day1_2.style.borderBottom = "5px solid silver";
    day1_2.style.background = "rgba(75,7,36, .5)";
    day1_2.style.color = "white";
    day1_2.style.padding = "0px 20px";
} else if(firstEffect){
    oneP1.innerHTML = "Monday Breakfast";
    oneP2.innerHTML = "Monday Lunch";
    oneP3.innerHTML = "Monday Dinner";
    day1.style.background = "rgba(33,3,74,.5)";
    day1_1.style.background = "rgba(33,3,74,.5)";
    day1_2.style.background = "rgba(33,3,74,.5)";
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
    twoP1.innerHTML = "Cereals with Apple & Banana";
    twoP2.innerHTML = "Chili wraps / Felafel wraps";
    twoP3.innerHTML = "Pizza";
    day2.style.background = "rgba(75,7,36, .5)";
    day2.style.borderBottom = "5px solid silver";
    day2.style.background = "rgba(75,7,36, .5)";
    day2.style.color = "white";
    day2.style.padding = "0px 20px";
    day2_1.style.background = "rgba(75,7,36, .5)";
    day2_1.style.borderBottom = "5px solid silver";
    day2_1.style.background = "rgba(75,7,36, .5)";
    day2_1.style.color = "white";
    day2_1.style.padding = "0px 20px";
    day2_2.style.background = "rgba(75,7,36, .5)";
    day2_2.style.borderBottom = "5px solid silver";
    day2_2.style.background = "rgba(75,7,36, .5)";
    day2_2.style.color = "white";
    day2_2.style.padding = "0px 20px";
} else if(secondEffect){
    twoP1.innerHTML = "Tuesday Breakfast";
    twoP2.innerHTML = "Tuesday Lunch";
    twoP3.innerHTML = "Tuesday Dinner";
    day2.style.background = "rgba(33,3,74,.5)";
    day2_1.style.background = "rgba(33,3,74,.5)";
    day2_2.style.background = "rgba(33,3,74,.5)";
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
    threeP1.innerHTML = "Cereals with Apple & Banana";
    threeP2.innerHTML = "Quiche .../ Quiche Lorraine";
    threeP3.innerHTML = "Spaghetti";
    day3.style.background = "rgba(75,7,36, .5)";
    day3.style.borderBottom = "5px solid silver";
    day3.style.background = "rgba(75,7,36, .5)";
    day3.style.color = "white";
    day3.style.padding = "0px 20px";
    day3_1.style.background = "rgba(75,7,36, .5)";
    day3_1.style.borderBottom = "5px solid silver";
    day3_1.style.background = "rgba(75,7,36, .5)";
    day3_1.style.color = "white";
    day3_1.style.padding = "0px 20px";
    day3_2.style.background = "rgba(75,7,36, .5)";
    day3_2.style.borderBottom = "5px solid silver";
    day3_2.style.background = "rgba(75,7,36, .5)";
    day3_2.style.color = "white";
    day3_2.style.padding = "0px 20px";
} else if(thirdEffect){
    threeP1.innerHTML = "Wednesday Breakfast";
    threeP2.innerHTML = "Wednesday Lunch";
    threeP3.innerHTML = "Wednesday Dinner";
    day3.style.background = "rgba(33,3,74,.5)";
    day3_1.style.background = "rgba(33,3,74,.5)";
    day3_2.style.background = "rgba(33,3,74,.5)";
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
    fourP1.innerHTML = "Cereals with Apple & Banana";
    fourP2.innerHTML = "Injera or Bread With various sauces";
    fourP3.innerHTML = "Home made ravioli";
    day4.style.background = "rgba(75,7,36, .5)";
    day4.style.borderBottom = "5px solid silver";
    day4.style.background = "rgba(75,7,36, .5)";
    day4.style.color = "white";
    day4.style.padding = "0px 20px";
    day4_1.style.background = "rgba(75,7,36, .5)";
    day4_1.style.borderBottom = "5px solid silver";
    day4_1.style.background = "rgba(75,7,36, .5)";
    day4_1.style.color = "white";
    day4_1.style.padding = "0px 20px";
    day4_2.style.background = "rgba(75,7,36, .5)";
    day4_2.style.borderBottom = "5px solid silver";
    day4_2.style.background = "rgba(75,7,36, .5)";
    day4_2.style.color = "white";
    day4_2.style.padding = "0px 20px";
} else if(fourthEffect){
    fourP1.innerHTML = "Thursday Breakfast";
    fourP2.innerHTML = "Thursday Lunch";
    fourP3.innerHTML = "Thursday Dinner";
    day4.style.background = "rgba(33,3,74,.5)";
    day4_1.style.background = "rgba(33,3,74,.5)";
    day4_2.style.background = "rgba(33,3,74,.5)";
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
    fiveP1.innerHTML = "Cereals with Apple & Banana";
    fiveP2.innerHTML = "Schupfnudel with vegetables and mushroom";
    fiveP3.innerHTML = "Go out (Indian-food)";
    day5.style.background = "rgba(75,7,36, .5)";
    day5.style.borderBottom = "5px solid silver";
    day5.style.background = "rgba(75,7,36, .5)";
    day5.style.color = "white";
    day5.style.padding = "0px 20px";
    day5_1.style.background = "rgba(75,7,36, .5)";
    day5_1.style.borderBottom = "5px solid silver";
    day5_1.style.background = "rgba(75,7,36, .5)";
    day5_1.style.color = "white";
    day5_1.style.padding = "0px 20px";
    day5_2.style.background = "rgba(75,7,36, .5)";
    day5_2.style.borderBottom = "5px solid silver";
    day5_2.style.background = "rgba(75,7,36, .5)";
    day5_2.style.color = "white";
    day5_2.style.padding = "0px 20px";
} else if(fivthEffect){
    fiveP1.innerHTML = "Friday Breakfast";
    fiveP2.innerHTML = "Friday Lunch";
    fiveP3.innerHTML = "Friday Dinner";
    day5.style.background = "rgba(33,3,74,.5)";
    day5_1.style.background = "rgba(33,3,74,.5)";
    day5_2.style.background = "rgba(33,3,74,.5)";
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
    sixP1.innerHTML = "Bread with cheese, jam, jelly ...";
    sixP2.innerHTML = "Improvise / Go out";
    sixP3.innerHTML = "Go out (Vietnamese or Burger)";
    day6.style.background = "rgba(75,7,36, .5)";
    day6.style.borderBottom = "5px solid silver";
    day6.style.background = "rgba(75,7,36, .5)";
    day6.style.color = "white";
    day6.style.padding = "0px 20px";
    day6_1.style.background = "rgba(75,7,36, .5)";
    day6_1.style.borderBottom = "5px solid silver";
    day6_1.style.background = "rgba(75,7,36, .5)";
    day6_1.style.color = "white";
    day6_1.style.padding = "0px 20px";
    day6_2.style.background = "rgba(75,7,36, .5)";
    day6_2.style.borderBottom = "5px solid silver";
    day6_2.style.background = "rgba(75,7,36, .5)";
    day6_2.style.color = "white";
    day6_2.style.padding = "0px 20px";
} else if(sixthEffect){
    sixP1.innerHTML = "Saturday Breakfast";
    sixP2.innerHTML = "Saturday Lunch";
    sixP3.innerHTML = "Saturday Dinner";
    day6.style.background = "rgba(33,3,74,.5)";
    day6_1.style.background = "rgba(33,3,74,.5)";
    day6_2.style.background = "rgba(33,3,74,.5)";
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
    sevenP1.innerHTML = "Bread with cheese, jam, jelly ...";
    sevenP2.innerHTML = "Improvise / Go out";
    sevenP3.innerHTML = "Penne with desired sauce.";
    day7.style.background = "rgba(75,7,36, .5)";
    day7.style.borderBottom = "5px solid silver";
    day7.style.background = "rgba(75,7,36, .5)";
    day7.style.color = "white";
    day7.style.padding = "0px 20px";
    day7_1.style.background = "rgba(75,7,36, .5)";
    day7_1.style.borderBottom = "5px solid silver";
    day7_1.style.background = "rgba(75,7,36, .5)";
    day7_1.style.color = "white";
    day7_1.style.padding = "0px 20px";
    day7_2.style.background = "rgba(75,7,36, .5)";
    day7_2.style.borderBottom = "5px solid silver";
    day7_2.style.background = "rgba(75,7,36, .5)";
    day7_2.style.color = "white";
    day7_2.style.padding = "0px 20px";
} else if(seventhEffect){
    //document.location.reload();
    sevenP1.innerHTML = "Sunday Breakfast";
    sevenP2.innerHTML = "Sunday Lunch";
    sevenP3.innerHTML = "Sunday Dinner";
    day7.style.background = "rgba(33,3,74,.5)";
    day7_1.style.background = "rgba(33,3,74,.5)";
    day7_2.style.background = "rgba(33,3,74,.5)";
}
}


 

