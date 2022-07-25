import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1RXqTtfsDXmpuKj-Birl0QnzJ1XGlctM",
  authDomain: "sharing-system-67.firebaseapp.com",
  projectId: "sharing-system-67",
  storageBucket: "sharing-system-67.appspot.com",
  messagingSenderId: "922555152911",
  appId: "1:922555152911:web:4c736ea1598249269a017a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};


