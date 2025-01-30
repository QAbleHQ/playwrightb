import { test, Page, chromium, BrowserContext } from "@playwright/test"
import { CLPPage } from "../../pages/CLPPage"
import { CommonHelper } from "../../utils/commonHelper"
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

test.describe("Unauthenticated User CLP.", async () => {

    test("Verify that clicking on the 'Load More' button loads more products.", { tag: '@regression @unauthenticatedUser  @CLP @loadMore ' }, async () => {

        await test.step("Step 1: Verify to Academy menu is visible on the header navigation.", async () => {
            await CLPPage.academyMenuListHeaderIsVisible(page);
        })
        await test.step("Step 2: Verify to Hover on Academy menu to the header navigation.", async () => {
            await CLPPage.academyMenuListHeaderIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify Fundamental or other course is visible on Academy menu.", async () => {
            await CLPPage.fundamentalCoursesUnderAcademyIsVisible(page);
        })
        await test.step("Step 4: Hover on Fundamental course under on Academy.", async () => {
            await CLPPage.fundamentalCoursesUnderAcademyIsHover(page);
        })
        await test.step("Step 5: Click on Fundamental course after hover.", async () => {
            await CLPPage.fundamentalCoursesUnderAcademyIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Course listing page.", async () => {
            await CLPPage.courseListPageCLPIsVisible(page);
        })
        await test.step("Step 7: Verify Selected course related Title is visible on course listing page.", async () => {
            await CLPPage.courseListPageCLPIsVisible(page);
        })
        await test.step("Step 8: Verify to the scrolldown the page up to Load More.", async () => {
            await CLPPage.loadMoreBtnCLPScrollDown(page);
        })
        await test.step("Step 9: Verify to the product Viewing count 'Viewing 6 out of 10 products' before clicks on load more.", async () => {
            await CLPPage.productscountBeforeClickLoadMoreCLPIsClickable(page);
        })
        await test.step("Step 10: Verify to the 'Load More' button is visible.", async () => {
            await CLPPage.loadMoreBtnCLPIsVisible(page);
        })
        await test.step("Step 11: Verify the 'Load More' button is clickable.", async () => {
            await CLPPage.loadMoreBtnCLPIsClickable(page);
        })
        await test.step("Step 12: Verify to the scrolldown the page.", async () => {
            await CLPPage.scrollDownUpTo10OtOf10(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13: Verify to the product Viewing count 'Viewing 10 out of 10 products' after clicks on load more.", async () => {
            await CLPPage.productscountAfterClickLoadMoreCLPIsClickable(page);
        })

    })

    test("Verify that each course card contains the Course Image, Course Name, Review, Description, Learn More Btn", { tag: '@regression @unauthenticatedUser  @CLP @loadMore' }, async () => {

        await test.step("Step 1: Verify to Academy menu is visible on the header navigation.", async () => {
            await CLPPage.academyMenuListHeaderIsVisible(page);
        })
        await test.step("Step 2: Verify to Hover on Academy menu to the header navigation.", async () => {
            await CLPPage.academyMenuListHeaderIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify Fundamental or other course is visible on Academy menu.", async () => {
            await CLPPage.fundamentalCoursesUnderAcademyIsVisible(page);
        })
        await test.step("Step 4: Hover on Fundamental course under on Academy.", async () => {
            await CLPPage.fundamentalCoursesUnderAcademyIsHover(page);
        })
        await test.step("Step 5: Click on Fundamental course after hover.", async () => {
            await CLPPage.fundamentalCoursesUnderAcademyIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Course listing page.", async () => {
            await CLPPage.courseListPageCLPIsVisible(page);
        })
        await test.step("Step 7: Verify correct Course title is displayed.", async () => {
            await CLPPage.courseListPageCLPIsVisible(page);
        })
        await test.step("Step 8: Verify the course listing is visible.", async () => {
            await CLPPage.courseListPageCLPIsVisible(page);
        })
        await test.step("Step 9: Verify the Course Image is visible.", async () => {
            await CLPPage.antioxidantsImageIsVisible(page);
        })
        await test.step("Step 10: verify to scroll down the page up to course name.", async () => {
            await CLPPage.antioxidantsProductTitleIsScroll(page);
        })
        await test.step("Step 11: Verify the Course Name is visible.", async () => {
            await CLPPage.antioxidantsProductTitleIsVisible(page);
        })
        await test.step("Step 12: Verify the Course Review is visible.", async () => {
            await CLPPage.antioxidantsProductRatingIsVisible(page);
        })
        await test.step("Step 13: Verify the Course First Description is visible.", async () => {
            await CLPPage.antioxidantsProductFirstDescriptionIsVisible(page);
        })
        await test.step("Step 14: Verify the Course Second Description is visible.", async () => {
            await CLPPage.antioxidantsProductSecondDescriptionIsVisible(page);
        })
        await test.step("Step 15: Verify the Learn More button is visible.", async () => {
            await CLPPage.learnMoreBtnIsVisible(page);
        })
        await test.step("Step 16: Verify to the scrolldown the page up to Load More.", async () => {
            await CLPPage.loadMoreBtnCLPScrollDown(page);

        })
    })

    test("Verify that clicking on the product image redirects users to CDP", { tag: '@regression @unauthenticatedUser  @CLP @loadMore ' }, async () => {

        await test.step("Step 1: Verify to Academy menu is visible on the header navigation.", async () => {
            await CLPPage.academyMenuListHeaderIsVisible(page);
        })
        await test.step("Step 2: Verify to Hover on Academy menu to the header navigation.", async () => {
            await CLPPage.academyMenuListHeaderIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify Fundamental or other course is visible on Academy menu.", async () => {
            await CLPPage.fundamentalCoursesUnderAcademyIsVisible(page);
        })
        await test.step("Step 4: Hover on Fundamental course under on Academy.", async () => {
            await CLPPage.fundamentalCoursesUnderAcademyIsHover(page);
        })
        await test.step("Step 5: Click on Fundamental course after hover.", async () => {
            await CLPPage.fundamentalCoursesUnderAcademyIsClickable(page);
        })
        await test.step("Step 6: Verify user is redirect on Course listing page.", async () => {
            await CLPPage.courseListPageCLPIsVisible(page);
        })
        await test.step("Step 7: Verify correct Course title is displayed.", async () => {
            await CLPPage.courseListPageCLPIsVisible(page);
        })
        await test.step("Step 8: Verify the course listing is visible.", async () => {
            await CLPPage.courseListPageCLPIsVisible(page);
        })
        await test.step("Step 9: verify to scroll down the page up to course name.", async () => {
            await CLPPage.antioxidantsProductTitleIsScroll(page);
        })
        await test.step("Step 10: Verify the Course Image is visible.", async () => {
            await CLPPage.antioxidantsImageIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify to click on course image.", async () => {
            await CLPPage.antioxidantsImageIsClickable(page);
        })
        await test.step("Step 12: Verify user is redirect on course details page (CDP) while user click on Image.", async () => {
            await CLPPage.redirectCDPPageIsVisible(page);
            await page.waitForTimeout(3000);
        })


    })

    test("Verify that all course categories are displayed in the side navigation and that selecting a category filters the course grid to show only courses within that category.", { tag: '@regression @unauthenticatedUser  @CLP @courseCategories' }, async () => {



        await test.step("Step 1: Verify to Academy menu is visible on the header navigation.", async () => {
            await CLPPage.academyMenuListHeaderIsVisible(page);
        })
        await test.step("Step 2: Verify to Hover on Academy menu to the header navigation.", async () => {
            await CLPPage.academyMenuListHeaderIsHover(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify to 'View All' is visible in menu list of course.", async () => {
            await CLPPage.academyViewAllIsVisible(page);
        })
        await test.step("Step 4: Verify to hover on 'View All'.", async () => {
            await CLPPage.academyViewAllIsHover(page);
        })
        await test.step("Step 5: Verify to Click on 'View All'.", async () => {
            await CLPPage.academyViewAllIsClickable(page);
        })
        await test.step("Step 6: Verify to by default 'All Courses' is displayed selected in Left menu while user click on 'View all'.", async () => {
            await CLPPage.allCoursesButtonIsVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 7: Verify All courses list is displayed as per All Course is selcted in Left Menu.", async () => {
            await CLPPage.titleOfAllCoursesIsVisible(page);
        })
        //All Course
        await test.step("Step 8: Verify All Course is Visible in left menu list.", async () => {
            await CLPPage.allCoursesButtonIsVisible(page);
        })
        await test.step("Step 9: Verify All Course is clickable in left menu list.", async () => {
            await CLPPage.allCoursesButtonIsClickable(page);
        })
        await test.step("Step 10: Verify when user click on All Course then all course is displayed in listing", async () => {
            await CLPPage.titleOfAllCoursesIsVisible(page);
            await page.waitForTimeout(3000);
        })
        // Education Membership
        await test.step("Step 11: Verify Education Membership is Visible in left menu list.", async () => {
            await CLPPage.educationMembershipsButtonIsVisible(page);
        })
        await test.step("Step 12: Verify Education Membership is clickable in left menu list.", async () => {
            await CLPPage.educationMembershipsButtonIsClickable(page);
        })
        await test.step("Step 13: Verify when user click on Education Membership then all Education Membership course is displayed in listing", async () => {
            await CLPPage.titleOfEducationMembershipsIsVisible(page);
            await page.waitForTimeout(3000);
        })
        //Fundamental courses
        await test.step("Step 14: Verify Fundamental courses is Visible in left menu list.", async () => {
            await CLPPage.fundamentalCoursesButtonIsVisible(page);
        })
        await test.step("Step 15: Verify Fundamental courses is clickable in left menu list.", async () => {
            await CLPPage.fundamentalCoursesButtonIsClickable(page);
        })
        await test.step("Step 16: Verify when user click on Fundamental courses then all Fundamental courses course is displayed in listing", async () => {
            await CLPPage.titleOfFundamentalCoursesIsVisible(page);
            await page.waitForTimeout(3000);
        })
        //Certification courses
        await test.step("Step 17: Verify Certification courses is Visible in left menu list.", async () => {
            await CLPPage.certificationCoursesIsVisible(page);
        })
        await test.step("Step 18: Verify Certification courses is clickable in left menu list.", async () => {
            await CLPPage.certificationCoursesIsClickable(page);
        })
        await test.step("Step 19: Verify when user click on Certification courses then all Certification courses course is displayed in listing", async () => {
            await CLPPage.titleOfCertificationCoursesIsVisible(page);
            await page.waitForTimeout(3000);
        })
        //Acne
        await test.step("Step 20: Verify Acne is Visible in left menu list.", async () => {
            await CLPPage.acneIsVisible(page);
        })
        await test.step("Step 21: Verify Acne is clickable in left menu list.", async () => {
            await CLPPage.acneIsClickable(page);
        })
        await test.step("Step 22: Verify when user click on Acne then all Acne course is displayed in listing", async () => {
            await CLPPage.titleOfAcneIsVisible(page);
            await page.waitForTimeout(3000);
        })
        //Aging
        await test.step("Step 23: Verify Aging is Visible in left menu list.", async () => {
            await CLPPage.agingIsVisible(page);
        })
        await test.step("Step 24: Verify Aging is clickable in left menu list.", async () => {
            await CLPPage.agingIsClickable(page);
        })
        await test.step("Step 25: Verify when user click on Aging then all Aging course is displayed in listing", async () => {
            await CLPPage.titleOfAgingIsVisible(page);
            await page.waitForTimeout(3000);
        })
        //Hyper Pigmentation
        await test.step("Step 26: Verify Hyper Pigmentation is Visible in left menu list.", async () => {
            await CLPPage.hyperPigmentationIsVisible(page);
        })
        await test.step("Step 27: Verify Hyper Pigmentation is clickable in left menu list.", async () => {
            await CLPPage.hyperPigmentationIsClickable(page);
        })
        await test.step("Step 28: Verify when user click on Hyper Pigmentation then all Hyper Pigmentation course is displayed in listing", async () => {
            await CLPPage.titleOfHyperpigmentationIsVisible(page);
            await page.waitForTimeout(3000);
        })
        //Sensitive Skin
        await test.step("Step 29: Verify Sensitive Skin is Visible in left menu list.", async () => {
            await CLPPage.sensitiveSkinIsVisible(page);
        })
        await test.step("Step 30: Verify Sensitive Skin is clickable in left menu list.", async () => {
            await CLPPage.sensitiveSkinIsClickable(page);
        })
        await test.step("Step 31: Verify when user click on Sensitive Skin then all Sensitive Skin course is displayed in listing", async () => {
            await CLPPage.titleOfSensitiveSkinIsVisible(page);
            await page.waitForTimeout(3000);
        })
        //Enhancing Your Services
        await test.step("Step 32: Verify Enhancing Your Services is Visible in left menu list.", async () => {
            await CLPPage.enhancingYourServicesIsVisible(page);
        })
        await test.step("Step 33: Verify Enhancing Your Services is clickable in left menu list.", async () => {
            await CLPPage.enhancingYourServicesIsClickable(page);
        })
        await test.step("Step 34: Verify when user click on Enhancing Your Services then all Enhancing Your Services course is displayed in listing", async () => {
            await CLPPage.titleOfEnhancingYourServicesIsVisible(page);
            await page.waitForTimeout(3000);
        })
        //Business Building
        await test.step("Step 35: Verify Business Building is Visible in left menu list.", async () => {
            await CLPPage.businessBuildingIsVisible(page);
        })
        await test.step("Step 36: Verify Business Building is clickable in left menu list.", async () => {
            await CLPPage.businessBuildingIsClickable(page);
        })
        await test.step("Step 37: Verify when user click on Business Building then all Business Building course is displayed in listing", async () => {
            await CLPPage.titleOfBusinessBuildingIsVisible(page);
            await page.waitForTimeout(3000);
        })

        //Student Courses
        await test.step("Step 38: Verify Student Courses is Visible in left menu list.", async () => {
            await CLPPage.studentCoursesIsVisible(page);
        })
        await test.step("Step 39: Verify Student Courses is clickable in left menu list.", async () => {
            await CLPPage.studentCoursesIsClickable(page);
        })
        await test.step("Step 40: Verify when user click on Student Courses then all Student Courses course is displayed in listing", async () => {
            await CLPPage.titleOfStudentCoursesIsVisible(page);
            await page.waitForTimeout(3000);
        })
        //National Seminars
        await test.step("Step 41: Verify National Seminars is Visible in left menu list.", async () => {
            await CLPPage.nationalSeminarsIsVisible(page);
        })
        await test.step("Step 42: Verify National Seminars is clickable in left menu list.", async () => {
            await CLPPage.nationalSeminarsIsClickable(page);
        })
        await test.step("Step 43: Verify when user click on National Seminars then all National Seminars course is displayed in listing", async () => {
            await CLPPage.titleOfNationalSeminarsIsVisible(page);
            await page.waitForTimeout(3000);
        })
        //A Physician Point Of View
        await test.step("Step 44: Verify to scroll down upto A Physician Point Of View.", async () => {
            await CLPPage.scrollDownUpToaPhysicianPointOfView(page);
        })
        await test.step("Step 45: Verify A Physician Point Of View is Visible in left menu list.", async () => {
            await CLPPage.aPhysicianPointOfViewIsVisible(page);
        })
        await test.step("Step 46: Verify A Physician Point Of View is clickable in left menu list.", async () => {
            await CLPPage.aPhysicianPointOfViewIsClickable(page);
        })
        await test.step("Step 47: Verify to scroll up to 'A Physician Point Of View' title.", async () => {
            await CLPPage.scrollUpToTitleOfAPhysiciansPointofView(page);
        })
        await test.step("Step 48: Verify when user click on 'A Physician Point Of View' then all 'A Physician Point Of View' course is displayed in listing", async () => {
            await CLPPage.titleOfAPhysiciansPointofViewIsVisible(page);
            await page.waitForTimeout(3000);
        })

        //Multi Cultural Skin
        await test.step("Step 49: Verify to scroll down upto Peel Application Videos.", async () => {
            await CLPPage.scrollDownUpTomultiCulturalSkin(page);
        })
        await test.step("Step 50: Verify Multi Cultural Skin is Visible in left menu list.", async () => {
            await CLPPage.multiCulturalSkinIsVisible(page);
        })
        await test.step("Step 51: Verify Multi Cultural Skin is clickable in left menu list.", async () => {
            await CLPPage.multiCulturalSkinIsClickable(page);
        })
        await test.step("Step 52: Verify to scroll up to 'A Physician Point Of View' title.", async () => {
            await CLPPage.scrollUpToTitleOfMulticulturalSkin(page);
        })
        await test.step("Step 53: Verify when user click on Multi Cultural Skin then all Multi Cultural Skin course is displayed in listing", async () => {
            await CLPPage.titleOfMulticulturalSkinIsVisible(page);
            await page.waitForTimeout(3000);
        })
        //Peel Application Videos
        await test.step("Step 54: Verify to scroll down upto Peel Application Videos.", async () => {
            await CLPPage.scrollDownUpTopeelApplicationVideos(page);
        })
        await test.step("Step 55: Verify Peel Application Videos is Visible in left menu list.", async () => {
            await CLPPage.peelApplicationVideosIsVisible(page);
        })
        await test.step("Step 56: Verify Peel Application Videos is clickable in left menu list.", async () => {
            await CLPPage.peelApplicationVideosIsClickable(page);
        })
        await test.step("Step 57: Verify to scroll up to 'A Physician Point Of View' title.", async () => {
            await CLPPage.scrollUpToTitleOfPeelApplicationVideos(page);
        })
        await test.step("Step 58: Verify when user click on Peel Application Videos then all Peel Application Videos course is displayed in listing", async () => {
            await CLPPage.titleOfPeelApplicationVideosIsVisible(page);
            await page.waitForTimeout(3000);
        })

    })

})
