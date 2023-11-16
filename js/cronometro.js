let stopwatch;
let isRunning = false;
function startStopwatch() {
    if (isRunning) {
        clearInterval(stopwatch);
        document.getElementById('startBtn').innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        stopwatch = setInterval(updateDisplay, 1000);
        document.getElementById('startBtn').innerHTML = '<i class="fa-solid fa-play"></i>';
    }
    isRunning = !isRunning;
}
function resetStopwatch() {
    clearInterval(stopwatch);
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startBtn').innerHTML = '<i class="fa-solid fa-pause"></i>';
    isRunning = false;
}
function updateDisplay() {
    const display = document.getElementById('display');
    const time = display.textContent.split(':');
    let seconds = parseInt(time[2], 10);
    let minutes = parseInt(time[1], 10);
    let hours = parseInt(time[0], 10);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;

            if (hours === 24) {
                hours = 0;
            }
        }
    }

    const newTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    display.textContent = newTime;
}

