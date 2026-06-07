document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const dashboardScreen = document.getElementById('dashboard-screen');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const logoutBtn = document.getElementById('logout-btn');
    const coursesContainer = document.getElementById('courses-container');
    const btnRegister = document.getElementById('btn-register');

    // Lista de cursos disponibles en la carpeta Ciencias y Especialidades
    const courses = [
        {
            folder: "ECOLOGICA",
            id: "ecologica",
            name: "Ecología",
            desc: "Estudio de los ecosistemas, sustentabilidad y medio ambiente.",
            icon: "fa-leaf",
            totalLessons: 5
        },
        {
            folder: "ELECTRICIDAD",
            id: "electricidad",
            name: "Electricidad",
            desc: "Fundamentos eléctricos, circuitos y aplicaciones prácticas.",
            icon: "fa-bolt",
            totalLessons: 6
        },
        {
            folder: "anatomia humana",
            id: "anatomia",
            name: "Anatomía Humana",
            desc: "Exploración del cuerpo humano, sistemas y órganos.",
            icon: "fa-person",
            totalLessons: 5
        },
        {
            folder: "componentes del aire",
            id: "componentes_aire",
            name: "Componentes del Aire",
            desc: "Química atmosférica y propiedades de los gases.",
            icon: "fa-wind",
            totalLessons: 4
        },
        {
            folder: "tai-chi",
            id: "taichi",
            name: "Tai-Chi",
            desc: "Disciplina, movimiento y equilibrio mental y físico.",
            icon: "fa-yin-yang",
            totalLessons: 10
        },
        {
            folder: "temaselectosfisica2",
            id: "fisica2",
            name: "Temas Selectos de Física II",
            desc: "Conceptos avanzados, mecánica, termodinámica y óptica.",
            icon: "fa-atom",
            totalLessons: 12
        }
    ];

    // Configuración de Firebase
    const firebaseConfig = {
        apiKey: window.ENV ? window.ENV.FIREBASE_API_KEY : "",
        authDomain: "acceso-a-cursos-4a314.firebaseapp.com",
        projectId: "acceso-a-cursos-4a314",
        storageBucket: "acceso-a-cursos-4a314.firebasestorage.app",
        messagingSenderId: "851856735092",
        appId: "1:851856735092:web:04290714cb63e4244c4a21"
    };

    let db = null;
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();

    // Escuchar el estado de autenticación en tiempo real
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            // Obtener el progreso del usuario desde Firestore
            let progressData = {};
            try {
                const doc = await db.collection('user_progress').doc(user.uid).get();
                if (doc.exists) {
                    progressData = doc.data();
                }
            } catch (err) {
                console.warn("No se pudo cargar el progreso: ", err);
            }
            
            showDashboard(progressData);
            // Mostrar correo del usuario en el header
            const h2 = document.querySelector('.dashboard-header h2');
            h2.textContent = `Mis Especialidades (${user.email})`;
        } else {
            showLogin();
        }
    });

    // Manejar el submit del login
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        try {
            errorMessage.classList.add('hidden');
            await firebase.auth().signInWithEmailAndPassword(email, password);
            emailInput.value = '';
            passwordInput.value = '';
        } catch (error) {
            let msg = "Credenciales incorrectas.";
            if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                msg = "Correo o contraseña incorrectos.";
            } else if (error.code === 'auth/too-many-requests') {
                msg = "Demasiados intentos fallidos. Intenta más tarde.";
            } else if (error.code === 'auth/invalid-api-key') {
                msg = "Error de conexión (Falta API Key). Revisa el archivo env.js.";
            } else {
                msg = error.message;
            }
            
            errorMessage.textContent = msg;
            errorMessage.classList.remove('hidden');
            loginForm.classList.add('shake');
            setTimeout(() => loginForm.classList.remove('shake'), 500);
        }
    });

    // Manejar registro
    btnRegister.addEventListener('click', async () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            errorMessage.textContent = "Por favor ingresa correo y contraseña para registrarte.";
            errorMessage.classList.remove('hidden');
            return;
        }

        try {
            errorMessage.classList.add('hidden');
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            emailInput.value = '';
            passwordInput.value = '';
        } catch (error) {
            let msg = "Error al registrar.";
            if (error.code === 'auth/email-already-in-use') {
                msg = "El correo ya está registrado en otra cuenta.";
            } else if (error.code === 'auth/weak-password') {
                msg = "La contraseña debe tener al menos 6 caracteres.";
            } else {
                msg = error.message;
            }
            
            errorMessage.textContent = msg;
            errorMessage.classList.remove('hidden');
            loginForm.classList.add('shake');
            setTimeout(() => loginForm.classList.remove('shake'), 500);
        }
    });

    // Manejar cierre de sesión
    logoutBtn.addEventListener('click', () => {
        firebase.auth().signOut();
    });

    // Función para mostrar dashboard y renderizar cursos
    function showDashboard(progressData = {}) {
        loginScreen.classList.remove('active-screen');
        loginScreen.classList.add('hidden-screen');
        
        setTimeout(() => {
            loginScreen.style.display = 'none';
            dashboardScreen.style.display = 'block';
            dashboardScreen.classList.remove('hidden-screen');
            dashboardScreen.classList.add('active-screen');
            
            renderCourses(progressData);
        }, 300); // Esperar que termine la animación
    }

    // Función para mostrar login
    function showLogin() {
        dashboardScreen.classList.remove('active-screen');
        dashboardScreen.classList.add('hidden-screen');
        
        setTimeout(() => {
            dashboardScreen.style.display = 'none';
            loginScreen.style.display = 'block';
            loginScreen.classList.remove('hidden-screen');
            loginScreen.classList.add('active-screen');
        }, 300);
    }

    // Función para renderizar las tarjetas de los cursos
    function renderCourses(progressData) {
        coursesContainer.innerHTML = '';
        
        courses.forEach((course, index) => {
            const card = document.createElement('a');
            card.href = encodeURIComponent(course.folder) + "/"; 
            card.className = 'course-card';
            
            // Añadir un pequeño retraso de animación en cascada
            card.style.animation = `fadeUp 0.5s ease-out ${index * 0.1}s forwards`;
            card.style.opacity = '0';
            
            // Calcular progreso
            const completedLessons = progressData[course.id] ? progressData[course.id].length : 0;
            const progressPercent = Math.min(100, Math.round((completedLessons / course.totalLessons) * 100));

            card.innerHTML = `
                <div class="course-icon">
                    <i class="fa-solid ${course.icon}"></i>
                </div>
                <h3>${course.name}</h3>
                
                <div class="course-progress">
                    <div class="progress-header">
                        <span>Progreso</span>
                        <span>${progressPercent}%</span>
                    </div>
                    <div class="progress-track">
                        <div class="progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                </div>

                <p>${course.desc}</p>
                <div class="course-action">
                    Entrar al módulo <i class="fa-solid fa-arrow-right"></i>
                </div>
            `;
            
            coursesContainer.appendChild(card);
        });
    }
});

// Estilo para la animación de shake (error de login)
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    .shake {
        animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
    }
`;
document.head.appendChild(style);
