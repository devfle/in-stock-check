# In Stock Check

Welcome to the Stock Check tool. This tool allows you to search for specific DOM elements on web pages and then send a notification to your own Discord server.

<img width="70%" alt="01" src="https://github.com/devfle/in-stock-check/assets/52854338/9337120c-2c46-4313-82c1-cbc6e877400a">

The tool was originally built to send a notification when a certain product is back in stock in a store.

## How to setup

1. Clone the repo
2. `run npm ci` with node 18.X (if you have installed nvm, run "nvm use")
3. create a `.env` file in project root
4. create a `shop-list.json` file in /src folder
5. build the project with `npm run build`command

### .env file

To protect sensitive information like API keys the project uses env files.

```text
DISCORD_API_KEY="YOUR DISCORD BOT API KEY"
CHANNEL_ID="THE ID OF THE DISCORD CHANNEL WHERE YOU WANT TO BECOME THE NOTIFICATION"
LOGIN_MSG="OPTIONAL: A CUSTOM LOGIN MESSAGE"
```

### shop-list.json

All metadata for the web pages that are to be analyzed are listed here.

```json
[
  {
    "shopName": "NAME OF THE WEBSITE",
    "productEndpoint": "URL TO THE WEBSITE",
    "searchQuery": "THE SELECTOR YOU WANT TO SEARCH",
    "showProductLink": false
  }
]
```

Multiple web pages can also be configured:

```json
[
  {
    "shopName": "NAME OF THE WEBSITE",
    "productEndpoint": "URL TO THE WEBSITE",
    "searchQuery": "THE SELECTOR YOU WANT TO SEARCH",
    "showProductLink": false
  },
  {
    "shopName": "NAME OF THE WEBSITE",
    "productEndpoint": "URL TO THE WEBSITE",
    "searchQuery": "THE SELECTOR YOU WANT TO SEARCH",
    "showProductLink": false
  }
]
```

## Docker

The NodeJs script can also run in a Docker environment:

1. Navigate into project dir

```bash
cd in-stock-check
```

2. Compile the script:

```bash
npm run build
```

3. Create .env file with necessary data and pass it as a secret:

```bash
docker build -t "in-stock-check" --secret id=in-stock-env,src=.env .
```

## Contributing

Please follow the Prettier, ESLint and TypeScript rules included in this project.
You can check your code with the following commands:

Run ESLint:
```bash
npm run lint
```

Run Prettier:
```bash
npm run prettier
```

Compile TypeScript:
```bash
npm run build
```

While commiting, please use one of the following types:

```javascript
['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']
```

Example:
```bash
git commit -m "chore: update packages"
```




