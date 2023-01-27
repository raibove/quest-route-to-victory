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

    it("should redirect if user is not authenticated", async () => {
        await page.goto("http://localhost:3001", {
            waitUntil: "load",
            timeout: 60000,
        });
        page.on("console", (log) => console.log(log.text()));

        const currentUrl = await page.url();
        expect(currentUrl).not.toBe('http://localhost:3001/editor');

   }, 60000);

   it('should show editor page if user is authenticated', async () => {
        await page.goto('http://localhost:3001/login');
        await page.type('input[name=email]', 'engine@wilco.work');
        await page.type('input[name=password]', 'wilco1234');
        await page.click('button[type=submit]');

        await page.goto('http://localhost:3001/editor');
        const currentUrl = await page.url();
        expect(currentUrl).toBe('http://localhost:3001/editor');
    }, 60000);
});