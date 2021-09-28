var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
paddle1=createSprite(150,585,100,10)
paddle1.shapeColor="blue"

paddle2=createSprite(300,585,100,10)
paddle2.shapeColor="violet"

paddle3=createSprite(450,585,100,10)
paddle3.shapeColor="red"

paddle4=createSprite(600,585,100,10)
paddle4.shapeColor="green"

ball=createSprite(200,200,25,25)

    //create box sprite and give velocity
    ball.velocityX=10
    ball.velocityY=10
}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite

   edges = createEdgeSprites()
    ball.bounceOff(edges)
if(ball.isTouching(paddle3)){
    ball.shapeColor="red"
}

else if(ball.isTouching(paddle2)){
    ball.shapeColor="violet"
}

else if(ball.isTouching(paddle4)){
    ball.shapeColor="green"
}

else if(ball.isTouching(paddle1)){
    ball.shapeColor="blue"
    ball.collide(paddle4)
    ball.velocityX=0
    ball.velocityY=0
}
drawSprites();
    //add condition to check if box touching surface and make it box
}
