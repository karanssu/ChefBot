const request = require("supertest");
const app = require("../../app"); // Ensure this points to your server.js

describe("POST /ask", () => {
  it("should return a sanitized question and an answer", async () => {
    const question = { question: "   How is the weather?   " };

    const response = await request(app).post("/ask").send(question);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("question");
    expect(response.body).toHaveProperty("answer");
    expect(response.body.question).toBe("How is the weather?");
    expect(response.body.answer).toBe(
      "This is response from AI, believe me!!!"
    );
  });

  it("should return 400 if the question is missing", async () => {
    const response = await request(app).post("/ask").send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("question is required");
  });

  it("should return 400 if the question is an empty string", async () => {
    const question = { question: "   " };

    const response = await request(app).post("/ask").send(question);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("question is required");
  });
});
