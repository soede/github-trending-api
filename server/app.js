const express = require("express");
const sequelize = require("./config/database");
const repoRoutes = require("./routes/repoRoutes");
const { fetchTrendingRepos } = require("./services/githubService");

const app = express();
app.use(express.json());
app.use("/api", repoRoutes);

setInterval(
  () => {
    console.log("Starting GitHub sync...");
    fetchTrendingRepos();
  },
  10 * 60 * 1000,
);

const syncRepositories = async () => {
  console.log("Starting GitHub sync...");
  await fetchTrendingRepos();
};

sequelize
  .sync()
  .then(() => {
    app.listen(3000, async () => {
      await syncRepositories();
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.error("Unable to connect to the database:", err));
