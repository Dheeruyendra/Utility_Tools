const { doc } = require("prettier");

let red = document.querySelector('#box1');
let green = document.querySelector('#box2');
let blue = document.querySelector('#box3');

let btn_press = document.querySelector('#user-btn');

let hex_valuee = document.querySelector('#hex-result');

let result_color = document.querySelector('#result-box');

let hex_value =  (red, green, blue) => {
    red = red.toString(16);
    green = green.toString(16);
    blue = blue.toString(16);
   
    if(red.length == 1)
        red = "0" +red;
    

    if(green.length == 1)
    green = "0"+green;
    

   if(blue.length ==1 )
       blue = "0"+blue;
   

   return "#" + red + green + blue ;
}


btn_press.addEventListener('click', ()=>{

hex_value = (red.value, green.value, blue.value);

result_color.style.backgroundColor = hex_value;

hex_valuee.innerText = hex_value;

});