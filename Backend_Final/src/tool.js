const sql = require("mssql");
const config = require("./config/configDatabase");

const isNumberic = (str) => {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
};

const getCurrentDateTime = () => {
  let date_ob = new Date();
  // current date
  // adjust 0 before single digit date
  let date = ("0" + date_ob.getDate()).slice(-2);

  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // current year
  let year = date_ob.getFullYear();

  // current hours
  let hours = ("0" + (date_ob.getHours() + 1)).slice(-2);

  // current minutes
  let minutes = ("0" + (date_ob.getMinutes() + 1)).slice(-2);

  // current seconds
  let seconds = ("0" + (date_ob.getSeconds() + 1)).slice(-2);

  // prints date in YYYY-MM-DD format
  // console.log(year + "-" + month + "-" + date);

  // prints date & time in YYYY-MM-DD HH:MM:SS format
  // console.log(
  //   year +
  //     "-" +
  //     month +
  //     "-" +
  //     date +
  //     " " +
  //     hours +
  //     ":" +
  //     minutes +
  //     ":" +
  //     seconds
  // );
  return (
    year +
    "-" +
    month +
    "-" +
    date +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds
  );
};

function isEmail(email) {
  var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (email !== "" && email.match(emailFormat)) {
    return true;
  }

  return false;
}

const sqlQueryCalled = async (query, success, error) => {
  try {
    const poolConnection = await sql.connect(config);
    const data = await poolConnection.request().query(`
      ${query}
    `);
    return {
      EM: `${success}`,
      EC: 1,
      DT: data.recordset,
    };
  } catch (error) {
    return {
      EM: `${error}`,
      EC: 1,
      DT: error.message,
    };
  }
};

module.exports = { isNumberic, getCurrentDateTime, sqlQueryCalled, isEmail };
