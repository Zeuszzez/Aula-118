function preLoad() {

}

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");

}

function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
