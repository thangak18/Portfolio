const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors({
    origin: ['http://localhost:3000', 'https://thang.dev', 'https://www.thang.dev'], // Adjust as needed
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const VISITORS_FILE = path.join(DATA_DIR, 'visitors.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Load visitors data
const loadVisitors = () => {
    if (!fs.existsSync(VISITORS_FILE)) {
        return { count: 0, ips: [] };
    }
    try {
        const data = fs.readFileSync(VISITORS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading visitors file:', error);
        return { count: 0, ips: [] };
    }
};

// Save visitors data
const saveVisitors = (data) => {
    try {
        fs.writeFileSync(VISITORS_FILE, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing visitors file:', error);
    }
};

// Get client IP helper
const getClientIP = (req) => {
    const forwarded = req.headers['x-forwarded-for'];
    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }
    return req.ip || req.connection.remoteAddress;
};

// GET /api/visitors
app.get('/api/visitors', (req, res) => {
    const visitors = loadVisitors();
    res.json({ count: visitors.count });
});

// POST /api/visitors
app.post('/api/visitors', (req, res) => {
    const clientIP = getClientIP(req);
    const visitors = loadVisitors();

    // Only increment if this IP hasn't been seen before
    if (!visitors.ips.includes(clientIP)) {
        visitors.count += 1;
        visitors.ips.push(clientIP);
        saveVisitors(visitors);
        console.log(`New visitor from IP: ${clientIP}. Total count: ${visitors.count}`);
    } else {
        // console.log(`Returning visitor from IP: ${clientIP}. Total count: ${visitors.count}`);
    }

    res.json({ count: visitors.count });
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
