// Select color
document.addEventListener("click",function(e){
    switch (e.target.id){
        case "black":
            document.getElementById("clock-img").src="img/iOeUBV7.png";
            break;
        case "blue":
            document.getElementById("clock-img").src="img/Mplj1YR.png";
            break;
        case "red":
            document.getElementById("clock-img").src="img/PTgQlim.png";
            break;
        case "purple":
            document.getElementById("clock-img").src="img/xSIK4M8.png";
            break;
        case "pink":
            document.getElementById("clock-img").src="img/Zygu7I3.png";
            break;
    }
})

// Select feature

//Time
var timeDisplay = document.getElementById("time");

var isTimeDisplay = false;

document.getElementById("time-type").addEventListener("click",function(){
    isTimeDisplay = true;
    var interval = setInterval(function(){
        if(isTimeDisplay==false){
            clearInterval(interval);
            timeDisplay.innerHTML="";
        }
        else{
        var currentTime = new Date();
        var h = currentTime.getHours();
        var m = currentTime.getMinutes();
        var s = currentTime.getSeconds();
        timeDisplay.innerHTML="";
        timeDisplay.appendChild(document.createTextNode(h+":"+m+":"+s));
        }
      },1000);
    
})

//Heart Rate

document.getElementById("heart-type").addEventListener("click",function(){
    isTimeDisplay= false;
    timeDisplay.innerHTML="";
})