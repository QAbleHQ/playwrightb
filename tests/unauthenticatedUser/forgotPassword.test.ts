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

test.describe("Verify the Forgot password Tests .", async () => {

  test('Verify forgot your password in login on homepage', { tag: '@regression @unauthenticatedUser @forgotPassword' }, async () => {

    await test.step('Step 1: Verify Return to Log In button successfully redirects the user back to the login form', async () => {
      await HomePage.clickforgotPassword(page);
    })
    await test.step('Step 2: Verify the Login to View Prices', async () => {
      await HomePage.clickLogInToViewPrices(page);
    })
    await test.step('Step 3: Verify if the login Form Visible', async () => {
      await HomePage.isLoginFormVisible(page);
    })
  })

  test('Verify that Email Id error on Reset Password', { tag: '@regression @unauthenticatedUser @forgotPassword' }, async () => {

    await test.step('Step 1: Verify if the login Form Visible', async () => {
      await HomePage.clickforgotPassword(page);
    })
    await test.step('Step 2: Verify the reset button is clicked', async () => {
      await HomePage.clickResetButton(page);
    })
    await test.step('Step 3: Verify error meassage when email field is empty', async () => {
      await HomePage.isEmailEmptyErrorMessageVisible(page);
    });
  });

  test('Verify registered email redirects to home page', { tag: '@regression @unauthenticatedUser @forgotPassword' }, async () => {

    await test.step('Step 1: Verify Return to Log In button successfully redirects the user back to the login form', async () => {

      await test.step('Step 1: Verify Return to Log In button successfully redirects the user back to the login form', async () => {
        await HomePage.clickforgotPassword(page);
      })
      await test.step('Step 2: Verify adding Email for Forgot password', async () => {
        await HomePage.clearEmailForForgotPasswordVisible(page, testdata.EmailAddress.allEmail);
      })
      await test.step('Step 3: Verify the reset button is clicked', async () => {
        await HomePage.clickResetButton(page);
      })
    });
  });
})