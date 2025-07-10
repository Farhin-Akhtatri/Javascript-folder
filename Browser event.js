
// function changeText(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
// fpara.textContent = "Akhtari";
// }

//  let fpara = document.getElementById('fpara');
//  fpara.addEventListener('click', changeText);  //add
 
// fpara.removeEventListener('click', changeText);  //remove

// let anchorElement = document.getElementById('fanchor');

// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = "click done"
// });

// let paras = document.querySelectorAll('p');

 function alertPara(event){
    if(event.target.nodeName === 'SPAN'){
        alert("You have click on para: " + event.target.textcontent );
     }
    }

// for(let i = 0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click',alertPara);
// }

let mydiv = document.getElementById('rapper');
document.addEventListener('click', alertPara);