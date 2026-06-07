const fs = require('fs');
const path = require('path');

// Function to update a single HTML file
function updateHtmlFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove existing style tag and add link to styles.css
        content = content.replace(/<style>[\s\S]*?<\/style>/, 
            '<link rel="stylesheet" href="styles.css">');
        
        // Update the back to index link to use the btn class
        content = content.replace(/<div style="text-align: center; margin: 30px 0;">\s*<a href="index\.html" style="[^"]*">/g, 
            '<div class="text-center mt-20 mb-20"><a href="index.html" class="btn">');
        
        // Update footer class to fixed-footer for consistency
        content = content.replace(/<footer class="footer">/g, 
            '<footer class="fixed-footer">');
        
        // Save the updated file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated: ${filePath}`);
        return true;
    } catch (error) {
        console.error(`❌ Error updating ${filePath}:`, error.message);
        return false;
    }
}

// Main function to update all session files
function updateAllSessions() {
    const directory = __dirname;
    const files = fs.readdirSync(directory);
    const htmlFiles = files.filter(file => file.match(/^s\d{2}\.html$/i));
    
    console.log(`📁 Found ${htmlFiles.length} session files to update...`);
    
    let successCount = 0;
    htmlFiles.forEach(file => {
        const filePath = path.join(directory, file);
        if (updateHtmlFile(filePath)) {
            successCount++;
        }
    });
    
    console.log(`\n🎉 Update complete! Successfully updated ${successCount} of ${htmlFiles.length} files.`);
}

// Run the update
updateAllSessions();
