const express = require("express");
const {
  getAllRepositories,
  getRepositoryByNameOrId,
  syncWithGitHub,
} = require("../controllers/repoController");

const router = express.Router();

router.get("/repos", getAllRepositories);
router.get("/repo", getRepositoryByNameOrId);
router.post("/sync", syncWithGitHub);

module.exports = router;
