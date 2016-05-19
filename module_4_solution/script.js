var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

function myNames () {
    

for (var i = 0; i < names.length; i++) {
var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
    helloSpeaker.speak(names[i]);
  } else {
    byeSpeaker.speak(names[i]);
  }
    
}
//    window.helloSpeaker = helloSpeaker;
//    window.byeSpeaker = byeSpeaker;    
}

(function (window) {

 myNames ();
    
})(window);



  