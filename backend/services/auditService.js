const axios = require("axios");
const validateUrl = require("../utils/validateUrl");
const parseHtml = require("../utils/parseHtml");


async function auditWebsite(url) {

    if (!validateUrl(url)) {
        const error = new Error("Invalid URL");
error.status = 400;
throw error;
    }

    const startTime = Date.now();

let response;

try {
    response = await axios.get(url, {
        timeout: 5000,
        maxRedirects: 5,
        validateStatus: () => true
    });
}  catch (error) {

    if (error.code === "ECONNABORTED") {
        const timeoutError = new Error("Request timed out (5 seconds)");
        timeoutError.status = 408;
        throw timeoutError;
    }

    const networkError = new Error("Unable to reach the website.");
    networkError.status = 502;
    throw networkError;
}

const responseTime = Date.now() - startTime;

if (response.status >= 400) {
    const error = new Error(`Website returned HTTP ${response.status}`);
    error.status = response.status;
    throw error;
}

    const html = response.data;

    const contentType = response.headers["content-type"] || "";

if (!contentType.includes("text/html")) {
    const error = new Error("The provided URL does not return an HTML page.");
error.status = 415;
throw error;
}

    const parsedData = parseHtml(html);

return {
    status: response.status,
    responseTime,
    ...parsedData
};

}

module.exports = {
    auditWebsite
};