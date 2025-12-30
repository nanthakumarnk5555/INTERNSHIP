let timer = null;
let seconds = 0, minutes = 0, hours = 0;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("startBtn").onclick = start;
document.getElementById("pauseBtn").onclick = pause;
document.getElementById("resetBtn").onclick = reset;
document.getElementById("lapBtn").onclick = lap;

function updateDisplay(){
  display.innerText =
    `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

function start(){
  if(timer !== null) return;
  timer = setInterval(() => {
    seconds++;
    if(seconds === 60){ seconds = 0; minutes++; }
    if(minutes === 60){ minutes = 0; hours++; }
    updateDisplay();
  }, 1000);
}

function pause(){
  clearInterval(timer);
  timer = null;
}

function reset(){
  pause();
  seconds = minutes = hours = 0;
  updateDisplay();
  laps.innerHTML = "";
}

function lap(){
  if(timer === null) return;
  const li = document.createElement("li");
  li.innerText = display.innerText;
  laps.appendChild(li);
}
