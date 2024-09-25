const { program } = require('commander');
const axios = require('axios');

const API_URL = 'http://localhost:3000/api';

program
    .command('get-repos')
    .description('Get all repositories')
    .action(async () => {
        try {
            const response = await axios.get(`${API_URL}/repos`);
            const repos = response.data;

            repos.forEach(repo => {
                const starsFormatted = (repo.stars / 1000).toFixed(0) + 'k';
                console.log(`${repo.id}. ${repo.name}, ⭐️ ${starsFormatted} stars`);
            });
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
    });

program
    .command('get-repo')
    .description('Get a repository by name or ID')
    .option('--name <name>', 'Repository name')
    .option('--id <id>', 'Repository ID')
    .action(async (cmdObj) => {
        try {
            const response = await axios.get(`${API_URL}/repo`, {
                params: cmdObj,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching repository:', error);
        }
    });

program
    .command('sync')
    .description('Start sync with GitHub')
    .action(async () => {
        try {
            await axios.post(`${API_URL}/sync`);
            console.log('Sync completed successfully');
        } catch (error) {
            console.error('Error syncing with GitHub:', error);
        }
    });

program.parse(process.argv);
