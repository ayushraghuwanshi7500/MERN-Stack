const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

// Init Middleware

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;
app.get('/', function (req, res) {
  res.send('<h1>Connection Successful</h1>');
});

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, function () {
  console.log(`Server started at port ${PORT}`);
});
