// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMrwPucxjr8PnEIL9JDBktrvwZMwul4bU",
  authDomain: "vuexfirebase-79150.firebaseapp.com",
  projectId: "vuexfirebase-79150",
  storageBucket: "vuexfirebase-79150.appspot.com",
  messagingSenderId: "1003815840228",
  appId: "1:1003815840228:web:aeb2abdbc13929283d7ff1",
  measurementId: "G-BLV2SNP6N0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebaseApp