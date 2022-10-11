import * as dotenv from 'dotenv';
import { Octokit } from "octokit";
import { readDataFile } from './file.js'

dotenv.config()

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

const getDataFileInfo = async () => {
    const content = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: process.env.GITHUB_OWNER,
        repo: process.env.GITHUB_REPO,
        path: process.env.GITHUB_FILE_PATH,
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
        owner: process.env.GITHUB_OWNER,
        repo: process.env.GITHUB_REPO,
        path: process.env.GITHUB_FILE_PATH,
        message: 'chore(cron): New data saved from crawler',
        committer: {
            name: 'Monalisa Octocat',
            email: process.env.GITHUB_COMMITTER_EMAIL,
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