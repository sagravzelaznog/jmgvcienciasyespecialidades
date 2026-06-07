// El JSON Maestro (se puede mover a un archivo externo y cargar con fetch)
const dataCurso = {
    "curso": "Temas Selectos de Física II",
    "modulos": [
  {
    "semana": 1,
    "bloque": "Electricidad Estática",
    "temas": ["Carga eléctrica y la ley de la conservación de la carga", "Interacción en cargas de igual o diferente signo", "Formas de electrizar los cuerpos", "Electroscopio y jaula de Faraday", "Materiales conductores y aislantes", "Unidades de carga eléctrica"],
    "interactivo": { "id": "sim_electroscopio", "desc": "Electroscopio virtual donde los alumnos arrastran materiales para ver la transferencia de electrones." }
  
			},
  {
    "semana": 2,
    "bloque": "Fuerzas y Campos",
    "temas": ["Ley de Coulomb", "Campo eléctrico, líneas de campo eléctrico o líneas de fuerza", "Flujo eléctrico", "Potencial eléctrico"],
    "interactivo": { "id": "sim_campo_electrico", "desc": "Plano interactivo para colocar cargas puntuales y observar dinámicamente las líneas de fuerza." }
  },
  {
    "semana": 3,
    "bloque": "Electrodinámica Básica",
    "temas": ["Electrodinámica", "Fuerza electromotriz", "Conexión de pilas en serie y en paralelo", "Resistencia eléctrica"],
    "interactivo": { "id": "sim_baterias", "desc": "Constructor básico de circuitos visuales para conectar pilas y medir voltaje total." }
  },
  {
    "semana": 4,
    "bloque": "Leyes de Circuitos I",
    "temas": ["Ley de Ohm", "Circuitos eléctricos y conexión de resistencias en serie, en paralelo y mixtas", "Potencia eléctrica y efecto Joule"],
    "interactivo": { "id": "sim_ley_ohm", "desc": "Protoboard virtual. Medidores actualizan la corriente en tiempo real al cambiar resistencias." }
  },
  {
    "semana": 5,
    "bloque": "Leyes de Circuitos II",
    "temas": ["Leyes de Kirchhoff", "Capacitores o condensadores eléctricos", "Electroquímica y ley de Faraday de la electrólisis"],
    "interactivo": { "id": "calc_kirchhoff", "desc": "Sistema paso a paso que genera sistemas de ecuaciones lineales basados en los valores ingresados." }
  },
  {
    "semana": 6,
    "bloque": "Fundamentos Magnéticos",
    "temas": ["Propiedades y características de los diferentes tipos de imanes", "Campo magnético y densidad de flujo magnético", "Reluctancia", "Materiales ferromagnéticos, paramagnéticos y diamagnéticos", "Desarrollo histórico del electromagnetismo"],
    "interactivo": { "id": "anim_dominios_mag", "desc": "Visualización de dominios magnéticos alineándose al acercar un imán externo." }
  },
  {
    "semana": 7,
    "bloque": "Inducción y Fuerzas",
    "temas": ["Campo magnético producido por una corriente", "Fuerzas sobre cargas eléctricas en movimiento dentro de campos magnéticos", "Inducción electromagnética y ley del electromagnetismo", "Ley de Lenz", "Ley de Faraday"],
    "interactivo": { "id": "sim_induccion", "desc": "Espira e imán móvil; un galvanómetro registra la corriente inducida según el movimiento del cursor." }
  },
  {
    "semana": 8,
    "bloque": "Corriente Alterna",
    "temas": ["Inductancia", "Corriente alterna y circuitos de corriente alterna", "Circuitos RC", "Transformadores y bobina de inducción (Ruhmkorff)", "Generador y motor eléctrico", "Síntesis de Maxwell del electromagnetismo"],
    "interactivo": { "id": "sim_osciloscopio", "desc": "Osciloscopio web con gráficas sinusoidales animadas ajustando frecuencia y amplitud." }
  },
  {
    "semana": 9,
    "bloque": "Óptica Geométrica I",
    "temas": ["Fenómenos y naturaleza de la luz", "Óptica geométrica y propagación rectilínea de la luz", "Métodos de Röemer y Michelson (velocidad de la luz)", "Intensidad luminosa y flujo luminoso", "Iluminación y ley de iluminación", "Leyes de reflexión de la luz y espejos esféricos"],
    "interactivo": { "id": "sim_trazado_rayos", "desc": "Interfaz de trazado de rayos para espejos cóncavos/convexos y formación de imágenes." }
  },
  {
    "semana": 10,
    "bloque": "Óptica Geométrica II",
    "temas": ["Refracción de la luz", "Las lentes y sus características", "Potencia de una lente", "El telescopio y el microscopio", "El ojo y la visión"],
    "interactivo": { "id": "sim_lentes_snell", "desc": "Laboratorio de lentes para ajustar el índice de refracción (Ley de Snell) y enfoque visual." }
  },
  {
    "semana": 11,
    "bloque": "Óptica Física y Color",
    "temas": ["Óptica física", "Interferencia y anillos de Newton", "Difracción y polarización de la luz", "Naturaleza del color y descomposición de la luz blanca", "Colores primarios, binarios y daltonismo", "Propiedades electromagnéticas de la luz y espectro electromagnético"],
    "interactivo": { "id": "sim_espectro_color", "desc": "Simulador aditivo y sustractivo de color, junto con un prisma virtual dispersor." }
  },
  {
    "semana": 12,
    "bloque": "Ondas Mecánicas I",
    "temas": ["Ondas longitudinales y transversales", "Tren de ondas, frente de onda y rayo o vector de propagación", "Ondas lineales, superficiales y tridimensionales", "Características de las ondas"],
    "interactivo": { "id": "sim_cuerda_onda", "desc": "Cuerda vibrante con controles para modificar amplitud, longitud de onda y frecuencia." }
  },
  {
    "semana": 13,
    "bloque": "Ondas Mecánicas II",
    "temas": ["Reflexión de las ondas", "Principio de superposición de las ondas", "Interferencia de ondas", "Ondas estacionarias", "Refracción y difracción de ondas"],
    "interactivo": { "id": "sim_ripple_tank", "desc": "Tanque de ondas (Ripple Tank) mostrando patrones de interferencia de dos fuentes." }
  },
  {
    "semana": 14,
    "bloque": "Acústica",
    "temas": ["Rapidez de propagación del sonido", "Fenómenos acústicos: reflexión, eco, resonancia y reverberación", "Cualidades del sonido: intensidad, tono y timbre", "Efecto Doppler", "Ondas sísmicas y ultrasonido"],
    "interactivo": { "id": "sim_acustica_doppler", "desc": "Generador de tonos para demostrar frecuencias y simulador visual/auditivo del efecto Doppler." }
  },
  {
    "semana": 15,
    "bloque": "Evaluación Global",
    "temas": ["Repaso general y evaluación final de Temas Selectos de Física II"],
    "interactivo": { "id": "motor_evaluacion_final", "desc": "Motor de examen que extrae aleatoriamente preguntas del banco de datos general calculando la puntuación final." }
  }
]
};

// Referencias al DOM
const navSemanas = document.getElementById('nav-semanas');
const contenidoPrincipal = document.getElementById('contenido-principal');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    construirMenu();
    configurarMenuMovil();
});

// Función para construir el menú lateral iterando sobre el JSON
function construirMenu() {
    dataCurso.modulos.forEach(modulo => {
        const btn = document.createElement('button');
        btn.classList.add('nav-btn');
        btn.textContent = `Semana ${modulo.semana}: ${modulo.bloque}`;
        
        btn.addEventListener('click', () => {
            // Manejo de clase activa
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Cerrar menú en móviles al seleccionar
            sidebar.classList.remove('open');
            
            // Renderizar contenido
            renderizarModulo(modulo);
        });
        
        navSemanas.appendChild(btn);
    });
}

// Función para inyectar el HTML del módulo seleccionado
function renderizarModulo(modulo) {
    // 1. Inyectamos el contenido según la semana
    if (modulo.semana === 1) {
        renderizarTeoriaSemana1(contenidoPrincipal);
    } else {
        // Código genérico para las demás semanas
        const listaTemas = modulo.temas.map(tema => `<li>${tema}</li>`).join('');
        contenidoPrincipal.innerHTML = `
            <div class="modulo-header">
                <h2>Semana ${modulo.semana}: ${modulo.bloque}</h2>
            </div>
            <h3>Contenido Teórico</h3>
            <ul class="temas-list">${listaTemas}</ul>
            <div class="simulador-container" id="contenedor-${modulo.interactivo.id}">
                <p><em>${modulo.interactivo.desc}</em></p>
                <button onclick="cargarScriptSimulador('${modulo.interactivo.id}')" class="btn-accion">Cargar Módulo Interactivo</button>
                <div id="${modulo.interactivo.id}" class="espacio-interactivo"></div>
            </div>
        `;
    }

    // 2. ¡EL TRUCO MÁGICO PARA APPS DINÁMICAS!
    // Le ordenamos a MathJax que procese las matemáticas en el nuevo HTML
    if (window.MathJax) {
        MathJax.typesetPromise([contenidoPrincipal]).then(() => {
            console.log('Ecuaciones renderizadas correctamente por MathJax');
        }).catch((err) => console.log('Error en MathJax: ', err.message));
    }
}

// Lógica de UI para móviles
function configurarMenuMovil() {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

// Emulador de carga dinámica de scripts (Modularidad)
function cargarScriptSimulador(idComponente) {
    console.log(`Cargando lógica de negocio para: ${idComponente}`);
    const contenedor = document.getElementById(idComponente);
    
    if (idComponente === 'motor_evaluacion') {
        contenedor.innerHTML = `<p style="color: green; font-weight: bold;">[Motor de JS iniciado: Obteniendo banco de preguntas y seleccionando array aleatorio...]</p>`;
        // Aquí iría la lógica real de Math.random() y desordenamiento del array.
    } else {
        contenedor.innerHTML = `<p style="color: blue; font-weight: bold;">[Script de ${idComponente} cargado. Renderizando Canvas/SVG...]</p>`;
    }
}
/**
 * Renderiza el contenido teórico de la Semana 1 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana1(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Carga eléctrica y la ley de la conservación de la carga</h3>
            <p>Toda la materia está formada por átomos, los cuales contienen protones (carga positiva) y electrones (carga negativa). La <strong>ley de la conservación de la carga</strong> establece que la carga neta de un sistema aislado permanece constante; es decir, la carga no se crea ni se destruye, solo se transfiere de un cuerpo a otro.</p>

            <h3>2. Interacción en cargas de igual o diferente signo</h3>
            <p>La regla fundamental de la electrostática es simple: <strong>cargas del mismo signo se repelen</strong> (positivo con positivo, negativo con negativo) y <strong>cargas de signo contrario se atraen</strong>.</p>

            <h3>3. Formas de electrizar los cuerpos</h3>
            <ul>
                <li><strong>Frotamiento:</strong> Al frotar dos materiales (ej. vidrio y seda), los electrones se transfieren de uno a otro.</li>
                <li><strong>Contacto:</strong> Un cuerpo cargado toca a uno neutro, transfiriendo parte de su carga.</li>
                <li><strong>Inducción:</strong> Un cuerpo cargado se acerca a uno neutro sin tocarlo, provocando una redistribución de cargas en el cuerpo neutro.</li>
            </ul>

            <h3>4. Electroscopio y jaula de Faraday</h3>
            <p>El <strong>electroscopio</strong> es un instrumento que permite detectar la presencia y el signo de una carga eléctrica (veremos su funcionamiento en el simulador de abajo). La <strong>jaula de Faraday</strong> es un recinto metálico que anula el campo eléctrico en su interior, protegiendo lo que hay dentro de descargas eléctricas.</p>

            <h3>5. Materiales conductores y aislantes</h3>
            <p>Los <strong>conductores</strong> tienen electrones libres que se mueven con facilidad. Los <strong>aislantes</strong> retienen sus electrones fuertemente, impidiendo el flujo de carga.</p>

            <h3>6. Unidades de carga eléctrica</h3>
            <p>En el Sistema Internacional, la carga eléctrica ($q$) se mide en <strong>Coulombs (C)</strong>. La carga de un solo electrón es fundamental:</p>
            
            <p>$$e = -1.6 \\times 10^{-19} \\text{ C}$$</p>
            
            <p>Para calcular la fuerza electrostática más adelante, utilizaremos la Ley de Coulomb, cuya fórmula es:</p>
            
            <p>$$F = k \\frac{|q_1 q_2|}{r^2}$$</p>
            
            <p>Donde la constante en el vacío es $k = 9 \\times 10^9 \\text{ N}\\cdot\\text{m}^2/\\text{C}^2$.</p>
        </div>


        
        <hr>
        
        <h3>Laboratorio Virtual: El Electroscopio</h3>
        <div class="simulador-container">
            <div class="controles-simulador" style="margin-bottom: 15px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
                <button id="btn-vidrio" class="btn-accion" style="padding: 10px; border-radius: 5px; background: #e0f7fa; border: 1px solid #00acc1;">Acercar Vidrio (+)</button>
                <button id="btn-plastico" class="btn-accion" style="padding: 10px; border-radius: 5px; background: #fce4ec; border: 1px solid #d81b60;">Acercar Plástico (-)</button>
                <button id="btn-tierra" class="btn-accion" style="padding: 10px; border-radius: 5px; background: #e8f5e9; border: 1px solid #43a047;">Tocar (Conexión a Tierra)</button>
            </div>
            <canvas id="canvas-electroscopio" width="300" height="350" style="background: #ffffff; border: 2px solid #ccc; border-radius: 8px;"></canvas>
            <p id="mensaje-simulador" style="margin-top: 10px; font-weight: bold; color: #0f4c75;">El electroscopio está neutro. Las laminillas cuelgan verticalmente.</p>
        </div>
    `;

    // Una vez inyectado el HTML, inicializamos la lógica del simulador
    iniciarSimuladorElectroscopio();
}
/**
 * Inicializa y controla la lógica de renderizado del electroscopio en el Canvas.
 */
function iniciarSimuladorElectroscopio() {
    const canvas = document.getElementById('canvas-electroscopio');
    const ctx = canvas.getContext('2d');
    const mensaje = document.getElementById('mensaje-simulador');

    // Estado del electroscopio
    let anguloLaminillas = 0; // En radianes. 0 = cerradas.
    let cargaActual = 'neutro'; // 'neutro', 'positiva', 'negativa'

    // Función principal de dibujo
    function dibujarElectroscopio() {
        // Limpiar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar el frasco de vidrio (contenedor)
        ctx.strokeStyle = '#90caf9';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(50, 100);
        ctx.lineTo(250, 100);
        ctx.lineTo(250, 320);
        ctx.lineTo(50, 320);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = 'rgba(144, 202, 249, 0.1)';
        ctx.fill();

        // Tapón aislante
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(120, 80, 60, 20);

        // Esfera metálica superior
        ctx.fillStyle = '#9e9e9e';
        ctx.beginPath();
        ctx.arc(150, 60, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Varilla central metálica
        ctx.fillStyle = '#757575';
        ctx.fillRect(148, 80, 4, 150);

        // Dibujar símbolos de carga en la esfera si hay inducción
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        if (cargaActual === 'positiva') {
            ctx.fillText('-', 145, 65); // Los electrones suben a la esfera atraídos por el vidrio (+)
        } else if (cargaActual === 'negativa') {
            ctx.fillText('+', 142, 67); // Los electrones huyen, dejando la esfera positiva (+)
        }

        // --- Dibujar Laminillas de Oro (Móviles) ---
        ctx.save();
        ctx.translate(150, 230); // Punto de pivote al final de la varilla

        // Laminilla Izquierda
        ctx.save();
        ctx.rotate(-anguloLaminillas);
        ctx.fillStyle = '#ffd54f'; // Color oro
        ctx.fillRect(-2, 0, 4, 60);
        
        // Dibujar carga en la laminilla
        ctx.fillStyle = 'black';
        ctx.font = '16px Arial';
        if (cargaActual === 'positiva') {
            ctx.fillText('+', -20, 40); // Se queda positiva porque los electrones subieron
        } else if (cargaActual === 'negativa') {
            ctx.fillText('-', -15, 40); // Se vuelve negativa porque los electrones bajaron
        }
        ctx.restore();

        // Laminilla Derecha
        ctx.save();
        ctx.rotate(anguloLaminillas);
        ctx.fillStyle = '#ffd54f';
        ctx.fillRect(-2, 0, 4, 60);
        
        // Dibujar carga en la laminilla
        ctx.fillStyle = 'black';
        ctx.font = '16px Arial';
        if (cargaActual === 'positiva') {
            ctx.fillText('+', 10, 40);
        } else if (cargaActual === 'negativa') {
            ctx.fillText('-', 5, 40);
        }
        ctx.restore();

        ctx.restore(); // Fin del guardado de pivote central
    }

    // Funciones de Animación y Actualización de Estado
    function actualizarEstado(tipoCarga, textoMensaje, anguloObjetivo) {
        cargaActual = tipoCarga;
        mensaje.textContent = textoMensaje;
        
        // Animación suave de las laminillas
        let intervalo = setInterval(() => {
            if (Math.abs(anguloLaminillas - anguloObjetivo) < 0.05) {
                anguloLaminillas = anguloObjetivo;
                clearInterval(intervalo);
            } else {
                // Interpolar hacia el ángulo objetivo
                anguloLaminillas += (anguloObjetivo - anguloLaminillas) * 0.2;
            }
            dibujarElectroscopio();
        }, 30);
    }

    // --- Asignación de Eventos a los Botones ---
    
    // Al acercar la varilla de vidrio (carga +), atrae electrones a la esfera.
    // Las laminillas pierden electrones, se vuelven ambas positivas y se repelen.
    document.getElementById('btn-vidrio').addEventListener('click', () => {
        actualizarEstado('positiva', 'El vidrio (+) atrae electrones hacia la esfera. Las laminillas quedan (+) y se repelen por inducción.', Math.PI / 6); // 30 grados
    });

    // Al acercar la varilla de plástico (carga -), repele electrones hacia las laminillas.
    // Ambas laminillas se vuelven negativas y se repelen.
    document.getElementById('btn-plastico').addEventListener('click', () => {
        actualizarEstado('negativa', 'El plástico (-) empuja electrones hacia abajo. Las laminillas quedan (-) y se repelen por inducción.', Math.PI / 6);
    });

    // Conexión a tierra (neutraliza)
    document.getElementById('btn-tierra').addEventListener('click', () => {
        actualizarEstado('neutro', 'Contacto con tierra. Los electrones fluyen para restaurar el equilibrio. El electroscopio es neutro nuevamente.', 0);
    });

    // Dibujo inicial al cargar
    dibujarElectroscopio();
}
// Emulador de carga dinámica de scripts (Modularidad)
function cargarScriptSimulador(idComponente) {
    console.log(`Cargando lógica de negocio para: ${idComponente}`);
    const contenedor = document.getElementById(idComponente);
    
    switch (idComponente) {
        case 'sim_electroscopio':
            // Esta línea ya no será estrictamente necesaria si usas renderizarTeoriaSemana1,
            // pero es útil mantener la estructura para las otras semanas.
            iniciarSimuladorElectroscopio(); 
            break;
            
        case 'motor_evaluacion_final':
            contenedor.innerHTML = `<p style="color: green; font-weight: bold;">[Motor de JS iniciado: Obteniendo banco de preguntas aleatorias...]</p>`;
            break;
            
        default:
            contenedor.innerHTML = `<p style="color: blue; font-weight: bold;">[Script de ${idComponente} pendiente de programación...]</p>`;
            break;
    }
}
/**
 * Renderiza el contenido teórico de la Semana 2 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana2(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Ley de Coulomb</h3>
            <p>La <strong>Ley de Coulomb</strong> cuantifica la fuerza eléctrica entre dos cargas puntuales. Establece que la magnitud de la fuerza electrostática es directamente proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia que las separa.</p>
            <p>$$F = k \\frac{|q_1 q_2|}{r^2}$$</p>
            <p>Donde la constante en el vacío es $k = 9 \\times 10^9 \\text{ N}\\cdot\\text{m}^2/\\text{C}^2$. Si el resultado es positivo hay repulsión, y si es negativo hay atracción.</p>

            <h3>2. Campo eléctrico y líneas de fuerza</h3>
            <p>El <strong>campo eléctrico</strong> ($\\vec{E}$) es una alteración que una carga produce en el espacio que la rodea. Si colocamos una carga de prueba $q$ en ese espacio, experimentará una fuerza $\\vec{F}$.</p>
            <p>$$E = \\frac{F}{q} \\quad \\text{o} \\quad E = k \\frac{Q}{r^2}$$</p>
            <p>Michael Faraday ideó las <strong>líneas de fuerza</strong> para visualizarlo: estas líneas siempre <em>salen</em> de las cargas positivas (fuentes) y <em>entran</em> en las cargas negativas (sumideros).</p>

            <h3>3. Flujo eléctrico</h3>
            <p>El <strong>flujo eléctrico</strong> ($\\Phi_E$) mide la "cantidad" de líneas de campo eléctrico que atraviesan una superficie determinada. Es la base conceptual de la Ley de Gauss.</p>
            <p>$$\\Phi_E = E \\cdot A \\cdot \\cos(\\theta)$$</p>

            <h3>4. Potencial eléctrico</h3>
            <p>Mientras que el campo eléctrico se relaciona con la fuerza que siente una carga, el <strong>potencial eléctrico</strong> ($V$) se relaciona con la energía requerida para moverla. Se mide en Voltios (V) o Joules por Coulomb (J/C).</p>
            <p>$$V = \\frac{W}{q} \\quad \\text{o} \\quad V = k \\frac{Q}{r}$$</p>
        </div>
        
        <hr>
        
        <h3>Laboratorio Virtual: Mapeo de Campo Eléctrico en 2D</h3>
        <div class="simulador-container">
            <p style="font-size: 0.9em; margin-bottom: 15px;">Selecciona el tipo de carga y toca dentro del recuadro para colocarla. Observa cómo cambian los vectores de dirección del campo.</p>
            
            <div class="controles-simulador" style="margin-bottom: 15px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
                <button id="btn-add-pos" class="btn-accion" style="padding: 10px; border-radius: 5px; background: #e0f7fa; border: 1px solid #00acc1; cursor: pointer;">+ Carga Positiva</button>
                <button id="btn-add-neg" class="btn-accion" style="padding: 10px; border-radius: 5px; background: #fce4ec; border: 1px solid #d81b60; cursor: pointer;">- Carga Negativa</button>
                <button id="btn-limpiar" class="btn-accion" style="padding: 10px; border-radius: 5px; background: #eeeeee; border: 1px solid #9e9e9e; cursor: pointer;">Limpiar Plano</button>
            </div>
            
            <canvas id="canvas-campo" width="400" height="400" style="background: #ffffff; border: 2px solid #ccc; border-radius: 8px; width: 100%; max-width: 400px; touch-action: none; cursor: crosshair;"></canvas>
        </div>
    `;

    // Inicializamos la lógica interactiva
    iniciarSimuladorCampoElectrico();
}

/**
 * Inicializa el simulador de vectores de campo eléctrico.
 */
/**
 * Inicializa el simulador de vectores de campo eléctrico (Versión Corregida)
 */
function iniciarSimuladorCampoElectrico() {
    const canvas = document.getElementById('canvas-campo');
    if (!canvas) {
        console.error("El canvas del simulador no se encontró en el DOM.");
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // FIX: Iniciamos con un dipolo eléctrico para que el simulador tenga vida inmediatamente
    let cargas = [
        { x: 120, y: 200, tipo: 'positiva', q: 1 },
        { x: 280, y: 200, tipo: 'negativa', q: -1 }
    ];
    let modoActual = 'positiva'; 

    const btnPos = document.getElementById('btn-add-pos');
    const btnNeg = document.getElementById('btn-add-neg');
    const btnLimpiar = document.getElementById('btn-limpiar');

    // UI: Resalta el botón seleccionado
    function actualizarBotones() {
        btnPos.style.fontWeight = modoActual === 'positiva' ? 'bold' : 'normal';
        btnPos.style.boxShadow = modoActual === 'positiva' ? '0 0 5px #00acc1' : 'none';
        btnNeg.style.fontWeight = modoActual === 'negativa' ? 'bold' : 'normal';
        btnNeg.style.boxShadow = modoActual === 'negativa' ? '0 0 5px #d81b60' : 'none';
    }

    btnPos.addEventListener('click', () => { modoActual = 'positiva'; actualizarBotones(); });
    btnNeg.addEventListener('click', () => { modoActual = 'negativa'; actualizarBotones(); });
    btnLimpiar.addEventListener('click', () => { cargas = []; dibujarCampo(); });

    actualizarBotones();

    // Inserción de cargas interactiva
    canvas.addEventListener('pointerdown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        
        cargas.push({ 
            x: x, 
            y: y, 
            tipo: modoActual, 
            q: modoActual === 'positiva' ? 1 : -1 
        });
        dibujarCampo();
    });

    // Función principal de renderizado
    function dibujarCampo() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // FIX: Dibujar un grid (cuadrícula sutil) de fondo para orientar al alumno
        ctx.fillStyle = '#e0e0e0';
        for (let x = 0; x <= canvas.width; x += 25) {
            for (let y = 0; y <= canvas.height; y += 25) {
                ctx.beginPath();
                ctx.arc(x, y, 1, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const resolucion = 15; 
        for (let x = resolucion / 2; x < canvas.width; x += resolucion) {
            for (let y = resolucion / 2; y < canvas.height; y += resolucion) {
                dibujarVectorInterferencia(x, y);
            }
        }

        // Dibujar los "cuerpos" de las cargas
        cargas.forEach(carga => {
            ctx.beginPath();
            ctx.arc(carga.x, carga.y, 14, 0, Math.PI * 2); // Un poco más grandes
            ctx.fillStyle = carga.tipo === 'positiva' ? '#00acc1' : '#d81b60';
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2.5;
            ctx.stroke();
            
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 18px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(carga.tipo === 'positiva' ? '+' : '-', carga.x, carga.y);
        });
    }

    function dibujarVectorInterferencia(x, y) {
        if (cargas.length === 0) return; 

        let Ex = 0;
        let Ey = 0;
        const k = 1500; // Ajustado para que los vectores se vean más definidos

        cargas.forEach(carga => {
            const dx = x - carga.x;
            const dy = y - carga.y;
            const r2 = dx * dx + dy * dy;
            const r = Math.sqrt(r2);
            
            if (r < 18) return; // Evita que las flechas se metan dentro de la carga
            
            const E = (k * carga.q) / r2;
            Ex += E * (dx / r);
            Ey += E * (dy / r);
        });

        const magnitud = Math.sqrt(Ex * Ex + Ey * Ey);
        if (magnitud < 0.1) return; // Omitir vectores extremadamente débiles para limpiar el gráfico

        const longitudFlecha = 12;
        const dirX = (Ex / magnitud) * longitudFlecha;
        const dirY = (Ey / magnitud) * longitudFlecha;

        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + dirX, y + dirY);
        ctx.stroke();

        const angulo = Math.atan2(dirY, dirX);
        ctx.beginPath();
        ctx.moveTo(x + dirX, y + dirY);
        ctx.lineTo(x + dirX - 5 * Math.cos(angulo - Math.PI / 6), y + dirY - 5 * Math.sin(angulo - Math.PI / 6));
        ctx.lineTo(x + dirX - 5 * Math.cos(angulo + Math.PI / 6), y + dirY - 5 * Math.sin(angulo + Math.PI / 6));
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fill();
    }

    // Llamada inicial para pintar el dipolo
    dibujarCampo();
}
// Función para inyectar el HTML del módulo seleccionado
// ==========================================
// ENRUTADOR PRINCIPAL DEL CURSO (15 SEMANAS)
// ==========================================
function renderizarModulo(modulo) {
    // Vaciamos el contenedor antes de inyectar nueva información
    contenidoPrincipal.innerHTML = '';

    // Enrutador basado en la semana seleccionada
    switch (modulo.semana) {
        case 1:
            renderizarTeoriaSemana1(contenidoPrincipal);
            break;
        case 2:
            renderizarTeoriaSemana2(contenidoPrincipal);
            break;
        case 3:
            renderizarTeoriaSemana3(contenidoPrincipal);
            break;
        case 4:
           	renderizarTeoriaSemana4(contenidoPrincipal);
            break;
        case 5:
            renderizarTeoriaSemana5(contenidoPrincipal);
            break;
        case 6:
            renderizarTeoriaSemana6(contenidoPrincipal);
            break;
        case 7:
            renderizarTeoriaSemana7(contenidoPrincipal);
            break;
        case 8:
            renderizarTeoriaSemana8(contenidoPrincipal);
            break;
        case 9:
            renderizarTeoriaSemana9(contenidoPrincipal);
            break;
        case 10:
            renderizarTeoriaSemana10(contenidoPrincipal);
            break;
        case 11:
            renderizarTeoriaSemana11(contenidoPrincipal);
            break;
        case 12:
            renderizarTeoriaSemana12(contenidoPrincipal);
            break;
        case 13:
            renderizarTeoriaSemana13(contenidoPrincipal);
            break;
        case 14:
            renderizarTeoriaSemana14(contenidoPrincipal);
            break;
        case 15:
            // Evaluación Final
            renderizarEvaluacionGlobal(modulo);
            break;
        default:
            renderizarModuloGenerico(modulo);
            break;
    }

    // Le ordenamos a MathJax que procese las matemáticas (LaTeX) en el nuevo HTML inyectado
    if (window.MathJax) {
        MathJax.typesetPromise([contenidoPrincipal]).then(() => {
            console.log(`Ecuaciones renderizadas para la Semana ${modulo.semana}`);
        }).catch((err) => console.log('Error en MathJax: ', err.message));
    }
}

// ==========================================
// FUNCIONES DE APOYO PARA EL ENRUTADOR
// ==========================================

/**
 * Renderiza un diseño genérico para las semanas que aún no tienen su función específica programada.
 */
function renderizarModuloGenerico(modulo) {
    const listaTemas = modulo.temas.map(tema => `<li>${tema}</li>`).join('');
    
    contenidoPrincipal.innerHTML = `
        <div class="modulo-header">
            <h2>Semana ${modulo.semana}: ${modulo.bloque}</h2>
        </div>
        
        <h3>Contenido Teórico</h3>
        <ul class="temas-list">
            ${listaTemas}
        </ul>
        
        <h3>Laboratorio / Práctica</h3>
        <div class="simulador-container" id="contenedor-${modulo.interactivo.id}">
            <p><em>${modulo.interactivo.desc}</em></p>
            <button onclick="cargarScriptSimulador('${modulo.interactivo.id}')" class="btn-accion" style="padding: 10px; border-radius: 5px; background: #0f4c75; color: white; border: none; cursor: pointer;">
                Cargar Módulo Interactivo
            </button>
            <div id="${modulo.interactivo.id}" class="espacio-interactivo"></div>
        </div>
    `;
}

/**
 * Renderiza la interfaz para la Semana 15 (Evaluación Semestral)
 */
function renderizarEvaluacionGlobal(modulo) {
    contenidoPrincipal.innerHTML = `
        <div class="modulo-header">
            <h2>Semana 15: ${modulo.bloque}</h2>
        </div>
        
        <div class="teoria-modulo">
            <p>Has llegado al final del curso de Temas Selectos de Física II. A continuación, pondrás a prueba los conocimientos adquiridos.</p>
            <p><strong>Instrucciones:</strong> El sistema seleccionará <strong>10 preguntas aleatorias</strong> de nuestra base de datos para generar un examen único. No hay un orden fijo.</p>
        </div>
        
        <div class="simulador-container" id="contenedor-${modulo.interactivo.id}" style="border-color: #43a047;">
            <button onclick="cargarScriptSimulador('${modulo.interactivo.id}')" class="btn-accion" style="padding: 15px 30px; border-radius: 5px; background: #43a047; color: white; border: none; font-size: 1.1em; cursor: pointer;">
                Iniciar Examen Aleatorio
            </button>
            <div id="${modulo.interactivo.id}" class="espacio-interactivo" style="margin-top: 20px; width: 100%;"></div>
        </div>
    `;
}

    // Le ordenamos a MathJax que procese las matemáticas en el nuevo HTML
          if (window.MathJax) {
        // Clear the element's math state and then typeset it
        // typesetPromise replaces the old Hub.Queue(["Typeset", ...])
        MathJax.typesetPromise([contenidoPrincipal]).then(() => {
            console.log('Ecuaciones renderizadas correctamente por MathJax');
        }).catch((err) => console.error('MathJax typesetting failed: ', err));
    }
				/**
 * Renderiza el contenido teórico de la Semana 3 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana3(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Electrodinámica</h3>
            <p>La electrodinámica estudia las cargas eléctricas en movimiento. A este flujo de cargas a través de un conductor se le llama <strong>corriente eléctrica</strong> ($I$). Se mide en Amperes (A), que equivalen al paso de un Coulomb de carga por segundo a través de la sección transversal de un cable.</p>
            <p>$$I = \\frac{q}{t}$$</p>

            <h3>2. Fuerza electromotriz (fem)</h3>
            <p>Para que los electrones se muevan continuamente, necesitan un "empuje". La <strong>fuerza electromotriz</strong> ($\\varepsilon$) no es realmente una fuerza, sino el trabajo o energía que una fuente (como una pila o batería) proporciona por cada unidad de carga que la atraviesa. Se mide en Voltios (V).</p>
            <p>$$\\varepsilon = \\frac{W}{q}$$</p>

            <h3>3. Conexión de pilas en serie y en paralelo</h3>
            <p>Las fuentes de voltaje (pilas) se pueden agrupar para cambiar el voltaje o la capacidad de corriente de un circuito:</p>
            <ul>
                <li><strong>En Serie:</strong> El terminal positivo de una pila se conecta al negativo de la siguiente. Los voltajes se suman. Ideal para requerir más "fuerza" eléctrica. <br>$$V_T = V_1 + V_2 + V_3 + ... + V_n$$</li>
                <li><strong>En Paralelo:</strong> Todos los terminales positivos se conectan entre sí, al igual que los negativos. El voltaje total se mantiene igual al de una sola pila, pero la batería dura más tiempo entregando corriente. <br>$$V_T = V_1 = V_2 = ... = V_n$$</li>
            </ul>

            <h3>4. Resistencia eléctrica</h3>
            <p>Es la oposición que presenta un material al paso de la corriente eléctrica. Depende del tipo de material (su resistividad $\\rho$), su longitud ($L$) y su área de sección transversal ($A$). Se mide en Ohmios ($\\Omega$).</p>
            <p>$$R = \\rho \\frac{L}{A}$$</p>
        </div>
        
        <hr>
        
        <h3>Laboratorio Virtual: Conexión de Pilas</h3>
        <div class="simulador-container">
            <p style="font-size: 0.9em; margin-bottom: 15px;">Añade pilas de 1.5V al circuito y cambia el tipo de conexión para observar cómo reacciona el multímetro.</p>
            
            <div class="controles-simulador" style="margin-bottom: 15px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
                <button id="btn-add-pila" class="btn-accion" style="padding: 10px; border-radius: 5px; background: #e0f7fa; border: 1px solid #00acc1; cursor: pointer;">+ Añadir Pila (Max 4)</button>
                <button id="btn-toggle-modo" class="btn-accion" style="padding: 10px; border-radius: 5px; background: #fff9c4; border: 1px solid #fbc02d; cursor: pointer;">Modo: SERIE</button>
                <button id="btn-reset-pilas" class="btn-accion" style="padding: 10px; border-radius: 5px; background: #eeeeee; border: 1px solid #9e9e9e; cursor: pointer;">Reiniciar</button>
            </div>
            
            <canvas id="canvas-baterias" width="500" height="300" style="background: #263238; border: 2px solid #ccc; border-radius: 8px; width: 100%; max-width: 500px;"></canvas>
        </div>
    `;

    // Inicializamos la lógica del simulador
    iniciarSimuladorBaterias();
}

/**
 * Inicializa el simulador de baterías y el multímetro digital.
 */
function iniciarSimuladorBaterias() {
    const canvas = document.getElementById('canvas-baterias');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let numPilas = 1;
    const maxPilas = 4;
    let modoConexion = 'serie'; // Puede ser 'serie' o 'paralelo'
    const voltajePorPila = 1.5;

    const btnAdd = document.getElementById('btn-add-pila');
    const btnToggle = document.getElementById('btn-toggle-modo');
    const btnReset = document.getElementById('btn-reset-pilas');

    // Eventos de botones
    btnAdd.addEventListener('click', () => {
        if (numPilas < maxPilas) {
            numPilas++;
            dibujarEscena();
        }
    });

    btnToggle.addEventListener('click', () => {
        modoConexion = modoConexion === 'serie' ? 'paralelo' : 'serie';
        btnToggle.textContent = `Modo: ${modoConexion.toUpperCase()}`;
        dibujarEscena();
    });

    btnReset.addEventListener('click', () => {
        numPilas = 1;
        dibujarEscena();
    });

    // Función principal para renderizar el lienzo
    function dibujarEscena() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 1. Calcular Voltaje Total
        let voltajeTotal = 0;
        if (numPilas > 0) {
            voltajeTotal = modoConexion === 'serie' ? numPilas * voltajePorPila : voltajePorPila;
        }

        // 2. Dibujar Multímetro
        dibujarMultimetro(voltajeTotal);

        // 3. Dibujar Pilas y Cables
        if (numPilas > 0) {
            if (modoConexion === 'serie') {
                dibujarPilasSerie();
            } else {
                dibujarPilasParalelo();
            }
        }
    }

    function dibujarMultimetro(voltaje) {
        // Cuerpo del multímetro
        ctx.fillStyle = '#fbc02d'; // Amarillo estándar de multímetro
        ctx.fillRect(350, 40, 120, 180);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.strokeRect(350, 40, 120, 180);

        // Pantalla LCD
        ctx.fillStyle = '#aed581';
        ctx.fillRect(365, 55, 90, 40);
        ctx.strokeRect(365, 55, 90, 40);

        // Texto del LCD (Voltaje)
        ctx.fillStyle = 'black';
        ctx.font = '24px "Courier New", monospace';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        // Formatear a 2 decimales
        ctx.fillText(voltaje.toFixed(2) + ' V', 445, 75);

        // Selector / Dial circular
        ctx.fillStyle = '#424242';
        ctx.beginPath();
        ctx.arc(410, 140, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'white';
        ctx.fillRect(408, 115, 4, 15); // Indicador apuntando hacia arriba (Voltios)

        // Puertos COM y V
        ctx.fillStyle = '#212121';
        ctx.beginPath(); ctx.arc(385, 200, 8, 0, Math.PI * 2); ctx.fill(); // COM (Negro)
        ctx.fillStyle = '#d32f2f';
        ctx.beginPath(); ctx.arc(435, 200, 8, 0, Math.PI * 2); ctx.fill(); // V (Rojo)
    }

    function dibujarPila(x, y) {
        // Cuerpo de la pila (AA)
        ctx.fillStyle = '#2c3e50'; // Parte inferior
        ctx.fillRect(x, y, 60, 30);
        ctx.fillStyle = '#e74c3c'; // Parte superior (positivo)
        ctx.fillRect(x + 60, y, 30, 30);
        
        // Polo positivo (Botoncito)
        ctx.fillStyle = '#bdc3c7';
        ctx.fillRect(x + 90, y + 8, 5, 14);

        // Signos + y -
        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('-', x + 15, y + 15);
        ctx.fillText('+', x + 75, y + 15);
    }

    function dibujarPilasSerie() {
        const startX = 30;
        const y = 140;
        const espacio = 100;

        // Dibujar cable rojo al multímetro
        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(startX + (numPilas - 1) * espacio + 95, y + 15);
        ctx.lineTo(435, y + 15);
        ctx.lineTo(435, 200);
        ctx.stroke();

        // Dibujar cable negro al multímetro
        ctx.strokeStyle = '#2c3e50';
        ctx.beginPath();
        ctx.moveTo(startX, y + 15);
        ctx.lineTo(startX - 15, y + 15);
        ctx.lineTo(startX - 15, 260);
        ctx.lineTo(385, 260);
        ctx.lineTo(385, 200);
        ctx.stroke();

        for (let i = 0; i < numPilas; i++) {
            dibujarPila(startX + i * espacio, y);
            // Conexión física entre pilas en serie
            if (i < numPilas - 1) {
                ctx.strokeStyle = '#bdc3c7';
                ctx.beginPath();
                ctx.moveTo(startX + i * espacio + 95, y + 15);
                ctx.lineTo(startX + (i + 1) * espacio, y + 15);
                ctx.stroke();
            }
        }
    }

    function dibujarPilasParalelo() {
        const x = 120;
        const startY = 50;
        const espacioY = 55;

        // Bus de conexión negativo (Negro)
        ctx.strokeStyle = '#2c3e50';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x - 20, startY + 15);
        ctx.lineTo(x - 20, startY + (numPilas - 1) * espacioY + 15);
        ctx.stroke();
        // Cable negro hacia el multímetro
        ctx.beginPath();
        ctx.moveTo(x - 20, startY + (numPilas - 1) * espacioY + 15);
        ctx.lineTo(x - 20, 260);
        ctx.lineTo(385, 260);
        ctx.lineTo(385, 200);
        ctx.stroke();

        // Bus de conexión positivo (Rojo)
        ctx.strokeStyle = '#e74c3c';
        ctx.beginPath();
        ctx.moveTo(x + 115, startY + 15);
        ctx.lineTo(x + 115, startY + (numPilas - 1) * espacioY + 15);
        ctx.stroke();
        // Cable rojo hacia el multímetro
        ctx.beginPath();
        ctx.moveTo(x + 115, startY + (numPilas - 1) * espacioY + 15);
        ctx.lineTo(435, startY + (numPilas - 1) * espacioY + 15);
        ctx.lineTo(435, 200);
        ctx.stroke();

        for (let i = 0; i < numPilas; i++) {
            let actualY = startY + i * espacioY;
            dibujarPila(x, actualY);
            
            // Cables individuales conectando a los buses
            ctx.strokeStyle = '#2c3e50'; // Negativo
            ctx.beginPath(); ctx.moveTo(x, actualY + 15); ctx.lineTo(x - 20, actualY + 15); ctx.stroke();
            
            ctx.strokeStyle = '#e74c3c'; // Positivo
            ctx.beginPath(); ctx.moveTo(x + 95, actualY + 15); ctx.lineTo(x + 115, actualY + 15); ctx.stroke();
        }
    }

    // Dibujo inicial
    dibujarEscena();
}
/**
 * Renderiza el contenido teórico de la Semana 4 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana4(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Ley de Ohm</h3>
            <p>La <strong>Ley de Ohm</strong> postula que la corriente eléctrica ($I$) que circula por un conductor es directamente proporcional a la diferencia de potencial ($V$) aplicada e inversamente proporcional a su resistencia ($R$)[cite: 1].</p>
            <p>$$I = \\frac{V}{R} \\quad \\Rightarrow \\quad V = I \\cdot R$$</p>

            <h3>2. Circuitos eléctricos y conexión de resistencias</h3>
            <p>Las resistencias se pueden conectar de diferentes maneras en un circuito eléctrico[cite: 1]:</p>
            <ul>
                <li><strong>En Serie:</strong> La corriente es la misma en todo el circuito[cite: 1]. La resistencia equivalente total ($R_T$) es la suma aritmética: <br>$$R_T = R_1 + R_2 + R_3 + ... + R_n$$</li>
                <li><strong>En Paralelo:</strong> El voltaje es el mismo en todas las ramas[cite: 1]. La inversa de la resistencia total es igual a la suma de las inversas: <br>$$\\frac{1}{R_T} = \\frac{1}{R_1} + \\frac{1}{R_2} + ... + \\frac{1}{R_n}$$</li>
                <li><strong>Mixtas:</strong> Combinan arreglos en serie y paralelo dentro del mismo circuito[cite: 1].</li>
            </ul>

            <h3>3. Potencia eléctrica y efecto Joule</h3>
            <p>La <strong>potencia eléctrica</strong> ($P$) es la rapidez con la que se consume o suministra energía eléctrica, y se mide en Watts (W)[cite: 1].</p>
            <p>$$P = V \\cdot I = I^2 \\cdot R = \\frac{V^2}{R}$$</p>
            <p>El <strong>efecto Joule</strong> describe cómo parte de la energía cinética de los electrones se transforma en calor al chocar con los átomos del conductor[cite: 1]. El calor ($Q$) generado en un tiempo ($t$) es:</p>
            <p>$$Q = I^2 \\cdot R \\cdot t$$</p>
        </div>
        
        <hr>
        
        <h3>Laboratorio Virtual: Comprobación de la Ley de Ohm</h3>
        <div class="simulador-container">
            <p style="font-size: 0.9em; margin-bottom: 15px;">Ajusta el voltaje de la fuente y los valores de las resistencias. Cambia el tipo de conexión para observar cómo varían la corriente total y la potencia disipada.</p>
            
            <div class="controles-simulador" style="display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 500px; margin: 0 auto 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center; background: #e0f7fa; padding: 10px; border-radius: 5px;">
                    <label>Voltaje: <span id="val-voltaje" style="font-weight: bold;">12</span> V</label>
                    <input type="range" id="slider-voltaje" min="1" max="24" value="12" style="width: 50%;">
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; background: #fff3e0; padding: 10px; border-radius: 5px;">
                    <label>Resistencia 1: <span id="val-r1" style="font-weight: bold;">10</span> $\\Omega$</label>
                    <input type="range" id="slider-r1" min="1" max="100" value="10" style="width: 50%;">
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; background: #fff3e0; padding: 10px; border-radius: 5px;">
                    <label>Resistencia 2: <span id="val-r2" style="font-weight: bold;">20</span> $\\Omega$</label>
                    <input type="range" id="slider-r2" min="1" max="100" value="20" style="width: 50%;">
                </div>
                <button id="btn-toggle-circuito" class="btn-accion" style="padding: 12px; border-radius: 5px; background: #0f4c75; color: white; border: none; font-weight: bold; cursor: pointer; text-transform: uppercase;">
                    Modo actual: SERIE
                </button>
            </div>

            <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 20px; flex-wrap: wrap;">
                <div style="background: #263238; color: #aed581; padding: 15px; border-radius: 8px; font-family: 'Courier New', monospace; text-align: center; min-width: 110px;">
                    <div style="font-size: 0.8em; color: #fff;">Resistencia Eq.</div>
                    <div id="display-req" style="font-size: 1.5em; font-weight: bold; margin: 5px 0;">30.00</div>
                    <div style="font-size: 0.8em;">Ohmios ($\\Omega$)</div>
                </div>
                <div style="background: #263238; color: #64b5f6; padding: 15px; border-radius: 8px; font-family: 'Courier New', monospace; text-align: center; min-width: 110px;">
                    <div style="font-size: 0.8em; color: #fff;">Corriente Total</div>
                    <div id="display-itotal" style="font-size: 1.5em; font-weight: bold; margin: 5px 0;">0.40</div>
                    <div style="font-size: 0.8em;">Amperes (A)</div>
                </div>
                <div style="background: #263238; color: #ffb74d; padding: 15px; border-radius: 8px; font-family: 'Courier New', monospace; text-align: center; min-width: 110px;">
                    <div style="font-size: 0.8em; color: #fff;">Potencia Total</div>
                    <div id="display-potencia" style="font-size: 1.5em; font-weight: bold; margin: 5px 0;">4.80</div>
                    <div style="font-size: 0.8em;">Watts (W)</div>
                </div>
            </div>

            <canvas id="canvas-ley-ohm" width="500" height="250" style="background: #ffffff; border: 2px solid #ccc; border-radius: 8px; width: 100%; max-width: 500px;"></canvas>
        </div>
    `;

    iniciarSimuladorLeyOhm();
}

/**
 * Inicializa la lógica matemática y de renderizado del circuito de la Ley de Ohm.
 */
function iniciarSimuladorLeyOhm() {
    const canvas = document.getElementById('canvas-ley-ohm');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Elementos del DOM
    const sliderV = document.getElementById('slider-voltaje');
    const sliderR1 = document.getElementById('slider-r1');
    const sliderR2 = document.getElementById('slider-r2');
    
    const valV = document.getElementById('val-voltaje');
    const valR1 = document.getElementById('val-r1');
    const valR2 = document.getElementById('val-r2');
    
    const displayReq = document.getElementById('display-req');
    const displayItotal = document.getElementById('display-itotal');
    const displayPotencia = document.getElementById('display-potencia');
    const btnToggle = document.getElementById('btn-toggle-circuito');

    let modoConexion = 'serie'; // 'serie' o 'paralelo'

    // Actualiza los cálculos y redibuja el diagrama
    function calcularYDibujar() {
        const v = parseFloat(sliderV.value);
        const r1 = parseFloat(sliderR1.value);
        const r2 = parseFloat(sliderR2.value);

        // Actualizar etiquetas de los sliders
        valV.textContent = v;
        valR1.textContent = r1;
        valR2.textContent = r2;

        // Leyes de Ohm
        let req = 0;
        if (modoConexion === 'serie') {
            req = r1 + r2;
        } else {
            req = (r1 * r2) / (r1 + r2); // Fórmula simplificada para 2 resistencias en paralelo
        }

        const iTotal = v / req;
        const potencia = v * iTotal;

        // Actualizar pantallas digitales
        displayReq.textContent = req.toFixed(2);
        displayItotal.textContent = iTotal.toFixed(2);
        displayPotencia.textContent = potencia.toFixed(2);

        // Dibujar esquemático
        dibujarCircuito(r1, r2, v);
    }

    // Dibuja el símbolo zig-zag estándar de una resistencia
    function dibujarResistencia(x, y, horizontal = true) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        if (horizontal) {
            ctx.lineTo(x + 10, y);
            ctx.lineTo(x + 15, y - 10);
            ctx.lineTo(x + 25, y + 10);
            ctx.lineTo(x + 35, y - 10);
            ctx.lineTo(x + 45, y + 10);
            ctx.lineTo(x + 50, y);
            ctx.lineTo(x + 60, y);
        } else {
            ctx.lineTo(x, y + 10);
            ctx.lineTo(x - 10, y + 15);
            ctx.lineTo(x + 10, y + 25);
            ctx.lineTo(x - 10, y + 35);
            ctx.lineTo(x + 10, y + 45);
            ctx.lineTo(x, y + 50);
            ctx.lineTo(x, y + 60);
        }
        ctx.stroke();
    }

    // Dibuja la fuente de voltaje (Batería)
    function dibujarFuente(x, y) {
        ctx.beginPath();
        ctx.moveTo(x, y - 20); ctx.lineTo(x, y - 5); // Cable superior
        ctx.moveTo(x - 15, y - 5); ctx.lineTo(x + 15, y - 5); // Placa positiva
        ctx.moveTo(x - 8, y + 5); ctx.lineTo(x + 8, y + 5); // Placa negativa
        ctx.moveTo(x, y + 5); ctx.lineTo(x, y + 20); // Cable inferior
        ctx.stroke();
        
        ctx.font = '14px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText('+', x - 25, y - 2);
        ctx.fillText('-', x - 22, y + 15);
    }

    function dibujarCircuito(r1, r2, v) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;

        const centroY = 125;
        const posXFuente = 100;

        // Fuente de Voltaje
        dibujarFuente(posXFuente, centroY);
        ctx.fillStyle = '#0f4c75';
        ctx.font = 'bold 16px Arial';
        ctx.fillText(`${v} V`, posXFuente - 50, centroY + 5);

        if (modoConexion === 'serie') {
            // Circuito en Serie
            ctx.beginPath();
            ctx.moveTo(posXFuente, centroY - 20);
            ctx.lineTo(posXFuente, 50);
            ctx.lineTo(200, 50); // Hacia R1
            ctx.stroke();

            dibujarResistencia(200, 50, true);
            ctx.fillText(`R1 = ${r1}Ω`, 205, 35);

            ctx.beginPath();
            ctx.moveTo(260, 50);
            ctx.lineTo(400, 50);
            ctx.lineTo(400, centroY - 30); // Hacia R2
            ctx.stroke();

            dibujarResistencia(400, centroY - 30, false);
            ctx.fillText(`R2 = ${r2}Ω`, 420, centroY);

            ctx.beginPath();
            ctx.moveTo(400, centroY + 30);
            ctx.lineTo(400, 200);
            ctx.lineTo(posXFuente, 200);
            ctx.lineTo(posXFuente, centroY + 20); // Retorno a fuente
            ctx.stroke();

        } else {
            // Circuito en Paralelo
            ctx.beginPath();
            // Cable superior principal
            ctx.moveTo(posXFuente, centroY - 20);
            ctx.lineTo(posXFuente, 50);
            ctx.lineTo(350, 50);
            
            // Cable inferior principal
            ctx.moveTo(posXFuente, centroY + 20);
            ctx.lineTo(posXFuente, 200);
            ctx.lineTo(350, 200);
            ctx.stroke();

            // Rama 1 (R1)
            ctx.beginPath();
            ctx.moveTo(200, 50);
            ctx.lineTo(200, 95);
            ctx.stroke();
            dibujarResistencia(200, 95, false);
            ctx.beginPath();
            ctx.moveTo(200, 155);
            ctx.lineTo(200, 200);
            ctx.stroke();
            ctx.fillText(`R1 = ${r1}Ω`, 220, 130);

            // Rama 2 (R2)
            ctx.beginPath();
            ctx.moveTo(350, 50);
            ctx.lineTo(350, 95);
            ctx.stroke();
            dibujarResistencia(350, 95, false);
            ctx.beginPath();
            ctx.moveTo(350, 155);
            ctx.lineTo(350, 200);
            ctx.stroke();
            ctx.fillText(`R2 = ${r2}Ω`, 370, 130);
        }
    }

    // Listeners de los controles
    sliderV.addEventListener('input', calcularYDibujar);
    sliderR1.addEventListener('input', calcularYDibujar);
    sliderR2.addEventListener('input', calcularYDibujar);
    
    btnToggle.addEventListener('click', () => {
        modoConexion = modoConexion === 'serie' ? 'paralelo' : 'serie';
        btnToggle.textContent = `Modo actual: ${modoConexion}`;
        btnToggle.style.background = modoConexion === 'serie' ? '#0f4c75' : '#d81b60'; // Cambio visual
        calcularYDibujar();
    });

    // Render inicial
    calcularYDibujar();
}
/**
 * Renderiza el contenido teórico de la Semana 5 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana5(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Leyes de Kirchhoff</h3>
            <p>Cuando los circuitos tienen más de una fuente de voltaje o ramas complejas, la Ley de Ohm no basta. Usamos las Leyes de Kirchhoff, fundamentadas en la conservación de la carga y la energía:</p>
            <ul>
                <li><strong>Ley de Corrientes (Nodos - LCK):</strong> La suma de las corrientes que entran a un nodo es igual a la suma de las corrientes que salen. <br>$$\\sum I_{\\text{entrada}} = \\sum I_{\\text{salida}}$$</li>
                <li><strong>Ley de Voltajes (Mallas - LVK):</strong> La suma algebraica de las caídas de voltaje en una malla (circuito cerrado) es igual a cero. <br>$$\\sum \\Delta V = 0$$</li>
            </ul>

            <h3>2. Capacitores o condensadores eléctricos</h3>
            <p>Un capacitor almacena energía en forma de campo eléctrico. Su capacidad ($C$) se mide en Faradios (F) y depende de la carga ($Q$) y el voltaje ($V$).</p>
            <p>$$C = \\frac{Q}{V}$$</p>
            <p>La energía ($U$) almacenada en un condensador se calcula como:</p>
            <p>$$U = \\frac{1}{2} C V^2$$</p>

            <h3>3. Electroquímica y Ley de Faraday de la electrólisis</h3>
            <p>La electrólisis es el proceso de separar los elementos de un compuesto por medio de la electricidad. La <strong>Primera Ley de Faraday</strong> establece que la masa ($m$) de sustancia depositada en un electrodo es proporcional a la cantidad de carga ($Q$) que atraviesa el circuito.</p>
            <p>$$m = Z \\cdot I \\cdot t$$</p>
            <p>Donde $Z$ es el equivalente electroquímico, $I$ es la corriente y $t$ el tiempo.</p>
        </div>
        
        <hr>
        
        <h3>Laboratorio Virtual: Calculadora de Mallas (Kirchhoff)</h3>
        <div class="simulador-container">
            <p style="font-size: 0.9em; margin-bottom: 15px;">Introduce los valores para un circuito de dos mallas. El sistema planteará las ecuaciones y resolverá las corrientes $I_1$ e $I_2$ usando la regla de Cramer.</p>
            
            <div style="display: flex; flex-wrap: wrap; gap: 20px; width: 100%; justify-content: center; margin-bottom: 20px;">
                <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; flex: 1; min-width: 200px;">
                    <h4 style="color: #1565c0; margin-bottom: 10px;">Malla 1 (Izquierda)</h4>
                    <label>Voltaje V1 (V):</label><br>
                    <input type="number" id="input-v1" value="10" style="width: 100%; padding: 5px; margin-bottom: 10px;"><br>
                    <label>Resistencia R1 ($\\Omega$):</label><br>
                    <input type="number" id="input-r1" value="4" style="width: 100%; padding: 5px;">
                </div>
                
                <div style="background: #f3e5f5; padding: 15px; border-radius: 8px; flex: 1; min-width: 200px;">
                    <h4 style="color: #6a1b9a; margin-bottom: 10px;">Rama Central</h4>
                    <label>Resistencia R3 ($\\Omega$):</label><br>
                    <input type="number" id="input-r3" value="2" style="width: 100%; padding: 5px;">
                </div>

                <div style="background: #ffebee; padding: 15px; border-radius: 8px; flex: 1; min-width: 200px;">
                    <h4 style="color: #c62828; margin-bottom: 10px;">Malla 2 (Derecha)</h4>
                    <label>Voltaje V2 (V):</label><br>
                    <input type="number" id="input-v2" value="5" style="width: 100%; padding: 5px; margin-bottom: 10px;"><br>
                    <label>Resistencia R2 ($\\Omega$):</label><br>
                    <input type="number" id="input-r2" value="6" style="width: 100%; padding: 5px;">
                </div>
            </div>

            <button id="btn-calcular-kirchhoff" class="btn-accion" style="padding: 12px 24px; border-radius: 5px; background: #0f4c75; color: white; border: none; font-weight: bold; cursor: pointer; margin-bottom: 20px;">
                Resolver Circuito
            </button>

            <canvas id="canvas-kirchhoff" width="500" height="250" style="background: #ffffff; border: 2px solid #ccc; border-radius: 8px; width: 100%; max-width: 500px; margin-bottom: 20px;"></canvas>

            <div id="pizarra-logica" style="background: #263238; color: #fff; padding: 20px; border-radius: 8px; width: 100%; text-align: left; font-family: 'Courier New', monospace; font-size: 0.9em; display: none;">
                </div>
        </div>
    `;

    iniciarCalculadoraKirchhoff();
}

/**
 * Lógica para la calculadora de Kirchhoff y renderizado del diagrama base.
 */
function iniciarCalculadoraKirchhoff() {
    const canvas = document.getElementById('canvas-kirchhoff');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const btnCalcular = document.getElementById('btn-calcular-kirchhoff');
    const pizarra = document.getElementById('pizarra-logica');

    // Dibuja la estructura estética del circuito
    function dibujarCircuitoEstatico(v1, r1, r3, v2, r2) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';

        // Coordenadas base
        const yTop = 50;
        const yBottom = 200;
        const xLeft = 100;
        const xCenter = 250;
        const xRight = 400;

        // Marco externo
        ctx.strokeRect(xLeft, yTop, xRight - xLeft, yBottom - yTop);
        // Rama central
        ctx.beginPath(); ctx.moveTo(xCenter, yTop); ctx.lineTo(xCenter, yBottom); ctx.stroke();

        // Borrar líneas donde irán los componentes para dibujar encima
        ctx.clearRect(xLeft - 5, 110, 10, 30); // V1
        ctx.clearRect(xCenter - 5, 110, 10, 30); // R3
        ctx.clearRect(xRight - 5, 110, 10, 30); // V2
        ctx.clearRect(160, yTop - 5, 30, 10); // R1
        ctx.clearRect(310, yTop - 5, 30, 10); // R2

        // Dibujar símbolos (simplificados para el canvas)
        // V1 (Batería Izquierda)
        ctx.beginPath(); ctx.moveTo(xLeft - 10, 120); ctx.lineTo(xLeft + 10, 120); // Placa +
        ctx.moveTo(xLeft - 5, 130); ctx.lineTo(xLeft + 5, 130); // Placa -
        ctx.stroke();
        ctx.fillText(`V1=${v1}V`, xLeft - 60, 130);

        // V2 (Batería Derecha - Polaridad invertida para el ejercicio clásico)
        ctx.beginPath(); ctx.moveTo(xRight - 5, 120); ctx.lineTo(xRight + 5, 120); // Placa -
        ctx.moveTo(xRight - 10, 130); ctx.lineTo(xRight + 10, 130); // Placa +
        ctx.stroke();
        ctx.fillText(`V2=${v2}V`, xRight + 20, 130);

        // Resistencias (Cajas rectangulares)
        ctx.fillStyle = '#fff';
        ctx.strokeRect(160, yTop - 10, 30, 20); ctx.fillRect(160, yTop - 10, 30, 20);
        ctx.fillStyle = '#000'; ctx.fillText(`R1=${r1}Ω`, 155, yTop - 15);

        ctx.fillStyle = '#fff';
        ctx.strokeRect(310, yTop - 10, 30, 20); ctx.fillRect(310, yTop - 10, 30, 20);
        ctx.fillStyle = '#000'; ctx.fillText(`R2=${r2}Ω`, 305, yTop - 15);

        ctx.fillStyle = '#fff';
        ctx.strokeRect(xCenter - 10, 110, 20, 30); ctx.fillRect(xCenter - 10, 110, 20, 30);
        ctx.fillStyle = '#000'; ctx.fillText(`R3=${r3}Ω`, xCenter + 15, 130);

        // Indicadores de Malla (Flechas circulares)
        ctx.strokeStyle = '#1565c0';
        ctx.beginPath(); ctx.arc(175, 125, 20, 0, Math.PI * 1.5); ctx.stroke();
        ctx.fillText('I1', 170, 130);
        
        ctx.strokeStyle = '#c62828';
        ctx.beginPath(); ctx.arc(325, 125, 20, 0, Math.PI * 1.5); ctx.stroke();
        ctx.fillText('I2', 320, 130);
    }

    // Resolver y mostrar pasos
    btnCalcular.addEventListener('click', () => {
        const v1 = parseFloat(document.getElementById('input-v1').value);
        const r1 = parseFloat(document.getElementById('input-r1').value);
        const r3 = parseFloat(document.getElementById('input-r3').value);
        const v2 = parseFloat(document.getElementById('input-v2').value);
        const r2 = parseFloat(document.getElementById('input-r2').value);

        dibujarCircuitoEstatico(v1, r1, r3, v2, r2);

        // Planteamiento Matemático (Asumiendo I1 e I2 en sentido horario)
        // Malla 1: V1 - I1*R1 - R3*(I1 - I2) = 0  =>  (R1+R3)I1 - R3*I2 = V1
        // Malla 2: -V2 - I2*R2 - R3*(I2 - I1) = 0 => -R3*I1 + (R2+R3)I2 = -V2
        
        const a = r1 + r3;
        const b = -r3;
        const c = v1;
        
        const d = -r3;
        const e = r2 + r3;
        const f = -v2;

        // Regla de Cramer
        const determinante = (a * e) - (b * d);
        const i1 = ((c * e) - (b * f)) / determinante;
        const i2 = ((a * f) - (c * d)) / determinante;
        const i3 = i1 - i2; // Corriente en la rama central hacia abajo

        // Renderizar el desarrollo en la pizarra
        pizarra.style.display = 'block';
        pizarra.innerHTML = `
            <div style="color: #64b5f6;">// PLANTEAMIENTO DE ECUACIONES (LVK)</div>
            Malla 1: ${v1} - ${r1}(I1) - ${r3}(I1 - I2) = 0<br>
            Malla 2: -${v2} - ${r2}(I2) - ${r3}(I2 - I1) = 0<br><br>
            
            <div style="color: #64b5f6;">// SISTEMA SIMPLIFICADO</div>
            Eq 1: (${a})I1 + (${b})I2 = ${c}<br>
            Eq 2: (${d})I1 + (${e})I2 = ${f}<br><br>
            
            <div style="color: #64b5f6;">// RESOLUCIÓN (REGLA DE CRAMER)</div>
            Determinante del sistema (D) = (${a} * ${e}) - (${b} * ${d}) = ${determinante}<br><br>
            
            <div style="color: #aed581;">// RESULTADOS FINALES</div>
            Corriente Malla 1 (I1) = <strong>${i1.toFixed(3)} A</strong><br>
            Corriente Malla 2 (I2) = <strong>${i2.toFixed(3)} A</strong><br>
            Corriente Rama Central (I3 = I1 - I2) = <strong>${i3.toFixed(3)} A</strong>
        `;
    });

    // Dibujo inicial con valores por defecto
    dibujarCircuitoEstatico(10, 4, 2, 5, 6);
}
/**
 * Renderiza el contenido teórico de la Semana 6 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana6(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Propiedades de los imanes</h3>
            <p>Los imanes tienen dos polos: Norte (N) y Sur (S). Al igual que las cargas eléctricas, polos opuestos se atraen y polos iguales se repelen. Sin embargo, a diferencia de la electricidad, <strong>los polos magnéticos son inseparables</strong>. Si partes un imán a la mitad, no obtienes un polo N aislado, sino dos imanes más pequeños, cada uno con su N y S.</p>

            <h3>2. Campo magnético y densidad de flujo</h3>
            <p>El <strong>campo magnético</strong> ($\\vec{B}$) es la región del espacio donde un imán ejerce su fuerza. Se representa mediante líneas de fuerza que, por convención, <em>salen</em> del polo Norte y <em>entran</em> al polo Sur.</p>
            <p>La <strong>densidad de flujo magnético</strong> indica qué tan concentradas están estas líneas en un área ($A$) perpendicular al campo. Se mide en Teslas (T) o Webers por metro cuadrado ($\\text{Wb}/\\text{m}^2$).</p>
            <p>$$B = \\frac{\\Phi}{A} \\quad \\Rightarrow \\quad \\Phi = B \\cdot A$$</p>
            <p>Donde $\\Phi$ es el flujo magnético total (medido en Webers, Wb).</p>

            <h3>3. Reluctancia</h3>
            <p>Es la resistencia que ofrece un material o circuito magnético al paso del flujo magnético ($\\Phi$). Es el equivalente a la resistencia eléctrica en la Ley de Ohm, pero para el magnetismo.</p>
            <p>$$\\mathcal{R} = \\frac{l}{\\mu \\cdot A}$$</p>
            <p>Donde $l$ es la longitud, $A$ el área de sección transversal y $\\mu$ la permeabilidad magnética del material.</p>

            <h3>4. Materiales ante el magnetismo</h3>
            <ul>
                <li><strong>Ferromagnéticos:</strong> (Hierro, níquel, cobalto). Se imantan fuertemente. Poseen "dominios magnéticos" (pequeñas agrupaciones de átomos) que se alinean con facilidad ante un campo externo.</li>
                <li><strong>Paramagnéticos:</strong> (Aluminio, platino). Se imantan muy débilmente.</li>
                <li><strong>Diamagnéticos:</strong> (Cobre, oro, bismuto). Repelen débilmente los campos magnéticos.</li>
            </ul>

            <h3>5. Desarrollo histórico</h3>
            <p>El vínculo entre electricidad y magnetismo fue descubierto accidentalmente por <strong>Hans Christian Oersted</strong> en 1820, al notar que una brújula se desviaba cerca de un cable con corriente. Posteriormente, Faraday y Maxwell formalizaron estas relaciones sentando las bases de nuestra tecnología moderna.</p>
        </div>
        
        <hr>
        
        <h3>Laboratorio Virtual: Alineación de Dominios Magnéticos</h3>
        <div class="simulador-container">
            <p style="font-size: 0.9em; margin-bottom: 15px;">Mueve el deslizador para acercar el imán externo a la barra de hierro (material ferromagnético). Observa cómo los dominios magnéticos internos (flechas) pasan del caos al orden.</p>
            
            <div class="controles-simulador" style="display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; max-width: 500px; margin: 0 auto 20px;">
                <div style="width: 100%; background: #e0f2f1; padding: 15px; border-radius: 8px; box-sizing: border-box; text-align: center;">
                    <label style="font-weight: bold; color: #00695c; display: block; margin-bottom: 10px;">
                        Distancia del Imán Externo
                    </label>
                    <input type="range" id="slider-iman" min="0" max="100" value="0" style="width: 90%;">
                </div>
            </div>

            <canvas id="canvas-dominios" width="500" height="250" style="background: #ffffff; border: 2px solid #ccc; border-radius: 8px; width: 100%; max-width: 500px;"></canvas>
        </div>
    `;

    iniciarSimuladorDominios();
}

/**
 * Lógica para la animación interactiva de los dominios magnéticos.
 */
function iniciarSimuladorDominios() {
    const canvas = document.getElementById('canvas-dominios');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const slider = document.getElementById('slider-iman');

    // Array para guardar la estructura de los dominios magnéticos
    const dominios = [];
    const filas = 5;
    const columnas = 8;
    const paddingX = 40;
    const paddingY = 40;
    const spacingX = 35;
    const spacingY = 35;

    // Inicializar dominios con ángulos caóticos (material no magnetizado)
    for (let f = 0; f < filas; f++) {
        for (let c = 0; c < columnas; c++) {
            dominios.push({
                x: paddingX + c * spacingX,
                y: paddingY + f * spacingY,
                anguloCaos: Math.random() * Math.PI * 2, // Dirección aleatoria inicial
                anguloActual: 0
            });
        }
    }

    // Dibuja una flecha (vector)
    function dibujarFlecha(ctx, x, y, angulo) {
        const longitud = 12;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angulo);
        
        ctx.beginPath();
        ctx.moveTo(-longitud / 2, 0);
        ctx.lineTo(longitud / 2, 0);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#333';
        ctx.stroke();

        // Punta de la flecha
        ctx.beginPath();
        ctx.moveTo(longitud / 2, 0);
        ctx.lineTo(longitud / 2 - 4, -4);
        ctx.lineTo(longitud / 2 - 4, 4);
        ctx.fillStyle = '#d32f2f'; // Polo norte del dominio en rojo
        ctx.fill();

        ctx.restore();
    }

    // Dibuja el imán externo acercándose
    function dibujarImanExterno(proximidad) {
        // Proximidad de 0 a 100.
        // Si es 0, el imán está en x = 550 (fuera de pantalla).
        // Si es 100, el imán está en x = 320 (tocando el material).
        const xPos = 550 - (proximidad * 2.3); 
        
        ctx.save();
        ctx.translate(xPos, 80);
        
        // Sombra
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(2, 2, 100, 90);

        // Mitad Norte (Rojo)
        ctx.fillStyle = '#d32f2f';
        ctx.fillRect(0, 0, 50, 90);
        
        // Mitad Sur (Azul)
        ctx.fillStyle = '#1976d2';
        ctx.fillRect(50, 0, 50, 90);

        // Letras
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 24px Arial';
        ctx.fillText('N', 15, 55);
        ctx.fillText('S', 65, 55);
        
        // Líneas de campo sutiles emanando del Polo Norte (Izquierda)
        if (proximidad > 10) {
            ctx.strokeStyle = 'rgba(211, 47, 47, ' + (proximidad / 200) + ')';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 45, 40, Math.PI * 0.5, Math.PI * 1.5, false);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 45, 60, Math.PI * 0.5, Math.PI * 1.5, false);
            ctx.stroke();
        }

        ctx.restore();
    }

    // Renderiza toda la escena
    function renderizar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Valor del slider (0 = caótico, 100 = totalmente alineado)
        const fuerzaExterna = parseInt(slider.value) / 100;

        // 1. Dibujar el bloque de hierro (Material Ferromagnético)
        ctx.fillStyle = '#eceff1';
        ctx.fillRect(20, 20, 300, 210);
        ctx.strokeStyle = '#b0bec5';
        ctx.lineWidth = 3;
        ctx.strokeRect(20, 20, 300, 210);
        
        ctx.fillStyle = '#78909c';
        ctx.font = '14px Arial';
        ctx.fillText('Bloque de Hierro (Ferromagnético)', 30, 40);

        // 2. Calcular e interporlar ángulos y dibujar dominios
        dominios.forEach(dom => {
            // El ángulo objetivo para alinearse con el imán (el N del imán apunta a la izquierda, 
            // atrayendo los polos S de los dominios, por lo que las flechas N deben apuntar a la derecha, 0 radianes)
            const anguloAlineado = 0; 
            
            // Interpolación lineal entre el caos y el orden según la fuerza del imán
            // Si fuerza = 0, angulo = caos. Si fuerza = 1, angulo = alineado.
            dom.anguloActual = dom.anguloCaos + (anguloAlineado - dom.anguloCaos) * fuerzaExterna;
            
            dibujarFlecha(ctx, dom.x, dom.y, dom.anguloActual);
        });

        // 3. Dibujar el Imán interactivo
        dibujarImanExterno(parseInt(slider.value));
    }

    // Event listener para el deslizador
    slider.addEventListener('input', renderizar);

    // Render inicial
    renderizar();
}
/**
 * Renderiza el contenido teórico de la Semana 7 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana7(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Campo magnético producido por una corriente [cite: 2]</h3>
            <p>El experimento de Oersted demostró que una corriente eléctrica crea un campo magnético a su alrededor. Para un cable recto, las líneas de campo son círculos concéntricos. La magnitud del campo ($\\vec{B}$) a una distancia ($r$) de un cable por el que circula una corriente ($I$) está dada por la Ley de Ampère:</p>
            <p>$$B = \\frac{\\mu_0 I}{2\\pi r}$$</p>

            <h3>2. Fuerzas sobre cargas en movimiento [cite: 2]</h3>
            <p>Si una carga eléctrica ($q$) se mueve con una velocidad ($\\vec{v}$) dentro de un campo magnético ($\\vec{B}$), experimentará una fuerza magnética perpendicular tanto a su velocidad como al campo. Esta magnitud se calcula con:</p>
            <p>$$F = |q| v B \\sin(\\theta)$$</p>
            <p>Donde $\\theta$ es el ángulo entre la velocidad y el campo magnético. Si la carga viaja paralela al campo, no sufre ninguna fuerza.</p>

            <h3>3. Inducción electromagnética [cite: 2] y Ley de Faraday [cite: 2]</h3>
            <p>Michael Faraday descubrió el proceso inverso a Oersted: un campo magnético <em>cambiante</em> puede inducir una corriente eléctrica en un circuito cerrado. La <strong>Ley de Faraday</strong> establece que la fuerza electromotriz (fem, $\\varepsilon$) inducida es directamente proporcional a la rapidez con la que cambia el flujo magnético ($\\Phi_B$) a través de una espira en el tiempo ($t$).</p>
            <p>$$\\varepsilon = -N \\frac{\\Delta \\Phi_B}{\\Delta t}$$</p>
            <p>Donde $N$ es el número de vueltas de la bobina.</p>

            <h3>4. Ley de Lenz [cite: 2]</h3>
            <p>¿Qué significa el signo negativo en la fórmula de Faraday? Es la <strong>Ley de Lenz</strong>. Esta ley dicta que la corriente inducida siempre fluirá en una dirección tal que creará su propio campo magnético para <strong>oponerse al cambio</strong> que la produjo. Es una manifestación directa de la conservación de la energía en el electromagnetismo.</p>
        </div>
        
        <hr>
        
        <h3>Laboratorio Virtual: Ley de Faraday e Inducción</h3>
        <div class="simulador-container">
            <p style="font-size: 0.9em; margin-bottom: 15px;"><strong>Instrucciones:</strong> Arrastra el imán de izquierda a derecha atravesando la bobina. Observa la aguja del galvanómetro. ¿Qué pasa si mueves el imán muy rápido? ¿Qué pasa si lo dejas quieto dentro de la bobina?</p>
            
            <canvas id="canvas-induccion" width="600" height="300" style="background: #ffffff; border: 2px solid #ccc; border-radius: 8px; width: 100%; max-width: 600px; touch-action: none; cursor: grab;"></canvas>
            
            <p id="mensaje-induccion" style="margin-top: 15px; font-weight: bold; color: #d81b60; min-height: 20px;"></p>
        </div>
    `;

    iniciarSimuladorInduccion();
}

/**
 * Lógica para el simulador de inducción electromagnética.
 */
function iniciarSimuladorInduccion() {
    const canvas = document.getElementById('canvas-induccion');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const mensaje = document.getElementById('mensaje-induccion');

    // Estado del imán interactivo
    let iman = {
        x: 100,
        y: 150,
        ancho: 120,
        alto: 40,
        isDragging: false
    };

    // Variables para la física de inducción
    let lastX = iman.x;
    let velocidadX = 0;
    let agujaGalvanometro = 0; // Ángulo de deflexión
    let agujaObjetivo = 0;

    const bobina = {
        x: 350,
        y: 150,
        radioX: 30,
        radioY: 70,
        vueltas: 5
    };

    // Funciones de control de eventos (Mouse y Touch unificados)
    function onPointerDown(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mouseX = (e.clientX - rect.left) * scaleX;
        const mouseY = (e.clientY - rect.top) * scaleY;

        // Verificar si se hizo clic dentro del imán
        if (mouseX >= iman.x - iman.ancho/2 && mouseX <= iman.x + iman.ancho/2 &&
            mouseY >= iman.y - iman.alto/2 && mouseY <= iman.y + iman.alto/2) {
            iman.isDragging = true;
            canvas.style.cursor = 'grabbing';
            lastX = iman.x;
        }
    }

    function onPointerMove(e) {
        if (!iman.isDragging) return;
        
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const mouseX = (e.clientX - rect.left) * scaleX;

        // Limitar el movimiento dentro del canvas
        iman.x = Math.max(iman.ancho/2, Math.min(canvas.width - Math.max(150, iman.ancho/2), mouseX));
    }

    function onPointerUp() {
        iman.isDragging = false;
        canvas.style.cursor = 'grab';
    }

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointerleave', onPointerUp);

    // Dibujar el Galvanómetro (Medidor de corriente sensible)
    function dibujarGalvanometro(x, y) {
        // Caja
        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(x, y, 140, 100);
        ctx.strokeStyle = '#9e9e9e';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, 140, 100);
        
        // Pantalla
        ctx.fillStyle = '#fff';
        ctx.fillRect(x + 10, y + 10, 120, 60);
        ctx.strokeRect(x + 10, y + 10, 120, 60);

        // Marcas y texto
        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('-G-', x + 70, y + 65);
        ctx.fillText('0', x + 70, y + 25);
        ctx.fillText('-', x + 25, y + 40);
        ctx.fillText('+', x + 115, y + 40);

        // Aguja
        ctx.save();
        ctx.translate(x + 70, y + 70); // Pivote base
        ctx.rotate(agujaGalvanometro); // Deflexión calculada
        
        ctx.strokeStyle = '#d32f2f';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -50);
        ctx.stroke();
        
        // Punto pivote
        ctx.fillStyle = '#212121';
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI*2);
        ctx.fill();
        ctx.restore();
    }

    // Dibujar Bobina y Cables
    function dibujarBobina() {
        ctx.strokeStyle = '#e65100'; // Color cobre
        ctx.lineWidth = 4;
        
        // Cables hacia el galvanómetro
        ctx.beginPath();
        ctx.moveTo(bobina.x, bobina.y + bobina.radioY);
        ctx.lineTo(bobina.x, 260);
        ctx.lineTo(500, 260);
        ctx.lineTo(500, 110);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(bobina.x, bobina.y - bobina.radioY);
        ctx.lineTo(bobina.x, 40);
        ctx.lineTo(540, 40);
        ctx.lineTo(540, 110);
        ctx.stroke();

        // Vueltas de la espira (perspectiva)
        for (let i = 0; i < bobina.vueltas; i++) {
            ctx.beginPath();
            ctx.ellipse(bobina.x + (i * 8) - 16, bobina.y, bobina.radioX, bobina.radioY, 0, 0, Math.PI * 2);
            ctx.stroke();
        }
    }

    // Dibujar Imán
    function dibujarIman() {
        ctx.save();
        ctx.translate(iman.x, iman.y);
        
        // Sombra
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(-iman.ancho/2 + 3, -iman.alto/2 + 3, iman.ancho, iman.alto);

        // Polo Norte (Rojo) a la derecha
        ctx.fillStyle = '#d32f2f';
        ctx.fillRect(0, -iman.alto/2, iman.ancho/2, iman.alto);
        
        // Polo Sur (Azul) a la izquierda
        ctx.fillStyle = '#1976d2';
        ctx.fillRect(-iman.ancho/2, -iman.alto/2, iman.ancho/2, iman.alto);

        ctx.fillStyle = '#fff';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('S', -iman.ancho/4, 0);
        ctx.fillText('N', iman.ancho/4, 0);
        
        ctx.restore();
    }

    // Ciclo de animación principal
    function animar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1. Cálculo de física: La inducción depende de la velocidad del imán y su proximidad
        velocidadX = iman.x - lastX;
        lastX = iman.x;

        // Factor de inducción: es más fuerte cuando el imán cruza el centro de la bobina
        const distanciaCentro = Math.abs(iman.x - bobina.x);
        // Curva de Gauss simplificada para la fuerza magnética
        const proximidad = Math.max(0, 1 - (distanciaCentro / 200)); 
        
        // FEM inducida proporcional a velocidad * proximidad (Ley de Faraday)
        const fem = velocidadX * proximidad * 0.08; 
        
        // Actualizar el objetivo de la aguja (limitado entre -45 y 45 grados en radianes)
        agujaObjetivo = Math.max(-0.8, Math.min(0.8, fem));

        // Interpolar suavemente la aguja hacia el objetivo para que no sea errática
        agujaGalvanometro += (agujaObjetivo - agujaGalvanometro) * 0.2;

        // Feedback pedagógico en texto
        if (Math.abs(fem) > 0.05) {
            mensaje.textContent = fem > 0 ? "¡Corriente Inducida Positiva! (Imán avanzando)" : "¡Corriente Inducida Negativa! (Imán retrocediendo)";
        } else if (distanciaCentro < 100 && velocidadX === 0) {
            mensaje.textContent = "El imán está adentro, pero SIN MOVIMIENTO no hay variación de flujo (Corriente = 0).";
        } else {
            mensaje.textContent = "";
        }

        // 2. Renderizar capas (Imán atrás, Bobina en medio, Galv adelante)
        dibujarIman();
        dibujarBobina();
        dibujarGalvanometro(450, 110);

        requestAnimationFrame(animar);
    }

    // Iniciar ciclo
    animar();
}
/**
 * Renderiza el contenido teórico de la Semana 8 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana8(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Inductancia y Corriente Alterna (CA)</h3>
            <p>A diferencia de la corriente directa (CD) de las pilas, que fluye en un solo sentido, la <strong>corriente alterna (CA)</strong> invierte periódicamente su dirección. Es el tipo de corriente que utilizamos en nuestros hogares. Matemáticamente, el voltaje en CA se describe como una onda senoidal:</p>
            <p>$$V(t) = V_p \\sin(2\\pi f t)$$</p>
            <p>Donde $V_p$ es el voltaje pico y $f$ es la frecuencia en Hertz (Hz). La <strong>inductancia</strong> ($L$, medida en Henrios) es la propiedad de una bobina de oponerse a los cambios bruscos en esta corriente, generando una fem autoinducida.</p>

            <h3>2. Circuitos RC y CA</h3>
            <p>Un <strong>circuito RC</strong> combina resistencias (R) y capacitores (C). En corriente alterna, el capacitor se carga y descarga continuamente, creando un desfase entre el voltaje y la corriente. El tiempo que tarda un capacitor en cargarse depende de la constante de tiempo $\\tau$:</p>
            <p>$$\\tau = R \\cdot C$$</p>

            <h3>3. Transformadores y Generadores</h3>
            <p>Un <strong>transformador</strong> utiliza la inducción electromagnética para aumentar o disminuir el voltaje de CA, basándose en la relación de vueltas entre sus bobinas primaria ($N_p$) y secundaria ($N_s$):</p>
            <p>$$\\frac{V_p}{V_s} = \\frac{N_p}{N_s}$$</p>
            <p>Un <strong>generador eléctrico</strong> convierte energía mecánica en energía eléctrica (usando la Ley de Faraday), mientras que un <strong>motor eléctrico</strong> hace exactamente lo opuesto. La <strong>bobina de Ruhmkorff</strong> es un tipo de transformador antiguo capaz de generar pulsos de muy alto voltaje.</p>

            <h3>4. Síntesis de Maxwell</h3>
            <p>James Clerk Maxwell unificó la electricidad y el magnetismo en cuatro elegantes ecuaciones. Demostró que un campo eléctrico variable crea un campo magnético, y viceversa. Su mayor predicción fue que estas ondas electromagnéticas viajan a la velocidad de la luz, revelando que ¡la luz misma es una onda electromagnética!</p>
        </div>
        
        <hr>
        
        <h3>Laboratorio Virtual: Osciloscopio de Corriente Alterna</h3>
        <div class="simulador-container" style="background: #111; padding: 20px; border-radius: 10px;">
            <p style="font-size: 0.9em; margin-bottom: 15px; color: #fff;">Ajusta la amplitud (Voltaje Pico) y la frecuencia (Hz) de la señal. Observa cómo cambia la forma de onda en la pantalla del osciloscopio.</p>
            
            <div class="controles-simulador" style="display: flex; flex-wrap: wrap; gap: 15px; width: 100%; max-width: 500px; margin: 0 auto 20px;">
                <div style="flex: 1; background: #333; padding: 15px; border-radius: 8px; color: #fff;">
                    <label style="font-weight: bold; display: block; margin-bottom: 10px; color: #4fc3f7;">
                        Amplitud (Voltaje): <span id="val-amplitud">50</span> V
                    </label>
                    <input type="range" id="slider-amplitud" min="10" max="100" value="50" style="width: 100%;">
                </div>
                <div style="flex: 1; background: #333; padding: 15px; border-radius: 8px; color: #fff;">
                    <label style="font-weight: bold; display: block; margin-bottom: 10px; color: #aed581;">
                        Frecuencia: <span id="val-frecuencia">60</span> Hz
                    </label>
                    <input type="range" id="slider-frecuencia" min="10" max="120" value="60" style="width: 100%;">
                </div>
            </div>

            <div style="position: relative; width: 100%; max-width: 500px; margin: 0 auto;">
                <canvas id="canvas-osciloscopio" width="500" height="300" style="background: #001100; border: 4px solid #424242; border-radius: 15px; width: 100%; box-shadow: inset 0 0 20px #000;"></canvas>
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(rgba(255,255,255,0.1), transparent 50%, rgba(0,0,0,0.4)); border-radius: 15px; pointer-events: none;"></div>
            </div>
        </div>
    `;

    iniciarSimuladorOsciloscopio();
}

/**
 * Lógica para la animación interactiva del osciloscopio virtual.
 */
function iniciarSimuladorOsciloscopio() {
    const canvas = document.getElementById('canvas-osciloscopio');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const sliderAmp = document.getElementById('slider-amplitud');
    const sliderFreq = document.getElementById('slider-frecuencia');
    const valAmp = document.getElementById('val-amplitud');
    const valFreq = document.getElementById('val-frecuencia');

    let tiempo = 0;
    let animacionId;

    // Actualizar etiquetas al mover los deslizadores
    sliderAmp.addEventListener('input', () => valAmp.textContent = sliderAmp.value);
    sliderFreq.addEventListener('input', () => valFreq.textContent = sliderFreq.value);

    // Dibuja la cuadrícula de referencia del osciloscopio
    function dibujarCuadricula() {
        ctx.strokeStyle = '#004400';
        ctx.lineWidth = 1;

        // Líneas verticales y horizontales
        for (let x = 0; x <= canvas.width; x += 50) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
        }
        for (let y = 0; y <= canvas.height; y += 50) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
        }

        // Ejes centrales más brillantes
        ctx.strokeStyle = '#007700';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(0, canvas.height / 2); ctx.lineTo(canvas.width, canvas.height / 2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(canvas.width / 2, 0); ctx.lineTo(canvas.width / 2, canvas.height); ctx.stroke();
    }

    // Ciclo principal de renderizado
    function animarOsciloscopio() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        dibujarCuadricula();

        const amplitud = parseFloat(sliderAmp.value);
        // Ajustamos la escala de la frecuencia visualmente para que encaje en la pantalla
        const frecuencia = parseFloat(sliderFreq.value) * 0.001; 
        
        const centroY = canvas.height / 2;

        // Efecto de rastro estilo fósforo CRT (Sombra y brillo)
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00ff00';
        ctx.strokeStyle = '#00ff00';
        ctx.lineWidth = 3;
        ctx.lineJoin = 'round';

        ctx.beginPath();
        
        // Trazar la onda punto por punto en el ancho del canvas
        for (let x = 0; x < canvas.width; x++) {
            // y = A * sin(wt + kx)
            // Agregamos 'tiempo' a la fase para que la onda viaje hacia la izquierda
            const y = centroY - amplitud * Math.sin(frecuencia * x + tiempo);
            
            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        
        ctx.stroke();

        // Apagar sombras para que no afecten la cuadrícula en el siguiente frame
        ctx.shadowBlur = 0;

        // Incrementar el tiempo para animar la fase de la onda
        // Una frecuencia más alta hace que la onda corra más rápido visualmente
        tiempo += parseFloat(sliderFreq.value) * 0.002;

        animacionId = requestAnimationFrame(animarOsciloscopio);
    }

    // Iniciar la animación
    animarOsciloscopio();
}
/**
 * Renderiza el contenido teórico de la Semana 9 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana9(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Naturaleza y velocidad de la luz</h3>
            <p>Históricamente, la luz fue un misterio. Hoy sabemos que tiene una naturaleza dual (onda-partícula). En la óptica geométrica, la estudiamos basándonos en la propagación rectilínea de la luz[cite: 2, 3]. Para medir su increíble rapidez ($c \\approx 3 \\times 10^8 \\text{ m/s}$), los científicos idearon métodos ingeniosos, destacando los métodos de Röemer (usando las lunas de Júpiter) y Michelson (usando espejos rotatorios) para determinar la rapidez o magnitud de la velocidad de la luz[cite: 3].</p>

            <h3>2. Fotometría</h3>
            <p>La fotometría mide la luz como es percibida por el ojo humano:</p>
            <ul>
                <li><strong>Intensidad luminosa ($I$):</strong> La "fuerza" de la fuente de luz, medida en candelas (cd). Es parte del estudio de la intensidad luminosa y flujo luminoso[cite: 3].</li>
                <li><strong>Flujo luminoso ($\\Phi$):</strong> La cantidad total de energía luminosa emitida, medida en lúmenes (lm).</li>
                <li><strong>Iluminación ($E$):</strong> La cantidad de luz que cae sobre una superficie. Se mide en luxes (lx). La ley de iluminación [cite: 3] establece que disminuye con el cuadrado de la distancia ($d$):<br>$$E = \\frac{I}{d^2}$$</li>
            </ul>

            <h3>3. Leyes de reflexión y espejos esféricos</h3>
            <p>Cuando la luz rebota en una superficie, sigue las leyes de reflexión de la luz[cite: 3]: el rayo incidente, el reflejado y la normal están en el mismo plano, y el ángulo de incidencia es igual al ángulo de reflexión ($\\theta_i = \\theta_r$).</p>
            <p>Los espejos esféricos [cite: 3] pueden ser <strong>cóncavos</strong> (convergen la luz, como el interior de una cuchara) o <strong>convexos</strong> (divergen la luz, como los espejos de seguridad en las tiendas). Para calcular dónde se formará la imagen ($d_i$) dado un objeto a una distancia ($d_o$) y la distancia focal ($f$), usamos la Ecuación del Espejo:</p>
            <p>$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$$</p>
        </div>
        
        <hr>
        
        <h3>Laboratorio Virtual: Trazado de Rayos en Espejos</h3>
        <div class="simulador-container" style="padding: 20px; background: #fafafa; border-radius: 10px;">
            <p style="font-size: 0.9em; margin-bottom: 15px;">Mueve el objeto (la flecha azul) ajustando su distancia al espejo. Observa cómo los rayos de luz interactúan con el foco (F) y el centro de curvatura (C) para formar la imagen (flecha roja).</p>
            
            <div class="controles-simulador" style="display: flex; flex-wrap: wrap; gap: 15px; width: 100%; max-width: 600px; margin: 0 auto 20px; align-items: center; justify-content: center;">
                <div style="flex: 1; min-width: 200px; background: #e3f2fd; padding: 15px; border-radius: 8px;">
                    <label style="font-weight: bold; display: block; margin-bottom: 10px; color: #1565c0;">
                        Distancia del Objeto ($d_o$): <span id="val-distancia">150</span> cm
                    </label>
                    <input type="range" id="slider-distancia" min="30" max="300" value="150" style="width: 100%;">
                </div>
                <div>
                    <button id="btn-toggle-espejo" class="btn-accion" style="padding: 15px 20px; border-radius: 8px; background: #0f4c75; color: white; border: none; font-weight: bold; cursor: pointer;">
                        Espejo: CÓNCAVO
                    </button>
                </div>
            </div>

            <div style="background: #263238; color: #fff; padding: 10px; border-radius: 5px; margin-bottom: 15px; font-family: monospace; display: flex; justify-content: space-around;">
                <span>Foco ($f$): <span id="lbl-f">100</span> cm</span>
                <span>Dist. Imagen ($d_i$): <span id="lbl-di">300</span> cm</span>
                <span>Aumento ($m$): <span id="lbl-m">-2.00</span></span>
            </div>

            <canvas id="canvas-optica" width="600" height="300" style="background: #ffffff; border: 2px solid #ccc; border-radius: 8px; width: 100%; max-width: 600px;"></canvas>
        </div>
    `;

    iniciarSimuladorOptica();
}

/**
 * Lógica para el simulador de trazado de rayos ópticos.
 */
function iniciarSimuladorOptica() {
    const canvas = document.getElementById('canvas-optica');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const sliderDist = document.getElementById('slider-distancia');
    const valDist = document.getElementById('val-distancia');
    const btnToggle = document.getElementById('btn-toggle-espejo');
    
    const lblF = document.getElementById('lbl-f');
    const lblDi = document.getElementById('lbl-di');
    const lblM = document.getElementById('lbl-m');

    let tipoEspejo = 'concavo'; // 'concavo' o 'convexo'
    const focoAbsoluto = 100; // 100px = 100cm en nuestra escala
    const alturaObjeto = 50;
    const ejeY = canvas.height / 2;
    const posEspejoX = canvas.width / 2; // El espejo está en el centro del canvas (x=300)

    function calcularYRenderizar() {
        const do_val = parseFloat(sliderDist.value);
        valDist.textContent = do_val;

        // Signos según convención óptica: 
        // Cóncavo: foco frente al espejo (+). Convexo: foco detrás (-).
        const f = tipoEspejo === 'concavo' ? focoAbsoluto : -focoAbsoluto;
        
        let di = 0;
        let m = 0;

        // Evitar división por cero si el objeto está exactamente en el foco
        if (do_val === f && tipoEspejo === 'concavo') {
            di = Infinity;
            m = Infinity;
            lblDi.textContent = "Infinito";
            lblM.textContent = "Infinito";
        } else {
            // Ecuación: 1/f = 1/do + 1/di  =>  di = (f * do) / (do - f)
            di = (f * do_val) / (do_val - f);
            m = -di / do_val;
            
            lblDi.textContent = di.toFixed(1);
            lblM.textContent = m.toFixed(2);
        }

        lblF.textContent = f;
        
        dibujarEscena(do_val, di, m, f);
    }

    function dibujarFlecha(x, yBase, altura, color, esVirtual = false) {
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 4;
        
        if (esVirtual) {
            ctx.setLineDash([5, 5]);
        } else {
            ctx.setLineDash([]);
        }

        const yPunta = yBase - altura;

        ctx.beginPath();
        ctx.moveTo(x, yBase);
        ctx.lineTo(x, yPunta);
        ctx.stroke();

        ctx.setLineDash([]); // Reset para la punta

        // Dibujar punta de flecha
        ctx.beginPath();
        if (altura > 0) {
            ctx.moveTo(x, yPunta);
            ctx.lineTo(x - 6, yPunta + 10);
            ctx.lineTo(x + 6, yPunta + 10);
        } else {
            ctx.moveTo(x, yPunta);
            ctx.lineTo(x - 6, yPunta - 10);
            ctx.lineTo(x + 6, yPunta - 10);
        }
        ctx.fill();
    }

    function dibujarEscena(do_val, di, m, f) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1. Eje Óptico Principal
        ctx.strokeStyle = '#9e9e9e';
        ctx.lineWidth = 1;
        ctx.setLineDash([10, 5]);
        ctx.beginPath();
        ctx.moveTo(0, ejeY);
        ctx.lineTo(canvas.width, ejeY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Puntos Clave: Foco (F) y Centro de Curvatura (C)
        const posX_F = posEspejoX - f; // Si f es -, posX_F queda a la derecha
        const posX_C = posEspejoX - (2 * f);

        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        ctx.beginPath(); ctx.arc(posX_F, ejeY, 4, 0, Math.PI*2); ctx.fill();
        ctx.fillText('F', posX_F - 5, ejeY + 20);
        
        ctx.beginPath(); ctx.arc(posX_C, ejeY, 4, 0, Math.PI*2); ctx.fill();
        ctx.fillText('C', posX_C - 5, ejeY + 20);

        // 2. Dibujar el Espejo
        ctx.strokeStyle = '#607d8b';
        ctx.lineWidth = 4;
        ctx.beginPath();
        if (tipoEspejo === 'concavo') {
            // Cóncavo: la curva envuelve a la izquierda
            ctx.arc(posX_C, ejeY, Math.abs(2 * f), -Math.PI/6, Math.PI/6);
        } else {
            // Convexo: la curva envuelve a la derecha
            ctx.arc(posX_C, ejeY, Math.abs(2 * f), Math.PI - Math.PI/6, Math.PI + Math.PI/6);
        }
        ctx.stroke();

        // 3. Posiciones de Objeto e Imagen
        const xObj = posEspejoX - do_val; // El objeto siempre está a la izquierda
        const yPuntaObj = ejeY - alturaObjeto;
        
        const xImg = posEspejoX - di;
        const alturaImg = alturaObjeto * m;

        // 4. Trazado de Rayos Principales (solo si no estamos exactamente en el foco)
        if (di !== Infinity) {
            ctx.lineWidth = 1.5;
            
            // Rayo 1: Paralelo al eje, se refleja pasando por el foco
            ctx.strokeStyle = 'rgba(255, 152, 0, 0.8)'; // Naranja
            ctx.beginPath();
            ctx.moveTo(xObj, yPuntaObj);
            ctx.lineTo(posEspejoX, yPuntaObj); // Va al espejo
            
            if (tipoEspejo === 'concavo') {
                ctx.lineTo(xImg, ejeY - alturaImg); // Reflejo real
            } else {
                ctx.lineTo(posEspejoX + do_val, yPuntaObj - do_val * (-alturaObjeto/f)); // Diverge
                // Extensión virtual hacia el foco
                ctx.setLineDash([5, 5]);
                ctx.moveTo(posEspejoX, yPuntaObj);
                ctx.lineTo(posX_F, ejeY);
                ctx.setLineDash([]);
            }
            ctx.stroke();

            // Rayo 2: Pasa por el foco, se refleja paralelo al eje
            ctx.strokeStyle = 'rgba(76, 175, 80, 0.8)'; // Verde
            ctx.beginPath();
            ctx.moveTo(xObj, yPuntaObj);
            if (tipoEspejo === 'concavo') {
                const yEspejoRayo2 = ejeY + (alturaObjeto * f) / (do_val - f);
                ctx.lineTo(posEspejoX, yEspejoRayo2);
                ctx.lineTo(xImg, yEspejoRayo2);
            } else {
                // Va hacia el foco virtual
                const pendienteHaciaFoco = (ejeY - yPuntaObj) / (posX_F - xObj);
                const yEspejoRayo2 = yPuntaObj + pendienteHaciaFoco * do_val;
                ctx.lineTo(posEspejoX, yEspejoRayo2); // Toca el espejo
                ctx.lineTo(xObj, yEspejoRayo2); // Refleja paralelo
                
                ctx.setLineDash([5, 5]);
                ctx.moveTo(posEspejoX, yEspejoRayo2);
                ctx.lineTo(xImg, yEspejoRayo2);
                ctx.setLineDash([]);
            }
            ctx.stroke();
        }

        // 5. Dibujar Objeto (Azul)
        dibujarFlecha(xObj, ejeY, alturaObjeto, '#1976d2');

        // 6. Dibujar Imagen (Rojo) - Si existe
        if (di !== Infinity) {
            const esVirtual = (tipoEspejo === 'concavo' && di < 0) || tipoEspejo === 'convexo';
            dibujarFlecha(xImg, ejeY, alturaImg, '#d32f2f', esVirtual);
        }
    }

    // Listeners
    sliderDist.addEventListener('input', calcularYRenderizar);
    
    btnToggle.addEventListener('click', () => {
        if (tipoEspejo === 'concavo') {
            tipoEspejo = 'convexo';
            btnToggle.style.background = '#d81b60';
            btnToggle.textContent = 'Espejo: CONVEXO';
        } else {
            tipoEspejo = 'concavo';
            btnToggle.style.background = '#0f4c75';
            btnToggle.textContent = 'Espejo: CÓNCAVO';
        }
        calcularYRenderizar();
    });

    // Render inicial
    calcularYRenderizar();
}
/**
 * Renderiza el contenido teórico de la Semana 10 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana10(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Refracción de la luz y Ley de Snell</h3>
            <p>La <strong>refracción</strong> ocurre cuando la luz pasa de un medio transparente a otro de diferente densidad (por ejemplo, del aire al agua), lo que provoca un cambio en su velocidad y, en consecuencia, en su dirección. Cada material tiene un <strong>índice de refracción ($n$)</strong>, definido como la proporción entre la velocidad de la luz en el vacío ($c$) y en el medio ($v$):</p>
            <p>$$n = \\frac{c}{v}$$</p>
            <p>Para calcular cómo se desvía la luz, utilizamos la <strong>Ley de Snell</strong>:</p>
            <p>$$n_1 \\sin(\\theta_1) = n_2 \\sin(\\theta_2)$$</p>
            <p>Donde $\\theta_1$ es el ángulo de incidencia y $\\theta_2$ el de refracción, ambos medidos desde la línea Normal.</p>

            <h3>2. Las lentes y sus características</h3>
            <p>Una lente es un medio transparente limitado por caras curvas. Se dividen en dos tipos:</p>
            <ul>
                <li><strong>Convergentes (Convexas):</strong> Son más gruesas en el centro. Concentran los rayos de luz en un punto llamado Foco. Forman imágenes reales o virtuales (como las lupas).</li>
                <li><strong>Divergentes (Cóncavas):</strong> Son más delgadas en el centro. Separan los rayos de luz, formando siempre imágenes virtuales, derechas y reducidas.</li>
            </ul>

            <h3>3. Potencia de una lente</h3>
            <p>La capacidad de una lente para desviar los rayos de luz se llama <strong>potencia ($P$)</strong> y es el inverso de su distancia focal ($f$) expresada en metros. Su unidad es la Dioptría ($D$).</p>
            <p>$$P = \\frac{1}{f}$$</p>

            <h3>4. Instrumentos ópticos y la Visión humana</h3>
            <p>Combinando lentes podemos crear el <strong>microscopio</strong> (para ver objetos pequeños y cercanos) y el <strong>telescopio</strong> (para objetos grandes y muy lejanos). El instrumento óptico más perfecto es el <strong>ojo humano</strong>. Su lente principal, el cristalino, ajusta su forma para enfocar la luz exactamente en la retina. Cuando este sistema falla, ocurren defectos visuales como:</p>
            <ul>
                <li><strong>Miopía:</strong> El ojo es muy alargado; la imagen se forma antes de la retina. Se corrige con lentes <em>divergentes</em> (potencia negativa).</li>
                <li><strong>Hipermetropía:</strong> El ojo es muy corto; la imagen se forma detrás de la retina. Se corrige con lentes <em>convergentes</em> (potencia positiva).</li>
            </ul>
        </div>
        
        <hr>
        
        <h3>Laboratorio Virtual: Ley de Snell y Refracción</h3>
        <div class="simulador-container" style="background: #eef2f3; padding: 20px; border-radius: 10px;">
            <p style="font-size: 0.9em; margin-bottom: 15px; color: #333;">Modifica el ángulo del rayo láser (incidencia) y cambia el material del segundo medio. Observa cómo la luz se "dobla" al entrar al nuevo material.</p>
            
            <div class="controles-simulador" style="display: flex; flex-wrap: wrap; gap: 15px; width: 100%; max-width: 600px; margin: 0 auto 20px;">
                <div style="flex: 1; min-width: 200px; background: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <label style="font-weight: bold; display: block; margin-bottom: 10px; color: #d32f2f;">
                        Ángulo de Incidencia ($\\theta_1$): <span id="val-angulo1">45</span>°
                    </label>
                    <input type="range" id="slider-angulo" min="0" max="89" value="45" style="width: 100%;">
                </div>
                <div style="flex: 1; min-width: 200px; background: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <label style="font-weight: bold; display: block; margin-bottom: 5px; color: #1976d2;">
                        Índice Medio 2 ($n_2$): <span id="val-n2">1.33</span>
                    </label>
                    <select id="select-material" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc;">
                        <option value="1.00">Aire (n = 1.00)</option>
                        <option value="1.33" selected>Agua (n = 1.33)</option>
                        <option value="1.52">Vidrio Corona (n = 1.52)</option>
                        <option value="1.77">Zafiro (n = 1.77)</option>
                        <option value="2.42">Diamante (n = 2.42)</option>
                        <option value="0.5">Medio menos denso (n = 0.5)</option>
                    </select>
                </div>
            </div>

            <div style="background: #263238; color: #aed581; padding: 15px; border-radius: 5px; margin-bottom: 15px; font-family: 'Courier New', monospace; text-align: center; font-size: 1.1em;">
                <span>Ángulo de Refracción ($\\theta_2$): <strong id="lbl-theta2">32.1</strong>°</span>
                <div id="lbl-reflexion-total" style="color: #ff5252; font-weight: bold; display: none; margin-top: 5px;">¡REFLEXIÓN TOTAL INTERNA!</div>
            </div>

            <canvas id="canvas-snell" width="500" height="400" style="background: #ffffff; border: 2px solid #ccc; border-radius: 8px; width: 100%; max-width: 500px;"></canvas>
        </div>
    `;

    iniciarSimuladorSnell();
}

/**
 * Lógica matemática y de renderizado para el simulador de la Ley de Snell.
 */
function iniciarSimuladorSnell() {
    const canvas = document.getElementById('canvas-snell');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const sliderAngulo = document.getElementById('slider-angulo');
    const valAngulo = document.getElementById('val-angulo1');
    const selectMaterial = document.getElementById('select-material');
    const valN2 = document.getElementById('val-n2');
    const lblTheta2 = document.getElementById('lbl-theta2');
    const lblReflexion = document.getElementById('lbl-reflexion-total');

    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;

    function calcularYDibujar() {
        const theta1_deg = parseFloat(sliderAngulo.value);
        const n1 = 1.00; // Asumimos que el medio 1 siempre es Aire para simplificar
        const n2 = parseFloat(selectMaterial.value);
        
        valAngulo.textContent = theta1_deg;
        valN2.textContent = n2.toFixed(2);

        // Ley de Snell: sin(theta2) = (n1 / n2) * sin(theta1)
        const theta1_rad = theta1_deg * (Math.PI / 180);
        const sin_theta2 = (n1 / n2) * Math.sin(theta1_rad);

        let theta2_deg = 0;
        let esReflexionTotal = false;

        if (sin_theta2 > 1) {
            // No hay refracción, toda la luz se refleja internamente
            esReflexionTotal = true;
            theta2_deg = theta1_deg; // Ángulo de reflexión = Ángulo de incidencia
            lblTheta2.textContent = "--";
            lblReflexion.style.display = 'block';
        } else {
            esReflexionTotal = false;
            const theta2_rad = Math.asin(sin_theta2);
            theta2_deg = theta2_rad * (180 / Math.PI);
            lblTheta2.textContent = theta2_deg.toFixed(1);
            lblReflexion.style.display = 'none';
        }

        dibujarEscena(theta1_deg, theta2_deg, n1, n2, esReflexionTotal);
    }

    function dibujarEscena(theta1, theta2, n1, n2, esReflexionTotal) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1. Dibujar los dos medios (Aire arriba, Material abajo)
        // Medio 1 (Aire)
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, centroY);
        // Medio 2 (Agua/Vidrio/etc)
        // Ajustar el color según el índice (más denso = azul más oscuro)
        const opacidad = Math.min(0.8, n2 * 0.3);
        ctx.fillStyle = `rgba(33, 150, 243, ${opacidad})`;
        ctx.fillRect(0, centroY, canvas.width, canvas.height / 2);

        // Textos de los medios
        ctx.fillStyle = '#9e9e9e';
        ctx.font = '16px Arial';
        ctx.fillText(`Medio 1: Aire (n=${n1.toFixed(2)})`, 10, 30);
        ctx.fillStyle = '#0d47a1';
        ctx.fillText(`Medio 2: ${selectMaterial.options[selectMaterial.selectedIndex].text}`, 10, centroY + 30);

        // 2. Línea Normal (Perpendicular a la superficie)
        ctx.strokeStyle = '#9e9e9e';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([10, 10]);
        ctx.beginPath();
        ctx.moveTo(centroX, 20);
        ctx.lineTo(centroX, canvas.height - 20);
        ctx.stroke();
        ctx.setLineDash([]); // Reset

        // 3. Interfaz de los medios
        ctx.strokeStyle = '#212121';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, centroY);
        ctx.lineTo(canvas.width, centroY);
        ctx.stroke();

        // 4. Rayo Incidente (Láser rojo)
        // El ángulo se mide desde la Normal (eje Y negativo)
        // Si el ángulo es 0, va recto hacia abajo. Si es 90, va hacia la derecha.
        const theta1_rad_canvas = (theta1 - 90) * (Math.PI / 180);
        const radioRayo = 250;
        
        const xIncidente = centroX + radioRayo * Math.cos(theta1_rad_canvas);
        const yIncidente = centroY + radioRayo * Math.sin(theta1_rad_canvas);

        ctx.strokeStyle = '#d32f2f'; // Rojo láser
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(xIncidente, yIncidente);
        ctx.lineTo(centroX, centroY);
        ctx.stroke();

        // Puntero láser (dibujado en el origen del rayo incidente)
        ctx.fillStyle = '#424242';
        ctx.save();
        ctx.translate(xIncidente, yIncidente);
        ctx.rotate(theta1_rad_canvas + Math.PI/2);
        ctx.fillRect(-10, -20, 20, 40);
        ctx.fillStyle = '#d32f2f';
        ctx.fillRect(-5, 20, 10, 5); // Boca del láser
        ctx.restore();

        // 5. Rayo Refractado (o Reflejado)
        ctx.beginPath();
        ctx.moveTo(centroX, centroY);
        
        if (esReflexionTotal) {
            // El rayo no entra al medio 2, se refleja en el medio 1
            const thetaReflejado_rad = (90 - theta1) * (Math.PI / 180);
            const xReflejado = centroX + radioRayo * Math.cos(thetaReflejado_rad);
            const yReflejado = centroY - radioRayo * Math.sin(thetaReflejado_rad);
            ctx.lineTo(xReflejado, yReflejado);
        } else {
            // El rayo refractado pasa al medio 2 (mide desde la Normal inferior, eje Y positivo)
            const theta2_rad_canvas = (90 - theta2) * (Math.PI / 180);
            const xRefractado = centroX + radioRayo * Math.cos(theta2_rad_canvas);
            const yRefractado = centroY + radioRayo * Math.sin(theta2_rad_canvas);
            ctx.lineTo(xRefractado, yRefractado);
            
            // Dibujar también un tenue rayo reflejado natural (la luz siempre tiene una reflexión parcial)
            ctx.strokeStyle = 'rgba(211, 47, 47, 0.2)';
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(centroX, centroY);
            const thetaReflejado_rad = (90 - theta1) * (Math.PI / 180);
            ctx.lineTo(centroX + radioRayo * Math.cos(thetaReflejado_rad), centroY - radioRayo * Math.sin(thetaReflejado_rad));
        }
        
        ctx.strokeStyle = '#d32f2f';
        ctx.stroke();

        // 6. Arcos de los ángulos
        ctx.strokeStyle = '#1976d2';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        // Arco de incidencia (arriba)
        ctx.arc(centroX, centroY, 40, -Math.PI/2, (theta1 - 90) * (Math.PI / 180), true);
        ctx.stroke();
        
        if (!esReflexionTotal) {
            ctx.beginPath();
            // Arco de refracción (abajo)
            ctx.arc(centroX, centroY, 40, Math.PI/2, (90 - theta2) * (Math.PI / 180), true);
            ctx.stroke();
        }
    }

    // Event Listeners
    sliderAngulo.addEventListener('input', calcularYDibujar);
    selectMaterial.addEventListener('change', calcularYDibujar);

    // Render Inicial
    calcularYDibujar();
}
/**
 * Renderiza el contenido teórico de la Semana 11 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana11(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Óptica física: Interferencia, Difracción y Polarización</h3>
            <p>La óptica física estudia los fenómenos que demuestran el comportamiento ondulatorio de la luz[cite: 3]:</p>
            <ul>
                <li><strong>Interferencia y anillos de Newton[cite: 3]:</strong> Cuando dos ondas de luz se superponen, pueden sumarse (interferencia constructiva, más luz) o cancelarse (interferencia destructiva, oscuridad). Los anillos de Newton son un patrón de interferencia circular clásico.</li>
                <li><strong>Difracción de la luz[cite: 3]:</strong> Es la capacidad de la luz para "doblar" las esquinas o esparcirse al pasar por una rendija muy estrecha.</li>
                <li><strong>Polarización de la luz[cite: 3]:</strong> La luz normal vibra en todos los planos. La luz polarizada vibra en un solo plano. Los lentes de sol polarizados bloquean los reflejos horizontales usando este principio.</li>
            </ul>

            <h3>2. Espectro electromagnético [cite: 4]</h3>
            <p>La luz visible es solo una pequeñísima fracción de las propiedades electromagnéticas de la luz y el espectro electromagnético. Este abarca desde las ondas de radio (baja energía) hasta los rayos gamma (alta energía). La velocidad de todas estas ondas en el vacío es $c$, y se relaciona con su longitud de onda ($\\lambda$) y frecuencia ($f$):</p>
            <p>$$c = \\lambda \\cdot f$$</p>

            <h3>3. Naturaleza del color y dispersión [cite: 3]</h3>
            <p>El color no es una propiedad de los objetos, sino una percepción de nuestros ojos ante diferentes longitudes de onda. Isaac Newton demostró la descomposición o dispersión de la luz blanca [cite: 3] al pasarla por un prisma, revelando que está compuesta por todos los colores del arcoíris.</p>

            <h3>4. Teoría del Color y Daltonismo [cite: 3]</h3>
            <p>En la física de la luz (pantallas, focos), utilizamos la <strong>síntesis aditiva</strong>:</p>
            <ul>
                <li><strong>Colores primarios o fundamentales[cite: 3]:</strong> Rojo, Verde y Azul (RGB).</li>
                <li><strong>Colores binarios y características de algunos colores[cite: 3]:</strong> Surgen de la mezcla de dos primarios. Rojo + Verde = Amarillo; Rojo + Azul = Magenta; Verde + Azul = Cian. Si mezclas los tres, obtienes luz blanca.</li>
            </ul>
            <p>El <strong>daltonismo [cite: 3]</strong> es una anomalía visual donde los fotorreceptores del ojo (conos) tienen dificultades para distinguir ciertas longitudes de onda, comúnmente confundiendo el rojo y el verde.</p>
        </div>
        
        <hr>
        
        <h3>Laboratorio Virtual: Síntesis Aditiva de Color (RGB)</h3>
        <div class="simulador-container" style="background: #121212; padding: 20px; border-radius: 10px;">
            <p style="font-size: 0.9em; margin-bottom: 15px; color: #e0e0e0;">Ajusta la intensidad de los emisores de luz Roja, Verde y Azul. Observa cómo la combinación de estas tres luces primarias genera millones de colores, incluyendo el blanco puro.</p>
            
            <div style="display: flex; flex-wrap: wrap; gap: 20px; width: 100%; justify-content: center; align-items: center;">
                
                <div style="flex: 1; min-width: 250px; background: #1e1e1e; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.5);">
                    <div style="margin-bottom: 15px;">
                        <label style="color: #ff5252; font-weight: bold; display: flex; justify-content: space-between;">
                            <span>Luz Roja (R)</span> <span id="val-r">0</span>
                        </label>
                        <input type="range" id="slider-r" min="0" max="255" value="0" style="width: 100%; accent-color: #ff5252;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="color: #69f0ae; font-weight: bold; display: flex; justify-content: space-between;">
                            <span>Luz Verde (G)</span> <span id="val-g">0</span>
                        </label>
                        <input type="range" id="slider-g" min="0" max="255" value="0" style="width: 100%; accent-color: #69f0ae;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="color: #448aff; font-weight: bold; display: flex; justify-content: space-between;">
                            <span>Luz Azul (B)</span> <span id="val-b">0</span>
                        </label>
                        <input type="range" id="slider-b" min="0" max="255" value="0" style="width: 100%; accent-color: #448aff;">
                    </div>
                    
                    <button id="btn-blanco" class="btn-accion" style="width: 100%; padding: 10px; border-radius: 5px; background: #ffffff; color: #000; border: none; font-weight: bold; cursor: pointer; margin-top: 10px;">
                        Generar Luz Blanca
                    </button>
                </div>

                <div style="flex: 1; min-width: 200px; display: flex; flex-direction: column; align-items: center;">
                    <div id="pantalla-color" style="width: 150px; height: 150px; border-radius: 50%; background-color: rgb(0,0,0); border: 4px solid #333; box-shadow: 0 0 20px rgba(0,0,0,0.8); transition: background-color 0.1s;"></div>
                    <div id="hex-color" style="color: #fff; font-family: 'Courier New', monospace; font-size: 1.2em; margin-top: 15px; font-weight: bold;">
                        #000000
                    </div>
                    <div id="analisis-color" style="color: #b0bec5; font-size: 0.9em; margin-top: 5px; text-align: center; min-height: 40px;">
                        Ausencia de luz (Negro).
                    </div>
                </div>
                
            </div>
        </div>
    `;

    iniciarSimuladorColor();
}

/**
 * Lógica para el simulador de mezcla aditiva de color (DOM interactivo).
 */
function iniciarSimuladorColor() {
    const sliderR = document.getElementById('slider-r');
    const sliderG = document.getElementById('slider-g');
    const sliderB = document.getElementById('slider-b');
    
    const valR = document.getElementById('val-r');
    const valG = document.getElementById('val-g');
    const valB = document.getElementById('val-b');
    
    const pantallaColor = document.getElementById('pantalla-color');
    const hexColorText = document.getElementById('hex-color');
    const analisisText = document.getElementById('analisis-color');
    const btnBlanco = document.getElementById('btn-blanco');

    // Función auxiliar para convertir RGB a Hexadecimal
    function rgbToHex(r, g, b) {
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
    }

    // Identifica colores clave para la retroalimentación pedagógica
    function analizarMezcla(r, g, b) {
        const umbral = 200; // Valor alto para considerar que un emisor está "encendido"
        const bajo = 50;    // Valor bajo para considerar que está "apagado"

        if (r > umbral && g > umbral && b > umbral) return "Mezcla total: Luz Blanca.";
        if (r < bajo && g < bajo && b < bajo) return "Ausencia de luz: Negro.";
        
        if (r > umbral && g < bajo && b < bajo) return "Color Primario: Rojo puro.";
        if (r < bajo && g > umbral && b < bajo) return "Color Primario: Verde puro.";
        if (r < bajo && g < bajo && b > umbral) return "Color Primario: Azul puro.";

        if (r > umbral && g > umbral && b < bajo) return "Color Binario: Amarillo (Rojo + Verde).";
        if (r > umbral && g < bajo && b > umbral) return "Color Binario: Magenta (Rojo + Azul).";
        if (r < bajo && g > umbral && b > umbral) return "Color Binario: Cian (Verde + Azul).";

        return "Mezcla compleja (Color terciario o intermedio).";
    }

    function actualizarColor() {
        const r = parseInt(sliderR.value);
        const g = parseInt(sliderG.value);
        const b = parseInt(sliderB.value);

        // Actualizar etiquetas numéricas
        valR.textContent = r;
        valG.textContent = g;
        valB.textContent = b;

        // Cambiar el color de fondo del círculo
        pantallaColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        
        // Efecto de resplandor (Glow) que simula emisión de luz
        pantallaColor.style.boxShadow = `0 0 30px rgba(${r}, ${g}, ${b}, 0.8)`;

        // Actualizar el código Hexadecimal
        hexColorText.textContent = rgbToHex(r, g, b);

        // Actualizar el análisis pedagógico
        analisisText.textContent = analizarMezcla(r, g, b);
    }

    // Asignar eventos a los sliders
    sliderR.addEventListener('input', actualizarColor);
    sliderG.addEventListener('input', actualizarColor);
    sliderB.addEventListener('input', actualizarColor);

    // Botón de atajo para Luz Blanca
    btnBlanco.addEventListener('click', () => {
        sliderR.value = 255;
        sliderG.value = 255;
        sliderB.value = 255;
        actualizarColor();
    });

    // Render inicial
    actualizarColor();
}
/**
 * Renderiza el contenido teórico de la Semana 12 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana12(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Tipos de vibración en el medio</h3>
            <p>Una onda mecánica necesita un medio material (sólido, líquido o gas) para propagarse. Según cómo vibran las partículas del medio respecto a la dirección en que viaja la onda, existen <strong>ondas longitudinales y transversales</strong>[cite: 4]:</p>
            <ul>
                <li><strong>Transversales:</strong> Las partículas vibran perpendicularmente a la dirección de propagación (como sacudir una cuerda)[cite: 4].</li>
                <li><strong>Longitudinales:</strong> Las partículas vibran en la misma dirección en que viaja la onda (como el sonido o un resorte que se comprime y estira)[cite: 4].</li>
            </ul>

            <h3>2. Geometría de la propagación</h3>
            <p>Para estudiar cómo se expanden las ondas, utilizamos tres conceptos geométricos clave: <strong>tren de ondas, frente de onda y rayo o vector de propagación</strong>[cite: 4]. El tren de ondas es la sucesión continua de pulsos. El frente de onda es la línea que une todos los puntos que están en la misma fase, y el rayo indica la dirección en que avanza dicho frente[cite: 4].</p>
            <p>Según las dimensiones en las que se expanden, tenemos <strong>ondas lineales, superficiales y tridimensionales</strong>[cite: 4]. Una onda en una cuerda es lineal (1D), las ondas en un estanque de agua son superficiales (2D) y el sonido en el aire es tridimensional (3D)[cite: 4].</p>

            <h3>3. Características de las ondas</h3>
            <p>Toda onda periódica se describe mediante las siguientes <strong>características de las ondas</strong>[cite: 4]:</p>
            <ul>
                <li><strong>Amplitud ($A$):</strong> La elongación máxima de la onda desde su posición de equilibrio.</li>
                <li><strong>Longitud de onda ($\\lambda$):</strong> La distancia entre dos puntos consecutivos que están en la misma fase (por ejemplo, de cresta a cresta). Se mide en metros.</li>
                <li><strong>Periodo ($T$):</strong> El tiempo que tarda en completarse un ciclo entero. Se mide en segundos.</li>
                <li><strong>Frecuencia ($f$):</strong> El número de ciclos que ocurren en un segundo. Es el inverso del periodo y se mide en Hertz (Hz): <br>$$f = \\frac{1}{T}$$</li>
            </ul>
            <p>La velocidad de propagación ($v$) de la onda depende del medio, pero siempre cumple la relación matemática:</p>
            <p>$$v = \\lambda \\cdot f \\quad \\text{o} \\quad v = \\frac{\\lambda}{T}$$</p>
        </div>
        
        <hr>
        
        <h3>Laboratorio Virtual: Cuerda Vibrante</h3>
        <div class="simulador-container" style="background: #2c3e50; padding: 20px; border-radius: 10px;">
            <p style="font-size: 0.9em; margin-bottom: 15px; color: #ecf0f1;">Ajusta los parámetros de la onda transversal. Observa cómo interactúan la amplitud, la frecuencia y la longitud de onda en tiempo real.</p>
            
            <div class="controles-simulador" style="display: flex; flex-wrap: wrap; gap: 15px; width: 100%; max-width: 600px; margin: 0 auto 20px;">
                <div style="flex: 1; min-width: 150px; background: #34495e; padding: 15px; border-radius: 8px; color: #fff;">
                    <label style="font-weight: bold; display: block; margin-bottom: 10px; color: #e74c3c;">
                        Amplitud ($A$): <span id="val-amplitud-onda">50</span> px
                    </label>
                    <input type="range" id="slider-amp-onda" min="10" max="100" value="50" style="width: 100%; accent-color: #e74c3c;">
                </div>
                <div style="flex: 1; min-width: 150px; background: #34495e; padding: 15px; border-radius: 8px; color: #fff;">
                    <label style="font-weight: bold; display: block; margin-bottom: 10px; color: #3498db;">
                        Frecuencia ($f$): <span id="val-freq-onda">1.0</span> Hz
                    </label>
                    <input type="range" id="slider-freq-onda" min="0.1" max="5.0" step="0.1" value="1.0" style="width: 100%; accent-color: #3498db;">
                </div>
                <div style="flex: 1; min-width: 150px; background: #34495e; padding: 15px; border-radius: 8px; color: #fff;">
                    <label style="font-weight: bold; display: block; margin-bottom: 10px; color: #2ecc71;">
                        Longitud ($\\lambda$): <span id="val-longitud-onda">200</span> px
                    </label>
                    <input type="range" id="slider-longitud-onda" min="50" max="400" value="200" style="width: 100%; accent-color: #2ecc71;">
                </div>
            </div>

            <div style="background: #1a252f; color: #f1c40f; padding: 10px; border-radius: 5px; margin-bottom: 15px; font-family: 'Courier New', monospace; text-align: center; font-size: 1.1em; font-weight: bold;">
                Velocidad de Propagación ($v = \\lambda \\cdot f$): <span id="lbl-velocidad-onda">200.0</span> px/s
            </div>

            <canvas id="canvas-cuerda" width="600" height="250" style="background: #ecf0f1; border: 4px solid #bdc3c7; border-radius: 8px; width: 100%; max-width: 600px; box-shadow: inset 0 0 10px rgba(0,0,0,0.1);"></canvas>
        </div>
    `;

    iniciarSimuladorCuerda();
}

/**
 * Lógica para la animación del simulador de la cuerda vibrante.
 */
function iniciarSimuladorCuerda() {
    const canvas = document.getElementById('canvas-cuerda');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const sliderAmp = document.getElementById('slider-amp-onda');
    const sliderFreq = document.getElementById('slider-freq-onda');
    const sliderLambda = document.getElementById('slider-longitud-onda');
    
    const valAmp = document.getElementById('val-amplitud-onda');
    const valFreq = document.getElementById('val-freq-onda');
    const valLambda = document.getElementById('val-longitud-onda');
    const lblVelocidad = document.getElementById('lbl-velocidad-onda');

    let tiempo = 0;
    let animacionId;

    // Actualizar etiquetas numéricas al deslizar
    function actualizarEtiquetas() {
        const A = parseFloat(sliderAmp.value);
        const f = parseFloat(sliderFreq.value);
        const lambda = parseFloat(sliderLambda.value);

        valAmp.textContent = A;
        valFreq.textContent = f.toFixed(1);
        valLambda.textContent = lambda;
        
        // Calcular velocidad teórica
        const v = lambda * f;
        lblVelocidad.textContent = v.toFixed(1);
    }

    sliderAmp.addEventListener('input', actualizarEtiquetas);
    sliderFreq.addEventListener('input', actualizarEtiquetas);
    sliderLambda.addEventListener('input', actualizarEtiquetas);

    // Ciclo principal de dibujo
    function animarCuerda() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Eje de equilibrio (línea punteada)
        const centroY = canvas.height / 2;
        ctx.strokeStyle = '#95a5a6';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(0, centroY);
        ctx.lineTo(canvas.width, centroY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Obtener variables de los sliders
        const A = parseFloat(sliderAmp.value);
        const f = parseFloat(sliderFreq.value);
        const lambda = parseFloat(sliderLambda.value);

        // Constantes de onda
        // Número de onda angular (k) = 2π / λ
        const k = (2 * Math.PI) / lambda;
        // Frecuencia angular (ω) = 2π * f
        // Ajustamos la escala de tiempo para que la animación se vea fluida en el canvas
        const omega = 2 * Math.PI * f; 

        // Dibujar la cuerda
        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 4;
        ctx.lineJoin = 'round';
        ctx.beginPath();

        // Trazar puntos: Ecuación de onda armónica -> y(x,t) = A * sin(kx - ωt)
        for (let x = 0; x <= canvas.width; x++) {
            // El signo menos en (k*x - omega*tiempo) hace que la onda viaje hacia la derecha
            const y = centroY - A * Math.sin(k * x - omega * tiempo);
            
            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();

        // Dibujar puntos de partículas de referencia (para mostrar que la materia solo sube y baja)
        ctx.fillStyle = '#2980b9';
        const puntosParticulas = [150, 300, 450]; // Posiciones en x
        puntosParticulas.forEach(xPos => {
            const yPos = centroY - A * Math.sin(k * xPos - omega * tiempo);
            ctx.beginPath();
            ctx.arc(xPos, yPos, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
        });

        // Avanzar el tiempo basándonos en los frames (asumiendo ~60 FPS)
        tiempo += 1 / 60;

        animacionId = requestAnimationFrame(animarCuerda);
    }

    // Inicializar
    actualizarEtiquetas();
    animarCuerda();
}
/**
 * Renderiza el contenido teórico de la Semana 13 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana13(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Reflexión y Refracción de las ondas</h3>
            <p>Las ondas mecánicas no viajan para siempre en línea recta; interactúan con su medio:</p>
            <ul>
                <li><strong>Reflexión:</strong> Cuando una onda choca contra un obstáculo que no puede traspasar, "rebota". El ángulo con el que incide es igual al ángulo con el que se refleja.</li>
                <li><strong>Refracción:</strong> Cuando una onda pasa de un medio a otro (por ejemplo, de aguas profundas a aguas superficiales), su velocidad cambia, lo que provoca que su frente de onda se "doble" o cambie de dirección.</li>
            </ul>

            <h3>2. Principio de superposición e Interferencia</h3>
            <p>A diferencia de la materia (dos piedras no pueden ocupar el mismo espacio), las ondas sí pueden cruzarse. El <strong>principio de superposición</strong> establece que cuando dos ondas se encuentran, el desplazamiento resultante es la suma algebraica de los desplazamientos individuales.</p>
            <p>Esto da lugar a la <strong>interferencia</strong>:</p>
            <ul>
                <li><strong>Constructiva:</strong> Cuando dos crestas coinciden, sus amplitudes se suman, creando una onda más grande.</li>
                <li><strong>Destructiva:</strong> Cuando la cresta de una onda coincide con el valle de otra, se cancelan mutuamente (el agua se queda quieta, o hay silencio en el caso del sonido).</li>
            </ul>
            

            <h3>3. Ondas estacionarias</h3>
            <p>Si envías una onda continua por una cuerda atada a una pared, la onda original interfiere con su propia reflexión. Si la frecuencia es la correcta, se forma un patrón de <strong>onda estacionaria</strong>, que parece no moverse. Está compuesta por <strong>nodos</strong> (puntos de cero movimiento por interferencia destructiva) y <strong>antinodos</strong> (puntos de máxima amplitud).</p>
            

            <h3>4. Difracción</h3>
            <p>Es la propiedad de las ondas de "esparcirse" o curvarse al pasar por el borde de un obstáculo o a través de una rendija pequeña. Es la razón por la cual puedes escuchar a alguien hablando a la vuelta de la esquina, aunque no puedas verlo.</p>
        </div>
        
        <hr>
        
        <h3>Laboratorio Virtual: Tanque de Ondas (Ripple Tank 2D)</h3>
        <div class="simulador-container" style="background: #1e1e1e; padding: 20px; border-radius: 10px;">
            <p style="font-size: 0.9em; margin-bottom: 15px; color: #b0bec5;">Simulación del cruce de frentes de onda. Observa las zonas grises (interferencia destructiva, el agua no se mueve) y las zonas de alto contraste blanco/negro (interferencia constructiva, olas muy altas y valles profundos).</p>
            
            <div class="controles-simulador" style="display: flex; flex-wrap: wrap; gap: 15px; width: 100%; max-width: 600px; margin: 0 auto 15px; justify-content: center;">
                <div style="flex: 1; min-width: 150px; background: #263238; padding: 10px; border-radius: 8px; color: #fff;">
                    <label style="font-size: 0.8em; color: #4fc3f7; display: block; margin-bottom: 5px;">Longitud de Onda ($\\lambda$)</label>
                    <input type="range" id="slider-lambda-ripple" min="10" max="60" value="30" style="width: 100%;">
                </div>
                <div style="flex: 1; min-width: 150px; background: #263238; padding: 10px; border-radius: 8px; color: #fff;">
                    <label style="font-size: 0.8em; color: #aed581; display: block; margin-bottom: 5px;">Distancia entre fuentes</label>
                    <input type="range" id="slider-distancia-fuentes" min="20" max="200" value="100" style="width: 100%;">
                </div>
                <div style="flex: 1; min-width: 150px; display: flex; align-items: center;">
                    <button id="btn-toggle-fuentes" class="btn-accion" style="width: 100%; padding: 12px; border-radius: 5px; background: #d81b60; color: white; border: none; font-weight: bold; cursor: pointer;">
                        2 Fuentes (Interferencia)
                    </button>
                </div>
            </div>

            <canvas id="canvas-rippletank" width="400" height="300" style="background: #000; border: 4px solid #424242; border-radius: 8px; width: 100%; max-width: 500px; margin: 0 auto; display: block; box-shadow: 0 5px 15px rgba(0,0,0,0.5);"></canvas>
        </div>
    `;

    iniciarSimuladorRippleTank();
}

/**
 * Lógica matemática de campos escalares para renderizar el tanque de ondas 2D.
 */
function iniciarSimuladorRippleTank() {
    const canvas = document.getElementById('canvas-rippletank');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const sliderLambda = document.getElementById('slider-lambda-ripple');
    const sliderDist = document.getElementById('slider-distancia-fuentes');
    const btnFuentes = document.getElementById('btn-toggle-fuentes');

    let numeroFuentes = 2;
    let tiempo = 0;
    let animacionId;
    
    // Resolución de renderizado: Cuanto más pequeño, más calidad pero más lento.
    // 4px es un excelente balance para celulares y mantiene los 60 FPS.
    const resolucion = 4; 

    btnFuentes.addEventListener('click', () => {
        if (numeroFuentes === 2) {
            numeroFuentes = 1;
            btnFuentes.style.background = '#0f4c75';
            btnFuentes.textContent = '1 Fuente (Onda Simple)';
            sliderDist.disabled = true;
            sliderDist.style.opacity = '0.5';
        } else {
            numeroFuentes = 2;
            btnFuentes.style.background = '#d81b60';
            btnFuentes.textContent = '2 Fuentes (Interferencia)';
            sliderDist.disabled = false;
            sliderDist.style.opacity = '1';
        }
    });

    function animarRippleTank() {
        const lambda = parseFloat(sliderLambda.value);
        const distFuentes = parseFloat(sliderDist.value);
        
        // Número de onda (k)
        const k = (2 * Math.PI) / lambda;
        // Velocidad angular de animación
        const velocidadFase = 0.5;

        // Posiciones de las fuentes generadoras
        const centroX = canvas.width / 2;
        const centroY = canvas.height / 3;
        
        let f1x = centroX;
        let f2x = centroX;

        if (numeroFuentes === 2) {
            f1x = centroX - (distFuentes / 2);
            f2x = centroX + (distFuentes / 2);
        }

        // Iteración sobre la matriz de "píxeles" del canvas
        for (let x = 0; x < canvas.width; x += resolucion) {
            for (let y = 0; y < canvas.height; y += resolucion) {
                
                // Distancia desde la fuente 1 al punto actual
                const dx1 = x - f1x;
                const dy1 = y - centroY;
                const d1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
                
                // Ecuación de la onda 1: amplitud = sin(kx - wt)
                let onda1 = Math.sin(k * d1 - tiempo);
                let onda2 = 0;

                // Si hay dos fuentes, calculamos la segunda y aplicamos Principio de Superposición
                if (numeroFuentes === 2) {
                    const dx2 = x - f2x;
                    const dy2 = y - centroY;
                    const d2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    onda2 = Math.sin(k * d2 - tiempo);
                }

                // Superposición (Suma algebraica)
                // Rango posible: de -2 a 2 (si son dos fuentes) o -1 a 1 (si es una)
                let interferencia = onda1 + onda2;
                
                // Normalizar la interferencia para el color visual
                // Queremos mapearlo a un brillo de 0 a 255.
                // Ajustamos el divisor según el número de fuentes para mantener el contraste.
                let amplitudMaxima = numeroFuentes === 2 ? 2 : 1;
                let intensidad = (interferencia + amplitudMaxima) / (amplitudMaxima * 2); // Rango de 0.0 a 1.0

                // Escala de grises azulada para simular agua
                // 0 = valle (negro/azul oscuro), 0.5 = nivel medio (gris/azul opaco), 1 = cresta (blanco/cian claro)
                let r = Math.floor(intensidad * 150);
                let g = Math.floor(intensidad * 200);
                let b = Math.floor(intensidad * 255) + 30; // Aseguramos que siempre tenga un tinte azul

                ctx.fillStyle = `rgb(${r},${g},${Math.min(255, b)})`;
                ctx.fillRect(x, y, resolucion, resolucion);
            }
        }

        // Dibujar pequeños marcadores rojos donde están los "goteros" (fuentes)
        ctx.fillStyle = 'red';
        ctx.beginPath(); ctx.arc(f1x, centroY, 4, 0, Math.PI*2); ctx.fill();
        if (numeroFuentes === 2) {
            ctx.beginPath(); ctx.arc(f2x, centroY, 4, 0, Math.PI*2); ctx.fill();
        }

        tiempo += velocidadFase;
        animacionId = requestAnimationFrame(animarRippleTank);
    }

    // Iniciar la animación
    animarRippleTank();
}
/**
 * Renderiza el contenido teórico de la Semana 14 en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana14(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo">
            <h3>1. Rapidez de propagación del sonido</h3>
            <p>El sonido es una onda mecánica longitudinal que requiere un medio para viajar. No puede propagarse en el vacío. Su velocidad depende de la densidad y elasticidad del medio. En el aire a 0°C, viaja a unos $331 \\text{ m/s}$. La velocidad aumenta aproximadamente $0.6 \\text{ m/s}$ por cada grado Celsius que sube la temperatura ($T$):</p>
            <p>$$v = 331 + 0.6 \\cdot T$$</p>

            <h3>2. Fenómenos acústicos</h3>
            <ul>
                <li><strong>Reflexión y Eco:</strong> Cuando el sonido choca contra una superficie dura, rebota. Si el sonido reflejado tarda más de 0.1 segundos en regresar a nuestros oídos, lo percibimos como un sonido distinto: el eco.</li>
                <li><strong>Reverberación:</strong> Múltiples reflexiones rápidas en un espacio cerrado que "alargan" el sonido (como cantar en el baño).</li>
                <li><strong>Resonancia:</strong> Cuando la frecuencia de una onda coincide con la frecuencia natural de vibración de un objeto, haciendo que este vibre con gran amplitud (como cuando una copa de cristal se rompe por el canto de una soprano).</li>
            </ul>

            <h3>3. Cualidades del sonido</h3>
            <p>El oído humano distingue tres cualidades fundamentales:</p>
            <ul>
                <li><strong>Intensidad:</strong> Relacionada con la amplitud de la onda. Es el "volumen" y se mide en decibeles (dB).</li>
                <li><strong>Tono:</strong> Relacionado con la frecuencia. Frecuencias altas ($> 2000 \\text{ Hz}$) son agudas, y frecuencias bajas ($< 200 \\text{ Hz}$) son graves.</li>
                <li><strong>Timbre:</strong> Es lo que nos permite distinguir la misma nota musical tocada por instrumentos diferentes. Un acordeón tocando un Fa a $349 \\text{ Hz}$ suena muy diferente a una guitarra tocando la misma nota, debido a que cada instrumento genera "armónicos" secundarios únicos que se suman a la onda principal.</li>
            </ul>

            <h3>4. Efecto Doppler</h3>
            <p>Es el cambio aparente en la frecuencia de un sonido cuando la fuente y el observador están en movimiento relativo. Por ejemplo, cuando una ambulancia se acerca, las ondas se comprimen (suena más agudo), y cuando se aleja, se estiran (suena más grave).</p>
            <p>$$f' = f \\left( \\frac{v \\pm v_o}{v \\mp v_f} \\right)$$</p>
            <p>Donde $f'$ es la frecuencia percibida, $f$ la original, $v$ la velocidad del sonido, $v_o$ la velocidad del observador y $v_f$ la de la fuente.</p>

            <h3>5. Ondas sísmicas y ultrasonido</h3>
            <p>Las ondas mecánicas de frecuencias superiores a $20,000 \\text{ Hz}$ se llaman <strong>ultrasonidos</strong> y se usan en medicina (ecografías) e industria. Las <strong>ondas sísmicas</strong> son vibraciones de muy baja frecuencia pero gigantesca energía que viajan por el interior de la Tierra durante un terremoto.</p>
        </div>
        
        <hr>
        
        <h3>Laboratorio Virtual: Generador de Frecuencias y Efecto Doppler</h3>
        <div class="simulador-container" style="background: #212121; padding: 20px; border-radius: 10px; color: #fff;">
            <p style="font-size: 0.9em; margin-bottom: 15px; color: #b0bec5;"><strong>Precaución:</strong> Modera el volumen de tu dispositivo. Usa el generador para escuchar tonos puros y activa la simulación Doppler para escuchar el cambio de frecuencia en movimiento.</p>
            
            <div class="controles-simulador" style="display: flex; flex-direction: column; gap: 15px; width: 100%; max-width: 500px; margin: 0 auto 20px;">
                
                <div style="background: #000; padding: 15px; border-radius: 8px; border: 2px solid #4fc3f7; text-align: center; font-family: 'Courier New', monospace;">
                    <div style="font-size: 0.9em; color: #4fc3f7; margin-bottom: 5px;">Frecuencia Actual</div>
                    <div id="display-frecuencia" style="font-size: 2.5em; font-weight: bold; color: #fff;">440 Hz</div>
                    <div id="display-estado" style="font-size: 0.9em; color: #ff5252; margin-top: 5px;">SILENCIO</div>
                </div>

                <div style="background: #333; padding: 15px; border-radius: 8px;">
                    <label style="font-weight: bold; display: flex; justify-content: space-between; margin-bottom: 10px; color: #aed581;">
                        <span>Tono (Frecuencia Base)</span>
                    </label>
                    <input type="range" id="slider-tono" min="100" max="1000" value="440" style="width: 100%; accent-color: #aed581;">
                </div>

                <div style="background: #333; padding: 15px; border-radius: 8px;">
                    <label style="font-weight: bold; display: flex; justify-content: space-between; margin-bottom: 10px; color: #ffb74d;">
                        <span>Intensidad (Volumen)</span>
                    </label>
                    <input type="range" id="slider-volumen" min="0" max="100" value="10" style="width: 100%; accent-color: #ffb74d;">
                </div>

                <div style="display: flex; gap: 10px; justify-content: space-between;">
                    <button id="btn-play-audio" class="btn-accion" style="flex: 1; padding: 12px; border-radius: 5px; background: #4caf50; color: white; border: none; font-weight: bold; cursor: pointer;">
                        ▶ Reproducir Tono
                    </button>
                    <button id="btn-stop-audio" class="btn-accion" style="flex: 1; padding: 12px; border-radius: 5px; background: #f44336; color: white; border: none; font-weight: bold; cursor: pointer;">
                        ■ Detener
                    </button>
                </div>

                <button id="btn-simular-doppler" class="btn-accion" style="width: 100%; padding: 15px; border-radius: 5px; background: #1976d2; color: white; border: none; font-weight: bold; cursor: pointer; margin-top: 10px; font-size: 1.1em;">
                    🚑 Simular Efecto Doppler
                </button>
            </div>
        </div>
    `;

    iniciarSimuladorAcustica();
}

/**
 * Lógica para la Web Audio API y el simulador Doppler.
 */
function iniciarSimuladorAcustica() {
    const sliderTono = document.getElementById('slider-tono');
    const sliderVolumen = document.getElementById('slider-volumen');
    
    const displayFrecuencia = document.getElementById('display-frecuencia');
    const displayEstado = document.getElementById('display-estado');
    
    const btnPlay = document.getElementById('btn-play-audio');
    const btnStop = document.getElementById('btn-stop-audio');
    const btnDoppler = document.getElementById('btn-simular-doppler');

    // Variables de la Web Audio API
    let audioContext = null;
    let oscillator = null;
    let gainNode = null;
    let isPlaying = false;
    let dopplerTimeout = null;

    // Inicializa el contexto de audio (debe ser por interacción del usuario)
    function inicializarAudio() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            gainNode = audioContext.createGain();
            gainNode.connect(audioContext.destination);
            // Empezar con el volumen del slider mapeado (0.0 a 1.0)
            gainNode.gain.value = parseInt(sliderVolumen.value) / 100;
        }
    }

    function iniciarTono() {
        inicializarAudio();
        
        if (isPlaying) {
            detenerTono(); // Detener si ya estaba sonando algo
        }

        oscillator = audioContext.createOscillator();
        oscillator.type = 'sine'; // Onda senoidal (tono puro)
        oscillator.frequency.setValueAtTime(parseFloat(sliderTono.value), audioContext.currentTime);
        
        oscillator.connect(gainNode);
        oscillator.start();
        isPlaying = true;
        
        displayEstado.textContent = "🔊 REPRODUCIENDO";
        displayEstado.style.color = "#4caf50";
    }

    function detenerTono() {
        if (oscillator && isPlaying) {
            oscillator.stop();
            oscillator.disconnect();
            isPlaying = false;
        }
        clearTimeout(dopplerTimeout);
        displayEstado.textContent = "SILENCIO";
        displayEstado.style.color = "#ff5252";
        displayFrecuencia.textContent = sliderTono.value + " Hz";
    }

    // Actualizaciones en tiempo real
    sliderTono.addEventListener('input', () => {
        const freq = parseFloat(sliderTono.value);
        displayFrecuencia.textContent = freq + " Hz";
        if (isPlaying && oscillator) {
            // Cambio suave de frecuencia
            oscillator.frequency.setTargetAtTime(freq, audioContext.currentTime, 0.05);
        }
    });

    sliderVolumen.addEventListener('input', () => {
        if (gainNode) {
            const vol = parseInt(sliderVolumen.value) / 100;
            // Evitar clics bruscos en el audio (Ramp)
            gainNode.gain.setTargetAtTime(vol, audioContext.currentTime, 0.05);
        }
    });

    // Simulación auditiva del Efecto Doppler
    btnDoppler.addEventListener('click', () => {
        inicializarAudio();
        if (isPlaying) detenerTono();

        const baseFreq = parseFloat(sliderTono.value);
        
        oscillator = audioContext.createOscillator();
        oscillator.type = 'triangle'; // Forma de onda más rica para parecer sirena/motor
        oscillator.connect(gainNode);
        
        // Fase 1: Se acerca rápidamente (Frecuencia sube, Volumen sube)
        const freqAcercando = baseFreq * 1.3; // 30% más agudo
        const freqAlejando = baseFreq * 0.7;  // 30% más grave
        
        const now = audioContext.currentTime;
        
        // Establecer valores iniciales
        oscillator.frequency.setValueAtTime(freqAcercando, now);
        gainNode.gain.setValueAtTime(0, now);
        
        // El vehículo se acerca en 2 segundos
        gainNode.gain.linearRampToValueAtTime(0.8, now + 2);
        oscillator.frequency.linearRampToValueAtTime(freqAcercando, now + 1.8);
        
        // ¡Pasa justo frente al observador! (Caída abrupta de frecuencia)
        oscillator.frequency.linearRampToValueAtTime(freqAlejando, now + 2.2);
        
        // El vehículo se aleja en 2 segundos
        gainNode.gain.linearRampToValueAtTime(0, now + 4);
        
        oscillator.start(now);
        oscillator.stop(now + 4);
        isPlaying = true;
        
        displayEstado.textContent = "🚑 SIMULANDO DOPPLER...";
        displayEstado.style.color = "#1976d2";
        
        // Animación de los números para la pantalla
        let pasos = 0;
        const animacionTextos = setInterval(() => {
            if(pasos < 20) { displayFrecuencia.textContent = Math.round(freqAcercando) + " Hz (Acercándose)"; }
            else if(pasos < 22) { displayFrecuencia.textContent = baseFreq + " Hz (Frente a ti)"; }
            else if(pasos < 40) { displayFrecuencia.textContent = Math.round(freqAlejando) + " Hz (Alejándose)"; }
            else { 
                clearInterval(animacionTextos); 
                displayFrecuencia.textContent = sliderTono.value + " Hz";
            }
            pasos++;
        }, 100);

        // Resetear estado tras los 4 segundos
        dopplerTimeout = setTimeout(() => {
            isPlaying = false;
            displayEstado.textContent = "SILENCIO";
            displayEstado.style.color = "#ff5252";
            // Restaurar volumen original del slider
            gainNode.gain.setValueAtTime(parseInt(sliderVolumen.value) / 100, audioContext.currentTime);
        }, 4000);
    });

    btnPlay.addEventListener('click', iniciarTono);
    btnStop.addEventListener('click', detenerTono);
}
/**
 * Renderiza la interfaz de la Semana 15 (Evaluación Semestral) en el contenedor principal.
 * @param {HTMLElement} contenedor - El elemento DOM donde se inyectará el contenido.
 */
function renderizarTeoriaSemana15(contenedor) {
    contenedor.innerHTML = `
        <div class="teoria-modulo" id="intro-evaluacion">
            <h2 style="color: #0f4c75; text-align: center; margin-bottom: 20px;">Evaluación Final: Temas Selectos de Física II</h2>
            <p>Has llegado al final del curso. Es momento de poner a prueba tus conocimientos sobre Electromagnetismo, Óptica, Ondas y Acústica.</p>
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 5px solid #1976d2; margin-bottom: 20px;">
                <strong>Instrucciones:</strong>
                <ul style="margin-top: 10px; margin-left: 20px;">
                    <li>El sistema extraerá aleatoriamente <strong>5 preguntas</strong> de nuestra base de datos general.</li>
                    <li>Cada intento generará un examen único con las opciones de respuesta desordenadas.</li>
                    <li>Lee cuidadosamente y utiliza tu calculadora para los despejes matemáticos.</li>
                </ul>
            </div>
            <div style="text-align: center;">
                <button id="btn-iniciar-examen" class="btn-accion" style="padding: 15px 30px; border-radius: 8px; background: #43a047; color: white; border: none; font-size: 1.2em; font-weight: bold; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
                    📝 Iniciar Examen Aleatorio
                </button>
            </div>
        </div>
        
        <div id="contenedor-examen" style="display: none; background: #fff; padding: 25px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); max-width: 700px; margin: 0 auto;">
            <div style="display: flex; justify-content: space-between; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">
                <span id="progreso-examen" style="font-weight: bold; color: #1976d2;">Pregunta 1 de 5</span>
                <span id="tiempo-examen" style="color: #d32f2f; font-family: monospace; font-weight: bold;">00:00</span>
            </div>
            
            <div id="area-pregunta" style="font-size: 1.1em; margin-bottom: 20px; line-height: 1.5;">
                </div>
            
            <div id="area-opciones" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 25px;">
                </div>
            
            <div style="text-align: right;">
                <button id="btn-siguiente-pregunta" class="btn-accion" style="padding: 10px 25px; border-radius: 5px; background: #0f4c75; color: white; border: none; font-weight: bold; cursor: pointer;" disabled>
                    Siguiente ➔
                </button>
            </div>
        </div>

        <div id="contenedor-resultados" style="display: none; text-align: center; background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0f4c75; margin-bottom: 15px;">Resultados de la Evaluación</h2>
            <div id="score-circular" style="width: 150px; height: 150px; border-radius: 50%; background: #e0e0e0; display: flex; justify-content: center; align-items: center; margin: 0 auto 20px; font-size: 2.5em; font-weight: bold; color: #333; border: 10px solid #43a047;">
                100
            </div>
            <p id="mensaje-retroalimentacion" style="font-size: 1.2em; margin-bottom: 20px;"></p>
            <button id="btn-reiniciar-examen" class="btn-accion" style="padding: 12px 25px; border-radius: 5px; background: #1976d2; color: white; border: none; font-weight: bold; cursor: pointer;">
                🔄 Intentar de nuevo
            </button>
        </div>
    `;

    iniciarMotorEvaluacion();
}

/**
 * Lógica del Motor de Evaluación Dinámico y manipulación del DOM.
 */
function iniciarMotorEvaluacion() {
    // 1. Banco de Datos JSON (Muestra representativa de los bloques del semestre)
    const bancoPreguntas = [
        {
            id: 1,
            tema: "Electricidad Estática",
            texto: "Según la Ley de Coulomb, si la distancia ($r$) entre dos cargas eléctricas puntuales se reduce a la mitad, ¿qué ocurre con la magnitud de la fuerza electrostática ($F$)?",
            opciones: [
                "Aumenta 4 veces su valor original.",
                "Se reduce a la cuarta parte.",
                "Se duplica.",
                "Permanece constante."
            ],
            respuestaCorrecta: "Aumenta 4 veces su valor original."
        },
        {
            id: 2,
            tema: "Leyes de Circuitos",
            texto: "En un circuito en paralelo formado por tres resistencias diferentes conectadas a una batería de 12 V, ¿cuál de las siguientes afirmaciones es correcta?",
            opciones: [
                "El voltaje es el mismo (12 V) a través de todas las resistencias.",
                "La corriente es idéntica en cada una de las resistencias.",
                "La resistencia total es la suma aritmética de las tres resistencias.",
                "La resistencia total es mayor que la mayor de las resistencias individuales."
            ],
            respuestaCorrecta: "El voltaje es el mismo (12 V) a través de todas las resistencias."
        },
        {
            id: 3,
            tema: "Magnetismo",
            texto: "¿Cuál de los siguientes materiales se alinea fuertemente con un campo magnético externo debido a sus dominios magnéticos?",
            opciones: [
                "Material Ferromagnético (Ej. Hierro).",
                "Material Diamagnético (Ej. Cobre).",
                "Material Paramagnético (Ej. Aluminio).",
                "Material Aislante (Ej. Madera)."
            ],
            respuestaCorrecta: "Material Ferromagnético (Ej. Hierro)."
        },
        {
            id: 4,
            tema: "Inducción",
            texto: "La Ley de Lenz establece que el sentido de la corriente inducida siempre es tal que...",
            opciones: [
                "Se opone a la causa que la produce (variación del flujo magnético).",
                "Aumenta infinitamente el campo magnético original.",
                "Viaja en la misma dirección que el campo magnético inductor.",
                "Es paralelo al movimiento del conductor."
            ],
            respuestaCorrecta: "Se opone a la causa que la produce (variación del flujo magnético)."
        },
        {
            id: 5,
            tema: "Óptica",
            texto: "Un rayo de luz pasa del aire ($n_1 = 1.0$) al agua ($n_2 = 1.33$). De acuerdo con la Ley de Snell, el rayo refractado:",
            opciones: [
                "Se acercará a la línea Normal.",
                "Se alejará de la línea Normal.",
                "Continuará en línea recta sin desviarse.",
                "Experimentará forzosamente reflexión total interna."
            ],
            respuestaCorrecta: "Se acercará a la línea Normal."
        },
        {
            id: 6,
            tema: "Ondas Mecánicas",
            texto: "Si una onda mecánica tiene una frecuencia de $2 \\text{ Hz}$ y una longitud de onda de $1.5 \\text{ m}$, ¿cuál es su velocidad de propagación ($v$)?",
            opciones: [
                "$3.0 \\text{ m/s}$",
                "$0.75 \\text{ m/s}$",
                "$3.5 \\text{ m/s}$",
                "$1.5 \\text{ m/s}$"
            ],
            respuestaCorrecta: "$3.0 \\text{ m/s}$"
        },
        {
            id: 7,
            tema: "Acústica",
            texto: "Un tren hace sonar su silbato mientras se acerca a la estación. Un observador parado en el andén percibirá un sonido con una frecuencia...",
            opciones: [
                "Mayor a la original (más agudo) debido al Efecto Doppler.",
                "Menor a la original (más grave) debido al Efecto Doppler.",
                "Idéntica a la original, pero con mayor volumen.",
                "Idéntica a la original, pero con menor velocidad."
            ],
            respuestaCorrecta: "Mayor a la original (más agudo) debido al Efecto Doppler."
        }
    ];

    // Variables de estado del examen
    let preguntasSeleccionadas = [];
    let indiceActual = 0;
    let aciertos = 0;
    let temporizadorInterval;
    let segundosTranscurridos = 0;

    // Referencias al DOM
    const btnIniciar = document.getElementById('btn-iniciar-examen');
    const introSeccion = document.getElementById('intro-evaluacion');
    const contenedorExamen = document.getElementById('contenedor-examen');
    const areaPregunta = document.getElementById('area-pregunta');
    const areaOpciones = document.getElementById('area-opciones');
    const btnSiguiente = document.getElementById('btn-siguiente-pregunta');
    const progresoTxt = document.getElementById('progreso-examen');
    const tiempoTxt = document.getElementById('tiempo-examen');
    
    const contenedorResultados = document.getElementById('contenedor-resultados');
    const scoreCircular = document.getElementById('score-circular');
    const msjRetro = document.getElementById('mensaje-retroalimentacion');
    const btnReiniciar = document.getElementById('btn-reiniciar-examen');

    // Función de utilidad: Mezclar array (Algoritmo Fisher-Yates)
    function mezclarArray(array) {
        let actual = array.length, temp, aleatorio;
        while (0 !== actual) {
            aleatorio = Math.floor(Math.random() * actual);
            actual -= 1;
            temp = array[actual];
            array[actual] = array[aleatorio];
            array[aleatorio] = temp;
        }
        return array;
    }

    // Formatear reloj
    function actualizarReloj() {
        segundosTranscurridos++;
        let m = Math.floor(segundosTranscurridos / 60).toString().padStart(2, '0');
        let s = (segundosTranscurridos % 60).toString().padStart(2, '0');
        tiempoTxt.textContent = `${m}:${s}`;
    }

    // Iniciar Examen
    btnIniciar.addEventListener('click', () => {
        // Preparar datos aleatorios
        const bancoMezclado = mezclarArray([...bancoPreguntas]);
        preguntasSeleccionadas = bancoMezclado.slice(0, 5); // Elegimos 5 al azar
        
        // Resetear variables
        indiceActual = 0;
        aciertos = 0;
        segundosTranscurridos = 0;
        
        // UI
        introSeccion.style.display = 'none';
        contenedorResultados.style.display = 'none';
        contenedorExamen.style.display = 'block';
        
        // Reloj
        clearInterval(temporizadorInterval);
        temporizadorInterval = setInterval(actualizarReloj, 1000);

        cargarPregunta();
    });

    function cargarPregunta() {
        const pregunta = preguntasSeleccionadas[indiceActual];
        btnSiguiente.disabled = true;
        progresoTxt.textContent = `Pregunta ${indiceActual + 1} de ${preguntasSeleccionadas.length}`;
        
        // 1. Inyectar Texto de la Pregunta
        areaPregunta.innerHTML = `<strong>${pregunta.tema}:</strong><br><br>${pregunta.texto}`;
        
        // 2. Mezclar opciones dinámicamente para que no siempre la 'A' sea la correcta
        const opcionesMezcladas = mezclarArray([...pregunta.opciones]);
        
        areaOpciones.innerHTML = '';
        opcionesMezcladas.forEach((opcion, index) => {
            const label = document.createElement('label');
            label.style.display = 'block';
            label.style.padding = '15px';
            label.style.background = '#f5f5f5';
            label.style.borderRadius = '5px';
            label.style.cursor = 'pointer';
            label.style.border = '2px solid transparent';
            label.style.transition = 'all 0.2s';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'pregunta_actual';
            radio.value = opcion;
            radio.style.marginRight = '10px';
            
            label.appendChild(radio);
            // Usamos innerHTML para permitir que MathJax procese posibles fórmulas en las opciones
            label.innerHTML += `<span class="opcion-texto">${opcion}</span>`;
            
            // Re-asignar evento al label tras sobreescribir innerHTML
            const newRadio = label.querySelector('input');
            newRadio.addEventListener('change', () => {
                // Estilos visuales de selección
                document.querySelectorAll('#area-opciones label').forEach(l => {
                    l.style.background = '#f5f5f5';
                    l.style.borderColor = 'transparent';
                });
                label.style.background = '#e3f2fd';
                label.style.borderColor = '#1976d2';
                btnSiguiente.disabled = false;
            });
            
            areaOpciones.appendChild(label);
        });

        // 3. Ordenar a MathJax que procese el nuevo DOM (Ecuaciones)
        if (window.MathJax) {
            MathJax.typesetPromise([areaPregunta, areaOpciones]).catch((err) => console.log('MathJax error: ', err.message));
        }
    }

    btnSiguiente.addEventListener('click', () => {
        // Evaluar respuesta
        const seleccionada = document.querySelector('input[name="pregunta_actual"]:checked').value;
        const preguntaCorrecta = preguntasSeleccionadas[indiceActual].respuestaCorrecta;
        
        if (seleccionada === preguntaCorrecta) {
            aciertos++;
        }

        // Avanzar o Finalizar
        indiceActual++;
        if (indiceActual < preguntasSeleccionadas.length) {
            cargarPregunta();
        } else {
            finalizarExamen();
        }
    });

    function finalizarExamen() {
        clearInterval(temporizadorInterval);
        contenedorExamen.style.display = 'none';
        contenedorResultados.style.display = 'block';
        
        const calificacionFinal = (aciertos / preguntasSeleccionadas.length) * 100;
        
        // Animación circular del score
        scoreCircular.textContent = calificacionFinal.toFixed(0);
        
        if (calificacionFinal >= 80) {
            scoreCircular.style.borderColor = '#43a047';
            scoreCircular.style.color = '#43a047';
            msjRetro.innerHTML = `<strong>¡Excelente trabajo!</strong><br>Tienes madera de ingeniero. Has dominado los fundamentos de la física clásica.`;
        } else if (calificacionFinal >= 60) {
            scoreCircular.style.borderColor = '#ffa000';
            scoreCircular.style.color = '#ffa000';
            msjRetro.innerHTML = `<strong>¡Buen intento!</strong><br>Tienes los conceptos básicos, pero te recomiendo repasar las simulaciones donde tuviste dudas.`;
        } else {
            scoreCircular.style.borderColor = '#d32f2f';
            scoreCircular.style.color = '#d32f2f';
            msjRetro.innerHTML = `<strong>Necesitas reforzar la teoría.</strong><br>No te preocupes, la física requiere práctica. ¡Vuelve a realizar los laboratorios virtuales!`;
        }
    }

    btnReiniciar.addEventListener('click', () => {
        contenedorResultados.style.display = 'none';
        introSeccion.style.display = 'block';
    });
}
