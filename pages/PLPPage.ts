import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { filters } from "../locators/PlpPageFilterLocators";
import { PLPLocators } from "../locators/PLPLocators";
import subscriptionTestData from '../testdata/pcaSkinCare.testdata.json';
import NotifyMeTestData from '../testdata/pcaSkinCare.testdata.json'
import { PDPLocators } from "../locators/PDPLocators";

export class PLPPage {
    static async verifyTheBreadCrumbHomeButtonIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.linksBreadcrump);
    }

    static async getTheBreadCrumbHomeButtonText(page: any) {
        await ElementHelper.getTextFromElement(page, PLPLocators.linksBreadcrump);
    }

    static async verifyTheBreadCrumbOfCurrentPageIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.currPageBreadCrump);
    }

    static async getTheBreadCrumbOfCurrentPageText(page: any) {
        await ElementHelper.getTextFromElement(page, PLPLocators.currPageBreadCrump);
    }

    static async verifyTheHeaderOfCurrentPageIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpHeadingAllProducts);
    }

    static async getTheHeaderOfCurrentPageText(page: any) {
        await ElementHelper.getTextFromElement(page, PLPLocators.plpHeadingAllProducts);
    }

    static async verifyTheSortingDropDownIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpSortDropDown);
    }

    static async getTheSortingDropDownText(page: any) {
        await ElementHelper.getTextFromElement(page, PLPLocators.plpSortDropDown);
    }

    static async clickOnTheSortingDropDown(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpSortDropDown);
    }
    static async verifyTopSellingOptionIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpSortDropDownTopSelling);
    }

    static async getTopSellingOptionText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.plpSortDropDownTopSelling);
    }

    static async clickOnTopSellingOption(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpSortDropDownTopSelling);
    }

    static async verifyPriceLowToHighOptionIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpSortDropDownPriceLowToHigh);
    }

    static async getPriceLowToHighOptionText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.plpSortDropDownPriceLowToHigh);
    }

    static async clickOnPriceLowToHighOption(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpSortDropDownPriceLowToHigh);
    }

    static async verifyPriceHighToLowOptionIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpSortDropDownPriceHighToLow);
    }

    static async getPriceHighToLowOptionText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.plpSortDropDownPriceHighToLow);
    }

    static async clickOnPriceHighToLowOption(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpSortDropDownPriceHighToLow);
    }

    static async verifyTotalCountOfProductsIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpTotalCountOfProducts);
    }

    static async getTotalCountOfProductsText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.plpTotalCountOfProducts);
    }

    static async verifyProductsHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByproductsHeading);
    }

    static async getProductsHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersByproductsHeading);
    }

    static async clickOnProductsHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByproductsHeading);
    }

    static async verifyCategoryHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersBycategoryHeading);
    }

    static async getCategoryHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersBycategoryHeading);
    }

    static async clickOnCategoryHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersBycategoryHeading);
    }

    static async verifyAgeRangeHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByageRangeHeading);
    }

    static async getAgeRangeHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersByageRangeHeading);
    }

    static async clickOnAgeRangeHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByageRangeHeading);
    }

    static async verifyBristleSoftnessHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByBristleSoftnessHeading);
    }

    static async getBristleSoftnessHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersByBristleSoftnessHeading);
    }

    static async clickOnBristleSoftnessHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByBristleSoftnessHeading);
    }

    static async verifyBrushHeadsizeHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByBrushHeadsize);
    }

    static async getBrushHeadsizeHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersByBrushHeadsize);
    }

    static async clickOnBrushHeadsizeHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByBrushHeadsize);
    }

    static async verifyFormulaHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByFormula);
    }

    static async getFormulaHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersByFormula);
    }

    static async clickOnFormulaHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByFormula);
    }

    static async verifyPatientConditionHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByPatientCondition);
    }

    static async getPatientConditionHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersByPatientCondition);
    }

    static async clickOnPatientConditionHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByPatientCondition);
    }

    static async verifyVariantHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByVariant);
    }

    static async getVariantHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersByVariant);
    }

    static async clickOnVariantHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByVariant);
    }

    static async verifyRXHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByRX);
    }

    static async getRXHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersByRX);
    }

    static async clickOnRXHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByRX);
    }

    static async verifyProductsDownArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByProductsdownArrow);
    }

    static async clickOnProductsDownArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByProductsdownArrow);
    }

    static async verifyCategoryDownArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByCategorydownArrow);
    }

    static async clickOnCategoryDownArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByCategorydownArrow);
    }

    static async verifyAgeRangeDownArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByageRangedownArrow);
    }

    static async clickOnAgeRangeDownArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByageRangedownArrow);
    }

    static async verifyFormulaDownArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByformuladownArrow);
    }

    static async clickOnFormulaDownArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByformuladownArrow);
    }

    static async verifyPatientConditionDownArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByPatientConditiondownArrow);
    }

    static async clickOnPatientConditionDownArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByPatientConditiondownArrow);
    }

    static async verifyRXDownArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByRXdownArrow);
    }

    static async clickOnRXDownArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByRXdownArrow);
    }

    static async verifyVariantDownArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByVariantdownArrow);
    }

    static async clickOnVariantDownArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByVariantdownArrow);
    }

    static async verifyBristleSoftnessDownArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByBristleSoftnessdownArrow);
    }

    static async clickOnBristleSoftnessDownArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByBristleSoftnessdownArrow);
    }

    static async verifyBrushHeadsizeDownArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersByBrushHeadsizedownArrow);
    }

    static async clickOnBrushHeadsizeDownArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersByBrushHeadsizedownArrow);
    }

    static async verifyProductsUpArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersProductsupArrow);
    }

    static async clickOnProductsUpArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersProductsupArrow);
    }

    static async verifyCategoryUpArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersCategoryupArrow);
    }

    static async clickOnCategoryUpArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersCategoryupArrow);
    }

    static async verifyAgeRangeUpArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAgeRangeupArrow);
    }

    static async clickOnAgeRangeUpArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAgeRangeupArrow);
    }

    static async verifyFormulaUpArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersFormulaupArrow);
    }

    static async clickOnFormulaUpArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersFormulaupArrow);
    }

    static async verifyPatientConditionUpArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersPatientConditionupArrow);
    }

    static async clickOnPatientConditionUpArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersPatientConditionupArrow);
    }

    static async verifyRXUpArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersRXupArrow);
    }

    static async clickOnRXUpArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersRXupArrow);
    }

    static async verifyVariantUpArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersVariantupArrow);
    }

    static async clickOnVariantUpArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersVariantupArrow);
    }

    static async verifyBristleSoftnessUpArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersBristleSoftnessupArrow);
    }

    static async clickOnBristleSoftnessUpArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersBristleSoftnessupArrow);
    }

    static async verifyBrushHeadsizeUpArrowIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersBrushHeadsizeupArrow);
    }

    static async clickOnBrushHeadsizeUpArrow(page: any) {
        await ElementHelper.clickElement(page, filters.filtersBrushHeadsizeupArrow);
    }

    static async verifyAllProductsHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersProductsAllProducts);
    }

    static async getAllProductsHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersProductsAllProducts);
    }

    static async clickOnAllProductsHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersProductsAllProducts);
    }

    static async verifyFlossHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersProductsFloss);
    }

    static async getFlossHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersProductsFloss);
    }

    static async clickOnFlossHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersProductsFloss);
    }

    static async verifyFluorideTherapyHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersProductsFluorideTherapy);
    }

    static async getFluorideTherapyHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersProductsFluorideTherapy);
    }

    static async clickOnFluorideTherapyHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersProductsFluorideTherapy);
    }

    static async verifyMouthWashHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersProductsMouthWash);
    }

    static async getMouthWashHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersProductsMouthWash);
    }

    static async clickOnMouthWashHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersProductsMouthWash);
    }

    static async verifyOralRinsesHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersProductsOralRinses);
    }

    static async getOralRinsesHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersProductsOralRinses);
    }

    static async clickOnOralRinsesHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersProductsOralRinses);
    }

    static async verifyToothbrushHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersProductsToothbrush);
    }

    static async getToothbrushHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersProductsToothbrush);
    }

    static async clickOnToothbrushHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersProductsToothbrush);
    }

    static async verifySeeMoreCategoriesHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersProductsSeeMoreCategories);
    }

    static async getSeeMoreCategoriesHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersProductsSeeMoreCategories);
    }

    static async clickOnSeeMoreCategoriesHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersProductsSeeMoreCategories);
    }

    static async verifyWhiteningHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersProductsWhitening);
    }

    static async getWhiteningHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersProductsWhitening);
    }

    static async clickOnWhiteningHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersProductsWhitening);
    }

    static async verifyKidsAndTweensHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedKidsAndTweens);
    }

    static async getKidsAndTweensHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedKidsAndTweens);
    }

    static async clickOnKidsAndTweensHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedKidsAndTweens);
    }

    static async verifyTheKidsAndTweensCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedKidsAndTweens);
    }

    static async verifyColgatePrevidentSeriesHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedColgatePrevidentSeries);
    }

    static async getColgatePrevidentSeriesHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedColgatePrevidentSeries);
    }

    static async clickOnColgatePrevidentSeriesHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedColgatePrevidentSeries);
    }

    static async verifyTheColgatePrevidentSeriesCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedColgatePrevidentSeries);
    }

    static async verifyPremiumHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedPremium);
    }

    static async getPremiumHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedPremium);
    }

    static async clickOnPremiumHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedPremium);
    }

    static async verifyThePremiumCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedPremium);
    }

    static async verifyClassicHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedClassic);
    }

    static async getClassicHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedClassic);
    }

    static async clickOnClassicHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedClassic);
    }

    static async verifyTheClassicCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedClassic);
    }

    static async verifyTakeHomeHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedTakeHome);
    }

    static async getTakeHomeHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedTakeHome);
    }

    static async clickOnTakeHomeHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedTakeHome);
    }

    static async verifyTheTakeHomeCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedTakeHome);
    }

    static async verifyColgatePeroxylRinseHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedColgatePeroxylRinse);
    }

    static async getColgatePeroxylRinseHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedColgatePeroxylRinse);
    }

    static async clickOnColgatePeroxylRinseHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedColgatePeroxylRinse);
    }

    static async verifyTheColgatePeroxylRinseCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedColgatePeroxylRinse);
    }

    static async verifyInOfficeHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedInOffice);
    }

    static async getInOfficeHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedInOffice);
    }

    static async clickOnInOfficeHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedInOffice);
    }

    static async verifyTheInOfficeCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedInOffice);
    }

    static async verifyColgatePhosFlurRinseHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedColgatePhosFlurRinse);
    }

    static async getColgatePhosFlurRinseHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedColgatePhosFlurRinse);
    }

    static async clickOnColgatePhosFlurRinseHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedColgatePhosFlurRinse);
    }

    static async verifyTheColgatePhosFlurRinseCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedColgatePhosFlurRinse);
    }

    static async verifyColgatePeriogardRinseHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedColgatePeriogardRinse);
    }

    static async getColgatePeriogardRinseHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedColgatePeriogardRinse);
    }

    static async clickOnColgatePeriogardRinseHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedColgatePeriogardRinse);
    }

    static async verifyTheColgatePeriogardRinseCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedColgatePeriogardRinse);
    }

    static async verifyColgateGelKamHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedColgateGelKam);
    }

    static async getColgateGelKamHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedColgateGelKam);
    }

    static async clickOnColgateGelKamHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedColgateGelKam);
    }

    static async verifyTheColgateGelKamCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedColgateGelKam);
    }

    static async verifyAdultHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedAdult);
    }

    static async getAdultHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedAdult);
    }

    static async clickOnAdultHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedAdult);
    }

    static async verifyTheAdultCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedAdult);
    }

    static async verify02YearsOldHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersApplied02yearsold);
    }

    static async get02YearsOldHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersApplied02yearsold);
    }

    static async clickOn02YearsOldHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersApplied02yearsold);
    }

    static async verifyThe02YearsOldCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersApplied02yearsold);
    }

    static async verify34YearsOldHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersApplied34yearsold);
    }

    static async get34YearsOldHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersApplied34yearsold);
    }

    static async clickOn34YearsOldHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersApplied34yearsold);
    }

    static async verifyThe34YearsOldCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersApplied34yearsold);
    }

    static async verify57YearsOldHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersApplied57yearsold);
    }

    static async get57YearsOldHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersApplied57yearsold);
    }

    static async clickOn57YearsOldHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersApplied57yearsold);
    }

    static async verifyThe57YearsOldCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersApplied57yearsold);
    }

    static async verify812YearsOldHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersApplied812yearsold);
    }

    static async get812YearsOldHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersApplied812yearsold);
    }

    static async clickOn812YearsOldHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersApplied812yearsold);
    }

    static async verifyThe812YearsOldCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersApplied812yearsold);
    }

    static async verifyExtraSoftHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedExtraSoft);
    }

    static async getExtraSoftHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedExtraSoft);
    }

    static async clickOnExtraSoftHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedExtraSoft);
    }

    static async verifyTheExtraSoftCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedExtraSoft);
    }

    static async verifySoftHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedSoft);
    }

    static async getSoftHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedSoft);
    }

    static async clickOnSoftHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedSoft);
    }

    static async verifyTheSoftCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedSoft);
    }

    static async verifyCompactHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedCompact);
    }

    static async getCompactHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedCompact);
    }

    static async clickOnCompactHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedCompact);
    }

    static async verifyTheCompactCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedCompact);
    }

    static async verifyUltraCompactHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedUltraCompact);
    }

    static async getUltraCompactHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedUltraCompact);
    }

    static async clickOnUltraCompactHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedUltraCompact);
    }

    static async verifyTheUltraCompactCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedUltraCompact);
    }

    static async verifySmallAges07HeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedSmallAges07);
    }

    static async getSmallAges07HeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedSmallAges07);
    }

    static async clickOnSmallAges07Heading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedSmallAges07);
    }

    static async verifyTheSmallAges07CheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedSmallAges07);
    }

    static async verifyFullHeadHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedFullHead);
    }

    static async getFullHeadHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedFullHead);
    }

    static async clickOnFullHeadHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedFullHead);
    }

    static async verifyTheFullHeadCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedFullHead);
    }

    static async verifyYouthAges5HeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedYouthAges5);
    }

    static async getYouthAges5HeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedYouthAges5);
    }

    static async clickOnYouthAges5Heading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedYouthAges5);
    }

    static async verifyTheYouthAges5CheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedYouthAges5);
    }

    static async verifyJuniorAges04HeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedJuniorAges04);
    }

    static async getJuniorAges04HeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedJuniorAges04);
    }

    static async clickOnJuniorAges04Heading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedJuniorAges04);
    }

    static async verifyTheJuniorAges04CheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedJuniorAges04);
    }

    static async verifyToothpasteHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedToothpaste);
    }

    static async getToothpasteHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedToothpaste);
    }

    static async clickOnToothpasteHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedToothpaste);
    }

    static async verifyTheToothpasteCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedToothpaste);
    }

    static async verifyGelHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedGel);
    }

    static async getGelHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedGel);
    }

    static async clickOnGelHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedGel);
    }

    static async verifyTheGelCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedGel);
    }

    static async verifyVarnishHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedVarnish);
    }

    static async getVarnishHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedVarnish);
    }

    static async clickOnVarnishHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedVarnish);
    }

    static async verifyTheVarnishCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedVarnish);
    }

    static async verifySensitivityHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedSensitivity);
    }

    static async getSensitivityHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedSensitivity);
    }

    static async clickOnSensitivityHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedSensitivity);
    }

    static async verifyTheSensitivityCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedSensitivity);
    }

    static async verifyOrthoHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedOrtho);
    }

    static async getOrthoHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedOrtho);
    }

    static async clickOnOrthoHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedOrtho);
    }

    static async verifyTheOrthoCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedOrtho);
    }

    static async verifyGingivitisPerioHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedGingivitisPerio);
    }

    static async getGingivitisPerioHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedGingivitisPerio);
    }

    static async clickOnGingivitisPerioHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedGingivitisPerio);
    }

    static async verifyTheGingivitisPerioCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedGingivitisPerio);
    }

    static async verifyCariesAdultHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedCariesAdult);
    }

    static async getCariesAdultHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedCariesAdult);
    }

    static async clickOnCariesAdultHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedCariesAdult);
    }

    static async verifyTheCariesAdultCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedCariesAdult);
    }

    static async verifyErosionHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedErosion);
    }

    static async getErosionHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedErosion);
    }

    static async clickOnErosionHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedErosion);
    }

    static async verifyTheErosionCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedErosion);
    }

    static async verifyDryMouthHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedDryMouth);
    }

    static async getDryMouthHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedDryMouth);
    }

    static async clickOnDryMouthHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedDryMouth);
    }

    static async verifyTheDryMouthCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedDryMouth);
    }

    static async verifyImplantsHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedImplants);
    }

    static async getImplantsHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedImplants);
    }

    static async clickOnImplantsHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedImplants);
    }

    static async verifyTheImplantsCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedImplants);
    }

    static async verifyCariesKidsHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedCariesKids);
    }

    static async getCariesKidsHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedCariesKids);
    }

    static async clickOnCariesKidsHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedCariesKids);
    }

    static async verifyTheCariesKidsCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedCariesKids);
    }

    static async verifyChemotherapyRadiationTreatmentHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedChemotherapyRadiationTreatment);
    }

    static async getChemotherapyRadiationTreatmentHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedChemotherapyRadiationTreatment);
    }

    static async clickOnChemotherapyRadiationTreatmentHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedChemotherapyRadiationTreatment);
    }

    static async verifyTheChemotherapyRadiationTreatmentCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedChemotherapyRadiationTreatment);
    }

    static async verifyImprintedHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedImprinted);
    }

    static async getImprintedHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedImprinted);
    }

    static async clickOnImprintedHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedImprinted);
    }

    static async verifyTheImprintedCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedImprinted);
    }

    static async verifyNonImprintedHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedNonImprinted);
    }

    static async getNonImprintedHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedNonImprinted);
    }

    static async clickOnNonImprintedHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedNonImprinted);
    }

    static async verifyTheNonImprintedCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedNonImprinted);
    }

    static async verifyPrescriptionHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedPrescription);
    }

    static async getPrescriptionHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedPrescription);
    }

    static async clickOnPrescriptionHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedPrescription);
    }

    static async verifyThePrescriptionCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedPrescription);
    }

    static async verifyNonPrescriptionHeadingIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedNonPrescription);
    }

    static async getNonPrescriptionHeadingText(page: any) {
        return await ElementHelper.getTextFromElement(page, filters.filtersAppliedNonPrescription);
    }

    static async clickOnNonPrescriptionHeading(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedNonPrescription);
    }

    static async verifyTheNonPrescriptionCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, filters.filtersAppliedNonPrescription);
    }

    static async verifyFlossCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedFlosscloseBtn);
    }

    static async clickOnFlossCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedFlosscloseBtn);
    }

    static async verifyFluorideTherapyCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedFluorideTherapycloseBtn);
    }

    static async clickOnFluorideTherapyCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedFluorideTherapycloseBtn);
    }

    static async verifyMouthwashCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedMouthwashcloseBtn);
    }

    static async clickOnMouthwashCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedMouthwashcloseBtn);
    }

    static async verifyOralRinsesCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedOralRinsescloseBtn);
    }

    static async clickOnOralRinsesCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedOralRinsescloseBtn);
    }

    static async verifyToothbrushCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedToothbrushcloseBtn);
    }

    static async clickOnToothbrushCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedToothbrushcloseBtn);
    }

    static async verifyWhiteningCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedWhiteningcloseBtn);
    }

    static async clickOnWhiteningCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedWhiteningcloseBtn);
    }

    static async verifyKidsAndTweensCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedKidsAndTweenscloseBtn);
    }

    static async clickOnKidsAndTweensCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedKidsAndTweenscloseBtn);
    }

    static async verifyColgatePrevidentSeriesCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedColgatePrevidentSeriescloseBtn);
    }

    static async clickOnColgatePrevidentSeriesCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedColgatePrevidentSeriescloseBtn);
    }

    static async verifyPremiumCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedPremiumcloseBtn);
    }

    static async clickOnPremiumCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedPremiumcloseBtn);
    }

    static async verifyClassicCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedClassiccloseBtn);
    }

    static async clickOnClassicCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedClassiccloseBtn);
    }

    static async verifyTakeHomeCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedTakeHomecloseBtn);
    }

    static async clickOnTakeHomeCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedTakeHomecloseBtn);
    }

    static async verifyColgatePeroxylRinseCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedColgatePeroxylRinsecloseBtn);
    }

    static async clickOnColgatePeroxylRinseCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedColgatePeroxylRinsecloseBtn);
    }

    static async verifyInOfficeCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedInOfficecloseBtn);
    }

    static async clickOnInOfficeCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedInOfficecloseBtn);
    }

    static async verifyColgatePhosFlurRinseCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedColgatePhosFlurRinsecloseBtn);
    }

    static async clickOnColgatePhosFlurRinseCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedColgatePhosFlurRinsecloseBtn);
    }

    static async verifyColgatePeriogardRinseCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedColgatePeriogardRinsecloseBtn);
    }

    static async clickOnColgatePeriogardRinseCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedColgatePeriogardRinsecloseBtn);
    }

    static async verifyColgateGelKamCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedColgateGelKamcloseBtn);
    }

    static async clickOnColgateGelKamCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedColgateGelKamcloseBtn);
    }

    static async verifyAdultCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedAdultcloseBtn);
    }

    static async clickOnAdultCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedAdultcloseBtn);
    }

    static async verify02YearsOldCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersApplied02yearsoldcloseBtn);
    }

    static async clickOn02YearsOldCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersApplied02yearsoldcloseBtn);
    }

    static async verify34YearsOldCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersApplied34yearsoldcloseBtn);
    }

    static async clickOn34YearsOldCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersApplied34yearsoldcloseBtn);
    }

    static async verify57YearsOldCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersApplied57yearsoldcloseBtn);
    }

    static async clickOn57YearsOldCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersApplied57yearsoldcloseBtn);
    }

    static async verify812YearsOldCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersApplied812yearsoldcloseBtn);
    }

    static async clickOn812YearsOldCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersApplied812yearsoldcloseBtn);
    }

    static async verifyExtraSoftCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedExtraSoftcloseBtn);
    }

    static async clickOnExtraSoftCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedExtraSoftcloseBtn);
    }

    static async verifySoftCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedSoftcloseBtn);
    }

    static async clickOnSoftCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedSoftcloseBtn);
    }

    static async verifyCompactCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedCompactcloseBtn);
    }

    static async clickOnCompactCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedCompactcloseBtn);
    }

    static async verifyUltraCompactCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedUltraCompactcloseBtn);
    }

    static async clickOnUltraCompactCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedUltraCompactcloseBtn);
    }

    static async verifySmallAges07CloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedSmallAges07closeBtn);
    }

    static async clickOnSmallAges07CloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedSmallAges07closeBtn);
    }

    static async verifyFullHeadCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedFullHeadcloseBtn);
    }

    static async clickOnFullHeadCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedFullHeadcloseBtn);
    }

    static async verifyYouthAges5CloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedYouthAges5closeBtn);
    }

    static async clickOnYouthAges5CloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedYouthAges5closeBtn);
    }

    static async verifyJuniorAges04CloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedJuniorAges04closeBtn);
    }

    static async clickOnJuniorAges04CloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedJuniorAges04closeBtn);
    }

    static async verifyToothpasteCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedToothpastecloseBtn);
    }

    static async clickOnToothpasteCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedToothpastecloseBtn);
    }

    static async verifyGelCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedGelcloseBtn);
    }

    static async clickOnGelCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedGelcloseBtn);
    }

    static async verifyVarnishCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedVarnishcloseBtn);
    }

    static async clickOnVarnishCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedVarnishcloseBtn);
    }

    static async verifySensitivityCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedSensitivitycloseBtn);
    }

    static async clickOnSensitivityCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedSensitivitycloseBtn);
    }

    static async verifyOrthoCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedOrthocloseBtn);
    }

    static async clickOnOrthoCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedOrthocloseBtn);
    }

    static async verifyGingivitisPerioCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedGingivitisPeriocloseBtn);
    }

    static async clickOnGingivitisPerioCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedGingivitisPeriocloseBtn);
    }

    static async verifyCariesAdultCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedCariesAdultcloseBtn);
    }

    static async clickOnCariesAdultCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedCariesAdultcloseBtn);
    }

    static async verifyErosionCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedErosioncloseBtn);
    }

    static async clickOnErosionCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedErosioncloseBtn);
    }

    static async verifyDryMouthCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedDryMouthcloseBtn);
    }

    static async clickOnDryMouthCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedDryMouthcloseBtn);
    }

    static async verifyImplantsCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedImplantscloseBtn);
    }

    static async clickOnImplantsCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedImplantscloseBtn);
    }

    static async verifyCariesKidsCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedCariesKidscloseBtn);
    }

    static async clickOnCariesKidsCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedCariesKidscloseBtn);
    }

    static async verifyChemotherapyRadiationTreatmentCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedChemotherapyRadiationTreatmentcloseBtn);
    }

    static async clickOnChemotherapyRadiationTreatmentCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedChemotherapyRadiationTreatmentcloseBtn);
    }

    static async verifyImprintedCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedImprintedcloseBtn);
    }

    static async clickOnImprintedCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedImprintedcloseBtn);
    }

    static async verifyNonImprintedCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedNonImprintedcloseBtn);
    }

    static async clickOnNonImprintedCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedNonImprintedcloseBtn);
    }

    static async verifyPrescriptionCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedPrescriptioncloseBtn);
    }

    static async clickOnPrescriptionCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedPrescriptioncloseBtn);
    }

    static async verifyNonPrescriptionCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersAppliedNonPrescriptioncloseBtn);
    }

    static async clickOnNonPrescriptionCloseBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersAppliedNonPrescriptioncloseBtn);
    }

    static async verifyClearFilterBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, filters.filtersclearFilterbtn);
    }

    static async clickOnClearFilterBtn(page: any) {
        await ElementHelper.clickElement(page, filters.filtersclearFilterbtn);
    }

    static async verifyLoadMoreBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpLoadMorebtn);
    }

    static async getLoadMoreBtnText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.plpLoadMorebtn);
    }

    static async clickOnLoadMoreBtn(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpLoadMorebtn);
    }
    static async scrollToLoadMoreBtn(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.plpLoadMorebtn);
    }
    static async clickProductAddToCartMultipleTimes(page: any, count: number) {
        if (count <= 0) {
            throw new Error("Count must be greater than 0");
        }
        for (let i = 1; i < count; i++) {
            await page.waitForTimeout(2000);
            await ElementHelper.clickElement(page, PLPLocators.acneCreamAddToCartButton);
        }
    }

    static async visibilityAcneCreamAddToCartBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.acneCreamAddToCartButton);
    }
    static async visibilityMaximumQTYReachedToast(page: any) {
        //await VerificationHelpers.elementIsVisible(page, PLPLocators.plpMaximumQtyReachedToast);
        await page.waitForSelector(PLPLocators.plpMaximumQtyReachedToast)
    }

    static async verifyViewOutOfProductIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpViewOutOfProduct);
    }

    static async getViewOutOfProductText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.plpViewOutOfProduct);
    }

    static async clickOnViewOutOfProduct(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpViewOutOfProduct);
    }

    static async verifySignInToOrderBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpSignInToOrderbtn);
    }

    static async getSignInToOrderBtnText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.plpSignInToOrderbtn);
    }

    static async clickOnSignInToOrderBtn(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpSignInToOrderbtn);
    }

    static async verifyBestSellerBadgeIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpBestSellerbadge);
    }

    static async getBestSellerBadgeText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.plpBestSellerbadge);
    }

    static async verifySelectProductBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpSelectProductbtnforSpecificProduct);
    }

    static async getSelectProductBtnText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.plpSelectProductbtnforSpecificProduct);
    }

    static async clickOnSelectProductBtn(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpSelectProductbtnforSpecificProduct);
    }

    static async verifyAddToCartBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpAddToCartbtnforSpecificProduct);
    }

    static async getAddToCartBtnText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.plpAddToCartbtnforSpecificProduct);
    }

    static async clickOnAddToCartBtn(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpAddToCartbtnforSpecificProduct);
    }

    // static async clickOnFirstProductTitle(page: any) {
    //     await ElementHelper.clickElement(page, PLPLocators.FirstProducttitle);
    // }

    static async visibilityQuickViewButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewButton);
    }

    static async hoverOnProductImage(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.hoverOnProductImg);
    }
    static async visibilityblemishControlBarQuickViewBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewBtnBlemishControlBar);
    }
    static async hoverOnblemishControlBarImg(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.hoverOnblemishControlBarImg);
    }
    static async hoverOnactiveBroadSpectrumSPF45ProductImg(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.hoverscrollctiveBroadSpectrumSPF45);
    }
    static async clickQuickViewBtnBlemishControlBarBtn(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.quickViewBtnBlemishControlBar);
    }
    static async clickQuickViewBtnActiveBroadSpectrumSPF45Btn(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.quickViewBtnActiveBroadSpecSPF45);
    }
    static async clickAddToCartBtnActiveBroadSpectrumSPF45Btn(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.activeBroadSpectrumSPF45);
    }

    static async clickOnQuickViewButton(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.quickViewButton);
    }

    static async visibilityQuickViewdailogBoxOfProduct(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewDailog);
    }


    static async productPriceVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.productPrice);
    }

    static async GetProductPriceText(page: any) {
        await ElementHelper.getTextFromElement(page, PLPLocators.productPrice);
    }


    // Favourite for visible Products

    static async favouriteBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.favouriteIcon);
    }
    static async favouriteBtnClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.favouriteIcon);
    }
    static async getfavouriteText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.favouriteIcon);
    }
    static async hoverOverFavouriteBtn(page: any) {
        return await ElementHelper.hoverOverMenu(page, PLPLocators.favouriteIcon);
    }

    static async favouriteSelectToastIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.selectFavouriteToast);
    }
    static async getFavouriteSelectToastText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.selectFavouriteToast);
    }

    static async favouriteUnSelectToastIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.unselectFavouriteToast);
    }
    static async getFavouriteUnSelectToastText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.unselectFavouriteToast);
    }

    static async favouriteSelectToastCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.selectFavouriteToastCloseBtn);
    }
    static async favouriteSelectToastCloseBtnIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.selectFavouriteToastCloseBtn);
    }

    static async favouriteUnSelectToastCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.unselectFavouriteToastCloseBtn);
    }
    static async favouriteUnSelectToastCloseBtnIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.unselectFavouriteToastCloseBtn);
    }

    // Favourite for Restricted Products
    static async rPFavouriteBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.favouriteIcon);
    }
    static async rPFavouriteBtnClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.favouriteIcon);
    }
    static async getRPfavouriteText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.favouriteIcon);
    }
    static async hoverOverFavouriteBtnRP(page: any) {
        return await ElementHelper.hoverOverMenu(page, PLPLocators.favouriteIcon);
    }

    static async rPFavouriteSelectToastIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.selectFavouriteToast);
    }
    static async getRPFavouriteSelectToastText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.selectFavouriteToast);
    }

    static async rPFavouriteUnSelectToastIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.unselectFavouriteToast);
    }
    static async getRPFavouriteUnSelectToastText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.unselectFavouriteToast);
    }

    static async rPFavouriteSelectToastCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.selectFavouriteToastCloseBtn);
    }
    static async rPFavouriteSelectToastCloseBtnIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.selectFavouriteToastCloseBtn);
    }

    static async rPFavouriteUnSelectToastCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.unselectFavouriteToastCloseBtn);
    }
    static async rPFavouriteUnSelectToastCloseBtnIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.unselectFavouriteToastCloseBtn);
    }
    static async selectSizeBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.selectSizeButton);
    }
    static async selectSizeBtnClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.selectSizeButton);
    }
    static async getSelectSizeBtnText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.selectSizeButton);
    }
    static async hoverOverSelectSizeBtn(page: any) {
        return await ElementHelper.hoverOverMenu(page, PLPLocators.selectSizeButton);
    }



    //favorite and unfavorite products regardless of purchase eligibility

    static async regardlessFavouriteBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.favouriteIconRegardlessOfPurchaseEligibility);
    }
    static async regardlessFavouriteBtnClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.favouriteIconRegardlessOfPurchaseEligibility);
    }
    static async getRegardlessfavouriteText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.favouriteIconRegardlessOfPurchaseEligibility);
    }
    static async hoverOverRegardlessFavouriteBtn(page: any) {
        return await ElementHelper.hoverOverMenu(page, PLPLocators.favouriteIconRegardlessOfPurchaseEligibility);
    }

    static async regardlessFavouriteSelectToastIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.selectFavouriteToastRegardlessofPurchaseEligibility);
    }
    static async getRegardlessFavouriteSelectToastText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.selectFavouriteToastRegardlessofPurchaseEligibility);
    }

    static async regardlessFavouriteUnSelectToastIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.removeFavouriteToastRegardlessofPurchaseEligibility);
    }
    static async getRegardlessFavouriteUnSelectToastText(page: any) {
        return await ElementHelper.getTextFromElement(page, PLPLocators.removeFavouriteToastRegardlessofPurchaseEligibility);
    }
    static async regardlessFavouriteSelectToastCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.selectFavouriteToastCloseBtnRegardlessOfPurchaseeEigibility);
    }
    static async regardlessFavouriteSelectToastCloseBtnIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.selectFavouriteToastCloseBtnRegardlessOfPurchaseeEigibility);
    }

    static async regardlessFavouriteUnSelectToastCloseBtnIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.removeFavouriteToastCloseBtnRegardlessOfPurchaseEligibility);
    }
    static async regardlessFavouriteUnSelectToastCloseBtnIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.removeFavouriteToastCloseBtnRegardlessOfPurchaseEligibility);
    }

    static async messageinsteadoffAddToCartandSelectSizeIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.messageInsteadOffAddToCartAndSelectSize);
    }
    static async scrollDownUpTomessageinsteadoffAddToCartandSelectSize(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.messageInsteadOffAddToCartAndSelectSize);
    }
    static async scrollDownUpToMessageinsteadOffAddtocart(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.recentViewScrollUpToMessage);
    }

    //Message for Restricted Product
    static async rPMessageinsteadoffAddToCartandSelectSizeIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.messageInsteadOffAddToCartAndSelectSize);
    }
    static async hideNotifyMeButton(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.notifyMeButton);
    }
    static async hideAddToCartButton(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.plpAddToCartbtnforSpecificProduct);
    }
    static async hideSelectSizeButton(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.selectSizeButton);
    }
    static async hideProductSizeandProce(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.productPrice);
    }

    //QuickView Btn plp page
    static async quickViewButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewClpPageBtn);
    }

    static async hoverOnQuickViewButtonProductImage(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.quickViewClpPageBtn);
    }
    static async quickViewButtonClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.quickViewClpPageBtn);
    }
    static async quickViewdailogBoxOfProductvisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewDialogBtn);
    }

    //QuickView Btn for Restricted Product
    static async rPQuickViewButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewPlpPageRPBtn);
    }
    static async hoverOnQuickViewButtonProductImageRP(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.quickViewPlpPageRPBtn);
    }
    static async rPQuickViewButtonClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.quickViewPlpPageRPBtn);
    }
    static async rPQuickViewdialogBoxvisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewDialogRpBtn);
    }

    static async hideAddToCartButtonofQuickView(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.quickViewDialogrpAddToCartBtn);
    }
    static async hidePriceAndSizeButtonofQuickView(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.quickViewDialogRpPriceAndSizeBtn);
    }
    static async hideQuantityofQuickView(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.quickViewDialogRpQuantityBtn);
    }
    static async insteadofAddtocartMessageISvisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewDialogRpMessageBtn);
    }


    //Notify Me Dialog Functionality
    // Button Methods
    static async notifyMeButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.notifyMeButton);
    }
    static async notifyMeButtonHover(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.notifyMeButton);
    }
    static async notifyMeButtonClick(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.notifyMeButtonDialog);
    }
    static async notifyMeButtonEnable(page: any) {
        await ElementHelper.isElementEnabled(page, PLPLocators.notifyMeButton);
    }

    // Input Methods

    static async nameInputClick(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.notifyMeDialogNameTextBox);
    }

    static async nameInputClearAndEnterData(page: any) {
        await ElementHelper.clearAndEnterInTextField(page, PLPLocators.notifyMeDialogNameTextBox, NotifyMeTestData.RegisterPage.Name.firstName);
    }

    static async nameInputEnabled(page: any) {
        await VerificationHelpers.elementIsEnabled(page, PLPLocators.notifyMeDialogNameTextBox);
    }
    static async emailInputClick(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.notifyMeDialogEmailTextBox);
    }

    static async notifyMeEmailInputEnabled(page: any) {
        await VerificationHelpers.elementIsEnabled(page, PLPLocators.notifyMeDialogEmailTextBox);
    }


    // Text Methods
    static async notifyMeWhenAvailableHeadingVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.notifyMeDialogHeading);
    }

    static async getNotifyMeWhenAvailableHeading(page: any) {
        await ElementHelper.getTextFromElement(page, PLPLocators.notifyMeDialogHeading);
    }

    static async productBackinStockMessageVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.notifyMeDialogMessageText);
    }

    static async getProductBackinStockMessage(page: any) {
        await ElementHelper.getTextFromElement(page, PLPLocators.notifyMeDialogMessageText);
    }

    static async productNAmeTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.notifyMeDialogProductNameText);
    }

    static async getProductNameText(page: any) {
        await ElementHelper.getTextFromElement(page, PLPLocators.notifyMeDialogProductNameText);
    }


    static async nameFieldIsRequiredValidationVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.nameFieldIsRequired);
    }

    static async getNameFieldIsRequiredValidationText(page: any) {
        await ElementHelper.getTextFromElement(page, PLPLocators.nameFieldIsRequired);
    }
    static async emailFieldIsRequiredValidationVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.emailFieldIsRequired);
    }

    static async getEmailFieldIsRequiredValidationText(page: any) {
        await ElementHelper.getTextFromElement(page, PLPLocators.emailFieldIsRequired);
    }

    //Notify Me When Available Button
    static async notifyMeWhenAvailableButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.notifyMeDialogNotifyMeWhenAvailableBtn);
    }
    static async notifyMeWhenAvailableButtonHover(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.notifyMeDialogNotifyMeWhenAvailableBtn);
    }
    static async notifyMeWhenAvailableButtonClick(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.notifyMeDialogNotifyMeWhenAvailableBtn);
    }

    //Notify Me Dialog Close Button

    static async notifyMeDialogCloseButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.notifyMeDialogCloseBtn);
    }
    static async notifyMeDialogCloseButtonHover(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.notifyMeDialogCloseBtn);
    }
    static async notifyMeDialogCloseButtonClick(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.notifyMeDialogCloseBtn);
    }


    //Recent View for Eligible Products
    static async productPriceofRecentViewIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.pcaRecentViewProductPrice);
    }
    static async addToCartButtonIsVisible(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.pcaRecentViewProductAddToCartBtn);
    }
    static async selectSizeButtonIsVisible(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.pcaRecentViewProductSelectSizeBtn);
    }
    static async notifyMeButtonIsVisible(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.pcaRecentViewProductNotifyMeBtn);
    }


    //Recent View for Restricted Product
    static async hideProductPriceButtonofRecentView(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.pcaRecentViewProductPrice);
    }
    static async hideAddToCartButtonofRecentView(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.pcaRecentViewProductAddToCartBtn);
    }
    static async hideSelectSizeButtonofRecentView(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.pcaRecentViewProductSelectSizeBtn);
    }
    static async hideNotifyMeButtonofRecentView(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.pcaRecentViewProductNotifyMeBtn);
    }
    static async insteadofAddtocartMessageofRecentViewISvisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.pcaMessageinsteadoffAddToCartandSelectSize);
    }


    //for Unauthenticated user
    static async hideQuickViewBtn(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.quickViewBtnPlpPageUNu);
    }
    static async plpPageIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.allProductsTitleUNu);
    }
    static async hidePLPPageProductPrice(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.allProductsTitleUNu);
    }
    static async hidePLPPageFavouriteIcon(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.allProductsTitleUNu);
    }


    //click on first title of product
    static async clickOnFirstProductTitle(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.firstProductTitle);
    }
    static async visibilityFirstProductTitle(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.firstProductTitle);
    }

    //add to cart for acne cream
    static async clickOnAddToCartBtnOfAcneCream(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpAddToCartBtnAcneCream);
    }
    //add to cart for quickview 
    static async clickOnAddToCartBtnOfQuickView(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpAddToCartBtnQuickView);
    }
    //click on acne cream title 
    static async clickOnAcneCreamTitle(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpAcneCreamTitle);
    }
    static async clickOnCloseQuickViewButton(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.closeQuickViewButton);
    }
    static async loginToOrderBtnIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.loginToOrderBtnUNu);
    }
    static async loginToOrderBtnIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.loginToOrderBtnUNu);
    }
    static async hoverLoginToOrderBtn(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.loginToOrderBtnUNu);
    }
    static async hideAddToCartBtn(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.addtoCartBtnUNu);
    }
    static async hideSelectSizeBtn(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.selectSizeBtnUNu);
    }
    static async hideNotifyMeBtn(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.notifyMeBtnUNu);
    }
    static async loginDialogBoxIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.loginDialogBoxUNu);
        await page.waitForTimeout(3000);
    }

    static async scrollDownPageUptoLoadMoreBtn(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.loadMoreBtnUNu);
    }
    static async loadMoreBtnIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.loadMoreBtnUNu);
    }
    static async loadMoreBtnIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.loadMoreBtnUNu);
    }
    static async verifyProductCountBeforeClickLoadMore(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.productscountBeforeClickLoadMoreUNu);
    }
    static async verifyProductCountAfterClickLoadMore(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.productscountAfterClickLoadMoreUNu);
    }

    static async verifyProductImageIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.productImageUNu);
    }
    static async productImageUNuHover(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.productImageUNu);
    }
    static async verifyProductImageIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.productImageUNu);
    }
    static async pDPPageIsVisible(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.pDPRedirectUNu);
    }

    static async pcaSkinHomeLogoHover(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.pCASkinHomeLogo);
    }

    //Recenet Viewd
    static async hidePLPPageProductPriceRecentView(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.allProductsTitleUNu);
    }
    static async loginToOrderBtnforRecentViewedIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentViewProductLogintoOrderBtnUNu);
    }
    static async hideAddToCartBtnforRecentviewed(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.recentViewProductAddtocartBtnUNu);
    }
    static async hideSelectSizeBtnforRecentviewed(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.recentViewProductSelectSizeBtnUNu);
    }
    static async hideNotifyMeBtnforRecentviewed(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.recentViewProductNotifyMeBtnUNu);
    }
    static async loginToOrderBtnforRecentViewedIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.recentViewProductLoginDialogBoxUNu);
    }
    static async scrollDownUptoProductCard(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.recentViewProductLogintoOrderBtnUNu);
    }
    static async scrollDownUptoRecentViewProductCard(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.recentViewAcneCreamAddToCart);
    }

    //Recenet Viewd Unauthenticated User
    static async recentViewProductPriceUNuHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.recentViewProductPriceUNu);
    }
    static async recentViewProductLogintoOrderBtnUNuIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentViewProductLogintoOrderBtnUNu);
    }
    // static async recentViewProductLogintoOrderBtnUNuIsClickable(page: any) {
    //     await ElementHelper.clickElement(page, PLPLocators.recentViewProductLoginDialogBoxUNu);
    // }
    static async recentViewProductLogintoOrderBtnUNuIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.recentViewProductLogintoOrderBtnUNu);
    }
    static async recentViewProductAddtocartBtnUNuHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.recentViewProductAddtocartBtnUNu);
    }
    static async recentViewProductSelectSizeBtnUNuHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.recentViewProductSelectSizeBtnUNu);
    }
    static async recentViewProductNotifyMeBtnUNuHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.recentViewProductNotifyMeBtnUNu);
    }
    static async recentViewProductLoginDialogBoxUNuIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.recentViewProductLoginDialogBoxUNu);
    }
    static async recentViewProductLoginDialogBoxUNuIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentViewProductLoginDialogBoxUNu);
    }
    //Click on Shop on header Navigation
    static async clickOnShopMenuUNuVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.clickOnShopMenuUNu);
    }
    static async clickOnShopMenuUNuIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.clickOnShopMenuUNu);
    }
    static async productCardUNuVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.productCardUNu);
    }
    static async productCardUNuHover(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.productCardUNu);
    }

    //Left side Filters for Unauthenticated user

    static async filtersProductsCategoryHeadingUNuIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsCategoryHeadingUNu);
    }
    static async filtersProductsCategoryHeadingUNuIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsAllProductsUNu);
    }
    //Antioxidants
    static async filtersProductsAntioxidantsUNuIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsAntioxidantsUNu);
    }
    static async filtersProductsAntioxidantsUNuIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filterAppliedAntioxidants);
    }
    static async resetFilterWithCloseBtnIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.resetFilterWithCloseBtn);
    }
    static async resetFilterWithCloseBtnIsClickable(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.filterAppliedAntioxidants);
    }

    //Clear all button
    static async clearAllFiltersBtnOnTopIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.clearAllFiltersBtnOnTop);
    }
    static async clearAllFiltersBtnOnTopsClickable(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.clearAllFiltersBtnOnTop);
    }
    static async visibilityAcneCreamProduct(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.acneCreamProduct);
    }
    static async visibilityblemishControlBarProduct(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.blemishControlBarProduct);
    }
    static async scrollblemishControlBarProduct(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.blemishControlBarProduct);
    }
    static async clickOnAcneCreamProduct(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.acneCreamProduct);
    }
    static async visibilityActiveBroadSpectrumSPF45Product(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.activeBroadSpectrumSPF45Product);
    }
    static async scrollctiveBroadSpectrumSPF45Product(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.activeBroadSpectrumSPF45Product);
    }

    static async visibilityStudentOnlyFilterApplied(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.studentOnlyAppliedFilter);
    }
    static async visibilityPeelsFilterApplied(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.peelsAppliedFilter);
    }
    static async visibilityNormalFilterApplied(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.normalAppliedFilter);
    }
    static async visibilityMDPeelCCl3(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.MDPeelCCl3Product);
    }
    static async visibility4RetinolPeel(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.RetinolPeelProduct);
    }
    static async clickMDPeelCCl3Product(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.MDPeelCCl3Product);
    }
    static async clickRetinolPeelProduct(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.RetinolPeelProduct);
    }
    static async visibilityQuickViewAddToCartBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.studentOnlyQuickViewAddToCartBtn);
    }
    static async clickOnQuickViewAddToCartBtn(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.studentOnlyQuickViewAddToCartBtn);
        await page.waitForTimeout(3000);
    }
    static async visibilityQuickViewCloseBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.studentQuickViewCloseBtn);
    }
    static async clickOnQuickViewCloseBtn(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.studentQuickViewCloseBtn);
    }
    static async visibilityQuickViewProductImage(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewProductImage);
    }
    static async visibilityQuickViewProductName(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewProductName);
    }
    static async visibilityQuickViewProductSKU(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewSKU);
    }
    static async visibilityQuickViewProductRating(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewRating);
    }
    static async visibilityQuickViewProductPrice(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewProductPrice);
    }
    static async visibilityQuickViewProductSubscriptionLink(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewProductSubscriptionLink);
    }
    static async visibilityQuickViewProductQTYSelector(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewQtySelector);
    }
    static async visibilityQuickViewProductDescription(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.quickViewProductDescription);
    }
    static async clickIncreaseButtonMultipleTimes(page: any, count: number) {
        if (count <= 0) {
            throw new Error("Count must be greater than 0");
        }
        for (let i = 0; i < count; i++) {
            await ElementHelper.clickElement(page, PLPLocators.quickViewIncreaseButton);
        }
    }
    static async scrollToRecentlyViewedSection(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.recentlyViewedProductsSection);
    }
    static async visibilityRecentlyViewedAddToCartBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentlyViewedAddToCartBtn);
    }
    static async hiddenRecentlyViewedAddToCartBtn(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.recentlyViewedAddToCartBtn);
    }
    static async visibilityRecentlyViewedPrice(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentlyViewedProductPrice);
    }
    static async hiddenRecentlyViewedPrice(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.recentlyViewedProductPrice);
    }
    static async clickOnpCAPeelwithHydroquinoneResorcinolProduct(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.pCAPeelwithHydroquinoneResorcinolProduct);
    }
    static async scrollTopCAPeelwithHydroquinoneResorcinolProduct(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.pCAPeelwithHydroquinoneResorcinolProduct);
    }
    static async visibilityRecentlyViewedSelectSize(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentlyViewedSelectSizeBtn);
    }
    static async hiddenRecentlyViewedSelectSize(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentlyViewedSelectSizeBtn);
    }
    static async visibilityRestrictionMessage(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentlyViewedRestrictionMsg);
    }

    static async clickAddToCartMultipleTimesRecentlyViewed(page: any, count: number) {
        if (count <= 0) {
            throw new Error("Count must be greater than 0");
        }
        for (let i = 1; i < count; i++) {
            await page.waitForTimeout(2000)
            await ElementHelper.clickElement(page, PLPLocators.recentlyViewedAddToCartBtn);
        }
    }
    static async visibilityBreadCrumbTitle(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpBreadCrumbTitle);
    }
    static async visibilityPlpAcneCreamPrice(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpAcneCreamPriceWrapper);
    }
    static async visibilityPlpAcneCreamFavouriteBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpAcneCreamFavouriteBtn);
    }
    static async visibilityPlpAcneCreamAddToCartBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpAcneCreamAddToCartBtn);
    }
    static async clickOnPlpAcneCreamAddToCartBtn(page: any, count: number) {
        if (count <= 0) {
            throw new Error("Count must be greater than 0");
        }
        for (let i = 0; i < count; i++) {
            await page.waitForTimeout(3000);
            await ElementHelper.clickElement(page, PLPLocators.plpAcneCreamAddToCartBtn);
        }
    }
    static async visibilityPlpCreamyCleanserSelectSizeBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpCreamyCleanserSelectSizeBtn);
    }
    static async hiddenPlpMDPeelCCl3PriceWrapper(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.plpMDPeelCCl3PriceWrapper);
    }
    static async hiddenPlpMDPeelCCl3AddToCart(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.plpMDPeelCCl3AddToCartBtn);
    }
    static async visibilityPlpMDPeelCCl3FavouriteBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpMDPeelCCl3FavouriteBtn);
    }
    static async visibilityPlpMDPeelCCl3RestrictionMsg(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpRestrictionMsg);
    }
    static async visibilityFavouriteOutlineBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpFavouriteOutlineBtn);
    }
    static async clickFavouriteOutlineBtn(page: any) {
        await page.waitForTimeout(2000)
        await ElementHelper.clickElement(page, PLPLocators.plpFavouriteOutlineBtn);
    }
    static async visibilityFavouriteFilledBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpFavouriteFilledBtn);
    }
    static async clickFavouriteFilledBtn(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpFavouriteFilledBtn);
    }
    static async visibilityAddedToFavouriteToast(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpAddedToFavouriteToast);
    }
    static async visibilityRemovedFromFavouriteToast(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpRemovedFromFavouriteToast);
    }

    static async hoverMDPeelCCL3Product(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.mdPeelCCL3Img);
    }
    static async visibilityBestSellerSection(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.bestSellerSection);
    }
    static async scrollToBestSellerSection(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.bestSellerSection);
    }
    static async visibilityAcneCreamInBestSeller(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.bestSellerAcneCreamProduct);
    }
    static async visibilityBestSellerAcneCreamPrice(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.bestSellerAcneCreamPrice);
    }
    static async visibilityBestSellerAcneCreamAddToCartBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.bestSellerAcneCreamAddToCartBtn);
    }
    static async visibilityBestSellerCAndEAdvancedSelectSizeBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.bestSellerCAndEAdvancedSelectSizeBtn);
    }
    static async clickBestSellerAddToCartMultipleTimes(page: any, count: number) {
        if (count <= 0) {
            throw new Error("Count must be greater than 0");
        }
        for (let i = 1; i < count; i++) {
            await page.waitForTimeout(5000);
            await ElementHelper.clickElement(page, PLPLocators.bestSellerAcneCreamAddToCartBtn);
        }
    }
    static async visibilityBestSellerNoPeelPeelProduct(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.bestSellerNoPeelPeelProduct);
    }
    static async visibilityBestSellerNoPeelPeelProductPrice(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.bestSellerNoPeelPeelPrice);
    }
    static async visibilityBestSellerNoPeelPeelProductAddToCartBtn(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.bestSellerNoPeelPeelAddToCartBtn);
    }
    static async visibilityBestSellerNoPeelPeelProductSelectSizeBtn(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.bestSellerNoPeelPeelSelectSizeBtn);
    }
    static async visibilityBestSellerNoPeelPeelProductRestrictionMsg(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.bestSellerNoPeelPeelRestrictionMsg);
    }

    static async visibilityCanNotAddProductAndCourseInOneCartToast(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.canNotAddProductAndCourseToast);
    }

    static async hiddenQuickViewProductPrice(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.quickViewProductPrice);
    }
    static async hiddenQuickViewProductQTYSelector(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.quickViewQtySelector);
    }
    static async visibilityMDPeelCCl3RecentlyViewed(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentlyViewedProductCard);
    }

    static async visibilityplpAcneGelProductSelectSizeBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpAcneGelProductSelectSizeBtn)
    }
    static async visibilityRecentlyViewedAcneCreamProduct(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentlyViewedAcneCreamProduct)
    }
    static async visibilityRecentlyViewedAcneCreamProductPrice(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentlyViewedAcneCreamPrice)
    }
    static async visibilityRecentlyViewedAcneCreamProductAddToCartBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentlyViewedAcneCreamAddToCartButton)
    }
    static async scrollToAcneGellOnPLP(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.plpAcneGelProduct)
    }
    static async clickOnAcneGellOnPLP(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpAcneGelProduct)
    }
    static async visibilityRecentlyViewedAcneGelwithOmniSomeProduct(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentlyViewedAcneGelwithOmniSomeProduct)
    }
    static async visibilityRecentlyViewedAcneGelwithOmniSomeSelectSizeBtn(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.recentlyViewedAcneGelwithOmniSomeSelectSizeBtn)
    }
    static async clickProductAddToCartMultipleTimesRecentlyViewed(page: any, count: number) {
        if (count <= 0) {
            throw new Error("Count must be greater than 0");
        }
        for (let i = 0; i < count; i++) {
            await page.waitForTimeout(3000);
            await ElementHelper.clickElement(page, PLPLocators.recentlyViewedAcneCreamAddToCartButton);
        }
    }
    static async hiddenQuickViewDialogBox(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.quickViewDailog);
    }
    static async clickOnOutSideTheQuickViewDialogBox(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.pcaSkinLogo)
    }
    static async clickQuickViewProductImage(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.quickViewProductImage);
    }
    static async clickOnQuickViewProductRating(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.quickViewRating);
    }
    static async clickOnQuickViewProductSubscriptionLink(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.quickViewProductSubscriptionLink);
    }
    static async verifyAToZOptionIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpSortDropDownPriceAToZ);
    }
    static async verifyZToAOptionIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpSortDropDownPriceZToA);
    }
    static async clickOnFirstProductImage(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.firstProductImage);
    }
    static async clickOnFirstProductRating(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.firstProductRating);
    }

    static async visibilitySkinTypeCombination(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinTypeCombination);
    }
    static async visibilitySkinTypeDry(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinTypeDry);
    }
    static async visibilitySkinTypeNormal(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinTypeNormal);
    }
    static async visibilitySkinTypeOily(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinTypeOily);
    }
    static async visibilitySkinTypeSensitive(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinTypeSensitive);
    }
    static async scrollToSkinTypeSensitive(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.skinTypeSensitive);
    }
    static async visibilitySkinTypeCombinationCount(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinTypeCombinationCount);
    }
    static async visibilitySkinTypeDryCount(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinTypeDryCount);
    }
    static async visibilitySkinTypeNormalCount(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinTypeNormalCount);
    }
    static async visibilitySkinTypeOilyCount(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinTypeOilyCount);
    }
    static async visibilitySkinTypeSensitiveCount(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinTypeSensitiveCount);
    }
    static async clickSkinTypeDownArrow(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.skinTypes);
    }
    static async verifyfiltersProductsBroadSpectrumSPFIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsBroadSpectrumSPFUNu)
    }
    static async verifyfiltersProductsCleansersAndTonersIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsCleansersAndTonersUNu)
    }
    static async verifyfiltersProductsEyeNeckLipIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsEyeNeckLipUNu)
    }
    static async verifyfiltersProductsMasksIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsMasksUNu)
    }
    static async verifyfiltersProductsShowAllCategoriesIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsShowAllCategoriesUNu)
    }
    static async verifyfiltersProductsAllProductsIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsAllProductsUNu)
    }
    static async visibilityOfBreadcrumb(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.breadcrumb);
    }

    static async visibilityOfAllProductsBreadcrumb(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.allProductsBreadcrumb);
    }

    static async clickOnProductCategoryDownwardArrow(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.productCategoryDownwardArrow);
    }

    static async VisibilityOfProductCategoryDownwardArrow(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.productCategoryDownwardArrow);
    }

    static async clickOnProductCategoryUpwardArrow(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.productCategoryUpward);
    }

    static async VisibilityOfProductCategoryUpwardArrow(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.productCategoryUpward);
    }

    static async clickOnAntioxidantsCategory(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.antioxidantsCategory);
    }

    static async VisibilityOfAntioxidantsCategory(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.antioxidantsCategory);
    }

    static async visibilityOfantioxidantsBreadcrumb(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.antioxidantsBreadcrumb);
    }

    static async clickOnHomeInBreadcrumb(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.homeInBreadCrumb);
    }

    static async clickOnAllProductsInBreadcrumb(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.allProductInBreadcrumb);
    }

    static async visibilityOfantioxidantsTitle(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.antioxidantsTitle);
    }

    static async visibilityOfBestsellerLeftSideMenu(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.bestseller);
    }

    static async visibilityOfProductCategoryLeftSideMenu(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.productCategory);
    }

    static async visibilityOfProductTypesLeftSideMenu(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.productTypes);
    }

    static async visibilityOfSkinConcernLeftSideMenu(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinConcern);
    }

    static async visibilityOfSkinTypeLeftSideMenu(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinType);
    }

    static async verifyBoarderLineOneCSSProperty(page: any, property: string, value: string) {
        await VerificationHelpers.elementHasCSS(page, PLPLocators.boarderLine1, property, value)
    }

    static async verifyBoarderLineTwoCSSProperty(page: any, property: string, value: string) {
        await VerificationHelpers.elementHasCSS(page, PLPLocators.boarderLine2, property, value)
    }

    static async verifyBoarderLineThirdCSSProperty(page: any, property: string, value: string) {
        await VerificationHelpers.elementHasCSS(page, PLPLocators.boarderLine3, property, value)
    }

    static async verifyBoarderLineFourthCSSProperty(page: any, property: string, value: string) {
        await VerificationHelpers.elementHasCSS(page, PLPLocators.boarderLine4, property, value)
    }

    static async verifyBoarderLineFifthCSSProperty(page: any, property: string, value: string) {
        await VerificationHelpers.elementHasCSS(page, PLPLocators.boarderLine5, property, value)
    }
    static async verifyNameOfProductAcneCreameVisible(page: any) {
        await page.waitForSelector(PLPLocators.plpProductNameAcneCreame)
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductNameAcneCreame);
    }
    static async verifyPriceOfProductAcneCreameVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductPriceAcneCreame);
    }
    static async verifyAddToCartbtnAcneCreameVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductAddToCartAcneCreame);
    }

    static async verifyFavoriteBtbAcneCreameVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductFavoriteBtnAcneCreame);
    }
    static async clickFavoriteBtbAcneCreame(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpProductFavoriteBtnAcneCreame);
    }
    static async verifyNameOfProductCreamyCleanserVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductNameCreamyCleanser);
    }
    static async verifySelectSizeBtnCreamyCleanserVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductSelectSizeCreamyCleanser);
    }
    static async verifyProductsTabCategoryVisible(page: any) {
        await page.waitForSelector(PLPLocators.plpProductTabCategory);
        await page.waitForSelector(PLPLocators.plpProductTabCategory); await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductTabCategory);
    }
    static async verifyCourseTabCategoryVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductTabCategory);
    }

    static async verifyNameOfProductRetinolPeelVisible(page: any) {
        await page.waitForSelector(PLPLocators.plpProductNameRetinolPeel);
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductNameRetinolPeel);
    }

    static async verifyFavoriteBtbRetinolPeelVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductFavoritesBtnRetinolPeel);
    }
    static async clickFavoriteBtbRetinolPeel(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpProductFavoritesBtnRetinolPeel);
    }

    static async verifyMessageForRestrictedProductsRetinolPeel(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductMessageUnderFavoriteRetinolPeel);
    }
    static async verifyNameOfProductIntensiveAgeVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductNameIntensiveAgeRefiningTreatment);
    }

    static async verifyFavoriteBtbIntensiveAgeVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductFavoriteBtnIntensiveAgeRefiningTreatmente);
    }
    static async clickFavoriteBtbIntensiveAge(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpProductFavoriteBtnIntensiveAgeRefiningTreatmente);
    }

    static async HoverOnProductAcneCreameImage(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.plpProductHOverOverPictureQuickView);
    }
    static async verifyAcneCreamQuickViewButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductQuickViewBtn);
    }
    static async clickOnAcneCreamQuickViewButton(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpProductQuickViewBtn);
    }
    static async verifyAcneCreamQuickViewDialogBox(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductQuickViewModul);
    }
    static async verifyAcneCreamProductNameQuickViewDialogBox(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductClickQuickViewBtnProductName);
    }


    static async HoverOnProductRetinoPeelImage(page: any) {
        await ElementHelper.hoverOverMenu(page, PLPLocators.plpProductNameRetinolPeel);
    }
    static async verifyRetinoPeelQuickViewButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductRetinolPeelQuickViewBtn);
    }
    static async clickOnRetinolPeelQuickViewButton(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpProductRetinolPeelQuickViewBtn);
    }
    static async verifyRetinolPeelQuickViewDialogBox(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductQuickViewModul);
    }
    static async verifyRetinolPeelProductNameQuickViewDialogBox(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductClickQuickViewBtnRetinolPeelName);
    }
    static async verifyRetinolPeelRestrictedMessageQuickViewDialogBox(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductMessageUnderFavoriteRetinolPeel);
    }
    static async verifyPriceOfProductRetinolPeelIsHidden(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.plpProductRetinolPeelPriceIsHidden);
    }
    static async verifyAddToCartBtnOfProductRetinolPeelIsHidden(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.plpProductRetinolPeelNotifyBtnIsHidden);
    }
    static async verifyNotifyMeBtnOfProductRetinolPeelIsHidden(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.plpProductRetinolPeelNotifyBtnIsHidden);
    }
    static async verifySelectSizeBtnProductRetinolPeelIsHidden(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.plpProductRetinolPeelSelectSizeIsHidden);
    }

    static async verifyBestSellerBadgeAcneCream(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductBestSellerBadgeAcneCream);
    }
    static async verifyNameOfProductHyaluronicAcidMaskVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductNameForNotifyMe);
    }
    static async verifyNotifyMeButtonHyaluronicAcidMaskVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductNotifyMeBtn);
    }
    static async verifyBestSellerBadgeHyaluronicAcidMaskVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductBestSellerBadgeHyaluronicAcid);
    }

    static async verifyNameOfProductAcneGelwithOmniSomeVisible(page: any) {
        await page.waitForSelector(PLPLocators.plpProductNameAcneGelWithOmniSome);
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductNameAcneGelWithOmniSome);
    }
    static async clickOnAcneGelwithOmniSomeFavoritebtn(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpProductAddToFavoriteAcneGelWithOmniSome);
    }
    static async verifyAcneGelwithOmniSelectSizeBtnVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductSelectSizeButtonAcneGelWithOmniSome);
    }
    static async verifyAcneGelwithOmniRemoveFromFavoriteBtnVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductRemoveFromFavoriteAcneGelWithOmniSome);
    }
    static async clickAcneGelwithOmniRemoveFromFavorite(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpProductRemoveFromFavoriteAcneGelWithOmniSome);
    }

    static async verifyCleanSkinNameProductIsPresent(page: any) {
        await page.waitForSelector(PLPLocators.plpProductNameClearSkin);
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductNameClearSkin);
    }
    static async verifyCleanSkinNameSelectSizeIsPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductSelectSizeClearSkin);
    }
    static async verifyBestSellerBadgeCleanSkinIsPresent(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductBestSellerBadgeClearSkin);
    }
    static async ClickOnQuickViewButton(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.quickViewButton);
    }
    static async visibilityDualActionRednessReliefFavBtnOutline(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpDualActionRednessReliefFavBtnOutline);
    }
    static async visibilityDualActionRednessReliefFavBtnFilled(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpDualActionRednessReliefFavBtnFilled);
    }
    static async clickDualActionRednessReliefFavBtnOutline(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpDualActionRednessReliefFavBtnOutline);
    }
    static async clickDualActionRednessReliefFavBtnFilled(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpDualActionRednessReliefFavBtnFilled);
    }

    static async visibilityPigmentCorrectPeelFavBtnOutline(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpPigmentCorrectPeelFavBtnOutline);
    }
    static async visibilityPigmentCorrectPeelFavBtnFilled(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.plpPigmentCorrectPeelFavBtnFilled);
    }
    static async clickPigmentCorrectPeelFavBtnOutline(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpPigmentCorrectPeelFavBtnOutline);
    }
    static async clickPigmentCorrectPeelFavBtnFilled(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.plpPigmentCorrectPeelFavBtnFilled);
    }
    static async verifyProductCategorItemIsDisplayed(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.productCategoryItem)
    }
    static async verifybestsellerItemIsDisplayed(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.bestsellerItem)
    }
    static async verifyproductTypesItemIsDisplayed(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.productTypesItem)
    }
    static async verifyskinConcernItemIsDisplayed(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinConcernItem)
    }
    static async verifyskinTypeItemIsDisplayed(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.skinTypeItem)
    }
    static async verifyfiltersBestSellerupArrow(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersBestSellerupArrowUNu)
    }
    static async clickfiltersBestSellerupArrow(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersBestSellerupArrowUNu)
    }
    static async verifyfiltersBestSellerDownwardArrow(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersBestSellerdownArrowUNu)
    }
    static async clickfiltersBestSellerDownwardArrow(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersBestSellerdownArrowUNu)
    }

    static async verifyFiltersProductsTypeupArrow(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsTypeupArrowUNu)
    }
    static async clickFiltersProductsTypeupArrow(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsTypeupArrowUNu)
    }
    static async verifyFiltersProductsTypedownArrow(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsTypedownArrowUNu)
    }
    static async clickFiltersProductsTypedownArrow(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsTypedownArrowUNu)
    }

    static async verifyFiltersSkinConcerndownArrow(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersSkinConcerndownArrowUNu)
    }
    static async clickFiltersSkinConcerndownArrow(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersSkinConcerndownArrowUNu)
    }
    static async verifyFiltersSkinConcernUpArrow(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersSkinConcernupArrowUNu)
    }
    static async clickFiltersSkinConcernUpArrow(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersSkinConcernupArrowUNu)
    }

    static async verifyFiltersSkinTypedownArrow(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersSkinTypedownArrowUNu)
    }
    static async clickFiltersSkinTypedownArrow(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersSkinTypedownArrowUNu)
    }
    static async verifyFiltersSkinTypeUpArrow(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersSkinTypeupArrowUNu)
    }
    static async clickFiltersSkinTypeUpArrow(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersSkinTypeupArrowUNu)
    }
    static async verifyfiltersProductsMoisturizersIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsMoisturizers);
    }
    static async verifyfiltersProductsRetinolsIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsRetinols);
    }
    static async verifyfiltersProductsSerumsIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsSerums);
    }
    static async verifyfiltersProductsSolutionSetsIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsSolutionSets);
    }
    static async verifyfiltersProductsPeelsIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsPeels);
    }
    static async verifyfiltersProductsPeelAlternativeIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsPeelAlternative);
    }
    static async verifyfiltersProductsRetinoidTreatmentsIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsRetinoidTreatments);
    }
    static async verifyfiltersProductsTherapeuticMasksIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsTherapeuticMasks);
    }
    static async verifyfiltersProductsTreatmentEnhancementsIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsTreatmentEnhancements);
    }
    static async verifyfiltersProductsBackbarSizesIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsBackbarSizes);
    }
    static async verifyfiltersProductsBackbarToolsIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsBackbarTools);
    }
    static async verifyfiltersProductsBodyTreatmentsIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsBodyTreatments);
    }
    static async verifyfiltersProductsExfoliantsIsDisplay(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsExfoliants);
    }
    static async clickfiltersProductsShowAllCategoriesIsDisplay(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsShowAllCategoriesUNu)
    }
    static async clickfiltersProductsShowLessCategoriesIsDisplay(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsShowLessCategoriesUNu)
    }
    static async verifyBestsellerCountIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.bestsellerCount)
    }
    static async verifyTextOfBestsellerCountIsVisible(page: any) {
        const count = await ElementHelper.getElementText(page, PLPLocators.bestsellerCount)
        await VerificationHelpers.elementHasText(page, PLPLocators.bestsellerCount, count)
    }
    static async verifyBestsellerCheckboxIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersBestSellerCheckBoxesUNu)
    }
    static async clickBestsellerCheckboxIsVisible(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersBestSellerCheckBoxesUNu)
    }
    static async verifyBestsellerCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, PLPLocators.filtersBestSellerCheckBoxesUNu)
    }
    static async verifyBestsellerFilterIsApplied(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filterAppliedBestSeller)
    }
    static async verifyBestsellerBadgeIsDisplayed(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filterAppliedBestSeller)
    }
    static async verifyBestsellerFilterIsNotApplied(page: any) {
        await ElementHelper.isElementInvisible(page, PLPLocators.filterAppliedBestSeller)
    }
    static async verifyFilterCountIsDisplayed(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filterCount)
    }
    static async verifyFilterCountNumberIsDisplayed(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, PLPLocators.filterCount, text)
    }
    static async verifyProductTypeFilterBackbar(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.productTypeBackbar)
    }
    static async verifyProductTypeFilterSample(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.productTypeSample)
    }
    static async verifyProductTypeFilterRetail(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.productTypeRetail)
    }
    static async verifyProductTypeFilterBackbarCount(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.backbarCount)
    }
    static async verifyProductTypeFilterSampleCount(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.sampleCount)
    }
    static async verifyProductTypeFilterRetailCount(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.retailCount)
    }
    static async verifyProductTypeFilterBackbarCountNumber(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, PLPLocators.backbarCount, text)
    }
    static async verifyProductTypeFilterSampleCountNumber(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, PLPLocators.sampleCount, text)
    }
    static async verifyProductTypeFilterRetailCountNumber(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, PLPLocators.retailCount, text)
    }

    static async handleLoadMoreButton(page: any): Promise<void> {
        try {
            // Check if the "Load More" button is visible
            const isVisible = await page.isVisible(
                PLPLocators.loadMoreBtnUNu
            );
            if (isVisible) {
                console.log("Load More button is visible. Clicking...");
                await page.click(PLPLocators.loadMoreBtnUNu);
            } else {
                console.log("Load More button is not visible.");
            }
        } catch (error) {
            throw console.error("An error occurred while handling the Load More button:", error);
        }
    }

    static async scrollDownPageUptoproductscountBeforeClickLoadMoreSearching(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.productscountBeforeClickLoadMoreSearching);
    }
    static async scrollDownPageUptoloadMoreBtnUNu(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.loadMoreBtnUNu);
    }

    static async scrollDownUpTobestSellersloginToViewPrices(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.bestSellersloginToViewPrices);
    }
    static async bestSellersloginToViewPricesIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.bestSellersloginToViewPrices);
    }
    static async bestSellersloginToViewPricesIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.bestSellersloginToViewPrices);
    }
    static async bestSellersloginDialogBoxIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.bestSellersloginDialogBox);
    }
    static async scrollDownUpTobestSellersTitle(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.bestSellersTitle);
    }
    static async bestSellerAcneCreamPriceSearchingIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.bestSellerAcneCreamPriceSearching);
    }
    static async scrollDownUpTobestSellerLoginToOrderBtn(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.bestSellerLoginToOrderBtn);
    }
    static async bestSellerLoginToOrderBtnIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.bestSellerLoginToOrderBtn);
    }
    static async bestSellerLoginToOrderBtnIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.bestSellerLoginToOrderBtn);
    }
    static async scrollDownUpTobestSellerAcneCreamProduct(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.bestSellerAcneCreamProduct);
    }
    static async bestSellerAcneCreamAddToCartBtnSearchingIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.bestSellerAcneCreamAddToCartBtnSearching);
    }
    static async bestSellerCAndEAdvancedSelectSizeBtnSearchingIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, PLPLocators.bestSellerCAndEAdvancedSelectSizeBtnSearching);
    }

    //left side filter

    //Product Category
    static async filtersProductsCategoryHeadingIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsCategoryHeadingUNu);
    }
    static async leftHandFilterIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.leftHandFilter);
    }
    static async filtersProductsCategoryHeadingIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsCategoryHeadingUNu);
    }
    static async filtersProductsAllProductsBtnIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsAllProductsUNu);
    }
    //Antioxidant
    static async filtersProductsAntioxidantsIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsAntioxidantsUNu);
    }
    static async filtersProductsAntioxidantsIsclickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsAntioxidantsUNu);
    }
    static async filtersProductsAntioxidantsIsfocused(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filtersProductsAntioxidantsUNu);
    }
    static async filterAppliedAntioxidantsIsVisible(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filterAppliedAntioxidants);
    }

    static async handleAntioxidantFilterApplied(page: any): Promise<void> {
        try {
            // Check if the "Filter Applied Antioxidants" tag is visible
            const isFilterVisible = await page.isVisible(PLPLocators.filterAppliedAntioxidants);

            if (isFilterVisible) {
                console.log("Applied Filter Tag is visible...");

                // Perform any additional validation if needed
                const filterText = await page.textContent(PLPLocators.filterAppliedAntioxidants);
                if (filterText) {
                    console.log(`Filter verification successful: ${filterText}`);
                } else {
                    console.error("Filter tag is visible, but no text content found for verification.");
                }
            } else {
                console.log("Error Message: 'No results for the applied filter.'");
            }
        } catch (error) {
            console.error("An error occurred while handling the filter application:", error);
            throw new Error(`Error handling the filter application: ${error.message}`);
        }
    }




    //Broad Spectrum SPF
    static async filtersProductsBroadSpectrumSPFUNuIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsBroadSpectrumSPFUNu);
    }
    static async filtersProductsBroadSpectrumSPFUNuIsclickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsBroadSpectrumSPFUNu);
    }
    static async filtersProductsBroadSpectrumSPFUNuSPFIsfocused(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filtersProductsBroadSpectrumSPFUNu);
    }
    static async filterAppliedBroadSpectrumSPFIsVisible(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filterAppliedBroadSpectrumSPF);
    }

    //Cleansers And Toners
    static async filtersProductsCleansersAndTonersUNuIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsCleansersAndTonersUNu);
    }
    static async filtersProductsCleansersAndTonersUNuIsclickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsCleansersAndTonersUNu);
    }
    static async filtersProductsCleansersAndTonersUNuIsfocused(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filtersProductsCleansersAndTonersUNu);
    }
    static async filterAppliedCleansersAndTonersIsVisible(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filterAppliedCleansersAndToners);
    }

    // Eye Neck and Lip
    static async filtersProductsEyeNeckLipUNuIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsEyeNeckLipUNu);
    }
    static async filtersProductsEyeNeckLipUNuIsclickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsEyeNeckLipUNu);
    }
    static async filtersProductsEyeNeckLipUNuIsfocused(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filtersProductsEyeNeckLipUNu);
    }
    static async filterAppliedEyeNeckLipIsVisible(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filterAppliedEyeNeckLip);
    }

    //Mask
    static async filtersProductsMasksUNuIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsMasksUNu);
    }
    static async filtersProductsMasksUNuIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsMasksUNu);
    }
    static async filtersProductsMasksUNuIsfocused(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filtersProductsMasksUNu);
    }
    static async filterAppliedMasksIsVisible(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filterAppliedMasks);
    }
    //Moisturizers
    static async filtersProductsMoisturizersIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsMoisturizers);
    }
    static async filtersProductsMoisturizersIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsMoisturizers);
    }
    static async filtersProductsMoisturizersIsfocused(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filtersProductsMoisturizers);
    }
    static async filterAppliedMoisturizersIsVisible(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filterAppliedMoisturizers);
    }
    static async filtersProductsMoisturizersIsScroll(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.filtersProductsMoisturizers);
    }

    //Retinols
    static async filtersProductsRetinolsIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsRetinols);
    }
    static async filtersProductsRetinolsIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsRetinols);
    }
    static async filtersProductsRetinolssIsfocused(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filtersProductsRetinols);
    }
    static async filterAppliedRetinolsIsVisible(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filterAppliedRetinols);
    }
    static async filtersProductsRetinolsIsScroll(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.filtersProductsRetinols);
    }

    //Serums
    static async filtersProductsSerumsIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsSerums);
    }
    static async filtersProductsSerumsIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsSerums);
    }
    static async filtersProductsSerumsIsfocused(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filtersProductsSerums);
    }
    static async filterAppliedSerumsIsVisible(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filterAppliedSerums);
    }
    static async filtersProductsSerumslsIsScroll(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.filtersProductsSerums);
    }

    //Solution Sets
    static async filtersProductsSolutionSetsIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsSolutionSets);
    }
    static async filtersProductsSolutionSetsIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsSolutionSets);
    }
    static async filtersProductsSolutionSetsIsfocused(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filtersProductsSolutionSets);
    }
    static async filterAppliedSolutionSetsIsVisible(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filterAppliedSolutionSets);
    }
    static async filtersProductsSolutionSetslsIsScroll(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.filtersProductsSolutionSets);
    }

    //Peels
    static async filtersProductsPeelsIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsPeels);
    }
    static async filtersProductsPeelsIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsPeels);
    }
    static async filtersProductsPeelsIsfocused(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filtersProductsPeels);
    }
    static async filterAppliedPeelsIsVisible(page: any) {
        await VerificationHelpers.elementIsFocused(page, PLPLocators.filterAppliedPeels);
    }
    static async filtersProductsPeelslsIsScroll(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.filtersProductsPeels);
    }

    //Reset Filter useing Close Button for all menu
    static async resetFilterWithCloseBtnForAllIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.resetFilterWithCloseBtn);
    }
    static async resetFilterWithCloseBtnForAllIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.resetFilterWithCloseBtn);
    }
    //Reset Filter useing Clear Button for all menu
    static async clearAllFiltersBtnOnTopForAllIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.clearAllFiltersBtnOnTop);
    }
    static async clearAllFiltersBtnOnTopForAllIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.clearAllFiltersBtnOnTop);
    }
    // Show all categories
    static async filtersProductsShowAllCategoriesUNuIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsShowAllCategoriesUNu);
    }
    static async filtersProductsShowAllCategoriesUNuIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsShowAllCategoriesUNu);
    }
    static async filtersProductsShowAllCategoriesUNuIsScroll(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.filtersProductsShowAllCategoriesUNu);
    }
    // Show Less categories
    static async filtersProductsShowLessCategoriesUNuIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, PLPLocators.filtersProductsShowLessCategoriesUNu);
    }
    static async filtersProductsShowLessCategoriesUNuIsClickable(page: any) {
        await ElementHelper.clickElement(page, PLPLocators.filtersProductsShowLessCategoriesUNu);
    }
    static async filtersProductsShowLessCategoriesUNuIsScroll(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.filtersProductsShowLessCategoriesUNu);
    }
    static async filtersProductsMasksUNuIsScroll(page: any) {
        await ElementHelper.scrollToElement(page, PLPLocators.filtersProductsMasksUNu);
    }
}