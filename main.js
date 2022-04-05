noseX = 0;
noseY = 0;
rightwristX = 0;
leftwristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(50,50)

    canvas = createCanvas(500,400)
    canvas.position(650,100);

    posenet = ml5.poseNet(video,ModelLoaded);
    posenet.on("pose",gotposes);
}

function ModelLoaded()
{
    console.log("PoseNet is Intialised");
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x " + noseX + "nose y " + noseY);

        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("left wrist x - "+leftwristX+"right wrist x - "+rightwristX+"difference - "+difference);
    }
}