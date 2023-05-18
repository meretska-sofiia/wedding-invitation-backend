const express = require("express");
const controllerWrapper = require("../../helpers/controllerWrapper");
const check = require("../../controllers/check");
const router = express.Router();

router.get("/", controllerWrapper(check));

module.exports = router;
