# Git-based Crawler

![crawler-concept](./crawler-concept.png)

## The idea 💡
This project is a proof-of-concept - create a simple crawler, that:
- Instead of using DBs (and trying to find a good free solution), uses a local JSON file to save its data.
- This static JSON file is used for generating a static website. 
- The crawler is being called by a CRON job at a specific time everyday and when saving to the JSON we trigger the website to be re-build.

## Why 🤔
I wanted to track the prices of some products through the next couple of months and see the actual changes. This crawler will work through events like Black Friday and Christmas. Let's see how the prices for the same product are fluctuating between different sellers and events.


## General workflow 🚧
1) Have a local JSON file
2) Node crawler gathers data and adds it to the JSON file
3) Commit and push the changes via GitHub API
4) Deploy your website on Netlify with CI/CD
5) Pushing the data from the crawler triggers re-deployment from Netlify
6) The website is re-generated with the new data from the JSON file
7) Add a CRON job to trigger this every day


## Use the project
You will need Node and NPM/Yarn to use this project. 

### ENV variables
For all GitHub API related variables check also how to get and update repos - [Create or update file contents](https://docs.github.com/en/rest/repos/contents#create-or-update-file-contents)

```
GITHUB_TOKEN - GitHub token to push changes to the repository
GITHUB_OWNER - GitHub user
GITHUB_REPO - Github target repository (from above's user)
GITHUB_FILE_PATH - Target file to update (from above's repository)
GITHUB_COMMITTER_EMAIL - Email used for committing

NETLIFY_BUILD_HOOK - a hook to call the crawler deployed at Netlify
```

### Crawler part
The crawler is a simple setup of `axios` + `cheerio` to go through a list or product links under `crawler/`.

The `crawler/config.js` is the file defining all the websites and links to be used. Here you define your domains, colors per website and product links. `crawler/index.js` is the crawler file, which goes through the links, fetches the HTML via `axios` and then the response is searched via `cheerio`. Currently this project supports only HTML pages and not direct API calls.


#### Setup

Make sure to install the dependencies:

```
# yarn
yarn install

# npm
npm install
```

#### Development
```
npm run crawl
```

#### Production - this will also push the changes to the repository
```
npm run crawl:build
```

### Frontend part
The front-end is a basic `Nuxt 3` project (I wanted to test how Nuxt 3 behaves for SSG).
#### Setup

Make sure to install the dependencies:

```
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

#### Development

Start the development server on http://localhost:3000
```
npm run dev
```

#### Production

Build the application for production:
```
npm run generate
```