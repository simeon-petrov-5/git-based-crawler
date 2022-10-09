import fs from 'fs';
import configuration from "../config.js";
const dataFilePath = './data/index.json'


export const readDataFile = () => {
    const data = fs.readFileSync(dataFilePath)
    return JSON.parse(data)
}

export const updateDataFile = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data))
}

export const validateExistingData = (data) => {
    configuration.forEach(config => {
        if (data[config.model] === undefined) {
            data[config.model] = {};
        }
        config.websites.forEach(web => {
            if (data[config.model][web.key] === undefined) {
                data[config.model][web.key] = []
            }
        })
    })
}