import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAwH_EO2hBLwlQbMulfFRS6oJStvCLpYvE",
  authDomain: "cei--salva.firebaseapp.com",
  projectId: "cei--salva",
  storageBucket: "cei--salva.appspot.com",
  messagingSenderId: "284090784237",
  appId: "1:284090784237:web:6110bd8ccddafea0fd6fe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

