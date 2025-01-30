import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { PLPPage } from '../../pages/PLPPage'
import { MiniCartPage } from "../../pages/MiniCartPage";
import { CommonHelper } from "../../utils/commonHelper";
import { CDPPage } from "../../pages/CDPPage";
import { FundamentalCourseActions } from "../../pages/FundamentalCoursesPage";
import { CartPage } from "../../pages/CartPage";
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

test.describe("Subtotal calculation", async () => {
    test("Verify the subtotal in the mini-cart updates accurately when adding & removing products/courses.", { tag: '@regression @RegularUserMiniCart @subTotalCalculation ' }, async () => {

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
            await page.waitForTimeout(10000);
        })
        await test.step("Step 8: Visibility Academy on the Navigation Header", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        })
        await test.step("Step 9: Hover on the Academy Menu List on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOverAcademy(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Visibility of Fundamental Courses Filter Option", async () => {
            await NavigationHeaderPageActions.visibilityFundamentalFilterOption(page);
        })
        await test.step("Step 11: Click on Fundamental Courses Filter Option", async () => {
            await NavigationHeaderPageActions.clickOnFundamentalCoursesFilterOption(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Visibility of Fundamental Courses Page Heading", async () => {
            await FundamentalCourseActions.visibilityFundamentalCourseHeading(page);
        })
        await test.step("Step 13: Visibility of Antioxidants: Expect More Course", async () => {
            await FundamentalCourseActions.visibilityAntioxidantsExpectMoreCourse(page);
        })
        await test.step("Step 14: Scroll To Antioxidants: Expect More Course", async () => {
            await FundamentalCourseActions.scrollToAntioxidantsExpectMoreCourse(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15: Click on Antioxidants: Expect More Course", async () => {
            await FundamentalCourseActions.clickOnAntioxidantsExpectMoreCourse(page);
            await page.waitForTimeout(6000);
        })
        await test.step("Step 16: Verify the User is Navigated to CDP of the Course", async () => {
            await CDPPage.visibilityHeaderOfTheCourse(page);
        })
        await test.step("Step 17: Verify Course Price Visibility", async () => {
            await CDPPage.visibilityCoursePrice(page);
        })
        await test.step("Step 18: Verify Course Add To Cart Button Visibility", async () => {
            await CDPPage.visibilityCourseAddToCartButton(page);
        })
        await test.step("Step 19:click on the add to cart button", async () => {
            await CDPPage.clickCourseAddToCartButton(page);
            await page.waitForTimeout(5000)
        })
        await test.step('Step 20: hover on minicart icon', async () => {
            await page.waitForTimeout(3000)
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 21: Verify course is visible in minicart after add to cart', async () => {
            await MiniCartPage.visibilityCourseNameAntioxidentExpectedMore(page)
        })
        await test.step('Step 22: Verify course price is $149', async () => {
            await MiniCartPage.visibilityPriceOfAntioxidentExpectedMoreInCart(page)
        })
        await test.step('Step 23: Verify subtotal is $149', async () => {
            await MiniCartPage.visibilitySubtotalOfAntioxidentExpectedMore(page)
        })
        await test.step('Step 24:Remove Product from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAntioxidentsExpectedMore(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 25: Verify subtotal changed to $0.00', async () => {
            await MiniCartPage.visibilityZeroSubTotalOfMiniCart(page)
            await page.waitForTimeout(3000)
        })
        await test.step("Step 26: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(7000);
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 27: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 28: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
        })
        await test.step('Step 29: click on add to cart on Acnecream', async () => {
            await page.waitForTimeout(7000)
            await PLPPage.clickOnAddToCartBtnOfAcneCream(page)
        })
        await test.step('Step 30: hover on minicart icon', async () => {
            await page.waitForTimeout(5000)
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
        })
        await test.step('Step 31: Verify increase button is visible', async () => {
            await page.waitForTimeout(3000)
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 32: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 33: Verify subtotal for acnecream is $25', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 34:Remove Product from Minicart', async () => {
            await page.waitForTimeout(4000)
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 35:verify cart subtotal is changed', async () => {
            await MiniCartPage.visibilityZeroSubTotalOfMiniCart(page)
        })
    })

    test("Verify the subtotal in the mini-cart updates accurately after placing order successfully.", { tag: '@regression @subTotalCalculation @regularUserMiniCart' }, async () => {

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
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.allEmail);
        })
        await test.step("Step 6: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(5000);
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
            await page.waitForTimeout(8000)
            await PLPPage.clickOnAddToCartBtnOfAcneCream(page)
            await page.waitForTimeout(5000)
        })
        await test.step('Step 12: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 13: verify product name is visible', async () => {
            await MiniCartPage.productNameVisible(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 14: Click on View Cart', async () => {
            await MiniCartPage.viewCartButtonClickable(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 15:Cart Page is displayed', async () => {
            await CartPage.cartVisible(page)
            await page.waitForTimeout(7000)
        })
        await test.step('Step 16: scroll to checkout', async () => {
            await page.waitForTimeout(3000)
            await CartPage.scrollToCheckout(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 17:Verify checkout is visible', async () => {
            await CartPage.checkoutVisible(page)
        })
        await test.step('Step 16:click on checkout', async () => {
            await CartPage.clickOnCheckout(page)
            await page.waitForTimeout(8000)
        })
        await test.step('Step 17:scroll to place order', async () => {
            await CartPage.scrollOnPlaceOrder(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 18:click on place order', async () => {
            await CartPage.clickOnPlaceOrder(page)
            await page.waitForTimeout(8000)
        })
        await test.step('Step 19:verify order placed sucessfully', async () => {
            await CartPage.visibilityThankYouForOrder(page)
            await page.waitForTimeout(7000)
        })
        await test.step('Step 16: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 17:verify cart subtotal is $0.00', async () => {
            await MiniCartPage.visibilityZeroSubTotalOfMiniCart(page)
        })
        await test.step('Step 16:verify prompt message is displayed', async () => {
            await NavigationHeaderPageActions.verifyAfterLoginEmptyCartViewText(page)
        })
    })
})
