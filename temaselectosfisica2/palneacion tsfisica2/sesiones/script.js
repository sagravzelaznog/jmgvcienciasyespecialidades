// --- SISTEMA DOCENTE (ANDRAGOGÍA Y TIPS) ---
function unlockTeacherMode() {
    const password = prompt("Ingrese el código de acceso docente para revelar tips pedagógicos:");
    if (password === "1983") {
        alert("Modo Maestro Desbloqueado. Mostrando tips de enseñanza.");
        const notes = document.querySelectorAll('.teacher-note');
        notes.forEach(note => {
            note.classList.remove('hidden');
        });
        document.getElementById('btn-teacher').style.display = 'none';
    } else if (password !== null) {
        alert("Código incorrecto.");
    }
}

// --- SISTEMA DEL QUIZ (ESTILO KAHOOT) ---
const quizStart = document.getElementById('quiz-start');
const quizGame = document.getElementById('quiz-game');
const quizResults = document.getElementById('quiz-results');
const questionTitle = document.getElementById('question-title');
const answerButtons = document.getElementById('answer-buttons');
const btnNext = document.getElementById('btn-next');
const scoreTracker = document.getElementById('score-tracker');
const questionProgress = document.getElementById('question-progress');

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let currentScore = 0;

// Base de Datos de Preguntas de la Masterclass
const questionDatabase = [
    {
        question: "De acuerdo a la Ley de la Reflexión, el ángulo de incidencia es siempre...",
        answers: [
            { text: "El doble del ángulo reflejado", correct: false },
            { text: "La mitad de la recta normal", correct: false },
            { text: "Igual al ángulo de reflexión", correct: true },
            { text: "Dependiente del color de la luz", correct: false }
        ]
    },
    {
        question: "¿Desde dónde se deben medir algebraicamente los ángulos de incidencia y reflexión?",
        answers: [
            { text: "Desde la superficie del espejo", correct: false },
            { text: "Desde la recta normal (perpendicular)", correct: true },
            { text: "Desde el suelo", correct: false },
            { text: "Desde el observador", correct: false }
        ]
    },
    {
        question: "¿Por qué NO puedes ver tu reflejo en una pared blanca mate?",
        answers: [
            { text: "Porque la pared absorbe toda la luz", correct: false },
            { text: "Por la reflexión difusa (rayos rebotan al azar)", correct: true },
            { text: "Porque la pared es transparente", correct: false },
            { text: "Porque la luz viaja demasiado rápido", correct: false }
        ]
    },
    {
        question: "Las imágenes creadas por los espejos planos del baño son siempre:",
        answers: [
            { text: "Reales y más pequeñas", correct: false },
            { text: "Virtuales, derechas y del mismo tamaño", correct: true },
            { text: "Virtuales y de cabeza", correct: false },
            { text: "Reales e invertidas", correct: false }
        ]
    },
    {
        question: "¿Qué espejo usamos para amplificar el campo de visión en las esquinas de una tienda?",
        answers: [
            { text: "Espejo Convexo", correct: true },
            { text: "Espejo Cóncavo", correct: false },
            { text: "Espejo Plano", correct: false },
            { text: "Lente Convergente", correct: false }
        ]
    },
    {
        question: "Si te miras en la parte 'hundida' de una cuchara desde lejos, tu imagen será:",
        answers: [
            { text: "Derecha y más grande", correct: false },
            { text: "Derecha y más pequeña", correct: false },
            { text: "De cabeza (invertida)", correct: true },
            { text: "Invisible", correct: false }
        ]
    },
    {
        question: "Un rayo láser incide a 25° respecto a la normal. ¿Cuál es el ángulo de reflexión?",
        answers: [
            { text: "65 grados", correct: false },
            { text: "25 grados", correct: true },
            { text: "50 grados", correct: false },
            { text: "0 grados", correct: false }
        ]
    },
    {
        question: "El fenómeno geométrico que hace que tu mano derecha parezca la izquierda en el espejo se llama:",
        answers: [
            { text: "Refracción lateral", correct: false },
            { text: "Inversión lateral", correct: true },
            { text: "Dispersión cromática", correct: false },
            { text: "Aberración esférica", correct: false }
        ]
    },
    {
        question: "Si te paras a 2 metros de un espejo plano, ¿a qué distancia de ti parece estar tu imagen virtual?",
        answers: [
            { text: "A 2 metros", correct: false },
            { text: "A 4 metros (2m objeto + 2m imagen)", correct: true },
            { text: "A 1 metro", correct: false },
            { text: "En el infinito", correct: false }
        ]
    },
    {
        question: "¿Qué tipo de espejo es un faro de automóvil (o linterna) que concentra los rayos paralelos?",
        answers: [
            { text: "Plano", correct: false },
            { text: "Convexo", correct: false },
            { text: "Dicroico", correct: false },
            { text: "Cóncavo parabólico", correct: true }
        ]
    }
];

// --- FUNCIONES DEL JUEGO ---
function startQuiz() {
    quizStart.classList.add('hidden');
    quizResults.classList.add('hidden');
    quizGame.classList.remove('hidden');
    
    // Aleatorizar orden de preguntas
    shuffledQuestions = questionDatabase.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    currentScore = 0;
    
    updateHUD();
    loadQuestion();
}

function loadQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(qObj) {
    questionTitle.innerText = qObj.question;
    questionProgress.innerText = `Pregunta ${currentQuestionIndex + 1} / 10`;
    
    // Aleatorizar orden de respuestas
    const shuffledAnswers = qObj.answers.sort(() => Math.random() - 0.5);
    
    shuffledAnswers.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerText = answer.text;
        btn.classList.add('btn-answer');
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', selectAnswer);
        answerButtons.appendChild(btn);
    });
}

function resetState() {
    btnNext.classList.add('hidden');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    
    if (isCorrect) {
        currentScore += 100; // Puntuación tipo Kahoot
        updateHUD();
    }

    // Feedback visual (Verde acierto, Rojo fallo)
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
        button.disabled = true; // Bloquear todos los botones tras responder
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        btnNext.classList.remove('hidden');
    } else {
        setTimeout(showFinalResults, 1500); // Pequeño retraso al terminar
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function updateHUD() {
    scoreTracker.innerText = `Puntos: ${currentScore}`;
}

function showFinalResults() {
    quizGame.classList.add('hidden');
    quizResults.classList.remove('hidden');
    document.getElementById('final-score-text').innerText = `${currentScore} PUNTOS DE LUZ`;
}

function resetQuiz() {
    startQuiz();
}
/* =========================================================
   SESIÓN 32: VARIABLES ESPECÍFICAS (ESPEJOS)
========================================================= */

// --- BASE DE DATOS DE PREGUNTAS: SESIÓN 32 ---
const questionDatabase32 = [
    {
        question: "Un espejo que tiene su superficie reflectante en la parte INTERNA de una esfera es:",
        answers: [
            { text: "Espejo Convexo", correct: false },
            { text: "Espejo Plano", correct: false },
            { text: "Espejo Cóncavo", correct: true },
            { text: "Lente Divergente", correct: false }
        ]
    },
    {
        question: "Los espejos CONVEXOS siempre forman imágenes que son:",
        answers: [
            { text: "Virtuales, derechas y más pequeñas", correct: true },
            { text: "Reales, invertidas y más grandes", correct: false },
            { text: "Virtuales, de cabeza y gigantes", correct: false },
            { text: "Reales, derechas y del mismo tamaño", correct: false }
        ]
    },
    {
        question: "¿Qué tipo de espejo usarías en un cruce peligroso para ampliar el campo de visión?",
        answers: [
            { text: "Un espejo cóncavo", correct: false },
            { text: "Un espejo convexo", correct: true },
            { text: "Un espejo plano", correct: false },
            { text: "Un lente telescópico", correct: false }
        ]
    },
    {
        question: "¿Qué espejo usamos para maquillarnos y vernos gigantes al derecho?",
        answers: [
            { text: "Convexo (Lejos del foco)", correct: false },
            { text: "Cóncavo (Muy cerca del espejo, dentro del foco)", correct: true },
            { text: "Plano (A 1 metro)", correct: false },
            { text: "Ninguno, es imposible", correct: false }
        ]
    },
    {
        question: "En la ecuación de espejos 1/f = 1/do + 1/di, ¿Qué significa 'di'?",
        answers: [
            { text: "Diámetro interno", correct: false },
            { text: "Distancia focal", correct: false },
            { text: "Distancia de la imagen", correct: true },
            { text: "Dirección de la incidencia", correct: false }
        ]
    },
    {
        question: "Geométricamente, ¿qué pasa si pones una bombilla exactamente en el Foco de un espejo cóncavo?",
        answers: [
            { text: "La bombilla se rompe", correct: false },
            { text: "Los rayos salen paralelos y no se forma imagen (Linterna)", correct: true },
            { text: "La luz se vuelve láser", correct: false },
            { text: "Se proyecta una imagen real diminuta", correct: false }
        ]
    },
    {
        question: "¿Por qué los retrovisores derechos dicen 'los objetos están más cerca de lo que aparentan'?",
        answers: [
            { text: "Porque el cristal es muy grueso", correct: false },
            { text: "Porque son cóncavos", correct: false },
            { text: "Porque la luz viaja más lento ahí", correct: false },
            { text: "Porque son convexos y reducen el tamaño de la imagen", correct: true }
        ]
    },
    {
        question: "El punto matemático donde todos los rayos de luz paralelos cruzan tras chocar en un espejo cóncavo es:",
        answers: [
            { text: "El Centro de Curvatura", correct: false },
            { text: "El Vértice", correct: false },
            { text: "El Foco", correct: true },
            { text: "El Eje Principal", correct: false }
        ]
    },
    {
        question: "Si te miras en la parte HUNDIDA de una cuchara desde tu brazo extendido, te ves:",
        answers: [
            { text: "De cabeza (Imagen Real)", correct: true },
            { text: "Derecho (Imagen Virtual)", correct: false },
            { text: "Invisible (No hay reflejo)", correct: false },
            { text: "Cuadrado", correct: false }
        ]
    },
    {
        question: "¿Qué tipo de imagen se puede proyectar físicamente sobre una pantalla o una pared blanca?",
        answers: [
            { text: "Imagen Virtual", correct: false },
            { text: "Imagen Real", correct: true },
            { text: "Imagen Divergente", correct: false },
            { text: "Imagen Caleidoscópica", correct: false }
        ]
    }
];

// --- FUNCIONES ESPECÍFICAS PARA SESIÓN 32 ---
function startQuiz32() {
    quizStart.classList.add('hidden');
    quizResults.classList.add('hidden');
    quizGame.classList.remove('hidden');
    
    // Mezcla de preguntas específicas de sesión 32
    shuffledQuestions = questionDatabase32.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    currentScore = 0;
    
    updateHUD();
    loadQuestion();
}

function showFinalResults32() {
    quizGame.classList.add('hidden');
    quizResults.classList.remove('hidden');
    document.getElementById('final-score-text').innerText = `${currentScore} PUNTOS DE FOCO`;
}

function resetQuiz32() {
    startQuiz32();
}
/* =========================================================
   SESIÓN 33: LÓGICA DE INTERACTIVIDAD (REFRACCIÓN)
========================================================= */

// --- SEGURIDAD: DESBLOQUEO DE NOTAS PEDAGÓGICAS ---
function unlockTeacherMode33() {
    const code = prompt("Ingrese el PIN de seguridad docente (1983) para revelar las notas de Física:");
    if (code === "1983") {
        alert("Modo Maestro validado. Desplegando tips geométricos y pedagógicos.");
        const notes = document.querySelectorAll('.teacher-note-33');
        notes.forEach(note => {
            note.classList.remove('hidden');
        });
        document.getElementById('btn-teacher-33').style.display = 'none';
    } else if (code !== null) {
        alert("Código incorrecto. Acceso denegado.");
    }
}

// --- LÓGICA DEL QUIZ (Estilo Kahoot para Refracción) ---
const quizStart33 = document.getElementById('quiz-start-33');
const quizGame33 = document.getElementById('quiz-game-33');
const quizResults33 = document.getElementById('quiz-results-33');
const questionTitle33 = document.getElementById('question-title-33');
const answerButtons33 = document.getElementById('answer-buttons-33');
const btnNext33 = document.getElementById('btn-next-33');
const scoreTracker33 = document.getElementById('score-tracker-33');
const questionProgress33 = document.getElementById('question-progress-33');

let shuffledQs33 = [];
let currentQIndex33 = 0;
let currentScore33 = 0;

// Base de Datos de Preguntas: Sesión 33
const questionDatabase33 = [
    {
        question: "¿Qué fenómeno describe el cambio de velocidad y dirección de la luz al pasar de un medio a otro?",
        answers: [
            { text: "Reflexión", correct: false },
            { text: "Refracción", correct: true },
            { text: "Difracción", correct: false },
            { text: "Dispersión", correct: false }
        ]
    },
    {
        question: "¿Cuál es la fórmula para calcular el Índice de Refracción (n)?",
        answers: [
            { text: "n = c / v", correct: true },
            { text: "n = m * a", correct: false },
            { text: "n = v / c", correct: false },
            { text: "n = sin(i) / cos(r)", correct: false }
        ]
    },
    {
        question: "¿Cuál es el valor del índice de refracción de la luz en el vacío perfecto?",
        answers: [
            { text: "0", correct: false },
            { text: "300,000", correct: false },
            { text: "1", correct: true },
            { text: "1.33", correct: false }
        ]
    },
    {
        question: "Si la luz pasa de un medio rápido (aire) a uno lento (agua), el rayo refractado...",
        answers: [
            { text: "Se aleja de la normal", correct: false },
            { text: "Se acerca a la línea normal", correct: true },
            { text: "Sigue en línea recta perfecta", correct: false },
            { text: "Rebota completamente", correct: false }
        ]
    },
    {
        question: "La Ley de Snell relaciona algebraicamente los índices de refracción usando la función trigonométrica:",
        answers: [
            { text: "Seno (sin)", correct: true },
            { text: "Coseno (cos)", correct: false },
            { text: "Tangente (tan)", correct: false },
            { text: "Secante (sec)", correct: false }
        ]
    },
    {
        question: "¿Por qué un lápiz metido en un vaso de cristal con agua parece estar 'roto'?",
        answers: [
            { text: "Por el aumento del tamaño de las moléculas", correct: false },
            { text: "Porque el agua actúa como un espejo plano", correct: false },
            { text: "Por la diferencia del índice de refracción entre aire y agua", correct: true },
            { text: "Es una ilusión óptica de la retina", correct: false }
        ]
    },
    {
        question: "El diamante tiene un índice n = 2.42. ¿Qué significa esto para la luz que entra en él?",
        answers: [
            { text: "Que viaja más rápido que en el vacío", correct: false },
            { text: "Que se frena significativamente (viaja muy lento)", correct: true },
            { text: "Que absorbe todos los colores", correct: false },
            { text: "Que no sufre refracción", correct: false }
        ]
    },
    {
        question: "En la ecuación de Snell, ¿Desde dónde se deben medir siempre los ángulos θ1 y θ2?",
        answers: [
            { text: "Desde la superficie que divide los medios", correct: false },
            { text: "Desde el rayo opuesto", correct: false },
            { text: "Desde la línea imaginaria NORMAL", correct: true },
            { text: "Desde el centro de la tierra", correct: false }
        ]
    },
    {
        question: "Los espejismos en la carretera (ver un charco falso) se deben a cambios de refracción provocados por:",
        answers: [
            { text: "La diferencia de temperatura del aire cerca del asfalto", correct: true },
            { text: "El agua evaporada en el pavimento", correct: false },
            { text: "El reflejo del sol en los espejos convexos", correct: false },
            { text: "Las nubes", correct: false }
        ]
    },
    {
        question: "Si sumerjo un cristal de n=1.5 en un líquido que también tiene n=1.5, ¿Qué pasará?",
        answers: [
            { text: "El cristal se rompe", correct: false },
            { text: "Brillará el doble", correct: false },
            { text: "Habrá reflexión total interna", correct: false },
            { text: "La luz no se dobla, el cristal parece INVISIBLE", correct: true }
        ]
    }
];

function startQuiz33() {
    quizStart33.classList.add('hidden');
    quizResults33.classList.add('hidden');
    quizGame33.classList.remove('hidden');
    
    // Aleatorizar orden de preguntas
    shuffledQs33 = questionDatabase33.sort(() => Math.random() - 0.5);
    currentQIndex33 = 0;
    currentScore33 = 0;
    
    updateHUD33();
    loadQuestion33();
}

function loadQuestion33() {
    resetState33();
    showQuestion33(shuffledQs33[currentQIndex33]);
}

function showQuestion33(qObj) {
    questionTitle33.innerText = qObj.question;
    questionProgress33.innerText = `Fotón ${currentQIndex33 + 1} / 10`;
    
    // Aleatorizar orden de respuestas
    const shuffledAnswers = qObj.answers.sort(() => Math.random() - 0.5);
    
    shuffledAnswers.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerText = answer.text;
        btn.classList.add('btn-answer');
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', selectAnswer33);
        answerButtons33.appendChild(btn);
    });
}

function resetState33() {
    btnNext33.classList.add('hidden');
    while (answerButtons33.firstChild) {
        answerButtons33.removeChild(answerButtons33.firstChild);
    }
}

function selectAnswer33(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    
    if (isCorrect) {
        currentScore33 += 1000; // Puntos estilo Kahoot
        updateHUD33();
    }

    // Feedback visual
    Array.from(answerButtons33.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
        button.disabled = true; // Bloqueo anti-trampa
    });

    if (shuffledQs33.length > currentQIndex33 + 1) {
        btnNext33.classList.remove('hidden');
    } else {
        setTimeout(showFinalResults33, 1800); // Retraso final visual
    }
}

function nextQuestion33() {
    currentQIndex33++;
    loadQuestion33();
}

function updateHUD33() {
    scoreTracker33.innerText = `Puntos: ${currentScore33}`;
}

function showFinalResults33() {
    quizGame33.classList.add('hidden');
    quizResults33.classList.remove('hidden');
    document.getElementById('final-score-text-33').innerText = `${currentScore33} PUNTOS DE REFRACCIÓN`;
}

function resetQuiz33() {
    startQuiz33();
}
/* =========================================================
   SESIÓN 34: LÓGICA DE INTERACTIVIDAD (LENTES)
   Agrega este código al final de tu archivo script.js.
========================================================= */

// --- SEGURIDAD: DESBLOQUEO DE NOTAS PEDAGÓGICAS ---
function unlockTeacherMode34() {
    const code = prompt("Ingrese el PIN de seguridad docente (1983) para revelar las notas geométricas:");
    if (code === "1983") {
        alert("Modo Maestro validado. Desplegando Ecuaciones y Tips.");
        const notes = document.querySelectorAll('.teacher-note-34');
        notes.forEach(note => {
            note.classList.remove('hidden');
        });
        document.getElementById('btn-teacher-34').style.display = 'none';
    } else if (code !== null) {
        alert("Código incorrecto. Acceso denegado.");
    }
}

// --- LÓGICA DEL QUIZ (Estilo Kahoot para Lentes) ---
const quizStart34 = document.getElementById('quiz-start-34');
const quizGame34 = document.getElementById('quiz-game-34');
const quizResults34 = document.getElementById('quiz-results-34');
const questionTitle34 = document.getElementById('question-title-34');
const answerButtons34 = document.getElementById('answer-buttons-34');
const btnNext34 = document.getElementById('btn-next-34');
const scoreTracker34 = document.getElementById('score-tracker-34');
const questionProgress34 = document.getElementById('question-progress-34');

let shuffledQs34 = [];
let currentQIndex34 = 0;
let currentScore34 = 0;

// Base de Datos de Preguntas: Sesión 34
const questionDatabase34 = [
    {
        question: "¿Cuál es la característica física principal de una lente convergente?",
        answers: [
            { text: "Es más gruesa en los bordes que en el centro", correct: false },
            { text: "Es más gruesa en el centro que en los bordes", correct: true },
            { text: "Es completamente plana", correct: false },
            { text: "No refracta la luz", correct: false }
        ]
    },
    {
        question: "Las lentes que usamos para encender fuego con el sol (Lupas) son de tipo:",
        answers: [
            { text: "Divergente", correct: false },
            { text: "Plana", correct: false },
            { text: "Convergente", correct: true },
            { text: "Espejo Cóncavo", correct: false }
        ]
    },
    {
        question: "Una lente divergente (bicóncava) SIEMPRE forma imágenes con estas características:",
        answers: [
            { text: "Virtuales, derechas y más pequeñas", correct: true },
            { text: "Reales, invertidas y gigantes", correct: false },
            { text: "Virtuales, de cabeza y del mismo tamaño", correct: false },
            { text: "Reales, derechas y pequeñas", correct: false }
        ]
    },
    {
        question: "¿Qué tipo de lente se utiliza para corregir la Miopía?",
        answers: [
            { text: "Lente Convergente", correct: false },
            { text: "Lente Divergente", correct: true },
            { text: "Prisma Triangular", correct: false },
            { text: "Espejo Convexo", correct: false }
        ]
    },
    {
        question: "¿En qué unidad se mide el 'Poder' óptico de una lente (P = 1/f)?",
        answers: [
            { text: "Newtons", correct: false },
            { text: "Metros", correct: false },
            { text: "Dioptrías", correct: true },
            { text: "Candelas", correct: false }
        ]
    },
    {
        question: "Si la receta de tus lentes dice '+3.00 D', ¿Qué tipo de cristal necesitas?",
        answers: [
            { text: "Una lente convergente (positiva)", correct: true },
            { text: "Una lente divergente (negativa)", correct: false },
            { text: "Un cristal oscuro de sol", correct: false },
            { text: "Un espejo plano", correct: false }
        ]
    },
    {
        question: "Geométricamente, el rayo de luz que pasa exactamente por el Centro Óptico de la lente...",
        answers: [
            { text: "Se desvía hacia el Foco", correct: false },
            { text: "Rebota hacia atrás", correct: false },
            { text: "Pasa en línea recta sin desviarse", correct: true },
            { text: "Se divide en 7 colores", correct: false }
        ]
    },
    {
        question: "En las lentes Divergentes, la distancia focal (f) en las ecuaciones siempre se toma como:",
        answers: [
            { text: "Positiva (+)", correct: false },
            { text: "Negativa (-)", correct: true },
            { text: "Cero (0)", correct: false },
            { text: "Infinita", correct: false }
        ]
    },
    {
        question: "El cristalino de nuestro ojo actúa como una lente biológica de tipo:",
        answers: [
            { text: "Divergente", correct: false },
            { text: "Convergente", correct: true },
            { text: "Cilíndrica", correct: false },
            { text: "Cóncava", correct: false }
        ]
    },
    {
        question: "¿De qué factores depende la 'Ecuación del Fabricante de Lentes' para crear un foco?",
        answers: [
            { text: "Solo de la temperatura del vidrio", correct: false },
            { text: "De la gravedad y la presión atmosférica", correct: false },
            { text: "Del índice de refracción del material y el radio de sus curvas", correct: true },
            { text: "Del color de la luz que la atraviesa", correct: false }
        ]
    }
];

function startQuiz34() {
    quizStart34.classList.add('hidden');
    quizResults34.classList.add('hidden');
    quizGame34.classList.remove('hidden');
    
    // Aleatorizar preguntas
    shuffledQs34 = questionDatabase34.sort(() => Math.random() - 0.5);
    currentQIndex34 = 0;
    currentScore34 = 0;
    
    updateHUD34();
    loadQuestion34();
}

function loadQuestion34() {
    resetState34();
    showQuestion34(shuffledQs34[currentQIndex34]);
}

function showQuestion34(qObj) {
    questionTitle34.innerText = qObj.question;
    questionProgress34.innerText = `Prueba ${currentQIndex34 + 1} / 10`;
    
    // Aleatorizar respuestas (usamos la misma clase genérica 'btn-answer' de tus CSS Kahoot)
    const shuffledAnswers = qObj.answers.sort(() => Math.random() - 0.5);
    
    shuffledAnswers.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerText = answer.text;
        btn.classList.add('btn-answer'); 
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', selectAnswer34);
        answerButtons34.appendChild(btn);
    });
}

function resetState34() {
    btnNext34.classList.add('hidden');
    while (answerButtons34.firstChild) {
        answerButtons34.removeChild(answerButtons34.firstChild);
    }
}

function selectAnswer34(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    
    if (isCorrect) {
        currentScore34 += 1000;
        updateHUD34();
    }

    // Feedback visual (colores Kahoot manejados por tu CSS base)
    Array.from(answerButtons34.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
        button.disabled = true; // Bloqueo de clics
    });

    if (shuffledQs34.length > currentQIndex34 + 1) {
        btnNext34.classList.remove('hidden');
    } else {
        setTimeout(showFinalResults34, 1800);
    }
}

function nextQuestion34() {
    currentQIndex34++;
    loadQuestion34();
}

function updateHUD34() {
    scoreTracker34.innerText = `Puntos: ${currentScore34}`;
}

function showFinalResults34() {
    quizGame34.classList.add('hidden');
    quizResults34.classList.remove('hidden');
    document.getElementById('final-score-text-34').innerText = `${currentScore34} PUNTOS FOCALES`;
}

function resetQuiz34() {
    startQuiz34();
}
/* =========================================================
   SESIÓN 35: LÓGICA DE INTERACTIVIDAD (INSTRUMENTOS ÓPTICOS)
   Agrega este código al final de tu archivo script.js.
========================================================= */

// --- SEGURIDAD: DESBLOQUEO DE NOTAS PEDAGÓGICAS ---
function unlockTeacherMode35() {
    const code = prompt("Ingrese el PIN de seguridad docente (1983) para revelar las notas de Física Avanzada:");
    if (code === "1983") {
        alert("Modo Maestro 35 validado. Desplegando Tips Clínicos y Astronómicos.");
        const notes = document.querySelectorAll('.teacher-note-35');
        notes.forEach(note => {
            note.classList.remove('hidden');
        });
        document.getElementById('btn-teacher-35').style.display = 'none';
    } else if (code !== null) {
        alert("Código incorrecto. Acceso denegado.");
    }
}

// --- LÓGICA DEL QUIZ (Estilo Kahoot para Instrumentos) ---
const quizStart35 = document.getElementById('quiz-start-35');
const quizGame35 = document.getElementById('quiz-game-35');
const quizResults35 = document.getElementById('quiz-results-35');
const questionTitle35 = document.getElementById('question-title-35');
const answerButtons35 = document.getElementById('answer-buttons-35');
const btnNext35 = document.getElementById('btn-next-35');
const scoreTracker35 = document.getElementById('score-tracker-35');
const questionProgress35 = document.getElementById('question-progress-35');

let shuffledQs35 = [];
let currentQIndex35 = 0;
let currentScore35 = 0;

// Base de Datos de Preguntas: Sesión 35
const questionDatabase35 = [
    {
        question: "Geométricamente, ¿qué tipo de lente es el cristalino del ojo humano sano?",
        answers: [
            { text: "Lente Divergente", correct: false },
            { text: "Espejo Convexo", correct: false },
            { text: "Lente Convergente", correct: true },
            { text: "Prisma Cuadrado", correct: false }
        ]
    },
    {
        question: "¿Cómo se proyecta originalmente la imagen física sobre la retina de nuestro ojo?",
        answers: [
            { text: "Derecha y más grande", correct: false },
            { text: "De cabeza (invertida) y más pequeña", correct: true },
            { text: "Virtual y del mismo tamaño", correct: false },
            { text: "En blanco y negro exclusivamente", correct: false }
        ]
    },
    {
        question: "¿Qué combinación de lentes utiliza un Microscopio Compuesto?",
        answers: [
            { text: "Dos lentes convergentes (Objetivo y Ocular)", correct: true },
            { text: "Un lente divergente y un espejo plano", correct: false },
            { text: "Dos lentes divergentes", correct: false },
            { text: "Un espejo cóncavo y un prisma", correct: false }
        ]
    },
    {
        question: "Si el objetivo de un microscopio amplía 40X y el ocular 10X, la magnificación total es:",
        answers: [
            { text: "50X (Se suman)", correct: false },
            { text: "400X (Se multiplican)", correct: true },
            { text: "30X (Se restan)", correct: false },
            { text: "4X (Se dividen)", correct: false }
        ]
    },
    {
        question: "La Miopía hace que el ojo enfoque la luz antes de la retina. Se corrige utilizando:",
        answers: [
            { text: "Lentes Convergentes", correct: false },
            { text: "Lentes Divergentes", correct: true },
            { text: "Lentes de contacto opacos", correct: false },
            { text: "Cirugía láser en el nervio óptico", correct: false }
        ]
    },
    {
        question: "Un Telescopio Refractor (como el de Galileo) utiliza ____ para recolectar la luz estelar.",
        answers: [
            { text: "Un espejo cóncavo", correct: false },
            { text: "Paneles solares", correct: false },
            { text: "Un lente de cristal convergente gigante", correct: true },
            { text: "Un espejo convexo", correct: false }
        ]
    },
    {
        question: "Un Telescopio Reflector (como el de Newton o el James Webb) utiliza ____ para recolectar luz.",
        answers: [
            { text: "Un espejo cóncavo parabólico", correct: true },
            { text: "Exclusivamente lentes de cristal", correct: false },
            { text: "Fibra óptica", correct: false },
            { text: "Lentes divergentes", correct: false }
        ]
    },
    {
        question: "¿Cómo funciona el proceso biológico de la 'Acomodación' visual?",
        answers: [
            { text: "El iris cambia de color", correct: false },
            { text: "El ojo se mueve hacia adelante y atrás", correct: false },
            { text: "Los músculos ciliares deforman el cristalino para cambiar su distancia focal", correct: true },
            { text: "La retina se oscurece", correct: false }
        ]
    },
    {
        question: "En un instrumento óptico, ¿cuál es el factor MÁS importante para la nitidez astronómica?",
        answers: [
            { text: "El aumento numérico de las lentes", correct: false },
            { text: "El largo del tubo", correct: false },
            { text: "El diámetro (apertura) del lente o espejo principal", correct: true },
            { text: "El color exterior del equipo", correct: false }
        ]
    },
    {
        question: "¿Qué elemento del ojo funciona de manera análoga al diafragma mecánico de una cámara fotográfica?",
        answers: [
            { text: "El nervio óptico", correct: false },
            { text: "La pupila / iris (regulando la luz)", correct: true },
            { text: "La retina", correct: false },
            { text: "El humor vítreo", correct: false }
        ]
    }
];

function startQuiz35() {
    quizStart35.classList.add('hidden');
    quizResults35.classList.add('hidden');
    quizGame35.classList.remove('hidden');
    
    // Aleatorizar preguntas de astronomía y biología
    shuffledQs35 = questionDatabase35.sort(() => Math.random() - 0.5);
    currentQIndex35 = 0;
    currentScore35 = 0;
    
    updateHUD35();
    loadQuestion35();
}

function loadQuestion35() {
    resetState35();
    showQuestion35(shuffledQs35[currentQIndex35]);
}

function showQuestion35(qObj) {
    questionTitle35.innerText = qObj.question;
    questionProgress35.innerText = `Lente ${currentQIndex35 + 1} / 10`;
    
    // Aleatorizar respuestas (reutilizando clase base btn-answer)
    const shuffledAnswers = qObj.answers.sort(() => Math.random() - 0.5);
    
    shuffledAnswers.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerText = answer.text;
        btn.classList.add('btn-answer'); 
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', selectAnswer35);
        answerButtons35.appendChild(btn);
    });
}

function resetState35() {
    btnNext35.classList.add('hidden');
    while (answerButtons35.firstChild) {
        answerButtons35.removeChild(answerButtons35.firstChild);
    }
}

function selectAnswer35(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    
    if (isCorrect) {
        currentScore35 += 1000;
        updateHUD35();
    }

    // Feedback visual (clases genéricas .correct y .wrong que ya existen en tu style.css)
    Array.from(answerButtons35.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
        button.disabled = true; // Bloqueo interactivo
    });

    if (shuffledQs35.length > currentQIndex35 + 1) {
        btnNext35.classList.remove('hidden');
    } else {
        setTimeout(showFinalResults35, 1800);
    }
}

function nextQuestion35() {
    currentQIndex35++;
    loadQuestion35();
}

function updateHUD35() {
    scoreTracker35.innerText = `Puntos: ${currentScore35}`;
}

function showFinalResults35() {
    quizGame35.classList.add('hidden');
    quizResults35.classList.remove('hidden');
    document.getElementById('final-score-text-35').innerText = `${currentScore35} PUNTOS DE RESOLUCIÓN`;
}

function resetQuiz35() {
    startQuiz35();
}
/* =========================================================
   SESIÓN 36: LÓGICA DE INTERACTIVIDAD (DISPERSIÓN/POLARIZACIÓN)
   Agrega este código al final de tu archivo script.js.
========================================================= */

// --- SEGURIDAD DOCENTE ---
function unlockTeacherMode36() {
    const code = prompt("Ingrese el PIN de seguridad docente (1983) para revelar las notas de Óptica Geométrica:");
    if (code === "1983") {
        alert("Modo Maestro 36 validado. Desplegando Analogías y Tips.");
        const notes = document.querySelectorAll('.teacher-note-36');
        notes.forEach(note => {
            note.classList.remove('hidden');
        });
        document.getElementById('btn-teacher-36').style.display = 'none';
    } else if (code !== null) {
        alert("Código incorrecto. Acceso denegado.");
    }
}

// --- LÓGICA DEL QUIZ (Estilo Kahoot para Sesión 36) ---
const quizStart36 = document.getElementById('quiz-start-36');
const quizGame36 = document.getElementById('quiz-game-36');
const quizResults36 = document.getElementById('quiz-results-36');
const questionTitle36 = document.getElementById('question-title-36');
const answerButtons36 = document.getElementById('answer-buttons-36');
const btnNext36 = document.getElementById('btn-next-36');
const scoreTracker36 = document.getElementById('score-tracker-36');
const questionProgress36 = document.getElementById('question-progress-36');

let shuffledQs36 = [];
let currentQIndex36 = 0;
let currentScore36 = 0;

// Base de Datos de Preguntas: Sesión 36
const questionDatabase36 = [
    {
        question: "¿Qué es el fenómeno de Dispersión Cromática?",
        answers: [
            { text: "La absorción total de la luz por un objeto negro", correct: false },
            { text: "El rebote de la luz en un espejo cóncavo", correct: false },
            { text: "La separación de la luz blanca en los colores del arcoíris", correct: true },
            { text: "La filtración de la luz en un solo plano", correct: false }
        ]
    },
    {
        question: "Al pasar luz blanca por un prisma, ¿qué color (onda corta) se frena más y se dobla con mayor ángulo?",
        answers: [
            { text: "El Rojo", correct: false },
            { text: "El Violeta", correct: true },
            { text: "El Verde", correct: false },
            { text: "El Amarillo", correct: false }
        ]
    },
    {
        question: "¿Qué científico famoso utilizó un prisma de cristal para demostrar que la luz blanca está compuesta de colores?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Isaac Newton", correct: true },
            { text: "Thomas Edison", correct: false }
        ]
    },
    {
        question: "¿Qué procesos físicos ocurren dentro de una gota de lluvia para crear un arcoíris primario?",
        answers: [
            { text: "Refracción, Reflexión Interna y Refracción", correct: true },
            { text: "Polarización y Difracción", correct: false },
            { text: "Absorción térmica", correct: false },
            { text: "Reflexión directa únicamente", correct: false }
        ]
    },
    {
        question: "Si ves un arcoíris brillante frente a ti, ¿En qué posición geométrica debe estar el Sol?",
        answers: [
            { text: "Justo encima de tu cabeza (Cenit)", correct: false },
            { text: "Exactamente a tus espaldas", correct: true },
            { text: "A un lado tuyo (90 grados)", correct: false },
            { text: "Frente a ti, detrás del arcoíris", correct: false }
        ]
    },
    {
        question: "Al poner un CD a la luz, vemos un arcoíris. Esto se debe a que las pistas del CD actúan como:",
        answers: [
            { text: "Un polarizador", correct: false },
            { text: "Un filtro de densidad neutra", correct: false },
            { text: "Una Red de Difracción", correct: true },
            { text: "Un espejo convexo", correct: false }
        ]
    },
    {
        question: "¿Qué es la Polarización de la Luz?",
        answers: [
            { text: "Cambiar el color de la luz con un láser", correct: false },
            { text: "Filtrar las ondas de luz para que vibren en un solo plano", correct: true },
            { text: "Aumentar la velocidad de los fotones", correct: false },
            { text: "Romper la luz en un prisma", correct: false }
        ]
    },
    {
        question: "¿Por qué los lentes de sol polarizados ayudan a manejar mejor?",
        answers: [
            { text: "Porque oscurecen todos los colores por igual", correct: false },
            { text: "Porque son lentes divergentes", correct: false },
            { text: "Porque tienen aumento", correct: false },
            { text: "Porque bloquean el reflejo (luz polarizada horizontalmente) del asfalto", correct: true }
        ]
    },
    {
        question: "Si tomas dos filtros polarizadores y los cruzas perpendicularmente (a 90 grados), ¿Qué sucede?",
        answers: [
            { text: "La luz se vuelve arcoíris", correct: false },
            { text: "La luz se amplifica", correct: false },
            { text: "Se bloquea el 100% de la luz (se ve negro)", correct: true },
            { text: "No pasa nada", correct: false }
        ]
    },
    {
        question: "El hecho de que la luz pueda ser polarizada demuestra geométricamente que la luz viaja como una onda:",
        answers: [
            { text: "Transversal (vibra perpendicular al avance)", correct: true },
            { text: "Sonora", correct: false },
            { text: "Longitudinal (tipo resorte)", correct: false },
            { text: "Acuática", correct: false }
        ]
    }
];

function startQuiz36() {
    quizStart36.classList.add('hidden');
    quizResults36.classList.add('hidden');
    quizGame36.classList.remove('hidden');
    
    // Aleatorizar orden de preguntas
    shuffledQs36 = questionDatabase36.sort(() => Math.random() - 0.5);
    currentQIndex36 = 0;
    currentScore36 = 0;
    
    updateHUD36();
    loadQuestion36();
}

function loadQuestion36() {
    resetState36();
    showQuestion36(shuffledQs36[currentQIndex36]);
}

function showQuestion36(qObj) {
    questionTitle36.innerText = qObj.question;
    questionProgress36.innerText = `Onda ${currentQIndex36 + 1} / 10`;
    
    // Aleatorizar respuestas (reutilizando clase base 'btn-answer' general de tu CSS)
    const shuffledAnswers = qObj.answers.sort(() => Math.random() - 0.5);
    
    shuffledAnswers.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerText = answer.text;
        btn.classList.add('btn-answer'); 
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', selectAnswer36);
        answerButtons36.appendChild(btn);
    });
}

function resetState36() {
    btnNext36.classList.add('hidden');
    while (answerButtons36.firstChild) {
        answerButtons36.removeChild(answerButtons36.firstChild);
    }
}

function selectAnswer36(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    
    if (isCorrect) {
        currentScore36 += 1000;
        updateHUD36();
    }

    // Feedback visual (clases genéricas .correct y .wrong de Kahoot de tus otras sesiones)
    Array.from(answerButtons36.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
        button.disabled = true; // Bloqueo interactivo
    });

    if (shuffledQs36.length > currentQIndex36 + 1) {
        btnNext36.classList.remove('hidden');
    } else {
        setTimeout(showFinalResults36, 1800);
    }
}

function nextQuestion36() {
    currentQIndex36++;
    loadQuestion36();
}

function updateHUD36() {
    scoreTracker36.innerText = `Puntos: ${currentScore36}`;
}

function showFinalResults36() {
    quizGame36.classList.add('hidden');
    quizResults36.classList.remove('hidden');
    document.getElementById('final-score-text-36').innerText = `${currentScore36} PUNTOS ESPECTRALES`;
}

function resetQuiz36() {
    startQuiz36();
}
/* =========================================================
   SESIÓN 37: LÓGICA DE INTERACTIVIDAD (PROYECTO INTEGRADOR)
   Agrega este código al final de tu archivo script.js.
========================================================= */

// --- SEGURIDAD: DESBLOQUEO DOCENTE ---
function unlockTeacherMode37() {
    const code = prompt("Ingrese el PIN de seguridad docente (1983) para revelar rúbricas y tips de prototipado:");
    if (code === "1983") {
        alert("Modo Maestro 37 validado. Desplegando metodología Maker.");
        const notes = document.querySelectorAll('.teacher-note-37');
        notes.forEach(note => {
            note.classList.remove('hidden');
        });
        document.getElementById('btn-teacher-37').style.display = 'none';
    } else if (code !== null) {
        alert("Código incorrecto. Acceso denegado al laboratorio.");
    }
}

// --- LÓGICA DEL QUIZ (Estilo Kahoot para Sesión 37) ---
const quizStart37 = document.getElementById('quiz-start-37');
const quizGame37 = document.getElementById('quiz-game-37');
const quizResults37 = document.getElementById('quiz-results-37');
const questionTitle37 = document.getElementById('question-title-37');
const answerButtons37 = document.getElementById('answer-buttons-37');
const btnNext37 = document.getElementById('btn-next-37');
const scoreTracker37 = document.getElementById('score-tracker-37');
const questionProgress37 = document.getElementById('question-progress-37');

let shuffledQs37 = [];
let currentQIndex37 = 0;
let currentScore37 = 0;

// Base de Datos de Preguntas: Sesión 37
const questionDatabase37 = [
    {
        question: "En un proyecto acústico (ej. una guitarra casera), ¿Qué define si el sonido es grave o agudo?",
        answers: [
            { text: "El tamaño de la caja", correct: false },
            { text: "La amplitud de la onda (volumen)", correct: false },
            { text: "La frecuencia de la vibración", correct: true },
            { text: "El color de las cuerdas", correct: false }
        ]
    },
    {
        question: "Para construir un Periscopio funcional y desviar la luz 90 grados, los espejos planos deben colocarse a:",
        answers: [
            { text: "90 grados", correct: false },
            { text: "45 grados", correct: true },
            { text: "180 grados", correct: false },
            { text: "60 grados", correct: false }
        ]
    },
    {
        question: "¿Qué papel juega la 'Caja de Resonancia' en un instrumento musical de cuerda?",
        answers: [
            { text: "Afinar las cuerdas automáticamente", correct: false },
            { text: "Hacer que la onda de luz rebote", correct: false },
            { text: "Amplificar las ondas mecánicas generadas por la cuerda", correct: true },
            { text: "Reducir el eco del sonido", correct: false }
        ]
    },
    {
        question: "¿Cuál es la principal diferencia entre construir un proyecto acústico y uno óptico?",
        answers: [
            { text: "La acústica manipula ondas electromagnéticas, la óptica no.", correct: false },
            { text: "El sonido necesita un medio material para viajar, la luz no.", correct: true },
            { text: "La luz vibra más lento que el sonido.", correct: false },
            { text: "No hay diferencia física.", correct: false }
        ]
    },
    {
        question: "En un Caleidoscopio, ¿Qué fenómeno físico genera los múltiples patrones geométricos?",
        answers: [
            { text: "Reflexión múltiple", correct: true },
            { text: "Refracción de la luz", correct: false },
            { text: "Dispersión cromática", correct: false },
            { text: "Difracción mecánica", correct: false }
        ]
    },
    {
        question: "Si construyes una flauta de PVC y quieres crear una nota más AGUDA, ¿Qué debes hacer?",
        answers: [
            { text: "Hacer el tubo más largo", correct: false },
            { text: "Pintar el tubo de negro", correct: false },
            { text: "Hacer el tubo más grueso", correct: false },
            { text: "Hacer el tubo más corto", correct: true }
        ]
    },
    {
        question: "¿Cuál es el primer paso metodológico al desarrollar un prototipo integrador en ciencias?",
        answers: [
            { text: "Comprar materiales costosos", correct: false },
            { text: "Pegar las piezas inmediatamente", correct: false },
            { text: "Bocetar, calcular y diseñar el concepto", correct: true },
            { text: "Copiar un video sin entenderlo", correct: false }
        ]
    },
    {
        question: "Si tu proyector casero de lupa arroja una imagen borrosa en la pared, el problema es:",
        answers: [
            { text: "Un error de calibración en la distancia focal", correct: true },
            { text: "Que la habitación está muy oscura", correct: false },
            { text: "Que el sonido interfiere con la luz", correct: false },
            { text: "Que las lentes no proyectan imágenes", correct: false }
        ]
    },
    {
        question: "Un 'Arpa Láser' es el proyecto integrador definitivo porque:",
        answers: [
            { text: "No necesita electricidad", correct: false },
            { text: "Integra luz (para los sensores) y sonido (el altavoz) simultáneamente", correct: true },
            { text: "Es imposible de construir", correct: false },
            { text: "Corta objetos con calor", correct: false }
        ]
    },
    {
        question: "¿Por qué en la metodología STEAM se valora que un prototipo inicial falle?",
        answers: [
            { text: "Porque significa que el profesor se equivocó", correct: false },
            { text: "Para castigar al alumno", correct: false },
            { text: "Porque invita a la 'iteración' (análisis, ajuste y rediseño)", correct: true },
            { text: "No se valora, el error es inaceptable", correct: false }
        ]
    }
];

function startQuiz37() {
    quizStart37.classList.add('hidden');
    quizResults37.classList.add('hidden');
    quizGame37.classList.remove('hidden');
    
    // Aleatorizar orden de preguntas
    shuffledQs37 = questionDatabase37.sort(() => Math.random() - 0.5);
    currentQIndex37 = 0;
    currentScore37 = 0;
    
    updateHUD37();
    loadQuestion37();
}

function loadQuestion37() {
    resetState37();
    showQuestion37(shuffledQs37[currentQIndex37]);
}

function showQuestion37(qObj) {
    questionTitle37.innerText = qObj.question;
    questionProgress37.innerText = `Fase ${currentQIndex37 + 1} / 10`;
    
    // Aleatorizar respuestas (usando la clase btn-answer base de tu CSS)
    const shuffledAnswers = qObj.answers.sort(() => Math.random() - 0.5);
    
    shuffledAnswers.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerText = answer.text;
        btn.classList.add('btn-answer'); 
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', selectAnswer37);
        answerButtons37.appendChild(btn);
    });
}

function resetState37() {
    btnNext37.classList.add('hidden');
    while (answerButtons37.firstChild) {
        answerButtons37.removeChild(answerButtons37.firstChild);
    }
}

function selectAnswer37(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    
    if (isCorrect) {
        currentScore37 += 1000;
        updateHUD37();
    }

    // Feedback visual (requiere las clases .correct y .wrong de tu CSS principal)
    Array.from(answerButtons37.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
        button.disabled = true; // Bloqueo interactivo
    });

    if (shuffledQs37.length > currentQIndex37 + 1) {
        btnNext37.classList.remove('hidden');
    } else {
        setTimeout(showFinalResults37, 1800);
    }
}

function nextQuestion37() {
    currentQIndex37++;
    loadQuestion37();
}

function updateHUD37() {
    scoreTracker37.innerText = `Puntos: ${currentScore37}`;
}

function showFinalResults37() {
    quizGame37.classList.add('hidden');
    quizResults37.classList.remove('hidden');
    document.getElementById('final-score-text-37').innerText = `${currentScore37} PUNTOS DE INGENIERÍA`;
}

function resetQuiz37() {
    startQuiz37();
}
/* =========================================================
   SESIÓN 38: LÓGICA DE INTERACTIVIDAD (PRESENTACIÓN)
   Anexar al final de tu archivo script.js.
========================================================= */

// --- SEGURIDAD: DESBLOQUEO DOCENTE ---
function unlockTeacherMode38() {
    const code = prompt("Ingrese el PIN de evaluación magistral (1983) para revelar tips de la Feria de Ciencias:");
    if (code === "1983") {
        alert("Modo Maestro 38 validado. Mostrando criterios de rúbrica y rúbrica de observación.");
        const notes = document.querySelectorAll('.teacher-note-38');
        notes.forEach(note => {
            note.classList.remove('hidden');
        });
        document.getElementById('btn-teacher-38').style.display = 'none';
    } else if (code !== null) {
        alert("Código incorrecto. Solo personal docente autorizado.");
    }
}

// --- LÓGICA DEL QUIZ (Estilo Kahoot para Sesión 38) ---
const quizStart38 = document.getElementById('quiz-start-38');
const quizGame38 = document.getElementById('quiz-game-38');
const quizResults38 = document.getElementById('quiz-results-38');
const questionTitle38 = document.getElementById('question-title-38');
const answerButtons38 = document.getElementById('answer-buttons-38');
const btnNext38 = document.getElementById('btn-next-38');
const scoreTracker38 = document.getElementById('score-tracker-38');
const questionProgress38 = document.getElementById('question-progress-38');

let shuffledQs38 = [];
let currentQIndex38 = 0;
let currentScore38 = 0;

// Base de Datos de Preguntas: Sesión 38
const questionDatabase38 = [
    {
        question: "¿Cuál es el objetivo principal de la Comunicación Científica en tu proyecto?",
        answers: [
            { text: "Ganar un premio de decoración", correct: false },
            { text: "Transmitir conceptos físicos de forma clara y estructurada", correct: true },
            { text: "Hablar rápido para que nadie pregunte", correct: false },
            { text: "Leer todo el reporte técnico en voz alta", correct: false }
        ]
    },
    {
        question: "¿Qué debe incluir el 'Traductor de Conceptos' al explicar un proyecto?",
        answers: [
            { text: "Solo palabras en latín", correct: false },
            { text: "Simplificación sin perder la veracidad científica", correct: true },
            { text: "Muchas bromas para que no sea aburrido", correct: false },
            { text: "Ocultar las partes que no funcionaron", correct: false }
        ]
    },
    {
        question: "Si tu prototipo falla durante la demostración en vivo, ¿qué debes hacer?",
        answers: [
            { text: "Llorar y salir del salón", correct: false },
            { text: "Culpar al material de mala calidad", correct: false },
            { text: "Explicar físicamente el error y cómo se solucionaría", correct: true },
            { text: "Fingir que sí funcionó", correct: false }
        ]
    },
    {
        question: "En la rúbrica de evaluación, ¿qué significa 'Dominio Conceptual'?",
        answers: [
            { text: "Traer el material más caro", correct: false },
            { text: "Poder explicar la matemática y física detrás del diseño", correct: true },
            { text: "Haber terminado el proyecto a tiempo", correct: false },
            { text: "Tener la mejor caligrafía", correct: false }
        ]
    },
    {
        question: "¿Qué herramienta visual ayuda a explicar el proyecto sin necesidad de hablar?",
        answers: [
            { text: "Un cronómetro", correct: false },
            { text: "Un Póster Científico con diagramas claros", correct: true },
            { text: "Una linterna apagada", correct: false },
            { text: "Una calculadora científica", correct: false }
        ]
    },
    {
        question: "¿Por qué es importante la 'Honestidad Intelectual' al presentar datos?",
        answers: [
            { text: "Porque el profesor te puede regañar", correct: false },
            { text: "Para validar que el método científico fue seguido correctamente", correct: true },
            { text: "Para que el proyecto se vea más largo", correct: false },
            { text: "No es importante en bachillerato", correct: false }
        ]
    },
    {
        question: "¿Qué función cumple la Co-evaluación (evaluación entre pares)?",
        answers: [
            { text: "Ayudar a los amigos a pasar", correct: false },
            { text: "Desarrollar el pensamiento crítico analizando el trabajo ajeno", correct: true },
            { text: "Hacerle el trabajo al profesor", correct: false },
            { text: "Competir para ver quién es mejor", correct: false }
        ]
    },
    {
        question: "¿Qué es el 'Efecto Demo' en una feria de ciencias?",
        answers: [
            { text: "Cuando el proyecto brilla mucho", correct: false },
            { text: "Cuando algo falla inesperadamente durante la presentación", correct: true },
            { text: "Un efecto óptico de refracción", correct: false },
            { text: "Cuando el público aplaude", correct: false }
        ]
    },
    {
        question: "¿Cuál es el tiempo ideal para un 'Elevator Pitch' de proyecto?",
        answers: [
            { text: "45 minutos", correct: false },
            { text: "60 segundos", correct: true },
            { text: "5 segundos", correct: false },
            { text: "Todo el día", correct: false }
        ]
    },
    {
        question: "Al final de la Sesión 38, el alumno debe ser capaz de:",
        answers: [
            { text: "Vender su prototipo", correct: false },
            { text: "Validar y defender su ingeniería ante una audiencia", correct: true },
            { text: "Comprar un telescopio profesional", correct: false },
            { text: "Memorizar el libro de texto", correct: false }
        ]
    }
];

function startQuiz38() {
    quizStart38.classList.add('hidden');
    quizResults38.classList.add('hidden');
    quizGame38.classList.remove('hidden');
    
    shuffledQs38 = questionDatabase38.sort(() => Math.random() - 0.5);
    currentQIndex38 = 0;
    currentScore38 = 0;
    
    updateHUD38();
    loadQuestion38();
}

function loadQuestion38() {
    resetState38();
    showQuestion38(shuffledQs38[currentQIndex38]);
}

function showQuestion38(qObj) {
    questionTitle38.innerText = qObj.question;
    questionProgress38.innerText = `Criterio ${currentQIndex38 + 1} / 10`;
    
    const shuffledAnswers = qObj.answers.sort(() => Math.random() - 0.5);
    
    shuffledAnswers.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerText = answer.text;
        btn.classList.add('btn-answer'); 
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', selectAnswer38);
        answerButtons38.appendChild(btn);
    });
}

function resetState38() {
    btnNext38.classList.add('hidden');
    while (answerButtons38.firstChild) {
        answerButtons38.removeChild(answerButtons38.firstChild);
    }
}

function selectAnswer38(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    
    if (isCorrect) {
        currentScore38 += 1000;
        updateHUD38();
    }

    Array.from(answerButtons38.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
        button.disabled = true;
    });

    if (shuffledQs38.length > currentQIndex38 + 1) {
        btnNext38.classList.remove('hidden');
    } else {
        setTimeout(showFinalResults38, 2000);
    }
}

function nextQuestion38() {
    currentQIndex38++;
    loadQuestion38();
}

function updateHUD38() {
    scoreTracker38.innerText = `Puntos: ${currentScore38}`;
}

function showFinalResults38() {
    quizGame38.classList.add('hidden');
    quizResults38.classList.remove('hidden');
    document.getElementById('final-score-text-38').innerText = `${currentScore38} PUNTOS DE GALA`;
}

function resetQuiz38() {
    startQuiz38();
}
