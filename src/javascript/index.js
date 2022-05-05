/*var texto = "";
prompt.(texto);
var llenas = texto.length();
var vacias = 250 - texto.length();
console.log("Has escrito "+ llenas + "caracteres, tienes " + vacias + "aun disponibles");


function getMilk(money) {
var bottles = 0;
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log(bottles = Math.floor(money / 1.5));
  console.log("You buy " + bottles + " of milk.");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);


//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
var weight = 100;
var height = 172;

function bmiCalculator (weight, height) {
    var bmi = Math.round((weight / (height * height)));
    var interpretation = "";

    if(bmi >= 24.5){
        interpretation = "Your BMI is " + bmi + " , so you are overweight.";
    }
    if(bmi >= 18.5 && bmi < 24.9){
        interpretation = "Your BMI is " + bmi + " , so you have a normal weight.";
    }
    else{
        interpretation = "Your BMI is " + bmi + " , so you are underweight";
    }
    return interpretation;
}
bmiCalculator(100,1.72);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);

bmi should equal 20 when it's rounded to the nearest whole number.




var nombre1 = prompt("Ingresa tu nombre: ");
var nombre2 = prompt("Ingresa el nombre de tu pareja:");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Tu love score is: " + loveScore + );

function anioBisiesto(year){
var Bisiesto = "Leap year.";
var noBisiesto = "Not leap year.";
if (year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
        console.log(Bisiesto);
    }  else{
        console.log(noBisiesto);
    }
    }else{
        console.log(Bisiesto);
    }
        }else
    {
    console.log(noBisiesto);
}
}

var guestList = ["Angela","Jack","Pam","James","Lara","Jason"];
console.log(guestList);

function checkInvited(name){
if (guestList.includes(name)){
    alert("welcome "+ name + " have fun!!");
}else
    { alert("sorry try again ");}
}

var name = prompt("what is your name?");
checkInvited(name);


for (let i = 1; i < 101; i++) {
    var buzz = "buzz", fezz= "fezz", buzzfez = "buzzfez";
    if (i % 3 === 0){
    console.log(i + " " + buzz);
} if (i % 5 === 0) {
    console.log(i + " " + fezz);
}if (i % 3 ===0 && i % 5 === 0){
    console.log(i + " " + buzzfez);
}
else{
    console.log(i);
}

}

var output = [];
for (let i = 1; i < 101; i++){
    output.push(i);
};

function fizzBuzz(){
var contador = 1;
if(contador % 3 === 0){
output.push("fizz");
output(contador+1);
}
else{
output.push(contador+1);
}
console.log(output);


}

fizzBuzz.length = 0 */


var output = [];
var contador = 1;

function fizzBuzz() {

    if (contador % 3 === 0 && contador % 5 === 0) {
        output.push("FizzBuzz");
    } else if (contador % 3 === 0) {
        output.push("Fizz");
    } else if (contador % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(contador);
    }



contador++;
console.log(output);

}


function whosPaying(names){
var n = Math.floor(Math.random() * 5);
let name = names[n];
return name + " is going to buy lunch today!"
}

function whosPaying2(){
var numberOfPeople = names.length;
var ramdomPosition = Math.floor(Math.random() * numberOfPeople);


}

var contador = 100;

function beer(){

while( contador > 0 ){
    console.log( contador +" Bottles of beer on the wall, " + contador + " bottles of beer. Take one down and pass it around," );
    contador--;
}

console.log("No more bottles of beer. Go to the store and buy some more. ");
}
