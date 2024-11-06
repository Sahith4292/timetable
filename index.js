const express = require('express');
const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());

// Simple GET route to test
app.get("/", (req, res) => {
    res.send("Hello, Timetable API is working!");
});

// Your POST route for adding timetable entries
app.post('/api/timetable/:section', (req, res) => {
    const section = req.params.section;
    const timetableEntry = req.body;
    console.log(`Adding timetable entry for section ${section}:`, timetableEntry);
    res.status(200).json({
        message: `Timetable entry added for section ${section}`,
        data: timetableEntry
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
