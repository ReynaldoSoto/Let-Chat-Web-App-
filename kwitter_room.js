// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDknM0SCXWj1dphbC4cg8_Ipz8JDrfNWwI",
    authDomain: "let-chat-web-app-d7e66.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-d7e66-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-d7e66",
    storageBucket: "let-chat-web-app-d7e66.appspot.com",
    messagingSenderId: "78990185160",
    appId: "1:78990185160:web:86623d03abc56f782d4bfd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("username");
  document.getElementById("username").innerHTML = "Welcome " + username + "!";

  function addRoom(){
    roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
     purpose : "adding room name"
    });
    localStorage.setItem("roomname", roomname);
 
    window.location = "kwitter_page.html";
   }
   function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("roomname", name);
 
   window.location = "kwitter_page.html";
   }

  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {
   childKey =childSnapshot.key;
   Room_names = childKey;
   //Start code
   console.log("roomname = " + Room_names);
   row = "<div class='roomname' id=" + Room_names + "onclick='redirectToRoomName(this.id)'># " + Room_names + "</div>" + "<hr>";
   //End code
   });});}
  getData();
  
  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("roomname", name);
  
    window.location = "kwitter_page.html";
  }
  
  function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");

    window.location = "index.html";
  }
