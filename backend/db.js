const sqlite3 = require("sqlite3").verbose();
const fs = require('fs');

fs.open('konyvek.db', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

const db = new sqlite3.Database("./konyvek.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
  
    console.log("connection succesful");
  });
  
db.run('CREATE TABLE konyvek(id INTEGER PRIMARY KEY AUTOINCREMENT, nev TEXT NOT NULL, email TEXT UNIQUE NOT NULL, konyvcim TEXT NOT NULL)');

/*
const sql ='INSERT INTO employees(name, email, address) VALUES(?,?,?)';
db.run(sql, ["mike","asd@gmail.com", "aaaaaa aaaa"], (err)=>{
    if(err) return console.error(err.message);

    console.log("A new row added!");
});
*/
