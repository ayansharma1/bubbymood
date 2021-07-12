var firebaseConfig = {
    apiKey: "AIzaSyDI6o6Y-sc7W-G08rCrStut6mQch6Tt1hg",
    authDomain: "tracker-9da05.firebaseapp.com",
    projectId: "tracker-9da05",
    storageBucket: "tracker-9da05.appspot.com",
    messagingSenderId: "653040853732",
    appId: "1:653040853732:web:e5d7bddf9bc275621342f1"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.addEventListener("DOMContentLoaded", function() {
    get();
});

function get() {
    firebase.database().ref('Bubby').once('value', function(snapshot){
        document.getElementById('moodStatus').innerHTML = snapshot.val().currentMood;
        if (snapshot.val().currentMood == "Happy") {
            document.getElementById('Octopus').setAttribute("class", "happy");
            document.body.style.backgroundImage = "url('happy-background.jpg')";
        } else {
            document.getElementById('Octopus').setAttribute("class", "sad");
            document.body.style.backgroundImage = "url('sad-background.jpg')";
        }
    })
}

function set() {
    firebase.database().ref('Bubby').once('value', function(snap){
        if (snap.val().currentMood == "Happy") {
            firebase.database().ref('Bubby').update({
                currentMood: "Sad"
            })
            document.getElementById('moodStatus').innerHTML = "Sad";
            document.getElementById('Octopus').setAttribute("class", "sad");
            document.body.style.backgroundImage = "url('sad-background.jpg')";
        } else {
            firebase.database().ref('Bubby').update({
                currentMood: "Happy"
            })
            document.getElementById('moodStatus').innerHTML = "Happy";
            document.getElementById('Octopus').setAttribute("class", "happy");
            document.body.style.backgroundImage = "url('happy-background.jpg')";
        };
    });
}

function imageHandler() {
    if (document.getElementById('moodStatus').innerHTML == "Happy") {
        document.getElementById('Octopus').setAttribute("class", "happy");
        document.body.style.backgroundImage = "url('happy-background.jpg')";
    } else if (document.getElementById('moodStatus').innerHTML == "Sad") {
        document.getElementById('Octopus').setAttribute("class", "sad");
        document.body.style.backgroundImage = "url('sad-background.jpg')";
    }
}


