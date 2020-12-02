function myFunction() {
    var x = document.getElementById("navi");
    if (x.className === "navigation container") {
        x.className += " responsive";
    } else {
        x.className = "navigation container";
    }
}