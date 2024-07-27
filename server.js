// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/nurturing_wellness', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Add other routes here

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
