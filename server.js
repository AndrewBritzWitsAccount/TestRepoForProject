const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static('public'));

const PORT = process.env.PORT || 3000; // Use the provided port or default to 3000

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
