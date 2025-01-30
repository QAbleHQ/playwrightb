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

test.describe('Home page', () => {

    test("Verify that the image, title, description, CTA label, and CTA link are correctly configured and displayed as intended.", { tag: '@regression @regularUser @homePage @fixedTestCase' }, async () => {
        test.setTimeout(300000)
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        });
        await test.step("Step 2: Visibility Hero Banner Carousel", async () => {
            await HomePage.visibilityHeroBanner(page);
        });
        // await test.step("Step 3: Verify Hero Banner Image is visible", async () => {
        //     await HomePage.verifyHomePageImageIsVisible(page);
        // });
        await test.step("Step 4: Hover over search menu", async () => {
            await HomePage.isSearchProductsButtonHover(page);
        });
        await test.step("Step 5: Verify Hero Banner Title is visible in first slider", async () => {
            await HomePage.verifyFirstSliderHeaderIsVisible(page);
        });
        await test.step("Step 6: Verify text of first slider header", async () => {
            await HomePage.verifyTextOfSliderHeader(page, testdata.RegularUser.HomeSlider.homeSliderHeader1);
        });
        await test.step("Step 7: Verify Hero Banner Description is visible", async () => {
            await HomePage.verifyFirstSliderDescriptionIsVisible(page);
        });
        await test.step("Step 8: Verify text of first slider description", async () => {
            await HomePage.verifyTextOfDescriptionIsVisible(page, testdata.RegularUser.HomeSlider.homeSliderDescription1);
        });
        await test.step("Step 9: Verify Hero Banner CTA label is visible", async () => {
            await HomePage.verifySliderCTALabelIsVisible(page);
        });
        await test.step("Step 10: Verify first slider CTA Link", async () => {
            await HomePage.verifyCTALink(page, testdata.RegularUser.HomeSlider.href, testdata.RegularUser.HomeSlider.homeSliderCTALink1);
        });
        await test.step("Step 11: Hover over search menu", async () => {
            await HomePage.isSearchProductsButtonHover(page);
        });
        // Second Slider
        await test.step("Step 12: Verify Hero Banner Title is visible in second slider", async () => {
            await HomePage.verifySecondSliderHeaderIsVisible(page);
        });
        await test.step("Step 13: Verify text of second slider header", async () => {
            await HomePage.verifyTextOfSliderHeader(page, testdata.RegularUser.HomeSlider.homeSliderHeader1);
        });
        await test.step("Step 14: Verify Hero Banner Description is visible", async () => {
            await HomePage.verifySecondSliderDescriptionIsVisible(page);
        });
        await test.step("Step 15: Verify second slider description text", async () => {
            await HomePage.verifyTextOfDescriptionIsVisible(page, testdata.RegularUser.HomeSlider.homeSliderDescription1);
        });
        await test.step("Step 16: Verify Hero Banner CTA label is visible", async () => {
            await HomePage.verifySliderCTALabelIsVisible(page);
        });
        await test.step("Step 17: Verify second slider CTA Link", async () => {
            await HomePage.verifyCTALink(page, testdata.RegularUser.HomeSlider.href, testdata.RegularUser.HomeSlider.homeSliderCTALink2);
        });
        await test.step("Step 18: Click on Swipe button to get third slider", async () => {
            await HomePage.clickSwipeButton(page);
            await page.waitForTimeout(4000);
        });
        await test.step("Step 19: Hover over search menu", async () => {
            await HomePage.isSearchProductsButtonHover(page);
        });
        // Third Slider
        await test.step("Step 20: Verify Hero Banner Title is visible in third slider", async () => {
            await HomePage.verifyThirdSliderHeaderIsVisible(page);
        });
        await test.step("Step 21: Verify text of third slider header", async () => {
            await HomePage.verifyTextOfSliderHeader(page, testdata.RegularUser.HomeSlider.homeSliderHeader2);
        });
        await test.step("Step 22: Verify Hero Banner Description is visible", async () => {
            await HomePage.verifyThirdSliderDescriptionIsVisible(page);
        });
        await test.step("Step 23: Verify third slider description text", async () => {
            await HomePage.verifyTextOfDescriptionIsVisible(page, testdata.RegularUser.HomeSlider.homeSliderDescription2);
        });
        await test.step("Step 24: Verify Hero Banner CTA label is visible", async () => {
            await HomePage.verifySliderCTALabelIsVisible(page);
        });
        await test.step("Step 25: Verify third slider CTA Link", async () => {
            await HomePage.verifyCTALink(page, testdata.RegularUser.HomeSlider.href, testdata.RegularUser.HomeSlider.homeSliderCTALink3);
        });
    });


    test("Verify that clicking the CTA button redirects the user to the correct target page.", { tag: '@regression @regularUser @homePage fixedTestCase' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        });
        await test.step("Step 2: Visibility Hero Banner Carousel", async () => {
            await HomePage.visibilityHeroBanner(page);
        });
        await test.step("Step 3: Hover over search menu", async () => {
            await HomePage.isSearchProductsButtonHover(page);
        });
        await test.step("Step 4: Verify First Slider is Visible", async () => {
            await HomePage.verifyFirstSliderHeaderIsVisible(page);
        });
        await test.step("Step 5: Verify 'Shop Now' CTA Label is Visible in first slider", async () => {
            await HomePage.verifyCTALabelShopNowIsVisible(page);
        });
        await test.step("Step 6: Click on 'Shop Now' CTA Label is Visible", async () => {
            await HomePage.clickCTALabelShopNowIsVisible(page);
        });
        await test.step("Step 7: Verify user redirect to correct page", async () => {
            await page.waitForTimeout(4000)
            await HomePage.verifyHydrabrightPageIsVisible(page);
        });
        await page.goBack();
        await page.waitForTimeout(2000)
        await test.step("Step 8: Hover over search menu", async () => {
            await HomePage.isSearchProductsButtonHover(page);
        });
        await test.step("Step 9: Verify Second Slider is Visible", async () => {
            await HomePage.verifySecondSliderHeaderIsVisible(page);
        });
        await test.step("Step 10: Verify 'Learn More' CTA Label is Visible", async () => {
            await HomePage.verifyCTALabelLearnMoreIsVisible(page);
        });
        await test.step("Step 11: Click on 'Learn More' CTA Label is Visible", async () => {
            await HomePage.clickCTALabelLearnMoreIsVisible(page);
            await page.waitForTimeout(6000)
        });
        await test.step("Step 12: Verify user redirect to correct page", async () => {
            await HomePage.verifyBrightEvenPeelPageIsVisible(page);
        });
        await page.goBack();
        await page.waitForTimeout(2000);
        await test.step("Step 13: Hover over search menu", async () => {
            await HomePage.isSearchProductsButtonHover(page);
        });
        await test.step("Step 14: Verify third Slider is Visible", async () => {
            await HomePage.verifyThirdSliderHeaderIsVisible(page);
        });
        await test.step("Step 15: Verify 'Learn More' CTA Label is Visible", async () => {
            await HomePage.verifyCTALabelLearnMoreTwoIsVisible(page);
        });
        await test.step("Step 16: Click on 'Learn More' CTA Label is Visible", async () => {
            await HomePage.clickCTALabelLearnMoreTwoIsVisible(page);
            await page.waitForTimeout(4000)
        });
        await test.step("Step 17: Verify user redirect to correct page", async () => {
            await NavigationHeaderPageActions.visibilityOfAllCoursePage(page);
        });
    });

    test("Verify that navigation controls, including dot indicators, left/right arrows function correctly for carousel-style hero banners.", { tag: '@regression @regularUser @homePage fixedTestCase' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
            await page.waitForTimeout(5000)
        });
        await test.step("Step 2: Visibility Hero Banner Carousel", async () => {
            await HomePage.visibilityHeroBanner(page);
        });
        await test.step("Step 3: Visibility 3 dot indicator swiper pagination is display", async () => {
            await HomePage.visibilityOfSwipePagination(page);
            await page.waitForTimeout(2000)
        });
        await test.step("Step 4: Hover over search menu", async () => {
            await HomePage.isSearchProductsButtonHover(page);
        });
        await test.step("Step 5: Visibility next button swipe arrow is display", async () => {
            await HomePage.visibilityOfSwipeButton(page);
        });
        await test.step("Step 6: Click on next button swipe arrow is display", async () => {
            await HomePage.clickSwipeButton(page);
        });
        await test.step("Step 7: Hover over search menu", async () => {
            await HomePage.isSearchProductsButtonHover(page);
        });
        await test.step("Step 8: Visibility previous button swipe arrow is display", async () => {
            await HomePage.visibilityOfSwipePrevButton(page);
        });
        await test.step("Step 9: Click on previous button swipe arrow is display", async () => {
            await HomePage.clickPrevSwipeButton(page);
        });
    })

    // Test case failing because "Orders" Column not display in UI. Also user doesn't have option to add product in cart and place order.
    test("Verify that the 'Orders', 'Loyalty Tier', and 'Customer Support' tiles are displayed in a three-column layout within the Quick Links section.", { tag: '@regression @regularUser @homePage ' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
            await page.waitForTimeout(5000)
        });
        await test.step("Step 2: Visibility Hero Banner Carousel", async () => {
            await HomePage.visibilityHeroBanner(page);
        });
        await test.step("Step 3: Visibility Quick Links for Orders", async () => {
            await HomePage.visibilityOrderSection(page);
        })
        await test.step("Step 4: Visibility Quick Links for Loyalty Tier", async () => {
            await HomePage.visibilityloyaltyTierLink(page);
        })
        await test.step("Step 5: Visibility Quick Links for Customer Support Section", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
    })

    test("Verify that the 'Orders' tile is not displayed if the user has no order history.", { tag: '@regression @regularUser @homePage ' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
            await page.waitForTimeout(5000)
        });
        await test.step("Step 2: Verify Navigation Action is Visible", async () => {
            await NavigationHeaderPageActions.visibilityOfNavigationActionBar(page)
        })
        await test.step("Step 3: Verify Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.visibilityNavigationUserIconButton(page)
        })
        await test.step("Step 4: Click on Navigation User Icon button is Visible", async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        })
        await test.step("Step 5: Verify title is displayed for 'Orders' option", async () => {
            await NavigationHeaderPageActions.visibilityAfterLoginOrdersOption(page)
        });
        await test.step("Step 6: Click on 'Orders' option", async () => {
            await NavigationHeaderPageActions.clickOnOrdersOption(page)
            await page.waitForTimeout(8000)
        });
        await test.step("Step 7: Verify text 'No Order Found' message display", async () => {
            await HomePage.visibilityOfNoOrderText(page)
            await page.waitForTimeout(2000)
            await page.goBack()
        });
        await test.step("Step 8: InVisibility of Quick Links for Orders", async () => {
            await HomePage.invisibilityOrderSection(page);
        })
    })

    test("Verify that a 'View Benefits' button is present within the 'Loyalty Tier' tile, clicking it redirects the user to the /misc/rewards page.", { tag: '@regression @regularUser @homePage ' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
        });
        await test.step("Step 2: Visibility Quick Links for Loyalty Tier", async () => {
            await HomePage.visibilityloyaltyTierLink(page);
        })
        await test.step("Step 3: Visibility of View Benefits Loyalty Tier", async () => {
            await HomePage.visibilityOfLoyaltyRewardViewBenefits(page);
        })
        await test.step("Step 4: Verify Text of View Benefits Loyalty Tier", async () => {
            await HomePage.TextOfLoyaltyRewardViewBenefits(page, testdata.RegularUser.Tiles.viewBenefits);
        })
        await test.step("Step 5: Click on View Benefits Loyalty Tier", async () => {
            await HomePage.clickOnLoyaltyRewardViewBenefits(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 6: Verify user redirect to /misc/rewards page.", async () => {
            await NavigationHeaderPageActions.verifyURLContainKeyword(page, testdata.RegularUser.Keywords.viewBenefits);
        })
        await test.step("Step 7: Visibility of View Benefits Loyalty Tier Page", async () => {
            await HomePage.visibilityOfLoyaltyRewardViewBenefitsPage(page);
        })
    })

    test("Verify that the title of the 'Customer Support' tile matches the configured name in CMS, which is 'PCA SKIN Customer Support'.", { tag: '@regression @regularUser @homePage ' }, async () => {
        test.setTimeout(300000)
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
            await page.waitForTimeout(5000)
        });
        await test.step("Step 2: Visibility Quick Links for Customer Support Section", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 3: Visibility Quick Links for Customer Support Title", async () => {
            await HomePage.visibilityCustomerSupportTitle(page);
        })
        await test.step("Step 3: verify text of Quick Links for Customer Support Title", async () => {
            await HomePage.verifyTextOfCustomerSupportTitle(page, testdata.RegularUser.Tiles.customerSupport);
        })
    })

    test("Verify that the following support information is displayed within the tile Contact Number, Operating Days, Operating Hours", { tag: '@regression @regularUser @homePage ' }, async () => {
        test.setTimeout(300000)
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
            await page.waitForTimeout(5000)
        });
        await test.step("Step 2: Visibility Quick Links for Customer Support Section", async () => {
            await HomePage.visibilityCustomerSupportSection(page);
        })
        await test.step("Step 3: Visibility of Customer Support Number", async () => {
            await HomePage.visibilityCustomerSupportNumber(page);
        })
        await test.step("Step 4: Verify Text of Customer Support Number", async () => {
            await HomePage.verifyTextOfCustomerSupportNumber(page, testdata.RegularUser.Tiles.customerSupportNumber);
        })
        await test.step("Step 5: Visibility of Customer Support Availability Day", async () => {
            await HomePage.visibilityCustomerSupportAvailabilityDay(page);
        })
        await test.step("Step 6: Verify Text of Customer Support Availability Day", async () => {
            await HomePage.verifyTextOfCustomerSupportAvailabilityDay(page, testdata.RegularUser.Tiles.customerSupportNumber);
        })
        await test.step("Step 7: Visibility of Customer Support Availability Time", async () => {
            await HomePage.visibilityCustomerSupportAvailabilityTime(page);
        })
        await test.step("Step 8: Verify Text of Customer Support Availability Time", async () => {
            await HomePage.verifyTextOfCustomerSupportAvailabilityTime(page, testdata.RegularUser.Tiles.customerSupportNumber);
        })
    })

    test("Verify that the image, title, description, CTA label, and CTA link are correctly configured for each list item and displayed as intended.", { tag: '@regression @regularUser @homePage ' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
            await page.waitForTimeout(5000)
        });
        await test.step("Step 2: verify Content banner display", async () => {
            await HomePage.visibilityMarketingContentBanner(page);
        })
        await test.step("Step 3: verify Marketing Banner Image 1 display", async () => {
            await HomePage.visibilityMarketingImageOne(page);
        })
        await test.step("Step 4: verify Marketing Banner Image 2 display", async () => {
            await HomePage.visibilityMarketingImageTwo(page);
        })
        await test.step("Step 5: verify Content Banner Title 1 display", async () => {
            await HomePage.visibilityContentBannerTitleOne(page);
        })
        await test.step("Step 6: verify Content Banner Title 2 display", async () => {
            await HomePage.visibilityContentBannerTitleTwo(page);
        })
        await test.step("Step 7: verify Content Banner Title 1 text is display", async () => {
            await HomePage.verifyTextContentBannerTitleOne(page, testdata.RegularUser.ContentBanner.title1);
        })
        await test.step("Step 8: verify Content Banner Title 2 text is display", async () => {
            await HomePage.verifyTextContentBannerTitleTwo(page, testdata.RegularUser.ContentBanner.title2);
        })
        await test.step("Step 9: verify Content Banner Description 1 display", async () => {
            await HomePage.visibilityContentBannerDescriptionOne(page);
        })
        await test.step("Step 10: verify Content Banner Description 2 display", async () => {
            await HomePage.visibilityContentBannerDescriptionTwo(page);
        })
        await test.step("Step 11: verify Content Banner CTA Label 1 display", async () => {
            await HomePage.visibilityContentBannerCTALabelOne(page);
        })
        await test.step("Step 12: verify Content Banner CTA Label 2 display", async () => {
            await HomePage.visibilityContentBannerCTALabelTwo(page);
        })
        await test.step("Step 13: verify Content Banner CTA Label 1 display", async () => {
            await HomePage.visibilityContentBannerCTALinkOne(page, testdata.RegularUser.HomeSlider.href, testdata.RegularUser.HomeSlider.registerTreatmentTuesday);
        })
        await test.step("Step 14: verify Content Banner CTA Label 2 display", async () => {
            await HomePage.visibilityContentBannerCTALinkTwo(page, testdata.RegularUser.HomeSlider.href, testdata.RegularUser.HomeSlider.brighteningLaunchPromo);
        })
    })

    test("Verify that clicking the CTA button redirects the user to the correct target page", { tag: '@regression @regularUser @homePage ' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
            await page.waitForTimeout(5000)
        });
        await test.step("Step 2: verify Content banner display", async () => {
            await HomePage.visibilityMarketingContentBanner(page);
        })
        await test.step("Step 3: verify Content Banner CTA Label 1 display", async () => {
            await HomePage.visibilityContentBannerCTALabelOne(page);
            await page.waitForTimeout(2000)
        })
        await test.step("Step 4: click on Content Banner CTA Label 1 display", async () => {
            await HomePage.clickOnContentBannerCTALabelOne(page);
            await page.waitForTimeout(20000)
        })
        await test.step("Step 5: verify url of Content Banner CTA Label 1 display", async () => {
            await NavigationHeaderPageActions.checkURLOfPage(page, testdata.RegularUser.Links.treatmentTuesday);
        })
        await test.step("Step 6: verify treatment tuesday Title display", async () => {
            await HomePage.visibilityTreatmentTuesdayPage(page);
            await page.goBack()
            await page.waitForTimeout(4000)
        })
        await test.step("Step 7: verify Content Banner CTA Label 2 display", async () => {
            await HomePage.visibilityContentBannerCTALabelTwo(page);
        })
        await test.step("Step 8: click on Content Banner CTA Label 2 display", async () => {
            await HomePage.clickOnContentBannerCTALabelTwo(page);
            await page.waitForTimeout(8000)
        })
        await test.step("Step 5: verify url of Content Banner CTA Label 2 display", async () => {
            await NavigationHeaderPageActions.checkURLOfPage(page, testdata.RegularUser.Links.brighteningLaunchPromoPage);
        })
        await test.step("Step 6: verify all product Title page display", async () => {
            await NavigationHeaderPageActions.visibilityOfAllProductPage(page);
            await page.waitForTimeout(4000)
        })

    })

    test("Verify that the title of this product carousel matches the configured name in CMS, which is 'Best Seller' ", { tag: '@regression @regularUser @homePage ' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
            await page.waitForTimeout(5000)
        });
        await test.step("step-2: Verify Bestseller display at homepage", async () => {
            await HomePage.visibilityOfBestsellerHomepage(page)
        })
        await test.step("step-3: Verify text of Bestseller display at homepage", async () => {
            await HomePage.verifyTextOfBestsellerHomepage(page, testdata.RegularUser.BestSeller.header)
        })
    })

    test("Verify that the description of this product carousel matches the configured name in CMS, which is 'A selection of our highly recommended products, endorsed by industry professionals, to initiate your professional journey'.", { tag: '@regression @regularUser @homePage ' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
            await page.waitForTimeout(5000)
        });
        await test.step("step-2: Verify Bestseller display at homepage", async () => {
            await HomePage.visibilityOfBestsellerHomepage(page)
        })
        await test.step("step-3: Verify Bestseller Description display at homepage", async () => {
            await HomePage.visibilityOfBestsellerDescription(page)
        })
        await test.step("step-4: Verify text of Bestseller Description display at homepage", async () => {
            await HomePage.verifyTextOfBestsellerDescription(page, testdata.RegularUser.BestSeller.description)
        })
    })

    // price, size, price range, select size, Add to cart option not display when login with regular user account.
    test("Verify that the following elements are displayed on each tile in bestseller.", { tag: '@regression @regularUser @homePage ' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
            await page.waitForTimeout(5000)
        });
        await test.step("step-2: Verify Bestseller display at homepage", async () => {
            await HomePage.visibilityOfBestsellerHomepage(page)
        })
        await test.step("step-3: Verify Bestseller icon display at homepage", async () => {
            await HomePage.visibilityOfBestsellerIcon(page)
        })
        await test.step("step-4: Verify Product Image is display for bestseller", async () => {
            await HomePage.visibilityOfBestsellerProductImage(page)
        })
        await test.step("step-5: Verify Reviews display for Bestseller", async () => {
            await HomePage.visibilityOfBestsellerRating(page)
        })
        await test.step("step-6: Verify Product Name display for Bestseller", async () => {
            await HomePage.visibilityOfBestsellerTitle(page)
        })
        // price, size, price range, select size, Add to cart option not display when login with regular user account.
    })

    test("Verify that clicking the image, reviews or name section can successfully redirects the user to the corresponding product detail page.", { tag: '@regression @regularUser @homePage ' }, async () => {
        await test.step("Step 1: Navigate to HomePage and Login into your Account.", async () => {
            await NavigationHeaderPageActions.loginInAccount(page, testdata.EmailAddress.regularEmail, testdata.Password.regularPassword);
            await page.waitForTimeout(5000)
        });
        await test.step("step-2: Verify Bestseller display at homepage", async () => {
            await HomePage.visibilityOfBestsellerHomepage(page)
        })
        await test.step("step-3: Verify Product Image is display for bestseller", async () => {
            await HomePage.visibilityOfBestsellerProductImage(page)
        })
        await test.step("step-4: click on Product Image is display for bestseller", async () => {
            await HomePage.clickOnBestsellerProductImage(page)
            await page.waitForTimeout(5000)
        })
        await test.step("step-5: Verify user redirect to product details page", async () => {
            await HomePage.visibilityOfBestsellerProductInfoPage(page)
            await page.waitForTimeout(2000)
            await page.goBack()
        })
        await test.step("step-6: Verify Reviews display for Bestseller", async () => {
            await page.waitForTimeout(2000)
            await HomePage.visibilityOfBestsellerRating(page)
        })
        await test.step("step-7: Click on Reviews display for Bestseller", async () => {
            await HomePage.clickOnBestsellerRating(page)
            await page.waitForTimeout(5000)
        })
        await test.step("step-8: Verify user redirect to product details page", async () => {
            await HomePage.visibilityOfBestsellerProductInfoPage(page)
            await page.waitForTimeout(2000)
            await page.goBack()
        })
        await test.step("step-9: Verify Product Name display for Bestseller", async () => {
            await page.waitForTimeout(2000)
            await HomePage.visibilityOfBestsellerTitle(page)
        })
        await test.step("step-10: Click on Product Name display for Bestseller", async () => {
            await HomePage.clickOnBestsellerTitle(page)
            await page.waitForTimeout(5000)
        })
        await test.step("step-11: Verify user redirect to product details page", async () => {
            await HomePage.visibilityOfBestsellerProductInfoPage(page)
            await page.waitForTimeout(2000)
        })
    })
})
