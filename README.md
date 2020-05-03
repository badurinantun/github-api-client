# Github Api Client

React application using TypeScript that connects to the GitHub API.

## Development 🛠

Install the dependencies

```bash
npm install
```
[Create a personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) for GitHub API with the following scope:
```
read:user
public_repo
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

## Implementation ✍️

Simple application with Git Hub users search on the home page and user profile page with user repositories. Each query is cached but because of how the pagination was implemented on the API Apollo Client will refetch some of the results when we switch pages.

### [Next.js](https://github.com/zeit/next.js/) ▲

I used Next.js because it was easy to setup and comes with Typescript and routing support.

Alternatives considered:

* [create-react-app](https://github.com/facebook/create-react-app) - assignment prohibits it because of the boilerplate code
* [create-next-app](https://github.com/zeit/create-next-app) - same as create-react-app
* custom webpack setup - time consuming

### [Apollo Client](https://github.com/apollographql/apollo-client) 🌕

Apollo Client was used because it has GraphQL support, easily caches queries and it's easy to setup with [apollo-boost](https://www.npmjs.com/package/apollo-boost) package

Alternatives considered:

* [use-swr](https://swr.now.sh/) - comes with GraphQL and cache support, but Apollo Client was easier to setup
* fetch + [graphql-tag](https://github.com/apollographql/graphql-tag) - would be educational, but time consuming to implement caching

### [Emotion](https://github.com/emotion-js/emotion) 💅

Used because of the css prop, keyframes and simple theming. Css prop was used inline to keep things simple for this smaller project, I wouldn't use this approach on all projects.


