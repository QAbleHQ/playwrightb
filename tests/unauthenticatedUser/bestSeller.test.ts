import { test, chromium, Page, BrowserContext } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { CommonHelper } from '../../utils/commonHelper';
import { loadAndReplaceTestData } from '../../utils/updateProductTestDataWithEnv';
const testdata = loadAndReplaceTestData('pcaSkinCare.testdata.json');

let browser: any;
let context: BrowserContext;
let page: Page;

test.beforeEach(async () => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
  await CommonHelper.navigateToHomePage(page);
  await CommonHelper.acceptCookies(page);
});
test.afterEach(async () => {
  await context.close();
  await browser.close();
});

test.describe("Verify the Unauthenticated Users(Logged out) CDP Page Course Information .", async () => {
  test('Verify best seller carosel', { tag: '@regression @unauthenticatedUser @homepage' }, async () => {

    await test.step('Step 1: Verify the best-seller carousel', async () => {
      await HomePage.verifybestSellerCarousel(page);
    })
    await test.step('Step 2: Verify the Login to View Prices', async () => {
      await HomePage.clickLogInToViewPrices(page);
    })
    await test.step('Step 3: Verify if the login Form Visible', async () => {
      await HomePage.isLoginFormVisible(page);
    })
  })
})
