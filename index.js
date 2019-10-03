
// Date code
var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth(); 
var year = currentDate.getFullYear();
    function pad(n) {
    return n<10 ? '0'+n : n;
    }
var mmddyyyy = pad(month + 1) + "-" + pad(date) + "-" + year;

// some event listener
var enter = document.getElementById("box1");

enter.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        box1get();
    }
})

// Add item func

var gbItemdata = [];
var gbItemgain = [];
function additem() {
    var ITNa = document.getElementById("itname").value;
    var amount = document.getElementById("amount").value;
    var price = document.getElementById("price").value;
    var listNode = document.getElementById("itemlist");
    var liNode = document.createElement("LI");
    var txtNode = document.createTextNode("- " + ITNa.toUpperCase());
    var txtNode2 = document.createTextNode(amount + "ea");
    if (price > 0) {  
        var allprice = parseInt(price, 10) * parseInt(amount, 10);
        var txtNode3 = document.createTextNode((allprice - allprice * 0.1) + "z");
    };
    var space = document.createTextNode(" ");
    var space1 = document.createTextNode(" ");

    liNode.appendChild(txtNode);
    liNode.appendChild(space);
    liNode.appendChild(txtNode2);
    liNode.appendChild(space1);
    liNode.appendChild(txtNode3);
    listNode.appendChild(liNode);

    var itemData = ITNa.toUpperCase() + " " + amount + "ea" + " " + price + "z";

    var Itemgain = allprice - allprice * 0.1;

    gbItemdata.push(itemData);
    gbItemgain.push(Itemgain);
};

// Some func to get user input and show them

function box1get() {
    let b1 =box1.value;
    if (b1 > 0) {
        document.getElementById("d1").style.backgroundColor = "#ACE18C";
        document.getElementById("d1").innerHTML = b1;
    }
    else {
        document.getElementById("d1").style.backgroundColor = "#E18F8C";
        document.getElementById("d1").innerHTML = 0;
    }
}

function submit() {
    // Item gain from array to int
    var sum = 0;

    for (var i = 0; i < gbItemgain.length; i++) {
        sum += gbItemgain[i];
    }

    let b1 = box1.value;
    let b2 = box2.value;
    var gain = box2.value - box1.value;
    var gaintotal = gain + sum;
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

    var transItemdata = String(gbItemdata.join());
    console.log(transItemdata);

    // Database code
    var firebaseRef = firebase.database().ref();
    firebaseRef.child('login').child(mmddyyyy).child("Zenygain").set(gain);
    firebaseRef.child('login').child(mmddyyyy).child("Zenytotal").set(gaintotal);
    firebaseRef.child('login').child(mmddyyyy).child("Item").child("Itemdata").set(transItemdata);
    firebaseRef.child('login').child(mmddyyyy).child("Item").child("Itemgain").set(sum);
}

// Login func
//firebase.auth().onAuthStateChanged(function(user) {
    //if (user) {
      // User is signed in.
    //} else {
      // No user is signed in.
    //}
  ;

function login() {
    window.open("/index.html", "_self");
}