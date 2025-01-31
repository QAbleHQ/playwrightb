import { test, chromium, Page, BrowserContext } from '@playwright/test';
import { PCASkinLoginPageActions } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { DropShipAddressPage } from '../../pages/DropshipAddressPage';
import { CommonHelper } from '../../utils/commonHelper';
import { RegisterYourProfilePage } from '../../pages/RegisterYourProfilePage';
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

test.describe("Verify successful login for a newly registered user using their provided credentials456.", async () => {
  test.only('Verify AVe', { tag: '@regression @newUser @adress' }, async ({ }) => {

    await test.step('Step 1: Login to the accout', async () => {
      await HomePage.clickUserIcon(page);
      await HomePage.clickLoginButtonUserAccount(page);
      await PCASkinLoginPageActions.login(page, testdata.EmailAddress.allEmail, testdata.Password.regularPassword);
      await page.waitForTimeout(8000);

    });

    await test.step('Step 2: Navigate to Dropship addresses', async () => {
      await HomePage.clickUserIcon(page);
      await DropShipAddressPage.clickDropshipAddressButton(page);

    });

    await test.step('Step 3: Click Add Dropship address button', async () => {
      await page.waitForTimeout(2000);
      await DropShipAddressPage.clickAddDropshipAddressButton(page);
    });

    await test.step('Step 4: Verify sections are visisble', async () => {
      DropShipAddressPage.isNameVisible(page);
      DropShipAddressPage.isAddressVisible(page);
      DropShipAddressPage.isCityVisible(page);
      DropShipAddressPage.isStateVisible(page);
      DropShipAddressPage.isZipCodeVisible(page);
      DropShipAddressPage.isPhoneNoVisible(page);
      DropShipAddressPage.isAddNewAddressVisible(page);
    });
  })

  test('Error Handling: Verify error messages for invalid inputs in address section', { tag: '@regression @newUser @adress' }, async () => {

    await test.step('Step 1: Navigate to the create account page', async () => {
      await HomePage.clickUserIcon(page);
      await HomePage.clickCreateAccountButton(page);
    });

    await test.step('Step 2: Accept cookies', async () => {
      await CommonHelper.acceptCookies(page);
    });

    await test.step('Step 3: Attempt to submit the address form with empty fields', async () => {
      await RegisterYourProfilePage.createAccountButtonClick(page);
    });

    await test.step('Step 4: Verify error messages for mandatory fields', async () => {
      RegisterYourProfilePage.emailAddressErrorMessageText(page);
      RegisterYourProfilePage.firstNameErrorMessageGetText(page);
      RegisterYourProfilePage.lastNameErrorMessageGetText(page);
      RegisterYourProfilePage.passwordErrorMessageGetText(page);
    });

  });

});
