var timer = 30;
var interval;

function startTimer() {
  interval = setInterval(function () {
    timer--;
    document.getElementById("timer-text").innerHTML = timer;

    if (timer === 0) {
      clearInterval(interval);
      console.log("Timer scaduto!");
    }
  }, 1000);
}

startTimer();
