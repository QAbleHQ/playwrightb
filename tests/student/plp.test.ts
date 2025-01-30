import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { CommonHelper } from "../../utils/commonHelper";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { PLPPage } from "../../pages/PLPPage";
import { MiniCartPage } from "../../pages/MiniCartPage";
import { CartPage } from "../../pages/CartPage";
import { PDPPage } from "../../pages/PDPPage";
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

test.describe("Student PLP TCs", async () => {
    test("Products List - Eligible Products: Verify that for products where the user is allowed to purchase, the following elements are displayed:", { tag: '@regression @student @plp ' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 6: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Visibility Shop Menu List", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 10: Click on Shop Menu List", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
        })
        await test.step("Step 11: Verify the Header of the Current Page is Displayed", async () => {
            await PLPPage.verifyTheHeaderOfCurrentPageIsVisible(page);
        })
        await test.step("Step 12: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 13: Visibility Acne Cream Product Price on the PLP", async () => {
            await PLPPage.visibilityPlpAcneCreamPrice(page);
        })
        await test.step("Step 14: Visibility Acne Cream Product Favourite Button on the PLP", async () => {
            await PLPPage.visibilityPlpAcneCreamFavouriteBtn(page);
        })
        await test.step("Step 15: Visibility Acne Cream Product Add To Cart Button on the PLP", async () => {
            await PLPPage.visibilityPlpAcneCreamAddToCartBtn(page);
        })
        await test.step("Step 16: Visibility Acne Gel with OmniSome® Product Select Size Button on the PLP", async () => {
            await PLPPage.visibilityplpAcneGelProductSelectSizeBtn(page);
        })
    })
    test("Products List - Favorite/Unfavorite: Verify that users can favorite and unfavorite products regardless of purchase eligibility.", { tag: '@regression @student @plp ' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 6: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Visibility Shop Menu List", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 10: Click on Shop Menu List", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
        })
        await test.step("Step 11: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 12: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 13: Visibility Favourite Button on the PLP", async () => {
            await PLPPage.visibilityPlpAcneCreamFavouriteBtn(page);
        })
        await test.step("Step 14: Visibility Favourite Button Outlined", async () => {
            await PLPPage.visibilityFavouriteOutlineBtn(page);
        })
        await test.step("Step 15: Click on Outlined Favourite Button to add the Product to Favourites", async () => {
            await PLPPage.clickFavouriteOutlineBtn(page);
        })
        await test.step("Step 16: Visibility of Added to Favourites Toast", async () => {
            await PLPPage.visibilityAddedToFavouriteToast(page);
        })
        await test.step("Step 17: Visibility Favourite Button Filled", async () => {
            await PLPPage.visibilityFavouriteFilledBtn(page);
        })
        await test.step("Step 18: Click on Filled Favourite Button to Remove the Product from Favourites", async () => {
            await PLPPage.clickFavouriteFilledBtn(page);
        })
        await test.step("Step 19: Visibility of Removed from Favourites Toast", async () => {
            await PLPPage.visibilityRemovedFromFavouriteToast(page);
        })
        await test.step("Step 20: Visibility Favourite Button Outlined", async () => {
            await PLPPage.visibilityFavouriteOutlineBtn(page);
        })
    })


    test(`Quick View - Eligible Products: Verify that student users are able to view product details for all items they are permitted to see on the PDP`, { tag: '@regression @student @plp ' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 6: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Visibility Shop Menu List", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 10: Click on Shop Menu List", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
        })
        await test.step("Step 11: Hover on another Element on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOnNavigationSearchButton(page);
        })
        await test.step("Step 12: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 13: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 14: Hover on Product Image on the PLP", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 15: Visibility of Quick View Button on the Product Image", async () => {
            await PLPPage.visibilityQuickViewButton(page);
        })
        await test.step("Step 16: Click on Quick View Button on the Product Image", async () => {
            await PLPPage.clickOnQuickViewButton(page);
        })
        await test.step("Step 17: Visibility of Quick View Dailog Box of the Product", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
        })
        await test.step("Step 18: Visibility of Quick View Product Image", async () => {
            await PLPPage.visibilityQuickViewProductImage(page);
        })
        await test.step("Step 19: Visibility of Quick View Product Name", async () => {
            await PLPPage.visibilityQuickViewProductName(page);
        })
        await test.step("Step 20: Visibility of Quick View Product SKU", async () => {
            await PLPPage.visibilityQuickViewProductSKU(page);
        })
        await test.step("Step 21: Visibility of Quick View Product Rating", async () => {
            await PLPPage.visibilityQuickViewProductRating(page);
        })
        await test.step("Step 22: Visibility of Quick View Product Price", async () => {
            await PLPPage.visibilityQuickViewProductPrice(page);
        })
        await test.step("Step 23: Visibility of Quick View Product Subscription Link", async () => {
            await PLPPage.visibilityQuickViewProductSubscriptionLink(page);
        })
        await test.step("Step 24: Visibility of Quick View Product Description", async () => {
            await PLPPage.visibilityQuickViewProductDescription(page);
        })
        await test.step("Step 25: Visibility of Quick View Product Quantity Selector", async () => {
            await PLPPage.visibilityQuickViewProductQTYSelector(page);
        })
        await test.step("Step 26: Visibility of Quick View Product Add to Cart Button", async () => {
            await PLPPage.visibilityQuickViewAddToCartBtn(page);
        })
        await test.step("Step 27: Visibility of Quick View Close Button", async () => {
            await PLPPage.visibilityQuickViewCloseBtn(page);
        })
    })

    test(`Quick View - Eligible Products: Verify that an error toast message should appear if student user has exceeded the quantity limit`, { tag: '@regression @student @plp ' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 6: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Visibility Shop Menu List", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 10: Click on Shop Menu List", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
        })
        await test.step("Step 11: Hover on another Element on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOnNavigationSearchButton(page);
        })
        await test.step("Step 12: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 13: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 14: Hover on Product Image on the PLP", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 15: Visibility of Quick View Button on the Product Image", async () => {
            await PLPPage.visibilityQuickViewButton(page);
        })
        await test.step("Step 16: Click on Quick View Button on the Product Image", async () => {
            await PLPPage.clickOnQuickViewButton(page);
        })
        await test.step("Step 17: Visibility of Quick View Dailog Box of the Product", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
        })
        await test.step("Step 18: Visibility of Quick View Quantity Selector of the Product", async () => {
            await PLPPage.visibilityQuickViewProductQTYSelector(page);
        })
        await test.step("Step 19: Increase the Product Count Multiple Times", async () => {
            await PLPPage.clickIncreaseButtonMultipleTimes(page, 4);
        })
        await test.step("Step 20: Visibility of Quick View Add to Cart Button", async () => {
            await PLPPage.visibilityQuickViewAddToCartBtn(page);
        })
        await test.step("Step 21: Click on Quick View Add to Cart Button", async () => {
            await PLPPage.clickOnQuickViewAddToCartBtn(page);
        })
        await test.step("Step 22: Visibility of Maximum Quantity Reached Toast", async () => {
            await PLPPage.visibilityMaximumQTYReachedToast(page);
        })
    })
    test(`Recently Viewed - Eligible Products: Verify that for products where the user is allowed to purchase, the following elements are displayed:`, { tag: '@regression @student @plp ' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 6: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Visibility Shop Menu List", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 10: Click on Shop Menu List", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
        })
        await test.step("Step 11: Hover on another Element on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOnNavigationSearchButton(page);
        })
        await test.step("Step 12: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 13: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 14: Click on Acne Cream Product on the PLP", async () => {
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 15: Verify the User is able to See the PDP of the Product", async () => {
            await PDPPage.visibilityProductHeading(page);
        })
        await test.step("Step 16: Visibility of the BreadCrumb on PDP", async () => {
            await PDPPage.visibilityPDPBreadCrumb(page);
        })
        await test.step("Step 17: Click on the All Products BreadCrumb on PDP", async () => {
            await PDPPage.clickPDPBreadCrumbAllProducts(page);
        })
        await test.step("Step 18: Scroll to Recently Viewed Product Section", async () => {
            await PLPPage.scrollToRecentlyViewedSection(page);
        })
        await test.step("Step 19: Visibility of Acne Cream in the Recently Viewed Section", async () => {
            await PLPPage.visibilityRecentlyViewedAcneCreamProduct(page);
        })
        await test.step("Step 20: Visibility of Acne Cream Price in Recently Viewed Section", async () => {
            await PLPPage.visibilityRecentlyViewedAcneCreamProductPrice(page);
        })
        await test.step("Step 21: Visibility of Acne Cream Add To Cart Button in Recently Viewed Section", async () => {
            await PLPPage.visibilityRecentlyViewedAcneCreamProductAddToCartBtn(page);
        })
        await test.step("Step 22: Scroll to Acne Gel Product on the PLP", async () => {
            await PLPPage.scrollToAcneGellOnPLP(page);
        })
        await test.step("Step 23: Click on Acne Gel Product on the PLP", async () => {
            await PLPPage.clickOnAcneGellOnPLP(page);
        })
        await test.step("Step 24: Verify the User is able to See the PDP of the Product", async () => {
            await PDPPage.visibilityProductHeading(page);
        })
        await test.step("Step 25: Visibility of the BreadCrumb on PDP", async () => {
            await PDPPage.visibilityPDPBreadCrumb(page);
        })
        await test.step("Step 26: Click on the All Products BreadCrumb on PDP", async () => {
            await PDPPage.clickPDPBreadCrumbAllProducts(page);
        })
        await test.step("Step 27: Scroll to Recently Viewed Product Section", async () => {
            await PLPPage.scrollToRecentlyViewedSection(page);
        })
        await test.step("Step 28: Visibility Acne Gel with OmniSome® In the Recently Viewed Section", async () => {
            await PLPPage.visibilityRecentlyViewedAcneGelwithOmniSomeProduct(page);
        })
        await test.step("Step 29: Visibility Acne Gel with OmniSome® Select Size Button in the Recentlty Viewed Section", async () => {
            await PLPPage.visibilityRecentlyViewedAcneGelwithOmniSomeSelectSizeBtn(page);
        })
    })
    test(`Quick View - Eligible Products: Verify that the "Quick View" button appears when hovering over a product image on the PLP and the Quick View modal displayed when clicking on it.`, { tag: '@regression @student @plp ' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 6: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Visibility Shop Menu List", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 10: Click on Shop Menu List", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
        })
        await test.step("Step 11: Hover on another Element on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOnNavigationSearchButton(page);
        })
        await test.step("Step 12: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 13: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 14: Hover on Product Image on the PLP", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 15: Visibility of Quick View Button on the Product Image", async () => {
            await PLPPage.visibilityQuickViewButton(page);
        })
        await test.step("Step 16: Click on Quick View Button on the Product Image", async () => {
            await PLPPage.clickOnQuickViewButton(page);
        })
        await test.step("Step 17: Visibility of Quick View Dailog Box of the Product", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
        })
    })
    test(`Quick View - Eligible Products: Verify that student users are able to add the products that they are qualified to purchase to the cart`, { tag: '@regression @student @plp ' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 6: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Visibility Shop Menu List", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 10: Click on Shop Menu List", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
        })
        await test.step("Step 11: Hover on another Element on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOnNavigationSearchButton(page);
        })
        await test.step("Step 12: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 13: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.hoverOnactiveBroadSpectrumSPF45ProductImg(page);
        })
        await test.step("Step 14: Click on Quick View Button on the Product Image", async () => {
            await PLPPage.clickQuickViewBtnActiveBroadSpectrumSPF45Btn(page);
        })
        await test.step("Step 15: Visibility of Quick View Dailog Box of the Product", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
        })
        await test.step("Step 16: Click on Quick View Product Add to Cart Button", async () => {
            await page.waitForTimeout(2000)
            await PLPPage.clickAddToCartBtnActiveBroadSpectrumSPF45Btn(page);
        })
        await test.step("Step 17: Click on Quick View Close Button", async () => {
            await PLPPage.clickOnQuickViewCloseBtn(page);
        })
        await test.step("Step 18: Verify the Count of Mini Cart", async () => {
            await MiniCartPage.verifyMiniCartIconAndMiniCartCount(page);
        })
        await test.step("Step 19: Hover on Mini Cart Icon", async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page);
        })
        await test.step("Step 20: Click on View Cart Button", async () => {
            await MiniCartPage.viewCartButtonClickable(page);
        })
        await test.step("Step 21: Visibility product on Cart", async () => {
            await CartPage.visibilityItemSection(page);
        })
    })

    test(`Recently Viewed - Eligible Products: Verify that an error toast message should appear if student user has exceeded the quantity limit`, { tag: '@regression @student @plp ' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 6: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Visibility Shop Menu List", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 10: Click on Shop Menu List", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
        })
        await test.step("Step 11: Hover on another Element on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOnNavigationSearchButton(page);
        })
        await test.step("Step 12: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 13: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 14: Click on Acne Cream Product on the PLP", async () => {
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 15: Verify the User is able to See the PDP of the Product", async () => {
            await PDPPage.visibilityProductHeading(page);
        })
        await test.step("Step 16: Visibility of the BreadCrumb on PDP", async () => {
            await PDPPage.visibilityPDPBreadCrumb(page);
        })
        await test.step("Step 17: Click on the All Products BreadCrumb on PDP", async () => {
            await PDPPage.clickPDPBreadCrumbAllProducts(page);
        })
        await test.step("Step 18: Scroll to Recently Viewed Product Section", async () => {
            await PLPPage.scrollToRecentlyViewedSection(page);
        })
        await test.step("Step 19: Visibility of Acne Cream in the Recently Viewed Section", async () => {
            await PLPPage.visibilityRecentlyViewedAcneCreamProduct(page);
        })
        await test.step("Step 20: Visibility Acne Cream Product in Recently Viewed Section", async () => {
            await PLPPage.visibilityRecentlyViewedAcneCreamProduct(page);
        })
        await test.step("Step 21: Visibility of Acne Cream Add To Cart Button in Recently Viewed Section", async () => {
            await PLPPage.visibilityRecentlyViewedAcneCreamProductAddToCartBtn(page);
        })
        await test.step("Step 22: Click on Add To Cart Button of Acne Cream Multiple Times", async () => {
            await PLPPage.clickOnAddToCartButtonRecentlyViewed(page, 4);
        })
        await test.step("Step 23: Visibility Maximum Quantity Reached Toast", async () => {
            await PLPPage.visibilityMaximumQTYReachedToast(page);
        })
    })

    test(`Product List - Eligible Products: Verify that an error toast message should appear if student user has exceeded the quantity limit`, { tag: '@regression @student @plp' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 6: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Visibility Shop Menu List", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 10: Click on Shop Menu List", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
        })
        await test.step("Step 11: Hover on another Element on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOnNavigationSearchButton(page);
        })
        await test.step("Step 12: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 13: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 14: Click on Add to Cart Button of Acne Cream on the PLP", async () => {
            await PLPPage.clickOnPlpAcneCreamAddToCartBtn(page, 4);
        })
        await test.step("Step 15: Visibility Maximum Quantity Reached Toast", async () => {
            await PLPPage.visibilityMaximumQTYReachedToast(page);
        })
    })
})

