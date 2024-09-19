const express = require('express');
const bodyParser = require('body-parser');
const chatbotRoutes = require('./routes/chatbot');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/chatbot', chatbotRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
