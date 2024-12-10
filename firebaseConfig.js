import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAd7OdVQUqrXbKieDNcJbUR5H7OLF8gqm8",
  authDomain: "marvel-fanpage.firebaseapp.com",
  projectId: "marvel-fanpage",
  storageBucket: "marvel-fanpage.firebasestorage.app",
  messagingSenderId: "450939467345",
  appId: "1:450939467345:web:c1825bf9ea2ec0fc85ea70",
  measurementId: "G-4HGXWNMWHQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
