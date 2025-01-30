import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { EducationLocators } from "../locators/EducationLocators";
import educationPageTestData from "../testdata/pcaSkinCare.testdata.json";

export class EducationPage {
    static async visibilityEducationHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, EducationLocators.educationHeading);
    }

    static async visibilityEducationCourseCard(page: any) {
        await VerificationHelpers.elementIsVisible(page, EducationLocators.educationCourseCard);
    }

    static async visibilityEducationCourseCardHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, EducationLocators.educationCourseCardHeading);
    }

    static async visibilityEducationCourseCardStatus(page: any) {
        await VerificationHelpers.elementIsVisible(page, EducationLocators.educationCourseCardStatus);
    }

    static async visibilityViewEducationDashboard(page: any) {
        await VerificationHelpers.elementIsVisible(page, EducationLocators.viewEducationDashboard);
    }

    static async visibilityViewCourseButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, EducationLocators.viewCourseBtn);
    }

    static async visibilityFavouriteButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, EducationLocators.favouriteBtn);
    }

    static async visibilityCourseImage(page: any) {
        await VerificationHelpers.elementIsVisible(page, EducationLocators.courseImage);
    }

    static async visibilityCourseCardInfo(page: any) {
        await VerificationHelpers.elementIsVisible(page, EducationLocators.courseCardInfo);
    }

    static async verifyEducationHeading(page: any) {
        await VerificationHelpers.elementContainsText(page, EducationLocators.educationHeading, educationPageTestData.EducationPage.heading);
    }

    static async verifyCourseCardHeadingText(page: any) {
        await VerificationHelpers.elementContainsText(page, EducationLocators.educationCourseCardHeading, educationPageTestData.EducationPage.CourseCardHeading);
    }

    static async verifyCourseCardStatusText(page: any) {
        await VerificationHelpers.elementContainsText(page, EducationLocators.educationCourseCardStatus, educationPageTestData.EducationPage.CourseCardStatus);
    }

    static async verifyViewEducationDashboardText(page: any) {
        await VerificationHelpers.elementContainsText(page, EducationLocators.viewEducationDashboard, educationPageTestData.EducationPage.EduactionDashboardText);
    }

    static async clickViewEducationDashboardLink(page: any) {
        await ElementHelper.clickElement(page, EducationLocators.viewEducationDashboard);
    }

    static async verifyAttributeViewEducationDashboard(page: any) {
        await VerificationHelpers.elementHasAttribute(page, EducationLocators.viewEducationDashboard, educationPageTestData.ViewEducationDashboard.href, educationPageTestData.ViewEducationDashboard.Value);
    }

    static async clickOnViewCourseButton(page: any) {
        await ElementHelper.clickElement(page, EducationLocators.viewCourseBtn);
    }

    static async verifyAttributeViewCourseButton(page: any) {
        await VerificationHelpers.elementHasAttribute(page, EducationLocators.viewCourseBtn, educationPageTestData.ViewCourseButton.href, educationPageTestData.ViewCourseButton.Value);
    }

    static async clickOnFavouriteButton(page: any) {
        await ElementHelper.clickElement(page, EducationLocators.favouriteBtn);
    }

    static async getTextInfoOfCourse(page: any) {
        await ElementHelper.getTextFromElement(page, EducationLocators.courseCardInfo)
    }

    static async enabledViewCourseButton(page: any) {
        await ElementHelper.isElementEnabled(page, EducationLocators.viewCourseBtn);
    }

    static async enabledFavorateButton(page: any) {
        await ElementHelper.isElementEnabled(page, EducationLocators.favouriteBtn);
    }
}