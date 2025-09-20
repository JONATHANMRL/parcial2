const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use('/', require('./src/routes/main.routes'));
app.use('/habitacion22', require('./src/routes/habitacion22.router'));

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
