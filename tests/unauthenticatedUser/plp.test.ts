import { test, chromium, Page, BrowserContext } from "@playwright/test"
import { PLPPage } from "../../pages/PLPPage"
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

test.describe("Verify that the 'Quick View' button does not appear when hovering over product image.", async () => {
    test("Verify that the 'Quick View' button does not appear when hovering over product image.", { tag: '@regression @smoke @productListingPage @unauthenticatedUser ' }, async () => {

        await test.step("Step 1: Verify click on shop menu to the home Page.", async () => {
            await PLPPage.clickOnShopMenuUNuIsClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 2: Hover over any other place to focous out from menu.", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
        })
        await test.step("Step 3: Verify user must be on the Plp Page[Unauthenticated].", async () => {
            await PLPPage.plpPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 4: Verify to visible product image.", async () => {
            await PLPPage.verifyProductImageIsVisible(page);
        })
        await test.step("Step 5: Verify to Hover on product image.", async () => {
            await PLPPage.productImageUNuHover(page);
        })
        await test.step("Step 6: Verify Quick View button is not displayed while user hover on product.", async () => {
            await PLPPage.hideQuickViewBtn(page);
        })

    })
    test("Verify that unauthenticated users are not able to view the price and favorite/unfavorite products.", { tag: '@regression @smoke @productListingPage @unauthenticatedUser  ' }, async () => {

        await test.step("Step 1: Verify click on shop menu to the home Page.", async () => {
            await PLPPage.clickOnShopMenuUNuIsClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 2: Hover over any other place to focous out from menu.", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
        })
        await test.step("Step 3: Verify user must be on the Plp Page[Unauthenticated].", async () => {
            await PLPPage.plpPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 4: Verify to visible product image.", async () => {
            await PLPPage.verifyProductImageIsVisible(page);
        })
        await test.step("Step 5: Verify Unauthenticated user are not able to view product price.", async () => {
            await PLPPage.hidePLPPageProductPrice(page);
        })
        await test.step("Step 6: Verify Unauthenticated user are not able to view favorite/unfavorite.", async () => {
            await PLPPage.hidePLPPageFavouriteIcon(page);
        })

    })
    test("Verify that 'Log in to order' button is displayed for all products, regardless of stock availability, instead of 'Add to Cart' or 'Select Size' buttons.", { tag: '@regression @smoke @productListingPage @unauthenticatedUser ' }, async () => {

        await test.step("Step 1: Verify click on shop menu to the home Page.", async () => {
            await PLPPage.clickOnShopMenuUNuIsClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 2: Hover over any other place to focous out from menu.", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
        })
        await test.step("Step 2: Verify user must be on the Plp Page[Unauthenticated].", async () => {
            await PLPPage.plpPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify to visible product image.", async () => {
            await PLPPage.verifyProductImageIsVisible(page);
        })
        await test.step("Step 4: Verify 'Log in to order' button is displyed for all products card.", async () => {
            await PLPPage.loginToOrderBtnIsVisible(page);
        })
        await test.step("Step 5: Verify 'Add to cart' button is not displayed to Unauthenticated user.", async () => {
            await PLPPage.hideAddToCartBtn(page);
        })
        await test.step("Step 6: Verify 'Select Size' button is not displayed to Unauthenticated user.", async () => {
            await PLPPage.hideSelectSizeBtn(page);
        })
        await test.step("Step 7: Verify 'Notify Me' button is not displayed to Unauthenticated user.", async () => {
            await PLPPage.hideNotifyMeBtn(page);
        })

    })
    test("Verify that clicking on the 'Log In to Order' button pops up Login dialog box.", { tag: '@regression @smoke @productListingPage @unauthenticatedUser ' }, async () => {

        await test.step("Step 1: Verify click on shop menu to the home Page.", async () => {
            await PLPPage.clickOnShopMenuUNuIsClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 2: Hover over any other place to focous out from menu.", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
        })
        await test.step("Step 3: Verify user must be on the Plp Page[Unauthenticated].", async () => {
            await PLPPage.plpPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 4: Verify to product image is visible.", async () => {
            await PLPPage.verifyProductImageIsVisible(page);
        })
        await test.step("Step 5: Verify the 'Login in to order' button is visible.", async () => {
            await PLPPage.loginToOrderBtnIsVisible(page);
        })
        await test.step("Step 6: Verify to click on the 'Login in to order' button.", async () => {
            await PLPPage.loginToOrderBtnIsClickable(page);
        })
        await test.step("Step 7: Verify Login dialog is visible.", async () => {
            await PLPPage.loginDialogBoxIsVisible(page);
            await page.waitForTimeout(3000);
        })

    })
    test("Verify that clicking on the 'Load More' button loads more products.", { tag: '@regression @smoke @productListingPage @unauthenticatedUser @LoadMore ' }, async () => {

        await test.step("Step 1: Verify click on shop menu to the home Page.", async () => {
            await PLPPage.clickOnShopMenuUNuIsClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 2: Hover over any other place to focous out from menu.", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
        })
        await test.step("Step 3: Verify user must be on the Plp Page[Unauthenticated].", async () => {
            await PLPPage.plpPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 4: Verify to the scrolldown the page.", async () => {
            await PLPPage.scrollDownPageUptoLoadMoreBtn(page);
        })
        await test.step("Step 5: Verify to the product Viewing count 'Viewing 9 out of 69 products' before clicks on load more.", async () => {
            await PLPPage.verifyProductCountBeforeClickLoadMore(page);
        })
        await test.step("Step 6: Verify to the 'Load More' button is visible.", async () => {
            await PLPPage.loadMoreBtnIsVisible(page);
        })
        await test.step("Step 7: Verify the 'Load More' button is clickable.", async () => {
            await PLPPage.loadMoreBtnIsClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 8: Verify to the scrolldown the page.", async () => {
            await PLPPage.scrollDownPageUptoLoadMoreBtn(page);
        })
        await test.step("Step 9: Verify to the product Viewing count 'Viewing 18 out of 69 products' after clicks on load more.", async () => {
            await PLPPage.verifyProductCountAfterClickLoadMore(page);
        })

    })
    test("Verify that clicking on the product image redirects users to PDP.", { tag: '@regression @smoke @productListingPage @unauthenticatedUser  @redirectPDP ' }, async () => {

        await test.step("Step 1: Verify click on shop menu to the home Page.", async () => {
            await PLPPage.clickOnShopMenuUNuIsClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 2: Hover over any other place to focous out from menu.", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
        })
        await test.step("Step 3: Verify user must be on the Plp Page[Unauthenticated].", async () => {
            await PLPPage.plpPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 4: Verify to the product image is visible.", async () => {
            await PLPPage.verifyProductImageIsVisible(page);
        })
        await test.step("Step 5: Verify to the product image is clickable.", async () => {
            await PLPPage.verifyProductImageIsClickable(page);
        })
        await test.step("Step 6: Verify page is redirect on PDP while user clicks on product image.", async () => {
            await PLPPage.pDPPageIsVisible(page);
            await page.waitForTimeout(3000);
        })

    })

    test("Verify that unauthenticated users are not able to view the price.", { tag: '@regression @smoke @productListingPage @unauthenticatedUser ' }, async () => {

        await test.step("Step 1: Verify click on shop menu to the home Page.", async () => {
            await PLPPage.clickOnShopMenuUNuIsClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 2: Hover over any other place to focous out from menu.", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
        })
        await test.step("Step 3: Verify user must be on the Plp Page[Unauthenticated].", async () => {
            await PLPPage.plpPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 4: Verify to product image is visible.", async () => {
            await PLPPage.verifyProductImageIsVisible(page);
        })
        await test.step("Step 5: Verify to the product price is not visible on product card.", async () => {
            await PLPPage.hidePLPPageProductPrice(page);
        })

    })
    test("Verify that 'Log in to order' button is displayed for all products, regardless of stock availability, instead of 'Add to Cart' or 'Select Size' or 'Notify Me' buttons.", { tag: '@regression @smoke @productListingPage @unauthenticatedUser ' }, async () => {

        await test.step("Step 1: Verify click on shop menu to the home Page.", async () => {
            await PLPPage.clickOnShopMenuUNuIsClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 2: Hover over any other place to focous out from menu.", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
        })
        await test.step("Step 3: Verify user must be on the Plp Page[Unauthenticated].", async () => {
            await PLPPage.plpPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 4: Verify to the product image is clickable.", async () => {
            await PLPPage.verifyProductImageIsClickable(page);
        })
        await test.step("Step 5: Verify page is redirect on PDP while user clicks on product image.", async () => {
            await PLPPage.pDPPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 6: Verify click on shop menu to the home Page.", async () => {
            await PLPPage.clickOnShopMenuUNuIsClickable(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 7: Hover over any other place to focous out from menu.", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
        })
        await test.step("Step 8: Verify to the scrolldown the page.", async () => {
            await PLPPage.scrollDownUptoProductCard(page);
        })
        await test.step("Step 9: Verify to product card is visible.", async () => {
            await PLPPage.productCardUNuVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 10: Verify Login in to order button is visible on product card.", async () => {
            await PLPPage.recentViewProductLogintoOrderBtnUNuIsVisible(page);
        })
        await test.step("Step 11: Verify Add to cart button is not visible on product card.", async () => {
            await PLPPage.recentViewProductAddtocartBtnUNuHide(page);
        })
        await test.step("Step 12: Verify Select Size button is not visible on product card.", async () => {
            await PLPPage.recentViewProductSelectSizeBtnUNuHide(page);
        })
        await test.step("Step 13: Verify Notify Me button is not visible on product card.", async () => {
            await PLPPage.recentViewProductNotifyMeBtnUNuHide(page);
        })

    })
    test("Verify that clicking on the 'Log In to Order' button.", { tag: '@regression @smoke @productListingPage @unauthenticatedUser ' }, async () => {

        await test.step("Step 1: Verify click on shop menu to the home Page.", async () => {
            await PLPPage.clickOnShopMenuUNuIsClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 2: Hover over any other place to focous out from menu.", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
        })
        await test.step("Step 3: Verify user must be on the Plp Page[Unauthenticated].", async () => {
            await PLPPage.plpPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 4: Verify to the product image is clickable.", async () => {
            await PLPPage.verifyProductImageIsClickable(page);
        })
        await test.step("Step 5: Verify page is redirect on PDP while user clicks on product image.", async () => {
            await PLPPage.pDPPageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 6: Verify click on shop menu to the home Page.", async () => {
            await PLPPage.clickOnShopMenuUNuIsClickable(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 7: Hover over any other place to focous out from menu.", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
        })
        await test.step("Step 8: Verify to the scrolldown the page.", async () => {
            await PLPPage.scrollDownUptoProductCard(page);
        })
        await test.step("Step 9: Verify to product card is visible.", async () => {
            await PLPPage.productCardUNuVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 6: Verify Login in to order button is visible on product card.", async () => {
            await PLPPage.recentViewProductLogintoOrderBtnUNuIsVisible(page);
        })
        await test.step("Step 7: Verify to click on Login in to order button.", async () => {
            await PLPPage.recentViewProductLogintoOrderBtnUNuIsClickable(page);
        })
        await test.step("Step 8: Verify login dialog box is open while user click on login in to order button.", async () => {
            await PLPPage.recentViewProductLoginDialogBoxUNuIsVisible(page);
        })

    })
})

