var colors = [

    "#FFE4F5", 
    "#FFDDDD",
    "#FFE8D8",
    "#FFFCDD",
    "#E4FFDD",
    //"#DDFFF1", 
    "#D9FFFA",
    "rgb(201, 240, 253)", 
    "#DAD9FF", 
    //"#E8CAFF",
];
var colorIndex = 0;

function changeColor() {
    var col = document.getElementById("print");
    if( colorIndex >= colors.length ) {
        colorIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex];
    colorIndex++;
}



function print(){


html2canvas(document.querySelector("#print")).then(canvas => {
    //document.body.appendChild(canvas); //adds the "screenshot" to the webpage, which we don't need
    var img = canvas.toDataURL("image/png")
    var win = window.open();
    win.document.write("<img src='"+img+"'/>")
});
}
