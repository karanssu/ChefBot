const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { question } = req.body;

  const senitizedQuestion = question.trim();

  res.status(201).send({
    question: senitizedQuestion,
    answer: "This is response from AI, believe me!!!",
  });

  //   if (question) res.status;

  //   try {
  //     const saveComment = await createComment.save();
  //     res.send(saveComment);
  //   } catch (error) {
  //     console.log(error);
  //     res.status(400).send({ message: "Error trying to create new comment" });
  //   }
});

module.exports = router;
