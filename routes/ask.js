const express = require("express");
const router = express.Router();
const ask = require("../utils/openai/openai");

router.post("/", async (req, res) => {
  const { question } = req.body;

  // input validation
  if (!question) {
    return res.status(400).json({ error: "question is required" });
  } else if (typeof question !== "string" || question.trim() === "") {
    return res
      .status(400)
      .json({ error: "question must be a non-empty string" });
  }

  const senitizedQuestion = question.trim();

  const answer = await ask(question);

  res.status(201).send({
    question: senitizedQuestion,
    answer: answer,
  });
});

module.exports = router;
