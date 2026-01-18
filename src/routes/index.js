const express = require('express');
const router = express.Router();

const healthRoutes = require('./health');
const apiRoutes = require('./api');

router.use(healthRoutes);
router.use('/api', apiRoutes);

module.exports = router;
