import { pool } from "../config/database.js";

const getTrails = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM trails ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

// Search Logic

const searchTrails = async (req, res) => {
  const query = req.query.q ? req.query.q.toLowerCase() : "";

  try {
    if (!query) {
      // If no search query, return all trails
      const results = await pool.query("SELECT * FROM trails ORDER BY id ASC");
      return res.status(200).json(results.rows);
    }

    // If there's a search query, filter trails based on parktrailname or distance
    const searchQuery = `%${query}%`; // For SQL LIKE query
    const results = await pool.query(
      `SELECT * FROM trails WHERE LOWER(parktrailname) LIKE $1 OR CAST(distance AS TEXT) LIKE $1 ORDER BY id ASC`,
      [searchQuery]
    );
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default { getTrails, searchTrails };
