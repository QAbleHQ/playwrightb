import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { MiniCartPage } from "../../pages/MiniCartPage";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { CommonHelper } from "../../utils/commonHelper";
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

test.describe("Verify that an error toast message should appear if student user has exceeded the quantity limit", async () => {
    //Order Again section not visible
    test("Verify that an error toast message should appear if student user has exceeded the quantity limit", { tag: '@regression @student @miniCart' }, async () => {
        await test.step("Step 3: Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
        })
        await test.step("Step 4: Verify Already registered? Text is Visible on the Home Page", async () => {
            await HomePage.visbilityAlreadyRegisteredText(page);
        })
        await test.step("Step 5: Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 6: Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step("Step 7: Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 8: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 9: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 10: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Scroll To Order Again Section", async () => {
            await HomePage.scrollToOrderAgainSection(page);
        })
        await test.step("Step 12: Visibility Order Again Add To Cart", async () => {
            await HomePage.visibilityorderAgainAddToCart(page);
        })
        await page.waitForTimeout(3000);
        await test.step("Step 13: Click on Add to Cart Button", async () => {
            await HomePage.clickOnAddToCartButton(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 14: Hover Over the Mini Cart on the Header Navigation", async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page);
        })
        await test.step("Step 15: Visibility Item Section in the Mini Cart", async () => {
            await NavigationHeaderPageActions.visibilityMiniCartItemSection(page);
        })
        await test.step("Step 16: Click on the Item Increase Button Times", async () => {
            await NavigationHeaderPageActions.clickMiniCartIncreaseButtonTimes(page, 3);
        })
        await test.step("Step 17: Verify the Visibility of the Maximun Limit Reached", async () => {
            await MiniCartPage.visibilitymaximumQtyReachedToast(page);
        })
    })
})