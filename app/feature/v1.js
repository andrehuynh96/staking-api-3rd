const express = require('express');
const router = express.Router();

router.use(require("./tracking-voting/tracking-voting.route"));
router.use(require('./authentication/authentication.route'));
router.use(require('./validator/validator.route'));

module.exports = router;
