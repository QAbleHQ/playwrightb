import { test, chromium, Page, BrowserContext } from "@playwright/test"
import { PLPPage } from "../../pages/PLPPage";
import { PDPPage } from "../../pages/PDPPage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage"
import { CommonHelper } from "../../utils/commonHelper";
import { HomePage } from "../../pages/HomePage";
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

test.describe("Unauthorised User PLP:", async () => {
    test("Verify that for products where the user is allowed to purchase, the following elements are displayed:", { tag: '@regression @smoke @unauthorizedUser @plp @productListingPage' }, async () => {

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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.licEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000);
        })
        await test.step("Step 9: Navigate to the product listing ", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Verify the BreadCrumb is visible on home page ", async () => {
            await PLPPage.verifyTheBreadCrumbHomeButtonIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify the BreadCrumb has link", async () => {
            await PLPPage.getTheBreadCrumbHomeButtonText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify to the hover on PCASkin logo", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13: Verify to the scroll down the page", async () => {
            await PLPPage.scrollToAcneGellOnPLP(page);
        })
        await test.step('Step 14: Verify the product Price', async () => {
            await PLPPage.productPriceVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15: Veriify to the Favourite Button is visible ", async () => {
            await PLPPage.favouriteBtnIsVisible(page);
        })
        await test.step("Step 16: Veriify to the Add to Cart button is displayed  (Single variant product) ", async () => {
            await PLPPage.verifyAddToCartBtnIsVisible(page);
        })
        await test.step("Step 17: Verify Select Size button is visible (Multiple variants product) ", async () => {
            await PLPPage.selectSizeBtnIsVisible(page);
        })
        //Right now Notify me button is not available in any products
        // await test.step("Step 18: Verify to Notify me Button is visible) ", async () => {
        //     await PLPPage.notifyMeButtonVisible(page);
        // })
    })

    test("Verify that users can favorite and unfavorite products regardless of purchase eligibility.", { tag: '@regression @smoke @unauthorizedUser @plp @productListingPage' }, async () => {

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
            await page.waitForTimeout(8000);
        })
        await test.step("Step 9: Navigate to the product listing ", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Verify the BreadCrumb is visible on home page ", async () => {
            await PLPPage.verifyTheBreadCrumbHomeButtonIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify the BreadCrumb has link", async () => {
            await PLPPage.getTheBreadCrumbHomeButtonText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify to the hover on PCASkin logo", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13: Verify to the scroll down the page", async () => {
            await PLPPage.scrollDownUpTomessageinsteadoffAddToCartandSelectSize(page);
        })
        await test.step("Step 14: Veriify to the Favourite Button is visible for products regardless of purchase eligibility ", async () => {
            await PLPPage.regardlessFavouriteBtnIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15: Veriify to the Hover on favourite button for products regardless of purchase eligibility ", async () => {
            await PLPPage.hoverOverRegardlessFavouriteBtn(page);
        })
        await test.step("Step 16: Veriify to the click on Favourite Button for products regardless of purchase eligibility ", async () => {
            await PLPPage.regardlessFavouriteBtnClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17: Veriify to the Toast message is displayed while user click on favourite for products regardless of purchase eligibility  ", async () => {
            await PLPPage.regardlessFavouriteSelectToastIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 18: Veriify to the close Button is visible on Toast message Favourite time for products regardless of purchase eligibility", async () => {
            await PLPPage.regardlessFavouriteSelectToastCloseBtnIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 19: Veriify to the click again on Favourite Button to unfavourite for products regardless of purchase eligibility ", async () => {
            await PLPPage.regardlessFavouriteBtnClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 20: Veriify to the Toast message is displayed while user click on unselect favourite for products regardless of purchase eligibility ", async () => {
            await PLPPage.regardlessFavouriteUnSelectToastIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 21: Veriify to the close Button is visible on Toast message UnFavourite time for products regardless of purchase eligibility", async () => {
            await PLPPage.regardlessFavouriteUnSelectToastCloseBtnIsVisible(page);
            await page.waitForTimeout(3000);
        })
    })

    test("Verify that the 'Quick View' button appears when hovering over a product image on the PLP and the Quick View modal displayed when clicking on it.", { tag: '@regression @smoke @QuickView @unauthorizedUser @plp @productListingPage' }, async () => {

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
            await page.waitForTimeout(8000);
        })
        await test.step("Step 9: Navigate to the product listing ", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Verify the BreadCrumb is visible on home page ", async () => {
            await PLPPage.verifyTheBreadCrumbHomeButtonIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify to the hover on PCASkin logo", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify to the scroll down the page", async () => {
            await PLPPage.scrollDownUpTomessageinsteadoffAddToCartandSelectSize(page);
        })
        await test.step("Step 13: Verify to the hover on the Product Image. ", async () => {
            await PLPPage.hoverOnQuickViewButtonProductImage(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14: Verify QuickView Button is visible while user hover on image ", async () => {
            await PLPPage.quickViewButtonVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15: Verify to click on View Button", async () => {
            await PLPPage.quickViewButtonClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 16: Verify Dialog is open while user click on View Button", async () => {
            await PLPPage.quickViewdailogBoxOfProductvisible(page);
        })
    })

    test("Must be a verified professional to access wholesale pricing for ristricted product (in QuickView Dialog).", { tag: '@regression @smoke @unauthorizedUser @plp @productListingPage' }, async () => {

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
            await page.waitForTimeout(8000);
        })
        await test.step("Step 9: Navigate to the product listing ", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Verify the BreadCrumb is visible on home page ", async () => {
            await PLPPage.verifyTheBreadCrumbHomeButtonIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify to the hover on PCASkin logo", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify to the scroll down the page", async () => {
            await PLPPage.scrollDownUpTomessageinsteadoffAddToCartandSelectSize(page);
        })
        await test.step("Step 13: Verify to the hover on the Product Image. ", async () => {
            await PLPPage.hoverOnQuickViewButtonProductImage(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14: Verify QuickView Button is visible while user hover on image ", async () => {
            await PLPPage.quickViewButtonVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15: Verify to click on View Button", async () => {
            await PLPPage.quickViewButtonClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 16: Verify Dialog is open while user click on View Button", async () => {
            await PLPPage.quickViewdailogBoxOfProductvisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17: Verify Must be a verified professional to access wholesale pricing displays in place of the Notify Me button. ", async () => {
            await PLPPage.rPMessageinsteadoffAddToCartandSelectSizeIsVisible(page);
        })

    })

    test("Must be a verified professional to access wholesale pricing displays in place of the Notify Me button.", { tag: '@regression @smoke @unauthorizedUser @plp @productListingPage' }, async () => {

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
            await page.waitForTimeout(8000);
        })
        await test.step("Step 9: Navigate to the product listing ", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Verify the BreadCrumb is visible on home page ", async () => {
            await PLPPage.verifyTheBreadCrumbHomeButtonIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify the BreadCrumb has link", async () => {
            await PLPPage.getTheBreadCrumbHomeButtonText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify to the hover on PCASkin logo", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13: Verify to the scroll down the page", async () => {
            await PLPPage.scrollDownUpTomessageinsteadoffAddToCartandSelectSize(page);
        })
        await test.step("Step 14: Verify Must be a verified professional to access wholesale pricing displays in place of the Notify Me button. ", async () => {
            await PLPPage.messageinsteadoffAddToCartandSelectSizeIsVisible(page);
        })
    })

    test("Verify that for products where the user is restricted to purchase.", { tag: '@regression @smoke @unauthorizedUser @plp @productListingPage' }, async () => {

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
            await page.waitForTimeout(8000);
        })
        await test.step("Step 9: Navigate to the product listing ", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Verify the BreadCrumb is visible on home page ", async () => {
            await PLPPage.verifyTheBreadCrumbHomeButtonIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify the BreadCrumb has link", async () => {
            await PLPPage.getTheBreadCrumbHomeButtonText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify to the hover on PCASkin logo", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13: Verify to the scroll down the page", async () => {
            await PLPPage.scrollDownUpTomessageinsteadoffAddToCartandSelectSize(page);
        })
        await test.step("Step 15: Verify product price is not displayed. ", async () => {
            await PLPPage.hideProductSizeandProce(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 16: Verify Add To Cart button is hide wile message is displayed.'Must be a verified professional to access wholesale pricing displays in place of the Notify Me button' ", async () => {
            await PLPPage.hideAddToCartButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17: Verify Select Size button is hide wile message is displayed.'Must be a verified professional to access wholesale pricing displays in place of the Notify Me button' ", async () => {
            await PLPPage.hideSelectSizeButton(page);
            await page.waitForTimeout(3000);
        })
        //Right now Notify me button is not available in any products
        await test.step("Step 18: Verify Notify Me button is hide wile message is displayed.'Must be a verified professional to access wholesale pricing displays in place of the Notify Me button' ", async () => {
            await PLPPage.hideNotifyMeButton(page);
        })
        await test.step("Step 19: Veriify to the Favourite Button is visible ", async () => {
            await PLPPage.rPFavouriteBtnIsVisible(page);
        })
    })
    test("Verify that unauthorized users are restricted from accessing unqualified products.", { tag: '@regression @smoke @unauthorizedUser @plp @productListingPage' }, async () => {
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
            await page.waitForTimeout(8000);
        })
        await test.step("Step 9: Navigate to the product listing ", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Verify the BreadCrumb is visible on home page ", async () => {
            await PLPPage.verifyTheBreadCrumbHomeButtonIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify to the hover on PCASkin logo", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify to the scroll down the page", async () => {
            await PLPPage.scrollDownUpTomessageinsteadoffAddToCartandSelectSize(page);
        })
        await test.step("Step 13: Verify to the hover on the Product Image. ", async () => {
            await PLPPage.hoverOnQuickViewButtonProductImage(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14: Verify QuickView Button is visible while user hover on image ", async () => {
            await PLPPage.quickViewButtonVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15: Verify to click on View Button", async () => {
            await PLPPage.quickViewButtonClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 16: Verify Dialog is open while user click on View Button", async () => {
            await PLPPage.quickViewdailogBoxOfProductvisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17: Verify Add To Cart button is hide wile message is displayed.'Must be a verified professional to access wholesale pricing'", async () => {
            await PLPPage.hideAddToCartButtonofQuickView(page);
        })
        await test.step("Step 18: Verify Price and Size button is hide wile message is displayed.'Must be a verified professional to access wholesale pricing' ", async () => {
            await PLPPage.hidePriceAndSizeButtonofQuickView(page);
        })
        await test.step("Step 19: Verify Quantity button is hide wile message is displayed.'Must be a verified professional to access wholesale pricing' ", async () => {
            await PLPPage.hideQuantityofQuickView(page);
        })
        await test.step("Step 20: Veriify in place of the usual 'Add to Cart' button,message should be displayed 'Must be a verified professional to access wholesale pricing.' ", async () => {
            await PLPPage.insteadofAddtocartMessageISvisible(page);
        })

    })
    test("Verify that for products where the user is allowed to purchase from recent Viewd Products list.", { tag: '@regression @smoke @unauthorizedUser @plp @productListingPage' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.licEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 9: Navigate to the product listing ", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
        })
        await test.step("Step 10: Verify the BreadCrumb is visible on home page ", async () => {
            await PLPPage.verifyTheBreadCrumbHomeButtonIsVisible(page);
        })
        await test.step("Step 11: Verify to the hover on PCASkin logo", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
        })
        await test.step("Step 12: Verify to the Product is visible", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 13: Verify to click on the Acne Cream", async () => {
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 14: Click on the PDP Breadcrumb All Products", async () => {
            await PDPPage.clickPDPBreadCrumbAllProducts(page);
        })
        await test.step("Step 15: Verify to the Scroll Down the page upto Addtocart", async () => {
            await PLPPage.scrollDownUptoRecentViewProductCard(page);
        })
        await test.step("Step 16: Verify Product Price is visible in Recent Viewd Product list. ", async () => {
            await PLPPage.productPriceofRecentViewIsVisible(page);
        })
        await test.step("Step 17: Verify Add to Cart Button is visible in Recent Viewd Product list. ", async () => {
            await PLPPage.addToCartButtonIsVisible(page);
        })
        await test.step("Step 18: Verify Select Size Button is visible in Recent Viewd Product list. ", async () => {
            await PLPPage.selectSizeButtonIsVisible(page);
        })
        await test.step("Step 19: Verify Notify Me Button is Hidden in Recent Viewd Product list. ", async () => {
            await PLPPage.notifyMeButtonIsHidden(page);
        })

    })

    test("Verify that for products where the user is restricted to purchase from recent Viewd Products list.", { tag: '@regression @smoke @unauthorizedUser @plp @productListingPage' }, async () => {

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
        })
        await test.step("Step 9: Navigate to the product listing ", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
        })
        await test.step("Step 10: Verify the BreadCrumb is visible on home page ", async () => {
            await PLPPage.verifyTheBreadCrumbHomeButtonIsVisible(page);
        })
        await test.step("Step 11: Verify to the hover on PCASkin logo", async () => {
            await PLPPage.pcaSkinHomeLogoHover(page);
        })
        await test.step("Step 12: Verify to the Product is visible", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 13: Verify to click on the Acne Cream", async () => {
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 14: Click on the PDP Breadcrumb All Products", async () => {
            await PDPPage.clickPDPBreadCrumbAllProducts(page);
        })
        await test.step("Step 12: Verify to the Scroll Down the page upto Recent view", async () => {
            await PLPPage.scrollDownUpToMessageinsteadOffAddtocart(page);
        })
        await test.step("Step 1: Verify Product Price is not visible in Recent Viewd Product list. ", async () => {
            await PLPPage.hideProductPriceButtonofRecentView(page);
        })
        await test.step("Step 2: Verify Add to Cart Button is not visible in Recent Viewd Product list. ", async () => {
            await PLPPage.hideAddToCartButtonofRecentView(page);
        })
        await test.step("Step 3: Verify Select Size Button is not visible in Recent Viewd Product list. ", async () => {
            await PLPPage.hideSelectSizeButtonofRecentView(page);
        })
        await test.step("Step 4: Verify Notify Me Button is not visible in Recent Viewd Product list. ", async () => {
            await PLPPage.hideNotifyMeButtonofRecentView(page);
        })
        await test.step("Step 5: Verify 'Must be a verified professional to access wholesale pricing' message is displayed while user restricted to purchase. ", async () => {
            await PLPPage.insteadofAddtocartMessageofRecentViewISvisible(page);
        })

    })

})
