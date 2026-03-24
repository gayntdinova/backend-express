const express = require('express');
const router = express.Router();


let a = [];
/* GET users listing. */
router.get('/', function(req, res, next) {
   a = {items : [{
      "id": 1,
      "name": "name"
    },
      {
        "id": 1,
        "name": "Ирина"
      },
      {
        "id": 1,
        "name": "Денис"
      }]};
  res.send(a);
});

router.post('/', function(req, res, next) {
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
