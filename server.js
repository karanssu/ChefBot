require('dotenv').config();
const path = require('path');
const srcPath = path.resolve(__dirname, 'src');

// Dynamically require the main entry point
require(path.join(srcPath, 'index'));
