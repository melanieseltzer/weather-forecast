const path = require('path');
const express = require('express');
const compression = require('compression');

const port = process.env.PORT || 8080;
const app = express();

// Enable Gzip compression
app.use(compression());

app.use(express.static(path.resolve(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
