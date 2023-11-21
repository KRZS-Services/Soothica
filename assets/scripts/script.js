function showMenu() {
    if (document.querySelector(".breathemenu").style.display != "none") {
        document.querySelector(".breathemenu").style.left = "-40%";
        document.querySelector(".menubtn").disabled = true;
        setTimeout(function () {
            document.querySelector(".breathemenu").style.display = "none";
            document.querySelector(".menubtn").disabled = false;
        },750);
    } else {
        document.querySelector(".breathemenu").style.display = "block";
        document.querySelector(".menubtn").disabled = true;
        setTimeout(function () {
            document.querySelector(".breathemenu").style.left = "0";
        });
        setTimeout(function () {
            document.querySelector(".menubtn").disabled = false;
        },750);
    };
};
function softRedirect(url) {
    document.querySelector(".bg").style.opacity = "0%";
    setTimeout(function () { location = url + "?sf=1" },1000)
};
if (new URL(document.location).searchParams.get("sf") != "1") {
    document.querySelector(".bg").style.opacity = "100%";
    document.querySelector(".bg").style.display = "flex";
} else {
    var rurl = new URL(document.location).searchParams;
    var queryParams = new URLSearchParams(window.location.search);
    queryParams.set("sf", "0");
    history.replaceState(null, null, "?"+queryParams.toString());   
    document.querySelector(".bg").style.display = "flex";
    setTimeout(function(){document.querySelector(".bg").style.opacity = "100%"},100);
};