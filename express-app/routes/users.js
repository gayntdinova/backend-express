const express = require('express');
const router = express.Router();


const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('mydb.db');
db.run(`CREATE TABLE IF NOT EXISTS users (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name text)`);

let a = [];
/* GET users listing. */
router.get('/', function(req, res, next) {
    db.all("SELECT id, name FROM users", [], (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    });
   a = {items : [{
      "id": 1,
      "name": "name"
    },
      {
        "id": 2,
        "name": "Ирина"
      },
      {
        "id": 3,
        "name": "Денис"
      }]};
  res.send(a);
});

router.post('/', function(req, res, next) {

  const insert = "INSERT INTO users (name) VALUES (?)";
  db.run(insert, [req.body]);

  let newUser = req.body;
  a.push(newUser);
  res.status(201).json(newUser);
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let search = false;
  for (let i of Object.keys(a)) {
    if (id == i){
      search = true;
    }
  }
  if (!search){
    res.status(404).send('Not Found');
  }
})



module.exports = router;
