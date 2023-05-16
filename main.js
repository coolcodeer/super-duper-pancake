var SpeechRecognition=window.webkitSpeechRecognition;

var recongnition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recongnition.start();
}
recongnition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = content;
    if(content == "the password is Josh"){
        speak()
    }
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data="password was right taking selfie in around 4.9256710917238987148162307123 seconds"
    var old = new SpeechSynthesisUtterance(speak_data);
    synth.speak(old)
    Webcam.attach(camera)

    setTimeout(function(){
        take_snapshot();
        save()
    },5000)
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    })
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href=image;
    link.click()
}