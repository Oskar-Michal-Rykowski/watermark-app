//imports
const express = require('express');
const path = require('path');

//save express in constant
const app = express();

//midleware making endpoint by name of files provided in argument
app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

//midleware making endpoint for files in folder named public
app.use(express.static(path.join(__dirname, '/public')));

//midleware showing provided file for two endpoints
app.use(['/settings', '/user'], (req, res) => {
  res.show('forbidden.html');
});

//endpoints
app.get(['/', '/home'], (req, res) => {
  res.show('home.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

//midleware showing file for error 404
app.use((req, res) => {
  res.status(404).show('404.html');
});

//runnig server on port 8000 and callback
app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
