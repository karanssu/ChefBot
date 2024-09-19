const express = require("express");
const router = express.Router();

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

  res.status(201).send({
    question: senitizedQuestion,
    answer: "This is response from AI, believe me!!!",
  });
});

module.exports = router;
