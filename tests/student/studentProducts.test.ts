import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { PLPPage } from "../../pages/PLPPage";
import { CommonHelper } from "../../utils/commonHelper";
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

test.describe("Verify that the 'Quick View' button appears when hovering over a product image on the PLP and the Quick View modal displayed when clicking on it.", async () => {
    test("Quick View - Eligible Products: Verify that the 'Quick View' button appears when hovering over a product image on the PLP and the Quick View modal displayed when clicking on it.", { tag: '@regression @student @studentproducts' }, async () => {

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
            await page.waitForTimeout(10000)
        })
        await test.step("Step 8: Hover over the Student Option", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 9: Visibility View All Button in the Flyout", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        })
        await test.step("Step 10: Click View All button under Student Flyout", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 11: Hover on Product Image", async () => {
            await page.waitForTimeout(5000)
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 12: Visibility of Quick View Button", async () => {
            await page.waitForTimeout(5000)
            await PLPPage.visibilityQuickViewButton(page);
        })
        await test.step("Step 13: Click on the Quick View Button", async () => {
            await PLPPage.clickOnQuickViewButton(page);
        })
        await test.step("Step 14: Visibility Product Dialog Box", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
        })
    })


    test("Product List - Eligible Products: Verify that an error toast message should appear if student user has exceeded the quantity limit", { tag: '@regression @student @studentproducts' }, async () => {

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
            await page.waitForTimeout(9000)
        })
        await test.step("Step 8: Hover over the Student Option", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        })
        await test.step("Step 9: Visibility View All Button in the Flyout", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        })
        await test.step("Step 10: Click View All button under Student Flyout", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 11:  Visibility Student Only Product Filter Applied", async () => {
            await PLPPage.visibilityStudentOnlyFilterApplied(page);
        })
        await test.step("Step 12:  Visibility Acne Cream Add to Cart Button", async () => {
            await page.waitForTimeout(3000)
            await PLPPage.visibilityAcneCreamAddToCartBtn(page);
        })
        await test.step("Step 13: Click on Add to Cart button Multiple Times", async () => {
            await PLPPage.clickProductAddToCartMultipleTimes(page, 4);
        })
        await test.step("Step 14: Verify the Visibility of the Maximum QTY Reached Toast Message", async () => {
            await PLPPage.visibilityMaximumQTYReachedToast(page);
        })
    })

    //Qty shows max while adding to cart so cart is empty and fails
    test("Quick View - Eligible Products: Verify that student users are able to add the student-only products to the cart", { tag: '@regression @student @studentproducts ' }, async () => {

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
            await page.waitForTimeout(10000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Hover over the Student Option", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        })
        await test.step("Step 10: Visibility View All Button in the Flyout", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        })
        await test.step("Step 11: Click View All button under Student Flyout", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 12: Scroll to Blemish Control Bar Product on PLP", async () => {
            await PLPPage.scrollblemishControlBarProduct(page);
        })
        await test.step("Step 13: Visibility of Blemish Control Bar Product on PLP", async () => {
            await PLPPage.visibilityblemishControlBarProduct(page);
        })
        await test.step("Step 12: Hover on Product Image", async () => {
            await PLPPage.hoverOnblemishControlBarImg(page);
        })
        await test.step("Step 13: Visibility of Quick View Button", async () => {
            await PLPPage.visibilityQuickViewButton(page);
        })
        await test.step("Step 14: Click on the Quick View Button", async () => {
            await PLPPage.clickQuickViewBtnBlemishControlBarBtn(page);
            await page.waitForTimeout(5000)
        })
        await test.step("Step 15: Visibility Product Dialog Box", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
        })
        await test.step("Step 16: Visibility Quick View Add To Cart button", async () => {
            await PLPPage.visibilityQuickViewAddToCartBtn(page);
        })
        await test.step("Step 17: Click on Quick View Add To Cart button", async () => {
            await PLPPage.clickOnQuickViewAddToCartBtn(page);
        })
        await test.step("Step 18: Visibility Quick View Close Button", async () => {
            await PLPPage.visibilityQuickViewCloseBtn(page);
        })
        await test.step("Step 19: Click on Quick View Close Button", async () => {
            await PLPPage.clickOnQuickViewCloseBtn(page);
        })
        await test.step("Step 20: Hover on Mini Cart Icon on the Header", async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page);
        })
        await test.step("Step 21: Visibility of the Item Added to the Cart", async () => {
            await NavigationHeaderPageActions.visibilityMiniCartItemSection(page);
        })
        await test.step("Step 22: Click on View Cart button", async () => {
            await MiniCartPage.viewCartButtonClickable(page);
        })
        await test.step("Step 23: Visibility of the Product in Cart Page", async () => {
            await CartPage.visibilityItemSection(page);
        })
    })

    test("Quick View - Eligible Products: Verify that student users are able to view product details for all student-only items they are permitted to see on the PDP", { tag: '@regression @student @studentproducts' }, async () => {

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
            await page.waitForTimeout(10000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Hover over the Student Option", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        })
        await test.step("Step 10: Visibility View All Button in the Flyout", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        })
        await test.step("Step 11: Click View All button under Student Flyout", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Hover on Product Image", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 13: Visibility of Quick View Button", async () => {
            await PLPPage.visibilityQuickViewButton(page);
        })
        await test.step("Step 14: Click on the Quick View Button", async () => {
            await PLPPage.clickOnQuickViewButton(page);
        })
        await test.step("Step 15: Visibility Product Dialog Box", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
        })
        await test.step("Step 16: Visibility Product Image", async () => {
            await PLPPage.visibilityQuickViewProductImage(page);
        })
        await test.step("Step 17: Visibility Product Name", async () => {
            await PLPPage.visibilityQuickViewProductName(page);
        })
        await test.step("Step 18: Visibility Product SKU", async () => {
            await PLPPage.visibilityQuickViewProductSKU(page);
        })
        await test.step("Step 19: Visibility Product Rating", async () => {
            await PLPPage.visibilityQuickViewProductRating(page);
        })
        await test.step("Step 20: Visibility Product Price", async () => {
            await PLPPage.visibilityQuickViewProductPrice(page);
        })
        await test.step("Step 21: Visibility Product Subscription Link", async () => {
            await PLPPage.visibilityQuickViewProductSubscriptionLink(page);
        })
        await test.step("Step 22: Visibility Product Quantity Selector", async () => {
            await PLPPage.visibilityQuickViewProductQTYSelector(page);
        })
        await test.step("Step 23: Visibility Product Description", async () => {
            await PLPPage.visibilityQuickViewProductDescription(page);
        })
        await test.step("Step 24: Visibility Product Add To Cart Button", async () => {
            await PLPPage.visibilityQuickViewAddToCartBtn(page);
        })
    })

    test("Quick View - Eligible Products: Verify that an error toast message should appear if student user has exceeded the quantity limit", { tag: '@regression @student @studentproducts' }, async () => {

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
            await page.waitForTimeout(10000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Hover over the Student Option", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        })
        await test.step("Step 10: Visibility View All Button in the Flyout", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        })
        await test.step("Step 11: Click View All button under Student Flyout", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Hover on Product Image", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 13: Visibility of Quick View Button", async () => {
            await PLPPage.visibilityQuickViewButton(page);
        })
        await test.step("Step 14: Click on the Quick View Button", async () => {
            await PLPPage.clickOnQuickViewButton(page);
        })
        await test.step("Step 15: Visibility Product Dialog Box", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
        })
        await test.step("Step 16: Visibility Quantity Selector", async () => {
            await PLPPage.visibilityQuickViewProductQTYSelector(page);
        })
        await test.step("Step 17: Click on Increase Button", async () => {
            await PLPPage.clickIncreaseButtonMultipleTimes(page, 3);
        })
        await test.step("Step 18: Click on Add to Cart", async () => {
            await page.waitForTimeout(2000);
            await PLPPage.clickOnQuickViewAddToCartBtn(page);
        })
        await test.step("Step 19: Visibility Maximum Quantity Reached Toast", async () => {
            await PLPPage.visibilityMaximumQTYReachedToast(page);
        })
    })

    test("Recently Viewed Products - Eligible Products: Verify that for products where the user is allowed to purchase, the following elements are displayed:", { tag: '@regression @student @studentproducts' }, async () => {

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
            await page.waitForTimeout(10000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Hover over the Student Option", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        })
        await test.step("Step 10: Visibility View All Button in the Flyout", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        })
        await test.step("Step 11: Click View All button under Student Flyout", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Visibility Acne Cream Product on PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 13: Click on Acne Cream Product on PLP", async () => {
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 14: Visibility PDP BreadCrumb", async () => {
            await PDPPage.visibilityPDPBreadCrumb(page);
        })
        await test.step("Step 15: Click on All Products in PDP BreadCrumb", async () => {
            await PDPPage.clickPDPBreadCrumbAllProducts(page);
        })
        await test.step("Step 16: Scroll to Recently Viewed Section", async () => {
            await PLPPage.scrollToRecentlyViewedSection(page);
        })
        await test.step("Step 17: Visibility Recently Viewed Product Price", async () => {
            await PLPPage.visibilityRecentlyViewedPrice(page);
        })
        await test.step("Step 18: Visibility Recently Viewed Product Add To Cart Button", async () => {
            await PLPPage.visibilityRecentlyViewedAddToCartBtn(page);
        })
        await test.step("Step 19: Scroll to Acne Gel with OmniSome® Product on PLP", async () => {
            await PLPPage.scrollTopCAPeelwithHydroquinoneResorcinolProduct(page);
        })
        await test.step("Step 20: Click on Acne Gel with OmniSome® Product on PLP", async () => {
            await PLPPage.clickOnpCAPeelwithHydroquinoneResorcinolProduct(page);
        })
        await test.step("Step 21: Visibility PDP BreadCrumb", async () => {
            await PDPPage.visibilityPDPBreadCrumb(page);
        })
        await test.step("Step 22: Click on All Products in PDP BreadCrumb", async () => {
            await PDPPage.clickPDPBreadCrumbAllProducts(page);
        })
        await test.step("Step 23: Scroll to Recently Viewed Section", async () => {
            await PLPPage.scrollToRecentlyViewedSection(page);
        })
        await test.step("Step 24: Visibility Select Size Button in Recently Viewed Section", async () => {
            await PLPPage.visibilityRecentlyViewedSelectSize(page);
        })
    })

    test("Recently Viewed Products - Eligible Products: Verify that an error toast message should appear if student user has exceeded the quantity limit", { tag: '@regression @student @studentproducts' }, async () => {

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
            await page.waitForTimeout(10000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Hover over the Student Option", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        })
        await test.step("Step 10: Visibility View All Button in the Flyout", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        })
        await test.step("Step 11: Click View All button under Student Flyout", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Visibility Acne Cream Product on PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 13: Click on Acne Cream Product on PLP", async () => {
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 14: Visibility PDP BreadCrumb", async () => {
            await PDPPage.visibilityPDPBreadCrumb(page);
        })
        await test.step("Step 15: Click on All Products in PDP BreadCrumb", async () => {
            await PDPPage.clickPDPBreadCrumbAllProducts(page);
        })
        await test.step("Step 16: Scroll to Recently Viewed Section", async () => {
            await PLPPage.scrollToRecentlyViewedSection(page);
        })
        await test.step("Step 17: Visibility Recently Viewed Product Add To Cart Button", async () => {
            await PLPPage.visibilityRecentlyViewedAddToCartBtn(page);
        })
        await test.step("Step 18: Click on Add To Cart Multiple Times", async () => {
            await PLPPage.clickAddToCartMultipleTimesRecentlyViewed(page, 4);
        })
        await test.step("Step 19:Visibility Maximum Quantity Reached Toast", async () => {
            await PLPPage.visibilityMaximumQTYReachedToast(page);
        })
    })
    test("Recently Viewed Products - Restricted Products: Verify that for products where the user is restricted to purchase, the following elements are displayed:", { tag: '@regression @student @studentproducts  ' }, async () => {
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
            await page.waitForTimeout(10000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Visibility Shop Menu List in the Header", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 10: Hover on the Shop Menu List on the Navigation Header", async () => {
            await page.waitForTimeout(2000)
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 11: Visibility Peels Filter Option", async () => {
            await NavigationHeaderPageActions.visibilityPeelsProfessionalFilterOption(page);
        })
        await test.step("Step 12: Click on Peels Filter Option", async () => {
            await NavigationHeaderPageActions.clickPeelsProfessionalFilterOption(page);
        })
        await test.step("Step 13: Visibility Peels Filter Applied on PLP", async () => {
            await PLPPage.visibilityPeelsFilterApplied(page);
        })
        await test.step("Step 14: Visibility MD Peel CCL 3 product on PLP", async () => {
            await PLPPage.visibilityMDPeelCCl3(page);
        })
        await test.step("Step 15: Click on MD Peel CCL 3 product on PLP", async () => {
            await PLPPage.clickMDPeelCCl3Product(page);
        })
        await test.step("Step 16: Visibility of the Product Heading on the PDP", async () => {
            await PDPPage.visibilityProductHeading(page);
        })
        await test.step("Step 17: Visibility PDP BreadCrumb", async () => {
            await PDPPage.visibilityPDPBreadCrumb(page);
        })
        await test.step("Step 18: Click on All Products in PDP BreadCrumb", async () => {
            await PDPPage.clickPDPBreadCrumbAllProducts(page);
        })
        await test.step("Step 19: Scroll to Recently Viewed Section", async () => {
            await PLPPage.scrollToRecentlyViewedSection(page);
        })
        await test.step("Step 20: Visibility MD Peel CCL 3 product on Recently Viewed Section", async () => {
            await PLPPage.visibilityMDPeelCCl3RecentlyViewed(page);
        })
        await test.step("Step 21: Hidden Product Price in the Recently Viewed Product", async () => {
            await PLPPage.hiddenRecentlyViewedPrice(page);
        })
        await test.step("Step 22: Hidden Product Add To Cart Button in the Recently Viewed Product", async () => {
            await PLPPage.hiddenRecentlyViewedAddToCartBtn(page);
        })
        await test.step("Step 19: Scroll to Recently Viewed Section", async () => {
            await PLPPage.scrollToRecentlyViewedSection(page);
        })
        await test.step("Step 30: Visibility Restriction Message on the Restricted Product", async () => {
            await PLPPage.visibilityRestrictionMessage(page);
        })
    })

    test("Quick View - Restricted Products: Verify that student users are not able to see the products that not available for students, for example, backbar items (Cleansers & Toners > Facial Wash - 13501).", { tag: '@regression @student @studentproducts ' }, async () => {
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
            await page.waitForTimeout(10000)
        })
        await test.step("Step 8: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Visibility Shop Menu List in the Header", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 10: Hover on the Shop Menu List on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 11: Visibility Cleanser & Toner Filter Option", async () => {
            await NavigationHeaderPageActions.visibilityCleansersAndTonersFilterOption(page);
        })
        await test.step("Step 12: Click on Cleanser & Toner Filter Option", async () => {
            await NavigationHeaderPageActions.clickCleansersAndTonersFilterOption(page);
        })
    })
})