// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiOohq1brTkdMjTplL29WDagewaXyhCJE",
  authDomain: "whatsappclone-3c262.firebaseapp.com",
  projectId: "whatsappclone-3c262",
  storageBucket: "whatsappclone-3c262.appspot.com",
  messagingSenderId: "102085774649",
  appId: "1:102085774649:web:8a94efcb6e30ae663aace8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export default app;