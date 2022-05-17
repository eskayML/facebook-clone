import {initializeApp} from  "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyBRoJun5aqaDpHf0HqBqWnOaVDcr9vsSN4",
  authDomain: "facebook-clone-e5a86.firebaseapp.com",
  projectId: "facebook-clone-e5a86",
  storageBucket: "facebook-clone-e5a86.appspot.com",
  messagingSenderId: "1078909447305",
  appId: "1:1078909447305:web:19d607db2c10bcc3cfea58",
  measurementId: "G-35FEG5V6PP",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth , provider };

export default db;
