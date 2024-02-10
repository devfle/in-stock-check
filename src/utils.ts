/* eslint-disable no-console */
import chalk from 'chalk';
import { Client, TextChannel } from 'discord.js';

/**
 * Returns the current time
 *
 * @returns {string} The current time
 */
function getCurrentTime(): string {
  const currentDate = new Date();
  const currentHours = String(currentDate.getHours());
  const currentMinutes = String(currentDate.getMinutes());

  if (typeof currentHours !== 'string' || typeof currentMinutes !== 'string') {
    return 'TIME ERROR';
  }

  return `${currentHours.padStart(2, '0')}:${currentMinutes.padStart(2, '0')}`;
}

/**
 * Creates an error message
 *
 * @param {string} message - The message to be displayed in the console
 *
 */
const errorMsg = (message: string) => {
  console.log(chalk.red(`[${getCurrentTime()}][ERROR]: ${message}`));
};

/**
 * Creates an warning message
 *
 * @param {string} message - The message to be displayed in the console
 *
 */
const warnMsg = (message: string) => {
  console.log(chalk.yellow(`[${getCurrentTime()}][WARNING]: ${message}`));
};

/**
 * Creates an success message
 *
 * @param {string} message - The message to be displayed in the console
 *
 */
const successMsg = (message: string) => {
  console.log(chalk.green(`[${getCurrentTime()}][SUCCESS]: ${message}`));
};

/**
 * Creates an info message
 *
 * @param {string} message - The message to be displayed in the console
 *
 */
const infoMsg = (message: string) => {
  console.log(chalk.white(`[${getCurrentTime()}][INFO]: ${message}`));
};

/**
 * Sends a message to configured discord channel in .env file
 *
 * @param {Client} client - A client instance to a discord server
 * @param {string} message - The message to be send to the discord channel
 *
 */
const sendNotification = (client: Client, message: string = '') => {
  if (!process.env.CHANNEL_ID) {
    errorMsg('NO CHANNEL ID WAS FOUND');
    return;
  }

  const channel = client.channels.cache.get(process.env.CHANNEL_ID);

  if (!channel) {
    errorMsg('CHANNEL WITH THE GIVEN ID WAS NOT FOUND');
    return;
  }

  (channel as TextChannel).send(message);
};

export { errorMsg, warnMsg, successMsg, infoMsg, sendNotification };
