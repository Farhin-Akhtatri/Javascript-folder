
//5-9 nested function


function outerFunction() {
  let name = "Mozilla"; // let -> block scope

  function innerFunction() {
    console.log(name); 
  }

  return innerFunction;
}
let inner = outerFunction();
inner();
