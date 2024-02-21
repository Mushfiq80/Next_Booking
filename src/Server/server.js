// server.js
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Choose a port for your backend

app.use(bodyParser.json());

app.post('/api/hotel-search', async (req, res) => {
  try {
    const response = await axios.post('https://api.hotelbeds.com/hotel-api/1.0/hotels', req.body, {
      headers: {
        'Api-Key': '0e328d282636a33ab7a010f02070a1a6',
        'Content-Type': 'application/json',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
