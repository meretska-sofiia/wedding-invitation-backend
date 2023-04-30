const express = require("express");
const controllerWrapper = require("../../helpers/controllerWrapper");
const getGuestName = require("../../controllers/createGuest");
const willCome = require("../../controllers/willCome");
const router = express.Router();

router.get("/", controllerWrapper(getGuestName));

router.patch("/", controllerWrapper(willCome));

module.exports = router;
