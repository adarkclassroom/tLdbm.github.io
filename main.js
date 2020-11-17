var colors = [

    "#FFB3D0", 
    "#F7A6A6",
    "#FCD5AA",
    "#FCF2AA",
    "#D7FCAA",
    "#A6F7CB", 
    "#AAFCF1",
    "rgb(201, 240, 253)", 
    "#AABEFC", 
    "#E8CAFF",
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
