import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';
import shopList from './shop-list.json' assert { type: 'json' };
import {
  errorMsg,
  infoMsg,
  successMsg,
  warnMsg,
  sendNotification,
} from './utils.js';
import client from './discord.js';
import ShopItemData from './types.js';

if (!shopList) {
  errorMsg(
    "NO SHOP DATA FOUND IN 'shop-list.json' YOU HAVE TO CREATE AND CONFIGURE IT.",
  );
  throw new TypeError();
}

/**
 * Calls a endpoint and returns its DOM
 *
 * @param {string} url  - The endpoint on which the DOM should be crawled
 *
 * @returns {Promise<string | null>}
 */
const fetchWebsiteData = async (url: string): Promise<string | null> => {
  if (typeof url !== 'string') {
    errorMsg('SHOP ENDPOINT NOT VALID');
    return null;
  }

  const request = await fetch(url);
  const requestText = await request.text();
  return requestText;
};

/**
 * Searches the DOM for a specific selector
 *
 * @param {string} domText      - The DOM to be searched
 * @param {string} searchQuery  - The element to search for
 *
 * @returns {boolean}
 */
const searchInDom = (domText: string, searchQuery: string = ''): boolean => {
  if (typeof searchQuery !== 'string') {
    errorMsg('QUERY IS NOT A STRING');
    return false;
  }

  const generatedDom = new JSDOM(domText);
  return !!generatedDom.window.document.querySelector(searchQuery);
};

/**
 * The Loop
 */
setInterval(
  () => {
    shopList.forEach(async (shopItem: ShopItemData) => {
      const { shopName, productEndpoint, searchQuery, showProductLink } =
        shopItem;
      infoMsg(`NOW SEARCHING ON ${shopName}...`);
      const fetchedTextDom = await fetchWebsiteData(productEndpoint);

      if (!fetchedTextDom) {
        return errorMsg('FETCH DATA IS NOT VALID');
      }

      const searchResult = searchInDom(fetchedTextDom, searchQuery);

      if (searchResult) {
        successMsg(`ITEM IN STOCK AT: ${shopName}, SENDING NOTIFICATION...`);
        sendNotification(
          client,
          `ITEM IN STOCK AT: ${shopName}. ${
            showProductLink ? `LINK TO PRODUCT: ${productEndpoint}` : ''
          }`,
        );
      } else {
        warnMsg('NOTHING CHANGED...');
      }
    });
  },
  1000 * 60 * 30,
);
