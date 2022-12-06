import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGUSmmKKjj_IeK-kwC-p1H990ZbJpjOvs",
  authDomain: "kari-33044.firebaseapp.com",
  databaseURL: "https://kari-33044-default-rtdb.firebaseio.com",
  projectId: "kari-33044",
  storageBucket: "kari-33044.appspot.com",
  messagingSenderId: "452396373511",
  appId: "1:452396373511:web:edb6dba45fdae30b407ca2",
  measurementId: "G-5S2LK3VWT7",
};

// Initialize Firebase
export const db = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
