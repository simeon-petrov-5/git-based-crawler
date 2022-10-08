import * as cheerio from 'cheerio';
import axios from "axios";
import configuration, { WEBSITE } from "./config.js";
import { readDataFile, updateDataFile, validateExistingData } from './helpers/file.js';
import commitAndPush from './helpers/github.js';

const cheerioSelectors = {
  [WEBSITE.TECHNOPOLIS]: '.product-block .product-price .price .price-value',
  [WEBSITE.TECHNOMIX]: '.catalog-product-view .product-top-area .product-info-main .product-info-price .price-box .final-price .price-container .price'
};

const getPriceWithCheerio = ({ htmlStr, website }) => {
  const $ = cheerio.load(htmlStr);
  const price = $(cheerioSelectors[website]).text().replace(/\s/g, '').replace('лв.', '').replace(',', '.');
  return parseFloat(price, 10)
}

// Start the magic
const data = readDataFile();
validateExistingData(data);

for await (const config of configuration) {
  for await (const website of config.websites) {
    // Fetch the page
    const response = await axios.get(website.url)
    // Get the price
    const price = getPriceWithCheerio({
      htmlStr: response.data,
      website: website.key
    })
    // Add the price
    data[config.model][website.key].push({
      date: new Date(),
      price
    })
  }
}

updateDataFile(data);
await commitAndPush();
