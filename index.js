
// Date code
var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth(); 
var year = currentDate.getFullYear();
    function pad(n) {
    return n<10 ? '0'+n : n;
    }
var mmddyyyy = pad(month + 1) + "-" + pad(date) + "-" + year;


// Some func to get user input and show them
function submit() {
    let b1 = box1.value;
    let b2 = box2.value;
    var gain = box2.value - box1.value;
    var gainrate = gain/360
    if (b1 > 0) {
        document.getElementById("d1").style.backgroundColor = "#ACE18C";
        document.getElementById("d1").innerHTML = b1;
    }
    else {
        document.getElementById("d1").style.backgroundColor = "#E18F8C";
        document.getElementById("d1").innerHTML = 0;
    }
    if (b2 > 0) {
        document.getElementById("d2").style.backgroundColor = "#ACE18C";
        document.getElementById("d2").innerHTML = b2; 
    }
    else {
        document.getElementById("d2").style.backgroundColor = "#E18F8C";
        document.getElementById("d2").innerHTML = 0;
    }
    document.getElementById("disgainfunc").innerHTML = gain;
    document.getElementById("disratefunc").innerHTML = gainrate.toFixed(0);

    // Database code
    var firebaseRef = firebase.database().ref();
    firebaseRef.child('login').child("Zenygain").child(mmddyyyy).set(gain);

}

// Login func
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });

function login() {
    window.open("/index.html", "_self");
}