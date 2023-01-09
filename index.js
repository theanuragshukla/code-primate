const express = require("express");
const app = express();
const http = require("http").Server(app);
const PORT = process.env.PORT || 3000;
const config = require("./config");
app.use("/static", express.static(__dirname + "/static"));
const HomeRouter = require("./routes/home");

app.use("/", HomeRouter);

app.use(config.baseUrl, HomeRouter);

http.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
