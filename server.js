const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Allowed IPs
const whitelist = ['127.0.0.1', '::ffff:127.0.0.1', '20.218.226.24']; 

// Middleware to check IP
app.use((req, res, next) => {
    const ip = req.ip.replace('::ffff:', ''); 
        if (whitelist.includes(ip)) {
            next();
        } else {
            res.status(403).send('Access denied: Your IP is not whitelisted.');
        }
});

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
