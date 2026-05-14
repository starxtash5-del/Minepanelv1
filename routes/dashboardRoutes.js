const router = require('express').Router();

const { isAuth } = require('../middleware/auth');

router.get('/', isAuth, (req, res) => {

  res.render('dashboard/index');

});

module.exports = router;
