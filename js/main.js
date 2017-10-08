var arr = [1,true, "random element"];


for(var i = 0; i < arr.length; i++){
  if(typeof arr[i] === "number"){
    console.log('Im a number');
  } else if (typeof arr[i] === "string"){
    console.log("Im a string")
  } else {
    console.log("im a bool")
  }
};


var x = 100;
var y = 72;
var z = 84;
var w = 84;

if z equals 84 -- console.log =
if x less than y
if z is more than y
if x is more than w

if(z === w){
  console.log('I am the number ' + z + ' I am equal');
}
// } else if (x < y){
  console.log("I am less than " + y + " I am still a good number thou");
} else if (z > y) {
  console.log('I am more than' + y + "Dont' nobody care about me");
} else if (x > w){
  console.log('I am more than ' + w );
};
function userName(name){
  console.log("hi there " + name);
}



fizz buzz challenge

iterate number 1-100
if the number is divisble by 3 -- write "fizz"
if the number is divisible by 7 -- write "fizz"
if the number is dvisible by both 3 && 7 -- write 'fizzbuzz'

modulo


for(var i = 1; i <= 100; i++){
  if(i % 7 == 0 && i % 3 == 0){
    console.log(i + "Fizz");
  } else if (i % 7 == 0){
    console.log(i + "buzz");
  } else if(i % 3 == 0){
    console.log(i + "FizzBuzz");
  }
}


Find the biggest number in the arrary

var biggest = 0;
var arr = [1,34,5,23,67];

for(var i = 0; i < arr.length; i++){
  if(arr[i] > biggest){
    biggest = arr[i];
    console.log(biggest);
  }
}



//Ask for user name and return with a greeting

var userName = prompt('What is your name');

if(userName.toLowerCase() === "alice" || userName.toLowerCase() === "bob"){
  document.write("Hello: " + userName + " Welcome back!")
} else {
  alert("You are not welcomed here!!")
};


//Ask for user numbert
var userNum = prompt('Enter a number');
var sumNum = 0;

function getNumber(){
  for(var i = 1; i <= userNum; i++){
    sumNum = sumNum + i;
    console.log(sumNum);
  }
}



Programming Problems
Write a program that prints ‘Hello World’ to the screen.


var text = "Hello World";
document.write(text);


Write a program that asks the user for their name and greets them with their name.

ask for name
store that name
display that name with a greeting


var userName = prompt('What is your name?');
alert('Wassup!: ' + userName);

Modify the previous program such that only the users Alice and Bob are greeted with their names.

ask for name
store that name
check if the name entered is either Alice or bob
display message if name matches Alice or bob
If not alice or bob then display another message

var userName1 = 'alice';
var userName2 = 'bob';
var userInput = prompt('State Thy Name!');

if(userInput.toLowerCase() === userName1 || userInput.toLowerCase() === userName2 ){
  document.write('Hey you got my money?? ' + userInput + " Cause I need that asap!")
} else {
  document.write('Hey you"re not who I am looking for')
}


Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

ask user for a number
take that number and add sum of the that number and 1

var sum = 0;
var userNumber = prompt('Enter a number');

function addNum(){
  for(var i = 1; i <= userNumber;i++){
    sum = sum + i;
    console.log(sum);
  }
}

Modify the previous program such that only
multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

ask user for a number
take that number and add sum of the that number and 1 so that the sum is a multiple of 3 or 5
check if number is a multiple of five or three.

var sum = 0;
var userNumber = prompt('Enter a number');

function addNum(){
  for(var i = 1; i <= userNumber; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
      sum = sum + i;
      console.log(sum);
    } else {
      console.log('not a multiple of 3 or 5')
    }
  }
}

//Write a program that asks the user for a number n and gives them the possibility
//to choose between computing the sum and computing the product of 1,…,n.
