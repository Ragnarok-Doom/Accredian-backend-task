const express = require('express');
const router = express.Router();
const referralController = require('../controllers/referralController');

// Define POST route for submitting referrals
router.post('/', referralController.createReferral);

module.exports = router;
