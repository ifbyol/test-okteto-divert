import express from "express";
const app = express();

const PORT = 8080;

app.get("/servicec", function (req, res) {
  res.send("Service C says hello!");
});

app.get("/servicec/chain", function (req, res) {
  console.log("/chain request");
  res.send(`Service C says hello from ${process.env.OKTETO_NAMESPACE}!`);
});

app.use(function (req, res, next) {
  res.status(404).send("404: Sorry! Page not found.");
  console.log("404 error occurred:", req.url);
});

app.listen(PORT, function () {
  console.log("Started service-c server on %d", PORT);
});
