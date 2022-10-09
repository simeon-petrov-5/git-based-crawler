const { schedule } = require('@netlify/functions');
const axios = require('axios');
require('dotenv').config()

const handler = async function () {
    await axios.post(process.env.NETLIFY_BUILD_HOOK)
    return {
        statusCode: 200,
    };
};
// To Do - change with 0 11 * * *
exports.handler = schedule("*/20 * * * *", handler);