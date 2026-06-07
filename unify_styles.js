const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const globalCssName = 'global-lesson.css';

// Lista de archivos que NO deben modificarse porque son "Hubs" o Dashboards
const ignoredFiles = [
    path.join(rootDir, 'index.html'),
    path.join(rootDir, 'ELECTRICIDAD', 'index.html')
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (let file of files) {
        const fullPath = path.join(dir, file);
        
        // Ignorar node_modules o .git si existieran
        if (file === '.git' || file === 'node_modules') continue;

        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.html')) {
            if (!ignoredFiles.includes(fullPath)) {
                unifyStyleInFile(fullPath);
            }
        }
    }
}

function unifyStyleInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Calcular la ruta relativa desde el archivo actual hasta el rootDir
    let relativeToRoot = path.relative(path.dirname(filePath), rootDir).replace(/\\/g, '/');
    if (relativeToRoot === '') {
        relativeToRoot = '.';
    }
    
    const globalCssPath = `${relativeToRoot}/${globalCssName}`;

    // Regex para encontrar etiquetas <link rel="stylesheet" href="...">
    // que NO sean font-awesome o google fonts
    const linkRegex = /<link\s+[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+\.css)["'][^>]*>/gi;
    
    content = content.replace(linkRegex, (match, href) => {
        // Si ya es el global, ignorar
        if (href.includes(globalCssName)) return match;
        // Si es de terceros, ignorar
        if (href.startsWith('http')) return match;
        
        console.log(`Reemplazando en ${path.relative(rootDir, filePath)}: ${href} -> ${globalCssPath}`);
        modified = true;
        
        return `<link rel="stylesheet" href="${globalCssPath}">`;
    });

    if (modified) {
        fs.writeFileSync(filePath, content);
    }
}

console.log("Iniciando unificación de estilos...");
processDirectory(rootDir);
console.log("Unificación completada.");
