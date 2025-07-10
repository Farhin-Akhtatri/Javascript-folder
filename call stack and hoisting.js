
//using normal function

// sayMyName("Farhin");  //all are access
// function sayMyName(finalName){
//  console.log(finalName);
// }

// using var keyword
 //var age;   bas ye access karega data nhi 
// console.log(age);   
// var age = 20;

//using let and const keyword
// console.log(age);    //not accessible  gives error
// let age = 20;

//using function expression
// sayHello();    //not accessible gives error
// let sayHello = function(){
//     console.log("Hello ji kasie h sare");
// }

// using class
// const object = new Human();
// class Human{

// }

//FUNCTION CALL STACK

//function using as varible
// let greet = function(){
//     console.log("Good Morning");
// }
// greet();

//function paas (as argument)
// function greetMe(greet, fullname){
//     console.log("hello",fullname);
//     greet();
// }

// function greet(){
//     console.log("Good Morning");
// }
// greetMe(greet, "neha");

//function return
// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
//  let ans = solve(4);
//  let finalans = ans(10);
//  console.log(finalans);

//function store in datastructure
// const arr = [
//     function(a,b){
//         return a+b;
//     },

//     function(a,b){
//         return a-b;
//     },

//     function(a,b){
//         return a*b;
//     }
// ];

// let temp = arr[2];
// let ans = temp(5,10);
// console.log(ans);


//function using object as property
// let obj = {
//     age: 20,
//     weight:45,
//     height: 5,
//     greet: ()=>{
//         console.log("hello world");
//     }
// }
// console.log(obj.age);
// obj.greet();