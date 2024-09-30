import { pool } from "./database.js";
import "./dotenv.js";
import trailData from "../data/trails.js";

const createTrailsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS trails;
    
    CREATE TABLE IF NOT EXISTS trails (
        id SERIAL PRIMARY KEY,
        parkTrailName VARCHAR(255) NOT NULL,
        cityState VARCHAR(255) NOT NULL,
        distance DECIMAL(5,2) NOT NULL,
        distanceType VARCHAR(10) NOT NULL,
        description TEXT NOT NULL,
        directions VARCHAR(255),
        image VARCHAR(255) NOT NULL,
        trailImage VARCHAR(255) NOT NULL
        )
        `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 trails table created successfully");
  } catch (err) {
    console.error("⚠️ error creating trails table", err);
  }
};

const seedTrailsTable = async () => {
  await createTrailsTable();
  trailData.forEach((trail) => {
    const insertQuery = {
      text: "INSERT INTO trails (parkTrailName, cityState, distance, distanceType, description, directions, image, trailImage) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    };
    const values = [
      trail.parkTrailName,
      trail.cityState,
      trail.distance,
      trail.distanceType,
      trail.description,
      trail.directions,
      trail.image,
      trail.trailImage,
    ];
    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ Error inserting trail:", err);
        return;
      }

      console.log(`✅ ${trail.parkTrailName} added successfully`);
    });
  });
};

seedTrailsTable();
