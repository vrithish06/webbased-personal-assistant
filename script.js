let btn=document.querySelector("#button")
let content = document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    //text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let daytoday=new Date()
    let hours=daytoday.getHours()
    if (hours>=0 && hours<12){
        speak("Good Morning Boss")
    }
    else if (hours>=12 && hours<16){
        speak("Good afternoon Boss")
    }
    else{
        speak("Good evening Boss")
    }
}
window.addEventListener('load',()=>{wishMe()})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition();
recognition.onresult=(event)=>{
    let currIndex=event.resultIndex
    let transcript=event.results[currIndex][0].transcript
    content.innerText=transcript;
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
recognition.onerror = (event) => {
    console.log("Error occurred in recognition: " + event.error);
};
recognition.onnomatch = (event) => {
    console.log("Speech not recognized");
};

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if (message.includes("hello")||message.includes("Hey")){
        speak("hello boss,how can i help you?")
    }
    else if (message.includes("who are you")){
        speak("I am assistant of rithish")
    }
    else if (message.includes("open youtube")){
        speak("Opening youtube")
        window.open("https://www.youtube.com");
    }
    else if (message.includes("open whatsapp")){
        speak("Opening whatsapp")
        window.open("whatsapp://")
    }
    else if (message.includes("open calculator")){
        speak("Opening calculator")
        window.open("calculator://")
    }
    else if (message.includes("open")){
        speak(`opening ${message.replace("open","")}`)
        let k=message.replace("open","")
        window.open(`${k}://`)
    }
    else{
        speak(`this is what i found on internet regarding ${message.replace("rocky","")}`)
        window.open(`https://www.google.com/search?q=${message.replace("rocky","")}`)
    }
    
}


