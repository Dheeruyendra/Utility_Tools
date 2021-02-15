let input = document.querySelector('#user_input');
let output1 = document.querySelector('#deci-result');
let output2 = document.querySelector('#hex-result');
let output3 = document.querySelector('#octal-result');

let btn1 = document.querySelector('#user_click1');
let btn2 = document.querySelector('#user_click2');

btn1.addEventListener('click', ()=>{
    output1.value = parseInt(input.value, 2);
    output2.value = parseInt(input.value, 2).toString(16);
    output3.value = parseInt(input.value, 2).toString(8);
});

btn2.addEventListener('click', ()=>{
  input.value = null;
  output1.value = null;
  output2.value = null;
  output3.value = null;
});