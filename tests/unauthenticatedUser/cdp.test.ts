import { test, chromium, Page, BrowserContext } from "@playwright/test"
import { CDPPage } from "../../pages/CDPPage"
import { CommonHelper } from "../../utils/commonHelper"
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

test.describe("Verify the Unauthenticated Users(Logged out) CDP Page Course Information .", async () => {
    test("Verify that 'Log In' and 'Join' buttons are displayed, instead of 'Add to Cart' button.", { tag: '@regression @unauthenticatedUser @smoke @cdp' }, async () => {

        await test.step("Step 1: Verify Academy is visible on Header navigation menu.", async () => {
            await CDPPage.academyMenuListHeaderIsVisible(page);
        })
        await test.step("Step 2: Hover on Academy menu.", async () => {
            await CDPPage.academyMenuListHeaderHover(page);
        })
        await test.step("Step 3: Verify fundamental course is visible under the Academy.", async () => {
            await CDPPage.fundamentalCoursesUnderAcademyIsVisible(page);
        })
        await test.step("Step 4: Verify to Ckick on fundamental course under the Academy.", async () => {
            await CDPPage.fundamentalCoursesUnderAcademyIsClickable(page);
        })
        await test.step("Step 5: Verify user is redirect on course list page.", async () => {
            await CDPPage.courseListPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 6: Verify course list is visible[Antioxidant].", async () => {
            await CDPPage.courseImageAntioxidantsIsVisible(page);
        })
        await test.step("Step 7: Verify to click on Antioxidant.", async () => {
            await CDPPage.courseImageAntioxidantsIsClickable(page);
        })
        await test.step("Step 8: Verify user is redirect on course (Antioxidant) details page.", async () => {
            await CDPPage.courseDetailsPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Verify To scroll down the page.", async () => {
            await CDPPage.scrollDownUpToJoinButton(page);
        })
        await test.step("Step 10: Verify Login button is visible on course (Antioxidant) details page.", async () => {
            await CDPPage.antioxidantLoginBtnIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify Join button is visible on course (Antioxidant) details page.", async () => {
            await CDPPage.antioxidantJoinBtnBtnIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify Add to cart button is not visible on course (Antioxidant) details page.", async () => {
            await CDPPage.antioxidantAddtocartBtnIsHide(page);
        })

    })

    test("Verify that clicking on the 'Log In' button pops up Login dialog box.", { tag: '@regression @unauthenticatedUser @smoke @cdp @Login' }, async () => {

        await test.step("Step 1: Verify Academy is visible on Header navigation menu.", async () => {
            await CDPPage.academyMenuListHeaderIsVisible(page);
        })
        await test.step("Step 2: Hover on Academy menu.", async () => {
            await CDPPage.academyMenuListHeaderHover(page);
        })
        await test.step("Step 3: Verify fundamental course is visible under the Academy.", async () => {
            await CDPPage.fundamentalCoursesUnderAcademyIsVisible(page);
        })
        await test.step("Step 4: Verify to Ckick on fundamental course under the Academy.", async () => {
            await CDPPage.fundamentalCoursesUnderAcademyIsClickable(page);
        })
        await test.step("Step 5: Verify user is redirect on course list page.", async () => {
            await CDPPage.courseListPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 6: Verify course list is visible[Antioxidant].", async () => {
            await CDPPage.courseImageAntioxidantsIsVisible(page);
        })
        await test.step("Step 7: Verify to click on Antioxidant.", async () => {
            await CDPPage.courseImageAntioxidantsIsClickable(page);
        })
        await test.step("Step 8: Verify user is redirect on course (Antioxidant) details page.", async () => {
            await CDPPage.courseDetailsPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Verify Login button is visible on course (Antioxidant) details page.", async () => {
            await CDPPage.antioxidantLoginBtnIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Verify click on Login button.", async () => {
            await CDPPage.antioxidantLoginBtnIsClickable(page);
        })
        await test.step("Step 11: Verify login dialog is visible.", async () => {
            await CDPPage.antioxidantLoginDialogIsVisible(page);
            await page.waitForTimeout(300);
        })

    })

    test("Verify that clicking on the 'Join' button redirects users to the registration page..", { tag: '@regression @unauthenticatedUser @smoke @cdp' }, async () => {

        await test.step("Step 1: Verify Academy is visible on Header navigation menu.", async () => {
            await CDPPage.academyMenuListHeaderIsVisible(page);
        })
        await test.step("Step 2: Hover on Academy menu.", async () => {
            await CDPPage.academyMenuListHeaderHover(page);
        })
        await test.step("Step 3: Verify fundamental course is visible under the Academy.", async () => {
            await CDPPage.fundamentalCoursesUnderAcademyIsVisible(page);
        })
        await test.step("Step 4: Verify to Ckick on fundamental course under the Academy.", async () => {
            await CDPPage.fundamentalCoursesUnderAcademyIsClickable(page);
        })
        await test.step("Step 5: Verify user is redirect on course list page.", async () => {
            await CDPPage.courseListPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 6: Verify course list is visible[Antioxidant].", async () => {
            await CDPPage.courseImageAntioxidantsIsVisible(page);
        })
        await test.step("Step 7: Verify to click on Antioxidant.", async () => {
            await CDPPage.courseImageAntioxidantsIsClickable(page);
        })
        await test.step("Step 8: Verify user is redirect on course (Antioxidant) details page.", async () => {
            await CDPPage.courseDetailsPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Verify Join button is visible on course (Antioxidant) details page.", async () => {
            await CDPPage.antioxidantJoinBtnBtnIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Verify to hover on Join button is visible on course (Antioxidant) details page.", async () => {
            await CDPPage.antioxidantJoinBtnIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify click on Join button.", async () => {
            await CDPPage.antioxidantJoinBtnIsClickable(page);
        })
        await test.step("Step 12: Verify user is redirect on Registration page after clicks on Join button.", async () => {
            await CDPPage.registerYourProfilePageIsVisible(page);
        })

    })

    test("Verify that unauthenticated users are not able to view the price, favorite/unfavorite and purchase the course.", { tag: '@regression @unauthenticatedUser @smoke @cdp @Join' }, async () => {

        await test.step("Step 1: Verify Academy is visible on Header navigation menu.", async () => {
            await CDPPage.academyMenuListHeaderIsVisible(page);
        })
        await test.step("Step 2: Hover on Academy menu.", async () => {
            await CDPPage.academyMenuListHeaderHover(page);
        })
        await test.step("Step 3: Verify fundamental course is visible under the Academy.", async () => {
            await CDPPage.fundamentalCoursesUnderAcademyIsVisible(page);
        })
        await test.step("Step 4: Verify to Ckick on fundamental course under the Academy.", async () => {
            await CDPPage.fundamentalCoursesUnderAcademyIsClickable(page);
        })
        await test.step("Step 5: Verify user is redirect on course list page.", async () => {
            await CDPPage.courseListPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 6: Verify course list is visible[Antioxidant].", async () => {
            await CDPPage.courseImageAntioxidantsIsVisible(page);
        })
        await test.step("Step 7: Verify to click on Antioxidant.", async () => {
            await CDPPage.courseImageAntioxidantsIsClickable(page);
        })
        await test.step("Step 8: Verify user is redirect on course (Antioxidant) details page.", async () => {
            await CDPPage.courseDetailsPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Verify To scroll down the page.", async () => {
            await CDPPage.scrollDownUpToJoinButton(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 10: Verify that unauthenticated users are not able to view the price.", async () => {
            await CDPPage.coursePriceOfAntioxidantIsHide(page);
        })
        await test.step("Step 11: Verify that unauthenticated users are not able to view the favorite/unfavorite.", async () => {
            await CDPPage.courseFavoriteBtnOfAntioxidantIsHide(page);
        })
        await test.step("Step 12: Verify that unauthenticated users are not able to view the purchase the course.", async () => {
            await CDPPage.antioxidantAddtocartBtnIsHide(page);
        })
    })
})
