// --- LÓGICA DEL PANEL DEL MAESTRO ---

function askTeacherCode() {
	const code = prompt("Introduzca el código de maestro para visualizar las notas pedagógicas:");
	if (code === "1983") {
					alert("Código correcto. Las Notas del Maestro ahora son visibles.");
					showTeacherNotes();
	} else {
					alert("Código incorrecto. Acceso denegado.");
	}
}

function showTeacherNotes() {
	const notes = document.querySelectorAll('.teacher-note');
	notes.forEach(note => {
					note.style.display = 'block';
	});
	// Opcional: Ocultar el botón después del acceso
	document.getElementById('teacher-access-btn').style.display = 'none';
}

// --- LÓGICA DEL QUIZ ESTILO KAHOOT ---

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreDisplay = document.getElementById('score-display');

let shuffledQuestions, currentQuestionIndex;
let score = 0;

// Definición de las preguntas del Quiz
const questions = [
	{
					question: '¿Qué fenómeno unifica el electromagnetismo?',
					answers: [
									{ text: 'Gravedad y Fuerza Nuclear', correct: false },
									{ text: 'Fuerzas Eléctricas y Magnéticas', correct: true },
									{ text: 'Luz y Sonido', correct: false },
									{ text: 'Calor y Mecánica', correct: false }
					]
	},
	{
					question: '¿Qué descubrió Hans Christian Ørsted en 1820?',
					answers: [
									{ text: 'La Inducción Magnética', correct: false },
									{ text: 'Que una brújula crea electricidad', correct: false },
									{ text: 'Que la corriente eléctrica desvía una brújula', correct: true },
									{ text: 'Las ondas de radio', correct: false }
					]
	},
	{
					question: '¿Quién es considerado el formulador matemático de la electrodinámica?',
					answers: [
									{ text: 'Faraday', correct: false },
									{ text: 'Ampère', correct: true },
									{ text: 'Maxwell', correct: false },
									{ text: 'Coulomb', correct: false }
					]
	},
	{
					question: '¿Qué principio es la base de los motores y generadores modernos?',
					answers: [
									{ text: 'Ley de Ohm', correct: false },
									{ text: 'Ecuación de Continuidad', correct: false },
									{ text: 'Inducción Electromagnética', correct: true },
									{ text: 'Ley de Coulomb', correct: false }
					]
	},
	{
					question: '¿Quién unificó la electricidad, el magnetismo y la luz en cuatro ecuaciones?',
					answers: [
									{ text: 'Albert Einstein', correct: false },
									{ text: 'Michael Faraday', correct: false },
									{ text: 'James Clerk Maxwell', correct: true },
									{ text: 'Isaac Newton', correct: false }
					]
	},
	{
					question: 'En la práctica del electroimán, ¿por qué se lija el cable?',
					answers: [
									{ text: 'Para que el clavo se pegue', correct: false },
									{ text: 'Para quitar el esmalte aislante y permitir el contacto eléctrico', correct: true },
									{ text: 'Para que el cable se caliente más rápido', correct: false },
									{ text: 'Para cambiar la polaridad de la pila', correct: false }
					]
	},
	{
					question: '¿Qué sucede si aumentas el número de vueltas de cable en tu electroimán casero?',
					answers: [
									{ text: 'El magnetismo disminuye', correct: false },
									{ text: 'La pila dura más tiempo', correct: false },
									{ text: 'El magnetismo aumenta', correct: true },
									{ text: 'El cable se enfría', correct: false }
					]
	},
	{
					question: '¿En qué año descubrió Faraday la Inducción Electromagnética?',
					answers: [
									{ text: '1820', correct: false },
									{ text: '1831', correct: true },
									{ text: '1865', correct: false },
									{ text: '1893', correct: false }
					]
	},
	{
					question: '¿Qué unidad de corriente eléctrica lleva el nombre de un personaje clave de la Masterclass?',
					answers: [
									{ text: 'Faradio', correct: false },
									{ text: 'Vatio', correct: false },
									{ text: 'Voltio', correct: false },
									{ text: 'Amperio', correct: true }
					]
	},
	{
					question: '¿Qué científico vino de una familia humilde y fue autodidacta?',
					answers: [
									{ text: 'Ørsted', correct: false },
									{ text: 'Faraday', correct: true },
									{ text: 'Maxwell', correct: false },
									{ text: 'Ampère', correct: false }
					]
	}
];

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
	currentQuestionIndex++;
	setNextQuestion();
});

function startQuiz() {
	startButton.classList.add('hide');
	scoreDisplay.classList.add('hide');
	currentQuestionIndex = 0;
	score = 0;
	scoreDisplay.innerText = "Puntuación: 0 / 10";
	shuffledQuestions = questions.sort(() => Math.random() - 0.5); // Mezclar preguntas
	questionContainerElement.classList.remove('hide');
	setNextQuestion();
}

function setNextQuestion() {
	resetState();
	showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
	questionElement.innerText = `Pregunta ${currentQuestionIndex + 1}: ${question.question}`;
	question.answers.forEach(answer => {
					const button = document.createElement('button');
					button.innerText = answer.text;
					button.classList.add('btn', 'quiz-btn');
					if (answer.correct) {
									button.dataset.correct = answer.correct;
					}
					button.addEventListener('click', selectAnswer);
					answerButtonsElement.appendChild(button);
	});
}

function resetState() {
	clearStatusClass(document.body);
	nextButton.classList.add('hide');
	while (answerButtonsElement.firstChild) {
					answerButtonsElement.removeChild(answerButtonsElement.firstChild);
	}
}

function selectAnswer(e) {
	const selectedButton = e.target;
	const correct = selectedButton.dataset.correct === 'true';
	if (correct) score++;
	setStatusClass(selectedButton, correct);
	
	Array.from(answerButtonsElement.children).forEach(button => {
					setStatusClass(button, button.dataset.correct === 'true');
					button.disabled = true; // Deshabilitar botones tras responder
	});

	if (shuffledQuestions.length > currentQuestionIndex + 1) {
					nextButton.classList.remove('hide');
	} else {
					// Fin del quiz
					questionContainerElement.classList.add('hide');
					scoreDisplay.innerText = `Quiz Terminado. Puntuación: ${score} / 10`;
					scoreDisplay.classList.remove('hide');
					startButton.innerText = 'Reiniciar Quiz';
					startButton.classList.remove('hide');
	}
}

function setStatusClass(element, correct) {
	clearStatusClass(element);
	if (correct) {
					element.classList.add('correct');
	} else {
					element.classList.add('wrong');
	}
}

function clearStatusClass(element) {
	element.classList.remove('correct');
	element.classList.remove('wrong');
}