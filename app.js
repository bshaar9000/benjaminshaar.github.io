
const express = require('express');
const path = require('path'); // Import the path module

const app = express();

app.get("/", (req, res) => {
    // Use path.join to construct the absolute path to your HTML file
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(4000, () => {
    console.log("Listening on port 3000");
});
