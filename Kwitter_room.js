
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCuQN9cONclBtbtEr4MMcjl3KawpaEieug",
    authDomain: "kwitter-project-63e9e.firebaseapp.com",
    databaseURL: "https://kwitter-project-63e9e-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-63e9e",
    storageBucket: "kwitter-project-63e9e.appspot.com",
    messagingSenderId: "176951744426",
    appId: "1:176951744426:web:c4c2ce8372a66970db7dd3",
    measurementId: "G-W5N7PCPC26"
  };

  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML= "Welcome <b>" + user_name+"</b>!";

  function addRoom(){
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });

        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     row="<div class='room_name' id="+Room_names+" onclick='RedirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
    //End code
    });});}

getData();

function RedirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="Kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name") ;
        localStorage.removeItem("room_name") ;
        window.location.replace("index.html") ; 
}
