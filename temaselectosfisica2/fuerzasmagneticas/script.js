/* === MODO MAESTRO === */
function desbloquearMaestro() {
	const password = prompt("Ingrese el PIN del docente para visualizar las notas pedagógicas y respuestas:");
	if (password === "1983") {
					alert("Modo Maestro Desbloqueado. Notas andragógicas visibles.");
					const notas = document.querySelectorAll('.teacher-note');
					notas.forEach(nota => {
									nota.classList.remove('hide');
					});
					document.getElementById('btn-maestro').style.display = 'none';
	} else if (password !== null) {
					alert("Código incorrecto. Acceso denegado.");
	}
}

/* === LÓGICA DEL QUIZ (Estilo Kahoot) === */
const btnIniciar = document.getElementById('btn-iniciar');
const btnSiguiente = document.getElementById('btn-siguiente');
const btnReiniciar = document.getElementById('btn-reiniciar');
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaJuego = document.getElementById('pantalla-juego');
const pantallaResultados = document.getElementById('pantalla-resultados');
const preguntaTexto = document.getElementById('pregunta-texto');
const botonesRespuesta = document.getElementById('botones-respuesta');
const textoContador = document.getElementById('contador');
const spanPuntuacion = document.getElementById('puntuacion');

let preguntasMezcladas, indicePreguntaActual;
let puntuacion = 0;

// Base de Datos de Preguntas
const preguntas = [
	{
					pregunta: "¿Qué ángulo debe formar la velocidad de una carga con el campo B para que la fuerza sea nula?",
					respuestas: [
									{ texto: "90 grados", correcta: false },
									{ texto: "45 grados", correcta: false },
									{ texto: "0 grados (paralelo)", correcta: true },
									{ texto: "60 grados", correcta: false }
					]
	},
	{
					pregunta: "¿Qué regla usamos para determinar la dirección de la fuerza magnética?",
					respuestas: [
									{ texto: "Regla del octeto", correcta: false },
									{ texto: "Regla de la mano derecha", correcta: true },
									{ texto: "Regla de Laplace", correcta: false },
									{ texto: "Ley de Ohm", correcta: false }
					]
	},
	{
					pregunta: "En la ecuación F = ILB sin(θ), ¿qué representa la letra 'L'?",
					respuestas: [
									{ texto: "Longitud del conductor", correcta: true },
									{ texto: "Luminosidad", correcta: false },
									{ texto: "Inductancia", correcta: false },
									{ texto: "Carga eléctrica", correcta: false }
					]
	},
	{
					pregunta: "¿Qué pasa si dos cables paralelos llevan corrientes en la MISMA dirección?",
					respuestas: [
									{ texto: "Se repelen fuertemente", correcta: false },
									{ texto: "Se atraen mecánicamente", correcta: true },
									{ texto: "No se afectan", correcta: false },
									{ texto: "Comienzan a girar", correcta: false }
					]
	},
	{
					pregunta: "Si los cables puente de un auto en cortocircuito llevan corrientes OPUESTAS, estos...",
					respuestas: [
									{ texto: "Se atraen", correcta: false },
									{ texto: "Se repelen", correcta: true },
									{ texto: "Se enfrían", correcta: false },
									{ texto: "Generan gravedad", correcta: false }
					]
	},
	{
					pregunta: "¿Qué dispositivo utiliza la fuerza sobre un conductor para crear sonido?",
					respuestas: [
									{ texto: "Un motor eléctrico", correcta: false },
									{ texto: "Un espectrómetro", correcta: false },
									{ texto: "Un altavoz (bocina)", correcta: true },
									{ texto: "Un tubo de rayos catódicos", correcta: false }
					]
	},
	{
					pregunta: "Si la corriente eléctrica en un cable recto es cero (0 A), ¿cuál es la fuerza magnética sobre él?",
					respuestas: [
									{ texto: "Cero (0 N)", correcta: true },
									{ texto: "Infinita", correcta: false },
									{ texto: "Negativa", correcta: false },
									{ texto: "Máxima", correcta: false }
					]
	},
	{
					pregunta: "¿Qué fuerza desvía las partículas solares creando las Auroras Boreales?",
					respuestas: [
									{ texto: "Fuerza de la gravedad", correcta: false },
									{ texto: "Fuerza Nuclear Fuerte", correcta: false },
									{ texto: "Fuerza de Lorentz (Magnética)", correcta: true },
									{ texto: "Fricción atmosférica", correcta: false }
					]
	},
	{
					pregunta: "En la fórmula de atracción entre cables, ¿qué le pasa a la fuerza si la distancia (d) se hace más grande?",
					respuestas: [
									{ texto: "La fuerza aumenta", correcta: false },
									{ texto: "La fuerza disminuye", correcta: true },
									{ texto: "La fuerza se mantiene igual", correcta: false },
									{ texto: "La corriente se invierte", correcta: false }
					]
	},
	{
					pregunta: "Un electrón cruza un campo magnético. Si queremos máxima fuerza, lo disparamos de forma...",
					respuestas: [
									{ texto: "Perpendicular al campo", correcta: true },
									{ texto: "Paralela al campo", correcta: false },
									{ texto: "Sin velocidad (estático)", correcta: false },
									{ texto: "En espiral", correcta: false }
					]
	}
];

btnIniciar.addEventListener('click', comenzarJuego);
btnSiguiente.addEventListener('click', () => {
	indicePreguntaActual++;
	cargarSiguientePregunta();
});
btnReiniciar.addEventListener('click', comenzarJuego);

function comenzarJuego() {
	pantallaInicio.classList.add('hide');
	pantallaResultados.classList.add('hide');
	pantallaJuego.classList.remove('hide');
	
	preguntasMezcladas = preguntas.sort(() => Math.random() - 0.5);
	indicePreguntaActual = 0;
	puntuacion = 0;
	
	cargarSiguientePregunta();
}

function cargarSiguientePregunta() {
	reiniciarEstado();
	textoContador.innerText = `Pregunta ${indicePreguntaActual + 1} de ${preguntasMezcladas.length}`;
	mostrarPregunta(preguntasMezcladas[indicePreguntaActual]);
}

function mostrarPregunta(pregunta) {
	preguntaTexto.innerText = pregunta.pregunta;
	
	// Opcional: Mezclar las respuestas también
	const respuestasMezcladas = pregunta.respuestas.sort(() => Math.random() - 0.5);
	
	respuestasMezcladas.forEach(respuesta => {
					const btn = document.createElement('button');
					btn.innerText = respuesta.texto;
					btn.classList.add('btn-respuesta');
					if (respuesta.correcta) {
									btn.dataset.correcta = respuesta.correcta;
					}
					btn.addEventListener('click', seleccionarRespuesta);
					botonesRespuesta.appendChild(btn);
	});
}

function reiniciarEstado() {
	btnSiguiente.classList.add('hide');
	while (botonesRespuesta.firstChild) {
					botonesRespuesta.removeChild(botonesRespuesta.firstChild);
	}
}

function seleccionarRespuesta(e) {
	const btnSeleccionado = e.target;
	const esCorrecta = btnSeleccionado.dataset.correcta === 'true';
	
	if (esCorrecta) {
					puntuacion++;
	}

	// Mostrar feedback visual
	Array.from(botonesRespuesta.children).forEach(btn => {
					asignarClaseEstado(btn, btn.dataset.correcta === 'true');
					btn.disabled = true; // Bloquear clicks múltiples
	});

	if (preguntasMezcladas.length > indicePreguntaActual + 1) {
					btnSiguiente.classList.remove('hide');
	} else {
					setTimeout(mostrarResultados, 1500); // Pausa breve antes de resultados
	}
}

function asignarClaseEstado(elemento, correcta) {
	limpiarClaseEstado(elemento);
	if (correcta) {
					elemento.classList.add('correct');
	} else {
					elemento.classList.add('wrong');
	}
}

function limpiarClaseEstado(elemento) {
	elemento.classList.remove('correct');
	elemento.classList.remove('wrong');
}

function mostrarResultados() {
	pantallaJuego.classList.add('hide');
	pantallaResultados.classList.remove('hide');
	spanPuntuacion.innerText = puntuacion;
}