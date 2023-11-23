function changeSong(song) {
    var selected = event.target.classList.contains("selected");
    if (selected) {
        Stoploop();
    } else {
        try {
            Stoploop();
        } catch {
            null;
        }
        loopify("/assets/sounds/" + song + ".ogg",function(err,loop) {
            loop.play();
            Stoploop = loop.stop;
        }) 
    }
    document.getElementById("white").classList.remove("selected");
    document.getElementById("river").classList.remove("selected");
    document.getElementById("park").classList.remove("selected");
    if (!selected) {
        event.target.classList.add("selected");
    }
}