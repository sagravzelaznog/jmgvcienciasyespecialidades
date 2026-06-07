const fs = require('fs');
const path = require('path');

const courses = {
    "ECOLOGICA": "ecologica",
    "ELECTRICIDAD": "electricidad",
    "anatomia humana": "anatomia",
    "componentes del aire": "componentes_aire",
    "tai-chi": "taichi",
    "temaselectosfisica2": "fisica2"
};

function processDirectory(dir, courseId, rootPath) {
    const files = fs.readdirSync(dir);
    for (let file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath, courseId, rootPath);
        } else if (file.endsWith('.html')) {
            injectCode(fullPath, courseId, file.replace('.html', ''), rootPath);
        }
    }
}

function injectCode(filePath, courseId, lessonId, rootPath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Evitar inyectar si ya está el tracker
    if (content.includes('progress-tracker.js')) {
        console.log(`Saltando (ya inyectado): ${filePath}`);
        return;
    }
    
    // Calcular ruta relativa a la raíz para cargar env.js y progress-tracker.js correctamente
    let relativeToRoot = path.relative(path.dirname(filePath), rootPath).replace(/\\/g, '/');
    if (relativeToRoot === '') {
        relativeToRoot = '.';
    }
    
    const injection = `
<!-- Firebase & Progress Tracker Inyectado Automáticamente -->
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
<script src="${relativeToRoot}/env.js"></script>
<script src="${relativeToRoot}/progress-tracker.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', () => {
      if (window.markLessonCompleted) {
          window.markLessonCompleted('${courseId}', '${lessonId.replace(/'/g, "\\'")}');
      }
  });
</script>
</body>`;

    // Reemplazar la etiqueta de cierre del body
    if (content.includes('</body>')) {
        content = content.replace('</body>', injection);
        fs.writeFileSync(filePath, content);
        console.log(`Inyectado con éxito en: ${filePath}`);
    } else {
        console.log(`No se encontró la etiqueta </body> en: ${filePath}. Omitiendo.`);
    }
}

// Iniciar el script
console.log("Iniciando inyección de código de progreso...");
Object.keys(courses).forEach(folderName => {
    const folderPath = path.join(__dirname, folderName);
    if (fs.existsSync(folderPath)) {
        processDirectory(folderPath, courses[folderName], __dirname);
    } else {
        console.log(`La carpeta ${folderName} no existe.`);
    }
});
console.log("Inyección finalizada.");
