"use strict";

const express = require("../../.././node_modules/express");
const router = express.Router();
const sampleController = require("./sample.controller");

//////////////////////

/**
 * Gets a content based on backend data for sample
 * -Parameters
 *      id: sample id
 * -Body (json)
 * {
 *       add comments for body if any to api request 
 *
 * }
 */
router.get("/samplemodule/:id", sampleController.getSampleData);

module.exports = router;
