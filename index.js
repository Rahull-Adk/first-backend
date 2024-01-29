require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (_, res) => {
  res.send("rahulldotcom");
});

app.get("/login", (_, res) => {
  res.send(`<h1>Please Login At Chai Aur Code</h1>`);
});

app.get("/youtube", (_, res) => {
  res.send(`<h2>Chai aur code</h2>`);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
