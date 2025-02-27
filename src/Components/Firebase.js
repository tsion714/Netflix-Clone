import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, 
       getAuth,
       signInWithEmailAndPassword, 
       signOut} from "firebase/auth";
import { addDoc, 
     collection,
     getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCsgUr6nAeK8miIpGQHp8esyVXKIBUMVTw",
  authDomain: "netflix-clone-2e04c.firebaseapp.com",
  projectId: "netflix-clone-2e04c",
  storageBucket: "netflix-clone-2e04c.firebasestorage.app",
  messagingSenderId: "335230387959",
  appId: "1:335230387959:web:cddda7a8d4d9fac3fa75f2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password)=>{
 try {
   const res = await createUserWithEmailAndPassword(auth, email, password );
   const user = res.user;
   await addDoc(collection(db, "user"),{
    uid: user.uid,
    name,
    authProvider: "local",
    email,
   })
 } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
 }
}

const login = async (email, password) => {
try {
   await signInWithEmailAndPassword(auth, email, password)
} catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
}
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};