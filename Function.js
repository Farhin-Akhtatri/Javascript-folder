//  //function body
// function sayMyName(){
//     console.log("Farhin Akhtari")
// }

// //function use- function call:
// sayMyName();

//FUNCTION  DECLARATION METHOD

// function printCounting(){
//     for(let i = 1; i<=10; i++){
//         console.log(i);
//     }
// }
// printCounting();

//BY USING PARAMETER
// function printNumber(num){
//     console.log("Printing Number:", num);
// }
// printNumber(5);

// function getAverage(num1, num2){
//     let avg = (num1 + num2) / 2;
//     console.log("Average:", avg);
// }
// getAverage(3, 70);

//RETURN FINCTION
// function getSum(a,b,c){
//     let sum = a + b + c;
//     return sum;
// }
// let sum = getSum(1,2,3);
// console.log("Prnting sum:", sum);

// function getMyName(firstname, lastname){
//     let fullname = firstname + " " + lastname;
//     return fullname;
//     //unreachable statement (will not print)
//     let a = 3;
//     let b = 4;
//     let sum = a+b;
//     console.log(sum); 
// }
// let fullname = getMyName("Farhin", "Akhtari");  //function call
// console.log("Fullname:", fullname);

// function getMultiply(a, b){
//     return a*b;
// }
// console.log(getMultiply(2,4));

//ANOTHER METHOD (function expression method)
// const getMultiply = function (a, b){
//     return a*b;
// }
// console.log(getMultiply(2,4));

// let squareNumber = function(num){
//     let ans = num**2;
//     return ans;
// }
//  console.log(squareNumber(5));

// //ARROW FUNCTON
// let exp = (x,y) => {
//     let ans = x**y;
//     return ans;
// }
// console.log(exp(2, 5));

let arr = [10, 20, 30, 40, 50];

// function getSum(){   //for loop
// let len = arr.length;
// let sum = 0;
// for(let index = 0; index < len; index++){
//     sum = sum + arr[index];
// }
// return sum;
// }

function getSum(arr){
    let sum = 0;
    arr.forEach((value) => {
        sum = sum+value;
    });
    return sum;
}
let totalsum = getSum(arr);
console.log(totalsum)