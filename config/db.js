const mysql = require("mysql2")
// require("dotenv").config()

const con = mysql.createConnection({
  host: "bfckkvc7ukodqlejszef-mysql.services.clever-cloud.com",
  user: "u8fj6xfx6lwplxbo",
  password: "ROK1w0rE2vKQH60HxlCk",
  database: "bfckkvc7ukodqlejszef",
  connectionLimit: 10
})

con.connect((err) => {
  if(err)
    console.log(err);
  else {
    console.log("Connected to DB ..")
  }
});

module.exports = con;
