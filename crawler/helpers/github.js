import * as dotenv from 'dotenv';
import { Octokit } from "octokit";
import { readDataFile } from './file.js'

dotenv.config()

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

const getDataFileInfo = async () => {
    const content = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'simeon-petrov-5',
        repo: 'price-crawler',
        path: 'data/index.json'
    })

    return content.data
}

const generateBase64Content = () => {
    const jsonData = readDataFile();
    const objJsonStr = JSON.stringify(jsonData);
    return Buffer.from(objJsonStr).toString("base64");
}

const updateDataFile = async (dataFileInfo) => {
    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner: 'simeon-petrov-5',
        repo: 'price-crawler',
        path: 'data/index.json',
        message: 'Automatic update - new data added',
        committer: {
            name: 'Monalisa Octocat',
            email: 'petrov.v.simeon@gmail.com'
        },
        content: generateBase64Content(),
        sha: dataFileInfo.sha
    })
}

const commitAndPush = async () => {
    const dataFileInfo = await getDataFileInfo();
    await updateDataFile(dataFileInfo)
}

export default commitAndPush;