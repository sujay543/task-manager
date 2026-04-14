const express = require('express');



const taskRoutes = require('./routes/route');
const morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(morgan('dev'));
const cors = require('cors');

app.use(cors());


app.use('/api/v1/task',taskRoutes);


module.exports = app;