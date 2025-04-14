const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/getUserByID/:userID", userController.getUserByID);
router.put("/editUserPassword/:userID",authMiddleware.default ,userController.editUserPassword);

module.exports = router;