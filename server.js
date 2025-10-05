const express = require('express');
const app = express();
const port = process.env.PORT || 443;

app.get('/', (req, res) => {
  res.send('✅ V2Ray server is running on Render!');
});

app.get('/proxy', (req, res) => {
  res.send('🛡 WebSocket proxy endpoint active.');
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
