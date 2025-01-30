import { test, chromium, Page, BrowserContext } from '@playwright/test';
import { NavigationHeaderPageActions } from '../../pages/NavigationHeaderPage';
import { CommonHelper } from '../../utils/commonHelper';
import { PLPPage } from '../../pages/PLPPage';
import { HomePage } from '../../pages/HomePage';
import { loadAndReplaceTestData } from '../../utils/updateProductTestDataWithEnv';
import { OrderHistoryPage } from '../../pages/OrderHistoryPage';
import { ElementHelper } from '../../utils/elementHelper';
import { MiniCartPage } from '../../pages/MiniCartPage';
import { AccountOverviewPage } from '../../pages/AccountOverviewPage';
import { CompanyUserPage } from '../../pages/CompanyUserPage';
import { FavouritesPage } from '../../pages/FavouritesPage';
import { CLPPage } from '../../pages/CLPPage';
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

test.describe('Company Users:To Verify Test Scenarios for Company Users, Header', () => {

    test("Title: Verify that the breadcrumb title is displayed as 'Company Users'", { tag: '@regression @regularUser @companyusers' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.pcaSkinRegularEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.pcaSkinRegularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 8: Hover Over the Account Icon", async () => {
            await NavigationHeaderPageActions.hoverNavigationUserIconButton(page);
        })
        await test.step("Step 9: Verify the Overview and Click on it ", async () => {
            await NavigationHeaderPageActions.visibilityOfCompanyUser(page);
            await NavigationHeaderPageActions.clickOnCompanyUsersOption(page);
        })
        await test.step("Step 10: Verify the breadcrumb title of the page", async () => {
            await CompanyUserPage.companyProfileInBlueVisible(page);
        })
    })
    test("Title: Personal Profile: Verify that the detail information is displayed correctly for users, including:ID, Name, Email, Viewing X out of Y users'", { tag: '@regression @regularUser @companyusers' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.pcaSkinRegularEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.pcaSkinRegularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 8: Hover Over the Account Icon", async () => {
            await NavigationHeaderPageActions.hoverNavigationUserIconButton(page);
        })
        await test.step("Step 9: Verify the visibility of Overview and Click on it ", async () => {
            await NavigationHeaderPageActions.visibilityOfCompanyUser(page);
            await NavigationHeaderPageActions.clickOnCompanyUsersOption(page);
        })
        await test.step("Step 10: Verify the breadcrumb title of the page", async () => {
            await CompanyUserPage.companyProfileInBlueVisible(page);
        })
        await test.step("Step 10: Verify that the detail information is displayed correctly for users, including:ID, Name, Email, Viewing X out of Y users", async () => {
            await CompanyUserPage.companyIDVisible(page);
            await CompanyUserPage.verifyCompanyIDText(page);
        })
    })
    test("Title: Verify that the breadcrumb title is displayed as 'Favorites'", { tag: '@regression @regularUser @Favourites @Header @companyusers' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.pcaSkinRegularEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.pcaSkinRegularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 8: Hover Over the Account Icon", async () => {
            await NavigationHeaderPageActions.hoverNavigationUserIconButton(page);
        })
        await test.step("Step 9: Verify the visibility of Favourites and Click on it ", async () => {
            await NavigationHeaderPageActions.visibilityOfFavorites(page);
            await NavigationHeaderPageActions.clickOnFavoritesOption(page);
        })
        await test.step("Step 10: Verify the breadcrumb title of the page", async () => {
            await FavouritesPage.isFavoritesHeaderVisible(page);
        })
    })
    test("FavoritedProductsList : Verify that the product can be added to the shopping cart after clicking 'Add to Cart'.", { tag: '@regression @regularUser @Favourites @Products @companyusers' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.pcaSkinRegularEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.pcaSkinRegularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 8: Hover Over the Account Icon", async () => {
            await NavigationHeaderPageActions.hoverNavigationUserIconButton(page);
        })
        await test.step("Step 9: Verify the visibility of Favourites and Click on it ", async () => {
            await NavigationHeaderPageActions.visibilityOfFavorites(page);
            await NavigationHeaderPageActions.clickOnFavoritesOption(page);
        })
        await test.step("Step 10: Verify the breadcrumb title of the page and the Products Section", async () => {
            await FavouritesPage.isFavoritesHeaderVisible(page);
            await FavouritesPage.isProductsButtonVisible(page);
            await FavouritesPage.clickProductsButton(page)
        })
        await test.step("Step 11: Verify the Add to Cart Button Visibility and Click on it", async () => {
            await FavouritesPage.clickOnAddToCartButton(page, 4);
        })
        await test.step("Step-12: Hover Over the Cart Icon and Click on it", async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page);
        })
        await test.step("Step-13: Verify the product in the Shopping Cart", async () => {
            await NavigationHeaderPageActions.visibilityMiniCartItemSection(page);
        })
        await test.step("Step-14: Verify the product unit in the minicart", async () => {
            await MiniCartPage.verifyNoofQuantity(page, testdata.Quantity.one);
        })
    })
    test("NoFavoritedCourseList : Verify that clicking on the 'Shop Courses' button redirects users to the All Courses page.", { tag: '@regression @regularUser @Favourites @Courses @companyusers' }, async () => {
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
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.pcaSkinRegularEmail);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.pcaSkinRegularPassword);
        })
        await test.step("Step 8: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
        })
        await test.step("Step 8: Hover Over the Account Icon", async () => {
            await NavigationHeaderPageActions.hoverNavigationUserIconButton(page);
        })
        await test.step("Step 9: Verify the visibility of Favourites and Click on it ", async () => {
            await NavigationHeaderPageActions.visibilityOfFavorites(page);
            await NavigationHeaderPageActions.clickOnFavoritesOption(page);
        })
        await test.step("Step 10: Verify the breadcrumb title of the page and the Courses Section", async () => {
            await FavouritesPage.isFavoritesHeaderVisible(page);
            await FavouritesPage.isCoursesButtonVisible(page);
            await FavouritesPage.clickCoursessButton(page)
        })
        await test.step("Step 11: Verify the Shop Courses Button visibility", async () => {
            await FavouritesPage.visibilityShopCoursesBtn(page);
            await FavouritesPage.clickOnShopCoursesBtn(page);
            await CLPPage.visibilityAllCoursesHeading
        })

    })
})