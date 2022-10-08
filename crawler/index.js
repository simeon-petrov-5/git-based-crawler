import fs from 'fs';
import * as cheerio from 'cheerio';
import configuration, { WEBSITE } from "./config.js";
import axios from "axios";

const cheerioSelectors = {
  [WEBSITE.TECHNOPOLIS]: '.product-block .product-price .price .price-value',
  [WEBSITE.TECHNOMIX]: '.catalog-product-view .product-top-area .product-info-main .product-info-price .price-box .final-price .price-container .price'
};
const dataFilePath = './data/index.json'
const readDataFile = () => {
  const data = fs.readFileSync(dataFilePath)
  return JSON.parse(data)
}
const updateDataFile = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data))
}

const validateExistingData = (data) => {
  if (Object.keys(data).length > 0) return;

  configuration.forEach(config => {
    data[config.model] = {};
    config.websites.forEach(web => {
      data[config.model][web.key] = []
    })
  })
}


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

updateDataFile(data)