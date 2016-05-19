var helloSpeaker = {};
var speakWord = "Hello";
helloSpeaker.speak = function (myNames) {
  (speakWord +  " " + myNames);
    document.getElementById("messageForSpeaker").innerHTML = document.getElementById("messageForSpeaker").innerHTML + speakWord + " <strong style='color: green'>"  + myNames + " </strong><br>";
};
