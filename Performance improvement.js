

//code 1  (100 reflow and 100 repaint)
// const t1 = performance.now();

// for(let i = 1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This ia para " + i;
//     document.body.appendChild(para);
// }
// const t2 = performance.now();

// console.log("Total time by code 1: " + (t2-t1));


// //code 2   //faster than code 1  (only 1 repent and 1 reflow)

// const t3 = performance.now();

// let mydiv = document.createElement('div');

// for(let i = 1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This ia para " + i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// const t4 = performance.now();
// console.log("Total time by code 2: " + (t4-t3));


//best code  (using fragment)
let fragment = document.createDocumentFragment();
for(let i =1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para " + i ;
    //No reflow and no repaint for the below line
    fragment.appendChild(para);
}
//the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);