function processBreathing() {
    setTimeout(function () {
        document.querySelector(".status").textContent = "Hold..."
    },4000);
    setTimeout(function () {
        document.querySelector(".status").textContent = "Exhale..."
    },6080);
    setTimeout(function () {
        document.querySelector(".status").textContent = "Hold..."
    },14080);
    setTimeout(function () {
        document.querySelector(".status").textContent = "Inhale..."
    },16000);
}
processBreathing();
setInterval(processBreathing,16000);