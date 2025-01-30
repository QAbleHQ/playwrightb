import { test, chromium, Page, BrowserContext, expect } from '@playwright/test';
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

test.describe("Verify the Homepage tests for Unauthenticated user.", async () => {

  test('Verify the presence and functionalities of the following components on the homepage', { tag: '@regression @unauthenticatedUser @homepage' }, async () => {

    await test.step('Step 1: Verify the presence of functional elements on the homepage', async () => {
      await HomePage.isWelcomeTextVisible(page);
      await HomePage.isCrouselVisible(page);
      await HomePage.verifyContentBanner(page);
      await HomePage.isCourseBannerViisble(page);
      await HomePage.isPromotionBannerViisble(page);
      await HomePage.verifybestSellerCarousel(page);
    });

  });

  test('Verify that the Registration column contains elements', { tag: '@regression @unauthenticatedUser @homepage' }, async () => {

    await test.step('Step 1: Verify that the Registration column contains elements', async () => {
      await HomePage.isWelcomeTextVisible(page);
      await HomePage.isAlreadyOnlineAccountVisible(page);
      await HomePage.isRegisterNowVisible(page);
    });

    await test.step('Step 2: Confirm that clicking the "Register Now" button redirects the user to the "/auth/registration" page.', async () => {
      await HomePage.clickRegisterNow(page);
      await expect(page.url()).toContain('/auth/registration');
    });


  });

  test('Verify that the Login column contains the following elements', { tag: '@regression @unauthenticatedUser @homepage' }, async () => {


    await test.step('Step 1: Verify that the Login column contains elements', async () => {
      await HomePage.isAlreadyRegisteredTextVisible(page);
      await HomePage.isEmailInputVisible(page);
      await HomePage.isPasswordInputVisible(page);
      await HomePage.isForgotPasswordVisible(page);
      await HomePage.isLoginButtonVisible(page);
    });
  });

  test('Verify that login error handling', { tag: '@regression @unauthenticatedUser @homepage' }, async () => {

    await test.step('Step 1: Click the login button without entering any credentials', async () => {
      await HomePage.clickOnLoginButton(page);
    });

    await test.step('Step 1: Verify that the Login column contains elements', async () => {
      await HomePage.isEmailEmptyErrorMessageVisible(page);
      await HomePage.isPasswordEmptyErrorMessageVisible(page);
      await HomePage.refreshPage(page);
      await HomePage.clearandEnterEmailInputField(page, 'testte');
      await HomePage.clearPasswordInputField(page)
      await HomePage.enterDataInPasswordInputField(page, 'test');
      await HomePage.clickOnLoginButton(page);
      await HomePage.isInvalidEmailPasswordErrorMessageVisible(page);
    });
  });
})
