/* --- LÓGICA DEL PANEL DEL MAESTRO --- */
function verificarCodigoMaestro() {
	const codigo = prompt("Ingrese el PIN de acceso docente para visualizar las notas pedagógicas:");
	
	if (codigo === "1983") {
					alert("Acceso concedido. Las notas pedagógicas y matemáticas están ahora visibles.");
					const notas = document.querySelectorAll('.teacher-note');
					notas.forEach(nota => {
									nota.style.display = 'block'; // Muestra las notas ocultas
					});
					document.getElementById('btn-maestro').style.display = 'none'; // Oculta el botón
	} else if (codigo !== null) {
					alert("Código incorrecto. Acceso denegado.");
	}
}

/* --- LÓGICA DEL QUIZ ESTILO KAHOOT --- */
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionText = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreBox = document.getElementById('score-box');
const scoreSpan = document.getElementById('score');

let shuffledQuestions, currentQuestionIndex;
let score = 0;

// Base de datos de preguntas
const questions = [
	{
					question: "¿Qué genera una corriente eléctrica a su alrededor?",
					answers: [
									{ text: "Un campo gravitacional", correct: false },
									{ text: "Un campo magnético", correct: true },
									{ text: "Luz ultravioleta", correct: false },
									{ text: "Ondas de sonido", correct: false }
					]
	},
	{
					question: "¿Qué forma tienen las líneas de campo de un conductor recto?",
					answers: [
									{ text: "Líneas rectas paralelas", correct: false },
									{ text: "Cuadrados concéntricos", correct: false },
									{ text: "Círculos concéntricos", correct: true },
									{ text: "Espirales descendentes", correct: false }
					]
	},
	{
					question: "Al alejarte de un cable con corriente, el campo magnético...",
					answers: [
									{ text: "Se debilita", correct: true },
									{ text: "Se hace más fuerte", correct: false },
									{ text: "Se mantiene igual", correct: false },
									{ text: "Cambia de dirección", correct: false }
					]
	},
	{
					question: "¿Qué es una espira en el contexto electromagnético?",
					answers: [
									{ text: "Un cable roto", correct: false },
									{ text: "Un tubo de plástico", correct: false },
									{ text: "Un cable recto muy largo", correct: false },
									{ text: "Un cable doblado en forma de anillo", correct: true }
					]
	},
	{
					question: "¿Dónde es más intenso el campo magnético en una espira?",
					answers: [
									{ text: "A 1 metro de distancia", correct: false },
									{ text: "En su centro", correct: true },
									{ text: "En los bordes exteriores", correct: false },
									{ text: "No tiene campo magnético", correct: false }
					]
	},
	{
					question: "¿Qué estructura es como muchos anillos magnéticos apilados?",
					answers: [
									{ text: "Un solenoide (bobina)", correct: true },
									{ text: "Un conductor recto", correct: false },
									{ text: "Un condensador", correct: false },
									{ text: "Una batería", correct: false }
					]
	},
	{
					question: "¿Cómo es el campo magnético en el interior de un solenoide ideal?",
					answers: [
									{ text: "Fuerte, uniforme y paralelo al eje", correct: true },
									{ text: "Cero (se anula)", correct: false },
									{ text: "En forma de círculos perpendiculares", correct: false },
									{ text: "Errático e impredecible", correct: false }
					]
	},
	{
					question: "El exterior de un solenoide con corriente se comporta como:",
					answers: [
									{ text: "Un imán de herradura", correct: false },
									{ text: "Un cable sin corriente", correct: false },
									{ text: "Un imán de barra (Norte y Sur)", correct: true },
									{ text: "Una pila alcalina", correct: false }
					]
	},
	{
					question: "¿Qué usamos en los ejercicios prácticos para ver las líneas invisibles del campo?",
					answers: [
									{ text: "Agua de colores", correct: false },
									{ text: "Limaduras de hierro", correct: true },
									{ text: "Arena mojada", correct: false },
									{ text: "Lentes especiales", correct: false }
					]
	},
	{
					question: "¿Con qué regla determinamos la dirección del campo magnético en un cable recto?",
					answers: [
									{ text: "Regla de la mano derecha", correct: true },
									{ text: "Regla del pie izquierdo", correct: false },
									{ text: "Ley de la gravedad", correct: false },
									{ text: "Teorema de Pitágoras", correct: false }
					]
	}
];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
	currentQuestionIndex++;
	setNextQuestion();
});

function startGame() {
	startButton.classList.add('hide');
	scoreBox.classList.add('hide');
	answerButtonsElement.classList.remove('hide');
	shuffledQuestions = questions.sort(() => Math.random() - .5); // Mezclar preguntas
	currentQuestionIndex = 0;
	score = 0;
	scoreSpan.innerText = score;
	setNextQuestion();
}

function setNextQuestion() {
	resetState();
	showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
	questionText.innerText = `${currentQuestionIndex + 1}. ${question.question}`;
	question.answers.forEach(answer => {
					const button = document.createElement('button');
					button.innerText = answer.text;
					button.classList.add('answer-btn');
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
	
	if(correct) {
					score++;
					scoreSpan.innerText = score;
	}

	// Mostrar qué respuestas son correctas e incorrectas
	Array.from(answerButtonsElement.children).forEach(button => {
					setStatusClass(button, button.dataset.correct === 'true');
					button.disabled = true; // Desactivar botones después de elegir
	});

	if (shuffledQuestions.length > currentQuestionIndex + 1) {
					nextButton.classList.remove('hide');
	} else {
					// Fin del quiz
					setTimeout(() => {
									questionText.innerText = "¡Quiz Finalizado!";
									answerButtonsElement.classList.add('hide');
									startButton.innerText = "Reiniciar Quiz";
									startButton.classList.remove('hide');
									scoreBox.classList.remove('hide');
					}, 1500);
	}
}

function setStatusClass(element, correct) {
	if (correct) {
					element.classList.add('correct');
	} else {
					element.classList.add('wrong');
	}
}