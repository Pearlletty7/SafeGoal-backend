const express = require('express');
const app = express();
require('dotenv').config();
const pool = require('./db/pool');

app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Example DB test
app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
