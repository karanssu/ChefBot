const express = require('express');
const router = express.Router();
const openai = require('../utils/openaiClient');

router.post('/ask', async (req, res) => {
  const userQuestion = req.body.question;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: userQuestion }],
    });
    res.json({ answer: response.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

module.exports = router;
