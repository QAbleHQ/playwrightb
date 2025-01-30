import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper"
import { CDPLocators } from "../locators/CDPLocators";
import { CoursePLPLocators } from "../locators/CLPLocators";
import cdpTestData from "../testdata/pcaSkinCare.testdata.json";
import { NavigationHeaderLocators } from "../locators/NavigationHeaderLocators";

export class CDPPage {

    // Button Methods
    static async logInButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.logIn);
    }

    static async logInButtonClickable(page: any) {
        await ElementHelper.clickElement(page, CDPLocators.logIn);
    }

    static async logInButtonEnabled(page: any) {
        await VerificationHelpers.elementIsEnabled(page, CDPLocators.logIn);
    }

    static async logInButtonDisabled(page: any) {
        await VerificationHelpers.elementIsDisabled(page, CDPLocators.logIn);
    }

    static async joinButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.join);
    }

    static async joinButtonClickable(page: any) {
        await ElementHelper.clickElement(page, CDPLocators.join);
    }

    static async joinButtonEnabled(page: any) {
        await VerificationHelpers.elementIsEnabled(page, CDPLocators.join);
    }

    static async joinButtonDisabled(page: any) {
        await VerificationHelpers.elementIsDisabled(page, CDPLocators.join);
    }

    // Input Field Methods
    static async logInButtonClick(page: any) {
        await ElementHelper.clickElement(page, CDPLocators.logIn);
    }

    static async clearAndEnterLogInData(page: any, data: string) {
        await ElementHelper.clearAndEnterInTextField(page, CDPLocators.logIn, data);
    }

    // Text Methods
    static async headerTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.aDeepDiveInto);
    }

    static async headerTextGetText(page: any) {
        return await ElementHelper.getTextFromElement(page, CDPLocators.aDeepDiveInto);
    }

    static async expandYourTreatmentTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.expandYourTreatment);
    }

    static async identifyKeyIngredientsTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.identifyKeyIngredients);
    }

    static async createComprehensiveTreatmentTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.createComprehensiveTreatment);
    }

    static async confidentlyAddressTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.confidentlyAddress);
    }

    static async useYourTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.useYour);
    }

    static async pleaseNoteTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.pleaseNote);
    }

    static async alreadyHaveAnAccountBoxVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.alreadyHaveAnAccountBox);
    }

    static async logIntoSeeTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.logIntoSee);
    }

    static async newToBoxVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.newToBox);
    }

    static async newToPCASKINTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.newToPCASKIN);
    }

    static async registerToAccessTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.registerToAccess);
    }


    static async visibilityHeaderOfTheCourse(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.antioxidantsExpectMore);
    }
    static async visibilityCoursePrice(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.coursePrice);
    }
    static async visibilityCourseAddToCartButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.courseAddToCartBtn);
    }
    static async clickCourseAddToCartButton(page: any) {
        await ElementHelper.clickElement(page, CDPLocators.courseAddToCartBtn);
    }
    static async visibilityFavoriteCtaButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.courseFavoriteBtn);
    }
    static async clickCourseFavoriteCtaButton(page: any) {
        await ElementHelper.clickElement(page, CDPLocators.courseFavoriteBtn);
    }
    static async visibilityAddToCartToast(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.addToFavouriteToast);
    }
    static async visibilityRemovedFromFavouriteToast(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.removedFromFavouriteToast);
    }
    static async visibilityCourseHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.courseHeading);
    }
    static async hiddenCoursePrice(page: any) {
        await VerificationHelpers.elementIsHidden(page, CDPLocators.coursePrice);
    }
    static async hiddenCourseAddToCartButton(page: any) {
        await VerificationHelpers.elementIsHidden(page, CDPLocators.courseAddToCartBtn);
    }
    static async courseRestrictedMsgForUAT(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.courseRestrictedMsgForUAT);
    }
    static async verifyCourseRestrictedMessageForUAT(page: any) {
        await VerificationHelpers.elementContainsText(page, CDPLocators.courseRestrictedMsgForUAT, cdpTestData.RestrictedMessage.UAT);
    }


    static async academyMenuListHeaderIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.academyMenuListHeader);
    }
    static async academyMenuListHeaderHover(page: any) {
        await ElementHelper.hoverOverMenu(page, CDPLocators.academyMenuListHeader);
    }
    static async fundamentalCoursesUnderAcademyIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.fundamentalCoursesUnderAcademy);
    }
    static async fundamentalCoursesUnderAcademyIsClickable(page: any) {
        await ElementHelper.clickElement(page, CDPLocators.fundamentalCoursesUnderAcademy);
    }
    static async courseListPageIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.courseDetaisPage);
    }
    static async courseImageAntioxidantsIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.courseImageAntioxidants);
    }
    static async courseImageAntioxidantsIsClickable(page: any) {
        await ElementHelper.clickElement(page, CDPLocators.courseImageAntioxidants);
    }
    static async courseDetailsPageIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.courseDetailsPage);
    }
    static async antioxidantLoginBtnIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.antioxidantLoginBtn);
    }
    static async antioxidantLoginBtnIsHover(page: any) {
        await ElementHelper.hoverOverMenu(page, CDPLocators.antioxidantLoginBtn);
    }
    static async antioxidantLoginBtnIsClickable(page: any) {
        await ElementHelper.clickElement(page, CDPLocators.antioxidantLoginBtn);
    }
    static async antioxidantLoginDialogIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.antioxidantLoginDialog);
    }
    static async antioxidantJoinBtnBtnIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.antioxidantJoinBtn);
    }
    static async antioxidantJoinBtnIsHover(page: any) {
        await ElementHelper.hoverOverMenu(page, CDPLocators.antioxidantJoinBtn);
    }
    static async antioxidantJoinBtnIsClickable(page: any) {
        await ElementHelper.clickElement(page, CDPLocators.antioxidantJoinBtn);
    }
    static async registerYourProfilePageIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CDPLocators.registerYourProfilePage);
    }
    static async scrollDownUpToJoinButton(page: any) {
        await ElementHelper.scrollToElement(page, CDPLocators.antioxidantJoinBtn);
    }
    static async coursePriceOfAntioxidantIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, CDPLocators.coursePriceOfAntioxidant);
    }
    static async courseFavoriteBtnOfAntioxidantIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, CDPLocators.courseFavoriteBtnOfAntioxidant);
    }
    static async antioxidantAddtocartBtnIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, CDPLocators.antioxidantAddtocartBtn);
    }

    static async verifyCourseAcneMembershipReviewPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.educationMembershipCourseDeatailPage);
    }
    static async verifyReviewStarRatingIsPresent(page: any) {
        await ElementHelper.isElementDisplayed(page, CoursePLPLocators.courseReviewStar);
    }
    static async verifyReviewRatingIsPresent(page: any) {
        await ElementHelper.isElementDisplayed(page, CoursePLPLocators.courseReviewRating);
    }
    static async verifyTotalViewsIsPresent(page: any) {
        await ElementHelper.isElementDisplayed(page, CoursePLPLocators.courseReviewTotalView);
    }
    static async verifyWriteReviewIsPresent(page: any) {
        await ElementHelper.isElementDisplayed(page, CoursePLPLocators.courseReviewWriteReviewBtn);
    }
    static async clickWriteReviewIsPresent(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.courseReviewWriteReviewBtn);
    }
    static async verifyMyReviewModuleIsPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.courseMyReviewModule);
    }



    static async verifyCourseDeepDownIntoProfessionalProductDetailsPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.aDeepDownIntoProfessionalProductsDetailsPage);
    }
    static async verifyCourseDeepDownIntoProfessionalProductStarRatingPresnt(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.courseReviewStar);
    }
    static async hoverOverDeepDownIntoProfessionalProductStarRating(page: any) {
        await ElementHelper.hoverOverMenu(page, CoursePLPLocators.courseReviewStar);
    }
    static async verifyHoverOverDeepDownIntoProfessionalProductRatingStarShowSection(page: any) {
        await ElementHelper.isElementDisplayed(page, CoursePLPLocators.courseHoverOverStar);
    }
    static async verifyCourseDeepDownIntoProfessionalProductPleaseNote(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourseProfessionalPeelPleaseNote);
    }



    static async verifyReadReviewBtnHoverOverRatingStar(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.courseHoverOverStarReadReviewbtn);
    }
    static async clickonReadReviewBtnHoverOverRatingStar(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.courseHoverOverStarReadReviewbtn);
    }
    static async verifyReviewSectionIsPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.courseReviewSections);
    }


    static async verifyCourseInPersonFundamentalPeelDetailsPage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.certificationCourseInPersonFundamentalPeelCertificationlDetailPage);
    }
    static async verifyCourseInPersonFundamentalPeelPriceTag(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourseInPersonFundamentalPeelCertificationlDetailPagePriceTage);
    }

}

