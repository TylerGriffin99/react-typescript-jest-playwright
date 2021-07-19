import * as config from "../jest.config.js";

it("Home page should have the correct title", async () => {
    await page.goto(config.globals.devBaseURL);
    expect(await page.title()).toBe("React App");
});