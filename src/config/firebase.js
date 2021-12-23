import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhVxz-C3Gv_dDEc2psrpbCLkc_jHu7V_Q",
  authDomain: "super-car-lambo.firebaseapp.com",
  projectId: "super-car-lambo",
  storageBucket: "super-car-lambo.appspot.com",
  messagingSenderId: "507086435551",
  appId: "1:507086435551:web:09d5d5927ade4b0f1aa56a"
};

// Initialize Firebase
const initAuthentication = () => {
    return initializeApp(firebaseConfig);
}
export default initAuthentication;