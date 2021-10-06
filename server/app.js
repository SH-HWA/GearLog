require('dotenv').config(); 
const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("헬로월드다");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 에서 스타트중");
});
