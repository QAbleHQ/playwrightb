import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { PLPPage } from '../../pages/PLPPage'
import { CommonHelper } from "../../utils/commonHelper";
import { MiniCartPage } from "../../pages/MiniCartPage";
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

test.describe("Mini cart icon", async () => {
    test("Verify that the mini-cart icon is displayed on all relevant pages (e.g., Home, PLP, PDP, etc.).", { tag: '@regression @regularUserMiniCart @minicart' }, async () => {

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
        await test.step("Step 6: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.allEmail);
        })
        await test.step("Step 7: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step('Step 9: Verify minicart icon is visible', async () => {
            await NavigationHeaderPageActions.visibilityNavigationCartIcon(page);
        })
        await test.step("Step 10: Visibility Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(5000)
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 11: Hover Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 12: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 13: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
        })
        await test.step('Step 14: Verify minicart icon is visible', async () => {
            await NavigationHeaderPageActions.visibilityNavigationCartIcon(page)
        })
        await test.step('Step 16:click on first title of product', async () => {
            await PLPPage.clickOnAcneCreamTitle(page)
        })
        await test.step('Step 17: Verify minicart icon is visible', async () => {
            await page.waitForTimeout(2000)
            await NavigationHeaderPageActions.visibilityNavigationCartIcon(page)
        })
    })

    test("Verify that clicking the mini-cart icon opens the mini-cart overlay or dropdown.", { tag: '@regression @regularUserMiniCart @minicart' }, async () => {
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
        await test.step("Step 6: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.allEmail);
        })
        await test.step("Step 6: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(10000);
        })
        await test.step('Step 8: Verify minicart icon is visible', async () => {
            await NavigationHeaderPageActions.visibilityNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 9: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 10: Verify view cart option is visible ', async () => {
            await NavigationHeaderPageActions.visbilityAfterLoginViewCartButton(page)
        })
    })

    test("Check that the mini-cart overlay closes when clicking outside the mini-cart area.", { tag: '@regression @regularUserMiniCart @minicart' }, async () => {

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
        await test.step("Step 6: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.allEmail);
        })
        await test.step("Step 6: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000);
        })
        await test.step('Step 8: Verify minicart icon is visible', async () => {
            await NavigationHeaderPageActions.visibilityNavigationCartIcon(page)
        })
        await test.step('Step 9: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
        })
        await test.step('Step 10: Verify view cart option is visible', async () => {
            await NavigationHeaderPageActions.visbilityAfterLoginViewCartButton(page)
        })
        await test.step('Step 11: Verify view cart option is visible', async () => {
            await NavigationHeaderPageActions.clickOnPCASkinLogo(page)
            await page.waitForTimeout(4000);
        })
        await test.step('Step 12: Verify view cart option is not visible', async () => {
            await NavigationHeaderPageActions.loginViewCartButtonNotVisible(page)
            await page.waitForTimeout(1000);
        })
    })

    test("Confirm that the mini-cart icon shows the correct number of items in the cart.", { tag: '@regression @regularUserMiniCart @minicarticon  ' }, async () => {

        await test.step("Step 3: Verify Already registered? Text is Visible on the Home Page", async () => {
            await HomePage.visbilityAlreadyRegisteredText(page);
        })
        await test.step("Step 4: Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 5: Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step("Step 6: Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 7: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.allEmail);
        })
        await test.step("Step 8: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 9: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(7000);
            await NavigationHeaderPageActions.hoverOverShop(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 12: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(5000)
        })
        await test.step('Step 13: click on add to cart on Acnecream', async () => {
            await page.waitForTimeout(5000)
            await PLPPage.clickOnAddToCartBtnOfAcneCream(page)
            await page.waitForTimeout(6000)
        })
        await test.step('Step 14: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 16: verify the count of minicart', async () => {
            await MiniCartPage.verifyMiniCartIconAndMiniCartCount(page)
        })
        await test.step('Step 17: Click on Plus icon', async () => {
            await MiniCartPage.clickPlusButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 18: verify the count of minicart', async () => {
            await MiniCartPage.verifyMiniCartIconAndMiniCartCount(page)
        })
        await test.step('Step 19: Click on Decrease on time', async () => {
            await MiniCartPage.clickMinusButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 20: verify the count of minicart', async () => {
            await MiniCartPage.verifyMiniCartIconAndMiniCartCount(page)
        })
        await test.step('Step 21:Remove Product from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
            await page.waitForTimeout(3000)
        })
    })
});
