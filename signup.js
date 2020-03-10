(function(){

  //Initialize Firebase
  const firebaseConfig = {
  apiKey: "AIzaSyBlnT8Z2kPBuHpHQagq7511dAQxwWc1SAg",
  authDomain: "kyoyu-carpooling-system.firebaseapp.com",
  databaseURL: "https://kyoyu-carpooling-system.firebaseio.com",
  projectId: "kyoyu-carpooling-system",
  storageBucket: "kyoyu-carpooling-system.appspot.com",
  messagingSenderId: "1075899178529",
  appId: "1:1075899178529:web:46efdd5e82d89dfb098d60",
  measurementId: "G-YFTW3PRSS6"
};
firebase.initializeApp(firebaseConfig);

//Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('txtLogin');
const btnSignup = document.getElementById('txtSignUp');
const btnLogout = document.getElementById('txtLogout');

//Add login event
btnLogin.addEventListener('click', e => {
  //Get email and psssword
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //Sign In 
  const promise = auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));
})

//Add signup event 
btnSignUp.addEventistener('click', e => {
  //Get email and psssword
  //TODO: Check that its a real email
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //Sign In 
  const promise = auth.createUserWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));
});

//Add a realtime listener 
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
  }else{
    console.log('not logged in');
  }
})
}());