import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { FundamentalCourseActions } from "../../pages/FundamentalCoursesPage";
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

test.describe("Verify that users can favorite and unfavorite courses regardless of purchase eligibility.", async () => {

    test("Verify that users can favorite and unfavorite courses regardless of purchase eligibility.", { tag: '@regression @student @clp' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 9: Visibility Academy Option on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        })
        await test.step("Step 10: Hover Academy Option on the Header Navigation", async () => {
            await NavigationHeaderPageActions.hoverOverAcademy(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 11: Click on the Fundamental Courses", async () => {
            await NavigationHeaderPageActions.clickOnFundamentalCoursesFilterOption(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 12: Verify the user is navigated to Fundamental Cousers Page", async () => {
            await FundamentalCourseActions.visibilityFundamentalCourseHeading(page);
        })
        await test.step("Step 13: Scroll to Favourite Button", async () => {
            await page.waitForTimeout(3000)
            await FundamentalCourseActions.scrollToFundamentalCourseFavouriteButton(page);
        })
        await test.step("Step 14: Verify Course's Favourite Button is visible for 'A Deep Dive into Professional Products'", async () => {
            await FundamentalCourseActions.visibilityFundamentalCourseFavourteButton(page);
        })
        await test.step("Step 15: Verify the Favourite Button is not Filled", async () => {
            await FundamentalCourseActions.visibilityFavButtonIsNotFilled(page);
        })
        await test.step("Step 16: Click on the Favourite Button to Add the Product into the Favourites", async () => {
            await FundamentalCourseActions.clickOnFundamentalCourseFavouriteButton(page);
        })
        await test.step("Step 17: Verify the Favourite Button is filled", async () => {
            await FundamentalCourseActions.visibilityFavButtonIsFilled(page);
        })
        await test.step("Step 18: Verify Product added to Favourite Toast is Visible", async () => {
            await FundamentalCourseActions.visibilitySuccessToast(page);
        })
        await test.step("Step 19: Click on the Favourite Button to Remove from the Favourite", async () => {
            await FundamentalCourseActions.clickOnFundamentalCourseFavouriteButton(page);
        })
        await test.step("Step 20: Verify the Favourite Button is not Filled", async () => {
            await page.waitForTimeout(2000)
            await FundamentalCourseActions.visibilityFavButtonIsNotFilled(page);
        })
        await test.step("Step 21: Verify Product removed from Favourite Toast is Visible", async () => {
            await FundamentalCourseActions.visibilityRemovedToast(page);
        })
    })
})