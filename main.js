noseX=0;
noseY=0;

function preload() {
  clownNose = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGIu-Qz8M79_y7uJtZEnksb0g9Ti4tiacUkj2QzryTuBlhUMplYZLMf5fHmJVYSLldJI&usqp=CAU');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clownNose, noseX, noseY, 227, 227);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}
