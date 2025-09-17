const express = require('express');
const app = express();
const PORT = 4000;

// A simple array of quotes
const quotes = [
    "The only way to do great work is to love what you do.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Strive not to be a success, but rather to be of value.",
    "It is never too late to be what you might have been."
];

// Define the /quote endpoint
app.get('/quote', (req, res) => {
    // Get the 'age' from the query parameter, or use a default
    const userAge = req.query.age || 'an unknown age';

    // Pick a random quote from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Send the response back to the user
    res.send(`A quote for someone aged ${userAge}: "${randomQuote}"`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Quote server is running on http://localhost:${PORT}`);
});