// Importa las funciones que necesitas de los SDK que necesitas
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Importa el módulo de Firebase Firestore
import "firebase/compat/storage"; // Añade la importación de Storage

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD2ykt2Gvpy-QQa-BzFAIYJ3RZ2ZG92ZPw",
    authDomain: "agenda-marco.firebaseapp.com",
    projectId: "agenda-marco",
    storageBucket: "agenda-marco.appspot.com",
    messagingSenderId: "409202603142",
    appId: "1:409202603142:web:9bd57b143e0e9903344d07"
};

// Inicializa Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore(); // Obtiene una instancia de Firebase Firestore
const storage = firebase.storage(); // Inicializa Storage

export { db, storage };

