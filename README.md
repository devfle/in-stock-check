# In Stock Check

Welcome to the Stock Check tool. This tool allows you to search for specific DOM elements on web pages and then send a notification to your own Discord server.

The tool was originally built to send a notification when a certain product is back in stock in a store.

## How to setup

1. Clone the repo
2. `run npm ci` with node 16.X (if you have installed nvm, run "nvm use")
3. create a `.env` file in project root
4. create a `shop-list.json` file in /src folder

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

Multiple web pages can also be configured.

## Docker

The NodeJs script can also run in a Docker environment.
