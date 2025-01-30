import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { PLPPage } from '../../pages/PLPPage'
import { MiniCartPage } from "../../pages/MiniCartPage";
import { CartPage } from "../../pages/CartPage";
import { PDPPage } from "../../pages/PDPPage";
import { CommonHelper } from "../../utils/commonHelper";
import { FundamentalCourseActions } from "../../pages/FundamentalCoursesPage";
import { CDPPage } from "../../pages/CDPPage";
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

test.describe("Adding Product to minicart", async () => {
    test("Verify accurate and real-time updates of quantity, item subtotal, and cart subtotal upon adding items from the product listing page (PLP). And the View Cart button is functioning normally.", { tag: '@regression @minicart @regularUserMiniCart' }, async () => {

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
        await test.step("Step 8: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(3000)
            await NavigationHeaderPageActions.hoverOverShop(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await page.waitForTimeout(3000)
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
        })
        await test.step('Step 11: click on add to cart on Acnecream', async () => {
            await page.waitForTimeout(8000)
            await PLPPage.clickOnAddToCartBtnOfAcneCream(page)
        })
        await test.step('Step 12: hover on minicart icon', async () => {
            await page.waitForTimeout(5000)
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
        })
        await test.step('Step 13: verify product name is visible', async () => {
            await page.waitForTimeout(3000)
            await MiniCartPage.productNameVisible(page)
        })
        await test.step('Step 16: Product price of acnecream', async () => {
            await page.waitForTimeout(3000)
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 17: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 18: Verify increase button is visible', async () => {
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 19: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 20: Click on Plus icon', async () => {
            await MiniCartPage.clickPlusButtonOfAcneCream(page)
        })
        await test.step('Step 21: Product price of acnecream is updated', async () => {
            await page.waitForTimeout(4000)
            await MiniCartPage.verifyMiniCartPriceAfterOneIncreaseAcneCream(page)
        })
        await test.step('Step 22: Subtotal Price cart is updated', async () => {
            await MiniCartPage.verifyMiniCartAfterOneIncreaseSubtotalAcneCream(page)
        })
        await test.step('Step 23: Click on Decrease on time', async () => {
            await MiniCartPage.clickMinusButtonOfAcneCream(page)
        })
        await test.step('Step 24: Product price of acnecream', async () => {
            await page.waitForTimeout(4000)
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 25: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 26: Click on View Cart', async () => {
            await MiniCartPage.viewCartButtonClickable(page)
        })
        await test.step('Step 27:Cart Page is displayed', async () => {
            await page.waitForTimeout(4000)
            await CartPage.cartVisible(page)
        })
        await test.step('Step 28: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
        })
        await test.step('Step 29:Remove Product from Minicart', async () => {
            await page.waitForTimeout(3000)
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
        })
    })

    test("Verify accurate and real-time updates of quantity, item subtotal, and cart subtotal upon adding items from the PLP Quick View modal. And the View Cart button is functioning normally.", { tag: '@regression @minicart @regularUserMiniCart' }, async () => {

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
        await test.step("Step 8: Hover Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 11: Hover on Product Image", async () => {
            await page.waitForTimeout(6000)
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 12: Visibility of Quick View Button", async () => {
            await PLPPage.visibilityQuickViewButton(page);
        })
        await test.step("Step 12: Click on the Quick View Button", async () => {
            await PLPPage.clickOnQuickViewButton(page);
            await page.waitForTimeout(6000)
        })
        await test.step('Step 13: click on add to cart on Acnecream', async () => {
            await PLPPage.clickOnAddToCartBtnOfQuickView(page)
            await page.waitForTimeout(5000)
        })
        await test.step('Step 14: click on close button', async () => {
            await PLPPage.clickOnCloseQuickViewButton(page)
            await page.waitForTimeout(5000)
        })
        await test.step('Step 15: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 16: verify product name is visible', async () => {
            await MiniCartPage.productNameVisible(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 17: Product price of acnecream', async () => {
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 18: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 19: Verify increase button is visible', async () => {
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 20: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 21: Click on Plus icon', async () => {
            await MiniCartPage.clickPlusButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 22: Product price of acnecream is updated', async () => {
            await MiniCartPage.verifyMiniCartPriceAfterOneIncreaseAcneCream(page)
        })
        await test.step('Step 23: Subtotal Price cart is updated', async () => {
            await MiniCartPage.verifyMiniCartAfterOneIncreaseSubtotalAcneCream(page)
        })
        await test.step('Step 24: Click on Decrease on time', async () => {
            await MiniCartPage.clickMinusButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 25: Product price of acnecream', async () => {
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 26: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 27: Click on View Cart', async () => {
            await MiniCartPage.viewCartButtonClickable(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 28:Cart Page is displayed', async () => {
            await CartPage.cartVisible(page)
        })
        await test.step('Step 29: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 30:Remove Product from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
        })
    })

    test("Verify accurate and real-time updates of quantity, item subtotal, and cart subtotal upon adding subscribed products from the product detail page (PDP). And the View Cart button is functioning normally.", { tag: '@regression @minicart @regularUserMiniCart' }, async () => {

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
        })
        await test.step("Step 11: click on acne cream title", async () => {
            await page.waitForTimeout(3000)
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 12: verify the subscribe is visible", async () => {
            await page.waitForTimeout(5000)
            await PDPPage.isSubscribeTextVisible(page);
        })
        await test.step("Step 13: click on the subscribe button", async () => {
            await page.waitForTimeout(3000)
            await PDPPage.clickOnSubscribeText(page);
            await page.waitForTimeout(3000)
        })
        await test.step('Step 14: click on add to cart on Acnecream', async () => {
            await PDPPage.scrollToAddToCartButton(page)
            await page.waitForTimeout(3000)
            await PDPPage.clickOnAddToCartButton(page)
            await page.waitForTimeout(5000)
        })
        await test.step('Step 15: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 16: verify product name is visible', async () => {
            await MiniCartPage.productNameVisible(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 17: Product price of acnecream', async () => {
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 18: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 19: Verify increase button is visible', async () => {
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 20: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 21: Click on Plus icon', async () => {
            await MiniCartPage.clickPlusButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 22: Product price of acnecream is updated', async () => {
            await MiniCartPage.verifyMiniCartPriceAfterOneIncreaseAcneCream(page)
        })
        await test.step('Step 23: Subtotal Price cart is updated', async () => {
            await MiniCartPage.verifyMiniCartAfterOneIncreaseSubtotalAcneCream(page)
        })
        await test.step('Step 24: Click on Decrease on time', async () => {
            await MiniCartPage.clickMinusButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 25: Product price of acnecream', async () => {
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 26: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 27: Click on View Cart', async () => {
            await MiniCartPage.viewCartButtonClickable(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 28:Cart Page is displayed', async () => {
            await CartPage.cartVisible(page)
        })
        await test.step('Step 29: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 30:Remove Product from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
    })

    test("Verify accurate and real-time updates of quantity, item subtotal, and cart subtotal upon adding one-time purchase products from the product detail page (PDP). And the View Cart button is functioning normally..", { tag: '@regression @minicart @regularUserMiniCart' }, async () => {

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
            await page.waitForTimeout(3000);
        })
        await test.step("Step 8: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(7000);
            await NavigationHeaderPageActions.hoverOverShop(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: click on acne cream title", async () => {
            await page.waitForTimeout(3000);
            await PLPPage.clickOnAcneCreamProduct(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 12: Visibility Of acne cream title", async () => {
            await PDPPage.isAcneCreamTextVisible(page);
        })
        await test.step("Step 13: verify the one time purchase is visible", async () => {
            await PDPPage.isOneTimePurchaseAmountVisible(page);
            await page.waitForTimeout(5000)
        })
        await test.step('Step 14: click on add to cart on Acnecream', async () => {
            await PDPPage.scrollToAddToCartButton(page)
            await page.waitForTimeout(3000)
            await PDPPage.clickOnAddToCartButton(page)
            await page.waitForTimeout(2000)
        })
        await test.step('Step 15: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 16: verify product name is visible', async () => {
            await MiniCartPage.productNameVisible(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 17: Product price of acnecream', async () => {
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 18: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 19: Verify increase button is visible', async () => {
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 20: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 21: Click on Plus icon', async () => {
            await MiniCartPage.clickPlusButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 22: Product price of acnecream is updated', async () => {
            await MiniCartPage.verifyMiniCartPriceAfterOneIncreaseAcneCream(page)
        })
        await test.step('Step 23: Subtotal Price cart is updated', async () => {
            await MiniCartPage.verifyMiniCartAfterOneIncreaseSubtotalAcneCream(page)
        })
        await test.step('Step 24: Click on Decrease on time', async () => {
            await MiniCartPage.clickMinusButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 25: Product price of acnecream', async () => {
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 26: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 27: Click on View Cart', async () => {
            await MiniCartPage.viewCartButtonClickable(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 28:Cart Page is displayed', async () => {
            await CartPage.cartVisible(page)
        })
        await test.step('Step 29: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 30:Remove Product from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
    })



    test("Verify that an appropriate toast message is displayed when attempting to add both products and courses to the same cart.", { tag: '@regression @RegularUserMiniCart @viewcart ' }, async () => {

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
            await page.waitForTimeout(4000)
        })
        await test.step("Step 10: Visibility of Fundamental Courses Filter Option", async () => {
            await NavigationHeaderPageActions.visibilityFundamentalFilterOption(page);
        })
        await test.step("Step 11: Click on Fundamental Courses Filter Option", async () => {
            await NavigationHeaderPageActions.clickOnFundamentalCoursesFilterOption(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 12: Visibility of Fundamental Courses Page Heading", async () => {
            await FundamentalCourseActions.visibilityFundamentalCourseHeading(page);
        })
        await test.step("Step 13: Scroll To Antioxidants: Expect More Course", async () => {
            await FundamentalCourseActions.scrollToAntioxidantsExpectMoreCourse(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 14: Visibility of Antioxidants: Expect More Course", async () => {
            await FundamentalCourseActions.visibilityAntioxidantsExpectMoreCourse(page);
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
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 21: Verify course name is visible', async () => {
            await MiniCartPage.visibilityCourseNameAntioxidentExpectedMore(page)
        })
        await test.step("Step 22: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(3000);
            await NavigationHeaderPageActions.hoverOverShop(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 23: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 24: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
        })
        await test.step('Step 24: click on add to cart on Acnecream', async () => {
            await page.waitForTimeout(6000)
            await PLPPage.clickOnAddToCartBtnOfAcneCream(page)
            await page.waitForTimeout(1000)
        })
        await test.step('Step 25: Verify the error toast message', async () => {
            await PLPPage.visibilityCanNotAddProductAndCourseInOneCartToast(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 26: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 27:Remove Product from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAntioxidentsExpectedMore(page)
        })
    })

    test("Verify accurate and real-time updates of quantity, item subtotal, and cart subtotal upon adding items from various carousels. And the View Cart button is functioning normally.", { tag: '@regression @minicart @regularUserMiniCart' }, async () => {
        test.setTimeout(180000)
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
            await page.waitForTimeout(8000);
        })
        await test.step("Step 8: scroll till order again add to cart for acne cream", async () => {
            await HomePage.scrollOrderAgainAcneCreamAddToCart(page);
        })
        await test.step('Step 9:verify add to cart on Acnecream from Order again carousels', async () => {
            await page.waitForTimeout(5000)
            await HomePage.visibilityorderAgainAddToCart(page)
            await page.waitForTimeout(5000)
        })
        await test.step('Step 10: click on add to cart on Acnecream from Order again carousels', async () => {
            await page.waitForTimeout(5000)
            await HomePage.clickOnAddToCartButton(page)
            await page.waitForTimeout(5000)
        })
        await test.step('Step 11: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 12: verify product name is visible', async () => {
            await MiniCartPage.productNameVisible(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 13: Product price of acnecream', async () => {
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 14: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 15: Verify increase button is visible', async () => {
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 16: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 17: Click on Plus icon', async () => {
            await MiniCartPage.clickPlusButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 18: Product price of acnecream is updated', async () => {
            await MiniCartPage.verifyMiniCartPriceAfterOneIncreaseAcneCream(page)
        })
        await test.step('Step 19: Subtotal Price cart is updated', async () => {
            await MiniCartPage.verifyMiniCartAfterOneIncreaseSubtotalAcneCream(page)
        })
        await test.step('Step 20: Click on Decrease on time', async () => {
            await MiniCartPage.clickMinusButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 21: Product price of acnecream', async () => {
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 22: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 23: Click on View Cart', async () => {
            await MiniCartPage.viewCartButtonClickable(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 24:Cart Page is displayed', async () => {
            await CartPage.cartVisible(page)
        })
        await test.step('Step 25: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 27:Remove Product from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 28:click on pcaskin logo Product', async () => {
            await HomePage.clickPCASkinLogo(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 29: scroll to acnecream add to cart', async () => {
            await page.waitForTimeout(4000)
            await HomePage.scrollBestSellerAcneCreamAddToCart(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 30:verify add to cart on Acnecream from best seller carousels', async () => {
            await HomePage.visibilityBestSellerAcneCreamAddToCart(page)
            await page.waitForTimeout(5000)
        })
        await test.step('Step 31: click on add to cart on Acnecream from best seller carousels', async () => {
            await page.waitForTimeout(7000)
            await HomePage.clickOnBestSellerAddToCart(page)
            await page.waitForTimeout(5000)
        })
        await test.step('Step 32: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 33: verify product name is visible', async () => {
            await MiniCartPage.productNameVisible(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 34: Product price of acnecream', async () => {
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 35: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 36: Verify increase button is visible', async () => {
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 37: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 38: Click on Plus icon', async () => {
            await MiniCartPage.clickPlusButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 39: Product price of acnecream is updated', async () => {
            await MiniCartPage.verifyMiniCartPriceAfterOneIncreaseAcneCream(page)
        })
        await test.step('Step 40: Subtotal Price cart is updated', async () => {
            await MiniCartPage.verifyMiniCartAfterOneIncreaseSubtotalAcneCream(page)
        })
        await test.step('Step 41: Click on Decrease on time', async () => {
            await MiniCartPage.clickMinusButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 42: Product price of acnecream', async () => {
            await MiniCartPage.verifyMiniCartPriceAcneCream(page)
        })
        await test.step('Step 43: Subtotal Price cart', async () => {
            await MiniCartPage.verifyMiniCartSubtotalAcneCream(page)
        })
        await test.step('Step 44: Click on View Cart', async () => {
            await MiniCartPage.viewCartButtonClickable(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 45:Cart Page is displayed', async () => {
            await CartPage.cartVisible(page)
        })
        await test.step('Step 47: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 48:Remove Product from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
            await page.waitForTimeout(4000)
        })
    })
})
