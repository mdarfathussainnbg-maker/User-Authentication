const express = require("express");
const app = express();

app.use(express.json());


// Home API
app.get("/", (req, res) => {
  res.send("API Running Successfully 🚀");
});

// Example API
app.get("/api/user", (req, res) => {
  res.json({
    name: "Arfat",
    skill: "Backend Developer"
  });
});

// POST API Example
app.post("/api/login", (req, res) => {
  const { username } = req.body;
  res.json({
    message: `Welcome ${username}`
  });
});


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
