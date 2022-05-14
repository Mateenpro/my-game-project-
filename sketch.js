var sans,sansImg
var heart,heartImg
var bone,boneImg,blueBone,blueBoneImg,upwardBone,upwardBoneImg
var wall1,wall2,wall3,wall4
var bttn1,bttn2,bttn3
var sansLife = 185,heartLife = 185

function preload() {
  sansImg = loadImage("assets/sans.webp")
  heartImg = loadImage("assets/heart.png")
  bone = loadImage("assets/bone.webp")
  blueBoneImg = loadImage("assets/blue bone.png")
  upwardBoneImg = loadImage("assets/upward bone.webp")
}

function setup() {
  createCanvas(1000,800)
  sans = createSprite(500,180,50,50)
  sans.addImage(sansImg)
  sans.scale = .5
  wall1 = createSprite(320,460,5,250)
  wall2 = createSprite(680,460,5,250)
  wall3 = createSprite(500,333,360,5)
  wall4 = createSprite(500,583,360,5)
  heart = createSprite(500,450,20,20)
  heart.addImage(heartImg)
  heart.scale = 0.02
  bttn = createImg("assets/fight button.png")
  bttn.position(90,540)
  bttn2 = createImg("assets/fight_button_blue.png")
  bttn2.position(400,540)
  bttn3 = createImg("assets/fight_button_red.png")
  bttn3.position(700,540)
}


function draw() {
  background("black")
  if(keyDown(UP_ARROW)){
    heart.y = heart.y - 6
  }
  if(keyDown(DOWN_ARROW)){
    heart.y = heart.y + 6
  }
  if(keyDown(LEFT_ARROW)){
    heart.x = heart.x - 6
  }
  if(keyDown(RIGHT_ARROW)){
    heart.x = heart.x + 6
  }
  heart.bounceOff(wall1)
  heart.bounceOff(wall2)
  heart.bounceOff(wall3)
  heart.bounceOff(wall4)


  push();
    fill("yellow");
    rect(700,  150, 185, 20);
    fill("lime");
    rect(700, 150, sansLife, 20);
    noStroke();
    pop();

    bttn.mouseClicked(bttn2Press)

  drawSprites()
  
}

function bttn2Press(){
  console.log("it Worked")
  sansLife = sanLife - 10
}