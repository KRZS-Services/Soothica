function changeSong(song) {
    var selected = event.target.classList.contains("selected");
    if (selected) {
        document.querySelector(".optionaudio").src = "";
    } else {
        document.querySelector(".optionaudio").src = "/assets/songs/" + song + ".mp3";
        event.target.classList.add("selected");
        document.querySelector(".optionaudio").play();
    }
    document.getElementById("evolve").classList.remove("selected");
    document.getElementById("restoration").classList.remove("selected");
    document.getElementById("confluence").classList.remove("selected");
    document.getElementById("radiant").classList.remove("selected");
    document.getElementById("seismicsouls").classList.remove("selected");
    if (!selected) {
        event.target.classList.add("selected");
    }
}