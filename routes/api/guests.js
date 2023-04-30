const express = require("express");
const controllerWrapper = require("../../helpers/controllerWrapper");
const getGuestName = require("../../controllers/createGuest");
const getTotal = require("../../controllers/getTotal");
const willCome = require("../../controllers/willCome");
const router = express.Router();

router.get("/", controllerWrapper(getGuestName));
router.get("/", controllerWrapper(getTotal));
router.patch("/", controllerWrapper(willCome));

module.exports = router;
