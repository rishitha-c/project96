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

  user_name= localStorage.getItem("user_name") ;
    room_name= localStorage.getItem("room_name") ;
    document.getElementById("room_name").innerHTML="The room is :"+room_name;

function send(){
     msg = document.getElementById("msg").value;

     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
     });

     document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
   console.log(message_data);
   console.log(firebase_message_id)  ;
   name=message_data ['name'];
   message=message_data ['message'];
   like= message_data ['like'];
   name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
   message_with_tag = "<h4 class='message_h4' >"+message+"</h4>" ;
   button_with_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
   span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span></button><hr>";
   row= name_with_tag+message_with_tag+button_with_tag+span_with_tag;
   document.getElementById("output").innerHTML +=row;
//End code
  } });  }); }
getData();

function update_like(message_id){
  console.log("click on the like button - "+message_id);
  button_id= message_id;
  likes=document.getElementById(button_id).value;
  updated_likes= Number(likes)+1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
  });
}


function logout(){
    
        localStorage.removeItem("user_name") ;
        localStorage.removeItem("room_name") ;
        window.location.replace("index.html") ;   
      
}