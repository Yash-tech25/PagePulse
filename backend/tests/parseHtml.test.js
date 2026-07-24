const parseHtml = require("../utils/parseHtml");

describe("parseHtml()", () => {

    test("should correctly parse a valid HTML page", () => {

        const html = `
            <html>
                <head>
                    <title>Example Page</title>
                    <meta name="description" content="Sample description">
                </head>

                <body>

                    <h1>Heading 1</h1>

                    <h1>Heading 2</h1>

                    <img src="a.jpg" alt="Image A">

                    <img src="b.jpg">

                    <p>Hello world from Page Pulse</p>

                </body>
            </html>
        `;

        const result = parseHtml(html);

        expect(result.title).toBe("Example Page");
        expect(result.metaDescription).toBe("Sample description");
        expect(result.h1Count).toBe(2);
        expect(result.imagesMissingAlt).toBe(1);
        expect(result.wordCount).toBeGreaterThan(0);

    });

    test("should return 'Not Found' when meta description is missing", () => {

    const html = `
        <html>
            <head>
                <title>No Meta</title>
            </head>

            <body>
                <h1>Hello</h1>
            </body>
        </html>
    `;

    const result = parseHtml(html);

    expect(result.metaDescription).toBe("Not Found");

});

test("should count images missing alt text", () => {

    const html = `
        <html>
            <body>

                <img src="1.jpg">

                <img src="2.jpg">

                <img src="3.jpg" alt="Example">

            </body>
        </html>
    `;

    const result = parseHtml(html);

    expect(result.imagesMissingAlt).toBe(2);

});

});