// exports.queryProcessor = (req, res) => {
//     const { question } = req.body;
//     const pseudoSQL = `SELECT * FROM data WHERE query='${question}'`;
//     res.json({ query: question, sql: pseudoSQL, result: "Sample Data" });
//   };

//   exports.explainQuery = (req, res) => {
//     res.json({ message: "This endpoint explains how queries are processed." });
//   };

//   exports.validateQuery = (req, res) => {
//     const { question } = req.body;
//     if (!question || question.length < 5) return res.status(400).json({ error: "Invalid query" });
//     res.json({ valid: true });
//   };

const db = require("../config/database"); 

exports.queryProcessor = (req, res) => {
  const { question } = req.body;

  if (!question || question.trim().length === 0) {
    return res.status(400).json({ error: "Query is required" });
  }

  // Query को SQL में बदलें (सुरक्षित रूप से)
  const pseudoSQL = "SELECT * FROM data WHERE query = ?";

  db.all(pseudoSQL, [question], (err, rows) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Database error", details: err.message });
    }
    res.json({
      query: question,
      sql: pseudoSQL,
      result: rows.length > 0 ? rows : "No data found",
    });
  });
};

exports.explainQuery = (req, res) => {
  res.json({ message: "This endpoint explains how queries are processed." });
};

exports.validateQuery = (req, res) => {
  const { question } = req.body;

  if (!question || question.trim().length < 5) {
    return res
      .status(400)
      .json({ error: "Invalid query. Minimum 5 characters required." });
  }

  res.json({ valid: true });
};
