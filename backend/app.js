const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path'); 
require('dotenv').config();
require('./DB/connect'); 

const postroute = require('./Routes/postroute');
const PORT = process.env.PORT || 5000; 
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); 

// Routes
app.use('/api', postroute);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
