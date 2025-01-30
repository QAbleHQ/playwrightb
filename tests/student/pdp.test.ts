import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { PLPPage } from "../../pages/PLPPage";
import { PDPPage } from "../../pages/PDPPage";
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

test.describe("Verify that for products where the user is allowed to purchase, the following elements are displayed:", async () => {
    test("Eligible Products: Verify that for products where the user is allowed to purchase, the following elements are displayed:", { tag: '@regression @student @pdp' }, async () => {

        await test.step("Step 1: Verify the User is on HomePage", async () => {
            await page.waitForTimeout(3000)
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
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Email into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 9: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 10: Hover on the Student Menu List", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        })
        await test.step("Step 11: Visibility View All Filter Option under Student Menu List", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        })
        await test.step("Step 12: Click View All Filter Option under Student MEnu List", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
        })
        await test.step("Step 13: Visibility of Acne Cream product on PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 14: Click on Acne Cream product on PLP", async () => {
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 15: Visibility of the Product Heading", async () => {
            await PDPPage.visibilityProductHeading(page);
        })
        await test.step("Step 16: Visibility of the Product Size", async () => {
            await PDPPage.visibilityProductSize(page);
        })
        await test.step("Step 17: Visibility One Time Purchase Section ", async () => {
            await PDPPage.visibilityOneTimePurchaseSection(page);
        })
        await test.step("Step 18: Visibility One Time Purchase Price ", async () => {
            await PDPPage.visibilityOneTimePurchasePrice(page);
        })
        await test.step("Step 19: Visibility One Time Purchase Quantity Control ", async () => {
            await PDPPage.visibilityQuantityControl(page);
        })
        await test.step("Step 20: Visibility of Add to Cart or Notify Me Button of the Product", async () => {
            await PDPPage.visibilityProductAddToCartOrNotifyMeButton(page);
        })
        await test.step("Step 21: Visibility of Favourite Button of the Product", async () => {
            await PDPPage.visibilityProductFavouriteButton(page);
        })
    })

    test("Eligible Products: Verify that the Subscribe section is not visible to student users.", { tag: '@regression @student @pdp' }, async () => {

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
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Email into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 9: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 10: Hover on the Student Menu List", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        })
        await test.step("Step 11: Visibility View All Filter Option under Student Menu List", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        })
        await test.step("Step 12: Click View All Filter Option under Student MEnu List", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
        })
        await test.step("Step 13: Visibility of Acne Cream product on PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 14: Click on Acne Cream product on PLP", async () => {
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 15: Visibility of the Product Heading", async () => {
            await PDPPage.visibilityProductHeading(page);
        })
        await test.step("Step 16: Verify the Subscribe Section is not visible to student user", async () => {
            await PDPPage.subscribeSectionHiddenForStudent(page);
        })
    })

    test("Eligible Products: Verify that an error toast message is displayed when a student user attempts to exceed the quantity limit, regardless of whether the quantity is increased using the plus icon or by direct manual input.", { tag: '@regression @student @pdp' }, async () => {
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
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Email into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 9: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 10: Hover on the Student Menu List", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        })
        await test.step("Step 11: Visibility View All Filter Option under Student Menu List", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        })
        await test.step("Step 12: Click View All Filter Option under Student MEnu List", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
        })
        await test.step("Step 13: Visibility of Acne Cream product on PLP", async () => {
            await page.waitForTimeout(1500)
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 14: Click on Acne Cream product on PLP", async () => {
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 15: Visibility of the Product Heading", async () => {
            await PDPPage.visibilityProductHeading(page);
        })
        await test.step("Step 16: Visibility One Time Purchase Section ", async () => {
            await PDPPage.visibilityOneTimePurchaseSection(page);
        })
        await test.step("Step 17: Visibility One Time Purchase Quantity Control ", async () => {
            await PDPPage.visibilityQuantityControl(page);
        })
        await test.step("Step 18: Click on the Increase Count Button in the Quantity Control", async () => {
            await PDPPage.clickOnIncreaseProductCountButton(page, 4);
        })
        await test.step("Step 19: Click on the Add To Cart Button", async () => {
            await PDPPage.clickOnAddToCartButton(page);
        })
        await test.step("Step 20: Visibility Maximum Quantity Reached Toast", async () => {
            await PDPPage.visibilityMaximumQtyReachedToast(page);
        })
        await test.step("Step 21: Clear and Enter into Quantity Control", async () => {
            await PDPPage.clearAndEnterIntoQuantityControl(page, '5');
            await page.waitForTimeout(2000)
        })
        await test.step("Step 22: Click on the Add To Cart Button", async () => {
            await PDPPage.clickOnAddToCartButton(page);
        })
        await test.step("Step 23: Visibility Maximum Quantity Reached Toast", async () => {
            await PDPPage.visibilityMaximumQtyReachedToast(page);
        })
    })

    test("Verify that users can favorite and unfavorite products regardless of purchase eligibility.", { tag: '@regression @student @pdp' }, async () => {

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
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Email into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 9: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 10: Hover on the Student Menu List", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        })
        await test.step("Step 11: Visibility View All Filter Option under Student Menu List", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        })
        await test.step("Step 12: Click View All Filter Option under Student MEnu List", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
        })
        await test.step("Step 13: Visibility of Acne Cream product on PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 14: Click on Acne Cream product on PLP", async () => {
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 15: Visibility of the Product Heading", async () => {
            await PDPPage.visibilityProductHeading(page);
        })
        await test.step("Step 16: Visibility of the Favourite Button of the Product", async () => {
            await PDPPage.visibilityProductFavouriteButton(page);
        })
        await test.step("Step 17: Visibility of Favourite outlined", async () => {
            await PDPPage.visibilityFavouriteOutline(page);
        })
        await test.step("Step 18: Click of Favourite outlined", async () => {
            await PDPPage.clickFavouriteOutline(page);
        })
        await test.step("Step 19: Visibility Added to Favourite Toast", async () => {
            await PDPPage.visibilityAddedToFavouriteToast(page);
        })
        await test.step("Step 20: Visibility Favourite Filled", async () => {
            await PDPPage.visibilityFavouriteFilled(page);
        })
        await test.step("Step 21: Click of Favourite Filled", async () => {
            await PDPPage.clickFavouriteFilled(page);
        })
        await test.step("Step 22: Visibility Removed from Favourite Toast", async () => {
            await PDPPage.visibilityRemovedFromFavouriteToast(page);
        })
        await test.step("Step 23: Visibility Favourite Outlined", async () => {
            await PDPPage.visibilityFavouriteOutline(page);
        })

    })

    test("Restricted Products: Verify that for products where the user is restricted to purchase, the following elements are displayed:", { tag: '@regression @student @pdp' }, async () => {

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
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Email into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 9: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 10: Visibility Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 11: Hover Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 12: Visibility Peels Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityPeelsProfessionalFilterOption(page);
        })
        await test.step("Step 13: Click Peels Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickPeelsProfessionalFilterOption(page);
        })
        await test.step("Step 14: Visibility Peels Filter Applied on PLP", async () => {
            await PLPPage.visibilityPeelsFilterApplied(page);
        })
        await test.step("Step 15: Visibility MD Peel CCl3 on PLP", async () => {
            await PLPPage.visibilityMDPeelCCl3(page);
        })
        await test.step("Step 16: Click MD Peel CCl3 on PLP", async () => {
            await PLPPage.clickMDPeelCCl3Product(page);
        })
        await test.step("Step 17: Visibility Product Heading", async () => {
            await PDPPage.visibilityProductHeading(page);
        })
        await test.step("Step 18: Verify the Product Size is Hidden", async () => {
            await PDPPage.hiddenProductSize(page);
        })
        await test.step("Step 19: Verify the One-Time Purchase is Hidden", async () => {
            await PDPPage.hiddenOneTimePurchaseSection(page);
        })
        await test.step("Step 20: Verify the Add To Cart is Hidden", async () => {
            await PDPPage.hiddenAddToCartAndNotifyMeButton(page);
        })
        await test.step("Step 21: Verify Favourite Button Visibility", async () => {
            await PDPPage.visibilityFavouriteButton(page);
        })
        await test.step("Step 22: Verify Restriction Message for UAT", async () => {
            await PDPPage.visibilityRestrictionMessageForUAT(page);
        })
    })

    test(`Verify that the message "You are not qualified to purchase this item. Please contact 877.PCA.SKIN or info@pcaskin.com for more information" displays in place of the "Notify Me" button for out-of-stock items with access restrictions.`, { tag: '@regression @student @pdp' }, async () => {

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
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Email into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 9: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 10: Visibility Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 11: Hover Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 12: Visibility Peels Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityPeelsProfessionalFilterOption(page);
        })
        await test.step("Step 13: Click Peels Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickPeelsProfessionalFilterOption(page);
        })
        await test.step("Step 14: Visibility Peels Filter Applied on PLP", async () => {
            await PLPPage.visibilityPeelsFilterApplied(page);
        })
        await test.step("Step 15: Visibility MD Peel CCl3 on PLP", async () => {
            await PLPPage.visibilityMDPeelCCl3(page);
        })
        await test.step("Step 16: Click MD Peel CCl3 on PLP", async () => {
            await PLPPage.clickMDPeelCCl3Product(page);
        })
        await test.step("Step 17: Visibility Product Heading", async () => {
            await PDPPage.visibilityProductHeading(page);
        })
        await test.step("Step 18: Verify Restriction Message for UAT", async () => {
            await PDPPage.visibilityRestrictionMessageForUAT(page);
        })
        await test.step("Step 19: Verify Restriction Message Text of UAT", async () => {
            await PDPPage.verifyTextRestrictionMessageForUAT(page, testdata.RestrictedMessage.UAT);
        })
    })

    test(`Related - Eligible Products: Verify that for products where the user is allowed to purchase, the following elements are displayed: Product price, Add to Cart button (Single variant product), Notify Me (Out of Stock)`, { tag: '@regression @student @pdp' }, async () => {

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
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Email into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 9: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Hover on the Student Menu List", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        })
        await test.step("Step 10: Visibility View All Filter Option under Student Menu List", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        })
        await test.step("Step 11: Click View All Filter Option under Student MEnu List", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
        })
        await test.step("Step 12: Visibility of Acne Cream product on PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 13: Click on Acne Cream product on PLP", async () => {
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 14: Visibility of the Product Heading", async () => {
            await PDPPage.visibilityProductHeading(page);
        })
        await test.step("Step 15: Scroll to Related Products Section", async () => {
            await PDPPage.scrollToRelatedProductSection(page);
        })
        await test.step("Step 16: Visibility Related Products Product Price 'Acne Gel'", async () => {
            await PDPPage.visibilityRelatedProductPrice(page);
        })
        await test.step("Step 17: Visibility Related Products Product Add To Cart Button 'Hydramatte'", async () => {
            await PDPPage.visibilityRelatedProductAddToCart(page);
        })
    })

    test(`Related Eligible Products: Verify that an error toast message should appear if student user has exceeded the quantity limit`, { tag: '@regression @student @pdp' }, async () => {

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
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Email into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 9: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 9: Hover on the Student Menu List", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        })
        await test.step("Step 10: Visibility View All Filter Option under Student Menu List", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        })
        await test.step("Step 11: Click View All Filter Option under Student MEnu List", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
        })
        await test.step("Step 12: Visibility of Acne Cream product on PLP", async () => {
            await PLPPage.visibilityAcneCreamProduct(page);
        })
        await test.step("Step 13: Click on Acne Cream product on PLP", async () => {
            await PLPPage.clickOnAcneCreamProduct(page);
        })
        await test.step("Step 14: Visibility of the Product Heading", async () => {
            await PDPPage.visibilityProductHeading(page);
        })
        await test.step("Step 15: Scroll to Related Products Section", async () => {
            await PDPPage.scrollToRelatedProductSection(page);
        })
        await test.step("Step 16: Click on Add To Cart from Related Products Multiple Times", async () => {
            await page.waitForTimeout(5000);
            await PDPPage.clickRelatedProductAddToCartMultipleTimes(page, 5);
        })
        await test.step("Step 17: Verify the Visibility of the Maximum QTY Reached Toast", async () => {
            await PDPPage.visibilityMaximumQtyReachedToast(page);
        })
    })

    test(`Related - Restricted Products: Verify that for products where the user is restricted to purchase, the following elements are displayed:`, { tag: '@regression @student @pdp' }, async () => {

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
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Email into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 9: Wait untill the User gets Login", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 10: Visibility Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 11: Hover Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 12: Visibility Peels Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityNormalBySkinTypeFilterOption(page);
        })
        await test.step("Step 13: Click Peels Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickNormalBySkinTypeFilterOption(page);
        })
        await test.step("Step 14: Visibility Peels Filter Applied on PLP", async () => {
            await PLPPage.visibilityNormalFilterApplied(page);
        })
        await test.step("Step 15: Visibility 4% Retinol Peel product on PLP", async () => {
            await PLPPage.visibility4RetinolPeel(page);
        })
        await test.step("Step 16: Click 4% Retinol Peel product on PLP", async () => {
            await PLPPage.clickRetinolPeelProduct(page);
        })
        await test.step("Step 17: Scroll to Related Products Section", async () => {
            await PDPPage.scrollToRelatedProductSection(page);
        })
        await test.step("Step 18: Verify Related Restricted Product Price is Hidden", async () => {
            await PDPPage.hiddenRelatedProductPriceUltraPeel(page);
        })
        await test.step("Step 19: Verify Related Restricted Product Add To Cart Button is Hidden", async () => {
            await PDPPage.hiddenRelatedProductAddToCartUltraPeel(page);
        })
        await test.step("Step 20: Verify Related Product Restriction Message is Visible", async () => {
            await PDPPage.visibilityRelatedRestrictedMessage(page);
        })
    })
})