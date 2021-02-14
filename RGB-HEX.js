
let red = document.querySelector('#box1');
let green = document.querySelector('#box2');
let blue = document.querySelector('#box3');

let btn_press = document.querySelector('#user-btn');

let hex_valuee = document.querySelector('#hex-result');

let clear_btn = document.querySelector('#clear');


function computee (red, green, blue) {
   
    red = parseInt(red);
    green = parseInt(green);
    blue = parseInt(blue);
   
    if(red > 255 || green > 255 || blue > 255 || red <0 || blue < 0 || green < 0   )
    return "Error! Please enter values between 0 to 255";


  if(red < 9)
      red = "0" +red;
  

  if(green < 9)
  green = "0"+green;
  

 if(blue < 9 )
     blue = "0"+blue;
 

     red = red.toString(16);
     green = green.toString(16);
     blue = blue.toString(16);
 

 return "#" + red + green + blue;
}



btn_press.addEventListener('click', () =>{
     
 let ans = computee(red.value, green.value, blue.value);
 hex_valuee.innerText = ans;
 
document.querySelector('#result-box').style.backgroundColor = hex_valuee.innerText; 
});


clear_btn.addEventListener('click' , () =>{
     red.value = null;
     green.value = null;
     blue.value = null;

     hex_valuee.innerText = null;
     document.querySelector('#result-box').style.backgroundColor = null;

} );