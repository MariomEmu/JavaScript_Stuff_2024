///10/10/2024
//function Declaration
function printMe()
{
  console.log("printing...");
}
///call the function
printMe();




///parameter
function printThis(param) ///parameter is param
{
  console.log(param);
}

///argument emu
printThis('emu'); /// actual value is  passing , call argument




///function Expression
const printMeAgain = function ()
{
  console.log('print');
}

printMeAgain();

///function expression with parameter
const printMeAgainParam = function ( a, b)
{
  console.log(a,b);
}

printMeAgainParam(10, 29);



///How to return a function

//let p = x(); //undefined

function sum(a, b) {
  return a + b;

}
sum(2, 4);

///same thing different way
function sum1(a, b) {
  let ret = a + b;
  return ret;
}

console.log(sum1(13, 3));


///Default parameters js function here b = 0
function calc(a, b = 0)
{
  return (2 * (a + b));
}
calc(3)

///Rest parameter, it can have only one rest parameter
///Rest parameter must be the last parameter , these two rules have to maintain
function collecting(x, ...y) {
  
  console.log(x);
  console.log(y);
}
///here 1 assign for x=1, rest of the 2 to 9 will go to the array
collecting(1, 2, 3, 4, 5, 6, 7, 8, 9,);

///Arrow function
const add =  (x, y) => {
  return x + y;
}
add(2, 3);

//do it more easy arrow function, it will be write less syntex and code
const add1 = (x, y) => x + y;
add1(3, 4);


///Nested Function
///Function within a function call nested function
function outer() {
  console.log('Outer');
  function inner() {
    console.log('Inner');
  }

  inner();
}


///JS Function Scope
// First rule = Anything variable defined inside the function can not be accessed anywhere outside of the function
function doSomething() {
  let x = 10;
  const y = 20;
  var z = 30;
  
  console.log(x, y, z);
}

doSomething();

console.log(z); /// can not be access from outside


///2nd rule is : if the variable declare globally then function can access 

 let x = 10;
 const y = 20;
 var z = 30;
function doSomething() {

    console.log(x, y, z);
}

doSomething();

console.log(b); ///can be access

  

///JS Closure
//it can preserve the variable
function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}

const outerReturn = outer(10);

outerReturn(2)

///callback function
//calling back bar() is based on certain kind of conditions
function foo(bar) {
  if (itNight) {
     bar();
  }

  if (isDrinkOverCheckOnline) {
    bar();
  }
 
}


///Higher Order function maintain 2 rule
/// 1. It takes one or more functions as parameter
///2. It may return a function

function getCapture(camera) {
  camera();
}

getCapture(function () {
  console.log('canon');
})


///in HOF, if the function return another function that is also call HOF
function returnFn() {
  return function () {
    console.log('returning');
  }
}
const fn = returnFn();
fn()  //execute

///pure function
//It is help in predictability
//It's means that if the input is same , output will be the always same , that is very predictable
function sayGreeting(name) {
  return `Hello ${name}`;
}

sayGreeting('emu');

///impure function total opposite
let greeting = "hello";
function sayGreeting(name) {
  return `${greeting} ${name}`;
}

sayGreeting('emu');

greeting = 'Hola';
sayGreeting('Emu');

///IIFE(Immediately Invoked Function Expression)

(function () {
  console.log('IIFE');
  
})()

///call stack




///function Recursion
//base condition
function recurse(){
  if (base_condition) {
    //do something that 
    // base case: stop further recursion
    return;
  }
  
  recurse(); //function call
  // recursive case: continue recursion
}


function fetchWater(count) {
  if(count === 0)
  {
    console.log('No more water left');
    return;
  }


  console.log('Fatching water...')
  fetchWater(count - 1);

}
fetchWater(5);