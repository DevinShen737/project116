https://teachablemachine.withgoogle.com/models/X7WNnChMH/
function startClassifiation()
{
    navigator.mediaDevices.getUserMedia({ aduio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/X7WNnChMH/', modelReady);
}

function modelReady(){
    classifier(gotResults);
}