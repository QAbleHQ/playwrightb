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

test.describe("MiniCart", async () => {
    test("Verify the prompt message is displayed appropriately when the mini-cart is empty.", { tag: '@regression @regularUserMiniCart @minicart' }, async () => {

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
        })
        await test.step('Step 9: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
        })
        await test.step('Step 10: Verify view cart option is visible ', async () => {
            await NavigationHeaderPageActions.visbilityAfterLoginViewCartButton(page)
        })
        await test.step('Step 11:verify prompt message is displayed', async () => {
            await NavigationHeaderPageActions.verifyAfterLoginEmptyCartViewText(page)
        })
    })

    test("Verify that a 'Start Shopping' button is displayed below the prompt message and clicking it redirects the user to the '/products' page.", { tag: '@regression @regularUserMiniCart @minicart' }, async () => {

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
        })
        await test.step('Step 9: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 10: Verify view cart option is visible ', async () => {
            await NavigationHeaderPageActions.visbilityAfterLoginViewCartButton(page)
        })
        await test.step('Step 11:verify prompt message is displayed', async () => {
            await NavigationHeaderPageActions.verifyAfterLoginEmptyCartViewText(page)
        })
        await test.step('Step 12:verify shop now is displayed', async () => {
            await NavigationHeaderPageActions.visibilityCartIconStartShoppingButton(page)
        })
        await test.step('Step 13:Click on shop now', async () => {
            await NavigationHeaderPageActions.clickOnCartStartShoppingButton(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 14:verify products page is displayed', async () => {
            await PLPPage.verifyTheHeaderOfCurrentPageIsVisible(page)
        })
    })

    test("Verify that the subtotal is $0.00 when the cart is empty.", { tag: '@regression @regularUserMiniCart @minicart' }, async () => {

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
        })
        await test.step('Step 9: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
        })
        await test.step('Step 10: Verify view cart option is visible ', async () => {
            await NavigationHeaderPageActions.visbilityAfterLoginViewCartButton(page)
        })
        await test.step('Step 11:verify prompt message is displayed', async () => {
            await NavigationHeaderPageActions.verifyAfterLoginEmptyCartViewText(page)
        })
        await test.step('Step 12:verify subtotal is $0.00', async () => {
            await NavigationHeaderPageActions.visibilityEmptyCartSubTotal(page)
        })
    })

    test("Verify that the CMS-configured promotional message, currently 'Free drop-shipping for any order $100 or above', is displayed at the top of the cart.", { tag: '@regression @regularUserMiniCart @minicart' }, async () => {

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
        })
        await test.step('Step 9: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
        })
        await test.step('Step 10: Verify view cart option is visible ', async () => {
            await NavigationHeaderPageActions.visbilityAfterLoginViewCartButton(page)
        })
        await test.step('Step 11: Verify view cart option is visible ', async () => {
            await NavigationHeaderPageActions.verifyAfterLoginCartPramotionMessage(page)
        })
    })
})
