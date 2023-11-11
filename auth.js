// firebase script
var firebaseConfig = {
    apiKey: "AIzaSyDWKmMXZ0tFukxfEhio2MGxtk0zhkuyzk0",
    authDomain: "auth-9f5a5.firebaseapp.com",
    projectId: "auth-9f5a5",
    storageBucket: "auth-9f5a5.appspot.com",
    messagingSenderId: "463974212623",
    appId: "1:463974212623:web:adcf7649f265a6538a6f7a"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const loginButton = document.getElementById('login');
  const logoutButton = document.getElementById('logout');
  const loginScreen = document.getElementById('LoginScreen');
  const dashboard = document.getElementById('dashboard');
  const userDetails = document.getElementById('userDetails');
  
  dashboard.style.display = "none";
  
  loginButton.addEventListener('click', GoogleLogin);
  logoutButton.addEventListener('click', LogoutUser);
  
  let provider = new firebase.auth.GoogleAuthProvider();
  
  function GoogleLogin() {
    console.log('Login Btn Call');
    firebase.auth().signInWithPopup(provider).then(res => {
      console.log(res.user);
      loginScreen.style.display = "none";
      dashboard.style.display = "block";
      showUserDetails(res.user);
    }).catch(e => {
      console.log(e);
    });
  }
  
  // function showUserDetails(user) {
  //   userDetails.innerHTML = `
  //     <img src="${user.photoURL}" style="width:3%">
  //   `;
  // }
  
  function checkAuthState() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        loginScreen.style.display = "none";
        dashboard.style.display = "block";
        showUserDetails(user);
      } else {
  
      }
    });
  }
  function LogoutUser() {
    console.log('Logout Btn Call');
    firebase.auth().signOut().then(() => {
      loginScreen.style.display = "block";
      dashboard.style.display = "none";
    }).catch(e => {
      console.log(e);
    });
  }
  checkAuthState();
 