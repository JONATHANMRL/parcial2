const express = require('express');
const router = express.Router();
const controller = require('../controllers/habitacion22.controller');

router.get('/', controller.index);
router.get('/create', controller.create);
router.post('/', controller.store);
router.get('/:id', controller.show);

module.exports = router;
