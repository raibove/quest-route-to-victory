/* eslint-disable */
const puppeteer = require("puppeteer");

describe("Check for unauthenticated access", () => {
    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await page.close();
        await browser.close();
    });

    it("should redirect if user is not authenticated in editor page", async () => {
        await page.goto("http://localhost:3001/editor", {
            waitUntil: "load",
            timeout: 60000,
        });
        page.on("console", (log) => console.log(log.text()));

        const currentUrl = await page.url();
        expect(currentUrl).not.toBe('http://localhost:3001/editor');

   }, 60000);

   it('should redirect if user is not authenticated in settings page', async () => {
        await page.goto("http://localhost:3001/settings", {
            waitUntil: "load",
            timeout: 60000,
        });
        page.on("console", (log) => console.log(log.text()));

        const currentUrl = await page.url();
        expect(currentUrl).not.toBe('http://localhost:3001/settings');

    }, 60000);
});