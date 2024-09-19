const app = require("./app");

const SERVER_PORT = process.env.SERVER_PORT || 8000;

app.listen(SERVER_PORT, () => {
  console.log(`Backend Server is running on port ${SERVER_PORT}...`);
});
