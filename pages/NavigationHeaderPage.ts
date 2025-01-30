import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { NavigationHeaderLocators } from "../locators/NavigationHeaderLocators";
import headerNavigationtestData from "../testdata/pcaSkinCare.testdata.json";
import { CommonHelper } from "../utils/commonHelper";
import { test, expect, Page } from '@playwright/test';
import pcaskincare from "../testdata/pcaSkinCare.testdata.json";
import { HomeLocators } from "../locators/HomeLocators";
import { HomePage } from "./HomePage";

export class NavigationHeaderPageActions {
    static async visibilityPCASkinLogo(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.pcaSkinLogo);
    }

    static async clickOnPCASkinLogo(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.pcaSkinLogo);
    }

    static async visibilityShopMenuList(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.shopMenuList);
    }

    static async visibilityAcademyMenuList(page: any) {
        await page.waitForSelector(NavigationHeaderLocators.academyMenuList);
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.academyMenuList);
    }

    static async hoverOverAcademy(page: any) {
        await ElementHelper.hoverOverMenu(page, NavigationHeaderLocators.academyMenuList);
    }

    static async clickShopMenuList(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.shopMenuList);
    }

    static async hoverOverShop(page: any) {
        await ElementHelper.hoverOverMenu(page, NavigationHeaderLocators.shopMenuList);
    }

    static async visibilityDailyCareSubHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.dailyCareSubMenu)
    }

    static async clickDailyCareSubHeading(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.dailyCareSubMenu)
    }

    static async visibilityProfessionalTreatmentsSubHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.professionalTreatmentsSubMenu);
    }

    static async clickProfessionalTreatmentsSubHeading(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.professionalTreatmentsSubMenu);
    }

    static async visibilityBySkinTypeSubHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.bySkinTypeSubMenu);
    }

    static async clickBySkinTypeSubHeading(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.bySkinTypeSubMenu);
    }

    static async visibilityBySkinConcernSubHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.bySkinConcernSunMenu);
    }

    static async clickBySkinConcernSubHeading(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.bySkinConcernSunMenu);
    }

    static async visibilityBestSellerFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.bestSellerDailyCareFilterOption);
    }

    static async clickBestSellerFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.bestSellerDailyCareFilterOption);
    }

    static async visibilityAntioxidantsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.antioxidantsDailyCareFilterOption);
    }

    static async clickAntioxidantsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.antioxidantsDailyCareFilterOption);
    }

    static async visibilityBroadSpectrumSPFFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.broadSpectrumSPFDailyCareFilterOption);
    }

    static async clickBroadSpectrumSPFFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.broadSpectrumSPFDailyCareFilterOption);
    }

    static async visibilityCleansersAndTonersFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.cleansersAndTonersDailyCareFilterOption);
    }

    static async clickCleansersAndTonersFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.cleansersAndTonersDailyCareFilterOption);
    }

    static async visibilityEyeNeckLipFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.eyeNeckLipDailyCareFilterOption);
    }

    static async clickEyeNeckLipFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.eyeNeckLipDailyCareFilterOption);
    }

    static async visibilityMasksFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.masksDailyCareFilterOption);
    }

    static async clickMasksFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.masksDailyCareFilterOption);
    }

    static async visibilityMoisturizersFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.moisturizersDailyCareFilterOption);
    }

    static async clickMoisturizersFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.moisturizersDailyCareFilterOption);
    }

    static async visibilityRetinolsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.retinolsDailyCareFilterOption);
    }

    static async clickRetinolsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.retinolsDailyCareFilterOption);
    }

    static async visibilitySerumsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.serumsDailyCareFilterOption);
    }

    static async clickSerumsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.serumsDailyCareFilterOption);
    }

    static async visibilitySolutionSetsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.solutionSetsDailyCareFilterOption);
    }

    static async clickSolutionSetsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.solutionSetsDailyCareFilterOption);
    }

    static async visibilityViewAllDailyCareFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.viewAllDailyCare);
    }

    static async clickViewAllDailyCareFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.viewAllDailyCare);
    }

    static async visibilityBestSellerProfessionalTreatmentsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.bestSellerProfTreatmentsFilterOption);
    }

    static async clickBestSellerProfessionalTreatmentsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.bestSellerProfTreatmentsFilterOption);
    }

    static async visibilityPeelsProfessionalFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.peelsProfTreatmentsFilterOption);
    }

    static async clickPeelsProfessionalFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.peelsProfTreatmentsFilterOption);
    }

    static async visibilityPeelAlternativeFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.peelAlternativeProfTreatmentsFilterOption);
    }

    static async clickPeelAlternativeFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.peelAlternativeProfTreatmentsFilterOption);
    }

    static async visibilityRetinoidTreatmentsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.retinoidTreatmentsProfTreatmentsFilterOption);
    }

    static async clickRetinoidTreatmentsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.retinoidTreatmentsProfTreatmentsFilterOption);
    }

    static async visibilityTherapeuticMasksFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.therapeuticMasksProfTreatmentsFilterOption);
    }

    static async clickTherapeuticMasksFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.therapeuticMasksProfTreatmentsFilterOption);
    }

    static async visibilityTreatmentEnhancementsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.treatmentEnhancementsProfTreatmentsFilterOption);
    }

    static async clickTreatmentEnhancementsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.treatmentEnhancementsProfTreatmentsFilterOption);
    }

    static async visibilityBackbarToolsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.backbarToolsProfTreatmentsFilterOption);
    }

    static async clickBackbarToolsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.backbarToolsProfTreatmentsFilterOption);
    }

    static async visibilityViewAllPrfessionalTreatmentsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.viewAllProfTreatments);
    }

    static async clickViewAllPrfessionalTreatmentsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.viewAllProfTreatments);
    }

    static async visibilityCombinationBySkinTypeFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.combinationBySkinTypeFilterOption);
    }

    static async clickCombinationBySkinTypeFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.combinationBySkinTypeFilterOption);
    }

    static async visibilityDryBySkinTypeFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.dryBySkinTypeFilterOption);
    }

    static async clickDryBySkinTypeFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.dryBySkinTypeFilterOption);
    }

    static async visibilityNormalBySkinTypeFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.normalBySkinTypeFilterOption);
    }

    static async clickNormalBySkinTypeFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.normalBySkinTypeFilterOption);
    }

    static async visibilityOilyBySkinTypeFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.oilyBySkinTypeFilterOption);
    }

    static async clickOilyBySkinTypeFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.oilyBySkinTypeFilterOption);
    }

    static async visibilitySensitivityBySkinTypeFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.sensitiveBySkinTypeFilterOption);
    }

    static async clickSensitivityBySkinTypeFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.sensitiveBySkinTypeFilterOption);
    }

    static async visibilityViewAllBySkinTypeFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.viewAllBySkinType);
    }

    static async clickViewAllBySkinTypeFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.viewAllBySkinType);
    }

    static async visibilityBrighteningBySkinConcernFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.brighteningBySkinConcernFilterOption);
    }

    static async clickBrighteningBySkinConcernFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.brighteningBySkinConcernFilterOption);
    }

    static async visibilityAcneBySkinConcernFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.acneBySkinConcernFilterOption);
    }

    static async clickAcneBySkinConcernFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.acneBySkinConcernFilterOption);
    }

    static async visibilityAgingBySkinConcernFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.agingBySkinConcernFilterOption);
    }

    static async clickAgingBySkinConcernFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.agingBySkinConcernFilterOption);
    }

    static async visibilityDiscolorationBySkinConcernFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.discolorationBySkinConcernFilterOption);
    }

    static async clickDiscolorationBySkinConcernFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.discolorationBySkinConcernFilterOption);
    }

    static async visibilityPreventativeBySkinConcernFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.preventativeBySkinConcernFilterOption);
    }

    static async clickPreventativeBySkinConcernFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.preventativeBySkinConcernFilterOption);
    }

    static async visibilitySensitiveSkinBySkinConcernFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.sensitiveSkinBySkinConcernFilterOption);
    }

    static async clickSensitiveSkinBySkinConcernFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.sensitiveSkinBySkinConcernFilterOption);
    }

    static async visibilityViewAllBySkinConcernFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.agingBySkinConcernFilterOption);
    }

    static async clickViewAllBySkinConcernFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.agingBySkinConcernFilterOption);
    }

    static async clickOnNavigationSearchButton(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.navigationSearchBtn);
    }

    static async visibilityNavigationSearchButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.navigationSearchBtn);
    }
    static async hoverOnNavigationSearchButton(page: any) {
        await ElementHelper.hoverOverMenu(page, NavigationHeaderLocators.navigationSearchBtn);
    }

    static async visibilityNavigationUserIconButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.navigationUserIcon);
    }

    static async clickOnNavigationUserIconButton(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.navigationUserIcon);
    }

    static async hoverNavigationUserIconButton(page: any) {
        await ElementHelper.hoverOverMenu(page, NavigationHeaderLocators.navigationUserIcon);
    }

    static async visibilityNavigationCartIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.navigationCartIcon);
    }

    static async clickOnNavigationCartIconButton(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.navigationCartIcon);
    }

    static async hoverNavigationCartIcon(page: any) {
        await ElementHelper.hoverOverMenu(page, NavigationHeaderLocators.navigationCartIcon);
        await page.waitForTimeout(2000)
    }

    static async visibilityAfterLoginUserInfoText(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconInfoText);
    }

    static async verifyAfterLoginUserInfoText(page: any) {
        await VerificationHelpers.elementContainsText(page, NavigationHeaderLocators.userIconInfoText, headerNavigationtestData.UserIcon.heading);
    }

    static async visibilityAfterLoginOverviewOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconOverview);
    }

    static async clickOnOverViewOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginUserIconOverview);
    }

    static async visibilityAfterLoginOrdersOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconOrders);
    }

    static async clickOnOrdersOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginUserIconOrders);
    }

    static async visibilityAfterLoginInvoicesOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconInvoices);
    }

    static async clickOnInvoicesOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginUserIconInvoices);
    }

    static async visibilityAfterLoginSubscriptionsOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconSubscriptions);
    }

    static async clickOnSubscriptionsOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginUserIconSubscriptions);
    }

    static async visibilityAfterLoginEducationOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconEducation);
    }

    static async clickOnEducationOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginUserIconEducation);
    }

    static async visibilityAfterLoginPersonalProfileOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconPersonalProfile);
    }

    static async clickOnPersonalProfileOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginUserIconPersonalProfile);
    }

    static async visibilityAfterLoginLogoutOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUseIconLogOut);
    }

    static async clickOnLogoutOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginUseIconLogOut);
    }

    static async verifyAfterLoginCartInfoText(page: any) {
        await VerificationHelpers.elementContainsText(page, NavigationHeaderLocators.cartIconInfoText, headerNavigationtestData.CartIcon.heading);
    }

    static async visbilityAfterLoginCartInfotext(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.cartIconInfoText);
    }

    static async visbilityAfterLoginViewCartButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginCartIconViewCartBtn);
    }

    static async clickOnViewCartButton(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginCartIconViewCartBtn);
    }

    static async verifyAfterLoginEmptyCartViewText(page: any) {
        await VerificationHelpers.elementContainsText(page, NavigationHeaderLocators.afterLogincartIconCartEmptyView, headerNavigationtestData.EmptyCart.message);
    }

    static async visibilityAfterLoginEmptyCartViewText(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLogincartIconCartEmptyView);
    }

    static async visibilityCartIconStartShoppingButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginCartIconStartShoppingBtn);
    }

    static async clickOnCartStartShoppingButton(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginCartIconStartShoppingBtn);
    }
    static async visibilityCartSubTotalSection(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.subTotalSection);
    }

    static async visibilityOfSubHeadingCourseText(page: any) {
        await page.waitForSelector(NavigationHeaderLocators.course);
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.course);
    }

    static async clickOnSubHeadingCourseText(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.course);

    }

    static async clickOnFundamentalCoursesFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.fundamentalCourses);

    }
    static async visibilityFundamentalFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.fundamentalCourses);

    }

    static async clickOnCertificationCourseFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.certificationCourse);

    }

    static async visibilityOfCertificationCourseFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.certificationCourse);

    }

    static async clickOnAcneOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.acne);


    }

    static async visibilityAcingOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.aging);


    }

    static async clickOnHyperpigmentationFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.hyperPigmentation);


    }
    static async visibilityOfHyperPigmentationFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.hyperPigmentation);

    }

    static async clickOnSensitiveSkinFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.sensitiveSkin);


    }
    static async visibilitySensitiveSkinFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.sensitiveSkin);

    }

    static async clickOnBusinessBuildingFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.businessBuilding);


    }
    static async visibilityBusinessBuildingFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.businessBuilding);

    }

    static async clickOnPeelApplicationsVideoFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.peelApplicationVideos);


    }
    static async visibilityPeelApplicationVideoFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.peelApplicationVideos);

    }

    static async clickOnMulticulturalSkinFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.multiCulturalSkin);


    }
    static async visibilityOfMulticulturalSkinFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.multiCulturalSkin);

    }

    static async clickOnViewAllCourses(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.viewAllCourses);


    }
    static async visibilityViewAllCourses(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.viewAllCourses);

    }

    static async clickOnLearnSubHeading(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.learn);

    }

    static async visibilityLearnSubHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.learn);
    }

    static async visibilityOfSkinConcernsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.skinConcerns);

    }

    static async clickOnSkinConcernsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.skinConcerns);


    }
    static async visibilityOfSkinTypesFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.skinType);

    }

    static async clickOnSkinTypesFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.skinType);


    }
    static async visibilityOfSkinIntelligenceFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.skinIntelligence);

    }

    static async clickOnSkinIntelligenceFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.skinIntelligence);


    }
    static async visibilityOfProfessionalPeelsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.professionalPeels);

    }

    static async clickOnProfessionalPeelsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.professionalPeels);


    }
    static async visibilityOfMyOnlineCoursesFilterOption(page: any) {
        await VerificationHelpers.elementIsInViewport(page, NavigationHeaderLocators.myOnlineCourses);

    }

    static async clickOnMyOnlineCoursesFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.myOnlineCourses);


    }

    static async clickOnEducationMemberShipsSubHeading(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.educationMemberships);
    }

    static async visibilityOfEducationMembershipsSubHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.educationMemberships);
    }
    static async clickOnAllAccessMembershipFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.allAccessMembership);
    }
    static async visibilityAllAccessMembershipFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.allAccessMembership);
    }
    static async clickOnAcneMembershipFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.acneMembership);
    }
    static async visibilityOfAcneMembershipFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.acneMembership);
    }
    static async clickOnAgingMembershipFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.agingMembership);
    }
    static async visibilityAgingMembershipFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.agingMembership);
    }
    static async clickOnHyperPigmentationMembershipFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.hyperPigmentationMembership);
    }
    static async visibilityHyperPigmentationMembershipFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.hyperPigmentationMembership);
    }
    static async clickOnSensitiveSkinMembershipFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.sensitiveSkinMembership);
    }
    static async visibilitySensitiveSkinMembershipFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.sensitiveSkinMembership);
    }
    static async clickOnEnhancingYourServiceFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.enhancingYourServices);
    }
    static async visibilityEnhancingYourServiceFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.enhancingYourServices);
    }
    static async clickOnMultiCulturalSkinMembershipFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.multiCulturalSkinMembership);
    }
    static async visibilityMultiCulturalSkinMembershipFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.multiCulturalSkinMembership);
    }
    static async clickOverViewAllEducationMembershipFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.viewAllEducationMembership);
    }
    static async visibilityViewAllEducationMembershipFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.viewAllEducationMembership);
    }

    static async clickOnCalenderSubHeading(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.calendar)
    }

    static async visibiltyOfCalenderSubHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.calendar);

    }

    static async clickOnTreatmentTuesdaysFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.treatmentTuesdays);

    }

    static async visibilityTreatmentTuesdaysFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.treatmentTuesdays);

    }

    static async clickOnNationlSeminarsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.nationalSeminars);

    }
    static async visibilityNationalSeminarsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.nationalSeminars);
    }


    static async visibilityOfAboutSubHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.about);
    }

    static async clickOnOurStoryFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.ourStory);

    }

    static async visibilityOurStoryFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.ourStory);

    }

    static async clickOnCultureFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.culture);

    }

    static async visibilityCultureFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.culture);

    }

    static async clickOnOurPeelLegacyFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.ourPeelLegacy);

    }

    static async visibilityOurPeelLegacyFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.ourPeelLegacy);

    }

    static async visibiltyCustomerServiceSubHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.customerServiceText);
    }

    static async getTextFromCustomerServiceSubHeading(page: any) {
        await ElementHelper.getTextFromElement(page, NavigationHeaderLocators.customerServiceText);
    }

    static async clickOnFAQFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.faq);

    }

    static async visibilityFAQFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.faq);

    }

    static async clickOnReturnAndExchangeFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.returnAndExchange);

    }

    static async visibilityReturnAndExchangeFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.returnAndExchange);

    }

    static async clickOnShippingTermsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.shippingTerms);

    }

    static async visibilityShippingTermsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.shippingTerms);

    }

    static async clickOnContactUsFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.contactUs);

    }

    static async visibilityOfContactUsFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.contactUs);

    }

    static async clickOnSubscriptionFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.subscription);
    }

    static async visibilityOfSubscriptionFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.subscription);
    }

    static async visibilityOfMarketingMaterialsSubHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.marketingMaterials);
    }

    static async getTextOfMarketingMaterialSubHeading(page: any) {
        await ElementHelper.getTextFromElement(page, NavigationHeaderLocators.marketingMaterials);

    }

    static async clickOnContentHubFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.contentHub);

    }

    static async visibilityOfContentHubGilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.contentHub);

    }

    static async visibilityMicrositesSubHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.microSites);

    }

    static async getTextOfMicrositesSubHeading(page: any) {
        await ElementHelper.getTextFromElement(page, NavigationHeaderLocators.microSites);

    }

    static async clickOfPage1(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.page_1);
    }

    static async visibilityOfPage1(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.page_1);

    }

    static async clickOfPage2(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.page_2);
    }

    static async visibilityOfPage2(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.page_2);

    }

    static async clickOfMicrositeLearnMoreLink(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.micrositeLearnMore);
    }

    static async visibilityOfMicrositeLearnMoreLink(page: any) {

        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.micrositeLearnMore);
    }


    static async visibilityStudentProductsText(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.studentProducts);
    }

    static async getTextOfStudentProducts(page: any) {
        await ElementHelper.getTextFromElement(page, NavigationHeaderLocators.studentProducts);
    }

    static async clickOnViewAllStudents(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.viewAllStudents)
    }
    static async visibilityViewAllStudents(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.viewAllStudents);
    }

    static async visibilityStudentCourses(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.studentCourses);
    }

    static async getTextOfStudentCourses(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.studentCourses);
    }
    static async visibilityEnhancingStudentCurriculm(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.enhancingStudentCurriculm);
    }

    static async clickOnEnhancingStudentCurriculm(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.enhancingStudentCurriculm);
    }

    static async visibilityStudentStore(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.studentStore);
    }

    static async getTextOfStudentStore(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.studentStore);
    }

    static async visibilityStudentFAQ(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.FAQ);
    }

    static async clickOnStudentFAQ(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.FAQ);
    }

    static async visibilityOnCartIconCreateAccount(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.cartIconCreateAccount);
    }

    static async clickOnCartIconCreateAccount(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.cartIconCreateAccount);
    }

    static async clickOnUserIconCreateAccount(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.userIconCreateAccount);
    }

    static async visibilityUserIconCreateAccount(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconCreateAccount);
    }

    static async hoveronproduct(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconCreateAccount);
    }

    static async visibilitySearchProductsTextbox(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.searchProductsTextbox);
    }

    static async EnterTextInSearchProductsTextbox(page: any, data: string) {
        await ElementHelper.clearAndEnterInTextField(page, NavigationHeaderLocators.searchProductsTextbox, data);
    }

    static async clickOnSearchIconToSearch(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.searchIconforTextbox);
    }

    static async visibilityMiniCartItemSection(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.miniCartItemSection);
    }

    static async visibilityMiniCartIncreaseButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.miniCartItemIncrease);
    }

    static async clickMiniCartIncreaseButton(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.miniCartItemIncrease);
    }

    static async clickMiniCartIncreaseButtonTimes(page: any, count: number) {
        for (let i = 1; i < count; i++) {
            await ElementHelper.clickElement(page, NavigationHeaderLocators.miniCartItemIncrease);
            await page.waitForTimeout(3000);
        }
    }

    static async hoverOnStudentMenuOption(page: any) {
        await ElementHelper.hoverOverMenu(page, NavigationHeaderLocators.studentMenuList);
    }

    static async visibilityOfUtilityBannerHeaderBar(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.utilityBanner);
    }

    static async visibilityOfMarketingIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.marketingIcon);
    }

    static async visibilityOfMarketingContentInformation(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.marketingContentInformation);
    }

    static async visibilityOfNavigationHeaderBar(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.navigationHeader);
    }

    static async visibilityOfHomePage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.homePage);
    }

    static async visibilityOfAllProductPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.allProductTitle);
    }

    static async scrollDownHomePage(page: any) {
        await ElementHelper.scrollToElement(page, NavigationHeaderLocators.bestSeller);
    }

    static async navigationHeaderIsSticky(page: any, CSSProperty: string, CSSValue: string) {
        await VerificationHelpers.elementHasCSS(page, NavigationHeaderLocators.bestSeller, CSSProperty, CSSValue);
    }

    static async visibilityOfShopMenuSubcategory(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.shopSubMenuLinksExpand);
    }

    static async visibilityBySkinTypePage(page: any, URL: string) {
        await CommonHelper.switchToWindow(page, URL)
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.skinTypePageTitle)
    }

    static async visibilityBySkinConcernPage(page: any, URL: string) {
        await CommonHelper.switchToWindow(page, URL)
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.skinByConcernsTitle)
    }

    static async visibilityOfViewAllBySkinConcernFilterOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.viewAllBySkinConcern);
    }

    static async clickOnViewAllBySkinConcernFilterOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.viewAllBySkinConcern);
    }

    static async clickAcademyMenuList(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.academyMenuList);
    }

    static async hoverAcademyMenuList(page: any) {
        await ElementHelper.hoverOverMenu(page, NavigationHeaderLocators.academyMenuList);
    }

    static async verifyUserRedirectedToAcedemyPage(page: any, expectedURL: string) {
        await CommonHelper.verifyUrl(page, expectedURL)
    }

    static async visibilityOfAcne(page: any) {
        await ElementHelper.isElementDisplayed(page, NavigationHeaderLocators.acne);
    }

    static async visibilityOfAllCoursePage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.allCoursePageTitle);
    }

    static async visibilityOfFundamentalCoursePage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.fundamentalCourseTitle);
    }

    static async visibilityOfCertificationCoursePage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.certificationCourseTitle);
    }

    static async visibilityOfAcnePage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.acnePageTitle);
    }

    static async clickOnAgingOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.aging);
    }

    static async visibilityOfAgingPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.agingPageTitle);
    }

    static async visibilityOfHyperpigmentationPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.hyperpigmentationPageTitle);
    }

    static async visibilityOfSensitiveSkinPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.sensitiveSkinPageTitle);
    }

    static async visibilityOfBusinessBuildingPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.businessBuildingPageTitle);
    }

    static async visibilityOfPeelApplicationVideosPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.peelApplicationVideosPageTitle);
    }

    static async visibilityOfMulticulturalSkinPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.multiculturalSkinPageTitle);
    }

    static async checkURLOfSubmenu(page: any, url: string) {
        await VerificationHelpers.checkUrlContainsKeyword(page, url);
    }

    static async visibilityOfEducationMembership(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.educationMembershipsPageTitle);
    }

    static async visibilityOfAllAccessMembershipPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.allAccessMembershipPageTitle);
    }

    static async visibilityOfAcneMembershipPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.acneMembershipPageTitle);
    }

    static async visibilityOfAgingMembershipPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.agingMembershipPageTitle);
    }

    static async visibilityOfHyperpigmentationMembershipPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.hyperpigmentationMembershipPageTitle);
    }

    static async visibilityOfSensitiveSkinMembershipPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.sensitiveSkinMembershipPageTitle);
    }

    static async visibilityOfEnhancingYourServicesMembershipPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.enhancingYourServicesMembershipPageTitle);
    }

    static async visibilityOfMulticulturalSkinMembershipPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.multiCulturalSkinMembershipPageTitle);
    }

    static async visibilityEventMenuList(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.eventsMenuList);
    }

    static async clickEventMenuList(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.eventsMenuList);
    }

    static async hoverEventMenuList(page: any) {
        await ElementHelper.hoverOverMenu(page, NavigationHeaderLocators.eventsMenuList);
    }

    static async checkURLOfPage(page: any, url: string) {
        await VerificationHelpers.checkUrlContainsKeyword(page, url);
    }
    static async loginViewCartButtonNotVisible(page: any) {
        await VerificationHelpers.elementIsHidden(page, NavigationHeaderLocators.afterLoginCartIconViewCartBtn);
    }

    static async visibilityEmptyCartSubTotal(page: any) {
        await ElementHelper.isElementDisplayed(page, NavigationHeaderLocators.emptyCartSubTotal);
    }

    static async verifyAfterLoginCartPramotionMessage(page: any) {
        await VerificationHelpers.elementContainsText(page, NavigationHeaderLocators.afterLoginCartIconInfoText, headerNavigationtestData.CartIcon.heading);
    }
    static async clickOnnCartIcon(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.navigationCartIcon);
    }

    static async clearSearchProductsTextbox(page: any) {
        await ElementHelper.clearTextField(page, NavigationHeaderLocators.searchProductsTextbox);
    }

    static async visibilityAboutMenuList(page: any) {
        await ElementHelper.isElementDisplayed(page, NavigationHeaderLocators.aboutMenuList);
    }

    static async clickAboutMenuList(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.aboutMenuList);
    }

    static async hoverAboutMenuList(page: any) {
        await ElementHelper.hoverOverMenu(page, NavigationHeaderLocators.aboutMenuList);
    }

    static async visibilityAboutPageHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.aboutPCASKINHeader);
    }

    static async visibilityOurStoryPageHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.ourStoryPageHeader);
    }

    static async visibilityCulturePageHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.culturePageHeader);
    }

    static async visibilityOurPeelLegacyPageHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.ourPeelLegacyHeader);
    }

    static async visibilityFAQPageHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.faqPageHeader);
    }

    static async visibilityReturnExchangePageHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.returnExchangePageHeader);
    }

    static async visibilityShippingTermsPageHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.shippingTermsPageHeader);
    }

    static async visibilityContactUsPageHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.contactUsPageHeader);
    }

    static async visibilitySubscriptionPageHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.subscriptionPageHeader);
    }

    static async visibilityBusinessToolMenuList(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.businessToolsMenuList);
    }

    static async clickBusinessToolMenuList(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.businessToolsMenuList);
    }

    static async hoverBusinessToolMenuList(page: any) {
        await ElementHelper.hoverOverMenu(page, NavigationHeaderLocators.businessToolsMenuList);
    }

    static async visibilityBusinessToolPageHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.businessToolPageHeader);
    }

    static async visibilityOfStudentMenuOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.studentMenuList);
    }

    static async visibilityOfStudentMenuOptionAtLast(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.studentMenuListAtLastPosition)
    }

    static async visibilityOfNavigationMenuBar(page: any) {
        await CommonHelper.checkSubmenuVisibility(page, NavigationHeaderLocators.navigationMenuBar)
    }

    static async visibilityOfNavigationActionBar(page: any) {
        await CommonHelper.checkSubmenuVisibility(page, NavigationHeaderLocators.navigationActionBar)
    }

    static async visibilityOfStudentOnly(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.studentOnly)
    }

    static async verifyTextOfStudentOnly(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, NavigationHeaderLocators.studentOnly, text)
    }

    static async visibilityOfStudentPageHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.studentInfoPageTitle)
    }

    static async verifyTextOfStudentPageHeader(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, NavigationHeaderLocators.studentInfoPageTitle, text)
    }

    static async verifyURLContainKeyword(page: any, keyword: string) {
        await VerificationHelpers.checkUrlContainsKeyword(page, keyword)
    }


    static async loginInAccount(page: any, email: string, password: string) {
        await test.step("Step 1: Verify Already registered? Text is Visible on the Home Page", async () => {
            await page.waitForTimeout(3000)
            await HomePage.visbilityAlreadyRegisteredText(page);
        })
        await test.step("Step 2: Verify Email Field Visibility", async () => {
            await HomePage.isEmailInputVisible(page);
        })
        await test.step("Step 3: Click on Email Field Visibility", async () => {
            await HomePage.clickEmailInputField(page);
        })
        await test.step("Step 4: Clear and Enter Email into the Email Field", async () => {
            await ElementHelper.clearAndEnterInTextField(page, HomeLocators.inputEmail, email);
        })
        await test.step("Step 5: Verify Password Field Visbility", async () => {
            await HomePage.isPasswordInputVisible(page);
        })
        await test.step("Step 6: Click on Password Field Visbility", async () => {
            await HomePage.clickPasswordInputField(page);
        })
        await test.step("Step 7: Clear and Enter Password into the Password Field", async () => {
            await ElementHelper.clearAndEnterInTextField(page, HomeLocators.inputPassword, password);
        })
        await test.step("Step 8: Verify Login Button Visbility", async () => {
            await HomePage.visibiltiyLoginButton(page);
        })
        await test.step("Step 9: Click on Login Button", async () => {
            await HomePage.clickOnLoginButton(page);
            await page.waitForTimeout(9000);
        })
    }

    static async verifyPromotionMessageText(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, NavigationHeaderLocators.afterLoginUserIconInfoText, text)
    }

    static async visibilityOfOverviewIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconOverview);
    }

    static async visibilityOfOrdersIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconOrders);
    }

    static async visibilityOfInvoicesIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconInvoices);
    }

    static async visibilityOfSubscriptionsIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconSubscriptions);
    }

    static async visibilityOfEducationIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconEducation);
    }

    static async visibilityOfPersonalProfileIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconPersonalProfile);
    }

    static async visibilityOfCompanyProfileIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconCompanyProfile);
    }

    static async visibilityOfCompanyUsersIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconCompanyUsers);
    }

    static async visibilityOfDropshipAddressesIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconDropshipAddresses);
    }

    static async visibilityOfPaymentMethodsIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconPaymentMethods);
    }

    static async visibilityOfFavoritesIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userIconFavorites);
    }

    static async visibilityOfCompanyProfile(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconCompanyProfile);
    }

    static async visibilityOfCompanyUser(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconCompanyUsers);
    }

    static async visibilityOfDropshipAddresses(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconDropshipAddresses);
    }

    static async visibilityOfPaymentMethods(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconPaymentMethods);
    }

    static async visibilityOfFavorites(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconFavorites);
    }

    static async clickOnContentHubAndVerifyURL(page: any) {
        const context = await page.context();
        const pagePromise = context.waitForEvent('page');
        await ElementHelper.clickElement(page, NavigationHeaderLocators.contentHub);
        var newTab = await pagePromise;
        await newTab.waitForLoadState();
        await NavigationHeaderPageActions.checkURLOfPage(newTab, pcaskincare.RegularUser.Links.contentPage);
    }

    static async verifyAccountPageDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.accountPage)
    }

    static async clickOnCompanyProfileOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginUserIconCompanyProfile);
    }

    static async visibleOfCompanyProfileOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconCompanyProfile);
    }

    static async visibleOfCompanyUsersOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconCompanyUsers);
    }

    static async clickOnCompanyUsersOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginUserIconCompanyUsers);
    }

    static async visibleOfDropshippingAddressOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconDropshipAddresses);
    }

    static async clickOnDropshippingAddressOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginUserIconDropshipAddresses);
    }

    static async visibleOfPaymentMethodsOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconPaymentMethods);
    }

    static async clickOnPaymentMethodsOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginUserIconPaymentMethods);
    }

    static async visibleOfFavoritesOption(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconFavorites);
    }

    static async clickOnFavoritesOption(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginUserIconFavorites);
    }

    static async visibilityOfLogoutIcon(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.userAccountLogoutIcon);
    }

    static async visibilityOfCartContainer(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.cartDropdown);
    }

    static async clickOnSeachButton(page: any) {
        await ElementHelper.waitForElementClickable(page,NavigationHeaderLocators.searchBtn);
        await ElementHelper.clickElement(page, NavigationHeaderLocators.searchBtn);
    }

    static async clickOnAcademyAndVerifyURL(page: any) {
        const context = await page.context();
        const pagePromise = context.waitForEvent('page');
        await ElementHelper.clickElement(page, NavigationHeaderLocators.eventsMenuList);
        var newTab = await pagePromise;
        await newTab.waitForLoadState();
        await NavigationHeaderPageActions.checkURLOfPage(newTab, pcaskincare.RegularUser.Links.academy);

    }

    static async visibilityOfPeelApplicationPage(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.coursesPageTitle);
    }
    static async enterTextInSearchProductsTextboxAcneCream(page: any) {
        await ElementHelper.clearAndEnterInTextField(page, NavigationHeaderLocators.searchProductsTextbox, pcaskincare.RegularUser.SearchText.acneCream);
    }
    static async enterTextInSearchProductsTextboxRetinolPeel(page: any) {
        await ElementHelper.clearAndEnterInTextField(page, NavigationHeaderLocators.searchProductsTextbox, pcaskincare.RegularUser.SearchText.retinolPeel);
    }
    static async enterTextInSearchProductsTextboxIntensiveAgeRefiningTreatment(page: any) {
        await ElementHelper.clearAndEnterInTextField(page, NavigationHeaderLocators.searchProductsTextbox, pcaskincare.RegularUser.SearchText.intensiveAgeRefiningTreatment);
    }
    static async enterTextInSearchProductsTextRetinol(page: any) {
        await ElementHelper.clearAndEnterInTextField(page, NavigationHeaderLocators.searchProductsTextbox, pcaskincare.RegularUser.SearchText.retinol);
        await page.waitForTimeout(4000);
    }
    static async enterTextInSearchProductsTextHyaluronicAcidOvernightMask(page: any) {
        await ElementHelper.clearAndEnterInTextField(page, NavigationHeaderLocators.searchProductsTextbox, pcaskincare.RegularUser.SearchText.hyaluronicAcidMask);
        await page.waitForTimeout(4000);
    }

    static async enterTextInSearchProductsTextClearskin(page: any) {
        await ElementHelper.clearAndEnterInTextField(page, NavigationHeaderLocators.searchProductsTextbox, pcaskincare.RegularUser.SearchText.clearskin);
        await page.waitForTimeout(4000);
    }

    static async clickSearchIconforTextboxSearch(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.searchIconforTextbox);
    }

    static async verifyUserIconFavoriteSection(page: any) {
        await VerificationHelpers.elementIsVisible(page, NavigationHeaderLocators.afterLoginUserIconFavorites);
    }
    static async clickUserIconFavoriteSection(page: any) {
        await ElementHelper.clickElement(page, NavigationHeaderLocators.afterLoginUserIconFavorites);
    }

    static async verifyUserClickAndRedirectToExternalPage(page: any, expectedURL: string) {
        const context = await page.context();
        const pagePromise = context.waitForEvent('page');
        await ElementHelper.clickElement(page, NavigationHeaderLocators.academyMenuList);
        var newTab = await pagePromise;
        await newTab.waitForLoadState();
        await NavigationHeaderPageActions.checkURLOfPage(newTab, expectedURL);
    }
}