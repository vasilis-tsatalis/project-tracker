const express = require("express");
const router = express.Router();

const { home } = require("../src/endpoints/home");


router.route("/").get(home);

module.exports = router;