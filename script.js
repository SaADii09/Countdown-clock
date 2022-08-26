
var countDownDate = new Date("Dec 31, 2022 24:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("day4").innerHTML = days + `<span>D</span>` ;
  document.getElementById("hour4").innerHTML = hours + `<span>H</span>`;
  document.getElementById("mint4").innerHTML = minutes + `<span>M</span>`;
  document.getElementById("sec4").innerHTML = seconds + `<span>S</span>`;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);