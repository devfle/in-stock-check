import { Client, GatewayIntentBits } from 'discord.js';
// eslint-disable-next-line import/extensions
import { successMsg, sendNotification } from './utils.mjs';
import 'dotenv/config';

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const loggedInMsg = process.env.LOGIN_MSG || 'THE BOT WAS LOGGED IN SUCCESSFULL';

// When the client is ready, run this code (only once)
client.once('ready', () => {
  successMsg(loggedInMsg);
  sendNotification(client, loggedInMsg);
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_API_KEY);

export default client;
