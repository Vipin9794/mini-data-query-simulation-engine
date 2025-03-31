const express = require("express");
const { queryProcessor, explainQuery, validateQuery } = require("../controllers/queryController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/query", authMiddleware, queryProcessor);
router.get("/explain", authMiddleware, explainQuery);
router.post("/validate", authMiddleware, validateQuery);

module.exports = router;
