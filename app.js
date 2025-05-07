const express = require('express');
const app = express(); // Create an instance of the express app

// routing
app.get('/', (req, res) => {
    res.send("Hello World");
});

// start server
app.listen(5500);