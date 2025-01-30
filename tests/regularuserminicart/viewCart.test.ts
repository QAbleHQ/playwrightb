import { test, chromium, Page, BrowserContext, expect } from "@playwright/test";
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

test.describe("view cart", async () => {
    test("Verify that clicking 'View Cart' in the mini-cart consistently navigates users to the full Cart page, regardless of cart contents.", { tag: '@regression @regularUserMiniCart @viewcart ' }, async () => {

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
        await test.step('Step 8: Verify minicart icon is visible', async () => {
            await NavigationHeaderPageActions.visibilityNavigationCartIcon(page)
        })
        await test.step('Step 9: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000);
        })
        await test.step('Step 10: Verify view cart option is visible ', async () => {
            await NavigationHeaderPageActions.visbilityAfterLoginViewCartButton(page)
        })
        await test.step('Step 11: click on the view cart option', async () => {
            await NavigationHeaderPageActions.clickOnViewCartButton(page)
            await page.waitForTimeout(3000);
        })
        await test.step('Step 12:verify that cart page is visible', async () => {
            await CartPage.cartVisible(page)
            await page.waitForTimeout(3000);
        })
        await test.step('Step 13: Verify navigation to Forgot Your Password page', async () => {
            await page.waitForURL(testdata.Links.cartPage);
            const currentUrl = page.url();
            expect(currentUrl).toBe(testdata.Links.cartPage);
        });
    })

    test("Verify that the View Cart button is disabled while a product/course is being removed.", { tag: '@regression @regularUserMiniCart @viewcart ' }, async () => {

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
            await page.waitForTimeout(7000);
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
        await test.step("Step 13: Scroll To Antioxidants: Expect More Course", async () => {
            await FundamentalCourseActions.scrollToAntioxidantsExpectMoreCourse(page);
        })
        await test.step("Step 14: Visibility of Antioxidants: Expect More Course", async () => {
            await FundamentalCourseActions.visibilityAntioxidantsExpectMoreCourse(page);
        })
        await test.step("Step 15: Click on Antioxidants: Expect More Course", async () => {
            await page.waitForTimeout(3000);
            await FundamentalCourseActions.clickOnAntioxidantsExpectMoreCourse(page);
            await page.waitForTimeout(5000);
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
        })
        await test.step('Step 20: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 21: Verify course name is visible', async () => {
            await MiniCartPage.visibilityCourseNameAntioxidentExpectedMore(page)
        })
        await test.step('Step 22:Remove Product from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAntioxidentsExpectedMore(page)
        })
        await test.step('Step 23: verify add to cart button is disabled', async () => {
            await MiniCartPage.viewCartButtonDisabled(page)
            await page.waitForTimeout(4000)
        })
        await test.step("Step 24: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(3000);
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 25: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 26: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
        })
        await test.step('Step 27: click on add to cart on Acnecream', async () => {
            await page.waitForTimeout(3000)
            await PLPPage.clickOnAddToCartBtnOfAcneCream(page)
        })
        await test.step('Step 28: hover on minicart icon', async () => {
            await page.waitForTimeout(5000)
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
        })
        await test.step('Step 29: Verify increase button is visible', async () => {
            await page.waitForTimeout(3000)
            await MiniCartPage.visibilityPlusButtonForAcneCream(page)
        })
        await test.step('Step 30: Verify decrease button is visible', async () => {
            await MiniCartPage.visibilityMinusButtonForAcneCream(page)
        })
        await test.step('Step 31:Remove Product from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAcneCream(page)
        })
        await test.step('Step 32: verify view cart button is disabled', async () => {
            await MiniCartPage.viewCartButtonDisabled(page)
            await page.waitForTimeout(3000)
        })
    })
})
