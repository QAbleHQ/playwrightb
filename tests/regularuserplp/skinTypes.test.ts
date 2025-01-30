import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { PLPPage } from '../../pages/PLPPage'
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

test.describe("skin types", async () => {
    test("Verify that all applicable subcategories are displayed with an accurate product count in parentheses. Combination, Dry, Normal,Oily,Sensitive", { tag: '@regression @skintypes @regularUserPlp ' }, async () => {
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
            await page.waitForTimeout(5000);
        })
        await test.step("Step 11:click on skin types", async () => {
            await PLPPage.clickSkinTypeDownArrow(page);
            await page.waitForTimeout(5000)
        })
        await test.step("Step 12: verify skin type combination is visible ", async () => {
            await PLPPage.visibilitySkinTypeCombination(page);
        })
        await test.step("Step 13:verify skin type dry is visible", async () => {
            await PLPPage.visibilitySkinTypeDry(page);
        })
        await test.step("Step 14:verify skin type normal is visible", async () => {
            await PLPPage.visibilitySkinTypeNormal(page);
        })
        await test.step("Step 15:verify skin type oily is visible", async () => {
            await PLPPage.visibilitySkinTypeOily(page);
            await page.waitForTimeout(4000)
        })
        await test.step("Step 16: verify skin type sensitive is visible", async () => {
            await PLPPage.visibilitySkinTypeSensitive(page);
        })
        await test.step("Step 17: verify skin type combination count is visible ", async () => {
            await PLPPage.visibilitySkinTypeCombinationCount(page);
        })
        await test.step("Step 18:verify skin type dry count is visible", async () => {
            await PLPPage.visibilitySkinTypeDryCount(page);
        })
        await test.step("Step 19:verify skin type normal count is visible", async () => {
            await PLPPage.visibilitySkinTypeNormalCount(page);
        })
        await test.step("Step 20:verify skin type oily count is visible", async () => {
            await PLPPage.visibilitySkinTypeOilyCount(page);
        })
        await test.step("Step 21: verify skin type oily count is visible", async () => {
            await PLPPage.visibilitySkinTypeSensitiveCount(page);
        })
    })
})
