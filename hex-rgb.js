let input = document.querySelector('#input_value');

let btn1 = document.querySelector('#button1');

let btn2 = document.querySelector('#button2');

let value1 = document.querySelector('#red_value');
let value2 = document.querySelector('#green_value');
let value3 = document.querySelector('#blue_value');
let display_box = document.querySelector('#color_box1');

btn2.addEventListener('click', ()=>{
      input.value = null;
      value1.innerText = null;
      value2.innerText    = null;
      value3.innerText   = null;
});


btn1.addEventListener('click', ()=>{
  
  let val = parseInt(input.value);
  if(val< 0){
        window.alert('enter correct HEX value');
  return;
  }
  display_box.style.backgroundColor = input.value;
  value1.innerText = parseInt(input.value[1]+input.value[2], 16);
  value2.innerText = parseInt(input.value[2]+input.value[3], 16);
  value3.innerText = parseInt(input.value[5]+input.value[6], 16);
});
