const router = require('express').Router();

router.get('/', (req, res) => {

  res.send('Server Route');

});

module.exports = router;
