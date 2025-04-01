// Update Clock
function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); // Initialize Clock

// Stopwatch Variables
let stopwatchInterval;
let elapsedTime = 0;
let running = false;

// Format Time
function formatTime(ms) {
    let seconds = Math.floor(ms / 1000) % 60;
    let minutes = Math.floor(ms / (1000 * 60)) % 60;
    let hours = Math.floor(ms / (1000 * 60 * 60));
    return (
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds
    );
}

// Start Stopwatch
function startStopwatch() {
    if (!running) {
        running = true;
        let startTime = Date.now() - elapsedTime;
        stopwatchInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById('stopwatch').innerText = formatTime(elapsedTime);
        }, 1000);
    }
}

// Stop Stopwatch
function stopStopwatch() {
    clearInterval(stopwatchInterval);
    running = false;
}

// Reset Stopwatch
function resetStopwatch() {
    clearInterval(stopwatchInterval);
    running = false;
    elapsedTime = 0;
    document.getElementById('stopwatch').innerText = "00:00:00";
}
