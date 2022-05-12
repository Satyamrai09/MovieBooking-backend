
const express = require("express");
const cors = require("cors");
const app = express();
const port = 9000;
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Upgrad Movie booking application development.",
  });
});

app.listen(port, () => {
    console.log('Connection Established on PORT ',port);
}); 