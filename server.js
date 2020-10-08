const express = require("express");
const app = express();
const post = 5001;

app.use(express.json());

let users = [
  { username: "User1", password: "PW1" },
  { username: "User2", password: "PW2" },
  { username: "User3", password: "PW3" },
];

app.get("/", (req, res) => {
  res.send("User logged in successfully");
});

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send();
  return { message: "User logged in successfully" };
});
