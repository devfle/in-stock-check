/* eslint-disable no-console */
import chalk from 'chalk';

/**
 * Returns the current time
 *
 * @returns {string} The current time
 */
function getCurrentTime() {
  const currentDate = new Date();
  const currentHours = String(currentDate.getHours());
  const currentMinutes = String(currentDate.getMinutes());

  if (typeof currentHours !== 'string' || typeof currentMinutes !== 'string') {
    return 'TIME ERROR';
  }

  return `${currentHours.padStart('2', '0')}:${currentMinutes.padStart(
    '2',
    '0',
  )}`;
}

/**
 * Creates an error message
 *
 * @param {string} message - The message to be displayed in the console
 *
 */
const errorMsg = (message) => {
  console.log(chalk.red(`[${getCurrentTime()}][ERROR]: ${message}`));
};

/**
 * Creates an warning message
 *
 * @param {string} message - The message to be displayed in the console
 *
 */
const warnMsg = (message) => {
  console.log(chalk.yellow(`[${getCurrentTime()}][WARNING]: ${message}`));
};

/**
 * Creates an success message
 *
 * @param {string} message - The message to be displayed in the console
 *
 */
const successMsg = (message) => {
  console.log(chalk.green(`[${getCurrentTime()}][SUCCESS]: ${message}`));
};

/**
 * Creates an info message
 *
 * @param {string} message - The message to be displayed in the console
 *
 */
const infoMsg = (message) => {
  console.log(chalk.white(`[${getCurrentTime()}][INFO]: ${message}`));
};

/**
 * Sends a message to configured discord channel in .env file
 *
 * @param {string} client - A client instance to a discord server
 * @param {string} message - The message to be send to the discord channel
 *
 */
const sendNotification = (client, message = '') => {
  if (!process.env.CHANNEL_ID) {
    errorMsg('NO CHANNEL ID WAS FOUND');
    return;
  }

  const channel = client.channels.cache.get(process.env.CHANNEL_ID);

  if (!channel) {
    errorMsg('CHANNEL WITH THE GIVEN ID WAS NOT FOUND');
  }

  channel.send(message);
};

export {
  errorMsg, warnMsg, successMsg, infoMsg, sendNotification,
};
