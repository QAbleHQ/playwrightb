import { HomePage } from "../../pages/HomePage";
import { test, chromium, Page, BrowserContext } from "@playwright/test";
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

test.describe("Verify the Homepage Tests", async () => {
    //Order Again section not visible
    test("HomePage: Verify the presence and functionalities of the following components on the homepage", { tag: '@regression @student @studentHomePage' }, async () => {

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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Visibility Hero Banner Carousel", async () => {
            await HomePage.visibilityHeroBanner(page);
        })
        await test.step("Step 10: Visibility Quick Links for Orders", async () => {
            await HomePage.visibilityOrderSection(page);
        })
        await test.step("Step 11: Visibility Quick Links for Loyalty Tier", async () => {
            await HomePage.visibilityloyaltyTierLink(page);
        })
        await test.step("Step 12: Visibility Quick Links for Customer Support Section", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 13: Visibility Content Banner Section", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 14: Visibility Order Again Carousel", async () => {
            await HomePage.visibilityorderAgainCarousel(page);
        })
        await test.step("Step 15: Visibility Course Banner Section", async () => {
            await HomePage.visibilityCourseBanner(page);
        })
        await test.step("Step 16: Visibility Best Seller Carousel", async () => {
            await HomePage.visibilitybestSellerCarousel(page);
        })
    })
    //Order Again section not visible
    test("Eligible Products: Verify that for products where the user is allowed to purchase, the following elements are displayed:", { tag: '@regression @student @studentHomePage' }, async () => {

        await test.step("Step 1 Verify the User is on HomePage", async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Scroll to Order Again Carousel", async () => {
            await HomePage.scrollToOrderAgainSection(page);
        })
        await test.step("Step 10: Visibility Order Again Product Price", async () => {
            await HomePage.visibilityOrderAgainProductPrice(page);
        })
        await test.step("Step 11: Visibility Order Again Add To Cart Button", async () => {
            await HomePage.visibilityorderAgainAddToCart(page);
        })
        await test.step("Step 12: Visibility Order Again Select Size Button", async () => {
            await HomePage.visibilityorderAgainSelectSize(page);
        })
    })

    //Order Again section not visible
    test("Eligible Pproduct: Verify that an error toast message should appear if student user has exceeded the quantity limit", { tag: '@regression @student @studentHomePage' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 9: Scroll to Order Again Carousel", async () => {
            await page.waitForTimeout(3000);
            await HomePage.scrollToOrderAgainSection(page);
        })
        await test.step("Step 10: Visibility Order Again Product Price", async () => {
            await HomePage.visibilityOrderAgainProductPrice(page);
        })
        await test.step("Step 11: Visibility Order Again Add To Cart Button", async () => {
            await HomePage.visibilityorderAgainAddToCart(page);
        })
        await test.step("Step 12: Click on Add To Cart Button 3 Times", async () => {
            await HomePage.clickOnAddToCartButtonOrderAgain3Times(page);
        })
        await test.step("Step 13: Visibility Error Toast message for the Limit Exceed", async () => {
            await HomePage.visibilityerrorToastMsgForLimitExceed(page);
        })
    })


    test("Eligible Product: Verify that for products where the user is allowed to purchase, the following elements are displayed:", { tag: '@regression @student @studentHomePage' }, async () => {

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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Scroll to Best Seller Section", async () => {
            await HomePage.scrollTobestSellerCarousel(page);
        })
        await test.step("Step 10: Visibility Best Seller Product Price", async () => {
            await HomePage.visibilityBestSellerProductPrice(page);
        })
        await test.step("Step 11: Visibility Best Seller Add To Cart", async () => {
            await HomePage.visibilitybestSellerAddToCart(page);
        })
        await test.step("Step 12: Visibility Best Seller Select Size", async () => {
            await HomePage.visibilitybestSellerSelectSize(page);
        })
    })

    test("Eligible Products: Verify that an error toast message should appear if student user has exceeded the quantity limit", { tag: '@regression @student @studentHomePage' }, async () => {

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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.studentEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 10: Scroll to Best Seller Section", async () => {
            await HomePage.scrollTobestSellerCarousel(page);
        })
        await test.step("Step 11: Visibility Best Seller Add To Cart", async () => {
            await HomePage.visibilitybestSellerAddToCart(page);
        })
        await test.step("Step 12: Click on Best Seller Add to Cart 3 Times", async () => {
            await HomePage.clickOnAddToCartButtonBestSellers3Times(page);
        })
        await test.step("Step 13: Visibility Error Toast message for the Limit Exceed ", async () => {
            await HomePage.visibilityerrorToastMsgForLimitExceed(page);
        })
    })
})
