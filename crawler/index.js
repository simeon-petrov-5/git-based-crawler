import * as cheerio from 'cheerio';
import axios from "axios";
import configuration, { HTMLSelectors } from "./config.js";
import { readDataFile, updateDataFile, validateExistingData } from './helpers/file.js';
import commitAndPush from './helpers/github.js';


const getPriceWithCheerio = ({ htmlStr, website }) => {
  const $ = cheerio.load(htmlStr);
  const price = $(HTMLSelectors[website]).text().replace(/\s/g, '').replace('лв.', '').replace(',', '.');
  return parseFloat(price, 10)
}

// Start the magic
const data = readDataFile();
validateExistingData(data);

for await (const config of configuration) {
  for await (const website of config.websites) {
    try {
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
      console.info(`INFO: Got ${config.model} from ${website.key}`)
    } catch (err) {
      console.log(err.message)
      console.log(website.key, website.url)
    }
  }
}

updateDataFile(data);
if (process.env.CRAWLER_MODE === 'production') {
  await commitAndPush();
}
