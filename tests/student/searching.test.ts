import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { CommonHelper } from "../../utils/commonHelper";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { PLPPage } from "../../pages/PLPPage";
import { MiniCartPage } from "../../pages/MiniCartPage";
import { CartPage } from "../../pages/CartPage";
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

test.describe("Searching Eligible/Restricted Products Element Visibility", async () => {

    test("Products List - Eligible Products: Verify that for products where the user is allowed to purchase, the following elements are displayed:", { tag: '@regression @student @searching ' }, async () => {
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
        await test.step("Step 9: Visibility Search Button on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
        })
        await test.step("Step 10: Click on Search Button of the Header Navigation", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 11: Visibility of Search Box on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilitySearchProductsTextbox(page);
        })
        await test.step("Step 12: Clear and Enter Product Name in the Search Box", async () => {
            await NavigationHeaderPageActions.EnterTextInSearchProductsTextbox(page, testdata.ProductNames.acneCream);
            await page.waitForTimeout(8000);
        })
        await test.step("Step 13: Click on the Search Button to Search the Product", async () => {
            await NavigationHeaderPageActions.clickOnSeachButton(page);
        })
        await test.step("Step 14: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 14: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 15: Visibility Acne Cream Product Price on PLP", async () => {
            await PLPPage.visibilityPlpAcneCreamPrice(page);
        })
        await test.step("Step 16: Visibility Acne Cream Product Favourite Button on PLP", async () => {
            await PLPPage.visibilityPlpAcneCreamFavouriteBtn(page);
        })
        await test.step("Step 17: Visibility Creamy Cleanser Product Select Size Button on PLP", async () => {
            await PLPPage.visibilityPlpCreamyCleanserSelectSizeBtn(page);
        })
    })

    test("Products List - Eligible Products: Verify that an error toast message should appear if student user has exceeded the quantity limit", { tag: '@regression @student @searching  ' }, async () => {
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
        await test.step("Step 9: Visibility Search Button on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
        })
        await test.step("Step 10: Click on Search Button of the Header Navigation", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 11: Visibility of Search Box on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilitySearchProductsTextbox(page);
        })
        await test.step("Step 12: Clear and Enter Product Name in the Search Box", async () => {
            await NavigationHeaderPageActions.EnterTextInSearchProductsTextbox(page, testdata.ProductNames.acneCream);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13: Click on the Search Button to Search the Product", async () => {
            await NavigationHeaderPageActions.clickOnSeachButton(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 14: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 15: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 16: Visibility Acne Cream Product Add to Cart Button on PLP", async () => {
            await PLPPage.visibilityPlpAcneCreamAddToCartBtn(page);
        })
        await test.step("Step 17: Click on Acne Cream Product Add to Cart Button on PLP", async () => {
            await PLPPage.clickOnPlpAcneCreamAddToCartBtn(page, 4);
        })
        await test.step("Step 18: Visibility Maximum Quantity Reached Toast", async () => {
            await PLPPage.visibilityMaximumQTYReachedToast(page);
        })
    })

    test("Quick View - Eligible Products: Verify that student users are able to view product details for all items they are permitted to see on the PDP", { tag: '@regression @student @searching  ' }, async () => {
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
            await page.waitForTimeout(7000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Visibility Search Button on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
        })
        await test.step("Step 10: Click on Search Button of the Header Navigation", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 11: Visibility of Search Box on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilitySearchProductsTextbox(page);
        })
        await test.step("Step 12: Clear and Enter Product Name in the Search Box", async () => {
            await NavigationHeaderPageActions.EnterTextInSearchProductsTextbox(page, testdata.ProductNames.acneCream);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13: Click on the Search Button to Search the Product", async () => {
            NavigationHeaderPageActions.clickOnSeachButton(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 14: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 15: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 16: Hover on Product Image on the PLP", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 17: Visibility of Quick View Button on the Product Image", async () => {
            await PLPPage.visibilityQuickViewButton(page);
        })
        await test.step("Step 18: Click on Quick View Button on the Product Image", async () => {
            await PLPPage.clickOnQuickViewButton(page);
        })
        await test.step("Step 19: Visibility of Quick View Dailog Box of the Product", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
        })
        await test.step("Step 20: Visibility of Quick View Product Image", async () => {
            await PLPPage.visibilityQuickViewProductImage(page);
        })
        await test.step("Step 21: Visibility of Quick View Product Name", async () => {
            await PLPPage.visibilityQuickViewProductName(page);
        })
        await test.step("Step 22: Visibility of Quick View Product SKU", async () => {
            await PLPPage.visibilityQuickViewProductSKU(page);
        })
        await test.step("Step 23: Visibility of Quick View Product Rating", async () => {
            await PLPPage.visibilityQuickViewProductRating(page);
        })
        await test.step("Step 24: Visibility of Quick View Product Price", async () => {
            await PLPPage.visibilityQuickViewProductPrice(page);
        })
        await test.step("Step 25: Visibility of Quick View Product Subscription Link", async () => {
            await PLPPage.visibilityQuickViewProductSubscriptionLink(page);
        })
        await test.step("Step 26: Visibility of Quick View Product Description", async () => {
            await PLPPage.visibilityQuickViewProductDescription(page);
        })
        await test.step("Step 27: Visibility of Quick View Product Quantity Selector", async () => {
            await PLPPage.visibilityQuickViewProductQTYSelector(page);
        })
        await test.step("Step 28: Visibility of Quick View Product Add to Cart Button", async () => {
            await PLPPage.visibilityQuickViewAddToCartBtn(page);
        })
        await test.step("Step 29: Visibility of Quick View Close Button", async () => {
            await PLPPage.visibilityQuickViewCloseBtn(page);
        })
    })

    test("Quick View - Restricted Products: Verify that students are restricted from accessing unqualified products", { tag: '@regression @student @searching  ' }, async () => {
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
        await test.step("Step 9: Visibility Search Button on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
        })
        await test.step("Step 10: Click on Search Button of the Header Navigation", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 11: Visibility of Search Box on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilitySearchProductsTextbox(page);
        })
        await test.step("Step 12: Clear and Enter Product Name in the Search Box", async () => {
            await NavigationHeaderPageActions.EnterTextInSearchProductsTextbox(page, testdata.ProductNames.mdPeelCCl3);
            await page.waitForTimeout(8000);
        })
        await test.step("Step 13: Click on the Search Button to Search the Product", async () => {
            await NavigationHeaderPageActions.clickOnSeachButton(page);
        })
        await test.step("Step 14: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 15: Visibility MD Peel CCL3 Product on the PLP", async () => {
            await PLPPage.visibilityMDPeelCCl3(page);
        })
        await test.step("Step 16: Hover on MD Peel CCL3 Product on the PLP", async () => {
            await PLPPage.hoverMDPeelCCL3Product(page);
        })
        await test.step("Step 17: Visibility of Quick View button", async () => {
            await PLPPage.visibilityQuickViewButton(page);
        })
        await test.step("Step 18: Click on Quick View button", async () => {
            await PLPPage.clickOnQuickViewButton(page);
        })
        await test.step("Step 19: Visibility of Quick View Dailog Box of the Product", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
        })
        await test.step("Step 20: Verify the Quick View Product Price/Size is Hidden", async () => {
            await PLPPage.hiddenQuickViewProductPrice(page);
        })
        await test.step("Step 21: Verify the Quick View Product Quantity Control is Hidden", async () => {
            await PLPPage.hiddenQuickViewProductPrice(page);
        })
        await test.step("Step 22: Verify Restriction message is displayed instead of  Add To Cart/Select Size Button", async () => {
            await PLPPage.insteadofAddtocartMessageISvisible(page);
        })
    })

    test("Best Sellers - Eligible Products: Verify that an error toast message should appear if student user has exceeded the quantity limit", { tag: '@regression @student @searching  ' }, async () => {
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
        await test.step("Step 9: Visibility Search Button on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
        })
        await test.step("Step 10: Click on Search Button of the Header Navigation", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 11: Visibility of Search Box on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilitySearchProductsTextbox(page);
        })
        await test.step("Step 12: Clear and Enter Product Name in the Search Box", async () => {
            await NavigationHeaderPageActions.EnterTextInSearchProductsTextbox(page, testdata.ProductNames.acneCream);
        })
        await test.step("Step 13: Click on the Search Button to Search the Product", async () => {
            await page.waitForTimeout(3000);
            NavigationHeaderPageActions.clickOnSeachButton(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 14: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 15: Scroll To Best Seller Section on PLP", async () => {
            await PLPPage.scrollToBestSellerSection(page);
        })
        await test.step("Step 16: Visibility Best Seller Section on PLP", async () => {
            await PLPPage.visibilityBestSellerSection(page);
        })
        await test.step("Step 17: Visibility Best Seller Acne Cream Product", async () => {
            await PLPPage.visibilityAcneCreamInBestSeller(page);
        })
        await test.step("Step 18: Visibility Best Seller Acne Cream Product Add To Cart Button", async () => {
            await PLPPage.visibilityBestSellerAcneCreamAddToCartBtn(page);
        })
        await test.step("Step 19: Click on Best Seller Acne Cream Product Add To Cart Button Multiple Times", async () => {
            await PLPPage.clickOnAddToCartButtonRecentlyViewed(page, 4);
        })
        await test.step("Step 20: Verify Visibility of Maximum Quantity Reached Toast", async () => {
            await PLPPage.visibilityMaximumQTYReachedToast(page);
        })
    })

    test("Products List - Restricted Products: Verify that for products where the user is restricted to purchase, the following elements are displayed:", { tag: '@regression @student @searching ' }, async () => {
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
        await test.step("Step 9: Visibility Search Button on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
        })
        await test.step("Step 10: Click on Search Button of the Header Navigation", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 11: Visibility of Search Box on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilitySearchProductsTextbox(page);
        })
        await test.step("Step 12: Clear and Enter Product Name in the Search Box", async () => {
            await NavigationHeaderPageActions.EnterTextInSearchProductsTextbox(page, testdata.ProductNames.mdPeelCCl3);
        })
        await test.step("Step 13: Click on the Search Button to Search the Product", async () => {
            await page.waitForTimeout(15000);
            NavigationHeaderPageActions.clickOnSeachButton(page);
        })
        await test.step("Step 14: Visibility Bread Crumb Title on the PLP", async () => {
            await page.waitForTimeout(2000)
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 15: Visibility MD Peel CCL3 Product on the PLP", async () => {
            await PLPPage.visibilityMDPeelCCl3(page);
        })
        await test.step("Step 16: Hidden MD Peel CCL3 Product Price on the PLP", async () => {
            await PLPPage.hiddenPlpMDPeelCCl3PriceWrapper(page);
        })
        await test.step("Step 17: Hidden MD Peel CCL3 Product Add To Cart Button on the PLP", async () => {
            await PLPPage.hiddenPlpMDPeelCCl3AddToCart(page);
        })
        await test.step("Step 18: Visibility Favourite Button on the PLP", async () => {
            await PLPPage.visibilityPlpMDPeelCCl3FavouriteBtn(page);
        })
        await test.step("Step 19: Visibility Restriction Message for the Product on the PLP", async () => {
            await PLPPage.visibilityPlpMDPeelCCl3FavouriteBtn(page);
        })
    })
    test("Products List - Favorite/Unfavorite: Verify that users can favorite and unfavorite products regardless of purchase eligibility.", { tag: '@regression @student @searching ' }, async () => {

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
        await test.step("Step 9: Visibility Search Button on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
        })
        await test.step("Step 10: Click on Search Button of the Header Navigation", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 11: Visibility of Search Box on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilitySearchProductsTextbox(page);
        })
        await test.step("Step 12: Clear and Enter Product Name in the Search Box", async () => {
            await NavigationHeaderPageActions.EnterTextInSearchProductsTextbox(page, testdata.ProductNames.acneCream);
        })
        await test.step("Step 13: Click on the Search Button to Search the Product", async () => {
            await page.waitForTimeout(20000);
            NavigationHeaderPageActions.clickOnSeachButton(page);
        })
        await test.step("Step 14: Visibility Bread Crumb Title on the PLP", async () => {
            await page.waitForTimeout(3000)
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 15: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 16: Visibility Favourite Button on the PLP", async () => {
            await PLPPage.visibilityPlpAcneCreamFavouriteBtn(page);
        })
        await test.step("Step 17: Visibility Favourite Button Outlined", async () => {
            await PLPPage.visibilityFavouriteOutlineBtn(page);
        })
        await test.step("Step 18: Click on Outlined Favourite Button to add the Product to Favourites", async () => {
            await PLPPage.clickFavouriteOutlineBtn(page);
        })
        await test.step("Step 19: Visibility of Added to Favourites Toast", async () => {
            await PLPPage.visibilityAddedToFavouriteToast(page);
        })
        await test.step("Step 20: Visibility Favourite Button Filled", async () => {
            await PLPPage.visibilityFavouriteFilledBtn(page);
        })
        await test.step("Step 21: Click on Filled Favourite Button to Remove the Product from Favourites", async () => {
            await PLPPage.clickFavouriteFilledBtn(page);
        })
        await test.step("Step 22: Visibility of Removed from Favourites Toast", async () => {
            await PLPPage.visibilityRemovedFromFavouriteToast(page);
        })
        await test.step("Step 23: Visibility Favourite Button Outlined", async () => {
            await PLPPage.visibilityFavouriteOutlineBtn(page);
        })
    })
    test("Quick View - Quick View button: Verify that the Quick View button appears when hovering over a product image on the PLP and the Quick View modal displayed when clicking on it.", { tag: '@regression @student @searching ' }, async () => {
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
        await test.step("Step 9: Visibility Search Button on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
        })
        await test.step("Step 10: Click on Search Button of the Header Navigation", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 11: Visibility of Search Box on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilitySearchProductsTextbox(page);
        })
        await test.step("Step 12: Clear and Enter Product Name in the Search Box", async () => {
            await NavigationHeaderPageActions.EnterTextInSearchProductsTextbox(page, testdata.ProductNames.acneCream);
        })
        await test.step("Step 13: Click on the Search Button to Search the Product", async () => {
            await page.waitForTimeout(3000);
            NavigationHeaderPageActions.clickOnSeachButton(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 14: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 15: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 16: Hover on Product Image on the PLP", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 17: Visibility of Quick View Button on the Product Image", async () => {
            await PLPPage.visibilityQuickViewButton(page);
        })
        await test.step("Step 18: Click on Quick View Button on the Product Image", async () => {
            await PLPPage.clickOnQuickViewButton(page);
        })
        await test.step("Step 19: Visibility of Quick View Dailog Box of the Product", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
        })
    })

    //Qty shows max while adding to cart so cart is empty and fails
    test("Quick View - Eligible Products: Verify that student users are able to add the products that they are qualified to purchase to the cart", { tag: '@regression @student @searching ' }, async () => {
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
        await test.step("Step 9: Visibility Search Button on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
        })
        await test.step("Step 10: Click on Search Button of the Header Navigation", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 11: Visibility of Search Box on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilitySearchProductsTextbox(page);
        })
        await test.step("Step 12: Clear and Enter Product Name in the Search Box", async () => {
            await NavigationHeaderPageActions.EnterTextInSearchProductsTextbox(page, testdata.ProductNames.blemishControlBar);
        })
        await test.step("Step 13: Click on the Search Button to Search the Product", async () => {
            await page.waitForTimeout(3000);
            NavigationHeaderPageActions.clickOnSeachButton(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 14: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 15: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityblemishControlBarProduct(page);
        })
        await test.step("Step 16: Hover on Product Image on the PLP", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 17: Visibility of Quick View Button on the Product Image", async () => {
            await PLPPage.visibilityQuickViewButton(page);
        })
        await test.step("Step 18: Click on Quick View Button on the Product Image", async () => {
            await PLPPage.clickOnQuickViewButton(page);
        })
        await test.step("Step 19: Visibility of Quick View Dailog Box of the Product", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
        })
        await test.step("Step 20: Visibility of Quick View Product Add to Cart Button", async () => {
            await PLPPage.visibilityQuickViewAddToCartBtn(page);
        })
        await test.step("Step 21: Click on Quick View Product Add to Cart Button", async () => {
            await PLPPage.clickOnQuickViewAddToCartBtn(page);
        })
        await test.step("Step 22: Click on Quick View Close Button", async () => {
            await PLPPage.clickOnQuickViewCloseBtn(page);
        })
        await test.step("Step 23: Verify the Count of Mini Cart", async () => {
            await MiniCartPage.verifyMiniCartIconAndMiniCartCount(page);
        })
        await test.step("Step 24: Hover on Mini Cart Icon", async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page);
        })
        await test.step("Step 24: Click on View Cart Button", async () => {
            await MiniCartPage.viewCartButtonClickable(page);
        })
        await test.step("Step 25: Visibility product on Cart", async () => {
            await CartPage.visibilityItemSection(page);
        })
    })

    test("Quick View - Eligible Products: Verify that an error toast message should appear if student user has exceeded the quantity limit", { tag: '@regression @student @searching  ' }, async () => {
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
        await test.step("Step 9: Visibility Search Button on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
        })
        await test.step("Step 10: Click on Search Button of the Header Navigation", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 11: Visibility of Search Box on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilitySearchProductsTextbox(page);
        })
        await test.step("Step 12: Clear and Enter Product Name in the Search Box", async () => {
            await NavigationHeaderPageActions.EnterTextInSearchProductsTextbox(page, testdata.ProductNames.acneCream);
        })
        await test.step("Step 13: Click on the Search Button to Search the Product", async () => {
            await page.waitForTimeout(10000)
            await NavigationHeaderPageActions.clickOnSeachButton(page);
        })
        await test.step("Step 14: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 15: Visibility Acne Cream Product on the PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 16: Hover on Product Image on the PLP", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 17: Visibility of Quick View Button on the Product Image", async () => {
            await PLPPage.visibilityQuickViewButton(page);
        })
        await test.step("Step 18: Click on Quick View Button on the Product Image", async () => {
            await PLPPage.clickOnQuickViewButton(page);
        })
        await test.step("Step 19: Visibility of Quick View Dailog Box of the Product", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
        })
        await test.step("Step 20: Visibility of Quick View Quantity Selector of the Product", async () => {
            await PLPPage.visibilityQuickViewProductQTYSelector(page);
        })
        await test.step("Step 21: Increase the Product Count Multiple Times", async () => {
            await PLPPage.clickIncreaseButtonMultipleTimes(page, 4);
        })
        await test.step("Step 22: Visibility of Quick View Add to Cart Button", async () => {
            await PLPPage.visibilityQuickViewAddToCartBtn(page);
        })
        await test.step("Step 23: Click on Quick View Add to Cart Button", async () => {
            await PLPPage.clickOnQuickViewAddToCartBtn(page);
        })
        await test.step("Step 24: Visibility of Maximum Quantity Reached Toast", async () => {
            await PLPPage.visibilityMaximumQTYReachedToast(page);
        })
    })

    test("Best Sellers - Eligible Products: Verify that for products where the user is allowed to purchase, the following elements are displayed:", { tag: '@regression @student @searching  ' }, async () => {
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
        await test.step("Step 9: Visibility Search Button on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
        })
        await test.step("Step 10: Click on Search Button of the Header Navigation", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 11: Visibility of Search Box on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilitySearchProductsTextbox(page);
        })
        await test.step("Step 12: Clear and Enter Product Name in the Search Box", async () => {
            await NavigationHeaderPageActions.EnterTextInSearchProductsTextbox(page, testdata.ProductNames.acneCream);
        })
        await test.step("Step 13: Click on the Search Button to Search the Product", async () => {
            await page.waitForTimeout(3000);
            NavigationHeaderPageActions.clickOnSeachButton(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 14: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 15: Scroll To Best Seller Section on PLP", async () => {
            await PLPPage.scrollToBestSellerSection(page);
        })
        await test.step("Step 16: Visibility Best Seller Section on PLP", async () => {
            await PLPPage.visibilityBestSellerSection(page);
        })
        await test.step("Step 17: Visibility Best Seller Acne Cream Product", async () => {
            await PLPPage.visibilityAcneCreamInBestSeller(page);
        })
        await test.step("Step 18: Visibility Best Seller Acne Cream Product Price", async () => {
            await PLPPage.visibilityBestSellerAcneCreamPrice(page);
        })
        await test.step("Step 19: Visibility Best Seller Acne Cream Product Add To Cart Button", async () => {
            await PLPPage.visibilityBestSellerAcneCreamAddToCartBtn(page);
        })
        await test.step("Step 19: Visibility Best Seller C&E Advanced Product Select Size Button", async () => {
            await PLPPage.visibilityBestSellerAcneCreamAddToCartBtn(page);
        })
    })


    test("Best Sellers - Restricted Products: Verify that for products where the user is restricted to purchase, the following elements are displayed:", { tag: '@regression @student @searching  ' }, async () => {
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
        await test.step("Step 9: Visibility Search Button on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
        })
        await test.step("Step 10: Click on Search Button of the Header Navigation", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 11: Visibility of Search Box on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilitySearchProductsTextbox(page);
        })
        await test.step("Step 12: Clear and Enter Product Name in the Search Box", async () => {
            await NavigationHeaderPageActions.EnterTextInSearchProductsTextbox(page, testdata.ProductNames.mdPeelCCl3);
        })
        await test.step("Step 13: Click on the Search Button to Search the Product", async () => {
            await page.waitForTimeout(3000);
            NavigationHeaderPageActions.clickOnSeachButton(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 14: Visibility Bread Crumb Title on the PLP", async () => {
            await PLPPage.visibilityBreadCrumbTitle(page);
        })
        await test.step("Step 15: Scroll To Best Seller Section on PLP", async () => {
            await PLPPage.scrollToBestSellerSection(page);
        })
        await test.step("Step 16: Visibility Best Seller Section on PLP", async () => {
            await PLPPage.visibilityBestSellerSection(page);
        })
        await test.step("Step 17: Visibility Best Seller No Peel Peel Product", async () => {
            await PLPPage.visibilityBestSellerNoPeelPeelProduct(page);
        })
        await test.step("Step 18: Verify Product Price is Hidden", async () => {
            await PLPPage.visibilityBestSellerNoPeelPeelProductPrice(page);
        })
        await test.step("Step 19: Verify Product Add To Cart Button is Hidden", async () => {
            await PLPPage.visibilityBestSellerNoPeelPeelProductAddToCartBtn(page);
        })
        await test.step("Step 20: Verify Product Select Size Button is Hidden", async () => {
            await PLPPage.visibilityBestSellerNoPeelPeelProductSelectSizeBtn(page);
        })
        await test.step("Step 21: Verify Product Restriction Message is visible", async () => {
            await PLPPage.visibilityBestSellerNoPeelPeelProductRestrictionMsg(page);
        })
    })
})