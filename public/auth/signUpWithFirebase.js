import {
    btnCreateAccount,
    email,
    password
} from "./ui.js";
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBuMKUxfgo7ooSz_lB_3eK6yYYA-_Heevg",
    authDomain: "datahive-b0d2a.firebaseapp.com",
    projectId: "datahive-b0d2a",
    storageBucket: "datahive-b0d2a.appspot.com",
    messagingSenderId: "676499873179",
    appId: "1:676499873179:web:5ba26eeea906faf4d6d53e",
    measurementId: "G-Q8B7HVDXR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const signUp = async () => {
    try {
        const userEmail = email.value;
        const userPassword = password.value;

        const signUpUser = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
        const user = signUpUser.user;
        console.log(user);
        alert('Auth successful!');
    } catch (error) {
        //firebase exceptions
        console.log(error);
    }
}
//signup user
btnCreateAccount.addEventListener("click", signUp);