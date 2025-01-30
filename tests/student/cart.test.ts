import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { MiniCartPage } from "../../pages/MiniCartPage";
import { CartPage } from "../../pages/CartPage";
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

test.describe("Verify the Cart", async () => {

    test("Verify that an error toast message is displayed when a student user attempts to exceed the quantity limit, regardless of whether the quantity is increased using the plus icon or by direct manual input.", { tag: '@regression @student @cart' }, async () => {
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
        await test.step("Step 9: Scroll To Order Again Section", async () => {
            await HomePage.scrollToOrderAgainSection(page);
        })
        await page.waitForTimeout(3000)
        await test.step("Step 10: Click on Add to Cart Button", async () => {
            await HomePage.clickOnAddToCartButton(page);
        })
        await test.step("Step 11: Visibility Cart Icon on the Navigation Header", async () => {
            await NavigationHeaderPageActions.visibilityNavigationCartIcon(page);
        })
        await test.step("Step 12: Click Cart Icon on the Navigation Header", async () => {
            await NavigationHeaderPageActions.clickOnNavigationCartIconButton(page);
        })
        await test.step("Step 13: Visibility Item Section in the Mini Cart", async () => {
            await NavigationHeaderPageActions.visibilityMiniCartItemSection(page);
        })
        await test.step("Step 14: Visibility View Cart Button", async () => {
            await MiniCartPage.viewCartButtonVisible(page);
        })
        await test.step("Step 15: Click on View Cart Button", async () => {
            await MiniCartPage.viewCartButtonClickable(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 16: Verify the visibility Cart Heading", async () => {
            await CartPage.cartVisible(page);
        })
        await test.step("Step 17: Visibility Increase Product Count button", async () => {
            await CartPage.visibilityIncreaseProductCountIcon(page);
        })
        await test.step("Step 18: Click Increase Product Count button 3 times", async () => {
            await CartPage.clickIncreaseProductCountIcon3Times(page);
        })
        await test.step("Step 17: Visibility Maximum Quantity Reached", async () => {
            await CartPage.visibilityMaximumQtyReachedToast(page);
        })
        await test.step("Step 20: Visibility Maximum Quantity Reached when Quantity is entered manually", async () => {
            await CartPage.clearAndEnterProductCount(page, "4");
        })
        await test.step("Step 19: Visibility Maximum Quantity Reached", async () => {
            await CartPage.visibilityMaximumQtyReachedToast(page);
        })

    })

    // Order Again not visible on the Homepage due to that that the TC is Failing
    test("Verify that for products where the user is allowed to purchase, the following elements are displayed:", { tag: '@regression @student @cart' }, async () => {
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
        await test.step("Step 9: Visibility of Best Seller", async () => {
            await HomePage.visibilityOfBestsellerHomepage(page);
        })
        await test.step("Step 10: Scroll to Best Seller", async () => {
            await HomePage.scrollToBestsellerAddToCartBtn(page);
        })
        await test.step("Step 11: Scroll to Best Seller", async () => {
            await HomePage.clickOnBestSellerAddToCart(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 12: Visibility Cart Icon on the Navigation Header", async () => {
            await NavigationHeaderPageActions.visibilityNavigationCartIcon(page);
        })
        await test.step("Step 13: Click Cart Icon on the Navigation Header", async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page);
        })
        await test.step("Step 14: Visibility Item Section in the Mini Cart", async () => {
            await NavigationHeaderPageActions.visibilityMiniCartItemSection(page);
        })
        await test.step("Step 15: Visibility View Cart Button", async () => {
            await MiniCartPage.viewCartButtonVisible(page);
        })
        await test.step("Step 16: Click on View Cart Button", async () => {
            await MiniCartPage.viewCartButtonClickable(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 17: Verify the visibility Cart Heading", async () => {
            await CartPage.cartVisible(page);
        })
        await test.step("Step 18: Scroll to Order Again section", async () => {
            await CartPage.scrollToOrderAgainProductPrice(page);
        })
        await test.step("Step 19: Visibility Order Again Product Price", async () => {
            await CartPage.visibilityOrderAgainProductPrice(page);
        })
        await test.step("Step 20: Visibility Order Again Product Add to Cart Button", async () => {
            await CartPage.visibilityOrderAgainProductAddToCart(page);
        })
        await test.step("Step 21: Visibility Order Again Product Add to Cart Button", async () => {
            await CartPage.visibilityOrderAgainProductSelectSize(page);
        })
    })
})