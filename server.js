const express = require('express');
const path = require('path');
const compression = require('compression');

// Port to run the server on
const port = 3000;

// Create express server
const server = express();

// Enable gzip compression
server.use(compression());

// Serve all static files from the 'out' directory
server.use(express.static(path.join(__dirname, 'out'), {
    // Enable compression for static files
    compress: true,
    // Cache static files for 30 days
    maxAge: '30d'
}));

// Handle all routes by serving index.html files from the out directory
server.get('*', (req, res) => {
    // First try serving the exact path
    const filePath = path.join(__dirname, 'out', req.path);
    
    // Then try with .html extension
    const htmlPath = path.join(__dirname, 'out', `${req.path}.html`);
    
    // Finally try serving as a directory index
    const indexPath = path.join(__dirname, 'out', req.path, 'index.html');

    if (req.path === '/') {
        res.sendFile(path.join(__dirname, 'out', 'index.html'));
    } else {
        // Check if the file exists and send appropriate file
        if (require('fs').existsSync(filePath)) {
            res.sendFile(filePath);
        } else if (require('fs').existsSync(htmlPath)) {
            res.sendFile(htmlPath);
        } else if (require('fs').existsSync(indexPath)) {
            res.sendFile(indexPath);
        } else {
            // If no matching file is found, serve the 404 page
            // Next.js generates a 404.html page by default
            res.status(404).sendFile(path.join(__dirname, 'out', '404.html'));
        }
    }
});

// Start the server
server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
    console.log('Serving static files from /out directory');
});