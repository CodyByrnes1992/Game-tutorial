//variable for the game piece (the cube)
var myGamePiece;
// Start the game
function startGame(){
    myGamePiece = new component(30, 30, "blue", 10, 120);
    myGameArea.start();
}

//Make the cube and display the cube on the canvas

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        //set the properties of the canvas window. 
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    //clear so the cube resets everytime. 
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
//component function that sets the properties of the width height color and speed. 
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}
//Clear so the cube doesn't expand every time. 
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}
//Move the piece up
function moveUp(){
    myGamePiece.speedY -= 1;
}
//Move the piece down
function moveDown(){
    myGamePiece.speedY += 1;
}
//Move the piece to the right
function moveRight(){
    myGamePiece.speedX += 1;
}
//Move the piece to the left. 
function moveLeft(){
    myGamePiece.speedX -= 1;
}

