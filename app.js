// app.js
const express = require('express');
const app = express();

let ready = false;

// Simulasi proses inisialisasi, misal load data dari DB
setTimeout(() => {
  ready = true;
  console.log('App is ready now');
}, 5000);

app.get('/', (req, res) => {
  res.send('Hello from simple app!');
});

// Endpoint untuk readiness probe
app.get('/health/ready', (req, res) => {
  if (ready) {
    res.status(200).send('Ready');
  } else {
    res.status(503).send('Not ready');
  }
});

// Endpoint untuk liveness probe
app.get('/health/live', (req, res) => {
  res.status(200).send('Alive');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

