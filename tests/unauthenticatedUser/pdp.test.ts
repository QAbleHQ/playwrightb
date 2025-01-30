import { test, Page, chromium, BrowserContext } from "@playwright/test"
import { PDPPage } from "../../pages/PDPPage";
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

test.describe("Unauthenticated User PDP.", async () => {
    test("Verify that clicking on the 'Log In' button pops up Login dialog box.", { tag: '@regression @unauthenticatedUser @smoke @pdp @Login ' }, async () => {

        await test.step("Step 1: Verify Shop is visible on Header navigation menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsVisible(page);
        })
        await test.step("Step 2: Hover on shop menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify View all is viisible in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsVisible(page);
        })
        await test.step("Step 4: Verify to Hover on View all in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsHover(page);
        })
        await test.step("Step 5: Verify to Ckick on the View all under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Product listing page and Verify with BreadCrumb.", async () => {
            await PDPPage.allproductBreadCrumbIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 7: Verify all Product list is visible.", async () => {
            await PDPPage.allProductsTextIsVisible(page);
        })
        await test.step("Step 8: Verify to hover on Product [Acne Cream].", async () => {
            await PDPPage.acneCreamProcutImagePDPIsHover(page);
        })
        await test.step("Step 9: Verify to click on Acne Cream.", async () => {
            await PDPPage.acneCreamProcutImagePDPIsClickable(page);
        })
        await test.step("Step 10: Verify user is redirect on Product (Acne Cream) details page.", async () => {
            await PDPPage.acneCreamDetailsPagePDPIsVisible(page);
        })
        await test.step("Step 11: Verify to scroll down the page upto Login button.", async () => {
            await PDPPage.scrollUpToLoginButton(page);
        })
        await test.step("Step 12: Verify Login button is visible on Product (Acne Cream) details page.", async () => {
            await PDPPage.acneCreamLoginBtnPDPIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13: Verify click on Login button.", async () => {
            await PDPPage.acneCreamLoginBtnPDPIsClickable(page);
        })
        await test.step("Step 14: Verify login dialog is visible.", async () => {
            await PDPPage.acneCreamLoginDialogPDPIsVisible(page);
            await page.waitForTimeout(300);
        })

    })
    test("Verify that clicking on the 'Join' button redirects users to the registration page.", { tag: '@regression @unauthenticatedUser @smoke @pdp @Login ' }, async () => {

        await test.step("Step 1: Verify Shop is visible on Header navigation menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsVisible(page);
        })
        await test.step("Step 2: Hover on shop menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify View all is viisible in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsVisible(page);
        })
        await test.step("Step 4: Verify to Hover on View all in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsHover(page);
        })
        await test.step("Step 5: Verify to Ckick on the View all under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Product listing page and Verify with BreadCrumb.", async () => {
            await PDPPage.allproductBreadCrumbIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 7: Verify all Product list is visible.", async () => {
            await PDPPage.allProductsTextIsVisible(page);
        })
        await test.step("Step 8: Verify to hover on Product [Acne Cream].", async () => {
            await PDPPage.acneCreamProcutImagePDPIsHover(page);
        })
        await test.step("Step 9: Verify to click on Acne Cream.", async () => {
            await PDPPage.acneCreamProcutImagePDPIsClickable(page);
        })
        await test.step("Step 10: Verify user is redirect on Product (Acne Cream) details page.", async () => {
            await PDPPage.acneCreamDetailsPagePDPIsVisible(page);
        })
        await test.step("Step 11: Verify to scroll down the page upto Join button.", async () => {
            await PDPPage.scrollDownUpToJoinButton(page);
        })
        await test.step("Step 12: Verify Join button is visible on Product (Acne Cream) details page.", async () => {
            await PDPPage.acnecreamJoinBtnPDPIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13: Verify click on Join button.", async () => {
            await PDPPage.acnecreamJoinBtnPDPIsClickable(page);
        })
        await test.step("Step 14: Verify Regestration page is open while user click on Join.", async () => {
            await PDPPage.registerYourProfilePagePDPIsVisible(page);
            await page.waitForTimeout(300);
        })

    })
    test("Verify that unauthenticated users are not able to view the price, favorite/unfavorite and purchase the product.", { tag: '@regression @unauthenticatedUser @smoke @pdp @Join  ' }, async () => {

        await test.step("Step 1: Verify Shop is visible on Header navigation menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsVisible(page);
        })
        await test.step("Step 2: Hover on shop menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify View all is viisible in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsVisible(page);
        })
        await test.step("Step 4: Verify to Hover on View all in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsHover(page);
        })
        await test.step("Step 5: Verify to Ckick on the View all under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Product listing page and Verify with BreadCrumb.", async () => {
            await PDPPage.allproductBreadCrumbIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 7: Verify all Product list is visible.", async () => {
            await PDPPage.allProductsTextIsVisible(page);
        })
        await test.step("Step 8: Verify to hover on Product [Acne Cream].", async () => {
            await PDPPage.acneCreamProcutImagePDPIsHover(page);
        })
        await test.step("Step 9: Verify to click on Acne Cream.", async () => {
            await PDPPage.acneCreamProcutImagePDPIsClickable(page);
        })
        await test.step("Step 10: Verify user is redirect on Product (Acne Cream) details page.", async () => {
            await PDPPage.acneCreamDetailsPagePDPIsVisible(page);
        })
        await test.step("Step 11: Verify that unauthenticated users are not able to view the price.", async () => {
            await PDPPage.productPricePDPIsHide(page);
        })
        await test.step("Step 12: Verify that unauthenticated users are not able to view the favorite/unfavorite.", async () => {
            await PDPPage.favouriteIconPDPIsHide(page);
        })
        await test.step("Step 13: Verify that unauthenticated users are not able to view the purchase the course.", async () => {
            await PDPPage.addtoCartBtnPDPHide(page);
        })

    })
    test("Verify that 'Log In' and 'Join' buttons are displayed for all products, regardless of stock availability, instead of 'Add to Cart' buttons..", { tag: '@regression @unauthenticatedUser @smoke @pdp @Join ' }, async () => {

        await test.step("Step 1: Verify Shop is visible on Header navigation menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsVisible(page);
        })
        await test.step("Step 2: Hover on shop menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify View all is viisible in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsVisible(page);
        })
        await test.step("Step 4: Verify to Hover on View all in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsHover(page);
        })
        await test.step("Step 5: Verify to Ckick on the View all under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Product listing page and Verify with BreadCrumb.", async () => {
            await PDPPage.allproductBreadCrumbIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 7: Verify all Product list is visible.", async () => {
            await PDPPage.allProductsTextIsVisible(page);
        })
        await test.step("Step 8: Verify to hover on Product [Acne Cream].", async () => {
            await PDPPage.acneCreamProcutImagePDPIsHover(page);
        })
        await test.step("Step 9: Verify to click on Acne Cream.", async () => {
            await PDPPage.acneCreamProcutImagePDPIsClickable(page);
        })
        await test.step("Step 10: Verify user is redirect on Product (Acne Cream) details page.", async () => {
            await PDPPage.acneCreamDetailsPagePDPIsVisible(page);
        })
        await test.step("Step 11: Verify Login button is visible on Product (Acne Cream) details page.", async () => {
            await PDPPage.acneCreamLoginBtnPDPIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify Join button is visible on Product (Acne Cream) details page.", async () => {
            await PDPPage.acnecreamJoinBtnPDPIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13: Verify that unauthenticated users are not able to view the purchase the course.", async () => {
            await PDPPage.addtoCartBtnPDPHide(page);
        })

    })
    test("Verify that clicking on the 'Log In to Order' button pops up Login dialog box for Related Products.", { tag: '@regression @unauthenticatedUser @smoke @pdp @Join  @relatedProduct ' }, async () => {

        await test.step("Step 1: Verify Shop is visible on Header navigation menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsVisible(page);
        })
        await test.step("Step 2: Hover on shop menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify View all is viisible in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsVisible(page);
        })
        await test.step("Step 4: Verify to Hover on View all in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsHover(page);
        })
        await test.step("Step 5: Verify to Ckick on the View all under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Product listing page and Verify with BreadCrumb.", async () => {
            await PDPPage.allproductBreadCrumbIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 7: Verify all Product list is visible.", async () => {
            await PDPPage.allProductsTextIsVisible(page);
        })
        await test.step("Step 8: Verify to hover on Product [Acne Cream].", async () => {
            await PDPPage.acneCreamProcutImagePDPIsHover(page);
        })
        await test.step("Step 9: Verify to click on Acne Cream.", async () => {
            await PDPPage.acneCreamProcutImagePDPIsClickable(page);
        })
        await test.step("Step 10: Verify user is redirect on Product (Acne Cream) details page.", async () => {
            await PDPPage.acneCreamDetailsPagePDPIsVisible(page);
        })
        await test.step("Step 11: Verify to scroll down the page upto Related Products.", async () => {
            await PDPPage.scrollDownUpTologinIntoOrderButtonPDP(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify Related Products are visible.", async () => {
            await PDPPage.relatedProductsAcneGelPDPIsVisible(page);
        })
        await test.step("Step 13: Verify 'Login in to order' Button is visible on product card.", async () => {
            await PDPPage.loginIntoOrderButtonPDPIsVisible(page);
        })
        await test.step("Step 14: Verify to click on 'Login in to order' Button.", async () => {
            await PDPPage.loginIntoOrderButtonPDPIsClickable(page);
        })
        await test.step("Step 15: Verify to click on 'Login in to order' Button Login Dialog box is open.", async () => {
            await PDPPage.acneCreamLoginDialogPDPIsVisible(page);
        })


    })
    test("Verify that unauthenticated users are not able to view the price. for Related Products", { tag: '@regression @unauthenticatedUser @smoke @pdp @Join  @relatedProduct ' }, async () => {

        await test.step("Step 1: Verify Shop is visible on Header navigation menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsVisible(page);
        })
        await test.step("Step 2: Hover on shop menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify View all is viisible in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsVisible(page);
        })
        await test.step("Step 4: Verify to Hover on View all in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsHover(page);
        })
        await test.step("Step 5: Verify to Ckick on the View all under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Product listing page and Verify with BreadCrumb.", async () => {
            await PDPPage.allproductBreadCrumbIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 7: Verify all Product list is visible.", async () => {
            await PDPPage.allProductsTextIsVisible(page);
        })
        await test.step("Step 8: Verify to hover on Product [Acne Cream].", async () => {
            await PDPPage.acneCreamProcutImagePDPIsHover(page);
        })
        await test.step("Step 9: Verify to click on Acne Cream.", async () => {
            await PDPPage.acneCreamProcutImagePDPIsClickable(page);
        })
        await test.step("Step 10: Verify user is redirect on Product (Acne Cream) details page.", async () => {
            await PDPPage.acneCreamDetailsPagePDPIsVisible(page);
        })
        await test.step("Step 11: Verify to scroll down the page upto Related Products.", async () => {
            await PDPPage.scrollDownUpTologinIntoOrderButtonPDP(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify Related Products are visible.", async () => {
            await PDPPage.relatedProductsAcneGelPDPIsVisible(page);
        })
        await test.step("Step 13: Verify Products Price is not visible on product card.", async () => {
            await PDPPage.relatedProductPriceAcneGelIsHide(page);
        })

    })
    test("Verify that 'Log in to order' button is displayed for all products, regardless of stock availability, instead of 'Add to Cart' or 'Select Size' or 'Notify Me' buttons For Related Products.", { tag: '@regression @unauthenticatedUser @smoke @pdp @Join @newTestCase @relatedProduct' }, async () => {

        await test.step("Step 1: Verify Shop is visible on Header navigation menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsVisible(page);
        })
        await test.step("Step 2: Hover on shop menu.", async () => {
            await PDPPage.shopMenuListHeaderPDPIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify View all is viisible in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsVisible(page);
        })
        await test.step("Step 4: Verify to Hover on View all in Daily care product under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsHover(page);
        })
        await test.step("Step 5: Verify to Ckick on the View all under the Shop.", async () => {
            await PDPPage.viewAllDailycarePDPIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Product listing page and Verify with BreadCrumb.", async () => {
            await PDPPage.allproductBreadCrumbIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 7: Verify all Product list is visible.", async () => {
            await PDPPage.allProductsTextIsVisible(page);
        })
        await test.step("Step 8: Verify to hover on Product [Acne Cream].", async () => {
            await PDPPage.acneCreamProcutImagePDPIsHover(page);
        })
        await test.step("Step 9: Verify to click on Acne Cream.", async () => {
            await PDPPage.acneCreamProcutImagePDPIsClickable(page);
        })
        await test.step("Step 10: Verify user is redirect on Product (Acne Cream) details page.", async () => {
            await PDPPage.acneCreamDetailsPagePDPIsVisible(page);
        })
        await test.step("Step 11: Verify to scroll down the page upto Related Products.", async () => {
            await PDPPage.scrollDownUpTologinIntoOrderButtonPDP(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify Related Products are visible.", async () => {
            await PDPPage.relatedProductsAcneGelPDPIsVisible(page);
        })
        await test.step("Step 13: Verify Login to Order button is visible on product card.", async () => {
            await PDPPage.loginIntoOrderButtonPDPIsVisible(page);
        })
        await test.step("Step 14: Verify Add to cart button is not visible on product card.", async () => {
            await PDPPage.relatedProductPriceAcneGelIsHide(page);
        })

    })

})
