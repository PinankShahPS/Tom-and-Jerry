var cats1,cats2,cats3,cats4,cats5;
var cat1;
var m1,m2,m3,m4;
var ms1,ms2,ms3,ms4;
var back,backgrounds;
var butterfly,butterflies,butterflies3;
var elephant,elephants;
var inv;
var blastsound;

function preload() {
//load the images here 
 back=loadImage("garden.png");
 cats1=loadImage("cat1.png");
 cats2=loadAnimation("cat2.png","cat3.png");
 cats3=loadImage("cat3.png");
 cats4=loadImage("cat4.png");
 cats5=loadAnimation("cat5.png","cat6.png");
 elephants=loadAnimation("elephant.gif");
 blastsound=loadSound("blast.mp3");


 butterflies=loadAnimation("butterfly.png","butter.png","butter2.png","butterfly2.png","butter3.png")

 ms1=loadAnimation("mouse1.png");
 ms2=loadAnimation("mouse2.png","mouse3.png");
 ms3=loadAnimation("mouse3.png");
 ms4=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(800,600);

    //create tom andjerry sprites here

    inv=createSprite(780,300,5,600);

    backgrounds=createSprite(400,300);
    backgrounds.addImage("B",back);
    backgrounds.scale=0.9;

    cat1=createSprite(700,500);
    cat1.addAnimation("C",cats1);
    cat1.addAnimation("C1",cats2);
    cat1.addAnimation("C2",cats3);
    cat1.addAnimation("C3",cats4);
    cat1.addAnimation("C4",cats5);
    cat1.scale=0.5;
 
    ms=createSprite(100,500);
    ms.addAnimation("M",ms1);
    ms.addAnimation("M1",ms2);
    ms.addAnimation("M2",ms3);
    ms.addAnimation("M3",ms4);

    ms.scale=0.5;

    elephant=createSprite(600,300);
    elephant.addAnimation("e",elephants);
    elephant.scale=1.5;


}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide

   creatingbutterfly();
    keyPressed();

    drawSprites();

    if(cat1.collide(inv)){
      cat1.changeAnimation("C",cats1);
      ms.changeAnimation("M",ms1);

    }


}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown("left")){

    cat1.changeAnimation("C1",cats2);
    cat1.velocityX=-2;
    ms.changeAnimation("M1",ms2);


  }

  if(keyDown("right")){

    cat1.changeAnimation("C4",cats5);
    cat1.velocityX=2;
    ms.changeAnimation("M1",ms1);


  }

 if(cat1.collide(ms)){
  
  cat1.changeAnimation("C3",cats4);
  ms.changeAnimation("M3",ms4);
  blastsound.play();
 }

}

function creatingbutterfly(){
  
  if(frameCount%80===0){
    var butterfly=createSprite(20,100,20,20);
    butterfly.addAnimation("butter",butterflies);
    butterfly.scale=random(0.1,0.2);
    butterfly.velocityX=2;
    butterfly.y=random(30,350);

    
  }

}

