import{Browser, BrowserContext, chromium, ElementHandle, Page } from 'playwright'

(async function () {
    const browser: Browser = await chromium.launch({ headless: false });
    const context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();
    await page.goto('https://www.tsrtconline.in/oprs-web/');
    await page.fill("id=fromPlaceName","BANGALORE");
    await page.click("//a[text()='BANGALORE']");
    
    await page.fill("id=toPlaceName", "HYDERABAD");
    await page.click("//a[text()='HYDERABAD']");

    await page.click("id=txtJourneyDate");
    await page.click("(//a[text()='17'])[1]");
    await page.click("id=searchBtn");
    await page.click("id=BtFid");
    await page.check("input[name='A/C CLASS']");
    let lstServices: ElementHandle[] = await page.locator("//div[@class='srvceNO' and not(ancestor::*[contains(@style,'display: none;')])]").elementHandles();

    console.log(lstServices.length);
    
    for (let elm of lstServices) {

        console.log(await elm.innerText());

    }
})();
