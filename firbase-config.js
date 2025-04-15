import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';


// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3t7Qi8rjnsG0gC1PecLG9xG3sLLZvgro",
  authDomain: "gohackathon-55b43.firebaseapp.com",
  projectId: "gohackathon-55b43",
  storageBucket: "gohackathon-55b43.firebasestorage.app",
  messagingSenderId: "979895838363",
  appId: "1:979895838363:web:c0db4832f7396dfe0bc83e",
  measurementId: "G-C4V5FNZ038"
};



//intilaise firebase 
const app = initializeApp(firebaseConfig);


//intiaise firbase authentication 
const auth = getAuth(app); 

const provider = new GoogleAuthProvider(); // Google Auth Provider

export {auth, provider};