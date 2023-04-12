const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv");
// require("dotenv").config();
// const errorHandler = require("./src/middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");

  res.setHeader(
    "Access-Control-Request-Headers",
    "Origin, Content-Type, Accept"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(errorHandler);

app.use("/api/food/", require("./src/routes/foodApi"));
app.use("/api/foodtype/", require("./src/routes/foodTypeApi"));
// app.use("/api/order/", require("./src/routes/orderApi"));
app.use("/api/staff/", require("./src/routes/staffApi"));
app.use("/api/supplier/", require("./src/routes/supplierApi"));
app.use("/api/promotion/", require("./src/routes/promotionApi"));

app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});


