let input = document.querySelector('#input-box-1');
let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');
let button3 = document.querySelector('#btn3');
let result = document.querySelector('#input-box-2');

button1.addEventListener('click', ()=>{
    result.value = btoa(input.value);
});

button2.addEventListener('click', ()=>{
   result.value = atob(input.value);
});

button3.addEventListener('click', ()=>{
   result.value = null;
   input.value = null;
});