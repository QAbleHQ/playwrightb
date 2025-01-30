import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { CommonHelper } from "../../utils/commonHelper";
import { HomePage } from "../../pages/HomePage";
import { NavigationHeaderPageActions } from "../../pages/NavigationHeaderPage";
import { PLPPage } from "../../pages/PLPPage";
import { FavouritesPage } from "../../pages/FavouritesPage";
import { CLPPage } from "../../pages/CLPPage";
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

test.describe("Favorites:Verify user is able to perform Actions for Products and Course Catrgory", () => {

    test("Eligible Products:Verify products where the user is allowed to purchase, the following elements are displayed:", { tag: '@Favorites @unauthorisedUser @regression' }, async () => {
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
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(2000);

        })
        await test.step("Step 11:Verify PCASkin logo is present", async () => {
            await NavigationHeaderPageActions.visibilityPCASkinLogo(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 12:Verify Shop Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 13:Hover over Shop Section list", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14:Verify Daily Care SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityDailyCareSubHeading(page);
        })
        await test.step("Step 15:Click on Daily Care SubMenu", async () => {
            await NavigationHeaderPageActions.clickDailyCareSubHeading(page);
        })
        await test.step("Step 16:Verify User is on the All Products page", async () => {
            await FavouritesPage.verifyAllProductsInBlueTextIsVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 17:Verify Acne Cream product is Present", async () => {
            await PLPPage.verifyNameOfProductAcneCreameVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 18:Verify Acne Cream Favorite button is visible", async () => {
            await PLPPage.verifyFavoriteBtbAcneCreameVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 19:Click On Acne Cream Favorite button", async () => {
            await PLPPage.clickFavoriteBtbAcneCreame(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 20:Verify Added To Fav Toast message shows", async () => {
            await FavouritesPage.verifyAddedToFavToastPresent(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 21:Click over Naviagation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 22:Verify Naviagation User Icon button is visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 23:Verify user icon Favorite section is visible", async () => {
            await NavigationHeaderPageActions.verifyUserIconFavoriteSection(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 24:Click on User Icon Favorite section", async () => {
            await NavigationHeaderPageActions.clickUserIconFavoriteSection(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 25:Verify User is inside Favorite Page", async () => {
            await FavouritesPage.isFavoritesHeaderVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 26:Verify User is under Product tab", async () => {
            await FavouritesPage.isProductsButtonVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 27:Verify Acne cream product is present inside Favorite Page", async () => {
            await PLPPage.verifyNameOfProductAcneCreameVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 28:Verify Acne cream product Remove from Fav btn is present inside Favorite Page", async () => {
            await FavouritesPage.verifyRemoveFromFavoriteBtbAcneCreame(page);
            await page.waitForTimeout(3000);
        })

        await test.step("Step 29:Verify Acne cream product Add to Cart button is present inside Favorite Page", async () => {
            await PLPPage.verifyAddToCartbtnAcneCreameVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 30:Click Remove from Fav btn ", async () => {
            await FavouritesPage.clickRemoveFromFavoriteBtbAcne(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 31:Verify Remove from Fav toast ", async () => {
            await FavouritesPage.verifyRemoveFromFavToastPresent(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 32:Navigate to Shop section list", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 33:click on Daily care sub menu", async () => {
            await NavigationHeaderPageActions.clickDailyCareSubHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 34:Verify Acne Gel with OmniSome product is present", async () => {
            await PLPPage.verifyNameOfProductAcneGelwithOmniSomeVisible(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 35:Click Acne Gel with OmniSome Favorite button", async () => {
            await PLPPage.clickOnAcneGelwithOmniSomeFavoritebtn(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 36:Verify Added To Fav Toast message shows", async () => {
            await FavouritesPage.verifyAddedToFavToastPresent(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 37:Click over Naviagation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 38:Click on User Icon Favorite section", async () => {
            await NavigationHeaderPageActions.clickUserIconFavoriteSection(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 39:Verify User is under Product tab", async () => {
            await FavouritesPage.isProductsButtonVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 40:Verify Acne Gel with OmniSome product is present inside Product tab", async () => {
            await PLPPage.verifyNameOfProductAcneGelwithOmniSomeVisible(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 41:Verify Acne Gel with OmniSome remove from favorite button present inside Favorite Page", async () => {
            await PLPPage.verifyAcneGelwithOmniRemoveFromFavoriteBtnVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 42:Verify Acne Gel with OmniSome select size button present inside Favorite Page", async () => {
            await PLPPage.verifyAcneGelwithOmniSelectSizeBtnVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 43:Click Remove from Fav btn ", async () => {
            await PLPPage.clickAcneGelwithOmniRemoveFromFavorite(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 44:Verify Remove from Fav toast ", async () => {
            await FavouritesPage.verifyRemoveFromFavToastPresent(page);
            await page.waitForTimeout(5000);
        })
    })

    test("Restricted Products:Verify that for products where the user is restricted to purchase,Some Elements are not Displayed", { tag: '@Favorites @unauthorisedUser @regression' }, async () => {
        await test.step("Step 2: Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
        })
        await test.step("Step 3: Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4: Click the Email field", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter the email in the Email field", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 6: Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step('Step 7: Click the password field', async () => {
            await HomePage.clickPasswordInputField(page);

        })
        await test.step("Step 8: Enter password in the password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 9: Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10: Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 11:Verify PCASkin logo is present", async () => {
            await NavigationHeaderPageActions.visibilityPCASkinLogo(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Verify Shop Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 13: Hover over Shop Section list", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14:Verify Professional Treatments Sub Menu is present", async () => {
            await NavigationHeaderPageActions.visibilityProfessionalTreatmentsSubHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14:Click Professional Treatments Sub Menu ", async () => {
            await NavigationHeaderPageActions.clickProfessionalTreatmentsSubHeading(page);
        })
        await test.step("Step 15:Verify user is in the All Product page", async () => {
            await FavouritesPage.verifyAllProductsInBlueTextIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 16:Verify 4% Retinol Peel product is present", async () => {
            await PLPPage.verifyNameOfProductRetinolPeelVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17:Verify 4% Retinol Peel Favorite button is visible", async () => {
            await PLPPage.verifyFavoriteBtbRetinolPeelVisible(page);
            await page.waitForTimeout(6000);
        })
        await test.step("Step 18:Click on 4% Retinol Peel Favorite button", async () => {
            await PLPPage.clickFavoriteBtbRetinolPeel(page);
            await page.waitForTimeout(7000);
        })
        await test.step("Step 19:Verify Added To Fav Toast message shows", async () => {
            await FavouritesPage.verifyAddedToFavToastPresent(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 20:Click over Naviagation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 21:Verify Naviagation User Icon button is visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 22:Verify user icon Favorite section is visible", async () => {
            await NavigationHeaderPageActions.verifyUserIconFavoriteSection(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 23:Click on User Icon Favorite section", async () => {
            await NavigationHeaderPageActions.clickUserIconFavoriteSection(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 24:Verify User is inside Favorite Page", async () => {
            await FavouritesPage.isFavoritesHeaderVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 25:Verify User is Under Product tab", async () => {
            await FavouritesPage.isProductsButtonVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 26:Verify 4% Retinol Peel product is present inside Favorite Page", async () => {
            await PLPPage.verifyNameOfProductRetinolPeelVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 27:Verify 4% Retinol Peel product Remove from Favorite btn is present", async () => {
            await FavouritesPage.verifyRemoveFromFavoriteBtnRetinolPeelVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 28:Verify Apology Message 4% Retinol Peel product is present ", async () => {
            await FavouritesPage.verifyApologyMessageRetinolPeelVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 29:Verify 4% Retinol Peel product Price is hidden ", async () => {
            await PLPPage.verifyPriceOfProductRetinolPeelIsHidden(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 30:Verify 4% Retinol Peel product Add To Cart is hidden  ", async () => {
            await PLPPage.verifyAddToCartBtnOfProductRetinolPeelIsHidden(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 31:Verify 4% Retinol Peel product Select Size is hidden ", async () => {
            await PLPPage.verifySelectSizeBtnProductRetinolPeelIsHidden(page);
        })
        await test.step("Step 32:Click Remove from Fav btn ", async () => {
            await FavouritesPage.clickRemoveFromFavRetinolPeelVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 33:Verify Remove from Fav toast ", async () => {
            await FavouritesPage.verifyRemoveFromFavToastPresent(page);
            await page.waitForTimeout(4000);
        })

    })

    test("Unfavorite:Verify that users can remove favorite products regardless of purchase eligibility.", { tag: '@"Favorites" @unauthorisedUser @regression' }, async () => {
        test.setTimeout(250000)

        await test.step("Step 2: Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify Email Field Visibility", async () => {
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
            await page.waitForTimeout(2000);
        })
        await test.step("Step 11:Verify PCASkin logo is present", async () => {
            await NavigationHeaderPageActions.visibilityPCASkinLogo(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12:Verify Shop Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 13:Hover over Shop Section list", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14:Verify Daily Care SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityDailyCareSubHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15:Click on Daily Care SubMenu", async () => {
            await NavigationHeaderPageActions.clickDailyCareSubHeading(page);
        })
        await test.step("Step 16:Verify User is on the All Products page", async () => {
            await FavouritesPage.verifyAllProductsInBlueTextIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17:Verify Acne Cream product is Present", async () => {
            await PLPPage.verifyNameOfProductAcneCreameVisible(page);
            await page.waitForTimeout(6000);
        })
        await test.step("Step 18:Verify Acne Cream Favorite button is visible", async () => {
            await PLPPage.verifyFavoriteBtbAcneCreameVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 19:Click On Acne Cream Favorite button", async () => {
            await PLPPage.clickFavoriteBtbAcneCreame(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 20:Verify Added To Fav Toast message shows", async () => {
            await FavouritesPage.verifyAddedToFavToastPresent(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 21:Hover over Shop Section list", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 22:Verify Professional Treatments Sub Menu is present", async () => {
            await NavigationHeaderPageActions.visibilityProfessionalTreatmentsSubHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 23:Click Professional Treatments Sub Menu ", async () => {
            await NavigationHeaderPageActions.clickProfessionalTreatmentsSubHeading(page);
        })
        await test.step("Step 24:Verify user is in the All Product page", async () => {
            await FavouritesPage.verifyAllProductsInBlueTextIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 25:Verify 4% Retinol Peel product is present", async () => {
            await PLPPage.verifyNameOfProductRetinolPeelVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 26:Click on 4% Retinol Peel Favorite button", async () => {
            await PLPPage.clickFavoriteBtbRetinolPeel(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 27:Click over Naviagation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page);
        })
        await test.step("Step 28:Verify Naviagation User Icon button is visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 29:Verify user icon Favorite section is visible", async () => {
            await NavigationHeaderPageActions.verifyUserIconFavoriteSection(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 30:Click on User Icon Favorite section", async () => {
            await NavigationHeaderPageActions.clickUserIconFavoriteSection(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 31:Verify User is inside Favorite Page", async () => {
            await FavouritesPage.isFavoritesHeaderVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 32:Verify User is under Products tab", async () => {
            await FavouritesPage.isProductsButtonVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 33:Verify Acne cream product is present inside Favorite Page", async () => {
            await PLPPage.verifyNameOfProductAcneCreameVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 34:Verify Acne cream product Remove from is present inside Favorite Page", async () => {
            await FavouritesPage.verifyRemoveFromFavoriteBtbAcneCreame(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 35:Click on Acne cream product Remove from favorite inside Favorite Page", async () => {
            await FavouritesPage.clickRemoveFromFavoriteBtbAcne(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 36:Verify Remove from Fav toast ", async () => {
            await FavouritesPage.verifyRemoveFromFavToastPresent(page);
            await page.waitForTimeout(4000);
        })

        await test.step("Step 37:Verify No Acne cream product is present inside Favorite Page", async () => {
            await FavouritesPage.verifyNoAcneCreameProductIsPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 38:Click on 4% Retinol Peel product Remove from favorite inside Favorite Page", async () => {
            await FavouritesPage.clickRemoveFromFavoriteBtnRetinolPeel(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 39:Verify Remove from Fav toast ", async () => {
            await FavouritesPage.verifyRemoveFromFavToastPresent(page);
            await page.waitForTimeout(4000);
        })

        await test.step("Step 40:Verify No 4% Retinol Peel product is present inside Favorite Page", async () => {
            await FavouritesPage.verifyNoRetinolPeelProductIsPresent(page);
            await page.waitForTimeout(3000);
        })
    })

    test("Favorite/Unfavorite:Verify that users can remove favorited courses regardless of purchase eligibility.", { tag: '@Favorites @unauthorisedUser @regression' }, async () => {
        test.setTimeout(250000)

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
        })
        await test.step("Step 11:Verify PCASkin logo is present", async () => {
            await NavigationHeaderPageActions.visibilityPCASkinLogo(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12:Verify Academy Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        })
        await test.step("Step 13:Hover over Academy Section list", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        })
        await test.step("Step 14:Verify Courses SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15:Click on Courses SubMenu", async () => {
            await NavigationHeaderPageActions.clickOnSubHeadingCourseText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 16:Verify User is on All Course page", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
            await page.waitForTimeout(6000);
        })
        await test.step("Step 17:Verify A Deep Dive Into Professional Products is Present", async () => {
            await CLPPage.verifyADeepDiveIntoProfessionalProductsIsPresent(page);
            await page.waitForTimeout(6000);
        })
        await test.step("Step 18:Verify A Deep Dive Into Professional Favorite button is visible", async () => {
            await CLPPage.verifyAddToFavoriteBtnADeepDiveIntoProfessionalProductsIsVisible(page);
            await page.waitForTimeout(15000);
        })
        await test.step("Step 19:Click On A Deep Dive Into Professional Favorite button", async () => {
            await CLPPage.clickAddToFavoriteBtnADeepDiveIntoProfessionalProducts(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 20:Verify Added To Fav Toast message shows", async () => {
            await FavouritesPage.verifyAddedToFavToastPresent(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 21:Click over Naviagation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 22:Verify Naviagation User Icon button is visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 23:Verify user icon Favorite section is visible", async () => {
            await NavigationHeaderPageActions.verifyUserIconFavoriteSection(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 24:Click on User Icon Favorite section", async () => {
            await NavigationHeaderPageActions.clickUserIconFavoriteSection(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 25:Verify User is inside Favorite Page", async () => {
            await FavouritesPage.isFavoritesHeaderVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 26:Verify User is inside Product Page", async () => {
            await FavouritesPage.isProductsButtonVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 27:Navigate to Course section tab inside Favorite Page", async () => {
            await CLPPage.clickCourseTabSection(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 28:Verify Remove from favorite btn A Deep Dive Into Professional is present inside course tab", async () => {
            await CLPPage.verifyRemoveFromFavoriteBtnDeepDiveIntoProfessionalProductsIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 29:Click Remove from favorite btn ", async () => {
            await CLPPage.clickRemoveFromFavoriteBtnDeepDiveIntoProfessionalProducts(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 30:Verify Remove from Fav toast ", async () => {
            await FavouritesPage.verifyRemoveFromFavToastPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 31:Verify A Deep Dive Into Professional Course is not present inside course tab", async () => {
            await CLPPage.verifyDeepDiveIntoProfessionalProductsIsNotPresentInsideCourse(page);
            await page.waitForTimeout(6000);
        })
    })




})
