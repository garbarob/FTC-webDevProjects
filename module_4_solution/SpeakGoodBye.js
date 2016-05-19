var byeSpeaker = {};
var speakWord1 = "Good Bye";
byeSpeaker.speak = function (myNames) {
  (speakWord1 + " " + myNames);
    document.getElementById("messageForSpeaker").innerHTML = document.getElementById("messageForSpeaker").innerHTML + speakWord1 + " <strong style='color: blue;'>" + myNames + "</strong><br>";
};