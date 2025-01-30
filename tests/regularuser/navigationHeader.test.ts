import { test, chromium, Page, BrowserContext } from '@playwright/test';
import { NavigationHeaderPageActions } from '../../pages/NavigationHeaderPage';
import { CommonHelper } from '../../utils/commonHelper';
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

test.describe('Navigation Header', () => {
    test("Verify that a black header utility banner section is prominently displayed at the top of the website.", { tag: '@regression @regularUser @navigationHeader' }, async () => {
        await test.step("Step 1: Verify that a black header utility banner section is prominently displayed at the top of the website.", async () => {
            await NavigationHeaderPageActions.visibilityOfUtilityBannerHeaderBar(page);
        })
    })

    test("Verify that users can see the marketing content information and/or the icon that has been set up in the CMS.", { tag: '@regression @regularUser @navigationHeader' }, async () => {
        await test.step("Step 1: Verify Marketing Icon is display", async () => {
            await NavigationHeaderPageActions.visibilityOfMarketingIcon(page);
        })
        await test.step("Step 2: Verify Marketing Content Infomration is display", async () => {
            await NavigationHeaderPageActions.visibilityOfMarketingContentInformation(page);
        })
    })

    test("Verify that a white navigation header is fixed at the top of all pages, remaining visible even as the user scrolls down the page.", { tag: '@regression @regularUser @navigationHeader' }, async () => {
        await test.step("Step 1: Verify white navigation header display at the top", async () => {
            await NavigationHeaderPageActions.visibilityOfNavigationHeaderBar(page);
        })
        await test.step("Step 2: Scroll Down the page", async () => {
            await NavigationHeaderPageActions.scrollDownHomePage(page);
        })
        await test.step("Step 3: Verify Navigation Header is Sticky", async () => {
            await NavigationHeaderPageActions.navigationHeaderIsSticky(page, `position`, `sticky`);
        })
        await test.step("Step 4: Verify white navigation header display at the top", async () => {
            await NavigationHeaderPageActions.visibilityOfNavigationHeaderBar(page);
        })
    })


    test("Verify that the PCA Skin logo is prominently displayed on the left side of the global navigation header. Upon clicking the logo, the user should be redirected to the homepage.", { tag: '@regression @regularUser @navigationHeader @fixedTestCase' }, async () => {
        await test.step("Step 1: Verify PCASkin Logo is displayed", async () => {
            await NavigationHeaderPageActions.visibilityPCASkinLogo(page);
        })
        await test.step("Step 2: Click on PCASkin Logo", async () => {
            await NavigationHeaderPageActions.clickOnPCASkinLogo(page);
        })
        await test.step("Step 3: Verify Home Page is visible", async () => {
            await HomePage.isWelcomeTextVisible(page);
        })
    })

    test(`Verify that users can navigate to the products page by clicking the "Shop" menu link from any page within the website.`, { tag: '@regression @regularUser @navigationHeader' }, async () => {
        await test.step("Step 1: Verify Shop option display at Home page", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Click on Shop option", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
        })
        await test.step("Step 3: Verify All Product page display", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
        })
    })

    test(`Verify that hovering over or clicking the "Shop" menu link expands the section to display a dropdown menu containing the product subcategories.`, { tag: '@regression @regularUser @navigationHeader' }, async () => {
        await test.step("Step 1: Verify Shop option display.", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Hover over the Shop option display.", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 3: Verify the Shop menu expand and subcategory is display.", async () => {
            await NavigationHeaderPageActions.visibilityOfShopMenuSubcategory(page);
        })
        await test.step("Step 4: Click on the Shop option display.", async () => {
            await NavigationHeaderPageActions.clickShopMenuList(page);
        })
        await test.step("Step 5: Verify the Shop menu expand and subcategory is display.", async () => {
            await NavigationHeaderPageActions.visibilityOfShopMenuSubcategory(page);
        })
        await test.step("Step 6: Verify Daily Care SubCategory is display", async () => {
            await NavigationHeaderPageActions.visibilityDailyCareSubHeading(page);
        })
        await test.step("Step 7: Verify option display in Daily Care SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityBestSellerFilterOption(page);
        })
        await test.step("Step 8: Verify option display in Daily Care SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityAntioxidantsFilterOption(page);
        })
        await test.step("Step 9: Verify option display in Daily Care SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityBroadSpectrumSPFFilterOption(page);
        })
        await test.step("Step 10: Verify option display in Daily Care SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityCleansersAndTonersFilterOption(page);
        })
        await test.step("Step 11: Verify option display in Daily Care SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityEyeNeckLipFilterOption(page);
        })
        await test.step("Step 12: Verify Professional Treatment SubCategory is display", async () => {
            await NavigationHeaderPageActions.visibilityProfessionalTreatmentsSubHeading(page);
        })
        await test.step("Step 13: Verify option display in Professional Treatment SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityPeelsProfessionalFilterOption(page);
        })
        await test.step("Step 14: Verify option display in Professional Treatment SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityPeelAlternativeFilterOption(page);
        })
        await test.step("Step 15: Verify option display in Professional Treatment SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityRetinoidTreatmentsFilterOption(page);
        })
        await test.step("Step 16: Verify option display in Professional Treatment SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityTherapeuticMasksFilterOption(page);
        })
        await test.step("Step 17: Verify option display in Professional Treatment SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityTreatmentEnhancementsFilterOption(page);
        })
        await test.step("Step 18: Verify By Skin Type SubCategory is display", async () => {
            await NavigationHeaderPageActions.visibilityBySkinTypeSubHeading(page);
        })
        await test.step("Step 19: Verify option display in By Skin Type SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityCombinationBySkinTypeFilterOption(page);
        })
        await test.step("Step 20: Verify option display in By Skin Type SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityDryBySkinTypeFilterOption(page);
        })
        await test.step("Step 21: Verify option display in By Skin Type SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityNormalBySkinTypeFilterOption(page);
        })
        await test.step("Step 22: Verify option display in By Skin Type SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityOilyBySkinTypeFilterOption(page);
        })
        await test.step("Step 23: Verify option display in By Skin Type SubCategory", async () => {
            await NavigationHeaderPageActions.visibilitySensitivityBySkinTypeFilterOption(page);
        })
        await test.step("Step 24: Verify By Skin Concern SubCategory is display", async () => {
            await NavigationHeaderPageActions.visibilityBySkinConcernSubHeading(page);
        })
        await test.step("Step 25: Verify option display in By Skin Concern SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityBrighteningBySkinConcernFilterOption(page);
        })
        await test.step("Step 26: Verify option display in By Skin Concern SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 27: Verify option display in By Skin Concern SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityAgingBySkinConcernFilterOption(page);
        })
        await test.step("Step 28: Verify option display in By Skin Concern SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityDiscolorationBySkinConcernFilterOption(page);
        })
        await test.step("Step 29: Verify option display in By Skin Concern SubCategory", async () => {
            await NavigationHeaderPageActions.visibilityPreventativeBySkinConcernFilterOption(page);
        })
    })

    test(`Verify that users can navigate to the desired product category from any page within the website by hovering over the "Shop" menu link and clicking on the corresponding subcategory.`, { tag: '@regression @regularUser @navigationHeader' }, async () => {
        await test.step("Step 1: Verify Shop option display.", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Hover over the Shop option display.", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 3: Verify Daily care Category is visible", async () => {
            await NavigationHeaderPageActions.visibilityDailyCareSubHeading(page);
        })
        await test.step("Step 4: Click on the Daily care Category", async () => {
            await NavigationHeaderPageActions.clickDailyCareSubHeading(page);
        })
        await test.step("Step 5: Verify Corresponding subcategory page display", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
        })
        await test.step("Step 2: Hover over the Shop option display.", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 6: Verify professional Treatment Category is visible", async () => {
            await NavigationHeaderPageActions.visibilityProfessionalTreatmentsSubHeading(page);
        })
        await test.step("Step 7: Click on the professional Treatment Category", async () => {
            await NavigationHeaderPageActions.clickProfessionalTreatmentsSubHeading(page);
        })
        await test.step("Step 8: Verify Corresponding subcategory page display", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
        })
    })

    test(`Verify that clicking on any submenu or the "View All" link beneath a submenu directs users to the corresponding category page, which displays all products belonging to the subcategories within that submenu.`, { tag: '@regression @regularUser @navigationHeader' }, async () => {
        await test.step("Step 1: Verify Shop option display.", async () => {
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Hover over the Shop option display.", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 3: Verify View All display for Daily Care.", async () => {
            await NavigationHeaderPageActions.visibilityViewAllDailyCareFilterOption(page);
        })
        await test.step("Step 4: Click on View All display for Daily Care.", async () => {
            await NavigationHeaderPageActions.clickViewAllDailyCareFilterOption(page);
        })
        await test.step("Step 5: Verify All Product page display", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
        })
        await test.step("Step 6: Hover over the Shop option display.", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 7: Verify View All display for Profession Treatment.", async () => {
            await NavigationHeaderPageActions.visibilityViewAllPrfessionalTreatmentsFilterOption(page);
        })
        await test.step("Step 8: Click on  View All display for Profession Treatment.", async () => {
            await NavigationHeaderPageActions.clickViewAllPrfessionalTreatmentsFilterOption(page);
        })
        await test.step("Step 9: Verify All Product page display", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
        })
        await test.step("Step 10: Hover over the Shop option display.", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 11: Verify View All display for By Skin Type.", async () => {
            await NavigationHeaderPageActions.visibilityViewAllBySkinTypeFilterOption(page);
        })
        await test.step("Step 12: Click on  View All display for By Skin Type.", async () => {
            await NavigationHeaderPageActions.clickViewAllBySkinTypeFilterOption(page);
        })
        await test.step("Step 13: Verify All Product page display", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
        })
        await test.step("Step 14: Hover over the Shop option display.", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 15: Verify View All display for By Skin Concern.", async () => {
            await NavigationHeaderPageActions.visibilityOfViewAllBySkinConcernFilterOption(page);
        })
        await test.step("Step 16: Click on  View All display for By Skin Concern.", async () => {
            await NavigationHeaderPageActions.clickOnViewAllBySkinConcernFilterOption(page);
        })
        await test.step("Step 17: Verify All Product page display", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
        })
    })

    test(`Verify that users can navigate to the external academy page by clicking the "Academy" menu link from any page within the website.`, { tag: '@regression @regularUser @navigationHeader' }, async () => {
        await test.step("Step 1: Verify Academy option display.", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        })
        await test.step("Step 2: Verify user click on Academy and redirected to external page", async () => {
            await NavigationHeaderPageActions.verifyUserClickAndRedirectToExternalPage(page, testdata.RegularUser.Links.academy);
        })
        await page.waitForTimeout(5000)
    })

    test(`Verify that hovering over or clicking the "Academy" menu link expands the section to display a dropdown menu containing the courses subcategories.`, { tag: '@regression @regularUser @navigationHeader' }, async () => {
        await test.step("Step 1: Verify Academy option display.", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        })
        await test.step("Step 2: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        })
        await test.step("Step 3: Verify Course Sub category display Academy.", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
        })
        await test.step("Step 4: Verify option display under Course Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityFundamentalFilterOption(page);
        })
        await test.step("Step 5: Verify option display under Course Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityOfCertificationCourseFilterOption(page);
        })
        await test.step("Step 6: Verify option display under Course Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityOfAcne(page);
        })
        await test.step("Step 7: Verify option display under Course Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityAcingOption(page);
        })
        await test.step("Step 8: Verify option display under Course Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityOfHyperPigmentationFilterOption(page);
        })
        await test.step("Step 9: Verify option display under Course Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityBusinessBuildingFilterOption(page);
        })
        await test.step("Step 10: Verify option display under Course Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityPeelApplicationVideoFilterOption(page);
        })
        await test.step("Step 11: Verify option display under Course Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityOfMulticulturalSkinFilterOption(page);
        })
        await test.step("Step 12: Verify option display under Course Sub category.", async () => {
            await NavigationHeaderPageActions.visibilitySensitiveSkinFilterOption(page);
        })
        await test.step("Step 13: Verify Learn Sub category display Academy.", async () => {
            await NavigationHeaderPageActions.visibilityLearnSubHeading(page);
        })
        await test.step("Step 14: Verify option display under Learn Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityOfSkinConcernsFilterOption(page);
        })
        await test.step("Step 15: Verify option display under Learn Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityOfSkinTypesFilterOption(page);
        })
        await test.step("Step 16: Verify option display under Learn Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityOfSkinIntelligenceFilterOption(page);
        })
        await test.step("Step 17: Verify option display under Learn Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityOfProfessionalPeelsFilterOption(page);
        })
        await test.step("Step 18: Verify option display under Learn Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityOfMyOnlineCoursesFilterOption(page);
        })
        await test.step("Step 19: Verify Education Memberships Sub category display Academy.", async () => {
            await NavigationHeaderPageActions.visibilityOfEducationMembershipsSubHeading(page);
        })
        await test.step("Step 20: Verify option display under Education Memberships Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityAllAccessMembershipFilterOption(page);
        })
        await test.step("Step 21: Verify option display under Education Memberships Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityOfAcneMembershipFilterOption(page);
        })
        await test.step("Step 22: Verify option display under Education Memberships Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityAgingMembershipFilterOption(page);
        })
        await test.step("Step 23: Verify option display under Education Memberships Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityHyperPigmentationMembershipFilterOption(page);
        })
        await test.step("Step 24: Verify option display under Education Memberships Sub category.", async () => {
            await NavigationHeaderPageActions.visibilitySensitiveSkinMembershipFilterOption(page);
        })
        await test.step("Step 25: Verify option display under Education Memberships Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityEnhancingYourServiceFilterOption(page);
        })
        await test.step("Step 26: Verify option display under Education Memberships Sub category.", async () => {
            await NavigationHeaderPageActions.visibilityMultiCulturalSkinMembershipFilterOption(page);
        })
    })

    test(`Verify that clicking on the "Courses" submenu or the "View All" link beneath it directs users to the dedicated courses page.`, { tag: '@regression @regularUser @navigationHeader' }, async () => {
        await test.step("Step 1: Verify Academy option display.", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        })
        await test.step("Step 2: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        })
        await test.step("Step 3: Verify Course Sub category display Academy.", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
        })
        await test.step("Step 4: Click on Course Sub category under Academy.", async () => {
            await NavigationHeaderPageActions.clickOnSubHeadingCourseText(page);
        })
        await test.step("Step 5: Verify All Course page display", async () => {
            await NavigationHeaderPageActions.visibilityOfAllCoursePage(page);
        })
        await test.step("Step 6: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        })
        await test.step(`Step 7: Verify "View All" option display under Course.`, async () => {
            await NavigationHeaderPageActions.visibilityViewAllCourses(page);
        })
        await test.step(`Step 8: Click on "View All" option display under Course.`, async () => {
            await NavigationHeaderPageActions.clickOnViewAllCourses(page);
        })
        await test.step("Step 9: Verify All Course page display", async () => {
            await NavigationHeaderPageActions.visibilityOfAllCoursePage(page);
        })
    })

    test(`Verify that all links displayed under the "Courses" submenu section are internal links that direct users to the corresponding course subcategory pages within the website.`, { tag: '@regression @regularUser @navigationHeader @fixedTestCase' }, async () => {
        await test.step("Step 1: Verify Academy option display.", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        });
        await test.step("Step 2: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        // Fundamental Courses
        await test.step("Step 3: Verify Fundamental Courses option display.", async () => {
            await NavigationHeaderPageActions.visibilityFundamentalFilterOption(page);
        });
        await test.step("Step 4: Click on Fundamental Courses option.", async () => {
            await NavigationHeaderPageActions.clickOnFundamentalCoursesFilterOption(page);
        });
        await test.step("Step 5: Verify Fundamental Courses page display.", async () => {
            await NavigationHeaderPageActions.visibilityOfFundamentalCoursePage(page);
        });
        // Certification Courses
        await test.step("Step 6: Hover Academy option display again.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 7: Verify Certification Courses option display.", async () => {
            await NavigationHeaderPageActions.visibilityOfCertificationCourseFilterOption(page);
        });
        await test.step("Step 8: Click on Certification Courses option.", async () => {
            await NavigationHeaderPageActions.clickOnCertificationCourseFilterOption(page);
        });
        await test.step("Step 9: Verify Certification Courses page display.", async () => {
            await NavigationHeaderPageActions.visibilityOfCertificationCoursePage(page);
        });
        // Acne
        await test.step("Step 10: Hover Academy option display again.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 11: Verify Acne option display.", async () => {
            await NavigationHeaderPageActions.visibilityOfAcne(page);
        });
        await test.step("Step 12: Click on Acne option.", async () => {
            await NavigationHeaderPageActions.clickOnAcneOption(page);
        });
        await test.step("Step 13: Verify Acne page display.", async () => {
            await NavigationHeaderPageActions.visibilityOfAcnePage(page);
        });
        // Aging
        await test.step("Step 14: Hover Academy option display again.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 15: Verify Aging option display.", async () => {
            await NavigationHeaderPageActions.visibilityAcingOption(page);
        });
        await test.step("Step 16: Click on Aging option.", async () => {
            await NavigationHeaderPageActions.clickOnAgingOption(page);
        });
        await test.step("Step 17: Verify Aging page display.", async () => {
            await NavigationHeaderPageActions.visibilityOfAgingPage(page);
        });
        // Hyperpigmentation
        await test.step("Step 18: Hover Academy option display again.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 19: Verify Hyperpigmentation option display.", async () => {
            await NavigationHeaderPageActions.visibilityOfHyperPigmentationFilterOption(page);
        });
        await test.step("Step 20: Click on Hyperpigmentation option.", async () => {
            await NavigationHeaderPageActions.clickOnHyperpigmentationFilterOption(page);
        });
        await test.step("Step 21: Verify Hyperpigmentation page display.", async () => {
            await NavigationHeaderPageActions.visibilityOfHyperpigmentationPage(page);
        });
        // Sensitive Skin
        await test.step("Step 22: Hover Academy option display again.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 23: Verify Sensitive Skin option display.", async () => {
            await NavigationHeaderPageActions.visibilitySensitiveSkinFilterOption(page);
        });
        await test.step("Step 24: Click on Sensitive Skin option.", async () => {
            await NavigationHeaderPageActions.clickOnSensitiveSkinFilterOption(page);
        });
        await test.step("Step 25: Verify Sensitive Skin page display.", async () => {
            await NavigationHeaderPageActions.visibilityOfSensitiveSkinPage(page);
        });
        // Business Building
        await test.step("Step 26: Hover Academy option display again.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 27: Verify Business Building option display.", async () => {
            await NavigationHeaderPageActions.visibilityBusinessBuildingFilterOption(page);
        });
        await test.step("Step 28: Click on Business Building option.", async () => {
            await NavigationHeaderPageActions.clickOnBusinessBuildingFilterOption(page);
        });
        await test.step("Step 29: Verify Business Building page display.", async () => {
            await NavigationHeaderPageActions.visibilityOfBusinessBuildingPage(page);
        });
        // Peel Application Video
        await test.step("Step 30: Hover Academy option display again.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 31: Verify Peel Application Video option display.", async () => {
            await NavigationHeaderPageActions.visibilityPeelApplicationVideoFilterOption(page); ``
        });
        await test.step("Step 32: Click on Peel Application Video option.", async () => {
            await NavigationHeaderPageActions.clickOnPeelApplicationsVideoFilterOption(page);
        });
        await test.step("Step 33: Verify Peel Application Video page display.", async () => {
            await NavigationHeaderPageActions.visibilityOfPeelApplicationPage(page);
        });
        await page.goBack()
        // Multicultural Skin
        await test.step("Step 34: Hover Academy option display again.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 35: Verify Multicultural Skin option display.", async () => {
            await NavigationHeaderPageActions.visibilityOfMulticulturalSkinFilterOption(page);
        });
        await test.step("Step 36: Click on Multicultural Skin option.", async () => {
            await NavigationHeaderPageActions.clickOnMulticulturalSkinFilterOption(page);
        });
        await test.step("Step 37: Verify Multicultural Skin page display.", async () => {
            await NavigationHeaderPageActions.visibilityOfMulticulturalSkinPage(page);
        });
    });

    test(`Verify that all links displayed under the "Learn" menu section are external links that direct users to the external website pcaskinacademy.com.`, { tag: '@regression @regularUser @navigationHeader ' }, async () => {
        await test.step("Step 1: Verify Academy option display.", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        });
        await test.step("Step 2: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 3: Click on Skin Concerns Submenu.", async () => {
            await NavigationHeaderPageActions.clickOnSkinConcernsFilterOption(page);
            await page.waitForTimeout(5000)
        });
        await test.step("Step 4: Check submenu external link.", async () => {
            await NavigationHeaderPageActions.checkURLOfSubmenu(page, testdata.RegularUser.FooterLink.skinConcern);
        });
        await page.goBack()
        await page.waitForTimeout(2000)
        await test.step("Step 5: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 6: Click on Skin Type Submenu.", async () => {
            await NavigationHeaderPageActions.clickOnSkinTypesFilterOption(page);
            await page.waitForTimeout(5000)
        });
        await test.step("Step 7: Check submenu external link.", async () => {
            await NavigationHeaderPageActions.checkURLOfSubmenu(page, testdata.RegularUser.FooterLink.skinTypes);
        });
        await page.goBack()
        await page.waitForTimeout(2000)
        await test.step("Step 8: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 9: Click on Skin intelligence Type Submenu.", async () => {
            await NavigationHeaderPageActions.clickOnSkinIntelligenceFilterOption(page);
            await page.waitForTimeout(5000)
        });
        await test.step("Step 10: Check submenu external link.", async () => {
            await NavigationHeaderPageActions.checkURLOfSubmenu(page, testdata.RegularUser.FooterLink.skinIntelligence);
        });
        await page.goBack()
        await page.waitForTimeout(2000)
        await test.step("Step 8: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 9: Click on Professional peels Type Submenu.", async () => {
            await NavigationHeaderPageActions.clickOnProfessionalPeelsFilterOption(page);
            await page.waitForTimeout(5000)
        });
        await test.step("Step 10: Check submenu external link.", async () => {
            await NavigationHeaderPageActions.checkURLOfSubmenu(page, testdata.RegularUser.FooterLink.professionalPeels);
        });
        await page.goBack()
        await page.waitForTimeout(2000)
        await test.step("Step 8: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 9: Click on My online courses Type Submenu.", async () => {
            await NavigationHeaderPageActions.clickOnMyOnlineCoursesFilterOption(page);
            await page.waitForTimeout(5000)
        });
        await test.step("Step 10: Check submenu external link.", async () => {
            await NavigationHeaderPageActions.checkURLOfSubmenu(page, testdata.RegularUser.Links.myOnlineCourses);
        });
    })


    test(`Verify that clicking on the "Education Memberships" submenu or the "View All" link beneath it directs users to the dedicated "Education Memberships" course category page.`, { tag: '@regression @regularUser @navigationHeader' }, async () => {
        await test.step("Step 1: Verify Academy option display.", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        })
        await test.step("Step 2: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        })
        await test.step("Step 3: Verify Sub category display Education Memberships.", async () => {
            await NavigationHeaderPageActions.visibilityOfEducationMembershipsSubHeading(page);
        })
        await test.step("Step 4: Click on Education Memberships Sub category under Academy.", async () => {
            await NavigationHeaderPageActions.clickOnEducationMemberShipsSubHeading(page);
        })
        await test.step("Step 5: Verify Education Memberships page display", async () => {
            await NavigationHeaderPageActions.visibilityOfEducationMembership(page);
        })
        await test.step("Step 6: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        })
        await test.step(`Step 7: Verify "View All" option display under Education Memberships.`, async () => {
            await NavigationHeaderPageActions.visibilityViewAllEducationMembershipFilterOption(page);
        })
        await test.step(`Step 8: Click on "View All" option display under Education Memberships.`, async () => {
            await NavigationHeaderPageActions.clickOverViewAllEducationMembershipFilterOption(page);
        })
        await test.step("Step 5: Verify Education Memberships page display", async () => {
            await NavigationHeaderPageActions.visibilityOfEducationMembership(page);
        })
    })

    test(`Verify that all links displayed under the "Education Memberships" menu section are internal links that direct users to the corresponding education membership course pages within the website.`, { tag: '@regression @regularUser @navigationHeader ' }, async () => {
        await test.step("Step 1: Verify Academy option display.", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        });
        await test.step("Step 2: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 3: Click on All-access membership.", async () => {
            await NavigationHeaderPageActions.clickOnAllAccessMembershipFilterOption(page);
            await page.waitForTimeout(5000);
        });
        await test.step("Step 4: Verify Internal URL of All-access membership.", async () => {
            await NavigationHeaderPageActions.checkURLOfSubmenu(page, testdata.RegularUser.Links.allAccessMembership);
        });
        await test.step("Step 5: Verify user redirect to All Access membership page.", async () => {
            await NavigationHeaderPageActions.visibilityOfAllAccessMembershipPage(page);
        });

        // Acne Membership Steps
        await test.step("Step 6: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 7: Click on Acne membership.", async () => {
            await NavigationHeaderPageActions.clickOnAcneMembershipFilterOption(page);
            await page.waitForTimeout(5000);
        });
        await test.step("Step 8: Verify Internal URL of Acne membership.", async () => {
            await NavigationHeaderPageActions.checkURLOfSubmenu(page, testdata.RegularUser.Links.acneMembership);
        });
        await test.step("Step 9: Verify user redirect to Acne membership page.", async () => {
            await NavigationHeaderPageActions.visibilityOfAcneMembershipPage(page);
        });

        // Aging Membership Steps
        await test.step("Step 10: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 11: Click on Aging membership.", async () => {
            await NavigationHeaderPageActions.clickOnAgingMembershipFilterOption(page);
            await page.waitForTimeout(5000);
        });
        await test.step("Step 12: Verify Internal URL of Aging membership.", async () => {
            await NavigationHeaderPageActions.checkURLOfSubmenu(page, testdata.RegularUser.Links.agingMembership);
        });
        await test.step("Step 13: Verify user redirect to Aging membership page.", async () => {
            await NavigationHeaderPageActions.visibilityOfAgingMembershipPage(page);
        });

        // Hyperpigmentation Membership Steps
        await test.step("Step 14: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 15: Click on Hyperpigmentation membership.", async () => {
            await NavigationHeaderPageActions.clickOnHyperPigmentationMembershipFilterOption(page);
            await page.waitForTimeout(5000);
        });
        await test.step("Step 16: Verify Internal URL of Hyperpigmentation membership.", async () => {
            await NavigationHeaderPageActions.checkURLOfSubmenu(page, testdata.RegularUser.Links.hyperpigmentation);
        });
        await test.step("Step 17: Verify user redirect to Hyperpigmentation membership page.", async () => {
            await NavigationHeaderPageActions.visibilityOfHyperpigmentationMembershipPage(page);
        });

        // Sensitive Skin Membership Steps
        await test.step("Step 18: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 19: Click on Sensitive Skin membership.", async () => {
            await NavigationHeaderPageActions.clickOnSensitiveSkinMembershipFilterOption(page);
            await page.waitForTimeout(5000);
        });
        await test.step("Step 20: Verify Internal URL of Sensitive Skin membership.", async () => {
            await NavigationHeaderPageActions.checkURLOfSubmenu(page, testdata.RegularUser.Links.sensitiveSkin);
        });
        await test.step("Step 21: Verify user redirect to Sensitive Skin membership page.", async () => {
            await NavigationHeaderPageActions.visibilityOfSensitiveSkinMembershipPage(page);
        });

        // Enhancing Your Services Membership Steps
        await test.step("Step 22: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 23: Click on Enhancing Your Services membership.", async () => {
            await NavigationHeaderPageActions.clickOnEnhancingYourServiceFilterOption(page);
            await page.waitForTimeout(5000);
        });
        await test.step("Step 24: Verify Internal URL of Enhancing Your Services membership.", async () => {
            await NavigationHeaderPageActions.checkURLOfSubmenu(page, testdata.RegularUser.Links.enhancingYourServices);
        });
        await test.step("Step 25: Verify user redirect to Enhancing Your Services membership page.", async () => {
            await NavigationHeaderPageActions.visibilityOfEnhancingYourServicesMembershipPage(page);
        });

        // Multicultural Skin Membership Steps
        await test.step("Step 26: Hover Academy option display.", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        });
        await test.step("Step 27: Click on Multicultural Skin membership.", async () => {
            await NavigationHeaderPageActions.clickOnMultiCulturalSkinMembershipFilterOption(page);
            await page.waitForTimeout(5000);
        });
        await test.step("Step 28: Verify Internal URL of Multicultural Skin membership.", async () => {
            await NavigationHeaderPageActions.checkURLOfSubmenu(page, testdata.RegularUser.Links.multiculturalSkin);
        });
        await test.step("Step 29: Verify user redirect to Multicultural Skin membership page.", async () => {
            await NavigationHeaderPageActions.visibilityOfMulticulturalSkinMembershipPage(page);
        });
    });

    test(`Verify that the "Events" menu link directs users to the external pcaskinacademy.com events page.`, { tag: '@regression @regularUser @navigationHeader ' }, async () => {
        await test.step("Step 1: Verify Event option display.", async () => {
            await NavigationHeaderPageActions.visibilityEventMenuList(page);
        });
        await test.step("Step 2: Click on Event option display and verify external URL", async () => {
            await NavigationHeaderPageActions.clickOnAcademyAndVerifyURL(page);
        });
    })

    test(`Verify that hovering over or clicking the menu link expands the section to reveal the following calendars:Treatment Tuesdays, National seminars and it's URL`, { tag: '@regression @regularUser @navigationHeader ' }, async () => {
        await test.step("Step 1: Verify Event option display.", async () => {
            await NavigationHeaderPageActions.visibilityEventMenuList(page);
        });
        await test.step("Step 2: Hover on Event option display.", async () => {
            await NavigationHeaderPageActions.hoverEventMenuList(page);
        });
        await test.step("Step 3: Verify Treatment Tuesdays suboption display.", async () => {
            await NavigationHeaderPageActions.visibilityTreatmentTuesdaysFilterOption(page);
        });
        await test.step("Step 4: Verify National seminars suboption display.", async () => {
            await NavigationHeaderPageActions.visibilityNationalSeminarsFilterOption(page);
        });
        await test.step("Step 3: Click on Treatment Tuesdays suboption display.", async () => {
            await NavigationHeaderPageActions.clickOnTreatmentTuesdaysFilterOption(page);
        });
        await test.step("Step 4: Verify URL of Treatment Tuesdays.", async () => {
            await NavigationHeaderPageActions.checkURLOfPage(page, testdata.RegularUser.Links.treatmentTuesday);
        });
        await page.goBack()
        await test.step("Step 2: Hover on Event option display.", async () => {
            await page.waitForTimeout(2000)
            await NavigationHeaderPageActions.hoverEventMenuList(page);
        });
        await test.step("Step 3: Click on National seminars suboption display.", async () => {
            await page.waitForTimeout(2000)
            await NavigationHeaderPageActions.clickOnNationlSeminarsFilterOption(page);
        });
        await test.step("Step 4: Verify URL of National seminars.", async () => {
            await NavigationHeaderPageActions.checkURLOfPage(page, testdata.RegularUser.Links.nationalSeminars);
        });
    })

    test(`Verify that the "About" menu link directs users to the /about/our-story page.`, { tag: '@regression @navigationHeader ' }, async () => {
        await test.step("Step 1: Verify About option display.", async () => {
            await NavigationHeaderPageActions.visibilityAboutMenuList(page);
        });
        await test.step("Step 2: Click on About option display.", async () => {
            await NavigationHeaderPageActions.clickAboutMenuList(page);
        });
        await test.step("Step 3: Verify URL of About page.", async () => {
            await NavigationHeaderPageActions.checkURLOfPage(page, testdata.RegularUser.Links.ourStory);
        });
        await test.step("Step 4: Verify About Page Header is display.", async () => {
            await NavigationHeaderPageActions.visibilityAboutPageHeader(page);
        });
    })

    test(`"Verify that hovering over or clicking a menu link expands the section to reveal the following submenus:- About & Customer Service"`, { tag: '@regression @navigationHeader' }, async () => {

        await test.step("Step 1: Verify About option display.", async () => {
            await NavigationHeaderPageActions.visibilityAboutMenuList(page);
        });
        await test.step("Step 2: Hover on About option display.", async () => {
            await NavigationHeaderPageActions.hoverAboutMenuList(page);
        });
        await test.step("Step 3: Verify About SubHeader option is display.", async () => {
            await NavigationHeaderPageActions.visibilityOfAboutSubHeading(page);
        });
        await test.step("Step 4: Verify Customer Service SubHeader option is display.", async () => {
            await NavigationHeaderPageActions.visibiltyCustomerServiceSubHeading(page);
        });
    })

    test(`Verify that the "About" submenu contains the following items, each of which links to the corresponding page:- Our story (/misc/about/our-story) , Culture (/misc/about/culture) , Our peel legacy (/misc/about/our-peel-legacy)`, { tag: '@regression @navigationHeader' }, async () => {

        await test.step("Step 1: Verify About option display.", async () => {
            await NavigationHeaderPageActions.visibilityAboutMenuList(page);
        });
        await test.step("Step 2: Hover on About option display.", async () => {
            await NavigationHeaderPageActions.hoverAboutMenuList(page);
        });
        await test.step("Step 3: Verify Our Story option display.", async () => {
            await NavigationHeaderPageActions.visibilityOurStoryFilterOption(page);
        });
        await test.step("Step 4: Click on Our Story option display.", async () => {
            await NavigationHeaderPageActions.clickOnOurStoryFilterOption(page);
        });
        await test.step("Step 5: Verify URL of Our Story page.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, `/misc/about/our-story`);
        });
        await test.step("Step 6: Verify user redirect to Our Story page.", async () => {
            await NavigationHeaderPageActions.visibilityOurStoryPageHeader(page);
        });
        await test.step("Step 7: Hover on About option display.", async () => {
            await NavigationHeaderPageActions.hoverAboutMenuList(page);
        });
        await test.step("Step 8: Verify Culture option display.", async () => {
            await NavigationHeaderPageActions.visibilityCultureFilterOption(page);
        });
        await test.step("Step 9: Click on Culture option display.", async () => {
            await NavigationHeaderPageActions.clickOnCultureFilterOption(page);
        });
        await test.step("Step 10: Verify URL of Culture page.", async () => {
            await page.waitForTimeout(10000)
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, `/misc/about/culture`);
        });
        await test.step("Step 11: Verify user redirect to Culture page.", async () => {
            await NavigationHeaderPageActions.visibilityCulturePageHeader(page);
        });
        await test.step("Step 12: Hover on About option display.", async () => {
            await page.waitForTimeout(2000)
            await NavigationHeaderPageActions.hoverAboutMenuList(page);
        });
        await test.step("Step 13: Verify Our Peel Legacy option display.", async () => {
            await NavigationHeaderPageActions.visibilityOurPeelLegacyFilterOption(page);
        });
        await test.step("Step 14: Click on Our Peel Legacy option display.", async () => {
            await page.waitForTimeout(2000)
            await NavigationHeaderPageActions.clickOnOurPeelLegacyFilterOption(page);
        });
        await test.step("Step 15: Verify URL of Our Peel Legacy page.", async () => {
            await page.waitForTimeout(10000)
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, `/misc/about/our-peel-legacy`);
        });
        await test.step("Step 16: Verify user redirect to Our Peel Legacy page.", async () => {
            await NavigationHeaderPageActions.visibilityOurPeelLegacyPageHeader(page);
        });
    });

    test(`Verify that the "Customer Services" submenu contains the following items, each of which links to the corresponding page: FAQs (/misc/faq), Returns & exchanges (/misc/about/returns-exchanges), Shipping terms (/misc/about/shipping-terms), Contact us (/misc/about/contact-us), Subscriptions (/misc/about/subscription)`, { tag: '@regression @navigationHeader' }, async () => {

        await test.step("Step 1: Verify About option display.", async () => {
            await NavigationHeaderPageActions.visibilityAboutMenuList(page);
        });
        await test.step("Step 2: Hover on About menu.", async () => {
            await NavigationHeaderPageActions.hoverAboutMenuList(page);
        });
        await test.step("Step 3: Verify FAQ option display.", async () => {
            await NavigationHeaderPageActions.visibilityFAQFilterOption(page);
        });
        await test.step("Step 4: Click on FAQ option.", async () => {
            await NavigationHeaderPageActions.clickOnFAQFilterOption(page);
        });
        await test.step("Step 5: Verify URL of FAQ page.", async () => {
            await NavigationHeaderPageActions.checkURLOfPage(page, `/misc/faq`);
        });
        await test.step("Step 6: Verify user redirect to FAQ page.", async () => {
            await NavigationHeaderPageActions.visibilityFAQPageHeader(page);
        });
        await test.step("Step 7: Hover on About menu.", async () => {
            await NavigationHeaderPageActions.hoverAboutMenuList(page);
        });
        await test.step("Step 8: Verify Returns & Exchanges option display.", async () => {
            await NavigationHeaderPageActions.visibilityReturnAndExchangeFilterOption(page);
        });
        await test.step("Step 9: Click on Returns & Exchanges option.", async () => {
            await NavigationHeaderPageActions.clickOnReturnAndExchangeFilterOption(page);
            await page.waitForTimeout(4000)
        });
        await test.step("Step 10: Verify URL of Returns & Exchanges page.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, `/misc/about/returns-exchanges`);
        });
        await test.step("Step 11: Verify user redirect to Returns & Exchanges page.", async () => {
            await NavigationHeaderPageActions.visibilityReturnExchangePageHeader(page);
        });
        await test.step("Step 12: Hover on About menu.", async () => {
            await NavigationHeaderPageActions.hoverAboutMenuList(page);
        });
        await test.step("Step 13: Verify Shipping Terms option display.", async () => {
            await NavigationHeaderPageActions.visibilityShippingTermsFilterOption(page);
        });
        await test.step("Step 14: Click on Shipping Terms option.", async () => {
            await NavigationHeaderPageActions.clickOnShippingTermsFilterOption(page);
            await page.waitForTimeout(4000)
        });
        await test.step("Step 15: Verify URL of Shipping Terms page.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, `/misc/about/shipping-terms`);
        });
        await test.step("Step 16: Verify user redirect to Shipping Terms page.", async () => {
            await NavigationHeaderPageActions.visibilityShippingTermsPageHeader(page);
        });
        // Contact Us
        await test.step("Step 17: Hover on About menu.", async () => {
            await NavigationHeaderPageActions.hoverAboutMenuList(page);
        });
        await test.step("Step 18: Verify Contact Us option display.", async () => {
            await NavigationHeaderPageActions.visibilityOfContactUsFilterOption(page);
        });
        await test.step("Step 19: Click on Contact Us option.", async () => {
            await NavigationHeaderPageActions.clickOnContactUsFilterOption(page);
            await page.waitForTimeout(4000)
        });
        await test.step("Step 20: Verify URL of Contact Us page.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, `/misc/about/contact-us`);
        });
        await test.step("Step 21: Verify user redirect to Contact Us page.", async () => {
            await NavigationHeaderPageActions.visibilityContactUsPageHeader(page);
        });
        await test.step("Step 22: Hover on About menu.", async () => {
            await NavigationHeaderPageActions.hoverAboutMenuList(page);
        });
        await test.step("Step 23: Verify Subscription option display.", async () => {
            await NavigationHeaderPageActions.visibilityOfSubscriptionFilterOption(page);
        });
        await test.step("Step 24: Click on Subscription option.", async () => {
            await NavigationHeaderPageActions.clickOnSubscriptionFilterOption(page);
            await page.waitForTimeout(4000)
        });
        await test.step("Step 25: Verify URL of Subscription page.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, `/misc/about/subscription`);
        });
        await test.step("Step 26: Verify user redirect to Subscription page.", async () => {
            await NavigationHeaderPageActions.visibilitySubscriptionPageHeader(page);
        });
    });

    test(`Verify that the "Business tools" menu link directs users to the "Business Tools" course category page.`, { tag: '@regression @navigationHeader' }, async () => {
        await test.step("Step 1: Verify Business tools menu display.", async () => {
            await NavigationHeaderPageActions.visibilityBusinessToolMenuList(page);
        });
        await test.step("Step 2: Click on Business tools menu.", async () => {
            await NavigationHeaderPageActions.clickBusinessToolMenuList(page);
        });
        await test.step("Step 3: Verify user redirect to business tool page", async () => {
            await NavigationHeaderPageActions.visibilityBusinessToolPageHeader(page);
        });
    })

    test(`"Verify that the ""Marketing materials"" submenu contains the following item(s), each of which links to the corresponding page:- Content Hub (https://contents.pcaskinpro.com)"`, { tag: '@regression @navigationHeader' }, async () => {

        await test.step("Step 1: Verify Business tools menu display.", async () => {
            await NavigationHeaderPageActions.visibilityBusinessToolMenuList(page);
        });
        await test.step("Step 2: Hover over Business tools menu.", async () => {
            await NavigationHeaderPageActions.hoverBusinessToolMenuList(page);
        });
        await test.step("Step 3: Verify Marketing Material Submenu display.", async () => {
            await NavigationHeaderPageActions.visibilityOfMarketingMaterialsSubHeading(page)
        })
        await test.step("Step 4: Verify Content Hub option display under Submenu.", async () => {
            await NavigationHeaderPageActions.visibilityOfContentHubGilterOption(page)
        })
        await test.step("Step 5: Click on Content Hub option display under Submenu.", async () => {
            await NavigationHeaderPageActions.clickOnContentHubAndVerifyURL(page)
        })
    })

    test(`Verify that the "Student" menu link is prominently displayed as the last item in the global navigation header.`, { tag: '@regression @navigationHeader' }, async () => {

        await test.step("Step 1: Verify Navigation menu display.", async () => {
            await NavigationHeaderPageActions.visibilityOfNavigationMenuBar(page);
        });
        await test.step("Step 2: Verify Student menu display.", async () => {
            await NavigationHeaderPageActions.visibilityOfStudentMenuOption(page);
        });
        await test.step("Step 3: Verify Student menu display at last.", async () => {
            await NavigationHeaderPageActions.visibilityOfStudentMenuOptionAtLast(page);
        });
    })

    test(`Verify that clicking on the "View All" link beneath the "Student Products" submenu directs users to the dedicated student-only products page.`, { tag: '@regression @navigationHeader ' }, async () => {

        await test.step("Step 1: Verify Student menu display.", async () => {
            await NavigationHeaderPageActions.visibilityOfStudentMenuOption(page);
        });
        await test.step("Step 2: Hover over Student menu display.", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        });
        await test.step("Step 3: Student Product Submenu display.", async () => {
            await NavigationHeaderPageActions.visibilityStudentProductsText(page);
        });
        await test.step("Step 4: 'View All' option display under Student Product Submenu.", async () => {
            await NavigationHeaderPageActions.visibilityViewAllStudents(page);
        });
        await test.step("Step 5: Click on 'View All' option display under Student Product Submenu.", async () => {
            await NavigationHeaderPageActions.clickOnViewAllStudents(page);
        });
        await test.step("Step 6: Verify URL of Student page.", async () => {
            await NavigationHeaderPageActions.checkURLOfPage(page, testdata.RegularUser.Links.studentPage);
        });
        await test.step("Step 7: Verify header of Student page", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page)
        })
        await test.step("Step 8: Verify 'Student only' option display in the Student page", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page)
        })
        await test.step("Step 9: Verify 'Student only' Text in the Student page", async () => {
            await NavigationHeaderPageActions.verifyTextOfStudentOnly(page, `student-only`)
        })
    });

    test(`Verify that clicking on the "Student Courses" submenu expands the section to display a list of student courses. Upon clicking on any of these listed courses, users should be directed to the corresponding course page.`, { tag: '@regression @navigationHeader' }, async () => {

        await test.step("Step 1: Verify Navigation Bar is Visible", async () => {
            await NavigationHeaderPageActions.visibilityOfNavigationMenuBar(page)
        })
        await test.step("Step 2: Verify Navigation Bar is Visible", async () => {
            await NavigationHeaderPageActions.visibilityOfNavigationMenuBar(page)
        })
        await test.step("Step 3: Verify Student menu display.", async () => {
            await NavigationHeaderPageActions.visibilityOfStudentMenuOption(page);
        });
        await test.step("Step 4: Hover over Student menu display.", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        });
        await test.step("Step 5: Verify Student Course Submenu display.", async () => {
            await page.waitForTimeout(3000)
            await NavigationHeaderPageActions.visibilityStudentCourses(page);
        });
        await page.waitForTimeout(10000)
        await test.step("Step 6: Verify 'enhancing_student_curriculm' option display under submenu.", async () => {
            await NavigationHeaderPageActions.visibilityEnhancingStudentCurriculm(page);
        });
        await test.step("Step 7: Click on 'enhancing_student_curriculm' option display under submenu.", async () => {
            await NavigationHeaderPageActions.clickOnEnhancingStudentCurriculm(page);
        });
        await test.step("Step 8: Verify user redirected to corresponding student page.", async () => {
            await page.waitForTimeout(10000)
            await NavigationHeaderPageActions.visibilityOfStudentPageHeader(page);
        });
        await test.step("Step 9: Verify Student Page text display correctly", async () => {
            await NavigationHeaderPageActions.verifyTextOfStudentPageHeader(page, `Enhancing Student Curriculum`);
        });
    })

    test(`Verify that clicking on the "FAQ" link within the "Student Store" submenu directs users to the "/misc/student/about-me" page.`, { tag: '@regression @navigationHeader ' }, async () => {

        await test.step("Step 1: Verify Navigation Bar is Visible", async () => {
            await NavigationHeaderPageActions.visibilityOfNavigationMenuBar(page)
        })
        await test.step("Step 2: Verify Student menu display.", async () => {
            await NavigationHeaderPageActions.visibilityOfStudentMenuOption(page);
        });
        await test.step("Step 3: Hover over Student menu display.", async () => {
            await NavigationHeaderPageActions.hoverOnStudentMenuOption(page);
        });
        await test.step("Step 4: Verify Student Store Submenu display.", async () => {
            await page.waitForTimeout(3000)
            await NavigationHeaderPageActions.visibilityStudentStore(page);
        });
        await test.step("Step 5: Verify FAQ option display under Submenu Student Store display.", async () => {
            await NavigationHeaderPageActions.visibilityStudentFAQ(page);
        });
        await test.step("Step 6: Click on FAQ option display under Submenu Student Store display.", async () => {
            await NavigationHeaderPageActions.clickOnStudentFAQ(page);
        });
        await test.step("Step 7: Verify user redirect to /misc/student/about-me.", async () => {
            await page.waitForTimeout(10000)
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.Links.aboutMe);
        });
    })

    test(`Verify that the global search icon is the first icon visible in the user actions section.`, { tag: '@regression @navigationHeader' }, async () => {

        await test.step("Step 1: Verify Navigation Action is Visible", async () => {
            await NavigationHeaderPageActions.visibilityOfNavigationActionBar(page)
        })
        await test.step("Step 2: Verify Global Search Icon is Visible", async () => {
            await HomePage.isSearchProductsButtonVisible(page)
        })
    })

    test(`"Verify that the promotion message is displayed: - Free drop-shipping for any order totalling $100 or more"`, { tag: '@regression @navigationHeader' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        })
        await test.step("Step 2: Verify Navigation Action is Visible", async () => {
            await NavigationHeaderPageActions.visibilityOfNavigationActionBar(page)
        })
        await test.step("Step 3: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        })
        await test.step("Step 4: Click on Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        })
        await test.step("Step 5: Verify Promotion message text is display", async () => {
            await NavigationHeaderPageActions.verifyPromotionMessageText(page, testdata.RegularUser.PromotionMessage.message)
        })
    })

    test(`Verify that the following account options and their corresponding icons are displayed- Overview, Orders, Invoices, Subscriptions, Education, Personal Profile, Company Profile, Company Users, Dropship Addresses, Payment Methods, Favorites"`, { tag: '@regression @navigationHeader' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        })
        await test.step("Step 2: Verify Navigation Action is Visible", async () => {
            await NavigationHeaderPageActions.visibilityOfNavigationActionBar(page)
        })
        await test.step("Step 3: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        })
        await test.step("Step 4: Click on Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        })
        await test.step("Step 5: Verify title is display for 'Overview' option", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginOverviewOption(page)
        })
        await test.step("Step 6: Verify title is display for 'Orders' option", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginOrdersOption(page)
        })
        await test.step("Step 7: Verify title is display for 'Invoices' option", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginInvoicesOption(page)
        })
        await test.step("Step 8: Verify title is display for 'Subscriptions' option", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginSubscriptionsOption(page)
        })
        await test.step("Step 9: Verify title is display for 'Education' option", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginEducationOption(page)
        })
        await test.step("Step 10: Verify title is display for 'Personal Profile' option", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginPersonalProfileOption(page)
        })
        await test.step("Step 11: Verify title is display for 'Company Profile' option", async () => {
            await NavigationHeaderPageActions.visibilityOfCompanyProfile(page)
        })
        await test.step("Step 12: Verify title is display for 'Company Users' option", async () => {
            await NavigationHeaderPageActions.visibilityOfCompanyUser(page)
        })
        await test.step("Step 13: Verify title is display for 'Dropship Addresses' option", async () => {
            await NavigationHeaderPageActions.visibilityOfDropshipAddresses(page)
        })
        await test.step("Step 14: Verify title is display for 'Payment Methods' option", async () => {
            await NavigationHeaderPageActions.visibilityOfPaymentMethods(page)
        })
        await test.step("Step 15: Verify title is display for 'Favorites' option", async () => {
            await NavigationHeaderPageActions.visibilityOfFavorites(page)
        })
        await test.step("Step 16: Verify icon is displayed for 'Overview' option", async () => {
            await NavigationHeaderPageActions.visibilityOfOverviewIcon(page);
        });
        await test.step("Step 17: Verify icon is displayed for 'Orders' option", async () => {
            await NavigationHeaderPageActions.visibilityOfOrdersIcon(page);
        });
        await test.step("Step 18: Verify icon is displayed for 'Invoices' option", async () => {
            await NavigationHeaderPageActions.visibilityOfInvoicesIcon(page);
        });
        await test.step("Step 19: Verify icon is displayed for 'Subscriptions' option", async () => {
            await NavigationHeaderPageActions.visibilityOfSubscriptionsIcon(page);
        });
        await test.step("Step 20: Verify icon is displayed for 'Education' option", async () => {
            await NavigationHeaderPageActions.visibilityOfEducationIcon(page);
        });
        await test.step("Step 21: Verify icon is displayed for 'Personal Profile' option", async () => {
            await NavigationHeaderPageActions.visibilityOfPersonalProfileIcon(page);
        });
        await test.step("Step 22: Verify icon is displayed for 'Company Profile' option", async () => {
            await NavigationHeaderPageActions.visibilityOfCompanyProfileIcon(page);
        });
        await test.step("Step 23: Verify icon is displayed for 'Company Users' option", async () => {
            await NavigationHeaderPageActions.visibilityOfCompanyUsersIcon(page);
        });
        await test.step("Step 24: Verify icon is displayed for 'Dropship Addresses' option", async () => {
            await NavigationHeaderPageActions.visibilityOfDropshipAddressesIcon(page);
        });
        await test.step("Step 25: Verify icon is displayed for 'Payment Methods' option", async () => {
            await NavigationHeaderPageActions.visibilityOfPaymentMethodsIcon(page);
        });
        await test.step("Step 26: Verify icon is displayed for 'Favorites' option", async () => {
            await NavigationHeaderPageActions.visibilityOfFavoritesIcon(page);
        });
    })

    test(`Verify that clicking on an account option directs the user to the corresponding account page.`, { tag: '@regression @navigationHeader' }, async () => {

        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        });
        await test.step("Step 2: Verify Navigation Action is Visible", async () => {
            await NavigationHeaderPageActions.visibilityOfNavigationActionBar(page)
        });
        await test.step("Step 3: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        });
        await test.step("Step 4: Click on Navigation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        });
        await test.step("Step 5: Verify title is displayed for 'Overview' option", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginOverviewOption(page)
        });
        await test.step("Step 6: Click on 'Overview' option", async () => {
            await NavigationHeaderPageActions.clickOnOverViewOption(page)
            await page.waitForTimeout(5000)
        });
        await test.step("Step 7: Verify user redirected to Account page", async () => {
            await NavigationHeaderPageActions.verifyAccountPageDisplay(page)
        });
        // Orders
        await test.step("Step 8: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        });
        await test.step("Step 9: Click on Navigation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        });
        await test.step("Step 10: Verify title is displayed for 'Orders' option", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginOrdersOption(page)
        });
        await test.step("Step 11: Click on 'Orders' option", async () => {
            await NavigationHeaderPageActions.clickOnOrdersOption(page)
            await page.waitForTimeout(5000)
        });
        await test.step("Step 12: Verify user redirected to Account page", async () => {
            await NavigationHeaderPageActions.verifyAccountPageDisplay(page)
        });
        // Invoices
        await test.step("Step 13: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        });
        await test.step("Step 14: Click on Navigation User Icon button", async () => {
            await page.waitForTimeout(3000)
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        });
        await test.step("Step 15: Verify title is displayed for 'Invoices' option", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginInvoicesOption(page)
        });
        await test.step("Step 16: Click on 'Invoices' option", async () => {
            await NavigationHeaderPageActions.clickOnInvoicesOption(page)
            await page.waitForTimeout(5000)
        });
        await test.step("Step 17: Verify user redirected to Account page", async () => {
            await NavigationHeaderPageActions.verifyAccountPageDisplay(page)
        });
        // subscriptions
        await test.step("Step 18: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        });
        await test.step("Step 19: Click on Navigation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        });
        await test.step("Step 20: Verify title is displayed for 'Subscriptions' option", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginSubscriptionsOption(page)
        });
        await test.step("Step 21: Click on 'Subscriptions' option", async () => {
            await NavigationHeaderPageActions.clickOnSubscriptionsOption(page)
            await page.waitForTimeout(5000)
        });
        await test.step("Step 22: Verify user redirected to Account page", async () => {
            await NavigationHeaderPageActions.verifyAccountPageDisplay(page)
        });
        // Education
        await test.step("Step 23: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        });
        await test.step("Step 24: Click on Navigation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        });
        await test.step("Step 25: Verify title is displayed for 'Education' option", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginEducationOption(page)
        });
        await test.step("Step 26: Click on 'Education' option", async () => {
            await NavigationHeaderPageActions.clickOnEducationOption(page)
            await page.waitForTimeout(5000)
        });
        await test.step("Step 27: Verify user redirected to Account page", async () => {
            await NavigationHeaderPageActions.verifyAccountPageDisplay(page)
        });
        // Personal Profile
        await test.step("Step 28: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        });
        await test.step("Step 29: Click on Navigation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        });
        await test.step("Step 30: Verify title is displayed for 'Personal Profile' option", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginPersonalProfileOption(page)
        });
        await test.step("Step 31: Click on 'Personal Profile' option", async () => {
            await NavigationHeaderPageActions.clickOnPersonalProfileOption(page)
            await page.waitForTimeout(5000)
        });
        await test.step("Step 32: Verify user redirected to Account page", async () => {
            await NavigationHeaderPageActions.verifyAccountPageDisplay(page)
        });
        // Company Profile
        await test.step("Step 33: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        });
        await test.step("Step 34: Click on Navigation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        });
        await test.step("Step 35: Verify title is displayed for 'Company Profile' option", async () => {
            await NavigationHeaderPageActions.visibleOfCompanyProfileOption(page)
        });
        await test.step("Step 36: Click on 'Company Profile' option", async () => {
            await NavigationHeaderPageActions.clickOnCompanyProfileOption(page)
            await page.waitForTimeout(5000)
        });
        await test.step("Step 37: Verify user redirected to Account page", async () => {
            await NavigationHeaderPageActions.verifyAccountPageDisplay(page)
        });
        // Company Users
        await test.step("Step 38: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        });
        await test.step("Step 39: Click on Navigation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        });
        await test.step("Step 40: Verify title is displayed for 'Company Users' option", async () => {
            await NavigationHeaderPageActions.visibleOfCompanyUsersOption(page)
        });
        await test.step("Step 41: Click on 'Company Users' option", async () => {
            await NavigationHeaderPageActions.clickOnCompanyUsersOption(page)
            await page.waitForTimeout(5000)
        });
        await test.step("Step 42: Verify user redirected to Account page", async () => {
            await NavigationHeaderPageActions.verifyAccountPageDisplay(page)
        });
        // Dropshipping Address
        await test.step("Step 43: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        });
        await test.step("Step 44: Click on Navigation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        });
        await test.step("Step 45: Verify title is displayed for 'Dropshipping Address' option", async () => {
            await NavigationHeaderPageActions.visibleOfDropshippingAddressOption(page)
        });
        await test.step("Step 46: Click on 'Dropshipping Address' option", async () => {
            await NavigationHeaderPageActions.clickOnDropshippingAddressOption(page)
            await page.waitForTimeout(5000)
        });
        await test.step("Step 47: Verify user redirected to Account page", async () => {
            await NavigationHeaderPageActions.verifyAccountPageDisplay(page)
        });
        // Payment methods
        await test.step("Step 48: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        });
        await test.step("Step 49: Click on Navigation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        });
        await test.step("Step 50: Verify title is displayed for 'Payment Methods' option", async () => {
            await NavigationHeaderPageActions.visibleOfPaymentMethodsOption(page)
        });
        await test.step("Step 51: Click on 'Payment Methods' option", async () => {
            await NavigationHeaderPageActions.clickOnPaymentMethodsOption(page)
            await page.waitForTimeout(5000)
        });
        await test.step("Step 52: Verify user redirected to Account page", async () => {
            await NavigationHeaderPageActions.verifyAccountPageDisplay(page)
        });
        // Favorites
        await test.step("Step 53: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        });
        await test.step("Step 54: Click on Navigation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        });
        await test.step("Step 55: Verify title is displayed for 'Favorites' option", async () => {
            await NavigationHeaderPageActions.visibleOfFavoritesOption(page)
        });
        await test.step("Step 56: Click on 'Favorites' option", async () => {
            await NavigationHeaderPageActions.clickOnFavoritesOption(page)
            await page.waitForTimeout(5000)
        });
        await test.step("Step 57: Verify user redirected to Account page", async () => {
            await NavigationHeaderPageActions.verifyAccountPageDisplay(page)
        });
    });

    test(`Verify that the Log Out option and Log Out icon are displayed, clicking on it successfully logs out the current user.`, { tag: '@regression @navigationHeader' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        });
        await test.step("Step 2: Verify Navigation Action is Visible", async () => {
            await NavigationHeaderPageActions.visibilityOfNavigationActionBar(page)
        });
        await test.step("Step 3: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        });
        await test.step("Step 4: Click on Navigation User Icon button", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        });
        await test.step("Step 5: Verify Logout option is display", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginLogoutOption(page)
        })
        await test.step("Step 6: Verify Logout icon is display", async () => {
            await NavigationHeaderPageActions.visibilityOfLogoutIcon(page)
        })
        await test.step("Step 7: Click On Logout option is display", async () => {
            await NavigationHeaderPageActions.clickOnLogoutOption(page)
            await page.waitForTimeout(7000)
        })
        await test.step("Step 8: Verify Already registered? Text is Visible on the Home Page", async () => {
            await HomePage.visbilityAlreadyRegisteredText(page);
        })
    })

    test(`Verify that the mini-cart icon is displayed with the correct item and that hovering on it opens the mini-cart overlay or dropdown.`, { tag: '@regression @navigationHeader' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        });
        await test.step("Step 2: Verify Navigation Action is Visible", async () => {
            await NavigationHeaderPageActions.visibilityOfNavigationActionBar(page)
        });
        await test.step("Step 3: Verify Navigation Cart Icon is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationCartIcon(page)
        });
        await test.step("Step 4: hover on Navigation Cart Icon is Visible", async () => {
            await NavigationHeaderPageActions.hoverNavigationCartIcon(page)
        });
        await test.step("Step 5: Verify Cart dropdown is Visible", async () => {
            await NavigationHeaderPageActions.visibilityOfCartContainer(page)
        });
        await test.step("Step 6: Verify 'Start Shopping' is Visible", async () => {
            await NavigationHeaderPageActions.visibilityCartIconStartShoppingButton(page)
        });
        await test.step("Step 7: Verify 'View Cart' is Visible", async () => {
            await NavigationHeaderPageActions.visbilityAfterLoginViewCartButton(page)
        });
        await test.step("Step 8: Verify 'SubTotal' is Visible", async () => {
            await NavigationHeaderPageActions.visibilityCartSubTotalSection(page)
        });
    })
})