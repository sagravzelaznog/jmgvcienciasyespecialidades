// Definimos las respuestas correctas
const correctAnswers = {
	q1: 'b', // Oposición al flujo magnético
	q2: 'c', // Resistencia
	q3: 'a', // Disminuye (inversamente proporcional al área)
	q4: 'c', // El entrehierro (aire)
	q5: 'b'  // Reducirlo al mínimo
};

function calculateScore() {
	let score = 0;
	let totalQuestions = Object.keys(correctAnswers).length;
	const form = document.getElementById('quiz-form');
	
	// Validar respuestas
	for (let i = 1; i <= totalQuestions; i++) {
					let questionName = 'q' + i;
					let selectedOption = form.querySelector(`input[name="${questionName}"]:checked`);
					
					if (selectedOption) {
									if (selectedOption.value === correctAnswers[questionName]) {
													score++;
									}
					} else {
									alert(`Por favor, responde la pregunta ${i} para evaluar tu aprendizaje.`);
									return; // Detiene la ejecución si falta una respuesta
					}
	}

	// Mostrar resultados pedagógicos
	showResults(score, totalQuestions);
}

function showResults(score, total) {
	const resultBox = document.getElementById('result-box');
	const scoreText = document.getElementById('score-text');
	const feedbackText = document.getElementById('feedback-text');
	
	resultBox.classList.remove('hidden', 'success', 'needs-review');
	
	let percentage = (score / total) * 100;
	
	scoreText.innerText = `Tu puntuación: ${score} de ${total} (${percentage}%)`;
	
	if (percentage === 100) {
					resultBox.classList.add('success');
					feedbackText.innerHTML = "¡Excelente! Has dominado el concepto fundamental de la reluctancia. Entiendes perfectamente cómo la manipulación del núcleo y el entrehierro optimiza el diseño de los aerogeneradores.";
	} else if (percentage >= 60) {
					resultBox.classList.add('success');
					feedbackText.innerHTML = "Buen trabajo. Tienes las bases sólidas, pero te recomiendo repasar la fórmula y cómo la geometría impacta en el flujo del campo magnético.";
	} else {
					resultBox.classList.add('needs-review');
					feedbackText.innerHTML = "La arquitectura invisible del magnetismo puede ser engañosa al principio. Te invito a releer la analogía del pasillo y las matemáticas involucradas. ¡La maestría requiere iteración!";
	}
}