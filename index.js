const express = require("express");
const app = express();

app.get("/getMessage", (req, res) => {
  res.send("Hello Nelson");
});

app.listen("3001", () => {
  console.log("Server running on port 3001");
});
