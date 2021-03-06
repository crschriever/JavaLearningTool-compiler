"use strict";
const express = require("express");
const { execSync } = require("child_process");

const router = express.Router();
const JavaTest = require("../JavaTest.js");
const tester = JavaTest();
const logger = require("../logger.js");

router.post("/", function(req, res, next) {
    logger.debug("SRC Code: " + req.body.classes);
    logger.debug("Challenge: " + req.body.challenge);

    tester.addProcess(req.body.classes, req.body.challenge, function(answer) {
        logger.debug(answer);
        res.send(answer);
    });
});

router.post("/pull", function(req, res, next) {
    logger.debug("Pulling repo");

    try {
        execSync("bash ./scripts/pull.sh");
        res.json({ error: false });
    } catch (err) {
        res.json({ error: err });
    }
});

module.exports = router;
