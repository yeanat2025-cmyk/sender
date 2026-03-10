const firebaseConfig = {
  apiKey: "AIzaSyAavkx6aU0hiAzdcP70wjdG-YEXYmm1mdc",
  authDomain: "game24-app.firebaseapp.com",
  databaseURL: "https://game24-app-default-rtdb.firebaseio.com",
  projectId: "game24-app",
  storageBucket: "game24-app.firebasestorage.app",
  messagingSenderId: "551706234613",
  appId: "1:551706234613:web:4fd71e34e07b8b7a4dbfbc"
};

firebase.initializeApp(firebaseConfig);

const screen = document.getElementById("screen");
const status = document.getElementById("status");

firebase.database().ref("Screen/user1/frame").on("value",(snap)=>{

const img = snap.val();

if(img){

screen.src = img;
status.innerText = "Live Screen";

}

});
