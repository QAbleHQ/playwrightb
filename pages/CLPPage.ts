import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { CoursePLPLocators } from "../locators/CLPLocators";


export class CLPPage {

    // Button Methods
    static async allCoursesButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.allCoursesButton);
    }

    static async allCoursesButtonClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.allCoursesButton);
    }

    static async allCoursesButtonEnable(page: any) {
        await VerificationHelpers.elementIsEnabled(page, CoursePLPLocators.allCoursesButton);
    }

    static async allCoursesButtonDisable(page: any) {
        await VerificationHelpers.elementIsDisabled(page, CoursePLPLocators.allCoursesButton);
    }

    static async educationMembershipsButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.educationMembershipsButton);
    }

    static async educationMembershipsButtonClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.educationMembershipsButton);
    }

    static async educationMembershipsButtonEnable(page: any) {
        await VerificationHelpers.elementIsEnabled(page, CoursePLPLocators.educationMembershipsButton);
    }

    static async educationMembershipsButtonDisable(page: any) {
        await VerificationHelpers.elementIsDisabled(page, CoursePLPLocators.educationMembershipsButton);
    }

    // Input Field Methods
    static async fundamentalCourses_ButtonClick(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.fundamentalCoursesButton);
    }

    static async fundamentalCourses_ButtonClearAndEnterData(page: any, data: string) {
        await ElementHelper.clearAndEnterInTextField(page, CoursePLPLocators.fundamentalCoursesButton, data);
    }

    static async certificationCoursesInputFieldEnable(page: any) {
        await VerificationHelpers.elementIsEnabled(page, CoursePLPLocators.certificationCourses);
    }

    static async certificationCoursesInputFieldDisable(page: any) {
        await VerificationHelpers.elementIsDisabled(page, CoursePLPLocators.certificationCourses);
    }

    // Text Methods
    static async acneTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acne);
    }

    static async acneTextGetText(page: any) {
        await ElementHelper.getTextFromElement(page, CoursePLPLocators.acne);
    }

    static async agingTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.aging);
    }

    static async agingTextGetText(page: any) {
        await ElementHelper.getTextFromElement(page, CoursePLPLocators.aging);
    }

    static async HyperpigmentationTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.hyperPigmentation);
    }

    static async hyperpigmentationTextGetText(page: any) {
        await ElementHelper.getTextFromElement(page, CoursePLPLocators.hyperPigmentation);
    }

    static async sensitiveSkinTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.sensitiveSkin);
    }

    static async sensitiveSkinTextGetText(page: any) {
        await ElementHelper.getTextFromElement(page, CoursePLPLocators.sensitiveSkin);
    }

    static async numberOfCoursesVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.numberOfCourses);
    }

    static async getNumberOfCoursesText(page: any) {
        await ElementHelper.getTextFromElement(page, CoursePLPLocators.numberOfCourses);
    }
    static async deepDiveImageVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.deepDiveImage);
    }

    static async deepDiveRatingVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.deepDiveRating);
    }

    static async deepDiveDetailsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.deepDiveDetails);
    }

    static async deepDiveLearnMoreVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.deepDiveLearnMore);
    }

    static async deepDiveStarRatingVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.deepDiveStarRating);
    }

    static async deeperLookImageVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.deeperLookImage);
    }

    static async deeperLookRatingVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.deeperLookRating);
    }

    static async deeperLookDetailsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.deeperLookDetails);
    }

    static async deeperLookLearnMoreVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.deeperLookLearnMore);
    }

    static async deeperLookStarRatingVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.deeperLookStarRating);
    }
    static async deepDiveSensitiveSkinVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.deepDiveSensitiveSkin);
    }

    static async deeperLookTopicalIngredientsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.deeperLookTopicalIngredients);
    }

    static async deeperUnderstandingRosaceaVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.deeperUnderstandingRosacea);
    }

    static async achievingBrighteningResultsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.achievingBrighteningResults);
    }

    static async acneMembershipVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acneMembership);
    }

    static async acneScarringVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acneScarring);
    }

    static async addressingAdolescentAcneVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.addressingAdolescentAcne);
    }

    static async advancedAgingVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.advancedAging);
    }

    static async advancedPeelingTechniquesVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.advancedPeelingTechniques);
    }

    static async agingSkinMembershipVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.agingSkinMembership);
    }

    static async allAccessMembershipVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.allAccessMembership);
    }

    static async inDepthLookMelasmaVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.inDepthLookMelasma);
    }

    static async inDepthLookHypopigmentationVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.inDepthLookHypopigmentation);
    }

    static async antioxidantsExpectMoreVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.antioxidantsExpectMore);
    }

    static async asianSkinTreatmentsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.asianSkinTreatments);
    }

    static async bodyTreatmentsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.bodyTreatments);
    }

    static async boostingProfitTreatmentsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.boostingProfitTreatments);
    }

    static async correctiveFacialsExtractionsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.correctiveFacialsExtractions);
    }

    static async dailyCareProductOverviewVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.dailyCareProductOverview);
    }

    static async hormonallyInducedAcneVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.hormonallyInducedAcne);
    }

    static async enhancedMerchandisingVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancedMerchandising);
    }

    static async enhancingYourServicesMembershipVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingYourServicesMembership);
    }

    static async enhancingDermaplaningVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingDermaplaning);
    }

    static async enhancingInjectablesVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingInjectables);
    }

    static async enhancingIPLVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingIpl);
    }

    static async enhancingLEDVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingLed);
    }

    static async enhancingMicrocurrentVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingMicrocurrent);
    }

    static async enhancingMicrodermabrasionVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingMicrodermabrasion);
    }

    static async enhancingMicroneedlingVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingMicroneedling);
    }

    static async enhancingRadiofrequencyVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingRadioFrequency);
    }

    static async enhancingStudentCurriculumVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingStudentCurriculum);
    }

    static async favouriteBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, CoursePLPLocators.favouriteIcon);
    }
    static async favouriteBtnClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.favouriteIcon);
    }
    static async getfavouriteText(page: any) {
        return await ElementHelper.getTextFromElement(page, CoursePLPLocators.favouriteIcon);
    }
    static async hoverOverFavouriteBtn(page: any) {
        return await ElementHelper.hoverOverMenu(page, CoursePLPLocators.favouriteIcon);
    }

    static async favouriteSelectToastIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, CoursePLPLocators.favouriteIcon);
    }
    static async getFavouriteSelectToastText(page: any) {
        return await ElementHelper.getTextFromElement(page, CoursePLPLocators.favouriteIcon);
    }

    static async favouriteUnSelectToastIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, CoursePLPLocators.favouriteIcon);
    }
    static async getFavouriteUnSelectToastText(page: any) {
        return await ElementHelper.getTextFromElement(page, CoursePLPLocators.favouriteIcon);
    }


    static async visibilityAllCoursesHeading(page: any) {
        return await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.allCoursesHeading);
    }
    static async visibilityRestrictedCourseForStudent(page: any) {
        return await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.povOfPhysicianRestrictedCourseStudent);
    }
    static async clickRestrictedCourseForStudent(page: any) {
        return await ElementHelper.clickElement(page, CoursePLPLocators.povOfPhysicianRestrictedCourseStudent);
    }



    static async academyMenuListHeaderIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.academyMenuListHeader);
    }
    static async academyMenuListHeaderIsHover(page: any) {
        await ElementHelper.hoverOverMenu(page, CoursePLPLocators.academyMenuListHeader);
    }
    static async fundamentalCoursesUnderAcademyIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.fundamentalCoursesUnderAcademy);
    }
    static async fundamentalCoursesUnderAcademyIsHover(page: any) {
        await ElementHelper.hoverOverMenu(page, CoursePLPLocators.fundamentalCoursesUnderAcademy);
    }
    static async fundamentalCoursesUnderAcademyIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.fundamentalCoursesUnderAcademy);
    }
    static async courseListPageCLPIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.courseListPageCLP);
    }
    //Course image 
    static async antioxidantsImageIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.antioxidantsImage);
    }
    static async antioxidantsImageIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.antioxidantsImage);
    }
    static async antioxidantsImageIsHover(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.antioxidantsImage);
    }
    //Course Title/Name
    static async antioxidantsProductTitleIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.antioxidantsProductTitle);
    }
    static async antioxidantsProductTitleIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.antioxidantsProductTitle);
    }
    static async antioxidantsProductTitleIsHover(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.antioxidantsProductTitle);
    }
    static async antioxidantsProductTitleIsScroll(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.antioxidantsProductTitle);
    }
    //Course Rating/Review
    static async antioxidantsProductRatingIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.antioxidantsProductRating);
    }
    static async antioxidantsProductRatingIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.antioxidantsProductRating);
    }
    static async antioxidantsProductRatingIsHover(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.antioxidantsProductRating);
    }
    static async antioxidantsProductRatingIsScroll(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.antioxidantsProductRating);
    }
    //Course First Description
    static async antioxidantsProductFirstDescriptionIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.antioxidantsProductFirstDescription);
    }
    static async antioxidantsProductFirstDescriptionIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.antioxidantsProductFirstDescription);
    }
    static async antioxidantsProductFirstDescriptionIsHover(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.antioxidantsProductFirstDescription);
    }
    static async antioxidantsProductFirstDescriptionIsScroll(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.antioxidantsProductFirstDescription);
    }
    //Course Second Description
    static async antioxidantsProductSecondDescriptionIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.antioxidantsProductSecondDescription);
    }
    static async antioxidantsProductSecondDescriptionIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.antioxidantsProductSecondDescription);
    }
    static async antioxidantsProductSecondDescriptionIsHover(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.antioxidantsProductSecondDescription);
    }
    static async antioxidantsProductSecondDescriptionIsScroll(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.antioxidantsProductSecondDescription);
    }
    //Learn More Button
    static async learnMoreBtnIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.learnMoreBtn);
    }
    static async learnMoreBtnIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.learnMoreBtn);
    }
    static async learnMoreBtnIsHover(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.learnMoreBtn);
    }
    static async learnMoreBtnIsScroll(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.learnMoreBtn);
    }

    //Redirect on Course Details Page
    static async redirectCDPPageIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.redirectCDPPage);
    }
    static async loadMoreBtnCLPScrollDown(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.loadMoreBtnCLP);
        await ElementHelper.scrollByAmount(page, 100, 100);
    }
    //Scroll down upto 10 out of 10
    static async scrollDownUpTo10OtOf10(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.productscountAfterClickLoadMoreCLP);
        await ElementHelper.scrollByAmount(page, 100, 100);
    }
    static async loadMoreBtnCLPIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.loadMoreBtnCLP);
    }
    static async loadMoreBtnCLPIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.loadMoreBtnCLP);
    }
    static async productscountBeforeClickLoadMoreCLPIsClickable(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.productscountBeforeClickLoadMoreCLP);
    }
    static async productscountAfterClickLoadMoreCLPIsClickable(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.productscountAfterClickLoadMoreCLP);
    }

    //Lefet menu of all course categories - CLP

    static async leftMenuCourseTitleMainIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.leftMenuCourseTitleMain);
    }
    //All Course
    static async allCoursesButtonIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.allCoursesButton);
    }
    static async allCoursesButtonIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.allCoursesButton);
    }
    static async titleOfAllCoursesIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfAllCourses);
    }

    //Education Membership
    static async educationMembershipsButtonIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.educationMembershipsButton);
    }
    static async educationMembershipsButtonIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.educationMembershipsButton);
    }
    static async titleOfEducationMembershipsIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfEducationMemberships);
    }
    //Fundamental courses
    static async fundamentalCoursesButtonIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.fundamentalCoursesButton);
    }
    static async fundamentalCoursesButtonIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.fundamentalCoursesButton);
    }
    static async titleOfFundamentalCoursesIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfFundamentalCourses);
    }
    //Certification courses
    static async certificationCoursesIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourses);
    }
    static async certificationCoursesIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.certificationCourses);
    }
    static async titleOfCertificationCoursesIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfCertificationCourses);
    }
    //Acne
    static async acneIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acne);
    }
    static async acneIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.acne);
    }
    static async titleOfAcneIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfAcne);
    }
    //Aging
    static async agingIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.aging);
    }
    static async agingIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.aging);
    }
    static async titleOfAgingIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfAging);
    }
    //Hyper Pigmentation
    static async hyperPigmentationIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.hyperPigmentation);
    }
    static async hyperPigmentationIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.hyperPigmentation);
    }
    static async titleOfHyperpigmentationIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfHyperpigmentation);
    }
    //Sensitive Skin
    static async sensitiveSkinIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.sensitiveSkin);
    }
    static async sensitiveSkinIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.sensitiveSkin);
    }
    static async titleOfSensitiveSkinIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfSensitiveSkin);
    }
    //Enhancing Your Services
    static async enhancingYourServicesIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingYourServices);
    }
    static async enhancingYourServicesIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.enhancingYourServices);
    }
    static async titleOfEnhancingYourServicesIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfEnhancingYourServices);
    }
    //Business Building
    static async businessBuildingIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.businessBuilding);
    }
    static async businessBuildingIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.businessBuilding);
    }
    static async titleOfBusinessBuildingIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfBusinessBuilding);
    }

    //Student Courses
    static async studentCoursesIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.studentCourses);
    }
    static async studentCoursesIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.studentCourses);
    }
    static async titleOfStudentCoursesIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfStudentCourses);
    }
    //National Seminars
    static async nationalSeminarsIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.nationalSeminars);
    }
    static async nationalSeminarsIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.nationalSeminars);
    }
    static async titleOfNationalSeminarsIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfNationalSeminars);
    }
    //A Physician Point Of View
    static async aPhysicianPointOfViewIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.aPhysicianPointOfView);
    }
    static async aPhysicianPointOfViewIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.aPhysicianPointOfView);
    }
    static async titleOfAPhysiciansPointofViewIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfAPhysiciansPointofView);
    }
    static async scrollDownUpToaPhysicianPointOfView(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.aPhysicianPointOfView);
    }
    static async scrollUpToTitleOfAPhysiciansPointofView(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.titleOfAPhysiciansPointofView);
    }
    //Multi Cultural Skin
    static async multiCulturalSkinIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.multiCulturalSkin);
    }
    static async multiCulturalSkinIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.multiCulturalSkin);
    }
    static async titleOfMulticulturalSkinIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfMulticulturalSkin);
    }
    static async scrollDownUpTomultiCulturalSkin(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.multiCulturalSkin);
    }
    static async scrollUpToTitleOfMulticulturalSkin(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.titleOfMulticulturalSkin);
    }
    //Peel Application Videos
    static async peelApplicationVideosIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.peelApplicationVideos);
    }
    static async peelApplicationVideosIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.peelApplicationVideos);
    }
    static async titleOfPeelApplicationVideosIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.titleOfPeelApplicationVideos);
    }
    static async scrollDownUpTopeelApplicationVideos(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.peelApplicationVideos);
    }
    static async scrollUpToTitleOfPeelApplicationVideos(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.titleOfPeelApplicationVideos);
    }
    //Academy header navigation
    static async academyViewAllIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.academyViewAll);
    }
    static async academyViewAllIsClickable(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.academyViewAll);
    }
    static async academyViewAllIsHover(page: any) {
        await ElementHelper.hoverOverMenu(page, CoursePLPLocators.academyViewAll);
    }
    static async scrollUpTofavouriteIcon(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.favouriteIcon);
    }

    static async verifyADeepDiveIntoProfessionalProductsIsPresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.clpDeepDiveIntoProfessionalProductName);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.clpDeepDiveIntoProfessionalProductName);
    }
    static async verifyAddToFavoriteBtnADeepDiveIntoProfessionalProductsIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.clpDeepDiveIntoProfessionalProductAddToFavorite);
    }
    static async clickAddToFavoriteBtnADeepDiveIntoProfessionalProducts(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.clpDeepDiveIntoProfessionalProductAddToFavorite);
    }
    static async clickCourseTabSection(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.clpCourseTab);
    }
    static async clickProductTabSection(page: any) {
        await ElementHelper.waitForElementClickable(page, CoursePLPLocators.clpProductTab);
    }
    static async verifyRemoveFromFavoriteBtnDeepDiveIntoProfessionalProductsIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.clpDeepDiveIntoProfessionalProductRemoveFromFavorite);
    }
    static async clickRemoveFromFavoriteBtnDeepDiveIntoProfessionalProducts(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.clpDeepDiveIntoProfessionalProductRemoveFromFavorite);
    }
    static async verifyDeepDiveIntoProfessionalProductsIsNotPresentInsideCourse(page: any) {
        await ElementHelper.isElementPresent(page, CoursePLPLocators.clpDeepDiveIntoProfessionalProductName);
    }
    static async waitDeepDiveIntoProfessionalProductsToGetDisappear(page: any) {
        await ElementHelper.waitForElementToDisappear(page, CoursePLPLocators.clpDeepDiveIntoProfessionalProductRemoveFromFavorite);
    }
    static async verifyCourseHeadingTopLeftCorner(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.cachesoursesHeading);
    }
    static async captureCourseHeadingTopLeftCornerText(page: any) {
        await ElementHelper.getTextFromElement(page, CoursePLPLocators.cachesoursesHeading);
    }
    static async fundamentalCourseButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.fundamentalCoursesButton);
    }
    static async certificationCourseButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourses);
    }
    static async enhancingYourServicesButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingYourServices);
    }
    static async businessBuildingButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.businessBuilding);
    }
    static async studentCourseButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.studentCourses);
    }
    static async verifynationalSeminarButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.nationalSeminars);
    }
    static async verifyaPhysicianPointofViewButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.aPhysicianPointOfView);
    }
    static async verifymulticulturalSkinButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.multiCulturalSkin);
    }
    static async verifypeelApplicationVideoButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.peelApplicationVideos);
    }
    static async peelApplicationVideoButtonGetText(page: any) {
        await ElementHelper.getElementText(page, CoursePLPLocators.peelApplicationVideos);
    }


    static async clickAllCoursesButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.allCoursesButton);
    }
    static async clickCertificationCourse(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.certificationCourses);
    }
    static async clickAcneCourse(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.acne);
    }
    static async clickAgingCourse(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.aging);
    }
    static async clickHyperpigmentationCourse(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.hyperPigmentation);
    }
    static async clickSensitiveSkinCourse(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.sensitiveSkin);
    }
    static async clickEnhancingyourServicesCourse(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.enhancingYourServices);
    }
    static async clickBusinessBuildingcourse(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.businessBuilding);
    }
    static async clickStudentCourses(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.studentCourses);
    }
    static async clickNationlSeminarCourses(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.nationalSeminars);
    }
    static async clickNMulticultureSkinCourses(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.multiCulturalSkin);
    }
    static async clickPeelApplicationVideosCourses(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.peelApplicationVideos);
    }
    static async verifyEducationMembershipsHeadingSelectedVisible(page: any) {
        await page.waitForSelector(CoursePLPLocators.educationMembershipSelected);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.educationMembershipSelected);
    }
    static async verifyFundamentalCourseSelectedHeadingVisible(page: any) {
        await page.waitForSelector(CoursePLPLocators.fundamentalCourseSelected);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.fundamentalCourseSelected);
    }
    static async verifyCertificationCourseSelectedHeadingVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourseSelected);
    }
    static async verifyAcneSelectedHeadingVisible(page: any) {
        await page.waitForSelector(CoursePLPLocators.acneSelected);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acneSelected);
    }
    static async verifyAgingSelectedHeadingVisible(page: any) {
        await page.waitForSelector(CoursePLPLocators.agingSelected);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.agingSelected);
    }
    static async verifyHyperpigmentationSelectedHeadingVisible(page: any) {
        await page.waitForSelector(CoursePLPLocators.hyperpigmentationSelected);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.hyperpigmentationSelected);
    }
    static async verifySensitiveSkinSelectedHeadingVisible(page: any) {
        await page.waitForSelector(CoursePLPLocators.sensitiveSkinSelected);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.sensitiveSkinSelected);
    }
    static async verifyEnhanchingYourServicesHeadingVisible(page: any) {
        await page.waitForSelector(CoursePLPLocators.enhanchingYourService);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhanchingYourService);
    }
    static async verifyBuildingBusinessSelectedHeadingVisible(page: any) {
        await page.waitForSelector(CoursePLPLocators.buildingBusinessSelected);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.buildingBusinessSelected);
    }
    static async verifyStudentCoursesSelectedHeadingVisible(page: any) {
        await page.waitForSelector(CoursePLPLocators.studentCoursesSelected);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.studentCoursesSelected);
    }
    static async verifyNationalSeminarsSelectedHeadingVisible(page: any) {
        await page.waitForSelector(CoursePLPLocators.nationalSeminarsSelected);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.nationalSeminarsSelected);
    }
    static async verifyMulticulturalSkinSelectedHeadingVisible(page: any) {
        await page.waitForSelector(CoursePLPLocators.multiculturalSkinSelected);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.multiculturalSkinSelected);
    }
    static async verifyPeelApplicationVideosSelectedHeadingVisible(page: any) {
        await page.waitForSelector(CoursePLPLocators.peelApplicationVideosSelected);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.peelApplicationVideosSelected);
    }

    static async verifyAllCourseTotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.allCourseSelectedTotalNumber)
    }
    static async verifyEducationMembershipTotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.educationMembershipSelectedTotalNumber);
    }

    static async verifyFundamentalCourseTotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.fundamentalCourseSelectedTotalNumber);
    }

    static async verifyCertificationCourseTotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourseSelectedTotalNumber);
    }

    static async verifyAcneTotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acneSelectedTotalNumber);
    }

    static async verifyAgingTotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.agingSelectedTotalNumber);
    }

    static async verifyHyperpigmentationTotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.hyperpigmentationSelectedTotalNumber);
    }

    static async verifySensitiveSkinTotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.sensitiveSkinSelectedTotalNumber);
    }

    static async verifyEnhancingYourServiceTotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhanchingYourServiceTotalNumber);
    }

    static async verifyBusinessBuildingTotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.buildingBusinessSelectedTotalNumber);
    }

    static async verifyStudentCourseTotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.studentCoursesSelectedTotalNumber);
    }

    static async verifyNationalSeminarsTotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.nationalSeminarsSelectedTotalNumber);
    }

    static async verifyMulticulturalSkinTotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.multiculturalSkinSelectedTotalNumber);
    }
    static async verifyPeelApplicationVideosotalNumber(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.peelApplicationVideosSelectedTotalNumber);
    }


    //course_category_tile_details
    static async verifyCourseAcneMembershipPresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.educationMemberShipCourseAcneMembership);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.educationMemberShipCourseAcneMembership);
    }
    static async verifyCourseAcneMembershipImagePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.educationMemberproductImageAcne);
    }
    static async clickCourseAcneMembershipImage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.educationMemberproductImageAcne);
    }
    static async verifyCourseAcneMembershipDetailsPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.educationMembershipCourseDeatailPage);
        await page.waitForTimeout(2000);
        await page.goBack();
    }
    static async verifyCourseAcneMembershipNamePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.educationMemberproductNameAcne);
    }
    static async clickCourseAcneMembershipName(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.educationMemberproductNameAcne);
    }
    static async verifyCourseAcneMembershipRatingPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.educationMemberproductRatingAcne);
    }
    static async clickCourseAcneMembershipRating(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.educationMemberproductRatingAcne);
    }
    static async verifyCourseAcneMembershipDescriptionPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.educationMemberproductDescriptionAcne);
    }
    static async clickCourseAcneMembershipDescription(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.educationMemberproductDescriptionAcne);
    }
    static async verifyCourseAcneMembershipLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.educationMemberproductLearnMoreBtnAcne);
    }
    static async clickCourseAcneMembershipLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.educationMemberproductLearnMoreBtnAcne);
    }
    static async verifyCourseAcneMembershipFavoriteBtnPresnt(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.educationMemberproductFavoriteBtnAcne);
    }
    static async clickCourseAcneMembershipFavoriteBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.educationMemberproductFavoriteBtnAcne);
        await page.waitForTimeout(3000);
    }



    static async verifyCourseAntioxidantsPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.fundamentalCourseAntioxidants);
    }
    static async verifyCourseAntioxidantsshipImagePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.fundamentalCourseproductImageAntioxidants);
    }
    static async clickCourseAntioxidantsshipImage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.fundamentalCourseproductImageAntioxidants);
    }

    static async verifyCourseAntioxidantsNamePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.fundamentalCourseproductNameAntioxidants);
    }
    static async clickCourseAntioxidantsName(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.fundamentalCourseproductNameAntioxidants);
    }
    static async verifyCourseAntioxidantsRatingPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.fundamentalCourseproductRatingAntioxidants);
    }
    static async clickCourseAntioxidantsRating(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.fundamentalCourseproductRatingAntioxidants);
    }
    static async verifyCourseAntioxidantsDescriptionPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.fundamentalCourseproductDescriptionAntioxidants);
    }
    static async clickCourseAntioxidantsDescription(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.fundamentalCourseproductDescriptionAntioxidants);
    }
    static async verifyCourseAntioxidantsLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.fundamentalCourseproductLearnMoreBtnAntioxidants);
    }
    static async clickCourseAntioxidantsLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.fundamentalCourseproductLearnMoreBtnAntioxidants);
    }
    static async verifyCourseAntioxidantsFavoriteBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.fundamentalCourseproductFavoriteBtnAntioxidants);
    }
    static async clickCourseAntioxidantsFavoriteBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.fundamentalCourseproductFavoriteBtnAntioxidants);
    }
    static async verifyCourseAntioxidantsDetailsPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.fundamentalCourseDetailsPage);
        await page.waitForTimeout(4000);
        await page.goBack();
    }



    static async verifyCourseProfessionalPeel(page: any) {
        await page.waitForSelector(CoursePLPLocators.certificationCourseProfessionalPeel);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourseProfessionalPeel);
    }
    static async verifyCourseProfessionalPeelImagePresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.certificationCourseproductImageProfessionalPeel);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourseproductImageProfessionalPeel);
    }
    static async clickCourseProfessionalPeelImage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.certificationCourseproductImageProfessionalPeel);
    }
    static async verifyCourseProfessionalPeelNamePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourseproductNameProfessionalPeel);
    }
    static async clickCourseProfessionalPeelName(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.certificationCourseproductNameProfessionalPeel);
    }
    static async verifyCourseProfessionalPeelsRatingPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourseproductRatingProfessionalPeel);
    }
    static async clickCourseProfessionalPeelsRating(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.certificationCourseproductRatingProfessionalPeel);
    }
    static async verifyCourseProfessionalPeelDescriptionPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourseproductDescriptionProfessionalPeel);
    }
    static async clickCourseProfessionalPeelDescription(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.certificationCourseproductDescriptionProfessionalPeel);
    }
    static async verifyCourseProfessionalPeelLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourseproductLearMoreBtnProfessionalPeel);
    }
    static async clickCourseProfessionalPeelLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.certificationCourseproductLearMoreBtnProfessionalPeel);
    }
    static async verifyCourseProfessionalPeelDetailsPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourseDetailPage);
        await page.waitForTimeout(4000);
        await page.goBack();
    }
    static async verifyCourseProfessionalPeelFavoriteBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourseproductFavoriteBtnProfessionalPeel);
    }
    static async clickCourseProfessionalPeelFavorite(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.certificationCourseproductFavoriteBtnProfessionalPeel);
    }




    static async verifyCourseAcneScarring(page: any) {
        await page.waitForSelector(CoursePLPLocators.acneCourseAcneScarring);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acneCourseAcneScarring);
    }
    static async verifyCourseAcneScarringImagePresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.acneCourseImageAcneCourse);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acneCourseImageAcneCourse);
    }
    static async clickCourseAcneScarringImage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.acneCourseImageAcneCourse);
    }
    static async verifyCourseAcneScarringPeelNamePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acnepCourseNameAcneCourse);
    }
    static async clickCourseAcneScarringPeelName(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.acnepCourseNameAcneCourse);
    }
    static async verifyCourseAcneScarringRatingPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acnepCourseRatingAcneCourse);
    }
    static async clickCourseAcneScarringRating(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.acnepCourseRatingAcneCourse);
    }
    static async verifyCourseAcneScarringDescriptionPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acneCourseDescriptionAcneCourse);
    }
    static async clickCourseAcneScarringDescription(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.acneCourseDescriptionAcneCourse);
    }
    static async verifyCourseAcneScarringLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acneCourseLearnMoreAcneCourse);
    }
    static async clickCourseAcneScarringLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.acneCourseLearnMoreAcneCourse);
    }
    static async verifyCourseAcneScarringDetailsPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acneCourseDetailsPage);
        await page.waitForTimeout(4000);
        await page.goBack();
    }
    static async verifyCourseAcneScarringFavoriteBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.acneCourseFavouriteAcneCourse);
    }
    static async clickCourseAcneScarringFavoriteBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.acneCourseFavouriteAcneCourse);
    }



    static async verifyCourseTreatingAgingPresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.agingproductTreatingAgingSkin);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.agingproductTreatingAgingSkin);
    }
    static async verifyCourseTreatingAgingSkinImagePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.agingproductImageTreatingAgingSkin);
    }
    static async clickCourseTreatingAgingSkinImage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.agingproductImageTreatingAgingSkin);
    }
    static async verifyCourseTreatingAgingSkinNamePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.agingproductNameTreatingAgingSkin);
    }
    static async clickCourseTreatingAgingSkinName(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.agingproductNameTreatingAgingSkin);
    }
    static async verifyCourseTreatingAgingSkinRatingPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.agingproductRatingTreatingAgingSkin);
    }
    static async clickCourseTreatingAgingSkinRating(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.agingproductRatingTreatingAgingSkin);
    }
    static async verifyCourseTreatingAgingSkinDescriptionPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.agingproductDescriptionTreatingAgingSkin);
    }
    static async clickCourseTreatingAgingSkinDescription(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.agingproductDescriptionTreatingAgingSkin);
    }
    static async verifyCourseTreatingAgingSkinLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.agingproductLearnMoreTreatingAgingSkin);
    }
    static async clickCourseTreatingAgingSkinLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.agingproductLearnMoreTreatingAgingSkin);
    }
    static async verifyCourseTreatingAgingSkinDetailsPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.agingCourseDetailPage);
        await page.waitForTimeout(4000);
        await page.goBack();
    }
    static async verifyCourseTreatingAgingSkinFavoriteBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.agingproductFavouriteTreatingAgingSkin);
    }
    static async ClickCourseTreatingAgingSkinFavoriteBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.agingproductFavouriteTreatingAgingSkin);
    }



    static async verifyCourseLookAtMelasmaPresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.hyperpigmentationpCourseLooktMelasma);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.hyperpigmentationpCourseLooktMelasma);
    }
    static async verifyCourseLookAtMelasmaImagePresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.hyperpigmentationproductImageLooktMelasma);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.hyperpigmentationproductImageLooktMelasma);
    }
    static async clickCourseLookAtMelasmaImage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.hyperpigmentationproductImageLooktMelasma);
    }
    static async verifyCourseLookAtMelasmaNamePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.hyperpigmentationproductNameLooktMelasma);
    }
    static async clickCourseLookAtMelasmaName(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.hyperpigmentationproductNameLooktMelasma);
    }
    static async verifyCourseLookAtMelasmaRatingPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.hyperpigmentationproductRatingLooktMelasma);
    }
    static async clickCourseLookAtMelasmaRating(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.hyperpigmentationproductRatingLooktMelasma);
    }
    static async verifyCourseLookAtMelasmaDescriptionPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.hyperpigmentationproductDescriptionLooktMelasma);
    }
    static async clickCourseLookAtMelasmaDescription(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.hyperpigmentationproductDescriptionLooktMelasma);
    }
    static async verifyCourseLookAtMelasmaLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.hyperpigmentationproductLearnMoreLooktMelasma);
    }
    static async clickCourseLookAtMelasmaLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.hyperpigmentationproductLearnMoreLooktMelasma);
    }
    static async verifyCourseLookAtMelasmaDetailsPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.hyperpigmentationpCourseDetailsPage);
        await page.waitForTimeout(4000);
        await page.goBack();
    }
    static async verifyCourseLookAtMelasmaFavoriteBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.hyperpigmentationgproductFavouriteLooktMelasma);
    }
    static async clickCourseLookAtMelasmaFavoriteBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.hyperpigmentationgproductFavouriteLooktMelasma);
    }



    static async verifyCourseUnderstandingofRosaceaPresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.sensitiveSkinCourseUnderstandingofRosacea);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.sensitiveSkinCourseUnderstandingofRosacea);
    }
    static async verifyCourseUnderstandingofRosaceaImagePresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.sensitiveSkingproductImageUnderstandingofRosacea);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.sensitiveSkingproductImageUnderstandingofRosacea);
    }
    static async clickCourseUnderstandingofRosaceaImage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.sensitiveSkingproductImageUnderstandingofRosacea);
    }
    static async verifyCourseUnderstandingofRosaceaNamePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.sensitiveSkingproductNameUnderstandingofRosacea);
    }
    static async clickCourseUnderstandingofRosaceaName(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.sensitiveSkingproductNameUnderstandingofRosacea);
    }
    static async verifyCourseUnderstandingofRosaceaRatingPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.sensitiveSkinproductRatingUnderstandingofRosacea);
    }
    static async clickCourseUnderstandingofRosaceaRating(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.sensitiveSkinproductRatingUnderstandingofRosacea);
    }
    static async verifyCourseUnderstandingofRosaceaDescriptionPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.sensitiveSkinproductDescriptionUnderstandingofRosacea);
    }
    static async clickCourseUnderstandingofRosaceaDescription(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.sensitiveSkinproductDescriptionUnderstandingofRosacea);
    }
    static async verifyCourseUnderstandingofRosaceaLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.sensitiveSkinproductLearnMoreUnderstandingofRosacea);
    }
    static async clickCourseUnderstandingofRosaceaLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.sensitiveSkinproductLearnMoreUnderstandingofRosacea);
    }
    static async verifyCourseUnderstandingofRosaceaDetailsPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.sensitiveSkinCourseDetailPag);
        await page.waitForTimeout(4000);
        await page.goBack();
    }
    static async verifyCourseUnderstandingofRosaceaFavoriteBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.sensitiveSkinproductFavouriteUnderstandingofRosacea);
    }
    static async clickCourseUnderstandingofRosaceaFavoriteBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.sensitiveSkinproductFavouriteUnderstandingofRosacea);
    }




    static async verifyCourseBodyTreatmentsPresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.enhancingServiveCourseBodyTreatments);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingServiveCourseBodyTreatments);
    }
    static async verifyCourseBodyTreatmentsImagePresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.enhancingServicegproductImageBodyTreatments);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingServicegproductImageBodyTreatments);
    }
    static async clickCourseBodyTreatmentsImage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.enhancingServicegproductImageBodyTreatments);
    }
    static async verifyCourseBodyTreatmentsNamePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingServiceproductNameBodyTreatments);
    }
    static async clickCourseBodyTreatmentsName(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.enhancingServiceproductNameBodyTreatments);
    }
    static async verifyCourseBodyTreatmentsRatingPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingServiceproductRatingBodyTreatments);
    }
    static async clickCourseBodyTreatmentsRating(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.enhancingServiceproductRatingBodyTreatments);
    }
    static async verifyCourseBodyTreatmentsDescriptionPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingServiceproductDescriptionBodyTreatments);
    }
    static async clickCourseBodyTreatmentsDescription(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.enhancingServiceproductDescriptionBodyTreatments);
    }
    static async verifyCourseBodyTreatmentsLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingServiceproductLearnMoreBodyTreatments);
    }
    static async clickCourseBodyTreatmentsLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.enhancingServiceproductLearnMoreBodyTreatments);
    }
    static async verifyCourseBodyTreatmentsDetailsPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingServiceCourseDetailsPage);
        await page.waitForTimeout(5000);
        await page.goBack();
    }
    static async verifyCourseBodyTreatmentsFavoriteBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.enhancingServiceproductFavouriteBodyTreatments);
    }
    static async clickCourseBodyTreatmentsFavoriteBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.enhancingServiceproductFavouriteBodyTreatments);
    }


    static async verifyCourseEnhancedMerchandisingPresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.businessBuildingpMerchandising);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.businessBuildingpMerchandising);
    }
    static async verifyCourseEnhancedMerchandisingImagePresent(page: any) {
        await ElementHelper.scrollToElement(page, CoursePLPLocators.businessBuildingpMerchandising);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.businessBuildingproductImageMerchandising);
    }
    static async clickCourseEnhancedMerchandisingImage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.businessBuildingproductImageMerchandising);
    }
    static async verifyCourseEnhancedMerchandisingNamePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.businessBuildingproductNameMerchandising);
    }
    static async clickCourseEnhancedMerchandisingName(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.businessBuildingproductNameMerchandising);
    }
    static async verifyCourseEnhancedMerchandisingRatingPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.businessBuildingproductRatingMerchandising);
    }
    static async clickCourseEnhancedMerchandisingRating(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.businessBuildingproductRatingMerchandising);
    }
    static async verifyCourseEnhancedMerchandisingDescriptionPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.businessBuildingproductDescriptionMerchandising);
    }
    static async clickCourseEnhancedMerchandisingDescription(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.businessBuildingproductDescriptionMerchandising);
    }
    static async verifyCourseEnhancedMerchandisingLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.businessBuildingproductLearnMoreMerchandising);
    }
    static async clickCourseEnhancedMerchandisingLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.businessBuildingproductLearnMoreMerchandising);
    }
    static async verifyCourseEnhancedMerchandisingDetailsPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.businessBuildingMerchandisingDetailsPage);
        await page.waitForTimeout(4000);
        await page.goBack();
    }
    static async verifyCourseEnhancedMerchandisingFavoriteBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.businessBuildingproductFavouriteMerchandising);
    }
    static async clickCourseEnhancedMerchandisingFavoriteBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.businessBuildingproductFavouriteMerchandising);
    }




    static async verifyCourseStudentCurriculamPresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.studentCourseStudentCurriculum);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.studentCourseStudentCurriculum);
    }
    static async verifyCourseStudentCurriculamImagePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.studentCourseproductImageStudentCurriculum);
    }
    static async clickCourseStudentCurriculamImage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.studentCourseproductImageStudentCurriculum);
    }
    static async verifyCourseStudentCurriculamNamePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.studentCourseproductNameStudentCurriculum);
    }
    static async clickCourseStudentCurriculamName(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.studentCourseproductNameStudentCurriculum);
    }
    static async verifyCourseStudentCurriculamRatingPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.studentCourseroductRatingStudentCurriculum);
    }
    static async clickCourseStudentCurriculamRating(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.studentCourseroductRatingStudentCurriculum);
    }
    static async verifyCourseStudentCurriculamDescriptionPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.studentCourseproductDescriptionStudentCurriculum);
    }
    static async clickCourseStudentCurriculamDescription(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.studentCourseproductDescriptionStudentCurriculum);
    }
    static async verifyCourseStudentCurriculamLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.studentCourseproductLearnMoreStudentCurriculum);
    }
    static async clickCourseStudentCurriculamLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.studentCourseproductLearnMoreStudentCurriculum);
    }
    static async verifyCourseStudentCurriculamDetailaPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.studentCourseStudentCurriculumDetailsPage);
        await page.waitForTimeout(4000);
        await page.goBack();
    }

    static async verifyCourseStudentCurriculamFavoriteBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.studentCourseproductFavouriteStudentCurriculum);
    }
    static async clickCourseStudentCurriculamFavoriteBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.studentCourseproductFavouriteStudentCurriculum);
    }



    static async verifyCoursePeelingCharlottePresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.nationalSeminarCoursePeelingCharlotte);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.nationalSeminarCoursePeelingCharlotte);
    }
    static async verifyCoursePeelingCharlotteImagePresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.nationalSeminarproductImagePeelingCharlotte);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.nationalSeminarproductImagePeelingCharlotte);
    }
    static async clickCoursePeelingCharlotteImage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.nationalSeminarproductImagePeelingCharlotte);
    }
    static async verifyCoursePeelingCharlotteNamePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.nationalSeminarproductNamePeelingCharlotte);
    }
    static async clickCoursePeelingCharlotteName(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.nationalSeminarproductNamePeelingCharlotte);
    }
    static async verifyCoursePeelingCharlotteRatingPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.nationalSeminarproductRatingPeelingCharlotte);
    }
    static async clickCoursePeelingCharlotteRating(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.nationalSeminarproductRatingPeelingCharlotte);
    }
    static async verifyCoursePeelingCharlotteDescriptionPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.nationalSeminarproductDescriptionPeelingCharlotte);
    }
    static async clickCoursePeelingCharlotteDescription(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.nationalSeminarproductDescriptionPeelingCharlotte);
    }
    static async verifyCoursePeelingCharlotteLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.nationalSeminarproductLearnMorePeelingCharlotte);
    }
    static async clickCoursePeelingCharlotteLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.nationalSeminarproductLearnMorePeelingCharlotte);
    }
    static async verifyCoursePeelingCharlotteDetailsPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.nationalSeminarCourseDetailsPage);
        await page.waitForTimeout(5000);
        await page.goBack();
    }
    static async verifyCoursePeelingCharlotteFavoriteBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.nationalSeminarproductFavouritePeelingCharlotte);
    }
    static async clickCoursePeelingCharlotteFavoriteBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.nationalSeminarproductFavouritePeelingCharlotte);
    }




    static async verifyCourseSkinOfColorPresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.multiculturalSkinCourseSkinOfColor);
        await ElementHelper.scrollToElement(page, CoursePLPLocators.multiculturalSkinCourseSkinOfColor);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.multiculturalSkinCourseSkinOfColor);
    }
    static async verifyCourseSkinOfColorImagePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.multiculturalSkinproductImageSkinOfColor);
    }
    static async clickCourseSkinOfColorImage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.multiculturalSkinproductImageSkinOfColor);
    }
    static async verifyCourseSkinOfColorNamePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.multiculturalSkinproductNameSkinOfColor);
    }
    static async clickCourseSkinOfColorName(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.multiculturalSkinproductNameSkinOfColor);
    }
    static async verifyCourseSkinOfColorRatingPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.multiculturalSkinproductRatingSkinOfColor);
    }
    static async clickCourseSkinOfColorRating(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.multiculturalSkinproductRatingSkinOfColor);
    }
    static async verifyCourseSkinOfColorDescriptionPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.multiculturalSkinproductDescriptionSkinOfColor);
    }
    static async clickCourseSkinOfColorDescription(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.multiculturalSkinproductDescriptionSkinOfColor);
    }
    static async verifyCourseSkinOfColorLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.multiculturalSkinproductLearnMoreSkinOfColor);
    }
    static async clickCourseSkinOfColorLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.multiculturalSkinproductLearnMoreSkinOfColor);
    }
    static async verifyCourseSkinOfColorDetailPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.multiculturalSkinCourseDetailsPage);
        await page.waitForTimeout(4000);
        await page.goBack();
    }
    static async verifyCourseSkinOfColorFavoriteBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.multiculturalSkinproductFavouriteSkinOfColor);
    }
    static async clickCourseSkinOfColorFavoriteBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.multiculturalSkinproductFavouriteSkinOfColor);
    }



    static async verifyCourseMDPeelPresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.peelApplicationCourseMDPeel);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.peelApplicationCourseMDPeel);
    }
    static async verifyCourseMDPeelImagePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.peelApplicationCourseImageMDPeel);
    }
    static async clickCourseMDPeelImage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.peelApplicationCourseImageMDPeel);
    }
    static async verifyCourseMDPeelNamePresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.peelApplicationCourseNameMDPeel);
    }
    static async clickCourseMDPeelName(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.peelApplicationCourseNameMDPeel);
    }
    static async verifyCourseMDPeelRatingPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.peelApplicationCourseRatingMDPeel);
    }
    static async clickCourseMDPeelRating(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.peelApplicationCourseRatingMDPeel);
    }
    static async verifyCourseMDPeelDescriptionPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.peelApplicationCourseDescriptionMDPeel);
    }
    static async clickCourseMDPeelDescription(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.peelApplicationCourseDescriptionMDPeel);
    }
    static async verifyCourseMDPeelLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.peelApplicationCourseLearnMoreMDPeel);
    }
    static async clickCourseMDPeelLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.peelApplicationCourseLearnMoreMDPeel);
    }
    static async verifyCourseMDPeelDetailPage(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.peelApplicationCourseDetailsPage);
        await page.waitForTimeout(5000);
        await page.goBack();
    }
    static async verifyCourseMDPeelFavoriteBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.peelApplicationCourseFavouriteMDPeel);
    }
    static async clickCourseMDPeelFavoriteBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.peelApplicationCourseFavouriteMDPeel);
    }



    //26_december_course_tile_toast_message_is_Common
    static async verifyAddedToFavToast(page: any) {
        await ElementHelper.isElementDisplayed(page, CoursePLPLocators.toastMessageAddedToFav);

    }
    static async verifyRemovedFromFavToast(page: any) {
        await ElementHelper.isElementDisplayed(page, CoursePLPLocators.toastMessageRemoveFromFav);
        await page.waitForTimeout(2000);
    }


    static async verifyCourseDeepDownIntoProfessionalProductPresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.aDeepDownIntoProfessionalProducts);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.aDeepDownIntoProfessionalProducts);
    }
    static async verifyCourseDeepDownIntoProfessionalProductLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.aDeepDownIntoProfessionalProductsLearnMoreBtn);
    }
    static async clickCourseDeepDownIntoProfessionalProductLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.aDeepDownIntoProfessionalProductsLearnMoreBtn);
    }

    static async verifyCourseInPersonFundamentalPeelPresent(page: any) {
        await page.waitForSelector(CoursePLPLocators.certificationCoureInPersonFundamentalPeelCertification);
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCoureInPersonFundamentalPeelCertification);
    }
    static async verifyCourseInPersonFundamentalPeelLearnMoreBtnPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, CoursePLPLocators.certificationCourseInPersonFundamentalPeelCertificationlLearMoreBt);
    }
    static async clickCourseInPersonFundamentalPeelLearnMoreBtn(page: any) {
        await ElementHelper.clickElement(page, CoursePLPLocators.certificationCourseInPersonFundamentalPeelCertificationlLearMoreBt);
    }


}

