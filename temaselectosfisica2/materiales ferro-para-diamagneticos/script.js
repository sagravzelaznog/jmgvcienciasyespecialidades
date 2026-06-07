// Base de datos de preguntas
const quizData = [
	{
					question: "¿Qué material retiene fuertemente su magnetización?",
					answers: ["Paramagnético", "Diamagnético", "Ferromagnético", "Plástico"],
					correct: 2
	},
	{
					question: "¿Cuál es un ejemplo de material diamagnético usado en los bobinados del aerogenerador?",
					answers: ["Cobre", "Hierro", "Cobalto", "Aluminio"],
					correct: 0
	},
	{
					question: "Los materiales paramagnéticos se alinean con el campo externo de forma...",
					answers: ["Fuerte y permanente", "Débil y temporal", "Opuesta", "Aleatoria siempre"],
					correct: 1
	},
	{
					question: "Si la permeabilidad relativa (μr) es MENOR a 1, el material es:",
					answers: ["Ferromagnético", "Paramagnético", "Aislante", "Diamagnético"],
					correct: 3
	},
	{
					question: "¿Qué material usarías para construir el núcleo de un generador altamente eficiente?",
					answers: ["Agua", "Hierro", "Bismuto", "Aluminio"],
					correct: 1
	}
];

// Variables de estado
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;
const TIME_LIMIT = 15; // 15 segundos estilo Kahoot

// Elementos del DOM
const startScreen = document.getElementById('quiz-start');
const activeScreen = document.getElementById('quiz-active');
const feedbackScreen = document.getElementById('quiz-feedback');
const resultsScreen = document.getElementById('quiz-results');
const questionText = document.getElementById('question-text');
const answersGrid = document.getElementById('answers-grid');
const timerFill = document.getElementById('timer-fill');
const feedbackTitle = document.getElementById('feedback-title');

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	startScreen.classList.add('hidden');
	resultsScreen.classList.add('hidden');
	loadQuestion();
}

function loadQuestion() {
	feedbackScreen.classList.add('hidden');
	activeScreen.classList.remove('hidden');
	
	const currentQuizData = quizData[currentQuestionIndex];
	questionText.innerText = currentQuizData.question;
	
	// Limpiar botones anteriores
	answersGrid.innerHTML = '';
	
	// Generar botones de respuestas
	currentQuizData.answers.forEach((answer, index) => {
					const button = document.createElement('button');
					button.innerText = answer;
					button.classList.add('answer-btn', `ans-${index}`);
					button.onclick = () => selectAnswer(index);
					answersGrid.appendChild(button);
	});

	startTimer();
}

function startTimer() {
	timeLeft = TIME_LIMIT;
	updateTimerUI();
	
	timer = setInterval(() => {
					timeLeft--;
					updateTimerUI();
					
					if (timeLeft <= 0) {
									clearInterval(timer);
									showFeedback(-1); // -1 significa Time Out
					}
	}, 1000);
}

function updateTimerUI() {
	const percentage = (timeLeft / TIME_LIMIT) * 100;
	timerFill.style.width = `${percentage}%`;
	
	// Cambio psicológico de color del temporizador
	if (percentage > 50) timerFill.style.backgroundColor = 'var(--k-green)';
	else if (percentage > 25) timerFill.style.backgroundColor = 'var(--k-yellow)';
	else timerFill.style.backgroundColor = 'var(--k-red)';
}

function selectAnswer(selectedIndex) {
	clearInterval(timer);
	showFeedback(selectedIndex);
}

function showFeedback(selectedIndex) {
	activeScreen.classList.add('hidden');
	feedbackScreen.classList.remove('hidden');
	
	// Resetear clases de feedback
	feedbackScreen.className = '';
	
	const correctIndex = quizData[currentQuestionIndex].correct;
	
	if (selectedIndex === correctIndex) {
					score++;
					feedbackScreen.classList.add('feedback-correct');
					feedbackTitle.innerText = "¡CORRECTO! +1000 pts";
	} else if (selectedIndex === -1) {
					feedbackScreen.classList.add('feedback-timeout');
					feedbackTitle.innerText = "¡SE ACABÓ EL TIEMPO!";
	} else {
					feedbackScreen.classList.add('feedback-wrong');
					feedbackTitle.innerText = "¡INCORRECTO!";
	}
}

function nextQuestion() {
	currentQuestionIndex++;
	if (currentQuestionIndex < quizData.length) {
					loadQuestion();
	} else {
					showResults();
	}
}

function showResults() {
	feedbackScreen.classList.add('hidden');
	resultsScreen.classList.remove('hidden');
	
	const finalScoreText = document.getElementById('final-score');
	let message = "";
	
	if (score === 5) message = "¡Genio de los Aerogeneradores! Puntuación perfecta.";
	else if (score >= 3) message = "Gran trabajo, dominas los fundamentos magnéticos.";
	else message = "Necesitas repasar la polarización atómica. ¡Inténtalo de nuevo!";
	
	finalScoreText.innerHTML = `<strong>Aciertos: ${score} de 5</strong><br><br>${message}`;
}

function resetQuiz() {
	startQuiz();
}