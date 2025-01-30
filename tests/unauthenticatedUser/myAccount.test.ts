import { test, chromium, Page, BrowserContext } from "@playwright/test"
import { MyAccountPage } from "../../pages/MyAccountPage"
import { CommonHelper } from "../../utils/commonHelper"
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


test.describe("Verify the Unauthenticated Users(Logged out) MyAccount Description text, Login, Create Account Button'.", async () => {
    test("If you have a professional account, please login. If you would like to establish a professional account, please click Create Account.", { tag: '@regression @smoke @cdp @unauthenticatedUser  @myAccount ' }, async () => {

        await test.step("Step 1: Verify My Account Button(User Icon) is visible on Home page.", async () => {
            await MyAccountPage.myAccountUserIconIsVisible(page);
        })
        await test.step("Step 2: Hover on My Account Button(User Icon) on Home page.", async () => {
            await MyAccountPage.myAccountUserIconIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify the Description text 'If you have a professional account, please login. If you would like to establish a professional account, please click Create Account' is visible on my account popup.", async () => {
            await MyAccountPage.myAccountDescriptionTextIsVisible(page);
        })

    })


    test("Verify that the Log In button is displayed on the popup, clicking on it the 'Customer Login' dialog.", { tag: '@regression @smoke @cdp @unauthenticatedUser  @myAccount ' }, async () => {


        await test.step("Step 1: Verify My Account Button(User Icon) is visible on Home page.", async () => {
            await MyAccountPage.myAccountUserIconIsVisible(page);
        })
        await test.step("Step 2: Hover on My Account Button(User Icon) on Home page.", async () => {
            await MyAccountPage.myAccountUserIconIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify the Login Button is visble.", async () => {
            await MyAccountPage.myAccountLoginButtonIsVisible(page);
        })
        await test.step("Step 4: Hover on the Login Button under the My Account(User Icon).", async () => {
            await MyAccountPage.myAccountLoginButtonIsHover(page);
        })
        await test.step("Step 5: Click on the Login Button under the My Account(User Icon).", async () => {
            await MyAccountPage.myAccountLoginButtonIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Customer Login dialog .", async () => {
            await MyAccountPage.myAccountLoginDialogIsVisible(page);
            await page.waitForTimeout(3000);
        })

    })

    test("Verify that the Create Account button is displayed on the popup, clicking on it directs the user to the Registration page..", { tag: '@regression @smoke @cdp @unauthenticatedUser  @myAccount ' }, async () => {


        await test.step("Step 1: Verify My Account Button(User Icon) is visible on Home page.", async () => {
            await MyAccountPage.myAccountUserIconIsVisible(page);
        })
        await test.step("Step 2: Hover on My Account Button(User Icon) on Home page.", async () => {
            await MyAccountPage.myAccountUserIconIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify the Create Account Button is visble.", async () => {
            await MyAccountPage.myAccountCreateAccountButtonIsVisible(page);
        })
        await test.step("Step 4: Hover on the Create Account Button under the My Account(User Icon).", async () => {
            await MyAccountPage.myAccountCreateAccountButtonIsHover(page);
        })
        await test.step("Step 5: Click on the Create Account Button under the My Account(User Icon).", async () => {
            await MyAccountPage.myAccountCreateAccountButtonIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Customer Login dialog .", async () => {
            await MyAccountPage.myAccountRegisterYourProfilePageIsVisible(page);
            await page.waitForTimeout(3000);
        })

    })
})