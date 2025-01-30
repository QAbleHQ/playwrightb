import { test, chromium, Page, BrowserContext } from '@playwright/test';
import { NavigationHeaderPageActions } from '../../pages/NavigationHeaderPage';
// import { navigationHeaderTestData } from '../../../../testdata/testdata.testdata.json';
import { CommonHelper } from '../../utils/commonHelper';
import { HomePage } from '../../pages/HomePage';
import { NavigationFooterPage } from '../../pages/NavigationFooter'
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

test.describe('Navigation Footer', () => {
    test("Verify that the footer navigation contains 4 columns and 6 rows, including the header", { tag: '@regression @regularUser @navigationFooter' }, async () => {
        await test.step("Step-1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        })
        await test.step("Step-2: Navigate to footer Section.", async () => {
            await NavigationFooterPage.scrollToFooter(page)
        })
        await test.step("Step-3: Verify first column display at footer Section.", async () => {
            await NavigationFooterPage.verifyFirstColumnDisplayAtFooter(page)
        })
        await test.step("Step-4: Verify second column display at footer Section.", async () => {
            await NavigationFooterPage.verifySecondColumnDisplayAtFooter(page)
        })
        await test.step("Step-5: Verify Third column display at footer Section.", async () => {
            await NavigationFooterPage.verifyThirdColumnDisplayAtFooter(page)
        })
        await test.step("Step-6: Verify Fourth column display at footer Section.", async () => {
            await NavigationFooterPage.verifyFourthColumnDisplayAtFooter(page)
        })
        await test.step("Step-7: Verify Title display At first Row at footer Section.", async () => {
            await NavigationFooterPage.verifyFooterTitleAtFirstRow(page)
        })
        await test.step("Step-8: Verify first row display at footer Section.", async () => {
            await NavigationFooterPage.verifyFirstRowDisplayAtFooter(page)
        })
        await test.step("Step-9: Verify second row display at footer Section.", async () => {
            await NavigationFooterPage.verifySecondRowDisplayAtFooter(page)
        })
        await test.step("Step-10: Verify third row display at footer Section.", async () => {
            await NavigationFooterPage.verifyThirdRowDisplayAtFooter(page)
        })
        await test.step("Step-11: Verify fourth row display at footer Section.", async () => {
            await NavigationFooterPage.verifyFourthRowDisplayAtFooter(page)
        })
        await test.step("Step-12: Verify fifth row display at footer Section.", async () => {
            await NavigationFooterPage.verifyFifthRowDisplayAtFooter(page)
        })
    })

    test("Verify that the submenus displayed beneath the main menu 'shop' exactly match the names and links configured in the CMS.", { tag: '@regression @regularUser @navigationFooter @fixedTestCase' }, async () => {

        await test.step("Step-1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        });
        await test.step("Step-2: Navigate to footer Section.", async () => {
            await page.waitForTimeout(6000)
            await NavigationFooterPage.scrollToFooter(page);
        });
        await test.step("Step-3: Verify 'All Product' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityAllProducts(page);
        });
        await test.step("Step-4: Verify 'All Product' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfAllProducts(page, testdata.RegularUser.FooterSubmenu.allProducts);
        });
        await test.step("Step-5: Click 'All Product' display at footer Section.", async () => {
            await NavigationFooterPage.clickAllProducts(page);
            await page.waitForTimeout(5000);
        });
        await test.step("Step-6: Verify 'All Product' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.products.products);
        });
        // Daily care
        await test.step("Step-7: Verify 'Daily Care' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityDailyCare(page);
        });
        await test.step("Step-8: Verify 'Daily Care' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfDailyCare(page, testdata.RegularUser.FooterSubmenu.dailyCare);
        });
        await test.step("Step-9: Click 'Daily Care' display at footer Section.", async () => {
            await NavigationFooterPage.clickDailyCare(page);
            await page.waitForTimeout(5000);
        });
        await test.step("Step-10: Verify 'Daily Care' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.dailyCare);
        });
        // By Treatment
        await test.step("Step-11: Verify 'By Treatment' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityByTreatment(page);
        });
        await test.step("Step-12: Verify 'By Treatment' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfByTreatment(page, testdata.RegularUser.FooterSubmenu.byTreatment);
        });
        await test.step("Step-13: Click 'By Treatment' display at footer Section.", async () => {
            await NavigationFooterPage.clickByTreatment(page);
            await page.waitForTimeout(5000);
        });
        await test.step("Step-14: Verify 'By Treatment' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.byTreatment);
        });
        // By Skin Type
        await test.step("Step-15: Verify 'By Skin Type' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityBySkinType(page);
        });
        await test.step("Step-16: Verify 'By Skin Type' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfBySkinType(page, testdata.RegularUser.FooterSubmenu.bySkinType);
        });
        await test.step("Step-17: Click 'By Skin Type' display at footer Section.", async () => {
            await NavigationFooterPage.clickBySkinType(page);
            await page.waitForTimeout(5000);
        });
        await test.step("Step-18: Verify 'By Skin Type' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.bySkinType);
        });
        // By Skin Concern
        await test.step("Step-19: Verify 'By Skin Concern' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityBySkinConcern(page);
        });
        await test.step("Step-20: Verify 'By Skin Concern' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfSkinConcern(page, testdata.RegularUser.FooterSubmenu.bySkinConcern);
        });
        await test.step("Step-21: Click 'By Skin Concern' display at footer Section.", async () => {
            await NavigationFooterPage.clickBySkinConcern(page);
            await page.waitForTimeout(5000);
        });
        await test.step("Step-22: Verify 'By Skin Concern' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.bySkinConcern);
        });
    });


    test("Verify that the submenus displayed beneath the 'Learn' main menu exactly match the names and links configured in the CMS.", { tag: '@regression @regularUser @navigationFooter @fixedTestCase' }, async () => {
        test.setTimeout(300000);
        await test.step("Step-1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        });
        await test.step("Step-2: Navigate to footer Section.", async () => {
            await page.waitForTimeout(6000)
            await NavigationFooterPage.scrollToFooter(page);
        });
        await test.step("Step-3: Verify 'Courses' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityCourses(page);
        });
        await test.step("Step-4: Verify 'Courses' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfCourses(page, testdata.RegularUser.FooterSubmenu.courses);
        });
        await test.step("Step-5: Click 'Courses' display at footer Section.", async () => {
            await NavigationFooterPage.clickCourses(page);
            await page.waitForTimeout(8000);
        });
        await test.step("Step-6: Verify 'Courses' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.courses);
        });
        // Professional peels
        await test.step("Step-7: Verify 'Professional peels' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityProfessionalPeels(page);
        });
        await test.step("Step-8: Verify 'Professional peels' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfProfessionalPeels(page, testdata.RegularUser.FooterSubmenu.professionalPeels);
            await page.waitForTimeout(5000);
        });
        await test.step("Step-9: Click 'Professional peels' display at footer Section.", async () => {
            await NavigationFooterPage.clickProfessionalPeels(page);
            await page.waitForTimeout(8000);
        });
        await test.step("Step-10: Verify 'Professional peels' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.professionalPeels);
            await page.goBack();
        });
        // Skin Concerns
        await test.step("Step-11: Verify 'Skin Concerns' display at footer Section.", async () => {
            await NavigationFooterPage.visibilitySkinConcern(page);
        });
        await test.step("Step-12: Verify 'Skin Concerns' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfSkinConcerns(page, testdata.RegularUser.FooterSubmenu.skinConcern);
            await page.waitForTimeout(5000);
        });
        await test.step("Step-13: Click 'Skin Concerns' display at footer Section.", async () => {
            await NavigationFooterPage.clickSkinConcern(page);
            await page.waitForTimeout(10000);
        });
        await test.step("Step-14: Verify 'Skin Concerns' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.skinConcern);
            await page.goBack();
        });
        // Skin Types
        await test.step("Step-15: Verify 'Skin Types' display at footer Section.", async () => {
            await NavigationFooterPage.visibilitySkinTypes(page);
        });
        await test.step("Step-16: Verify 'Skin Types' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfSkinTypes(page, testdata.RegularUser.FooterSubmenu.skinTypes);
            await page.waitForTimeout(5000);
        });
        await test.step("Step-17: Click 'Skin Types' display at footer Section.", async () => {
            await NavigationFooterPage.clickSkinTypes(page);
            await page.waitForTimeout(10000);
        });
        await test.step("Step-18: Verify 'Skin Types' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.skinTypes);
            await page.goBack();
        });
        // Skin Intelligence
        await test.step("Step-19: Verify 'Skin Intelligence' display at footer Section.", async () => {
            await NavigationFooterPage.visibilitySkinIntelligence(page);
        });
        await test.step("Step-20: Verify 'Skin Intelligence' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfSkinIntelligence(page, testdata.RegularUser.FooterSubmenu.skinIntelligence);
            await page.waitForTimeout(5000);
        });
        await test.step("Step-21: Click 'Skin Intelligence' display at footer Section.", async () => {
            await NavigationFooterPage.clickSkinIntelligence(page);
            await page.waitForTimeout(10000);
        });
        await test.step("Step-22: Verify 'Skin Intelligence' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.skinIntelligence);
        });
    });

    test("Verify that the submenus displayed beneath the 'About' main menu exactly match the names and links configured in the CMS.", { tag: '@regression @regularUser @navigationFooter' }, async () => {
        await test.step("Step-1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        });
        await test.step("Step-2: Navigate to footer Section.", async () => {
            await page.waitForTimeout(6000)
            await NavigationFooterPage.scrollToFooter(page);
        });
        await test.step("Step-3: Verify 'Our Story' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityOurStory(page);
        });
        await test.step("Step-4: Verify 'Our Story' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfOurStory(page, testdata.RegularUser.FooterSubmenu.ourStory);
        });
        await test.step("Step-5: Click 'Our Story' display at footer Section.", async () => {
            await NavigationFooterPage.clickOurStory(page);
            await page.waitForTimeout(10000);
        });
        await test.step("Step-6: Verify 'Our Story' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.ourStory);
        });
        // Our Peel Legacy
        await test.step("Step-7: Verify 'Our Peel Legacy' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityOurPeelLegacy(page);
        });
        await test.step("Step-8: Verify 'Our Peel Legacy' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfPeelLegacy(page, testdata.RegularUser.FooterSubmenu.ourPeelLegacy);
        });
        await test.step("Step-9: Click 'Our Peel Legacy' display at footer Section.", async () => {
            await NavigationFooterPage.clickOurPeelLegacy(page);
            await page.waitForTimeout(12000);
        });
        await test.step("Step-10: Verify 'Our Peel Legacy' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.ourPeelLegacy);
        });
        // Careers
        await test.step("Step-11: Verify 'Careers' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityCareers(page);
        });
        await test.step("Step-12: Verify 'Careers' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfCareers(page, testdata.RegularUser.FooterSubmenu.careers);
        });
        await test.step("Step-13: Click 'Careers' display at footer Section.", async () => {
            await NavigationFooterPage.clickCareers(page);
            await page.waitForTimeout(10000);
        });
        await test.step("Step-14: Verify 'Careers' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.careers);
        });
    });

    test("Verify that the following menu items (configured in CMS) are prominently displayed in bold white text and do not contain any clickable links:- Shop, Learn, About, Customer Service", { tag: '@regression @regularUser @navigationFooter ' }, async () => {
        await test.step("Step-1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        });
        await test.step("Step-2: Navigate to footer Section.", async () => {
            await page.waitForTimeout(6000)
            await NavigationFooterPage.scrollToFooter(page);
        });
        // Shop
        await test.step("Step-3: Verify 'Shop' Footer header is display.", async () => {
            await NavigationFooterPage.visibilityFooterHeaderShop(page);
        });
        await test.step("Step-4: Verify 'Shop' Footer header Text is display.", async () => {
            await NavigationFooterPage.verifyTextFooterHeaderShop(page, testdata.RegularUser.FooterHeading.heading1);
        });
        await test.step("Step-5: Verify color of 'Shop' Footer header is display.", async () => {
            await NavigationFooterPage.verifyCSSPropertiesOfShopFooterTitle(page, testdata.cssProperties.color, testdata.cssProperties.rgbWhite);
        });
        await test.step("Step-6: Verify Bold of 'Shop' Footer header is display.", async () => {
            await NavigationFooterPage.verifyCSSPropertiesOfShopFooterTitle(page, testdata.cssProperties.fontWeight, testdata.cssProperties.BoldValue700);
        });
        await test.step("Step-7: Verify 'Shop' Footer header Title is not clickable.", async () => {
            await NavigationFooterPage.verifyShopTitleIsDisable(page);
        });
        // Learn
        await test.step("Step-8: Verify 'Learn' Footer header is display.", async () => {
            await NavigationFooterPage.visibilityFooterHeaderLearn(page);
        });
        await test.step("Step-9: Verify 'Learn' Footer header Text is display.", async () => {
            await NavigationFooterPage.verifyTextFromFooterHeaderLearn(page, testdata.RegularUser.FooterHeading.heading2);
        });
        await test.step("Step-10: Verify color of 'Learn' Footer header is display.", async () => {
            await NavigationFooterPage.verifyCSSPropertiesOfLearnFooterTitle(page, testdata.cssProperties.color, testdata.cssProperties.rgbWhite);
        });
        await test.step("Step-11: Verify Bold of 'Learn' Footer header is display.", async () => {
            await NavigationFooterPage.verifyCSSPropertiesOfLearnFooterTitle(page, testdata.cssProperties.fontWeight, testdata.cssProperties.BoldValue700);
        });
        await test.step("Step-12: Verify 'Learn' Footer header Title is not clickable.", async () => {
            await NavigationFooterPage.verifyLearnTitleIsDisable(page);
        });
        // About
        await test.step("Step-13: Verify 'About' Footer header is display.", async () => {
            await NavigationFooterPage.visibilityFooterHeaderAbout(page);
        });
        await test.step("Step-14: Verify 'About' Footer header Text is display.", async () => {
            await NavigationFooterPage.verifyTextFromFooterHeaderAbout(page, testdata.RegularUser.FooterHeading.heading3);
        });
        await test.step("Step-15: Verify color of 'About' Footer header is display.", async () => {
            await NavigationFooterPage.verifyCSSPropertiesOfAboutFooterTitle(page, testdata.cssProperties.color, testdata.cssProperties.rgbWhite);
        });
        await test.step("Step-16: Verify Bold of 'About' Footer header is display.", async () => {
            await NavigationFooterPage.verifyCSSPropertiesOfAboutFooterTitle(page, testdata.cssProperties.fontWeight, testdata.cssProperties.BoldValue700);
        });
        await test.step("Step-17: Verify 'About' Footer header Title is not clickable.", async () => {
            await NavigationFooterPage.verifyAboutTitleIsDisable(page);
        });
        // Customer Services
        await test.step("Step-18: Verify 'Customer Services' Footer header is display.", async () => {
            await NavigationFooterPage.visibilityFooterHeaderCustomerService(page);
        });
        await test.step("Step-19: Verify 'Customer Services' Footer header Text is display.", async () => {
            await NavigationFooterPage.verifyTextFromFooterHeaderCustomerService(page, testdata.RegularUser.FooterHeading.heading4);
        });
        await test.step("Step-20: Verify color of 'Customer Services' Footer header is display.", async () => {
            await NavigationFooterPage.verifyCSSPropertiesOfCustomerServiceFooterTitle(page, testdata.cssProperties.color, testdata.cssProperties.rgbWhite);
        });
        await test.step("Step-21: Verify Bold of 'Customer Services' Footer header is display.", async () => {
            await NavigationFooterPage.verifyCSSPropertiesOfCustomerServiceFooterTitle(page, testdata.cssProperties.fontWeight, testdata.cssProperties.BoldValue700);
        });
        await test.step("Step-22: Verify 'Customer Services' Footer header Title is not clickable.", async () => {
            await NavigationFooterPage.verifyCustomerServiceTitleIsDisable(page);
        });
    });

    test("Verify that the submenus displayed beneath the main menu exactly match the names and links configured in the CMS. Contact Us, FAQ, Shipping, Returns", { tag: '@regression @regularUser @navigationFooter ' }, async () => {
        await test.step("Step-1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        });
        await test.step("Step-2: Navigate to footer Section.", async () => {
            await page.waitForTimeout(6000)
            await NavigationFooterPage.scrollToFooter(page);
        });
        await test.step("Step-3: Verify 'Contact us' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityContactUs(page);
        });
        await page.waitForTimeout(5000)
        await test.step("Step-4: Verify 'Contact us' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfContactUs(page, testdata.RegularUser.FooterSubmenu.contactUs);
        });
        await test.step("Step-5: Click 'Contact us' display at footer Section.", async () => {
            await NavigationFooterPage.clickContactUs(page);
            await page.waitForTimeout(7000);
        });
        await test.step("Step-6: Verify 'Contact us' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.contactUs);
        });
        // faq
        await test.step("Step-7: Navigate to footer Section.", async () => {
            await NavigationFooterPage.scrollToFooter(page);
        });
        await test.step("Step-8: Verify 'FAQ' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityFAQ(page);
        });
        await test.step("Step-9: Verify 'FAQ' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfFaq(page, testdata.RegularUser.FooterSubmenu.faq);
        });
        await page.waitForTimeout(3000)
        await test.step("Step-10: Click 'FAQ' display at footer Section.", async () => {
            await NavigationFooterPage.clickFAQ(page);
            await page.waitForTimeout(7000);
        });
        await test.step("Step-11: Verify 'FAQ' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.faq);
        });
        // shipping
        await test.step("Step-12: Navigate to footer Section.", async () => {
            await NavigationFooterPage.scrollToFooter(page);
        });
        await test.step("Step-13: Verify 'shipping' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityShipping(page);
        });
        await test.step("Step-14: Verify 'shipping' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfShipping(page, testdata.RegularUser.FooterSubmenu.shipping);
        });
        await page.waitForTimeout(3000)
        await test.step("Step-15: Click 'shipping' display at footer Section.", async () => {
            await NavigationFooterPage.clickShipping(page);
            await page.waitForTimeout(7000);
        });
        await test.step("Step-16: Verify 'shipping' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.shipping);
        });
        // Returns
        await test.step("Step-17: Navigate to footer Section.", async () => {
            await NavigationFooterPage.scrollToFooter(page);
        });
        await test.step("Step-18: Verify 'Returns' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityReturns(page);
        });
        await test.step("Step-19: Verify 'Returns' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfReturns(page, testdata.RegularUser.FooterSubmenu.returns);
        });
        await page.waitForTimeout(3000)
        await test.step("Step-20: Click 'Returns' display at footer Section.", async () => {
            await NavigationFooterPage.clickReturns(page);
            await page.waitForTimeout(10000);
        });
        await test.step("Step-21: Verify 'Returns' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.returns);
        });
    });

    //need to fix yet
    test("Verify that the quick links exactly match the names and links configured in the CMS : PCA SKIN International, Privacy Policy, Terms & Conditions, Do Not Sell My Personal Information, Product excellence", { tag: '@regression @regularUser @navigationFooter @cool ' }, async () => {
        test.setTimeout(300000)

        await test.step("Step-2: Navigate to footer Section.", async () => {
            await page.waitForTimeout(6000)
            await NavigationFooterPage.scrollToFooter(page);
        });
        await test.step("Step-3: Verify 'PCA SKIN International' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityPCASkinInternational(page);
        });
        await test.step("Step-4: Verify 'PCA SKIN International' Text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfPCASkinInternational(page, testdata.RegularUser.FooterSubmenu.pcaSkinInternational);
        });
        await test.step("Step-5: Click 'PCA SKIN International' display at footer Section.", async () => {
            await page.waitForTimeout(5000)
            await NavigationFooterPage.clickPCASkinInterntional(page);
        });
        await test.step("Step-6: Verify 'PCA SKIN International' link contain keyword products at footer Section.", async () => {
            await page.waitForTimeout(7000);
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.pcaSkinInternational);
        });
        // privacy policy
        await test.step("Step-7: Navigate to footer Section.", async () => {
            await NavigationFooterPage.scrollToFooter(page);
        });
        await test.step("Step-8: Verify 'privacy policy' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityPrivacyPolicy(page);
        });
        await test.step("Step-9: Verify 'privacy policy' text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfPrivacyPolicy(page, testdata.RegularUser.FooterSubmenu.privacyPolicy);
        });
        await page.waitForTimeout(5000)
        await test.step("Step-10: Click 'privacy policy' display at footer Section.", async () => {
            await NavigationFooterPage.clickPrivacyPolicy(page);
            await page.waitForTimeout(7000);
        });
        await test.step("Step-11: Verify 'privacy policy' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.privacyPolicy);
        });
        await page.goBack()
        // Terms & Conditions
        await test.step("Step-12: Navigate to footer Section.", async () => {
            await NavigationFooterPage.scrollToFooter(page);
        });
        await test.step("Step-13: Verify 'Terms & Conditions' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityTermsAndConditions(page);
        });
        await test.step("Step-14: Verify 'Terms & Conditions' Text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfTermsAndConditions(page, testdata.RegularUser.FooterSubmenu.termsAndCondition);
        });
        await page.waitForTimeout(5000)
        await test.step("Step-15: Click 'Terms & Conditions' display at footer Section.", async () => {
            await NavigationFooterPage.clickTermsAndConditions(page);
            await page.waitForTimeout(7000);
        });
        await test.step("Step-16: Verify 'Terms & Conditions' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.termsAndCondition);
        });
        // Do not sell my personal information
        await test.step("Step-17: Navigate to footer Section.", async () => {
            await NavigationFooterPage.scrollToFooter(page);
        });
        await test.step("Step-18: Verify 'Do not sell my personal information' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityDoNotSellMyPersonalInformation(page);
        });
        await test.step("Step-19: Verify 'Do not sell my personal information' Text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfDoNotSellMyPersonalInformation(page, testdata.RegularUser.FooterSubmenu.doNotSellMyPersonalInformation);
        });
        await page.waitForTimeout(5000)
        await test.step("Step-20: Click 'Do not sell my personal information' display at footer Section.", async () => {
            await NavigationFooterPage.clickDoNotSellMyPersonalInformation(page);
            await page.waitForTimeout(7000);
        });
        await test.step("Step-21: Verify 'Do not sell my personal information' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.doNotSellMyPersonalInformation);
        });
        // Product excellence
        await test.step("Step-22: Navigate to footer Section.", async () => {
            await NavigationFooterPage.scrollToFooter(page);
        });
        await test.step("Step-23: Verify 'Product excellence' display at footer Section.", async () => {
            await NavigationFooterPage.visibilityProductExcellence(page);
        });
        await test.step("Step-24: Verify 'Product excellence' Text display at footer Section.", async () => {
            await NavigationFooterPage.verifyTextOfProductExcellence(page, testdata.RegularUser.FooterSubmenu.productExcellence);
        });
        await page.waitForTimeout(5000)
        await test.step("Step-25: Click 'Product excellence' display at footer Section.", async () => {
            await NavigationFooterPage.clickProductExcellence(page);
            await page.waitForTimeout(7000);
        });
        await test.step("Step-26: Verify 'Product excellence' link contain keyword products at footer Section.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.FooterLink.productExcellence);
        });
    })

    test("Verify that the copyright information is prominently displayed to the right of the CP Skin Health Group logo in the bottom left corner of the webpage.", { tag: '@regression @regularUser @navigationFooter ' }, async () => {
        await test.step("Step-1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        });
        await test.step("Step-2: Navigate to footer Section.", async () => {
            await page.waitForTimeout(6000)
            await NavigationFooterPage.scrollToFooter(page);
        });
        await test.step("Step-3: Verify Copyright Information is display.", async () => {
            await NavigationFooterPage.visibiltyAllRightsReserved(page);
        });
        await test.step("Step-4: Verify Copyright Information Text is display.", async () => {
            await NavigationFooterPage.verifyTextOfAllRightsReserved(page, testdata.RegularUser.AllRightsMessage.message);
        });
    })
})