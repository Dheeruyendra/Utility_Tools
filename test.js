
.menu ul li{
    display: inline;
    text-decoration: none;
   
    
}


.menu ul li a {
    text-decoration: none;
    color: hsl(0deg 0% 100%);
}

.menu ul li a:hover {
   color:hsl(219deg 88% 55%);
}


.sub-menu-1 {
  
    display: none;
   position: absolute;
   overflow:visible;
   min-height: 50px;
    box-shadow: 0px 8px 16px 0px white;
    z-index: 1;
}

  .menu  li:hover .sub-menu-1   {
    display: block;
    border-radius: 5px ;
       
    background-color: hsl(0deg 0% 0%);
        
}

.menu  li:hover .sub-menu-1 a 
{
   
    display: block;
      padding-top: 17px;
      padding : 14px 16px;
      color: hsl(0deg 0% 100%);
       border-radius: 5px ;

}


.menu  li:hover .sub-menu-1 a:hover {
    color:hsl(219deg 88% 55%);
}






a {
    text-decoration: none;
  }
  
  nav {
    font-family: monospace;
  }
  
  ul {
    background: darkorange;
    list-style: none;
    margin: 0;
    padding-left: 0;
  }
  
  li {
    color: #fff;
    background: darkorange;
    display: block;
    float: left;
    padding: 1rem;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
  }
    
  li a {
    color: #fff;
  }
  
  li:hover {
    background: red;
    cursor: pointer;
  }
  
  ul li ul {
    background: orange;
    visibility: hidden;
    opacity: 0;
    min-width: 5rem;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 1rem;
    left: 0;
    display: none;
  }
  
  ul li:hover > ul,
  ul li ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
  }
  
  ul li ul li {
    clear: both;
    width: 100%;
  }


 




