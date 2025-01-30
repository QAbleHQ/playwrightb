import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { FundamentalCourseActions } from "../../pages/FundamentalCoursesPage";
import { CDPPage } from "../../pages/CDPPage";
import { CLPPage } from "../../pages/CLPPage";
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

test.describe("Verify the CDP page tests", async () => {
    test("Eligible Courses: Verify that for products where the user is allowed to purchase, the following elements are displayed:", { tag: '@regression @student @cdp' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(10000);
        })
        await test.step("Step 9: Visibility Academy on the Navigation Header", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        })
        await test.step("Step 10: Hover on the Academy Menu List on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOverAcademy(page);
        })
        await test.step("Step 11: Visibility of Fundamental Courses Filter Option", async () => {
            await NavigationHeaderPageActions.visibilityFundamentalFilterOption(page);
        })
        await test.step("Step 12: Click on Fundamental Courses Filter Option", async () => {
            await NavigationHeaderPageActions.clickOnFundamentalCoursesFilterOption(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13: Visibility of Fundamental Courses Page Heading", async () => {
            await FundamentalCourseActions.visibilityFundamentalCourseHeading(page);
        })
        await test.step("Step 14: Visibility of Antioxidants: Expect More Course", async () => {
            await FundamentalCourseActions.visibilityAntioxidantsExpectMoreCourse(page);
        })
        await test.step("Step 15: Scroll To Antioxidants: Expect More Course", async () => {
            await FundamentalCourseActions.scrollToAntioxidantsExpectMoreCourse(page);
        })
        await test.step("Step 16: Click on Antioxidants: Expect More Course", async () => {
            await FundamentalCourseActions.clickOnAntioxidantsExpectMoreCourse(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 17: Verify the User is Navigated to CDP of the Course", async () => {
            await CDPPage.visibilityHeaderOfTheCourse(page);
        })
        await test.step("Step 18: Verify Course Price Visibility", async () => {
            await CDPPage.visibilityCoursePrice(page);
        })
        await test.step("Step 19: Verify Course Add To Cart Button Visibility", async () => {
            await CDPPage.visibilityCourseAddToCartButton(page);
        })
        await test.step("Step 20: Verify Course Favorite CTA Button Visibility", async () => {
            await CDPPage.visibilityFavoriteCtaButton(page);
        })

    })

    test("Eligible/Restricted: Verify that users can favorite and unfavorite courses regardless of purchase eligibility.", { tag: '@regression @student @cdp' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Visibility Academy on the Navigation Header", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        })
        await test.step("Step 10: Hover on the Academy Menu List on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOverAcademy(page);
        })
        await test.step("Step 11: Visibility of Fundamental Courses Filter Option", async () => {
            await NavigationHeaderPageActions.visibilityFundamentalFilterOption(page);
        })
        await test.step("Step 12: Click on Fundamental Courses Filter Option", async () => {
            await NavigationHeaderPageActions.clickOnFundamentalCoursesFilterOption(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13: Visibility of Fundamental Courses Page Heading", async () => {
            await FundamentalCourseActions.visibilityFundamentalCourseHeading(page);
        })
        await test.step("Step 14: Visibility of Antioxidants: Expect More Course", async () => {
            await FundamentalCourseActions.visibilityAntioxidantsExpectMoreCourse(page);
        })
        await test.step("Step 15: Scroll To Antioxidants: Expect More Course", async () => {
            await FundamentalCourseActions.scrollToAntioxidantsExpectMoreCourse(page);
        })
        await test.step("Step 16: Click on Antioxidants: Expect More Course", async () => {
            await FundamentalCourseActions.clickOnAntioxidantsExpectMoreCourse(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 17: Verify the User is Navigated to CDP of the Course", async () => {
            await CDPPage.visibilityHeaderOfTheCourse(page);
        })
        await test.step("Step 18: Verify Course Favorite CTA Button Visibility", async () => {
            await CDPPage.visibilityFavoriteCtaButton(page);
        })
        await test.step("Step 19: Click on the Course Favourite Button", async () => {
            await CDPPage.clickCourseFavoriteCtaButton(page);
        })
        await test.step("Step 20: Visibility Add to Favorite Dialog Box", async () => {
            await CDPPage.visibilityAddToCartToast(page);
        })
        await test.step("Step 21: Click on the Course Favourite Button", async () => {
            await CDPPage.clickCourseFavoriteCtaButton(page);
        })
        await test.step("Step 22: Visibility Removed from Favorite Dialog Box", async () => {
            await CDPPage.visibilityRemovedFromFavouriteToast(page);
        })
    })

    test("Restricted: Verify that for products where the user is restricted to purchase, the following elements are displayed:", { tag: '@regression @student @cdp' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Visibility Academy on the Navigation Header", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        })
        await test.step("Step 10: Hover on the Academy Menu List on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOverAcademy(page);
        })
        await test.step("Step 11: Visibility View All Filter Option Under Courses", async () => {
            await NavigationHeaderPageActions.visibilityViewAllCourses(page);
        })
        await test.step("Step 12: Click on View All Filter Option Under Courses", async () => {
            await NavigationHeaderPageActions.clickOnViewAllCourses(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13: Visibility All Courses Heading", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
        })
        await test.step("Step 14: Visibility Restricted Course for Student on the PLP", async () => {
            await CLPPage.visibilityRestrictedCourseForStudent(page);
        })
        await test.step("Step 15: Click on Restricted Course for Student on the PLP", async () => {
            await CLPPage.clickRestrictedCourseForStudent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 16: Visibility Course Heading", async () => {
            await CDPPage.visibilityCourseHeading(page);
        })
        await test.step("Step 17: Verify the Course Price is not Visible", async () => {
            await CDPPage.hiddenCoursePrice(page);
        })
        await test.step("Step 18: Verify the Course Add to Cart is not Visible", async () => {
            await CDPPage.hiddenCourseAddToCartButton(page);
        })
        await test.step("Step 19: Visibility of the Course Restricted Message for UAT", async () => {
            await CDPPage.courseRestrictedMsgForUAT(page);
        })
        await test.step("Step 20: Verify the Course Restricted Message for UAT", async () => {
            await CDPPage.verifyCourseRestrictedMessageForUAT(page);
        })
    })
})