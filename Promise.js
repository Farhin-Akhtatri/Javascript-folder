
//synchronous code

// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Farhin");
// })

//Asynchronous code

// function sayMyName(){
//     console.log("My name is farhin");
// }

// setTimeout(sayMyName, 10000);
  
//syn + asyn code

//   let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(function sayMyName()  {
//         console.log("My name is Farhin");
//     }, 15000);
//     resolve(1);
//   })

// let Promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise Fulfilled");
//     }else{
//         reject("Internal server error");
//     }
// });
// Promise1.then((message)=>{
//   console.log("Then ka message is " + message);
// }).catch((error) =>{
//   console.error(error);
// }).finally((message)=>{
//     console.log("I am the final one, so i will go with you");
// })

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "First");
// })

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "Second");
// })

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "Third");
// });

// Promise.all([promise1, promise2, promise3])
// .then((value)=> {
//     console.log(value);
// })
// .catch((error)=>{
//   console.error("error: " + error);
// });