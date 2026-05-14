const router = require('express').Router();

const { isAdmin } = require('../middleware/auth');

router.get('/', isAdmin, (req, res) => {

  res.render('admin/index');

});

module.exports = router;
