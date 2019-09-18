require("dotenv").config();
const express = require("express");
const app = express();
const addCorsHeaders = require("./middleware/addCorsHeaders");

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(addCorsHeaders);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
