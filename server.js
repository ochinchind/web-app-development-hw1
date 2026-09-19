const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const APP_MESSAGE = process.env.APP_MESSAGE || 'Hello';
const APP_ENV = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
  res.json({
    message: APP_MESSAGE,
    environment: APP_ENV,
    hostname: require('os').hostname(),
    timestamp: new Date().toISOString(),
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} (env=${APP_ENV})`);
});
