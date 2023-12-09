
const express = require("express");
const router = express.Router();
const userVerificationController = require("../controllers/userVerificationController.js")

router.post('/userVerification',userVerificationController.userVerification)
module.exports = router;
