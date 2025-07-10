
//COMPILE TIME ERROR

//syntaxerror
// console.log(1;

//RUN TIME ERROR

//Reference error
//console.log(a);

//HANDLING
//try-catch block
// try{
//     console.log("try blocks start here");
//    console.log(x);   //error
//    console.log("try blocks ends here")  //after error it will not execute
// }
// catch(err){
//   //definr krta h ki aap error k saath kya krna chahte hai
//   //retry logic
//   //fallback mechanism
//   //logging
//   //custom error
//   console.log("I AM INSIDE CATCHE BLOCK");
//   console.log("Your error is here", err);     //printing error

// }

//Finally block
// try{
//      console.log("try blocks start here");
//     console.log(x);   //error --> reference error
//     console.log("try blocks ends here")  //after error it will not execute
//  }
//  catch(err){
//    //definr krta h ki aap error k saath kya krna chahte hai
//   //retry logic
//    //fallback mechanism
//    //logging
//    //custom error
//    console.log("I AM INSIDE CATCHE BLOCK");
//    console.log("Your error is here", err);     //printing error
//  }
//  finally{       //always print if error comes in the code block
//     console.log("I will run everytime as i am in finally block");
//  }

//IMPOTANT --> IF ERROR IS NOT COMES IN TRY BLOCK THEN CATCH BLOCK WILL NOT BE EXECUTE, AFTER TRY IT WILL DIRECT GO TO THE FINALLY BLOCK AND THEN EXECUTE THE REST OF THE CODE


//CUSTOM ERROR (CREATE BY US AND THROW)
//BY THROW BLOCK

// try{
//     //reference error
//    console.log(x);
// }
// catch(err){
//     throw new Error("At first declare then print it")
// }

// //throw error
// let errorCode = 100;
// if(errorCode == 100){
//     throw new Error("Invalid Json");
// }