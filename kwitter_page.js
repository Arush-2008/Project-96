//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBd4j9ilKRVWdWMrshLcmgKc7R-bqoHBOs",
      authDomain: "kwitter-763e0.firebaseapp.com",
      databaseURL: "https://kwitter-763e0-default-rtdb.firebaseio.com",
      projectId: "kwitter-763e0",
      storageBucket: "kwitter-763e0.appspot.com",
      messagingSenderId: "156938266943",
      appId: "1:156938266943:web:08563aa8bb1b30f52d0b8a",
      measurementId: "G-1BGPQJDH8D"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

username=localStorage.getItem("username");
roomname=localStorage.getItem("roomname");
function Send(){
      message=document.getElementById("Message").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:message,
            like:0
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
