const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
    // c.beginPath();
    // c.arc(300, 200, 50, 0, 2 * Math.PI);
    // c.strokeStyle ="red";
    // c.stroke();


// for(var i = 0; i < 1000; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 50, 0, 2 * Math.PI, false);
//     c.strokeStyle ="red";
//     c.stroke();
//     x +=4;
//     console.log("log");
// }



function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    c.strokeStyle ="yellow";
    c.stroke();
    c.fill();
    }

    this.update = function(){
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
    this.dx = -this.dx;
}

if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
    this.dy = -this.dy;
}

    this.y += this.dy;
    this.x += this.dx;

    this.draw();
    }
}

var circleArray = [];

for (let i = 0; i < 100; i++) {
    
var x = Math.random() * (innerWidth - radius * 2) + radius;
var y = Math.random() * (innerHeight - radius * 2) + radius;
var dx = (Math.random() - 0.5);
var dy = (Math.random() - 0.5);
var radius = 50;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    console.log(innerHeight, innerWidth);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
        
    }


}

animate();