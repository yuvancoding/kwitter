
//ADD YOUR FIREBASE LINKS
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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
}