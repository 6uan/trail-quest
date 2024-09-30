import express from "express";
import "./config/dotenv.js";
import trailsRouter from "./routes/trails.js";

const app = express();

app.use("/public", express.static("public"));
app.use("/scripts", express.static("scripts"));
app.use("/trails", trailsRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 class="text-align: center; margin-top:50px;">Trail Quest API</h1>'
    );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
