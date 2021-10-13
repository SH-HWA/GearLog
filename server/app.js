require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const controllers = require("./controllers");

app.use(
  cors({
    // origin: ["http://localhost:3000"],
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE"],
  })
);
app.use(cookieParser());
app.use(express.json());

app.get("/userinfo", controllers.userinfo);
app.post("/login", controllers.login);
app.post("/signup", controllers.signup);
app.delete("/signout", controllers.signout);
app.post("/logout", controllers.logout);
app.post("/kakao/callback", controllers.kakaoCB);
app.post("/naver/callback", controllers.naverCB);
app.post("/google/callback", controllers.googleCB);
app.post("/userinfo/update", controllers.update);

app.get("/", (req, res) => {
  res.send("헬로월드다");
});

app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 에서 스타트중");
});
