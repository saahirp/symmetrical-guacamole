function preload() {
	world_start = loadSound("world_start.wav");
	coin_sound = loadSound("coin.wav");
	jump_sound = loadSound("jump.wav");
	gameover_sound = loadSound("gameover.wav");
	kick_sound = loadSound("kick.wav");
	mariodie_sound = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
    video = createCapture(VIDEO);   
    video.size(1000,500);
	video.parent('console');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log('model loaded');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
	noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +"  noseY = " + noseY);
  }
}

function draw() {
	game()
}