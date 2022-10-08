import fs from 'fs';
const dataFilePath = './data/index.json'


export const readDataFile = () => {
    const data = fs.readFileSync(dataFilePath)
    return JSON.parse(data)
}

export const updateDataFile = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data))
}

export const validateExistingData = (data) => {
    if (Object.keys(data).length > 0) return;

    configuration.forEach(config => {
        data[config.model] = {};
        config.websites.forEach(web => {
            data[config.model][web.key] = []
        })
    })
}