const axios = require("axios");
const Repository = require("../models/repository");

const fetchTrendingRepos = async () => {
  try {
    const response = await axios.get(
      "https://api.github.com/search/repositories",
      {
        params: {
          q: "stars:>1",
          sort: "stars",
          order: "desc",
          per_page: 100,
        },
      },
    );

    const repos = response.data.items;

    const existingRepos = await Repository.findAll();
    const existingRepoNames = existingRepos.map((repo) => repo.name);

    for (const repo of repos) {
      if (existingRepoNames.includes(repo.full_name)) {
        await Repository.update(
          {
            stars: repo.stargazers_count,
            url: repo.html_url,
          },
          {
            where: { name: repo.full_name },
          },
        );
      } else {
        await Repository.create({
          name: repo.full_name,
          stars: repo.stargazers_count,
          url: repo.html_url,
        });
      }
    }

    console.log("Repositories saved successfully.");
  } catch (error) {
    console.error("Error fetching repositories from GitHub:", error);
  }
};

module.exports = { fetchTrendingRepos };
