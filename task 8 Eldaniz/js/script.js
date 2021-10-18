function getSize() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;

    document.getElementById('WidthHeight').innerHTML = "<h1>Width: " + w + "   Height: " + h + "</h1>";
}