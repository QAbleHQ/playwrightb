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

test.describe("Adjusting the Product Quantity", async () => {
    test("Verify accurate and real-time updates of quantity, item subtotal, and cart subtotal within the mini-cart in response to quantity adjustments.", { tag: '@regression @minicart @regularUserMiniCart @adjustProductQuantity' }, async () => {
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
        })
        await test.step("Step 9: Hover Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 10: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 11: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
        })
        await test.step('Step 12: click on add to cart on Acnecream', async () => {
            await PLPPage.clickOnAddToCartBtnOfAcneCream(page)
        })
        await test.step('Step 13: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(8000)
        })
        await test.step('Step 14: verify product name is visible', async () => {
            await MiniCartPage.productNameVisible(page)
        })
        await test.step('Step 15: Product price of acnecream', async () => {
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 16: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 17: Verify increase button is visible', async () => {
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 18: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 19: Click on Plus icon', async () => {
            await MiniCartPage.clickPlusButtonOfAcneCream(page)
        })
        await test.step('Step 20: Product price of acnecream is updated', async () => {
            await MiniCartPage.verifyMiniCartPriceAfterOneIncreaseAcneCream(page)
        })
        await test.step('Step 21: Subtotal Price cart is updated', async () => {
            await MiniCartPage.verifyMiniCartAfterOneIncreaseSubtotalAcneCream(page)
        })
        await test.step('Step 22: Click on Decrease on time', async () => {
            await MiniCartPage.clickMinusButtonOfAcneCream(page)
        })
        await test.step('Step 23: Product price of acnecream', async () => {
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 24: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 25:Remove Product from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
        })
    })
    test("Verify user ability to adjust product quantity by clicking on plus/minus buttons.", { tag: '@regression @minicart @regularUserMiniCart' }, async () => {

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
        })
        await test.step("Step 8: Hover Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(2000);
        })
        await test.step('Step 11: click on add to cart on Acnecream', async () => {
            await PLPPage.clickOnAddToCartBtnOfAcneCream(page)
        })
        await test.step('Step 12: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(8000)
        })
        await test.step('Step 13: Verify increase button is visible', async () => {
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 14: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 15: Verify no quanity is 1', async () => {
            await MiniCartPage.verifyNoofQuantity(page, testdata.Quantity.one)
        })
        await test.step('Step 16: Click on Plus icon', async () => {
            await MiniCartPage.clickPlusButtonOfAcneCream(page)
        })
        await test.step('Step 17: Verify no quanity is 2', async () => {
            await MiniCartPage.verifyNoofQuantity(page, testdata.Quantity.two)
        })
        await test.step('Step 18: Click on Decrease on time', async () => {
            await MiniCartPage.clickMinusButtonOfAcneCream(page)
        })
        await test.step('Step 19: Verify no quanity is 1', async () => {
            await MiniCartPage.verifyNoofQuantity(page, testdata.Quantity.one)
        })
        await test.step('Step 20:Remove Product from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
        })
    })
    test("Verify the behavior when the quantity reaches the minimum.", { tag: '@regression @adjustProductQuantity  @regularUserMiniCart' }, async () => {

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
        })
        await test.step("Step 8: Hover Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
        })
        await test.step('Step 11: click on add to cart on Acnecream', async () => {
            await PLPPage.clickOnAddToCartBtnOfAcneCream(page)
        })
        await test.step('Step 12: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
        })
        await test.step('Step 13: Verify increase button is visible', async () => {
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 14: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 15: Verify no quanity is 1', async () => {
            await MiniCartPage.verifyNoofQuantity(page, testdata.Quantity.one)
        })
        await test.step('Step 16: Verify minus button is Disabled', async () => {
            await MiniCartPage.minusButtonAcneCreamDisabled(page)
        })
        await test.step('Step 17: Click on Decrease on time', async () => {
            await MiniCartPage.clickMinusButtonOfAcneCream(page)
        })
        await test.step('Step 18: Verify no quanity is 1', async () => {
            await MiniCartPage.verifyNoofQuantity(page, testdata.Quantity.one)
        })
        await test.step('Step 19:Remove Product from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
        })
    })
    test("Verify that the quantity increase/decrease buttons and View Cart  button are disabled while the product quantity is being adjusted.", { tag: '@regression @adjustProductQuantity @regularUserMiniCart' }, async () => {

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
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await page.waitForTimeout(1000);
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
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
        await test.step('Step 15: Click on Plus icon', async () => {
            await MiniCartPage.clickPlusButtonOfAcneCream(page)
            await page.waitForTimeout(200)
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
            await page.waitForTimeout(4000)
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
        })
    })
})
