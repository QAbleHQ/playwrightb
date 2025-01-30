import { expect, test, chromium, Page, BrowserContext } from '@playwright/test';
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

test.describe("Verify that the 'Quick View' button does not appear when hovering over product image.", async () => {
  test('Verify that the promotion Banner contains the following elements', { tag: '@regression @promotionBanner @unauthenticatedUser' }, async () => {

    await test.step('Step 1: Verify that the promotion Banner contains the following elements', async () => {
      await HomePage.isbettervalueVisible(page);
      await expect(await HomePage.isbettervalueText(page)).toBe('BETTER VALUE & MORE CONVENIENCE');
      await HomePage.isbettervalueVisible(page);
      await expect(await HomePage.istrustexpertText(page)).toBe('Trust the experts');
      await HomePage.isPCASKINtakesVisible(page);
      await HomePage.isbenifitlistVisible(page);
      await HomePage.LearnMoreButtonVisible(page);
    });

    await test.step('Step 2: Verify that clicking the Show Now button (currently configured as "Learn More") redirects the user to the correct target page (Currently it links to /products).', async () => {
      await HomePage.clickLearnMoreButton(page);
      await expect(page.url()).toContain('/products');
    });
  });
})