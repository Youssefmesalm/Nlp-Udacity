const dotenv = require("dotenv");
const path = require("path");
const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const API_KEY = process.env.API_KEY;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

app.listen(8081, function () {
  console.log("Server running on port 8081");
});
let APILink = "https://api.meaningcloud.com/sentiment-2.1?key=";

app.post("/link", async (req, res) => {
  const link = req.body.link;
  const response = await fetch(`${APILink}${API_KEY}&url=${link}&lang=en`);
  const data = await response.json();
  res.send(data);
});
