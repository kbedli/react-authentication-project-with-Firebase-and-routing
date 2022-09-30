import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAt1SQvawuzFnViGZVNuY23BTx6qaSaoEw",
  authDomain: "auth-development-1de82.firebaseapp.com",
  projectId: "auth-development-1de82",
  storageBucket: "auth-development-1de82.appspot.com",
  messagingSenderId: "791025522875",
  appId: "1:791025522875:web:5934b0232e3af97372719e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = app.auth();
export const auth = getAuth(app);
export default app;
