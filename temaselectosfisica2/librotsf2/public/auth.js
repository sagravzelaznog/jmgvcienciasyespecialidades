// ==========================================
// auth.js - Módulo de Autenticación y Progreso
// ==========================================

// Importamos las funciones modulares directamente desde los CDN de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { initializeApp as initializeAppFirebase } from "firebase/app";
import { getAnalytics as getAnalyticsFirebase } from "firebase/analytics";
// 1. Configuración de tu proyecto (Reemplaza con tus llaves de la consola de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyBMK166pqlGpG0DYy76bCSCkc1AldLVkHg",
  authDomain: "autorizacion-para-tsf2.firebaseapp.com",
  projectId: "autorizacion-para-tsf2",
  storageBucket: "autorizacion-para-tsf2.firebasestorage.app",
  messagingSenderId: "783077071276",
  appId: "1:783077071276:web:3232abfe2e7a4db8468209",
  measurementId: "G-PVVNGZ25J0"
};

// Inicializar la aplicación y los servicios
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

// ==========================================
// FUNCIONES DE AUTENTICACIÓN
// ==========================================

/**
 * Abre una ventana emergente para iniciar sesión con Google.
 */
export const loginConGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        await registrarUsuarioEnDB(user);
        return user;
    } catch (error) {
        console.error("Error en autenticación:", error.message);
    }
};

/**
 * Cierra la sesión activa.
 */
export const cerrarSesion = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error al cerrar sesión:", error.message);
    }
};

// ==========================================
// FUNCIONES DE BASE DE DATOS (PROGRESO)
// ==========================================

/**
 * Crea o actualiza el registro del estudiante en Firestore cada vez que entra.
 * @param {Object} user - Objeto de usuario de Firebase Auth.
 */
async function registrarUsuarioEnDB(user) {
    const userRef = doc(db, "alumnos", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
        // Es la primera vez que el alumno entra, creamos su perfil
        await setDoc(userRef, {
            nombre: user.displayName,
            email: user.email,
            fechaRegistro: serverTimestamp(),
            ultimoAcceso: serverTimestamp(),
            semanasCompletadas: [] // Array para guardar su avance
        });
        console.log("Nuevo alumno registrado en la base de datos.");
    } else {
        // El alumno ya existe, solo actualizamos su último inicio de sesión
        await updateDoc(userRef, {
            ultimoAcceso: serverTimestamp()
        });
        console.log("Registro de acceso actualizado.");
    }
}

/**
 * Añade una semana a la lista de completadas del alumno.
 * @param {number} numeroSemana - El número del bloque finalizado (1-15).
 */
export const marcarSemanaCompletada = async (numeroSemana) => {
    const user = auth.currentUser;
    if (!user) {
        alert("Debes iniciar sesión para guardar tu progreso.");
        return;
    }

    const userRef = doc(db, "alumnos", user.uid);
    try {
        await updateDoc(userRef, {
            // arrayUnion evita que se dupliquen las semanas si le da clic dos veces
            semanasCompletadas: arrayUnion(numeroSemana) 
        });
        console.log(`Progreso guardado: Semana ${numeroSemana} completada.`);
        return true;
    } catch (error) {
        console.error("Error al guardar el avance:", error);
        return false;
    }
};

/**
 * Recupera el array de semanas que el alumno ya completó.
 */
export const obtenerProgreso = async () => {
    const user = auth.currentUser;
    if (!user) return [];

    const userRef = doc(db, "alumnos", user.uid);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
        return docSnap.data().semanasCompletadas || [];
    }
    return [];
};

// Exportamos 'auth' y 'onAuthStateChanged' para poder escuchar cambios de sesión en app.js
export { auth, onAuthStateChanged };