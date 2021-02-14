let input1 =  document.querySelector('#input-box-1');
let input2 =  document.querySelector('#input2');

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn3');

btn1.addEventListener('click', () =>{
    input2.value = CryptoJS.SHA512(input1.value);
  });

btn2.addEventListener('click', () =>{
  input1.value = null;
  input2.value = null;
});