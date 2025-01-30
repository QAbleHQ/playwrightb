import { test, chromium, Page, BrowserContext } from '@playwright/test';
import { NavigationHeaderPageActions } from '../../pages/NavigationHeaderPage';
import { CommonHelper } from '../../utils/commonHelper';
import { NavigationFooterPage } from '../../pages/NavigationFooter'
import { CLPPage } from '../../pages/CLPPage';
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

test.describe("CLP : Verify Title ,Left Navigation ,Course Grid", () => {
    test("Title: Verify that the title Courses is prominently displayed in the top left corner of the Course Listing page.", { tag: '@clp @regularuser @regression' }, async () => {

        await test.step("Step 2:Verify user is in website ", async () => {
            await HomePage.isWelcomeTextVisible(page);
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
        })
        await test.step("Step 7:Click into the Password field ", async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 8:Enter Password in the Password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 9:Verify Login Button Visbility ", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 11:Verify PCASkin logo is present", async () => {
            await HomePage.isPcaSkinLogoVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 12:Verify Academy Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        })
        await test.step("Step 13:Hover over Academy Section list", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14:Verify Courses SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 15:Click on Courses SubMenu", async () => {
            await NavigationHeaderPageActions.clickOnSubHeadingCourseText(page);
        })
        await test.step("Step 16:Verify User is on the All Courses page", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 17:Verify Courses Heading is displayed on the top left corner", async () => {
            await CLPPage.verifyCourseHeadingTopLeftCorner(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 18:Captures text From Courses Heading is displayed on the top left corner", async () => {
            await CLPPage.verifyCourseHeadingTopLeftCorner(page);
            await page.waitForTimeout(2000);
        })
    })

    test("Course Categories:Verify user can Verify Course Categories Text from side navigation bar", { tag: '@clp @regularuser @regression' }, async () => {
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
        })
        await test.step("Step 7:Click into the Password field ", async () => {
            await HomePage.clickPasswordInputField(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 8:Enter Password in the Password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 9:Verify Login Button Visbility ", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 11:Verify PCASkin logo is present", async () => {
            await HomePage.isPcaSkinLogoVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12:Verify Academy Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13:Hover over Academy Section list", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14:Verify Courses SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15:Click on Courses SubMenu", async () => {
            await NavigationHeaderPageActions.clickOnSubHeadingCourseText(page);
        })
        await test.step("Step 16:Verify User is on the All Courses page", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17:Verify mentioned Category is displayed on left corner:All Courses", async () => {
            await CLPPage.allCoursesButtonVisible(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 18:Verify mentioned Category is displayed on left corner:Education Membership", async () => {
            await CLPPage.educationMembershipsButtonVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 19:Verify mentioned Category is displayed on left corner:Fundamental Courses", async () => {
            await CLPPage.fundamentalCourseButtonVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 20:Verify mentioned Category is displayed on left corner:Certification course", async () => {
            await CLPPage.certificationCourseButtonVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 21:Verify mentioned Category is displayed on left corner:Acne", async () => {
            await CLPPage.acneTextVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 22:Verify mentioned Category is displayed on left corner:Aging", async () => {
            ;
            await page.waitForTimeout(2000);
        })
        await test.step("Step 23:Verify mentioned Category is displayed on left corner:Hyperpigmentation", async () => {
            await CLPPage.HyperpigmentationTextVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 24:Verify mentioned Category is displayed on left corner:Sensitive cream", async () => {
            await CLPPage.sensitiveSkinTextVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 25:Verify mentioned Category is displayed on left corner:Enhancing your Services", async () => {
            await CLPPage.enhancingYourServicesButtonVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 26:Verify mentioned Category is displayed on left corner:Business Building", async () => {
            await CLPPage.businessBuildingButtonVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 27:Verify mentioned Category is displayed on left corner:Student Courses", async () => {
            await CLPPage.studentCourseButtonVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 28:Verify mentioned Category is displayed on left corner:Nationl Seminar", async () => {
            await CLPPage.verifynationalSeminarButtonVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 30:Verify mentioned Category is displayed on left corner:Multiculture Skin", async () => {
            await CLPPage.verifymulticulturalSkinButtonVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 31:Verify mentioned Category is displayed on left corner:Peel Application Videos", async () => {
            await CLPPage.verifypeelApplicationVideoButtonVisible(page);
            await page.waitForTimeout(2000);
        })
    })

    test("Select a Category:Verify that selecting a course category correctly filters the displayed courses on Main Page and Acts as Toggle", { tag: '@clp @regularuser @regression' }, async () => {
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
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step("Step 7:Click into the Password field ", async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 8:Enter Password in the Password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 9:Verify Login Button Visbility ", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 11:Verify PCASkin logo is present", async () => {
            await HomePage.isPcaSkinLogoVisible(page);
        })
        await test.step("Step 12:Verify Academy Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
        })
        await test.step("Step 13:Hover over Academy Section list", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
        })
        await test.step("Step 14:Verify Courses SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
        })
        await test.step("Step 15:Click on Courses SubMenu", async () => {
            await NavigationHeaderPageActions.clickOnSubHeadingCourseText(page);
        })
        await test.step("Step 16:Verify User is on the All Courses page", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
        })
        await test.step("Step 17:Click on the All Courses page", async () => {
            await CLPPage.clickAllCoursesButton(page);
        })
        await test.step("Step 18:Verify mentioned Category is displayed on Main Page window:All Courses", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
        })
        await test.step("Step 19:Click on the Education Membership button", async () => {
            await CLPPage.educationMembershipsButtonClickable(page);
        })
        await test.step("Step 20:Verify Selected Category is displayed on Main Page window:Education Membership", async () => {
            await CLPPage.verifyEducationMembershipsHeadingSelectedVisible(page);
        })
        await test.step("Step 21:Click on Fundamental Courses", async () => {
            await CLPPage.fundamentalCourses_ButtonClick(page);
        })
        await test.step("Step 22:Verify Selected Category is displayed on Main Page window:Fundamental Courses", async () => {
            await CLPPage.verifyFundamentalCourseSelectedHeadingVisible(page);
        })
        await test.step("Step 23:Click on Certification Courses", async () => {
            await CLPPage.clickCertificationCourse(page);
        })
        await test.step("Step 24:Verify Selected Category is displayed on Main Page window:Certification Courses", async () => {
            await CLPPage.verifyCertificationCourseSelectedHeadingVisible(page);
        })
        await test.step("Step 25:Click on Acne Courses", async () => {
            await CLPPage.clickAcneCourse(page);
        })
        await test.step("Step 26:Verify Selected Category is displayed on Main Page window:Acne", async () => {
            await CLPPage.verifyAcneSelectedHeadingVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 27:Click on Aging Courses", async () => {
            await CLPPage.clickAgingCourse(page);
        })
        await test.step("Step 28:Verify Selected Category is displayed on Main Page window:Aging", async () => {
            await CLPPage.verifyAgingSelectedHeadingVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 29:Click on Hyperpigmentation", async () => {
            await CLPPage.clickHyperpigmentationCourse(page);
        })
        await test.step("Step 30:Verify Selected Category is displayed on Main Page window :Hyperpigmentation", async () => {
            await CLPPage.verifyHyperpigmentationSelectedHeadingVisible(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 31:Click on Sensitive cream", async () => {
            await CLPPage.clickSensitiveSkinCourse(page);
        })
        await test.step("Step 32:Verify Selected Category is displayed on Main Page window:Sensitive cream", async () => {
            await CLPPage.verifySensitiveSkinSelectedHeadingVisible(page);
        })
        await test.step("Step 33:Click on Enhancing your Services", async () => {
            await CLPPage.clickEnhancingyourServicesCourse(page);
        })
        await test.step("Step 34:Verify Selected Category is displayed on Main Page window:Enhancing your Services", async () => {
            await CLPPage.verifyEnhanchingYourServicesHeadingVisible(page);
        })
        await test.step("Step 35:Click on Business Building", async () => {
            await CLPPage.clickBusinessBuildingcourse(page);
        })
        await test.step("5tep 36:Verify Selected Category is displayed on Main Page window:Business Building", async () => {
            await CLPPage.verifyBuildingBusinessSelectedHeadingVisible(page);
        })
        await test.step("Step 37:Click on Student Courses", async () => {
            await CLPPage.clickStudentCourses(page);
        })
        await test.step("Step 38:Verify Selected Category is displayed on Main Page window:Student Courses", async () => {
            await CLPPage.verifyStudentCoursesSelectedHeadingVisible(page);
        })
        await test.step("Step 39:Click on Nationl Seminar", async () => {
            await CLPPage.clickNationlSeminarCourses(page);
        })
        await test.step("Step 40:Verify Selected Category is displayed on Main Page window:Nationl Seminar", async () => {
            await CLPPage.verifyNationalSeminarsSelectedHeadingVisible(page);
        })
        await test.step("Step 41:Click on Multiculture Skin", async () => {
            await CLPPage.clickNMulticultureSkinCourses(page);
        })
        await test.step("Step 42:Verify Selected Category is displayed on Main Page window:Multiculture Skin", async () => {
            await CLPPage.verifyMulticulturalSkinSelectedHeadingVisible(page);
        })
        await test.step("Step 43:Click on Peel Application Videos", async () => {
            await CLPPage.clickPeelApplicationVideosCourses(page);
        })
        await test.step("Step 44:Verify Selected Category is displayed on Main Page window:Peel Application Videos", async () => {
            await CLPPage.verifyPeelApplicationVideosSelectedHeadingVisible(page);
        })
    })

    test("Title:Verify that the title displayed above the course grid dynamically updates to accurately reflect the currently selected course category.", { tag: '@regression @clp @regularuser' }, async () => {

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
            await page.waitForTimeout(3000);
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
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
        await test.step("Step 11:Verify PCASkin logo is present", async () => {
            await HomePage.isPcaSkinLogoVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12:Verify Academy Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13:Hover over Academy Section list", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14:Verify Courses SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15:Click on Courses SubMenu", async () => {
            await NavigationHeaderPageActions.clickOnSubHeadingCourseText(page);
        })
        await test.step("Step 16:Verify User is on the All Courses page", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17:Click on the All Courses page", async () => {
            await CLPPage.clickAllCoursesButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 18:Verify Title of the selected Category is displayed on Above Course Grid:All Courses", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 19:Click on the Education Membership button", async () => {
            await CLPPage.educationMembershipsButtonClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 20:Verify Title of the selected Category is displayed on Above Course Grid:Education Membership", async () => {
            await CLPPage.verifyEducationMembershipsHeadingSelectedVisible(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 21:Click on Fundamental Courses", async () => {
            await CLPPage.fundamentalCourses_ButtonClick(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 22:Verify Title of the selected Category is displayed on Above Course Grid:Fundamental Courses", async () => {
            await CLPPage.verifyFundamentalCourseSelectedHeadingVisible(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 23:Click on Certification Courses", async () => {
            await CLPPage.clickCertificationCourse(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 24:Verify Title of the selected Category is displayed on Above Course Grid:Certification Courses", async () => {
            await CLPPage.verifyCertificationCourseSelectedHeadingVisible(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 25:Click on Acne Courses", async () => {
            await CLPPage.clickAcneCourse(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 26:Verify Title of the selected Category is displayed on Above Course Grid:Acne", async () => {
            await CLPPage.verifyAcneSelectedHeadingVisible(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 27:Click on Aging Courses", async () => {
            await CLPPage.clickAgingCourse(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 28:Verify Title of the selected Category is displayed on Above Course Grid:Aging", async () => {
            await CLPPage.verifyAgingSelectedHeadingVisible(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 29:Click on Hyperpigmentation", async () => {
            await CLPPage.clickHyperpigmentationCourse(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 30:Verify Title of the selected Category is displayed on Above Course Grid :Hyperpigmentation", async () => {
            await CLPPage.verifyHyperpigmentationSelectedHeadingVisible(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 31:Click on Sensitive cream", async () => {
            await CLPPage.clickSensitiveSkinCourse(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 32:Verify Title of the selected Category is displayed on Above Course Grid:Sensitive cream", async () => {
            await CLPPage.verifySensitiveSkinSelectedHeadingVisible(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 33:Click on Enhancing your Services", async () => {
            await CLPPage.clickEnhancingyourServicesCourse(page);
        })
        await test.step("Step 34:Verify Title of the selected Category is displayed on Above Course Grid:Enhancing your Services", async () => {
            await CLPPage.verifyEnhanchingYourServicesHeadingVisible(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 35:Click on Business Building", async () => {
            await CLPPage.clickBusinessBuildingcourse(page);
        })
        await test.step("5tep 36:Verify Title of the selected Category is displayed on Above Course Grid:Business Building", async () => {
            await CLPPage.verifyBuildingBusinessSelectedHeadingVisible(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 37:Click on Student Courses", async () => {
            await CLPPage.clickStudentCourses(page);
        })
        await test.step("Step 38:Verify Title of the selected Category is displayed on Above Course Grid:Student Courses", async () => {
            await CLPPage.verifyStudentCoursesSelectedHeadingVisible(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 39:Click on Nationl Seminar", async () => {
            await CLPPage.clickNationlSeminarCourses(page);
        })
        await test.step("Step 40:Verify Title of the selected Category is displayed on Above Course Grid:Nationl Seminar", async () => {
            await CLPPage.verifyNationalSeminarsSelectedHeadingVisible(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 41:Click on Multiculture Skin", async () => {
            await CLPPage.clickNMulticultureSkinCourses(page);
        })
        await test.step("Step 42:Verify Title of the selected Category is displayed on Above Course Grid:Multiculture Skin", async () => {
            await CLPPage.verifyMulticulturalSkinSelectedHeadingVisible(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 43:Click on Peel Application Videos", async () => {
            await CLPPage.clickPeelApplicationVideosCourses(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 44:Verify Title of the selected Category is displayed on Above Course Grid:Peel Application Videos", async () => {
            await CLPPage.verifyPeelApplicationVideosSelectedHeadingVisible(page);
            await page.waitForTimeout(1000);
        })
    })

    test("Number of Courses:Verifyt the total number of courses filtered out due to category selection is displayed below the course category title", { tag: '@regression @clp @regularuser' }, async () => {
        test.setTimeout(250000)

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
            await page.waitForTimeout(3000);
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
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
        await test.step("Step 11:Verify PCASkin logo is present", async () => {
            await HomePage.isPcaSkinLogoVisible(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 12:Verify Academy Section list is present", async () => {
            await NavigationHeaderPageActions.visibilityAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 13:Hover over Academy Section list", async () => {
            await NavigationHeaderPageActions.hoverAcademyMenuList(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 14:Verify Courses SubMenu text is present", async () => {
            await NavigationHeaderPageActions.visibilityOfSubHeadingCourseText(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 15:Click on Courses SubMenu", async () => {
            await NavigationHeaderPageActions.clickOnSubHeadingCourseText(page);
        })
        await test.step("Step 16:Verify User is on the All Courses page", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17:Click on the All Courses page", async () => {
            await CLPPage.clickAllCoursesButton(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 18:Verify Total Number of Course is displayed Below Course Title:All Courses", async () => {
            await CLPPage.verifyAllCourseTotalNumber(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 19:Click on the Education Membership button", async () => {
            await CLPPage.educationMembershipsButtonClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 20:Verify Total Number of Course is displayed Below Course Title:Education Membership", async () => {
            await CLPPage.verifyEducationMembershipTotalNumber(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 21:Click on Fundamental Courses", async () => {
            await CLPPage.fundamentalCourses_ButtonClick(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 22:Verify Total Number of Course is displayed Below Course Title:Fundamental Courses", async () => {
            await CLPPage.verifyFundamentalCourseTotalNumber(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 23:Click on Certification Courses", async () => {
            await CLPPage.clickCertificationCourse(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 24:Verify Total Number of Course is displayed Below Course Title:Certification Courses", async () => {
            await CLPPage.verifyCertificationCourseTotalNumber(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 25:Click on Acne Courses", async () => {
            await CLPPage.clickAcneCourse(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 26:Verify Total Number of Course is displayed Below Course Title:Acne", async () => {
            await CLPPage.verifyAcneTotalNumber(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 27:Click on Aging Courses", async () => {
            await CLPPage.clickAgingCourse(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 28:Verify Total Number of Course is displayed Below Course Title:Aging", async () => {
            await CLPPage.verifyAgingTotalNumber(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 29:Click on Hyperpigmentation", async () => {
            await CLPPage.clickHyperpigmentationCourse(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 30:Verify Total Number of Course is displayed Below Course Title:Hyperpigmentation", async () => {
            await CLPPage.verifyHyperpigmentationTotalNumber(page);
        })
        await test.step("Step 31:Click on Sensitive cream", async () => {
            await CLPPage.clickSensitiveSkinCourse(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 32:Verify Total Number of Course is displayed Below Course Title:Sensitive cream", async () => {
            await CLPPage.verifySensitiveSkinTotalNumber(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 33:Click on Enhancing your Services", async () => {
            await CLPPage.clickEnhancingyourServicesCourse(page);
        })
        await test.step("Step 34:Verify Total Number of Course is displayed Below Course Title:Enhancing your Services", async () => {
            await CLPPage.verifyEnhancingYourServiceTotalNumber(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 35:Click on Business Building", async () => {
            await CLPPage.clickBusinessBuildingcourse(page);
        })
        await test.step("5tep 36:Verify Total Number of Course is displayed Below Course Title:Business Building", async () => {
            await CLPPage.verifyBusinessBuildingTotalNumber(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 37:Click on Student Courses", async () => {
            await CLPPage.clickStudentCourses(page);
        })
        await test.step("Step 38:Verify Total Number of Course is displayed Below Course Title:Student Courses", async () => {
            await CLPPage.verifyStudentCourseTotalNumber(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 39:Click on Nationl Seminar", async () => {
            await CLPPage.clickNationlSeminarCourses(page);
        })
        await test.step("Step 40:Verify Total Number of Course is displayed Below Course Title:Nationl Seminar", async () => {
            await CLPPage.verifyNationalSeminarsTotalNumber(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 41:Click on Multiculture Skin", async () => {
            await CLPPage.clickNMulticultureSkinCourses(page);
        })
        await test.step("Step 42:Verify Total Number of Course is displayed Below Course Title:Multiculture Skin", async () => {
            await CLPPage.verifyMulticulturalSkinTotalNumber(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 43:Click on Peel Application Videos", async () => {
            await CLPPage.clickPeelApplicationVideosCourses(page);
        })
        await test.step("Step 44:Verify Total Number of Course is displayed Below Course Title:Peel Application Videos", async () => {
            await CLPPage.verifyPeelApplicationVideosotalNumber(page);
            await page.waitForTimeout(3000);
        })
    })


    test("Course Tile:Verify that the following elements are displayed on each course tile of Selected Category:", { tag: '@regression @clp @regularuser' }, async () => {

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
        })
        await test.step("Step 6:Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step("Step 7:Click into the Password field ", async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 8:Enter Password in the Password field", async () => {
            await HomePage.clearAndEnterIntoPasswordInputField(page, testdata.Password.regularPassword);
        })
        await test.step("Step 9:Verify Login Button Visbility ", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 10:Click on the Log in button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(8000);
        })

        await test.step("Step 11:Verify PCASkin logo is present", async () => {
            await HomePage.isPcaSkinLogoVisible(page);
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
        })
        await test.step("Step 16:Verify User is on the All Courses page", async () => {
            await CLPPage.visibilityAllCoursesHeading(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 17:Click on the Education Membership button", async () => {
            await CLPPage.educationMembershipsButtonClickable(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 18:Verify Acne Membership course is present: Image", async () => {
            await CLPPage.verifyCourseAcneMembershipImagePresent(page);
        })
        await test.step("Step 19:Verify Acne Membership course is present: Name", async () => {
            await CLPPage.verifyCourseAcneMembershipNamePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 20:Verify Acne Membership course is present: Rating", async () => {
            await CLPPage.verifyCourseAcneMembershipRatingPresent(page);
        })
        await test.step("Step 21:Verify Acne Membership course is present: Decription", async () => {
            await CLPPage.verifyCourseAcneMembershipDescriptionPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 22:Verify Acne Membership course is present: Learn More", async () => {
            await CLPPage.verifyCourseAcneMembershipLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 23:Verify Acne Membership course is present: Favorite Btn", async () => {
            await CLPPage.verifyCourseAcneMembershipLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 24:Click on Fundamental Course Category", async () => {
            await CLPPage.fundamentalCourses_ButtonClick(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 25:Verify Antioxidants Course is present", async () => {
            await CLPPage.verifyCourseAntioxidantsPresent(page);
        })
        await test.step("Step 26:Verify Antioxidants: Expect More course is present: Image", async () => {
            await CLPPage.verifyCourseAntioxidantsshipImagePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 27:Verify Antioxidants: Expect More is present: Name", async () => {
            await CLPPage.verifyCourseAntioxidantsNamePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 28:Verify Antioxidants: Expect More is present: Rating", async () => {
            await CLPPage.verifyCourseAntioxidantsRatingPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 29:Verify Antioxidants: Expect More is present: Decription", async () => {
            await CLPPage.verifyCourseAntioxidantsDescriptionPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 30:Verify Antioxidants: Expect More is present: Learn More", async () => {
            await CLPPage.verifyCourseAntioxidantsLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 31:Verify Antioxidants: Expect More is present: Favorite Btn", async () => {
            await CLPPage.verifyCourseAntioxidantsFavoriteBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 32:Click on Certification Course", async () => {
            await CLPPage.clickCertificationCourse(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 33:Verify Professionl Peel: Expect More course is present: Image", async () => {
            await CLPPage.verifyCourseProfessionalPeelImagePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 34:Verify Professionl Peel is present: Name", async () => {
            await CLPPage.verifyCourseProfessionalPeelNamePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 35:Verify Professionl Peel is present: Rating", async () => {
            await CLPPage.verifyCourseProfessionalPeelsRatingPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 36:Verify Professionl Peel is present: Decription", async () => {
            await CLPPage.verifyCourseProfessionalPeelDescriptionPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 37:Verify Professionl Peel is present: Learn More", async () => {
            await CLPPage.verifyCourseProfessionalPeelLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 38:Verify Professionl Peel is present: Favorite Btn", async () => {
            await CLPPage.verifyCourseProfessionalPeelFavoriteBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 39:Click on Acne Category", async () => {
            await CLPPage.clickAcneCourse(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 40:Verify Acne Scarring: Expect More course is present: Image", async () => {
            await CLPPage.verifyCourseAcneScarringImagePresent(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 41:Verify Acne Scarring is present: Name", async () => {
            await CLPPage.verifyCourseAcneScarringPeelNamePresent(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 42:Verify Acne Scarring is present: Rating", async () => {
            await CLPPage.verifyCourseAcneScarringRatingPresent(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 43:Verify Acne Scarring is present: Decription", async () => {
            await CLPPage.verifyCourseAcneScarringDescriptionPresent(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 44:Verify Acne Scarring is present: Learn More", async () => {
            await CLPPage.verifyCourseAcneScarringLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 45:Verify Acne Scarring is present: Favorite Btn", async () => {
            await CLPPage.verifyCourseAcneScarringFavoriteBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 46:Click on Aging", async () => {
            await CLPPage.clickAgingCourse(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 47:Verify Ingredients for Treating Aging Skin course is present", async () => {
            await CLPPage.verifyCourseTreatingAgingPresent(page);
        })
        await test.step("Step 48:Verify Ingredients for Treating Aging Skin course: Expect More course is present: Image", async () => {
            await CLPPage.verifyCourseTreatingAgingSkinImagePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 49:Verify Ingredients for Treating Aging Skin course is present: Name", async () => {
            await CLPPage.verifyCourseTreatingAgingSkinNamePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 50:Verify Ingredients for Treating Aging Skin course is present: Rating", async () => {
            await CLPPage.verifyCourseTreatingAgingSkinRatingPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 51:Verify Ingredients for Treating Aging Skin course is present: Decription", async () => {
            await CLPPage.verifyCourseTreatingAgingSkinDescriptionPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 52:Verify Treating Aging Skin course is present: Learn More", async () => {
            await CLPPage.verifyCourseTreatingAgingSkinLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 53:Verify Treating Aging Skin course is present: Favorite Btn", async () => {
            await CLPPage.verifyCourseTreatingAgingSkinFavoriteBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 54:Click on Hyperpigmentation Category", async () => {
            await CLPPage.clickHyperpigmentationCourse(page);
            await page.waitForTimeout(5000);
        })
        await test.step("Step 55:Verify Look At Melasma course is present: Image", async () => {
            await CLPPage.verifyCourseLookAtMelasmaImagePresent(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 56:Verify Look At Melasma course is present: Name", async () => {
            await CLPPage.verifyCourseLookAtMelasmaNamePresent(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 57:Verify Look At Melasma course is present: Rating", async () => {
            await CLPPage.verifyCourseLookAtMelasmaRatingPresent(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 58:Verify Look At Melasma course is present: Decription", async () => {
            await CLPPage.verifyCourseLookAtMelasmaDescriptionPresent(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 59:Verify Look At Melasma course is present: Learn More", async () => {
            await CLPPage.verifyCourseLookAtMelasmaLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 60:Verify Look At Melasma course is present: Favorite Btn", async () => {
            await CLPPage.verifyCourseLookAtMelasmaFavoriteBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 61:Click on Sensitive Skin Category", async () => {
            await CLPPage.clickSensitiveSkinCourse(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 62:Verify Understanding of Rosacea course is present: Image", async () => {
            await CLPPage.verifyCourseUnderstandingofRosaceaImagePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 63:Verify Understanding of Rosacea course is present: Name", async () => {
            await CLPPage.verifyCourseUnderstandingofRosaceaNamePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 64:Verify Understanding of Rosacea course is present: Rating", async () => {
            await CLPPage.verifyCourseUnderstandingofRosaceaRatingPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 65:Verify Understanding of Rosacea course is present: Decription", async () => {
            await CLPPage.verifyCourseUnderstandingofRosaceaDescriptionPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 66:Verify Understanding of Rosacea course is present: Learn More", async () => {
            await CLPPage.verifyCourseUnderstandingofRosaceaLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 67:Verify Understanding of Rosacea course is present: Favorite Btn", async () => {
            await CLPPage.verifyCourseUnderstandingofRosaceaFavoriteBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 68:Click on Enhancing your Services", async () => {
            await CLPPage.clickEnhancingyourServicesCourse(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 69:Verify Body Treatments course is present: Image", async () => {
            await CLPPage.verifyCourseBodyTreatmentsImagePresent(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 70:Verify Body Treatments course is present: Name", async () => {
            await CLPPage.verifyCourseBodyTreatmentsNamePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 71:Verify Body Treatments course is present: Rating", async () => {
            await CLPPage.verifyCourseBodyTreatmentsRatingPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 72:Verify Body Treatments course is present: Decription", async () => {
            await CLPPage.verifyCourseBodyTreatmentsDescriptionPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 73:Verify Body Treatments course is present: Learn More", async () => {
            await CLPPage.verifyCourseBodyTreatmentsLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 74:Verify Body Treatments course is present: Favorite Btn", async () => {
            await CLPPage.verifyCourseBodyTreatmentsFavoriteBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 75:Click on Business Building", async () => {
            await CLPPage.clickBusinessBuildingcourse(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 76:Verify Enhanced Merchandising course is present", async () => {
            await CLPPage.verifyCourseEnhancedMerchandisingPresent(page);
            await page.waitForTimeout(1000);
        })
        await test.step("Step 77:Verify Enhanced Merchandising course is present: Image", async () => {
            await CLPPage.verifyCourseEnhancedMerchandisingImagePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 78:Verify Enhanced Merchandising course is present: Name", async () => {
            await CLPPage.verifyCourseEnhancedMerchandisingNamePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 79:Verify Enhanced Merchandising course is present: Rating", async () => {
            await CLPPage.verifyCourseEnhancedMerchandisingRatingPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 80:Verify Enhanced Merchandising course is present: Decription", async () => {
            await CLPPage.verifyCourseEnhancedMerchandisingDescriptionPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 81:Verify Enhanced Merchandising course is present: Learn More", async () => {
            await CLPPage.verifyCourseEnhancedMerchandisingLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 82:Verify Enhanced Merchandising course is present: Favorite Btn", async () => {
            await CLPPage.verifyCourseEnhancedMerchandisingFavoriteBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 83:Click on Student Courses", async () => {
            await CLPPage.clickStudentCourses(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 84:Verify Student Curriculam course is present: Image", async () => {
            await CLPPage.verifyCourseStudentCurriculamImagePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 84:Verify Student Curriculam course is present: Name", async () => {
            await CLPPage.verifyCourseStudentCurriculamNamePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 86:Verify Student Curriculam course is present: Rating", async () => {
            await CLPPage.verifyCourseStudentCurriculamRatingPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 87:Verify Student Curriculam course is present: Decription", async () => {
            await CLPPage.verifyCourseStudentCurriculamDescriptionPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 88:Verify Student Curriculam course is present: Learn More", async () => {
            await CLPPage.verifyCourseStudentCurriculamLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 89:Verify Student Curriculam course is present: Favorite Btn", async () => {
            await CLPPage.verifyCourseStudentCurriculamFavoriteBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 90:Click on Nationl Seminar", async () => {
            await CLPPage.clickNationlSeminarCourses(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 91:Verify Art of Peeling Charlotte course is present: Image", async () => {
            await CLPPage.verifyCoursePeelingCharlotteImagePresent(page);
            await page.waitForTimeout(2000);
        })
        await test.step("Step 92:Verify Art of Peeling Charlotte course is present: Name", async () => {
            await CLPPage.verifyCoursePeelingCharlotteNamePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 93:Verify Art of Peeling Charlotte course is present: Rating", async () => {
            await CLPPage.verifyCoursePeelingCharlotteRatingPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 94:Verify Art of Peeling Charlotte course is present: Decription", async () => {
            await CLPPage.verifyCoursePeelingCharlotteDescriptionPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 95:Verify Art of Peeling Charlotte course is present: Learn More", async () => {
            await CLPPage.verifyCoursePeelingCharlotteLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 96:Verify Art of Peeling Charlotte course is present: Favorite Btn", async () => {
            await CLPPage.verifyCoursePeelingCharlotteFavoriteBtnPresent(page);
            await page.waitForTimeout(3000);
        })

        await test.step("Step 97:Click on Multiculture Skin", async () => {
            await CLPPage.clickNMulticultureSkinCourses(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 98:Verify Skin Of Color course is present", async () => {
            await CLPPage.verifyCourseSkinOfColorPresent(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 99:Verify Skin Of Color course is present: Image", async () => {
            await CLPPage.verifyCourseSkinOfColorImagePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 100:Verify Skin Of Color  Charlotte course is present: Name", async () => {
            await CLPPage.verifyCourseSkinOfColorNamePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 101:Verify Skin Of Color Charlotte course is present: Rating", async () => {
            await CLPPage.verifyCourseSkinOfColorRatingPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 102:Verify Skin Of Color  Charlotte course is present: Decription", async () => {
            await CLPPage.verifyCourseSkinOfColorDescriptionPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 103:Verify Skin Of Color  course is present: Learn More", async () => {
            await CLPPage.verifyCourseSkinOfColorLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 104:Verify Skin Of Color  course is present: Favorite Btn", async () => {
            await CLPPage.verifyCourseSkinOfColorFavoriteBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 105:Click on Peel Application Videos", async () => {
            await CLPPage.clickPeelApplicationVideosCourses(page);
            await page.waitForTimeout(4000);
        })
        await test.step("Step 106:Verify MD Peel course is present: Image", async () => {
            await CLPPage.verifyCourseMDPeelImagePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 107:Verify  MD Peel course is present: Name", async () => {
            await CLPPage.verifyCourseMDPeelNamePresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 108:Verify MD Peel course is present: Rating", async () => {
            await CLPPage.verifyCourseMDPeelRatingPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 109:Verify MD Peel course is present: Decription", async () => {
            await CLPPage.verifyCourseMDPeelDescriptionPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 110:Verify SMD Peel course is present: Learn More", async () => {
            await CLPPage.verifyCourseMDPeelLearnMoreBtnPresent(page);
            await page.waitForTimeout(3000);
        })
        await test.step("Step 111:Verify MD Peel course is present: Favorite Btn", async () => {
            await CLPPage.verifyCourseMDPeelFavoriteBtnPresent(page);
            await page.waitForTimeout(3000);
        })

    })

})
