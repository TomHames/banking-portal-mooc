const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

// configures view dir and engine
app.set('views', path.join(__dirname, 'banking-views'));
app.set('view engine', 'ejs');

// configures static dir to serve public files using express middleware
app.use(express.static(__dirname + 'public'));