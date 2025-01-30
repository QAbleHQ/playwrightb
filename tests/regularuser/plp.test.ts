import { test, chromium, Page, BrowserContext } from '@playwright/test';
import { NavigationHeaderPageActions } from '../../pages/NavigationHeaderPage';
import { CommonHelper } from '../../utils/commonHelper';
import { PLPPage } from '../../pages/PLPPage';
import { HomePage } from '../../pages/HomePage';
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

test.describe('PLP', () => {
    test("Verify that the breadcrumb dynamically update to reflect the selected category and defaults to 'All Products' when multiple categories are selected.", { tag: '@regression @regularUser @plp' }, async () => {
        await test.step("Step 1: Verify Shop option display at Home page", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Click on Shop option", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(2000)
        })
        await page.mouse.move(1000, 1000)
        await test.step("Step 3: Verify Breadcrumb is display", async () => {
            await PLPPage.visibilityOfBreadcrumb(page);
        })
        await test.step("Step 4: Verify 'All Products' display as default Breadcrumb", async () => {
            await PLPPage.visibilityOfAllProductsBreadcrumb(page);
        })
        await test.step("Step 5: Verify downward arrow is display for product category", async () => {
            await PLPPage.VisibilityOfProductCategoryDownwardArrow(page);
        })
        await test.step("Step 6: Click on downward arrow for product category", async () => {
            await PLPPage.clickOnProductCategoryDownwardArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 7: Verify Antioxidants is display for product category", async () => {
            await PLPPage.VisibilityOfAntioxidantsCategory(page);
        })
        await test.step("Step 8: Click on Antioxidants for product category", async () => {
            await PLPPage.clickOnAntioxidantsCategory(page);
        })
        await test.step("Step 9: Verify 'Antioxidants' Breadcrumb display", async () => {
            await PLPPage.visibilityOfantioxidantsBreadcrumb(page);
        })
    })

    test("Verify that clicking on any breadcrumb link accurately navigates the user to the corresponding page within the site hierarchy.", { tag: '@regression @regularUser @plp' }, async () => {
        await test.step("Step 1: Verify Shop option display at Home page", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Click on Shop option", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(2000)
        })
        await page.mouse.move(1000, 1000)
        await test.step("Step 3: Verify Breadcrumb is display", async () => {
            await PLPPage.visibilityOfBreadcrumb(page);
        })
        await test.step("Step 4: Verify 'All Products' display as default Breadcrumb", async () => {
            await PLPPage.visibilityOfAllProductsBreadcrumb(page);
        })
        await test.step("Step 5: click 'Home' in default Breadcrumb", async () => {
            await PLPPage.clickOnHomeInBreadcrumb(page);
        })
        await test.step("Step 6: verify user rediret to PLPPage", async () => {
            await HomePage.isWelcomeTextVisible(page);
        })
        await test.step("Step 7: Verify Shop option display at Home page", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 8: Click on Shop option", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(2000)
        })
        await page.mouse.move(1000, 1000)
        await test.step("Step 9: Verify downward arrow is display for product category", async () => {
            await PLPPage.VisibilityOfProductCategoryDownwardArrow(page);
        })
        await test.step("Step 10: Click on downward arrow for product category", async () => {
            await PLPPage.clickOnProductCategoryDownwardArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 11: Verify Antioxidants is display for product category", async () => {
            await PLPPage.VisibilityOfAntioxidantsCategory(page);
        })
        await test.step("Step 12: Click on Antioxidants for product category", async () => {
            await PLPPage.clickOnAntioxidantsCategory(page);
        })
        await test.step("Step 13: Verify 'Antioxidants' Breadcrumb display", async () => {
            await PLPPage.visibilityOfantioxidantsBreadcrumb(page);
        })
        await test.step("Step 14: Click on 'All Products' in Breadcrumb display", async () => {
            await PLPPage.clickOnAllProductsInBreadcrumb(page);
        })
        await test.step("Step 15: Verify user redirected to All Products page.", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
        })
    })

    test("Verify that the title dynamically updates to reflect the selected category and defaults to 'All Products' when multiple categories are selected.", { tag: '@regression @regularUser @plp' }, async () => {
        await test.step("Step 1: Verify Shop option display at Home page", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Click on Shop option", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(2000)
        })
        await page.mouse.move(1000, 1000)
        await test.step("Step 3: Verify 'All Products' Title display as default", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
        })
        await test.step("Step 4: Verify downward arrow is display for product category", async () => {
            await PLPPage.VisibilityOfProductCategoryDownwardArrow(page);
        })
        await test.step("Step 5: Click on downward arrow for product category", async () => {
            await PLPPage.clickOnProductCategoryDownwardArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 6: Verify Antioxidants is display for product category", async () => {
            await PLPPage.VisibilityOfAntioxidantsCategory(page);
        })
        await test.step("Step 7: Click on Antioxidants for product category", async () => {
            await PLPPage.clickOnAntioxidantsCategory(page);
        })
        await test.step("Step 8: Verify 'Antioxidants' Title display", async () => {
            await PLPPage.visibilityOfantioxidantsTitle(page);
        })
    })

    test("Verify that the left side filter on the PLP displays the following major categories with a clear visual separation e.g., gray line between each category.", { tag: '@regression @regularUser @plp' }, async () => {
        await test.step("Step 1: Verify Shop option display at Home page", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Click on Shop option", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(2000)
        })
        await page.mouse.move(1000, 1000)
        await test.step("Step 3: Verify 'All Products' Title display as default", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
        })
        await test.step("Step 4: Verify 'Product Category' Left side menu display.", async () => {
            await PLPPage.visibilityOfProductCategoryLeftSideMenu(page);
        })
        await test.step("Step-5: Verify Boarder Line display in grey color", async () => {
            await PLPPage.verifyBoarderLineOneCSSProperty(page, testdata.cssProperties.borderBottomColor, testdata.cssProperties.rgbGrey)
        })
        await test.step("Step 6: Verify 'Best Seller' Left side menu display.", async () => {
            await PLPPage.visibilityOfBestsellerLeftSideMenu(page);
        })
        await test.step("Step-7: Verify Boarder Line display in grey color", async () => {
            await PLPPage.verifyBoarderLineTwoCSSProperty(page, testdata.cssProperties.borderBottomColor, testdata.cssProperties.rgbGrey)
        })
        await test.step("Step 8: Verify 'Product Types' Left side menu display.", async () => {
            await PLPPage.visibilityOfProductTypesLeftSideMenu(page);
        })
        await test.step("Step-9: Verify Boarder Line display in grey color", async () => {
            await PLPPage.verifyBoarderLineThirdCSSProperty(page, testdata.cssProperties.borderBottomColor, testdata.cssProperties.rgbGrey)
        })
        await test.step("Step 10: Verify 'Skin Concern' Left side menu display.", async () => {
            await PLPPage.visibilityOfSkinConcernLeftSideMenu(page);
        })
        await test.step("Step-11: Verify Boarder Line display in grey color", async () => {
            await PLPPage.verifyBoarderLineFourthCSSProperty(page, testdata.cssProperties.borderBottomColor, testdata.cssProperties.rgbGrey)
        })
        await test.step("Step 12: Verify 'Skin Types' Left side menu display.", async () => {
            await PLPPage.visibilityOfProductTypesLeftSideMenu(page);
        })
        await test.step("Step-13: Verify Boarder Line display in grey color", async () => {
            await PLPPage.verifyBoarderLineFifthCSSProperty(page, testdata.cssProperties.borderBottomColor, testdata.cssProperties.rgbGrey)
        })
    })

    test("Verify that the 'Product Category' section initially displays the first 5 subcategories followed by a 'Show All Categories' button.", { tag: '@regression @regularUser @plp' }, async () => {
        await test.step("Step 1: Verify Shop option display at Home page", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Click on Shop option", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(2000)
        })
        await page.mouse.move(1000, 1000)
        await test.step("Step 3: Verify 'All Products' Title display as default", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
        })
        await test.step("Step 4: Verify 'Product Category' Left side menu display.", async () => {
            await PLPPage.visibilityOfProductCategoryLeftSideMenu(page);
        })
        await test.step("Step 5: Verify downward arrow is display for product category", async () => {
            await PLPPage.VisibilityOfProductCategoryDownwardArrow(page);
        })
        await test.step("Step 6: Click on downward arrow for product category", async () => {
            await PLPPage.clickOnProductCategoryDownwardArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 7: Verify 'All Products' display.", async () => {
            await PLPPage.verifyfiltersProductsAllProductsIsDisplay(page);
        })
        await test.step("Step 8: Verify 'Antioxidants' display.", async () => {
            await PLPPage.filtersProductsAntioxidantsUNuIsVisible(page);
        })
        await test.step("Step 9: Verify 'Broad Spectrum SPF' display.", async () => {
            await PLPPage.verifyfiltersProductsBroadSpectrumSPFIsDisplay(page);
        })
        await test.step("Step 10: Verify 'Cleansers And Toners' display.", async () => {
            await PLPPage.verifyfiltersProductsCleansersAndTonersIsDisplay(page);
        })
        await test.step("Step 11: Verify 'Eye neck Lip' display.", async () => {
            await PLPPage.verifyfiltersProductsEyeNeckLipIsDisplay(page);
        })
        await test.step("Step 12: Verify 'Mask' display.", async () => {
            await PLPPage.verifyfiltersProductsMasksIsDisplay(page);
        })
        await test.step("Step 13: Verify 'Show All Categories' display.", async () => {
            await PLPPage.verifyfiltersProductsShowAllCategoriesIsDisplay(page);
        })
    })

    test("Verify that clicking on the downward/upward arrow icons next to each filter section successfully expands or collapses the corresponding filter options.", { tag: '@regression @regularUser @plp@newTestCase' }, async () => {
        await test.step("Step 1: Verify Shop option display at Home page", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Click on Shop option", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(2000)
        })
        await page.mouse.move(1000, 1000)
        await test.step("Step 3: Verify 'All Products' Title display as default", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
        })
        await test.step("Step 4: Verify 'Product Category' Left side menu display.", async () => {
            await PLPPage.visibilityOfProductCategoryLeftSideMenu(page);
        })
        await test.step("Step 5: Verify downward arrow is display for product category", async () => {
            await PLPPage.VisibilityOfProductCategoryDownwardArrow(page);
        })
        await test.step("Step 6: Click on downward arrow for product category", async () => {
            await PLPPage.clickOnProductCategoryDownwardArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 7: Verify 'Products Category' is display.", async () => {
            await PLPPage.verifyProductCategorItemIsDisplayed(page);
        })
        await test.step("Step 8: Verify 'Products Category' Up Arrow is display.", async () => {
            await PLPPage.VisibilityOfProductCategoryUpwardArrow(page);
        })
        await test.step("Step 9: click on 'Products Category' Up Arrow is display.", async () => {
            await PLPPage.clickOnProductCategoryUpwardArrow(page);
        })
        await test.step("Step 10: Verify downward arrow is display for product category", async () => {
            await PLPPage.VisibilityOfProductCategoryDownwardArrow(page);
        })
        // bestseller
        await test.step("Step 11: Verify 'Best Seller' Left side menu display.", async () => {
            await PLPPage.visibilityOfBestsellerLeftSideMenu(page);
        })
        await test.step("Step 12: Verify downward arrow is display for bestseller", async () => {
            await PLPPage.verifyfiltersBestSellerDownwardArrow(page);
        })
        await test.step("Step 13: Click on downward arrow for bestseller", async () => {
            await PLPPage.clickfiltersBestSellerDownwardArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 14: Verify 'bestseller' is display.", async () => {
            await PLPPage.verifybestsellerItemIsDisplayed(page);
        })
        await test.step("Step 15: Verify 'bestseller' Up Arrow is display.", async () => {
            await PLPPage.verifyfiltersBestSellerupArrow(page);
        })
        await test.step("Step 16: click on 'bestseller' Up Arrow is display.", async () => {
            await PLPPage.clickfiltersBestSellerupArrow(page);
        })
        await test.step("Step 17: Verify downward arrow is display for bestseller", async () => {
            await PLPPage.verifyfiltersBestSellerDownwardArrow(page);
        })
        // Product Type
        await test.step("Step 18: Verify 'Product Type' Left side menu display.", async () => {
            await PLPPage.visibilityOfProductTypesLeftSideMenu(page);
        })
        await test.step("Step 19: Verify downward arrow is display for Product Type", async () => {
            await PLPPage.verifyFiltersProductsTypedownArrow(page);
        })
        await test.step("Step 20: Click on downward arrow for Product Type", async () => {
            await PLPPage.clickFiltersProductsTypedownArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 21: Verify 'Product Type' is display.", async () => {
            await PLPPage.verifyproductTypesItemIsDisplayed(page);
        })
        await test.step("Step 22: Verify 'Product Type' Up Arrow is display.", async () => {
            await PLPPage.verifyFiltersProductsTypeupArrow(page);
        })
        await test.step("Step 23: click on 'Product Type' Up Arrow is display.", async () => {
            await PLPPage.clickFiltersProductsTypeupArrow(page);
        })
        await test.step("Step 24: Verify downward arrow is display for Product Type", async () => {
            await PLPPage.verifyFiltersProductsTypedownArrow(page);
        })
        // Skin Concern
        await test.step("Step 25: Verify 'Skin Concern' Left side menu display.", async () => {
            await PLPPage.visibilityOfSkinConcernLeftSideMenu(page);
        })
        await test.step("Step 26: Verify downward arrow is display for Skin Concern", async () => {
            await PLPPage.verifyFiltersSkinConcerndownArrow(page);
        })
        await test.step("Step 27: Click on downward arrow for Skin Concern", async () => {
            await PLPPage.clickFiltersSkinConcerndownArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 28: Verify 'Skin Concern' is display.", async () => {
            await PLPPage.verifyskinConcernItemIsDisplayed(page);
        })
        await test.step("Step 29: Verify 'Skin Concern' Up Arrow is display.", async () => {
            await PLPPage.verifyFiltersSkinConcernUpArrow(page);
        })
        await test.step("Step 30: click on 'Skin Concern' Up Arrow is display.", async () => {
            await PLPPage.clickFiltersSkinConcernUpArrow(page);
        })
        await test.step("Step 31: Verify downward arrow is display for Skin Concern", async () => {
            await PLPPage.verifyFiltersSkinConcerndownArrow(page);
        })
        // Skin Type
        await test.step("Step 32: Verify 'Skin Type' Left side menu display.", async () => {
            await PLPPage.visibilityOfSkinTypeLeftSideMenu(page);
        })
        await test.step("Step 33: Verify downward arrow is display for Skin Type", async () => {
            await PLPPage.verifyFiltersSkinTypedownArrow(page);
        })
        await test.step("Step 34: Click on downward arrow for Skin Type", async () => {
            await PLPPage.clickFiltersSkinTypedownArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 35: Verify 'Skin Type' is display.", async () => {
            await PLPPage.verifyskinTypeItemIsDisplayed(page);
        })
        await test.step("Step 36: Verify 'Skin Type' Up Arrow is display.", async () => {
            await PLPPage.verifyFiltersSkinTypeUpArrow(page);
        })
        await test.step("Step 37: click on 'Skin Type' Up Arrow is display.", async () => {
            await PLPPage.clickFiltersSkinTypeUpArrow(page);
        })
        await test.step("Step 38: Verify downward arrow is display for Skin Type", async () => {
            await PLPPage.verifyFiltersSkinTypedownArrow(page);
        })
    })

    test("Verify that clicking the 'Show All Categories' button within the 'Product Category' section expands the filter to display all defined subcategories, while clicking the 'Show Less Categories' button collapses the section to display the initial 5 subcategories.", { tag: '@regression @regularUser @plp@newTestCase' }, async () => {
        await test.step("Step 1: Verify Shop option display at Home page", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Click on Shop option", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(2000)
        })
        await page.mouse.move(1000, 1000)
        await test.step("Step 3: Verify 'All Products' Title display as default", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
        })
        await test.step("Step 4: Verify 'Product Category' Left side menu display.", async () => {
            await PLPPage.visibilityOfProductCategoryLeftSideMenu(page);
        })
        await test.step("Step 5: Verify downward arrow is display for product category", async () => {
            await PLPPage.VisibilityOfProductCategoryDownwardArrow(page);
        })
        await test.step("Step 6: Click on downward arrow for product category", async () => {
            await PLPPage.clickOnProductCategoryDownwardArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 7: Verify 'All Products' display.", async () => {
            await PLPPage.verifyfiltersProductsAllProductsIsDisplay(page);
        })
        await test.step("Step 8: Verify 'Antioxidants' display.", async () => {
            await PLPPage.filtersProductsAntioxidantsUNuIsVisible(page);
        })
        await test.step("Step 9: Verify 'Broad Spectrum SPF' display.", async () => {
            await PLPPage.verifyfiltersProductsBroadSpectrumSPFIsDisplay(page);
        })
        await test.step("Step 10: Verify 'Cleansers And Toners' display.", async () => {
            await PLPPage.verifyfiltersProductsCleansersAndTonersIsDisplay(page);
        })
        await test.step("Step 11: Verify 'Eye neck Lip' display.", async () => {
            await PLPPage.verifyfiltersProductsEyeNeckLipIsDisplay(page);
        })
        await test.step("Step 12: Verify 'Show All Categories' display.", async () => {
            await PLPPage.verifyfiltersProductsShowAllCategoriesIsDisplay(page);
        })
        await test.step("Step 13: Click on 'Show All Categories' display.", async () => {
            await PLPPage.clickfiltersProductsShowAllCategoriesIsDisplay(page);
        })
        await test.step("Step 14: Verify 'Mask' display.", async () => {
            await PLPPage.verifyfiltersProductsMasksIsDisplay(page);
        })
        await test.step("Step 15: Verify 'Moisturizers' display.", async () => {
            await PLPPage.verifyfiltersProductsMoisturizersIsDisplay(page);
        });
        await test.step("Step 16: Verify 'Retinols' display.", async () => {
            await PLPPage.verifyfiltersProductsRetinolsIsDisplay(page);
        });
        await test.step("Step 17: Verify 'Serums' display.", async () => {
            await PLPPage.verifyfiltersProductsSerumsIsDisplay(page);
        });
        await test.step("Step 18: Verify 'Solution Sets' display.", async () => {
            await PLPPage.verifyfiltersProductsSolutionSetsIsDisplay(page);
        });
        await test.step("Step 19: Verify 'Peels' display.", async () => {
            await PLPPage.verifyfiltersProductsPeelsIsDisplay(page);
        });
        await test.step("Step 20: Verify 'Peel Alternative' display.", async () => {
            await PLPPage.verifyfiltersProductsPeelAlternativeIsDisplay(page);
        });
        await test.step("Step 21: Verify 'Retinoid Treatments' display.", async () => {
            await PLPPage.verifyfiltersProductsRetinoidTreatmentsIsDisplay(page);
        });
        await test.step("Step 22: Verify 'Therapeutic Masks' display.", async () => {
            await PLPPage.verifyfiltersProductsTherapeuticMasksIsDisplay(page);
        });
        await test.step("Step 23: Verify 'Treatment Enhancements' display.", async () => {
            await PLPPage.verifyfiltersProductsTreatmentEnhancementsIsDisplay(page);
        });
        await test.step("Step 24: Verify 'Backbar Sizes' display.", async () => {
            await PLPPage.verifyfiltersProductsBackbarSizesIsDisplay(page);
        });
        await test.step("Step 25: Verify 'Backbar Tools' display.", async () => {
            await PLPPage.verifyfiltersProductsBackbarToolsIsDisplay(page);
        });
        await test.step("Step 26: Verify 'Body Treatments' display.", async () => {
            await PLPPage.verifyfiltersProductsBodyTreatmentsIsDisplay(page);
        });
        await test.step("Step 27: Verify 'Exfoliants' display.", async () => {
            await PLPPage.verifyfiltersProductsExfoliantsIsDisplay(page);
        });
        await test.step("Step 28: Click on 'Show Less Categories' display.", async () => {
            await PLPPage.clickfiltersProductsShowLessCategoriesIsDisplay(page);
        })
        await test.step("Step 29: Verify 'All Products' display.", async () => {
            await PLPPage.verifyfiltersProductsAllProductsIsDisplay(page);
        })
        await test.step("Step 30: Verify 'Antioxidants' display.", async () => {
            await PLPPage.filtersProductsAntioxidantsUNuIsVisible(page);
        })
        await test.step("Step 31: Verify 'Broad Spectrum SPF' display.", async () => {
            await PLPPage.verifyfiltersProductsBroadSpectrumSPFIsDisplay(page);
        })
        await test.step("Step 32: Verify 'Cleansers And Toners' display.", async () => {
            await PLPPage.verifyfiltersProductsCleansersAndTonersIsDisplay(page);
        })
        await test.step("Step 33: Verify 'Eye neck Lip' display.", async () => {
            await PLPPage.verifyfiltersProductsEyeNeckLipIsDisplay(page);
        })
    })

    test("Verify that the 'Best Seller' subcategory is displayed with an accurate count of best-selling products in parentheses.", { tag: '@regression @regularUser @plp@newTestCase' }, async () => {
        await test.step("Step 1: Verify Shop option display at Home page", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Click on Shop option", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(2000)
        })
        await page.mouse.move(1000, 1000)
        await test.step("Step 3: Verify 'Best Seller' Left side menu display.", async () => {
            await PLPPage.visibilityOfBestsellerLeftSideMenu(page);
        })
        await test.step("Step 4: Verify downward arrow is display for bestseller", async () => {
            await PLPPage.verifyfiltersBestSellerDownwardArrow(page);
        })
        await test.step("Step 5: Click on downward arrow for bestseller", async () => {
            await PLPPage.clickfiltersBestSellerDownwardArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 6: Verify 'bestseller' is display.", async () => {
            await PLPPage.verifybestsellerItemIsDisplayed(page);
        })
        await test.step("Step 7: Verify 'bestseller'  count is display.", async () => {
            await PLPPage.verifyBestsellerCountIsVisible(page);
        })
        await test.step("Step 8: Verify 'bestseller' count text is display.", async () => {
            await PLPPage.verifyTextOfBestsellerCountIsVisible(page);
        })
    })

    test("Verify that selecting the 'Best Seller' filter displays only products designated as bestsellers, while deselecting or removing the filter displays all available products on the product grid.", { tag: '@regression @regularUser @plp@newTestCase' }, async () => {
        await test.step("Step 1: Verify Shop option display at Home page", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Click on Shop option", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(2000)
        })
        await page.mouse.move(1000, 1000)
        await test.step("Step 3: Verify 'Best Seller' Left side menu display.", async () => {
            await PLPPage.visibilityOfBestsellerLeftSideMenu(page);
        })
        await test.step("Step 4: Verify downward arrow is display for bestseller", async () => {
            await PLPPage.verifyfiltersBestSellerDownwardArrow(page);
        })
        await test.step("Step 5: Click on downward arrow for bestseller", async () => {
            await PLPPage.clickfiltersBestSellerDownwardArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 6: Verify 'bestseller' is display.", async () => {
            await PLPPage.verifybestsellerItemIsDisplayed(page);
        })
        await test.step("Step 7: Verify 'bestseller' checkbox is display.", async () => {
            await PLPPage.verifyBestsellerCheckboxIsVisible(page);
        })
        await test.step("Step 8: Click on 'bestseller' checkbox is display.", async () => {
            await page.waitForTimeout(2000)
            await PLPPage.clickBestsellerCheckboxIsVisible(page);
        })
        await test.step("Step 9: Verify 'bestseller' checkbox is checked.", async () => {
            await page.waitForTimeout(2000)
            await PLPPage.verifyBestsellerCheckboxIsChecked(page);
        })
        await test.step("Step 10: Verify 'bestseller' Filter is Applied.", async () => {
            await PLPPage.verifyBestsellerFilterIsApplied(page);
        })
        await test.step("Step 11: Verify product display with 'bestseller' badge.", async () => {
            await PLPPage.verifyBestsellerBadgeIsDisplayed(page);
        })
        await test.step("Step 12: Verify best seller filter count is displayed.", async () => {
            await PLPPage.verifyFilterCountIsDisplayed(page);
        })
        await test.step("Step 13: Verify best seller filter count number is displayed.", async () => {
            await PLPPage.verifyFilterCountNumberIsDisplayed(page, testdata.RegularUser.FilterCount.products19);
        })
        await test.step("Step 14: Click on downward arrow for bestseller", async () => {
            await PLPPage.clickfiltersBestSellerDownwardArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 15: Click on 'bestseller' checkbox to unchecked it.", async () => {
            await PLPPage.clickBestsellerCheckboxIsVisible(page);
        })
        await test.step("Step 16: Verify 'bestseller' filter is not applied.", async () => {
            await PLPPage.verifyBestsellerFilterIsNotApplied(page);
        })
        await test.step("Step 17: Verify best seller filter count is displayed.", async () => {
            await PLPPage.verifyFilterCountIsDisplayed(page);
        })
        await test.step("Step 18: Verify best seller filter count number is displayed.", async () => {
            await PLPPage.verifyFilterCountNumberIsDisplayed(page, testdata.RegularUser.FilterCount.products69);
        })
    })

    test("Verify that all applicable subcategories are displayed with an accurate product count in parentheses. Backbar, Retail, Sample", { tag: '@regression @regularUser @plp@newTestCase' }, async () => {
        await test.step("Step 1: Verify Shop option display at Home page", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Click on Shop option", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
            await page.waitForTimeout(2000)
        })
        await page.mouse.move(1000, 1000)
        await test.step("Step 3: Verify 'Product Types' Left side menu display.", async () => {
            await PLPPage.visibilityOfProductTypesLeftSideMenu(page);
        })
        await test.step("Step 4: Verify downward arrow is display for Product Type", async () => {
            await PLPPage.verifyFiltersProductsTypedownArrow(page);
        })
        await test.step("Step 5: Click on downward arrow for Product Type", async () => {
            await PLPPage.clickFiltersProductsTypedownArrow(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 6: Verify 'backbar' display under product type.", async () => {
            await PLPPage.verifyProductTypeFilterBackbar(page);
        })
        await test.step("Step 7: Verify 'backbar' count display under product type.", async () => {
            await PLPPage.verifyProductTypeFilterBackbarCount(page);
        })
        await test.step("Step 8: Verify 'backbar' exact number display under product type.", async () => {
            await PLPPage.verifyProductTypeFilterBackbarCountNumber(page, testdata.RegularUser.FilterCount.count1);
        })
        // Retail
        await test.step("Step 9: Verify 'Retail' display under product type.", async () => {
            await PLPPage.verifyProductTypeFilterRetail(page);
        })
        await test.step("Step 10: Verify 'Retail' count display under product type.", async () => {
            await PLPPage.verifyProductTypeFilterRetailCount(page);
        })
        await test.step("Step 11: Verify 'Retail' exact number display under product type.", async () => {
            await PLPPage.verifyProductTypeFilterRetailCountNumber(page, testdata.RegularUser.FilterCount.count68);
        })
        await test.step("Step 12: Verify 'Sample' display under product type.", async () => {
            await PLPPage.verifyProductTypeFilterSample(page);
        })
        await test.step("Step 13: Verify 'Sample' count display under product type.", async () => {
            await PLPPage.verifyProductTypeFilterSampleCount(page);
        })
        await test.step("Step 14: Verify 'Sample' exact number display under product type.", async () => {
            await PLPPage.verifyProductTypeFilterSampleCountNumber(page, testdata.RegularUser.FilterCount.count4);
        })
    })
})