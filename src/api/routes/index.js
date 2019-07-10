const express = require("express");
const router = express.Router();

// routes//can be added if any more
var sampleModule = require("./sampleModule");

router.use("/api", sampleModule);
module.exports = router;