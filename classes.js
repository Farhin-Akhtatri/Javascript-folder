
//CLASSES

// class Human{
//     //propreties
//     age;  //public
//     #wt = 45;  //private   for run we have to use = this.#wt   (it can be only used within the class)
//     ht = 180;
    
//     constructor(newAge, newHeight){   //used to provide new data value
//         this.age = newAge;
//         this.ht = newHeight;
//     }

//     //behaviour
//     walking(){
//         console.log("I am walking", this.#wt);
//     }

//     running(){
//         console.log("I am running");
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyWeight(val){
//      this.#wt = val;
//     }
// }

// let obj = new Human(30, 150);
// console.log(obj.fetchWeight);

// obj.walking();


//DEFAULT PARAMETER
// function sayName(fname= "Eda", lname= fname.toUpperCase()){
//     console.log("My name is ", fname," ",lname);
// }
// sayName();

//default parameter as a OBJECT insertion

//  function solve(value = {age:16, wt:50, ht:190}){
//        console.log("Hello ji", value)
// }
// solve();

//default parameter as a ARRAY insertion

// function solve(value = ["Neha", "Samad", "Farhin"]){
//        console.log("Hello ji", value)
// }
// solve();

//default parameter as a NULL insertion

//  function solve(value = "Neha"){
//         console.log("Hello ji -->", value)
//  }
//  solve(undefined);

//default parameter as a FUNCTION insertion

function getAge(){
    return 30;
}

function utility(name  = "Neha", age = getAge()){
    console.log(name, " ",age);
}
utility();