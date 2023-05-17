const { CustomError } = require("../../errorMsg");
const { AsyncQuery } = require("../../config/configDatabase");
const { isEmail } = require("../../tool");
const sha256 = require("js-sha256");
const { StatusCodes: Status } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const Auth = {
  login: async (req, res) => {
    console.log("running login control..");

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(Status.BAD_REQUEST).json({
        EM: "Please enter a valid email and password",
        EC: 0,
        DT: [],
      });
    }
    if (!isEmail(email)) {
      // throw new CustomError(Status.BAD_REQUEST, "Email không hợp lệ");
      return res.status(Status.BAD_REQUEST).json({
        EM: "Invalid email address",
        EC: -3,
        DT: [],
      });
    }
    if (password.length < 5 || password.length > 20) {
      // throw new CustomError(Status.BAD_REQUEST, "Mật khẩu phải từ 5-20 kí tự");
      console.log(email, password);
      return res.status(Status.BAD_REQUEST).json({
        EM: "Your password have to have 5-20 characters",
        EC: -4,
        DT: [],
      });
    }
    const psw = sha256(password);
    const sp = "exec sp_login";
    const p = [
      ["email", email],
      ["password", psw],
    ];

    try {
      const result = await AsyncQuery(sp, p, true);
      const data = result.data.recordset[0];

      if (!data) console.log(Status.BAD_REQUEST);

      console.log("data", data);

      if (data.length == 0) {
        return res.status(Status.BAD_REQUEST).json({
          EM: "Wrong email or password, please try again",
          EC: -1,
          DT: [],
        });
      }

      const { IsActive } = data;

      if (!IsActive) {
        return res.status(500).json({
          EM: "This account is not active",
          EC: -2,
          DT: [],
        });
      }

      // const token = jwt.sign({ Position }, process.env.JWT_SECRET);
      return res.status(200).json({
        EM: "Login successfull",
        EC: 1,
        DT: data,
      });
    } catch (error) {
      return res.status(500).json({
        EM: "Error from server",
        EC: -1,
        DT: [],
      });
    }
  },
};

module.exports = Auth;
