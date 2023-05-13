const {
  accessKey,
  secretKey,
  endpoint,
  orderInfo,
  partnerCode,
  redirectUrl,
  ipnUrl,
  requestType,
  amount,
  orderId,
  requestId,
  extraData,
  paymentCode,
  orderGroupId,
  autoCapture,
  lang,
} = require("../../config/configMoMoPayment");

//https://developers.momo.vn/#/docs/en/aiov2/?id=payment-method

//before sign HMAC SHA256 with format
//accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
var rawSignature =
  "accessKey=" +
  accessKey +
  "&amount=" +
  amount +
  "&extraData=" +
  extraData +
  "&ipnUrl=" +
  ipnUrl +
  "&orderId=" +
  orderId +
  "&orderInfo=" +
  orderInfo +
  "&partnerCode=" +
  partnerCode +
  "&redirectUrl=" +
  redirectUrl +
  "&requestId=" +
  requestId +
  "&requestType=" +
  requestType;
//puts raw signature

console.log("--------------------RAW SIGNATURE----------------");
console.log(rawSignature);
//signature
const crypto = require("crypto");
var signature = crypto
  .createHmac("sha256", secretKey)
  .update(rawSignature)
  .digest("hex");
console.log("--------------------SIGNATURE----------------");
console.log(signature);

//json object send to MoMo endpoint
const requestBody = JSON.stringify({
  partnerCode: partnerCode,
  partnerName: "Test",
  storeId: "MomoTestStore",
  requestId: requestId,
  amount: amount,
  orderId: orderId,
  orderInfo: orderInfo,
  redirectUrl: redirectUrl,
  ipnUrl: ipnUrl,
  lang: lang,
  requestType: requestType,
  autoCapture: autoCapture,
  extraData: extraData,
  orderGroupId: orderGroupId,
  signature: signature,
});
//Create the HTTPS objects
const https = require("https");
const options = {
  hostname: "test-payment.momo.vn",
  port: 443,
  path: "/v2/gateway/api/create",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(requestBody),
  },
};

//Send the request and get the response
const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  res.setEncoding("utf8");
  res.on("data", (body) => {
    console.log("Body: ");
    console.log(body);
    console.log("resultCode: ");
    console.log(JSON.parse(body).resultCode);
  });
  res.on("end", () => {
    console.log("No more data in response.");
  });
});


req.on("error", (e) => {
  console.log(`problem with request: ${e.message}`);
});
// write data to request body
console.log("Sending....");
req.write(requestBody);
req.end();
