const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let a = {items : [{
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

module.exports = router;
