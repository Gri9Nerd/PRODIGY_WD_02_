document.addEventListener("DOMContentLoaded", function () {
    const stopwatchDuration = document.getElementById("stopwatchDuration");
    const start = document.getElementById("start");
    const lap = document.getElementById("lap");
    const stopp = document.getElementById("stopp");
    const reset = document.getElementById("reset");
    const lapsList = document.getElementById("laps");
  
    let hrs = 0, min = 0, sec = 0, ms = 0, lapCounter = 0, timeinterval;
  
    function displayTime() {
      ms++;
      if (ms >= 100) {
        ms = 0;
        sec++;
      }
      if (sec >= 60) {
        sec = 0;
        min++;
      }
      if (min >= 60) {
        min = 0;
        hrs++;
      }
  
    
      let formattedTime = `${hrs.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
      
      stopwatchDuration.innerHTML = formattedTime;
    }
  
    start.addEventListener("click", () => {
      start.style.display = "none";
      stopp.style.display = "inline-block";
      reset.style.display = "none";
      lap.style.display = "inline-block";
  
      timeinterval = setInterval(displayTime, 10); 
    });
  
    stopp.addEventListener("click", () => {
      stopp.style.display = "none";
      start.style.display = "inline-block";
      reset.style.display = "inline-block";
      lap.style.display = "none";
  
      clearInterval(timeinterval); 
    });
  
    reset.addEventListener("click", () => {
      clearInterval(timeinterval); 
      hrs = 0;
      min = 0;
      sec = 0;
      ms = 0;
      lapCounter = 0;
      stopwatchDuration.innerHTML = "00:00:00.00"; 
  
      
      lapsList.innerHTML = "";
    });
  
    lap.addEventListener("click", () => {
      lapCounter++;
      let lapTime = `${hrs.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
      let lapItem = document.createElement("li");
      lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
      lapsList.appendChild(lapItem);
    });
  });
  
