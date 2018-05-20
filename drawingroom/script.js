function setup() {
    createCanvas(600, 600);
    background("#acacac");
}


function main() {
    socket = io.connect('http://localhost:3000');
    socket.on("nkarel", drawElipse);
    function drawElipse(v){
        ellipse(v[0],v[1],20,20)
    }
}
function mouseDragged() {
    var c = [mouseX, mouseY];
    socket.emit("cords", c);

}

window.onload = main;

