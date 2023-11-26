function Readmore() {
    var text = "I'm Feroz, a dedicated professional with a passion for service beyond borders.Originally from Pakistan, I've worked in various countries, gaining expertise in Catering Service. My mission is to make a positive impact, and I'm committed to continuous learning and growth.Feel free to reach out at Feroz Ansari: 0315-2927789. Thank you for getting to know me!"

    var aboutpara = document.getElementById("aboutpara");
    aboutpara.innerHTML = text;
}




// ***************************************signup page****************************************


var firebaseConfig = {
    apiKey: "AIzaSyAeDw0UilrNyAEXkdqbyV8Xy-sP2cEs2H0",
    authDomain: "cateringservice-2a2fd.firebaseapp.com",
    projectId: "cateringservice-2a2fd",
    storageBucket: "cateringservice-2a2fd.appspot.com",
    messagingSenderId: "286180501510",
    appId: "1:286180501510:web:2a62e12928e8e56234bb87"
  };

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  console.log(firebase)

function signup(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
}

function login(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)

  });
}


function loginwithgoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}

function loginwithgithub(){
    var provider = new firebase.auth.GithubAuthProvider();


    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    console.log(user)
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}


