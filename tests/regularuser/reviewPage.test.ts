import { test, chromium, Page, BrowserContext } from '@playwright/test';
import { CommonHelper } from '../../utils/commonHelper';
import { CDPPage } from '../../pages/CDPPage';
import { CLPPage } from '../../pages/CLPPage';
import { HomePage } from '../../pages/HomePage';
import { NavigationHeaderPageActions } from '../../pages/NavigationHeaderPage';
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

test.describe("Basic Course Information :Verify Reviews Page for mentioned Scenarios:", () => {


    test("Reviews:Verify star reviews from BazaarVoice displayed under Item ID, formatted as 5-star icon, rating value, and number of views, followed by a Write a Review button.", { tag: '@regression @cdp @review @clp @regularuser' }, async () => {

        await test.step("Step 2:Verify user is in website ", async () => {
            await HomePage.isWelcomeTextVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3:Verify Email Field Visibility ", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4:Click into Email Field ", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter Email ID in the Email Field ", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 7:Click into the Password field ", async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 8:Enter Password in the Password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9:Verify Login Button Visbility ", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11:Verify Academy Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12:Hover over Academy Section list", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13:Verify Courses SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14:Click on Courses SubMenu", async () => {
            await NavigationHeaderPageActions.clickOnSubHeadingCourseText(page);
        })
        await test.step("Step 15:Verify User is on the All Courses page", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 16:Verify Acne MemberShip Courses is Present", async () => {
            await CLPPage.verifyCourseAcneMembershipPresent(page);
        })
        await test.step("Step 17:Verify Acne MemberShip Courses Learn More Btn", async () => {
            await CLPPage.verifyCourseAcneMembershipLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 18:Click Acne MemberShip Courses Learn More Btn", async () => {
            await CLPPage.clickCourseAcneMembershipLearnMoreBtn(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 19:Verify user is inside Acne MemberShip Courses Review Page", async () => {
            await CDPPage.verifyCourseAcneMembershipReviewPage(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 20:Verify Acne MemberShip Courses: 5 Star Rating", async () => {
            await CDPPage.verifyReviewStarRatingIsPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 21:Verify Acne MemberShip Courses: Rating Value", async () => {
            await CDPPage.verifyReviewRatingIsPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 22:Verify inside Acne MemberShip Courses: Total View", async () => {
            await CDPPage.verifyTotalViewsIsPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 23:Verify inside Acne MemberShip Courses: Write A Review Btn", async () => {
            await CDPPage.verifyWriteReviewIsPresent(page);
            await page.waitForTimeout(3000);
        })
    })
    test("Reviews:Verify hovering on reviews section displays ratings summary menu", { tag: '@regression @cdp @review @clp @regularuser' }, async () => {

        await test.step("Step 2: Verify user is in website ", async () => {
            await HomePage.isWelcomeTextVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify Email Field Visibility ", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4: Click into Email Field ", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter Email ID in the Email Field ", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 6: Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 7: Click into the Password field ", async () => {
            await HomePage.clickPasswordInputField(page);
        })

        await test.step("Step 8:Enter Password in the Password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Verify Login Button Visbility ", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10: Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify Academy Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Hover over Academy Section list", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13:Verify Courses SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14: Click on Courses SubMenu", async () => {
            await NavigationHeaderPageActions.clickOnSubHeadingCourseText(page);
            await page.waitForTimeout(3000);

        })
        await test.step("Step 15:Verify User is on the All Courses page", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 16:Verify A Deep Dive Into Professional Products is Present", async () => {
            await CLPPage.verifyCourseDeepDownIntoProfessionalProductPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17:Verify A Deep Dive Into Professional Products Learn More Btn is present", async () => {
            await CLPPage.verifyCourseDeepDownIntoProfessionalProductLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 18:Click A Deep Dive Into Professional Products Learn More Btn", async () => {
            await CLPPage.clickCourseDeepDownIntoProfessionalProductLearnMoreBtn(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 19:Verify user is inside A Deep Dive Into Professional Products Review Page", async () => {
            await CDPPage.verifyCourseDeepDownIntoProfessionalProductDetailsPage(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 20:Verify inside A Deep Dive Into Professional Products Review Page: 5 Star", async () => {
            await CDPPage.verifyCourseDeepDownIntoProfessionalProductStarRatingPresnt(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 21:Hover over 5 Star", async () => {
            await CDPPage.hoverOverDeepDownIntoProfessionalProductStarRating(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 22:Verify Rating Summery displays while Hovering over 5 Star", async () => {
            await CDPPage.verifyHoverOverDeepDownIntoProfessionalProductRatingStarShowSection(page);
            await page.waitForTimeout(4000);
        })
    })
    test("Reviews:Verify clicking Read X Reviews redirects to CDP Reviews section.", { tag: '@regression @cdp @review @clp @regularuser' }, async () => {

        await test.step("Step 2: Verify user is in website ", async () => {
            await HomePage.isWelcomeTextVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify Email Field Visibility ", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4: Click into Email Field ", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter Email ID in the Email Field ", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 6: Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 7: Click into the Password field ", async () => {
            await HomePage.clickPasswordInputField(page);
        })

        await test.step("Step 8:Enter Password in the Password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Verify Login Button Visbility ", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10: Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify Academy Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Hover over Academy Section list", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13:Verify Courses SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14: Click on Courses SubMenu", async () => {
            await NavigationHeaderPageActions.clickOnSubHeadingCourseText(page);
        })
        await test.step("Step 15:Verify User is on the All Courses page", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 16:Verify A Deep Dive Into Professional Products is Present", async () => {
            await CLPPage.verifyCourseDeepDownIntoProfessionalProductPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17:Verify A Deep Dive Into Professional Products Learn More Btn is present", async () => {
            await CLPPage.verifyCourseDeepDownIntoProfessionalProductLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 18:Click A Deep Dive Into Professional Products Learn More Btn", async () => {
            await CLPPage.clickCourseDeepDownIntoProfessionalProductLearnMoreBtn(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 19:Verify user is inside A Deep Dive Into Professional Products Review Page", async () => {
            await CDPPage.verifyCourseDeepDownIntoProfessionalProductDetailsPage(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 20:Verify 5 Star icon is present inside A Deep Dive Into Professional Products Review Page", async () => {
            await CDPPage.verifyCourseDeepDownIntoProfessionalProductStarRatingPresnt(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 21:Hover over 5 Star", async () => {
            await CDPPage.hoverOverDeepDownIntoProfessionalProductStarRating(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 22:Verify Rating Summery displays while Hovering over 5 Star", async () => {
            await CDPPage.verifyHoverOverDeepDownIntoProfessionalProductRatingStarShowSection(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 23:Verify Read Review Btn is present while hovering Rating ", async () => {
            await CDPPage.verifyReadReviewBtnHoverOverRatingStar(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 24:Click Read Review Btn while hovering Rating ", async () => {
            await CDPPage.clickonReadReviewBtnHoverOverRatingStar(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 25:Verify Clicking on Read Review Navigates to Review section", async () => {
            await CDPPage.verifyReviewSectionIsPresent(page);
            await page.waitForTimeout(4000);
        })
    })
    test("Reviews:Verify clicking Write a review button opens My Review modal.", { tag: '@regression @cdp @review @clp @regularuser' }, async () => {

        await test.step("Step 2: Verify user is in website ", async () => {
            await HomePage.isWelcomeTextVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify Email Field Visibility ", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4: Click into Email Field ", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter Email ID in the Email Field ", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 6: Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 7: Click into the Password field ", async () => {
            await HomePage.clickPasswordInputField(page);
        })

        await test.step("Step 8:Enter Password in the Password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Verify Login Button Visbility ", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10: Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify Academy Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Hover over Academy Section list", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13:Verify Courses SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14: Click on Courses SubMenu", async () => {
            await NavigationHeaderPageActions.clickOnSubHeadingCourseText(page);
        })
        await test.step("Step 15:Verify User is on the All Courses page", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 16:Verify A Deep Dive Into Professional Products is Present", async () => {
            await CLPPage.verifyCourseDeepDownIntoProfessionalProductPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17:Verify A Deep Dive Into Professional Products Learn More Btn is present", async () => {
            await CLPPage.verifyCourseDeepDownIntoProfessionalProductLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 18:Click A Deep Dive Into Professional Products Learn More Btn", async () => {
            await CLPPage.clickCourseDeepDownIntoProfessionalProductLearnMoreBtn(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 19:Verify user is inside A Deep Dive Into Professional Products Review Page", async () => {
            await CDPPage.verifyCourseDeepDownIntoProfessionalProductDetailsPage(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 20:Verify Write a Review module is present inside A Deep Dive Into Professional Products Review Page", async () => {
            await CDPPage.verifyWriteReviewIsPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 21:Click on Write a Review module is present inside A Deep Dive Into Professional Products Review Page", async () => {
            await CDPPage.clickWriteReviewIsPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 22:Verify Review module Opened", async () => {
            await CDPPage.verifyMyReviewModuleIsPresent(page);
            await page.waitForTimeout(3000);
        })
    })

    test("Price:Verify that the correct price for the course is accurately displayed and formatted consistently.", { tag: '@regression @cdp @review @clp @regularuser' }, async () => {

        await test.step("Step 2: Verify user is in website ", async () => {
            await HomePage.isWelcomeTextVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify Email Field Visibility ", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4: Click into Email Field ", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter Email ID in the Email Field ", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 6: Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 7: Click into the Password field ", async () => {
            await HomePage.clickPasswordInputField(page);
        })

        await test.step("Step 8:Enter Password in the Password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Verify Login Button Visbility ", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10: Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify Academy Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Hover over Academy Section list", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13:Verify Courses SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14: Click on Courses SubMenu", async () => {
            await NavigationHeaderPageActions.clickOnSubHeadingCourseText(page);
        })
        await test.step("Step 15:Verify User is on the All Courses page", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 16:Click Certification Course Category page", async () => {
            await CLPPage.clickCertificationCourse(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17:Verify In Person Fundamental Peel Course is present", async () => {
            await CLPPage.verifyCourseInPersonFundamentalPeelPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 18:Verify In Person Fundamental Peel Learn More Btn is present", async () => {
            await CLPPage.verifyCourseInPersonFundamentalPeelLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 19:Click In Person Fundamental Peel Learn More Btn", async () => {
            await CLPPage.clickCourseInPersonFundamentalPeelLearnMoreBtn(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 20:Verify user is inside In Person Fundamental Peel Review Page", async () => {
            await CDPPage.verifyCourseInPersonFundamentalPeelDetailsPage(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 21:Verify In Person Fundamental Peel Price Tage", async () => {
            await CDPPage.verifyCourseInPersonFundamentalPeelPriceTag(page);
            await page.waitForTimeout(3000);
        })




    })

    test("Note Message:Verify that the note message is displayed under the course description,", { tag: '@regression @cdp @review @clp @regularuser' }, async () => {

        await test.step("Step 2: Verify user is in website ", async () => {
            await HomePage.isWelcomeTextVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 3: Verify Email Field Visibility ", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 4: Click into Email Field ", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 5:Enter Email ID in the Email Field ", async () => {
            await HomePage.clearAndEnterIntoEmailInputField(page, testdata.EmailAddress.regularEmail);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 6: Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 7: Click into the Password field ", async () => {
            await HomePage.clickPasswordInputField(page);
        })

        await test.step("Step 8:Enter Password in the Password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 9: Verify Login Button Visbility ", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10: Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11: Verify Academy Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12: Hover over Academy Section list", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13:Verify Courses SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14: Click on Courses SubMenu", async () => {
            await NavigationHeaderPageActions.clickOnSubHeadingCourseText(page);
        })
        await test.step("Step 15:Verify User is on the All Courses page", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 16:Verify A Deep Dive Into Professional Products is Present", async () => {
            await CLPPage.verifyCourseDeepDownIntoProfessionalProductPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17:Verify A Deep Dive Into Professional Products Learn More Btn is present", async () => {
            await CLPPage.verifyCourseDeepDownIntoProfessionalProductLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 18:Click A Deep Dive Into Professional Products Learn More Btn", async () => {
            await CLPPage.clickCourseDeepDownIntoProfessionalProductLearnMoreBtn(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 19:Verify user is inside A Deep Dive Into Professional Products Review Page", async () => {
            await CDPPage.verifyCourseDeepDownIntoProfessionalProductDetailsPage(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 20:Verify Please Note Message is present inside A Deep Dive Into Professional Products Review Page", async () => {
            await CDPPage.verifyCourseDeepDownIntoProfessionalProductPleaseNote(page);
            await page.waitForTimeout(3000);
        })





    })


})

