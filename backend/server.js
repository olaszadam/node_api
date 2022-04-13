const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(cors());

const db = new sqlite3.Database("./konyvek.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);

  console.log("connection succesful");
});

app.get("/view", function (request, response) {
  const sql = 'SELECT * FROM konyvek';
  var rows;
  db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row => {
      console.log(rows);
    }))
    response.send(rows);
  });

});

app.post('/savedetails/:param', function (request, response) {
  var data = request.params.param.split(';');

  const sql = "INSERT into konyvek (nev, email, konyvcim) values ('" + data[0] + "', '" + data[1] + "', '" + data[2] + "')";
  console.log(sql);
  db.run(sql);
  console.log("New data added");
});

app.post('/update/:param', function (request, response) {
  var data = request.params.param.split(';');
  const sql = "UPDATE konyvek SET nev='" + data[1] + "', email='" + data[2] + "', konyvcim='" + data[3] + "' WHERE id='" + data[0] + "'";
  console.log(sql);
  db.run(sql);
  console.log("Data updated, id: " + data[0]);

});

app.post('/deleterecord/:param', function (request, response) {
  console.log("Deleting...");
  var data =request.params.param;
  const sql = "delete from konyvek where id = "+data+"";
  console.log(sql);
  db.run(sql);
  console.log("data deleted, id: " + data);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
  console.log("Server started succesfully!");
});