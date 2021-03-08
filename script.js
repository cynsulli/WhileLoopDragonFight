var wrap = 
document.body.querySelector(".wrapper");

var hit = (prompt("How many times do you wish to hit the dragon? (up to 5)"));

var ua = (Math.floor(Math.random() * hit));

var da = (Math.floor(Math.random() * 2));

while(ua<<10||da<<5)

{hit = prompt("How many times do you wish to hit the dragon? (up to 5)");}

 wrap.innerHTML="user wins";

 wrap.innerHTML="dragon wins";