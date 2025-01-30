import { HomePage } from "../../pages/HomePage";
import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
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

test.describe("UnAuthorised User CLP.", async () => {
    //Favourite button is not visible in automation issue
    test("Verify that users can favorite and unfavorite courses regardless of purchase eligibility.", { tag: '@regression @unauthorizedUser @clp @favourite ' }, async () => {

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
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Verify the AcademyMenu is visible ", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        })
        await test.step("Step 10: Verify the hover on AcademyMenu", async () => {
            await NavigationHeaderPageActions.hoverOverAcademy(page);
        })
        await test.step("Step 11: Veriify the Fundamental Courses or any other courses are visible ", async () => {
            await NavigationHeaderPageActions.visibilityFundamentalFilterOption(page);
        })
        await test.step("Step 12: Veriify to the click on Fundamental Courses or any other courses ", async () => {
            await NavigationHeaderPageActions.clickOnFundamentalCoursesFilterOption(page);
        })
        await test.step("Step 13: Veriify to scroll down up to Favourite icon ", async () => {
            await page.waitForTimeout(2500)
            await CLPPage.scrollUpTofavouriteIcon(page);
        })
        await test.step("Step 14: Veriify to the Favourite Button is visible ", async () => {
            await CLPPage.favouriteBtnIsVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 15: Veriify to the Hover on faavourite button ", async () => {
            await CLPPage.hoverOverFavouriteBtn(page);
        })
        await test.step("Step 16: Veriify to the click on Favourite Button ", async () => {
            await CLPPage.favouriteBtnClickable(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 17: Veriify to the Toast message is displayed while user click on favourite  ", async () => {
            await CLPPage.favouriteSelectToastIsVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 18: Veriify to the click on again to unFavourite ", async () => {
            await CLPPage.favouriteBtnClickable(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 19: Veriify to the Toast message is displayed while user click on unselect favourite  ", async () => {
            await CLPPage.favouriteUnSelectToastIsVisible(page);
            await page.waitForTimeout(5000);
        })

    })
})
