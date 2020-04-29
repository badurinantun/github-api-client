# Github Api Client

React application using TypeScript that connects to the GitHub API.

## Development 🛠

Install the dependencies

```bash
npm install
```
[Create a personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) for GitHub API with the following scope:
```
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```
and add it to the `.env` file in root directory
```
ACCESS_TOKEN=GITHUB_ACCESS_TOKEN
```


Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.
