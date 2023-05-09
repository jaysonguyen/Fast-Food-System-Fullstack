const sql = require("mssql");
const config = require("../config/configDatabase");

const { sqlQueryCalled } = require("../../tool");

console.log("Starting login...");

const Login = (email, password) => {
  const query = ``;
  return sqlQueryCalled();
};

module.exports = { Login };
