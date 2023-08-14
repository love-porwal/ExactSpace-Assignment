const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3000;

const cors = require("cors");
app.use(cors());

// Serve static files from the public directory
app.use(express.static("public"));

// "json-data" Route for handling POST requests
app.post("/json-data", (req, res) => {
    try {
        const payload = req.body;

        // Checking if the payload is a valid JSON object
        if (typeof payload === "object" && payload !== null) {
            res.status(200).json(payload);
        } else {
            res.status(404).json({ error: 'Invalid JSON format, Please write correct JSON format.' });
        }
    } catch (error) {
        res.status(404).json({ error: 'Internal server error!' });
    }
});

// Listen the server
app.listen(PORT, () => {
    try {
        console.log(`Server is running at PORT: ${PORT}`);
    } catch (error) {
        console.error(error.message);
    }
});