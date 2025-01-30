import { test, chromium, Page, BrowserContext } from "@playwright/test"
import { MiniCartPage } from "../../pages/MiniCartPage"
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

test.describe("Verify the Unauthenticated Users(Logged out) MiniCart Description text, Login and Create Account button'.", async () => {
    test("Verify 'If you have a professional account, please login. If you would like to establish a professional account, please click Create Account' message.", { tag: '@regression @smoke @cdp @unauthenticatedUser  @miniCart ' }, async () => {

        await test.step("Step 1: Verify Cart Button is visible on Home page.", async () => {
            await MiniCartPage.miniCartHeaderButtonIsVisible(page);
        })
        await test.step("Step 2: Hover on Cart Button on Home page.", async () => {
            await MiniCartPage.miniCartHeaderButtonIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify the Description text 'If you have a professional account, please login. If you would like to establish a professional account, please click Create Account' is visible on Cart.", async () => {
            await MiniCartPage.miniCartDescriptionTextIsVisible(page);
        })

    })

    test("Verify that the Log In button is displayed on the popup, clicking on it the 'Customer Login' dialog.", { tag: '@regression @smoke @cdp @unauthenticatedUser  @miniCart ' }, async () => {

        await test.step("Step 1: Verify Cart Button is visible on Home page.", async () => {
            await MiniCartPage.miniCartHeaderButtonIsVisible(page);
        })
        await test.step("Step 2: Hover on Cart Button on Home page.", async () => {
            await MiniCartPage.miniCartHeaderButtonIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify the Login Button is visble.", async () => {
            await MiniCartPage.miniCartLoginButtonIsVisible(page);
        })
        await test.step("Step 4: Hover on the Login Button in the mini cart.", async () => {
            await MiniCartPage.miniCartLoginButtonIsHover(page);
        })
        await test.step("Step 5: Click on the Login Button in the mini cart.", async () => {
            await MiniCartPage.miniCartLoginButtonIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Customer Login dialog .", async () => {
            await MiniCartPage.miniCartLoginDialogIsVisible(page);
            await page.waitForTimeout(3000);
        })

    })

    test("Verify that the Create Account button is displayed on the popup, clicking on it directs the user to the Registration page..", { tag: '@regression @smoke @cdp @unauthenticatedUser  @miniCart ' }, async () => {

        await test.step("Step 1: Verify Cart Button is visible on Home page.", async () => {
            await MiniCartPage.miniCartHeaderButtonIsVisible(page);
        })
        await test.step("Step 2: Hover on Cart Button on Home page.", async () => {
            await MiniCartPage.miniCartHeaderButtonIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify the Create Account Button is visble.", async () => {
            await MiniCartPage.miniCartCreateAccountButtonIsVisible(page);
        })
        await test.step("Step 4: Hover on the Create Account Button in the mini cart.", async () => {
            await MiniCartPage.miniCartCreateAccountButtonIsHover(page);
        })
        await test.step("Step 5: Click on the Create Account Button in the mini cart.", async () => {
            await MiniCartPage.miniCartCreateAccountButtonIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Customer Login dialog .", async () => {
            await MiniCartPage.miniCartRegisterYourProfilePageIsVisible(page);
            await page.waitForTimeout(3000);
        })

    })
})
