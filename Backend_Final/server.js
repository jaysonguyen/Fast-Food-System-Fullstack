const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
//const errorHandler = require("./src/middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(errorHandler);

app.use("/api/food/", require("./src/routes/foodApi"));
app.use("/api/user/", require("./src/routes/userApi"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
