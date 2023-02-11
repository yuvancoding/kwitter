
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDwl5KRYKhKqju3_z6fyuB05J3pBvHoegA",
      authDomain: "adv-c101.firebaseapp.com",
      databaseURL: "https://adv-c101-default-rtdb.firebaseio.com",
      projectId: "adv-c101",
      storageBucket: "adv-c101.appspot.com",
      messagingSenderId: "576790038540",
      appId: "1:576790038540:web:c598c94da674d00c908629",
      measurementId: "G-QHW96P4D65"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
 });

document.getElementById("msg").value = "";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirctToRoomName(this.id)' >#" + 
      Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

     console.log(firebase_message_id);
     console.log(message_data);
     name  = message_data['name'];
     message = message_data['message'];
     like = message_data['like'];
     name_with_tag = " <h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
     message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
     like_button ="<button class='btn-btn warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
     span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

     row = name_with_tag + message_with_tag +like_button + span_with_tag;
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirctToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      })
}

 function logout()
 {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
 }