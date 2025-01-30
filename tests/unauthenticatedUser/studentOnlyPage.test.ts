import { test, Page, chromium, BrowserContext } from "@playwright/test"
import { StudentOnlyPage } from "../../pages/StudentOnlyPage"
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

test.describe("Student only Products.", async () => {

    //Unauthenticated User Student-Only Products Recently Viewed Products Card TC

    test("Verify that unauthenticated users are not able to view the price.", { tag: '@regression @studentOnlyPage @unauthenticatedUser ' }, async () => {

        await test.step("Step 1: Verify to Student menu is visible on the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsVisible(page);
        })
        await test.step("Step 2: Verify to Hover on Student menu to the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify  View all is visible on Student menu.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsVisible(page);
        })
        await test.step("Step 4: Hover on View all is visible on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsHover(page);
        })
        await test.step("Step 5: Click on View all after hover on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsClickable(page);
        })
        await test.step("Step 6: Verify student only tag is displayed as filter applied.", async () => {
            await StudentOnlyPage.studentOnlyFilterAppliedLabelIsVisible(page);
        })
        await test.step("Step 7: Verify Product list is displayed.", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsVisible(page);
        })
        await test.step("Step 8: Click on any products(Acne Cream).", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsClickable(page);
        })
        await test.step("Step 9: Verify products Details Page.", async () => {
            await StudentOnlyPage.RedirectStudentOnlyDetailPageIsVisible(page);
        })
        await test.step("Step 10: Verify to Bread Crumb is visible.", async () => {
            await StudentOnlyPage.breadCrumbAllProductIsvisible(page);
        })
        await test.step("Step 11: Hover on the Bread Crumb.", async () => {
            await StudentOnlyPage.breadCrumbAllProductIsHover(page);
        })
        await test.step("Step 12: Click on All Product on the Bread Crumb.", async () => {
            await StudentOnlyPage.breadCrumbAllProductIsClickable(page);
        })
        await test.step("Step 13: Scroll down the page and navigate to recent View section.", async () => {
            await StudentOnlyPage.recentviewProductCardScrollDown(page);
        })
        await test.step("Step 14: Verify recently view product is available in recent view section.", async () => {
            await StudentOnlyPage.recentviewProductCardIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15: Verify Price is not displayed in the Product card.", async () => {
            await StudentOnlyPage.productPriceStudentOnlyRecentViewdIsHide(page);
        })
    })

    test("Verify that 'Log in to order' button is displayed for all products, regardless of stock availability, instead of 'Add to Cart' or 'Select Size' or 'Notify Me' buttons.", { tag: '@regression @studentOnlyPage @unauthenticatedUser ' }, async () => {

        await test.step("Step 1: Verify to Student menu is visible on the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsVisible(page);
        })
        await test.step("Step 2: Verify to Hover on Student menu to the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify  View all is visible on Student menu.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsVisible(page);
        })
        await test.step("Step 4: Hover on View all is visible on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsHover(page);
        })
        await test.step("Step 5: Click on View all after hover on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsClickable(page);
        })
        await test.step("Step 6: Verify student only tag is displayed as filter applied.", async () => {
            await StudentOnlyPage.studentOnlyFilterAppliedLabelIsVisible(page);
        })
        await test.step("Step 7: Verify Product list is displayed.", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsVisible(page);
        })
        await test.step("Step 8: Click on any products(Acne Cream).", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsClickable(page);
        })
        await test.step("Step 9: Verify products Details Page.", async () => {
            await StudentOnlyPage.RedirectStudentOnlyDetailPageIsVisible(page);
        })
        await test.step("Step 10: Verify to Bread Crumb is visible.", async () => {
            await StudentOnlyPage.breadCrumbAllProductIsvisible(page);
        })
        await test.step("Step 11: Hover on the Bread Crumb.", async () => {
            await StudentOnlyPage.breadCrumbAllProductIsHover(page);
        })
        await test.step("Step 12: Click on All Product on the Bread Crumb.", async () => {
            await StudentOnlyPage.breadCrumbAllProductIsClickable(page);
        })
        await test.step("Step 13: Scroll down the page and navigate to recent View section.", async () => {
            await StudentOnlyPage.recentviewProductCardScrollDown(page);
        })
        await test.step("Step 14: Verify recently view product is available in recent view section.", async () => {
            await StudentOnlyPage.recentviewProductCardIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15: Verify Login in to Order button is visible to unauthenticated user.", async () => {
            await StudentOnlyPage.loginToOrderBtnStudentOnlyRecentViewIsVisible(page);
        })
        await test.step("Step 16: Verify Add to card button is not visible to un aunthenticated user.", async () => {
            await StudentOnlyPage.addtoCartBtnStudentOnlyRecentViewdIsHide(page);
        })
        await test.step("Step 17: Verify Notify Me button is not visible to un aunthenticated user.", async () => {
            await StudentOnlyPage.notifyMeBtnStudentOnlyRecentViewedIsHide(page);
        })
        await test.step("Step 18: Verify Select Size button is not visible to un aunthenticated user.", async () => {
            await StudentOnlyPage.selectSizeBtnStudentOnlyRecentViewdIsHide(page);
        })


    })

    test("Verify that clicking on the 'Log In to Order' button pops up Login dialog box for recent view product.", { tag: '@regression @studentOnlyPage @unauthenticatedUser ' }, async () => {

        await test.step("Step 1: Verify to Student menu is visible on the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsVisible(page);
        })
        await test.step("Step 2: Verify to Hover on Student menu to the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify  View all is visible on Student menu.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsVisible(page);
        })
        await test.step("Step 4: Hover on View all is visible on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsHover(page);
        })
        await test.step("Step 5: Click on View all after hover on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsClickable(page);
        })
        await test.step("Step 6: Verify student only tag is displayed as filter applied.", async () => {
            await StudentOnlyPage.studentOnlyFilterAppliedLabelIsVisible(page);
        })
        await test.step("Step 7: Verify Product list is displayed.", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsVisible(page);
        })
        await test.step("Step 8: Click on any products(Acne Cream).", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsClickable(page);
        })
        await test.step("Step 9: Verify products Details Page.", async () => {
            await StudentOnlyPage.RedirectStudentOnlyDetailPageIsVisible(page);
        })
        await test.step("Step 10: Verify to Bread Crumb is visible.", async () => {
            await StudentOnlyPage.breadCrumbAllProductIsvisible(page);
        })
        await test.step("Step 11: Hover on the Bread Crumb.", async () => {
            await StudentOnlyPage.breadCrumbAllProductIsHover(page);
        })
        await test.step("Step 12: Click on All Product on the Bread Crumb.", async () => {
            await StudentOnlyPage.breadCrumbAllProductIsClickable(page);
        })
        await test.step("Step 13: Scroll down the page and navigate to recent View section.", async () => {
            await StudentOnlyPage.recentviewProductCardScrollDown(page);
        })
        await test.step("Step 14: Verify recently view product is available in recent view section.", async () => {
            await StudentOnlyPage.recentviewProductCardIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15: Verify Login in to Order button is visible to unauthenticated user.", async () => {
            await StudentOnlyPage.loginToOrderBtnStudentOnlyRecentViewIsVisible(page);
        })
        await test.step("Step 16: Verify click on Login in to Order button.", async () => {
            await StudentOnlyPage.loginToOrderBtnStudentOnlyRecentViewIsClickable(page);
        })
        await test.step("Step 17: Verify after click on login button Login dialog box is open .", async () => {
            await StudentOnlyPage.loginDialogBoxStudentOnlyIsVisible(page);
        })

    })

    //Unauthenticated User Student-Only Products PLP Product Card TC

    test("Verify that clicking on the product image redirects users to PDP.", { tag: '@regression @studentOnlyPage @unauthenticatedUser  @PDP ' }, async () => {

        await test.step("Step 1: Verify to Student menu is visible on the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsVisible(page);
        })
        await test.step("Step 2: Verify to Hover on Student menu to the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify  View all is visible on Student menu.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsVisible(page);
        })
        await test.step("Step 4: Hover on View all is visible on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsHover(page);
        })
        await test.step("Step 5: Click on View all after hover on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsClickable(page);
        })
        await test.step("Step 6: Verify student only tag is displayed as filter applied.", async () => {
            await StudentOnlyPage.studentOnlyFilterAppliedLabelIsVisible(page);
        })
        await test.step("Step 7: Verify Product list is displayed.", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsVisible(page);
        })
        await test.step("Step 8: Click on any products(Acne Cream).", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsClickable(page);
        })
        await test.step("Step 9: Verify products Details Page.", async () => {
            await StudentOnlyPage.RedirectStudentOnlyDetailPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Verify products is visible in Beadcrumb.", async () => {
            await StudentOnlyPage.breadcrumbForPDP(page);
            await page.waitForTimeout(3000);
        })

    })

    test("Verify that the 'Quick View' button does not appear when hovering over product image.", { tag: '@regression @studentOnlyPage @unauthenticatedUser  @PLP ' }, async () => {

        await test.step("Step 1: Verify to Student menu is visible on the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsVisible(page);
        })
        await test.step("Step 2: Verify to Hover on Student menu to the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify  View all is visible on Student menu.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsVisible(page);
        })
        await test.step("Step 4: Hover on View all is visible on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsHover(page);
        })
        await test.step("Step 5: Click on View all after hover on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsClickable(page);
        })
        await test.step("Step 6: Verify student only tag is displayed as filter applied.", async () => {
            await StudentOnlyPage.studentOnlyFilterAppliedLabelIsVisible(page);
        })
        await test.step("Step 7: Verify Product list is displayed.", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsVisible(page);
        })
        await test.step("Step 8: Hover on any products(Acne Cream).", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsHover(page);
            await page.waitForTimeout(300);
        })
        await test.step("Step 9: Verify Quick View Button is not visible(Hide) while user hover on it.", async () => {
            await StudentOnlyPage.quickViewBtnPlpPageStudentOnlyIsHide(page);
            await page.waitForTimeout(3000);
        })
    })

    test("Verify that unauthenticated users are not able to view the price and favorite/unfavorite products.", { tag: '@regression @studentOnlyPage @unauthenticatedUser  @PLP ' }, async () => {

        await test.step("Step 1: Verify to Student menu is visible on the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsVisible(page);
        })
        await test.step("Step 2: Verify to Hover on Student menu to the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify  View all is visible on Student menu.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsVisible(page);
        })
        await test.step("Step 4: Hover on View all is visible on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsHover(page);
        })
        await test.step("Step 5: Click on View all after hover on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsClickable(page);
        })
        await test.step("Step 6: Verify student only tag is displayed as filter applied.", async () => {
            await StudentOnlyPage.studentOnlyFilterAppliedLabelIsVisible(page);
        })
        await test.step("Step 7: Verify Product list is displayed.", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsVisible(page);
        })
        await test.step("Step 8: Hover on any products(Acne Cream).", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsHover(page);
        })
        await test.step("Step 9: Verify Unauthenticated user are not able to view product price.", async () => {
            await StudentOnlyPage.productPriceOfCardIsHide(page);
            await page.waitForTimeout(300);
        })
        await test.step("Step 10: Verify Unauthenticated user are not able to view favorite/unfavorite.", async () => {
            await StudentOnlyPage.productFavouriteUnFavouriteOfCardIsHide(page);
            await page.waitForTimeout(300);
        })

    })

    test("Verify that 'Log in to order' button is displayed for all products, regardless of stock availability, instead of 'Add to Cart' or 'Select Size' buttons.", { tag: '@regression @studentOnlyPage @unauthenticatedUser  @PLP ' }, async () => {

        await test.step("Step 1: Verify to Student menu is visible on the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsVisible(page);
        })
        await test.step("Step 2: Verify to Hover on Student menu to the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify  View all is visible on Student menu.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsVisible(page);
        })
        await test.step("Step 4: Hover on View all is visible on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsHover(page);
        })
        await test.step("Step 5: Click on View all after hover on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsClickable(page);
        })
        await test.step("Step 6: Verify student only tag is displayed as filter applied.", async () => {
            await StudentOnlyPage.studentOnlyFilterAppliedLabelIsVisible(page);
        })
        await test.step("Step 7: Verify Product list is displayed.", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsVisible(page);
        })
        await test.step("Step 8: Verify 'Log in to order' button is displyed for all products card.", async () => {
            await StudentOnlyPage.loginToOrderBtnStudentOnlyIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Verify 'Add to cart' button is not displayed to Unauthenticated user.", async () => {
            await StudentOnlyPage.productAddToCartButtonOfCardIsHide(page);
        })
        await test.step("Step 10: Verify 'Select Size' button is not displayed to Unauthenticated user.", async () => {
            await StudentOnlyPage.productSelectSizeButtonOfCardIsHide(page);
        })

    })

    test("Verify that clicking on the 'Log In to Order' button pops up Login dialog box.", { tag: '@regression @studentOnlyPage @unauthenticatedUser @PLP ' }, async () => {

        await test.step("Step 1: Verify to Student menu is visible on the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsVisible(page);
        })
        await test.step("Step 2: Verify to Hover on Student menu to the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify  View all is visible on Student menu.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsVisible(page);
        })
        await test.step("Step 4: Hover on View all is visible on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsHover(page);
        })
        await test.step("Step 5: Click on View all after hover on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsClickable(page);
        })
        await test.step("Step 6: Verify student only tag is displayed as filter applied.", async () => {
            await StudentOnlyPage.studentOnlyFilterAppliedLabelIsVisible(page);
        })
        await test.step("Step 7: Verify Product list is displayed.", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsVisible(page);
        })
        await test.step("Step 8: Verify 'Log in to order' button is displyed for all products card.", async () => {
            await StudentOnlyPage.loginToOrderBtnStudentOnlyIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Verify to click on Login in to order Button.", async () => {
            await StudentOnlyPage.loginToOrderBtnStudentOnlyIsClickable(page);
        })
        await test.step("Step 10: Verify the Login Dialog box is visible.", async () => {
            await StudentOnlyPage.loginDialogBoxStudentOnlyIsVisible(page);
        })

    })

    test("Verify that clicking on the 'Load More' button loads more products.", { tag: '@regression @studentOnlyPage @unauthenticatedUser  @PLP @loadMore ' }, async () => {

        await test.step("Step 1: Verify to Student menu is visible on the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsVisible(page);
        })
        await test.step("Step 2: Verify to Hover on Student menu to the header navigation.", async () => {
            await StudentOnlyPage.studentMenuIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify  View all is visible on Student menu.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsVisible(page);
        })
        await test.step("Step 4: Hover on View all is visible on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsHover(page);
        })
        await test.step("Step 5: Click on View all after hover on Student.", async () => {
            await StudentOnlyPage.studentOnlyViewAllIsClickable(page);
        })
        await test.step("Step 6: Verify student only tag is displayed as filter applied.", async () => {
            await StudentOnlyPage.studentOnlyFilterAppliedLabelIsVisible(page);
        })
        await test.step("Step 7: Verify Product list is displayed.", async () => {
            await StudentOnlyPage.studentOnlyProductImageAcneCreamIsVisible(page);
        })
        await test.step("Step 8: Verify to the scrolldown the page.", async () => {
            await StudentOnlyPage.loadMoreBtnStudentOnlyScrollDown(page);
        })
        await test.step("Step 9: Verify to the product Viewing count 'Viewing 9 out of 69 products' before clicks on load more.", async () => {
            await StudentOnlyPage.productscountBeforeClickLoadMoreStudentOnly(page);
        })
        await test.step("Step 10: Verify to the 'Load More' button is visible.", async () => {
            await StudentOnlyPage.loadMoreBtnStudentOnlyIsVisible(page);
        })
        await test.step("Step 11: Verify the 'Load More' button is clickable.", async () => {
            await StudentOnlyPage.loadMoreBtnStudentOnlyIsClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify the after click on 'Load More' button Please Wait is displayed.", async () => {
            await StudentOnlyPage.pleaseWaitButtonIsVisible(page);
        })
        await test.step("Step 13: Verify to the scrolldown the page.", async () => {
            await StudentOnlyPage.loadMoreBtnStudentOnlyScrollDown(page);
        })
        await test.step("Step 14: Verify to the product Viewing count 'Viewing 18 out of 69 products' after clicks on load more.", async () => {
            await StudentOnlyPage.productscountAfterClickLoadMoreStudentOnly(page);
        })

    })


})
// studentOnlyPage.test.ts
