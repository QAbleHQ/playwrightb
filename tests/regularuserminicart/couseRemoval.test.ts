import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { PLPPage } from '../../pages/PLPPage'
import { MiniCartPage } from "../../pages/MiniCartPage";
import { CommonHelper } from "../../utils/commonHelper";
import { CDPPage } from "../../pages/CDPPage";
import { FundamentalCourseActions } from "../../pages/FundamentalCoursesPage";
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

test.describe("course removal", async () => {

    test("Verify that the View Cart button is disabled while a course is being removed.", { tag: '@regression @regularUserMiniCart @courseremoval ' }, async () => {

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
        await test.step("Step 8: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(7000);
        })
        await test.step("Step 8: Visibility Academy on the Navigation Header", async () => {
            await page.waitForTimeout(3000);
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
            await page.waitForTimeout(2000);
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
            await page.waitForTimeout(5000);
        })
        await test.step('Step 20: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 21: Verify course name is visible', async () => {
            await MiniCartPage.visibilityCourseNameAntioxidentExpectedMore(page)
        })
        await test.step('Step 22:Remove course from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAntioxidentsExpectedMore(page)
        })
        await test.step('Step 23: verify add to cart button is disabled', async () => {
            await MiniCartPage.viewCartButtonDisabled(page)
            await page.waitForTimeout(4000)
        })
    })

    test("Verify that removing all course results in an empty mini-cart state.", { tag: '@regression @regularUserMiniCart @courseremoval ' }, async () => {

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
        await test.step("Step 8: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(10000);
        })
        await test.step("Step 8: Visibility Academy on the Navigation Header", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Hover on the Academy Menu List on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOverAcademy(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 10: Visibility of Fundamental Courses Filter Option", async () => {
            await NavigationHeaderPageActions.visibilityFundamentalFilterOption(page);
        })
        await test.step("Step 11: Click on Fundamental Courses Filter Option", async () => {
            await NavigationHeaderPageActions.clickOnFundamentalCoursesFilterOption(page);
            await page.waitForTimeout(6000);
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
            await page.waitForTimeout(4000)
        })
        await test.step('Step 20: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 21: Verify course name is visible', async () => {
            await MiniCartPage.visibilityCourseNameAntioxidentExpectedMore(page)
        })
        await test.step('Step 22:Remove course from Minicart', async () => {
            await MiniCartPage.clickOnRemoveButtonOfAntioxidentsExpectedMore(page)
        })
        await test.step('Step 23: verify view cart button is disabled', async () => {
            await MiniCartPage.viewCartButtonDisabled(page)
            await page.waitForTimeout(4000)
        })
        await test.step('Step 24:verify prompt message is displayed', async () => {
            await NavigationHeaderPageActions.verifyAfterLoginEmptyCartViewText(page)
        })
    })

    test("Verify seamless mini-cart updates upon course removal, including instant removal of the course and accurate recalculation of the subtotal.", { tag: '@regression @RegularUserMiniCart @courseRemoval ' }, async () => {

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
            await page.waitForTimeout(2000);
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
        })
        await test.step('Step 25: Verify subtotal changed to $0.00', async () => {
            await MiniCartPage.visibilityZeroSubTotalOfMiniCart(page)
            await page.waitForTimeout(3000)
        })
    })
})
