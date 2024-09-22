require("dotenv").config();
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const ask = async (question) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    return "An error occurred.";
  }
};

module.exports = ask;
