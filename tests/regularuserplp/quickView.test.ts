import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { PLPPage } from '../../pages/PLPPage'
import { CommonHelper } from "../../utils/commonHelper";
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

test.describe("Quick view", async () => {

    test("Verify that the Quick View button appears when hovering over a product image on the PLP", { tag: '@regression @quickView @regularUserPlp ' }, async () => {

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
        await test.step("Step 5: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.regularEmail);
        })
        await test.step("Step 6: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 8: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(7000);
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 11: Hover on Product Image", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 12: Verify QuickView Button is visible while user hover on image ", async () => {
            await PLPPage.quickViewButtonVisible(page);
        })
    })

    test("Verify that the Quick View modal displayed when clicking on the Quick View button", { tag: '@regression @quickView @regularUserPlp ' }, async () => {

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
        await test.step("Step 5: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.regularEmail);
        })
        await test.step("Step 6: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 8: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(7000);
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 11: Hover on Product Image", async () => {
            await page.waitForTimeout(3000)
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 12: Verify QuickView Button is visible while user hover on image ", async () => {
            await page.waitForTimeout(2000)
            await PLPPage.quickViewButtonVisible(page);
        })
        await test.step("Step 13: Click on the Quick View Button", async () => {
            await PLPPage.clickOnQuickViewButton(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 14:verify the dialogbox is visible", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
            await page.waitForTimeout(3000)
        })
    })

    test("Verify that clicking the X button closes the quick view modal", { tag: '@regression @quickView @regularUserPlp ' }, async () => {

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
        await test.step("Step 5: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.regularEmail);
        })
        await test.step("Step 6: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 8: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(7000);
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 11: Hover on Product Image", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 12: Verify QuickView Button is visible while user hover on image ", async () => {
            await PLPPage.quickViewButtonVisible(page);
        })
        await test.step("Step 13: Click on the Quick View Button", async () => {
            await PLPPage.clickOnQuickViewButton(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 14:verify the dialogbox is visible", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 15: click on the close button", async () => {
            await PLPPage.clickOnCloseQuickViewButton(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 16: verify quickviewdialog box is not visible", async () => {
            await PLPPage.hiddenQuickViewDialogBox(page);
        })
    })

    test("Verify the quick view modal closes when the user clicks outside the modal window.", { tag: '@regression @quickView @regularUserPlp ' }, async () => {

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
        await test.step("Step 5: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.regularEmail);
        })
        await test.step("Step 6: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 8: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(7000);
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 11: Hover on another Element on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverOnNavigationSearchButton(page);
        })
        await test.step("Step 12: Hover on Product Image", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 13: Verify QuickView Button is visible while user hover on image ", async () => {
            await PLPPage.quickViewButtonVisible(page);
        })
        await test.step("Step 14: Click on the Quick View Button", async () => {
            await PLPPage.clickOnQuickViewButton(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 15:verify the dialogbox is visible", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 16: click on the close button", async () => {
            await PLPPage.clickOnOutSideTheQuickViewDialogBox(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 17: verify quickviewdialog box is not visible", async () => {
            await PLPPage.hiddenQuickViewDialogBox(page);
        })
    })
    test("Verify that users redirect to product details page after clicking on product image, reviews, or 'See more details and subscription options", { tag: '@regression @quickView @regularUserPlp ' }, async () => {

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
        await test.step("Step 5: Clear and Enter Email into the Email Field", async () => {
            await HomePage.clearandEnterEmailInputField(page, testdata.EmailAddress.regularEmail);
        })
        await test.step("Step 6: Clear and Enter Pasword into the Password Field", async () => {
            await HomePage.enterDataInPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 7: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 8: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(7000);
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 9: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 10: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 11: Hover on Product Image", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 12: Verify QuickView Button is visible while user hover on image ", async () => {
            await PLPPage.quickViewButtonVisible(page);
        })
        await test.step("Step 13: Click on the Quick View Button", async () => {
            await PLPPage.clickOnQuickViewButton(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 14:verify the dialogbox is visible", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 15:click on the product image", async () => {
            await PLPPage.clickQuickViewProductImage(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 16:verify PDP page is visible", async () => {
            await PDPPage.visibilityProductHeading(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 17: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(2000);
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 18: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 19: Hover on Product Image", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 20: Verify QuickView Button is visible while user hover on image ", async () => {
            await PLPPage.quickViewButtonVisible(page);
        })
        await test.step("Step 21: Click on the Quick View Button", async () => {
            await PLPPage.clickOnQuickViewButton(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 22:verify the dialogbox is visible", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 23:click on the product rating", async () => {
            await PLPPage.clickOnQuickViewProductRating(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 24:verify PDP page is visible", async () => {
            await PDPPage.visibilityProductHeading(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 25: Hover Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(2000);
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 26: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 27: Hover on Product Image", async () => {
            await PLPPage.hoverOnProductImage(page);
        })
        await test.step("Step 28: Verify QuickView Button is visible while user hover on image ", async () => {
            await PLPPage.quickViewButtonVisible(page);
        })
        await test.step("Step 29: Click on the Quick View Button", async () => {
            await PLPPage.clickOnQuickViewButton(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 30:verify the dialogbox is visible", async () => {
            await PLPPage.visibilityQuickViewdailogBoxOfProduct(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 31:click on the subscription and more", async () => {
            await PLPPage.clickOnQuickViewProductSubscriptionLink(page);
            await page.waitForTimeout(3000)
        })
        await test.step("Step 32:verify PDP page is visible", async () => {
            await PDPPage.visibilityProductHeading(page);
            await page.waitForTimeout(3000)
        })
    })
})
