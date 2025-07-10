
// async function getData(){
//   setTimeout(function(){
//     console.log("I am inside set timeout block")
//   }, 3000);
// }
// let output = getData();

//await - logic

//fetch API 
async function getData(){

    //get request - async
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
     //parse json - async
    let data = await response.json();
    console.log(data);
}
getData();