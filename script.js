"use strict"

function clock(){
 const n = new Date
 const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
 const day = days [n.getDay()]
 const month = n.toLocaleString('ru-RU' , {month : 'long'});
 const hour = String(n.getHours()).padStart(2,'0')
 const minute = String(n.getMinutes()).padStart(2,'0')
 const second = String(n.getSeconds()).padStart(2,'0')

 const elementClock = document.getElementById('clock');
 elementClock.textContent = `${day}, ${month} ${n.getDate()}, ${hour}:${minute}:${second}`;
}
setInterval(clock,1000);
clock();