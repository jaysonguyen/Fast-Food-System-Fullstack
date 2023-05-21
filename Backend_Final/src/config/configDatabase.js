const sql = require("mssql");
const msnodesqlv8 = require("mssql/msnodesqlv8");
const { isNumberic } = require("../tool");

// const config = {
//   user: "jaysonguyendb", // better stored in an app setting such as process.env.DB_USER
//   password: "Thanhnguyen1", // better stored in an app setting such as process.env.DB_PASSWORD
//   server: "jaysonguyendb.database.windows.net", // better stored in an app setting such as process.env.DB_SERVER
//   port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
//   database: "jaysonguyendb", // better stored in an app setting such as process.env.DB_NAME
//   authentication: {
//     type: "default",
//   },
//   options: {
//     encrypt: true,
//   },
// };

const config = {
  server: "LAPTOP-6NGD2LH1\\THAOMY",
  database: "fastfooddb",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

const AsyncQuery = async (query, params, callSp) => {
  const poolConnection = await sql.connect(config);
  // let request = await poolConnection.request();

  if (params && params.length > 0) {
    //dùng cho câu lệnh select bình thường, có sử dụng Where trong câu truy vấn
    //them where truoc
    if (!callSp) query += " where ";

    for (let i = 0; i < params.length; i++) {
      let x = params[i];
      //truyền input theo dạng mảng, key - value
      //ví dụ: input = [
      //  ['ten x1', x1], ['ten x2', x2]
      //]
      // request.input(x[0], x[1]);

      if (callSp) {
        let p = "";
        if (i < params.length - 1) {
          if (isNumberic(x[1])) p = ` ${x[1]},`;
          else p = ` '${x[1]}',`;
        } else {
          if (isNumberic(x[1])) p = ` ${x[1]}`;
          else p = ` '${x[1]}'`;
        }

        query += p;
        continue;
      }

      query += `(${x[0]} = @${x[0]} or @${x[0]} is null or @${x[0]} = '')`;
      if (i < params.length - 1) query += " and ";
    }
  }

  let result;
  console.log("query: ", query);
  try {
    result = await poolConnection.request().query(query);
    console.log("result: ", result);
    poolConnection.close();
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      data: error.message,
    };
  }
};

module.exports = { config, AsyncQuery };
