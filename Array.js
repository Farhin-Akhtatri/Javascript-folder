// let obj = {
//      name: "Farhin" ,//no need of double inverted coma in name
//      // "full name": "Farhin Akhtari" //bt when we have spaces in string we use double inverted coma
//      age: 18,
//      weight: 50,
//      height:"5ft 3in",
//      greet: function(){
//          console.log("hello ji kaise h saare");
//      }

//  };
//   for(let key in obj){  //for in loop use in object
//      console.log(key, " ", obj[key]);
//  }

// console.log(obj);
// obj.greet();
// console.log(typeof(obj));

//creation of array
// let arr = [1, 2, 3, 4];
// console.log(arr);

// //array constructor
// let brr = new Array('mango', 'banana', 'orange');

// // brr.push('kiwi'); //insert at end
// // brr.pop();  //remove the last item 

// brr.shift(); //remove the first element from left side
// brr.unshift('grapes'); //add this element to the starting side of left

// brr.push(20);
// brr.push(40);
// brr.push(50);

// console.log(brr.slice(2, 4)); //remove the last index element given

// brr.splice(1,0,'Neha');  //1 ->show index, 2 ->remove number of item, neha->insert the item in the place of remove item

// let arr = [10, 20, 30, 11, 21, 44, 51]; //filter use for including or excluding the item acc to its type
// let evenArray = arr.filter((number) => {
//     return number%2 == 0;
//     // if(number%2 == 0){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
// });
// console.log(evenArray);

// let arr = [1, 2, 'Farhin', 'Neha', null];
//  let ans = arr.filter((value) => {
//     if(typeof(value) == 'string') {
//         return true;
//     }else{
//         return false;
//     }
//  });
//  console.log(ans);
// arr.map((number, index) => {  //map
//     console.log(number);
//     console.log(index);
// })
 
// let ansArray= arr.map((number) =>{    //square of number using map and function
//     return number*number;
// }
// )
// console.log(ansArray);

// let arr = [10, 20, 30, 40];  //reduce
// let ans = arr.reduce((acc,curr) => {
//    return acc + curr;
// }, 0);     //0 = accumulator value  and 10 and so on = current value
// console.log(ans);  //and the sum value is store in accumulator value then proceed

// let arr = [5, 1, 7, 4, 3, 6];   //sort function
//  arr.sort();  //ascending order
//  console.log(arr);
//  console.log(arr.indexOf(5));  //indexOf

//  let arr = [5, 1, 7, 4, 3, 6];   //sort function
//  arr.sort((a,b)=>b-a);  //descending order
//  console.log(arr);

// console.log(typeof(brr));
// console.log(brr[1]);

// let arr = [10, 20, 30];

// let length = arr.length;
// console.log("length", length);

// //traditional method
// for(let index = 0; index < length; index++){
//     console.log(arr[index]);
// }
// arr.forEach((value, index)=> {   //for each loop
//     console.log("Number:", value, "Index", index);
// })

// let fullname = 'Farhin';  //for of loop use of string iteration
// for(let val of fullname){
//     console.log(val);
// }

console.log("Farhin")