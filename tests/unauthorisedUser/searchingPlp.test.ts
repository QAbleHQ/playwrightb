import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { CommonHelper } from '../../utils/commonHelper';
import { HomePage } from '../../pages/HomePage';
import { NavigationHeaderPageActions } from '../../pages/NavigationHeaderPage';
import { PLPPage } from '../../pages/PLPPage';
import { FavouritesPage } from '../../pages/FavouritesPage';
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

test.describe("Searching : Verify user is a ble to perform Actions on Product List,Quick View and Best Sellers", () => {

    test("Product List: Verify user is able to view Eligible products and Important Elements are present", { tag: '@SearchingPlp @unauthorisedUser @regression' }, async () => {
        test.setTimeout(240000)

        await test.step("Step 2:Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
        })
        await test.step("Step 3:Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4:Click the Email field", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter the email in the Email field", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step('Step 7:Click the password field', async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 8:Enter password in the password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 9:Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 11:Verify Search icon is present", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
            await page.waitForTimeout(8000);
        })
        await test.step("Step 12:Click on the Search button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 13:Enter Acne Cream into the search field", async () => {
            await NavigationHeaderPageActions.enterTextInSearchProductsTextboxAcneCream(page);
            await page.waitForTimeout(6000);
        })
        await test.step("Step 14:Click on the search button", async () => {
            await NavigationHeaderPageActions.clickSearchIconforTextboxSearch(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 15:Verify the Acne Cream product description:Product_name", async () => {
            await PLPPage.verifyTitleAcneCreameVisible(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 16:Verify the Acne Cream product description:Product_price", async () => {
            await PLPPage.verifyPriceOfProductAcneCreameNotVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 17:Verify the Acne Cream product description:Choose Favorite button is Present", async () => {
            await PLPPage.verifyFavoriteBtbAcneCreameVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 18:Verify the Acne Cream product description:Add to cart button is Present", async () => {
            await PLPPage.verifyAddToCartbtnAcneCreameNotVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 19:Click on Search icon", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 20:Enter Clearskin in the search field", async () => {
            await NavigationHeaderPageActions.enterTextInSearchProductsTextClearskin(page);
        })
        await test.step("Step 21:Click on Text Seach icon", async () => {
            await NavigationHeaderPageActions.clickSearchIconforTextboxSearch(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 22:Verify the Clearskin product description:Product Name", async () => {
            await PLPPage.verifyTitleCleanSkinProductIsPresent(page);
        })
        await test.step("Step 23:Verify the Clearskin product description:Select Size Present", async () => {
            await PLPPage.verifyCleanSkinNameSelectSizeNotPresent(page);
            await page.waitForTimeout(2000);
        })
    })
    test("Product List:Verify user is able to view Restricted products,but some elements are Hidden", { tag: '@SearchingPlp @unauthorisedUser @regression' }, async () => {
        await test.step("Step 2:Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);

        })
        await test.step("Step 3:Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4:Click the Email field", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter the email in the Email field", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step('Step 7:Click the password field', async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 8:Enter password in the password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 9:Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 11:Verify Search icon is present", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
            await page.waitForTimeout(15000);
        })
        await test.step("Step 12:Click on the Search button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 13:Enter 4% Retinol Peel into the search field", async () => {
            await NavigationHeaderPageActions.enterTextInSearchProductsTextboxRetinolPeel(page);
            await page.waitForTimeout(6000);
        })
        await test.step("Step 14:Click on the text search button", async () => {
            await NavigationHeaderPageActions.clickSearchIconforTextboxSearch(page);
        })
        await test.step("Step 15:Verify user is on the Product page", async () => {
            await PLPPage.verifyProductsTabCategoryVisible(page);
            await page.waitForTimeout(6000);
        })
        await test.step("Step 16:Verify the 4% Retinol Peel product description:Product_name", async () => {
            await PLPPage.verifyNameOfProductRetinolPeelVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 17:Verify No product price is displayed", async () => {
            await PLPPage.verifyPriceOfProductRetinolPeelIsHidden(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 18:Verify No Add to Cart btn is displayed", async () => {
            await PLPPage.verifyAddToCartBtnOfProductRetinolPeelIsHidden(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 19:Verify No Notify Me btn is displayed", async () => {
            await PLPPage.verifyNotifyMeBtnOfProductRetinolPeelIsHidden(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 20:Verify Message for Restricted products is displayed", async () => {
            await PLPPage.verifyMessageForRestrictedProductsRetinolPeel(page);
            await page.waitForTimeout(5000);
        })
    })

    test("Product List:Verify user is  able to view mandatory message for Restricted products from the Searched field", { tag: '@SearchingPlp @unauthorisedUser @regression' }, async () => {

        await test.step("Step 2:Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 3:Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4:Click the Email field", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter the email in the Email field", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step('Step 7:Click the password field', async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 8:Enter password in the password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 9:Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 11:Verify Search icon is present", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
            await page.waitForTimeout(15000);
        })
        await test.step("Step 12:Click on the Search button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 13:Enter 4% Retinol Peel into the search field", async () => {
            await NavigationHeaderPageActions.enterTextInSearchProductsTextboxRetinolPeel(page);
            await page.waitForTimeout(6000);
        })
        await test.step("Step 14:Click on the search button", async () => {
            await NavigationHeaderPageActions.clickSearchIconforTextboxSearch(page);
        })
        await test.step("Step 15:Verify user is on the Product page", async () => {
            await PLPPage.verifyProductsTabCategoryVisible(page);
            await page.waitForTimeout(6000)
        })
        await test.step("Step 16:Verify the 4% Retinol Peel product description:Product_name", async () => {
            await PLPPage.verifyNameOfProductRetinolPeelVisible(page);
            await page.waitForTimeout(6000)
        })
        await test.step("Step 17:Verify Message For Restricted Products is Visible", async () => {
            await PLPPage.verifyMessageForRestrictedProductsRetinolPeel(page);
            await page.waitForTimeout(6000)
        })
    })

    test("Product List:Verify that users can favorite and unfavorite products regardless of purchase eligibility", { tag: '@SearchingPlp @unauthorisedUser @regression' }, async () => {
        test.setTimeout(250000)

        await test.step("Step 2:Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 3:Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4:Click the Email field", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter the email in the Email field", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step('Step 7:Click on the password field', async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 8:Enter password in the password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 9:Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 11:Verify Search icon is present", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
            await page.waitForTimeout(15000);
        })
        await test.step("Step 12:Click on the Search button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 13:Enter Retinol into the search field", async () => {
            await NavigationHeaderPageActions.enterTextInSearchProductsTextRetinol(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 14:Click on the Text search icon", async () => {
            await NavigationHeaderPageActions.clickSearchIconforTextboxSearch(page);
        })
        await test.step("Step 15:Verify user is on the Product page", async () => {
            await PLPPage.verifyProductsTabCategoryVisible(page);
            await page.waitForTimeout(6000);
        })
        await test.step("Step 16:Verify the 4% Retinol Peel product description:Product_name", async () => {
            await PLPPage.verifyNameOfProductRetinolPeelVisible(page);
            await page.waitForTimeout(6000);
        })
        await test.step("Step 17:Verify the 4% Retinol Peel product description:Favorite button", async () => {
            await PLPPage.verifyFavoriteBtbRetinolPeelVisible(page);
            await page.waitForTimeout(15000);
        })
        await test.step("Step 18:Click on 4% Retinol Peel product Favorite button", async () => {
            await PLPPage.clickFavoriteBtbRetinolPeel(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 19:verify Add to Fav toast Message", async () => {
            await FavouritesPage.verifyAddedToFavToastPresent(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 20:Click on 4% Retinol Peel product UnFavorite btn", async () => {
            await PLPPage.clickFavoriteBtbRetinolPeel(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 21:verify Remove From Fav toast Message", async () => {
            await FavouritesPage.verifyRemoveFromFavToastPresent(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 22:Click on the search button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 23:Enter Intensive Age Refining Treatment in the search filed", async () => {
            await NavigationHeaderPageActions.enterTextInSearchProductsTextboxIntensiveAgeRefiningTreatment(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 24:Click on the Text search button", async () => {
            await NavigationHeaderPageActions.clickSearchIconforTextboxSearch(page);
        })
        await test.step("Step 25:Verify the Intensive Age Refining Treatment product:Product Name", async () => {
            await PLPPage.verifyNameOfProductIntensiveAgeVisible(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 26:Verify the Intensive Age Refining Treatment product:Favorite btn", async () => {
            await PLPPage.verifyFavoriteBtbIntensiveAgeVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 27:Click on Intensive Age Refining Treatment product Favorite button", async () => {
            await PLPPage.clickFavoriteBtbIntensiveAge(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 28:verify Add to Fav toast Message", async () => {
            await FavouritesPage.verifyAddedToFavToastPresent(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 29:Click on Intensive Age Refining Treatment product UnFavorite btn", async () => {
            await PLPPage.clickFavoriteBtbIntensiveAge(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 30:verify Remove From Fav toast Message", async () => {
            await FavouritesPage.verifyRemoveFromFavToastPresent(page);
            await page.waitForTimeout(5000);
        })

    })

    test("Quick View button:Verify It appears when hovering over a product image from the search results page and the Quick View modal displayed when clicking on it", { tag: '@SearchingPlp @unauthorisedUser @regression' }, async () => {

        await test.step("Step 2:Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
        })
        await test.step("Step 3:Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4:Click the Email field", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter the email in the Email field", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step('Step 7:Click the password field', async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 8:Enter password in the password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 9:Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 11:Verify Search icon is present", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
            await page.waitForTimeout(10000);
        })
        await test.step("Step 12: Click on the Search button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 13: Enter Acne Creame into the search field", async () => {
            await NavigationHeaderPageActions.enterTextInSearchProductsTextboxAcneCream(page);
            await page.waitForTimeout(6000);
        })
        await test.step("Step 14:Click on the Text search button", async () => {
            await NavigationHeaderPageActions.clickSearchIconforTextboxSearch(page);
        })
        await test.step("Step 15: Verify user is on the Product page", async () => {
            await PLPPage.verifyProductsTabCategoryVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 16:Verify the Acne Creame product description:Product_name", async () => {
            await PLPPage.verifyTitleAcneCreameVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 17:Verify Hover Actions over Acne Cream product card", async () => {
            await PLPPage.hoverAcneCreamImage(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 18:verify Quick view button is present", async () => {
            await PLPPage.verifyAcneCreamQuickViewButtonIsVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 19:Click on Quick view button", async () => {
            await PLPPage.ClickOnQuickViewButton(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 20:Verify Quick View Model after clicking Quick view Btn", async () => {
            await PLPPage.verifyAcneCreamQuickViewDialogBox(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 21:Verfy Product name after Cliking Quick View Button", async () => {
            await PLPPage.verifyAcneCreamProductNameQuickViewDialogBox(page);
            await page.waitForTimeout(5000);
        })


    })

    test("Quick View button: Verify It appears Disabled when Unauthorized users hover over a Restricted product image from search results page ", { tag: '@SearchingPlp @unauthorisedUser @regression' }, async () => {
        await test.step("Step 2: Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
        })
        await test.step("Step 3: Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4:Click the Email field", async () => {
            await HomePage.clickEmailInputField(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 5:Enter the email in the Email field", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step('Step 7:Click the password field', async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 8:Enter password in the password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 9 Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 11:Verify Search icon is present", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
            await page.waitForTimeout(15000);
        })
        await test.step("Step 12:Click on the Search button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 13:Enter 4% Retinol Peel into the search field", async () => {
            await NavigationHeaderPageActions.enterTextInSearchProductsTextboxRetinolPeel(page);
            await page.waitForTimeout(6000);
        })
        await test.step("Step 14:Click on the search button", async () => {
            await NavigationHeaderPageActions.clickSearchIconforTextboxSearch(page);
        })
        await test.step("Step 15:Verify user is on the Product page", async () => {
            await PLPPage.verifyProductsTabCategoryVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 16:Verify the 4% Retinol Peel product description:Product_name", async () => {
            await PLPPage.verifyNameOfProductRetinolPeelVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 17:Verify Hover Actions over 4% Retinol Peel product image:Hover", async () => {
            await PLPPage.HoverOnProductRetinoPeelImage(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 18:verify Quick view button is present", async () => {
            await PLPPage.verifyRetinoPeelQuickViewButtonVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 19: Click on Quick view button", async () => {
            await PLPPage.clickOnRetinolPeelQuickViewButton(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 20: verify Retinol Product name after clicking it:Quick view product name", async () => {
            await PLPPage.verifyRetinolPeelProductNameQuickViewDialogBox(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 21: Verify presence of messages for Restricked Products: Quick View Restricted messsage", async () => {
            await PLPPage.verifyRetinolPeelRestrictedMessageQuickViewDialogBox(page);
            await page.waitForTimeout(5000);
        })
    })


    test("Quick View button: Verify Message for Restricted products is displayed under Fav btn ", { tag: '@SearchingPlp @unauthorisedUser @regression' }, async () => {

        await test.step("Step 2:Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
        })
        await test.step("Step 3:Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4:Click the Email field", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter the email in the Email field", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step('Step 7:Click the password field', async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 8:Enter password in the password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9:Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 11:Verify Search icon is present", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
            await page.waitForTimeout(15000);
        })
        await test.step("Step 12:Click on the Search button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 13:Enter 4% Retinol Peel into the search field", async () => {
            await NavigationHeaderPageActions.enterTextInSearchProductsTextboxRetinolPeel(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 14:Click on the search button", async () => {
            await NavigationHeaderPageActions.clickSearchIconforTextboxSearch(page);
        })
        await test.step("Step 15:Verify user is on the Product page", async () => {
            await PLPPage.verifyProductsTabCategoryVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 16:Verify the 4% Retinol Peel product description:Product_name", async () => {
            await PLPPage.verifyNameOfProductRetinolPeelVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 17:Verify No product price is displayed", async () => {
            await PLPPage.verifyPriceOfProductRetinolPeelIsHidden(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 18:Verify No Add to Cart btn is displayed", async () => {
            await PLPPage.verifyAddToCartBtnOfProductRetinolPeelIsHidden(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 19:Verify No Notify Me btn is displayed", async () => {
            await PLPPage.verifyNotifyMeBtnOfProductRetinolPeelIsHidden(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 20:Verify Message for Restricted products is displayed", async () => {
            await PLPPage.verifyMessageForRestrictedProductsRetinolPeel(page);
            await page.waitForTimeout(3000);
        })

    })

    test("Best Sellers:Verify that for Eligible Products user is allowed to purchase, the mentioned elements are displayed:", { tag: '@SearchingPlp @unauthorisedUser @regression' }, async () => {
        await test.step("Step 2:Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3:Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4:Click the Email field", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter the email in the Email field", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step('Step 7:Click the password field', async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 8:Enter password in the password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 9:Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 11:Verify Search icon is present", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
            await page.waitForTimeout(10000);
        })
        await test.step("Step 12:Click on the Search button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 13:Enter Acne Cream into the search field", async () => {
            await NavigationHeaderPageActions.enterTextInSearchProductsTextboxAcneCream(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14:Click on the Text search button", async () => {
            await NavigationHeaderPageActions.clickSearchIconforTextboxSearch(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15:Verify the Acne Cream product description:Product_name", async () => {
            await PLPPage.verifyTitleAcneCreameVisible(page);
        })
        await test.step("Step 16:Verify the Acne Cream product description:Product_price", async () => {
            await PLPPage.verifyPriceOfProductAcneCreameNotVisible(page);
        })
        await test.step("Step 17:Verify the Acne Cream product Best-Seller badge", async () => {
            await PLPPage.verifyBestSellerBadgeAcneCreamVisible(page);
        })
        await test.step("Step 18:Verify the Acne Cream product description:Add to cart button", async () => {
            await PLPPage.verifyAddToCartbtnAcneCreameNOtVisible(page);
        })
        await test.step("Step 19:Click on Search icon", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 20:Enter Clearskin in the search field", async () => {
            await NavigationHeaderPageActions.enterTextInSearchProductsTextClearskin(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 21:Click on Text Seach icon", async () => {
            await NavigationHeaderPageActions.clickSearchIconforTextboxSearch(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 22:Verify the Clearskin product description:Product Name", async () => {
            await PLPPage.verifyTitleCleanSkinProductIsPresent(page);
        })
        await test.step("Step 23:Verify the Clearskin product Best Seller Badge", async () => {
            await PLPPage.verifyBestSellerBadgeCleanSkinVisible(page);
        })
        await test.step("Step 24:Verify the Clearskin product description:Select Size Present", async () => {
            await PLPPage.verifyCleanSkinNameSelectSizeNotPresent(page);
            await page.waitForTimeout(2000);
        })
    })
    test("Best Sellers:Verify that for Restricted Products the user is not allowed to purchase, the mentioned elements are displayed:", { tag: '@SearchingPlp @unauthorisedUser @regression' }, async () => {

        await test.step("Step 2:Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3:Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4:Click the Email field", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter the email in the Email field", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step('Step 7:Click the password field', async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 8:Enter password in the password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9:Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 11:Verify Search icon is present", async () => {
            await NavigationHeaderPageActions.visibilityNavigationSearchButton(page);
            await page.waitForTimeout(15000);
        })
        await test.step("Step 12:Click on the Search button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationSearchButton(page);
        })
        await test.step("Step 13:Enter 4% Retinol Peel into the search field", async () => {
            await NavigationHeaderPageActions.enterTextInSearchProductsTextboxRetinolPeel(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 14:Click on the Text search button", async () => {
            await NavigationHeaderPageActions.clickSearchIconforTextboxSearch(page);
        })
        await test.step("Step 15:Verify user is on the Product page", async () => {
            await PLPPage.verifyProductsTabCategoryVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 16:Verify the 4% Retinol Peel product description:Product_name", async () => {
            await PLPPage.verifyNameOfProductRetinolPeelVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17:Verify presence of Quick View Restricted messsage for Restricted Products: ", async () => {
            await PLPPage.verifyRetinolPeelRestrictedMessageQuickViewDialogBox(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 18:Verify No product price is displayed", async () => {
            await PLPPage.verifyPriceOfProductRetinolPeelIsHidden(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 19:Verify No Add to Cart btn is displayed", async () => {
            await PLPPage.verifyAddToCartBtnOfProductRetinolPeelIsHidden(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 20:Verify No Notify Me btn is displayed", async () => {
            await PLPPage.verifyNotifyMeBtnOfProductRetinolPeelIsHidden(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 21:Verify Message for Restricted products is displayed under Fav btn", async () => {
            await PLPPage.verifyMessageForRestrictedProductsRetinolPeel(page);
            await page.waitForTimeout(4000);
        })


    })


})
