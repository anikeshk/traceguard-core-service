const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

router.get('/posts', exampleController.getPosts);
router.get('/posts/:id', exampleController.getPostById);

module.exports = router;
