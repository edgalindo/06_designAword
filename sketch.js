function setup() {
  createCanvas(500,500);
  background(255)
  
  for(var i = 0; i <150; i +=10){
    line(i, 0, 250, 500);
    line(width, 0, i, height);
    line(i, 0, height, height/2);
    line(width, height/2, i, 500);
    line(width/2, 500, width, i);
    line(i,0, 500, height);
  }
}

function draw() {
  
}

function mousePressed(){
  save('image.jpg');
}
