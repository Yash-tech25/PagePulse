const cheerio = require("cheerio");

function parseHtml(html) {
    const $ = cheerio.load(html);

    const title = $("title").text().trim();

    const metaDescription =
        $('meta[name="description"]').attr("content") || "Not Found";

    const h1Count = $("h1").length;

    let imagesMissingAlt = 0;

    $("img").each((index, element) => {
        if (!$(element).attr("alt")) {
            imagesMissingAlt++;
        }
    });

    const text = $("body").text().replace(/\s+/g, " ").trim();

    const wordCount = text
        ? text.split(" ").length
        : 0;

    return {
        title,
        metaDescription,
        h1Count,
        imagesMissingAlt,
        wordCount
    };
}

module.exports = parseHtml;