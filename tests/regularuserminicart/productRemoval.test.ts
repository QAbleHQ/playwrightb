import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { PLPPage } from '../../pages/PLPPage'
import { MiniCartPage } from "../../pages/MiniCartPage";
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

test.describe("Product removal", async () => {

    test("Verify that the quantity increase/decrease buttons and View Cart button are disabled while a product removal process is in progress.", { tag: '@regression @productRemoval  @RegularUserMiniCart' }, async () => {

        await test.step("Step 1: Verify Already registered? Text is Visible on the Home Page", async () => {
            await HomePage.visbilityAlreadyRegisteredText(page);
        })
        await test.step("Step 2: Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 3: Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step("Step 4: Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 5: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.allEmail);
        })
        await test.step("Step 6: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 8: Hover Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
            await page.waitForTimeout(4000)
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(3000)
        })
        await test.step('Step 11: click on add to cart on Acnecream', async () => {
            await page.waitForTimeout(4000)
            await PLPPage.clickOnAddToCartBtnOfAcneCream(page)
        })
        await test.step('Step 12: hover on minicart icon', async () => {
            await page.waitForTimeout(5000)
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
        })
        await test.step('Step 13: Verify increase button is visible', async () => {
            await page.waitForTimeout(3000)
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 14: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 15: Click on Plus icon', async () => {
            await MiniCartPage.clickPlusButtonOfAcneCream(page)
        })
        await test.step('Step 16: verify plus button is disabled', async () => {
            await MiniCartPage.minusButtonAcneCreamDisabled(page)
        })
        await test.step('Step 17: verify minus button is disabled', async () => {
            await MiniCartPage.plusButtonAcneCreamDisabled(page)
        })
        await test.step('Step 18: verify add to cart button is disabled', async () => {
            await MiniCartPage.viewCartButtonDisabled(page)
        })
        await test.step('Step 19: Click on Decrease on time', async () => {
            await page.waitForTimeout(5000)
            await MiniCartPage.clickMinusButtonOfAcneCream(page)
        })
        await test.step('Step 20: verify plus button is disabled', async () => {
            await MiniCartPage.minusButtonAcneCreamDisabled(page)
        })
        await test.step('Step 21: verify minus button is disabled', async () => {
            await MiniCartPage.plusButtonAcneCreamDisabled(page)
        })
        await test.step('Step 22: verify add to cart button is disabled', async () => {
            await MiniCartPage.viewCartButtonDisabled(page)
        })
        await test.step('Step 23:Remove Product from Minicart', async () => {
            await page.waitForTimeout(4000)
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
            await page.waitForTimeout(3000)
        })
    })

    test("Verify that removing all items results in an empty mini-cart state.", { tag: '@regression @productRemoval  @RegularUserMiniCart' }, async () => {

        await test.step("Step 1: Verify Already registered? Text is Visible on the Home Page", async () => {
            await HomePage.visbilityAlreadyRegisteredText(page);
        })
        await test.step("Step 2: Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 3: Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step("Step 4: Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 5: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.allEmail);
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
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
        })
        await test.step('Step 11: click on add to cart on Acnecream', async () => {
            await page.waitForTimeout(7000)
            await PLPPage.clickOnAddToCartBtnOfAcneCream(page)
        })
        await test.step('Step 12: hover on minicart icon', async () => {
            await page.waitForTimeout(6000)
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
        })
        await test.step('Step 13: Verify increase button is visible', async () => {
            await page.waitForTimeout(3000)
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 14: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 15:Remove Product from Minicart', async () => {
            await page.waitForTimeout(4000)
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
        })
        await test.step('Step 16:verify prompt message is displayed', async () => {
            await NavigationHeaderPageActions.verifyAfterLoginEmptyCartViewText(page)
            await page.waitForTimeout(2000)
        })
    })

    test("Verify seamless mini-cart updates upon item removal, including instant removal of the item and accurate recalculation of the subtotal.", { tag: '@regression @productRemoval  @RegularUserMiniCart' }, async () => {

        await test.step("Step 1: Verify Already registered? Text is Visible on the Home Page", async () => {
            await HomePage.visbilityAlreadyRegisteredText(page);
        })
        await test.step("Step 2: Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 3: Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step("Step 4: Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 5: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.allEmail);
        })
        await test.step("Step 6: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(9000)
        })
        await test.step("Step 8: Hover Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(2000)
        })
        await test.step('Step 11: click on add to cart on Acnecream', async () => {
            await page.waitForTimeout(7000)
            await PLPPage.clickOnAddToCartBtnOfAcneCream(page)
        })
        await test.step('Step 12: hover on minicart icon', async () => {
            await page.waitForTimeout(5000)
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
        })
        await test.step('Step 13: Verify increase button is visible', async () => {
            await page.waitForTimeout(3000)
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 14: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 15: Verify subtotal for acnecream is $25', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 16:Remove Product from Minicart', async () => {
            await page.waitForTimeout(4000)
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
        })
        await test.step('Step 17:verify cart subtotal is changed', async () => {
            await MiniCartPage.visibilityZeroSubTotalOfMiniCart(page)
            await page.waitForTimeout(2000)
        })
    })
})
