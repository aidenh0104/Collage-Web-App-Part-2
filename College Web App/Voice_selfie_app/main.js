var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();
}

function speak(){
    var synth = window.SpeechSynthesis;
  
    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}

