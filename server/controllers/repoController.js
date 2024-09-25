const Repository = require("../models/repository");

const getAllRepositories = async (req, res) => {
  try {
    const repos = await Repository.findAll();
    res.json(repos);
  } catch (e) {
    res.status(500).send("Something wrong");
  }
};

const getRepositoryByNameOrId = async (req, res) => {
  try {
    const { id, name } = req.query;
    const repo = await Repository.findOne({
      where: id ? { id } : { name },
    });

    if (!repo) return res.status(404).send("Repository not found");
    res.json(repo);
  } catch (e) {
    res.status(500).send("Something wrong");
  }
};

const syncWithGitHub = async (req, res) => {
  try {
    await require("../services/githubService").fetchTrendingRepos();
    res.send("Sync completed successfully");
  } catch (error) {
    res.status(500).send("Error syncing with GitHub");
  }
};

module.exports = {
  getAllRepositories,
  getRepositoryByNameOrId,
  syncWithGitHub,
};
