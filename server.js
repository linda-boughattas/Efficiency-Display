const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Replace with your website's domain name or IP address
const websiteUrl = '172.24.35.71';

// ** Serve static files from the 'public' directory **
app.use(express.static(__dirname+ '/public'));  // This line goes here

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Serve the website's HTML file
});

io.on('connection', (socket) => {
  console.log('Raspberry Pi connected!');

  socket.on('data', (data) => {
    console.log('Received data:', data);
    // Broadcast the data to all connected clients (your website)
    io.emit('data-update', data);
  });
});

http.listen(3000, () => {
  console.log('Server listening on port 3000');
});
