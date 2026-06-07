// Función para inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Código para futuras funcionalidades interactivas
    console.log('Aplicación de Componentes Eléctricos Básicos cargada');
    
    // Efecto de carga suave
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Función para manejar la navegación entre sesiones
function navigateToSession(sessionNumber) {
    // Guardar el estado de la sesión actual si es necesario
    sessionStorage.setItem('lastSession', sessionNumber);
    
    // Redirigir a la página de la sesión
    window.location.href = `sesion${sessionNumber}.html`;
}

// Función para cargar contenido dinámico (si es necesario)
async function loadSessionContent(sessionId) {
    try {
        // Esta función puede ser usada para cargar contenido dinámico de las sesiones
        const response = await fetch(`/api/sessions/${sessionId}`);
        if (!response.ok) throw new Error('Error al cargar el contenido');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Función para inicializar animaciones
function initAnimations() {
    // Inicializar animaciones con Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observar elementos con la clase 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });
}

// Inicializar animaciones cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}
