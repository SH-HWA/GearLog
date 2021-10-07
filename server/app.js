require('dotenv').config(); 
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');

// const controllers = require("./controllers");

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// app.get('/auth', controllers.auth);
// app.post('/signin', controllers.signin);
// app.post('/signup', controllers.signup);
// app.post('/signout', controllers.signout);

app.get("/", (req, res) => {
  res.send("헬로월드다");
});

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 에서 스타트중");
});
