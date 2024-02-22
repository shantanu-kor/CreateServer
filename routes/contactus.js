const express = require('express');

const contactUsController = require('../controllers/contactus');

const router = express.Router();

router.get('/contactus', contactUsController.getContactUs);

router.post('/success', contactUsController.postSuccess);

module.exports = router;