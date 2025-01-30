import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { PLPPage } from '../../pages/PLPPage'
import { CommonHelper } from "../../utils/commonHelper";
import { PDPPage } from "../../pages/PDPPage";
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

test.describe("Product Tile", async () => {

    test("Verify that clicking the image, reviews or name section can successfully redirects the user to the corresponding product detail page.", { tag: '@regression @productTile @regularUserPlp ' }, async () => {
        ;
        await test.step("Step 1: Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
        })
        await test.step("Step 2: Verify Already registered? Text is Visible on the Home Page", async () => {
            await HomePage.visbilityAlreadyRegisteredText(page);
        })
        await test.step("Step 3: Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4: Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step("Step 5: Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 5: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.regularEmail);
        })
        await test.step("Step 6: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 8: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(7000);
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(7000);
        })
        await test.step("Step 11:click on product image", async () => {
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 12: verify PDP page is visible", async () => {
            await PDPPage.visibilityProductHeading(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 13: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(2000);
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 14: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 15:click on the product rating", async () => {
            await PLPPage.clickOnFirstProductRating(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 16:verify PDP page is visible", async () => {
            await PDPPage.visibilityProductHeading(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 17: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(2000);
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 18: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 19:click on product name", async () => {
            await PLPPage.clickOnFirstProductTitle(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 20:verify PDP page is visible", async () => {
            await PDPPage.visibilityProductHeading(page);
            await page.waitForTimeout(3000)
        })
    })
})
