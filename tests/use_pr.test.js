/* eslint-disable */
const puppeteer = require("puppeteer");

describe("Check for editor", () => {
    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await page.close();
        await browser.close();
    });

    it("not authenticated", async () => {
        await page.goto("http://localhost:3001", {
            waitUntil: "load",
            timeout: 60000,
        });
        page.on("console", (log) => console.log(log.text()));

        const currentUrl = await page.url();
        expect(currentUrl).not.toBe('http://localhost:3001/editor');

   }, 60000);
});