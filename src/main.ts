import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlQHzr8NIHdoJXyJLxzO0nHDYJBahyLXc",
  authDomain: "testprojekt-eb820.firebaseapp.com",
  projectId: "testprojekt-eb820",
  storageBucket: "testprojekt-eb820.appspot.com",
  messagingSenderId: "192265921714",
  appId: "1:192265921714:web:56e10ef2c6a3a3327a55ab",
  measurementId: "G-QL7BHT7JQY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount("#app");
