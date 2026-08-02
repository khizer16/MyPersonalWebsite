let sign = document.getElementById('timer')
let counterElement = document.getElementById("time");
let time = 0
let buttons = document.getElementsByClassName('navbar')
time = localStorage.getItem('time',time)
const comment = document.getElementById('comment')

setInterval(function(){

    time++ 
    
   
    counterElement.textContent = time
    localStorage.setItem('time',time)
    console.log (localStorage.getItem('time',time))
   


    if (time > 99){

    counterElement.style.color = 'red'

    }
    else{
    counterElement.style.color = 'black'
    }


    if (time > 499){
    sign.innerHTML = "You have been here for " + time + " seconds it is now time to leave."
    sign.style.fontFamily = 'arial';
    sign.style.fontSize = '100px'
    sign.style.color= 'red'
    }

    if (time > 999){
            alert("Error code: 0x80070005 - Connection Lost.");
            alert("Warning: Memory dump initiated.");
            alert("System recovery failed. Please refresh the page.");

    }

    comment.addEventListener('submit', function (event) {
  
  
    });



}, 1000)

comment.addEventListener('submit', function (event) {
  
  event.preventDefault();
  alert("No I'm not doing that.");

});

