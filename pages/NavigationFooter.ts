import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { FooterLocaters } from "../locators/NavigationFooterLocators";
import navigationFooterTestData from "../testdata/pcaSkinCare.testdata.json";

export class NavigationFooterPage {

    static async visibilityFooterHeaderShop(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerHeaderShop);

    }
    static async getTextFromFooterHeaderShop(page: any) {
        await ElementHelper.getTextFromElement(page, FooterLocaters.footerHeaderShop);
    }

    static async verifyTextFooterHeaderShop(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerHeaderShop, text);
    }

    static async clickAllProducts(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListAllProducts);
    }
    static async visibilityAllProducts(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListAllProducts);
    }
    static async enableAllProducts(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListAllProducts);
    }
    static async disableAllProducts(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListAllProducts);
    }
    static async toolTipAllProducts(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListAllProducts);
    }
    static async clickDailyCare(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListDailyCare);
    }
    static async visibilityDailyCare(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListDailyCare);
    }
    static async enableDailyCare(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListDailyCare);
    }
    static async disableDailyCare(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListDailyCare);
    }
    static async toolTipDailyCare(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListDailyCare);
    }

    static async clickByTreatment(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListByTreatment);
    }
    static async visibilityByTreatment(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListByTreatment);
    }
    static async enableByTreatment(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListByTreatment);
    }
    static async disableByTreatment(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListByTreatment);
    }
    static async toolTipByTreatment(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListByTreatment);
    }

    static async clickBySkinType(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListBySkinType);
    }
    static async visibilityBySkinType(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListBySkinType);
    }
    static async enableBySkinType(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListBySkinType);
    }
    static async disableBySkinType(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListBySkinType);
    }
    static async toolTipBySkinType(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListBySkinType);
    }

    static async clickBySkinConcern(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListBySkinConcern);
    }
    static async visibilityBySkinConcern(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListBySkinConcern);
    }
    static async enableBySkinConcern(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListBySkinConcern);
    }
    static async disableBySkinConcern(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListBySkinConcern);
    }
    static async toolTipBySkinConcern(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListBySkinConcern);
    }

    static async visibilityFooterHeaderLearn(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerHeaderLearn);
    }
    static async getTextFromFooterHeaderLearn(page: any) {
        await ElementHelper.getTextFromElement(page, FooterLocaters.footerHeaderLearn);
    }

    static async verifyTextFromFooterHeaderLearn(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerHeaderLearn, text);
    }
    static async clickCourses(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListCourses);
    }

    static async visibilityCourses(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListCourses);
    }
    static async enableCourses(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListCourses);
    }
    static async disableCourses(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListCourses);
    }
    static async toolTipCourses(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListCourses);
    }

    static async clickProfessionalPeels(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListProfessionalPeels);
    }

    static async visibilityProfessionalPeels(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListProfessionalPeels);
    }
    static async enableProfessionalPeels(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListProfessionalPeels);
    }
    static async disableProfessionalPeels(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListProfessionalPeels);
    }
    static async toolTipProfessionalPeels(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListProfessionalPeels);
    }

    static async clickSkinConcern(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListSkinConcern);
    }

    static async visibilitySkinConcern(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListSkinConcern);
    }
    static async enableSkinConcern(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListSkinConcern);
    }
    static async disableSkinConcern(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListSkinConcern);
    }
    static async toolTipSkinConcern(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListSkinConcern);
    }

    static async clickSkinTypes(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListSkinType);
    }

    static async visibilitySkinTypes(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListSkinType);
    }
    static async enableSkinTypes(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListSkinType);
    }
    static async disableSkinTypes(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListSkinType);
    }
    static async toolTipSkinTypes(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListSkinType);
    }

    static async clickSkinIntelligence(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListSkinIntelligence);
    }

    static async visibilitySkinIntelligence(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListSkinIntelligence);
    }
    static async enableSkinIntelligence(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListSkinIntelligence);
    }
    static async disableSkinIntelligence(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListSkinIntelligence);
    }
    static async toolTipSkinIntelligence(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListSkinIntelligence);
    }


    static async visibilityFooterHeaderAbout(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerHeaderAbout);
    }
    static async getTextFromFooterHeaderAbout(page: any) {
        await ElementHelper.getTextFromElement(page, FooterLocaters.footerHeaderAbout);

    }

    static async verifyTextFromFooterHeaderAbout(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerHeaderAbout, text);
    }

    static async clickOurStory(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListOurStory);
    }
    static async visibilityOurStory(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListOurStory);
    }
    static async enableOurStory(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListOurStory);
    }
    static async DisableOurStory(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListOurStory);
    }
    static async ToolTipOurStory(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListOurStory);
    }

    static async clickOurPeelLegacy(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListOurPeelLegacy);
    }
    static async visibilityOurPeelLegacy(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListOurPeelLegacy);
    }
    static async enableOurPeelLegacy(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListOurPeelLegacy);
    }
    static async disableOurPeelLegacy(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListOurPeelLegacy);
    }
    static async toolTipOurPeelLegacy(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListOurPeelLegacy);
    }

    static async clickCareers(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListCareers);
    }
    static async visibilityCareers(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListCareers);
    }
    static async enableCareers(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListCareers);
    }
    static async disableCareers(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListCareers);
    }
    static async toolTipCareers(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListCareers);
    }

    static async visibilityFooterHeaderCustomerService(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerHeaderCustomerService);
    }

    static async getTextFromFooterHeaderCustomerService(page: any) {
        await ElementHelper.getTextFromElement(page, FooterLocaters.footerHeaderCustomerService);
    }

    static async verifyTextFromFooterHeaderCustomerService(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerHeaderCustomerService, text);
    }
    static async clickContactUs(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListContactUs);
    }
    static async visibilityContactUs(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListContactUs);
    }
    static async enableContactUs(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListContactUs);
    }
    static async disableContactUs(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListContactUs);
    }
    static async toolTipContactUs(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListContactUs);
    }

    static async clickFAQ(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListFAQ);
    }
    static async visibilityFAQ(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListFAQ);
    }

    static async enableFAQ(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListFAQ);
    }
    static async disableFAQ(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListFAQ);
    }
    static async toolTipFAQ(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListFAQ);
    }

    static async clickShipping(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListShipping);
    }
    static async visibilityShipping(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListShipping);
    }
    static async enableShipping(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListShipping);
    }
    static async disableShipping(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListShipping);
    }
    static async toolTipShipping(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListShipping);
    }

    static async clickReturns(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerListReturns);
    }
    static async visibilityReturns(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerListReturns);
    }

    static async enableReturns(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerListReturns);
    }
    static async disableReturns(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerListReturns);
    }
    static async toolTipReturns(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerListReturns);
    }


    static async clickPCASkinInterntional(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerPCASKINInternational);
    }
    static async visibilityPCASkinInternational(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerPCASKINInternational);
    }
    static async enablePCASkinInternational(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerPCASKINInternational);
    }
    static async disablePCASkinInternational(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerPCASKINInternational);
    }
    static async toolTipPCASkinInternational(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerPCASKINInternational);
    }

    static async clickPrivacyPolicy(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerPrivacyPolicy);
    }
    static async visibilityPrivacyPolicy(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerPrivacyPolicy);
    }
    static async enablePrivacyPolicy(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerPrivacyPolicy);
    }
    static async disablePrivacyPolicy(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerPrivacyPolicy);
    }
    static async toolTipPrivacyPolicy(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerPrivacyPolicy);
    }

    static async clickTermsAndConditions(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerTermsAndConditions);
    }
    static async visibilityTermsAndConditions(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerTermsAndConditions);
    }
    static async enableTermsAndConditions(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerTermsAndConditions);
    }
    static async disableTermsAndConditions(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerTermsAndConditions);
    }
    static async toolTipTermsAndConditions(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerTermsAndConditions);
    }

    static async clickDoNotSellMyPersonalInformation(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerDoNotSellMyPersonalInformation);
    }
    static async visibilityDoNotSellMyPersonalInformation(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerDoNotSellMyPersonalInformation);
    }
    static async enableDoNotSellMyPersonalInformation(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerDoNotSellMyPersonalInformation);
    }
    static async disableDoNotSellMyPersonalInformation(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerDoNotSellMyPersonalInformation); ``
    }
    static async toolTipDoNotSellMyPersonalInformation(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerDoNotSellMyPersonalInformation);
    }

    static async clickProductExcellence(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerProductexcellence);
    }
    static async visibilityProductExcellence(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerProductexcellence);
    }

    static async enableProductExcellence(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerProductexcellence);
    }
    static async disableProductExcellence(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerProductexcellence);
    }
    static async toolTipProductExcellence(page: any) {
        await ElementHelper.hoverOverMenu(page, FooterLocaters.footerProductexcellence);
    }


    static async visibiltySkinHealthGroupImage(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerSkinHelthImg);
    }
    static async visibiltyAllRightsReserved(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerCopyrightstext);
    }

    static async getTextFromAllRightsReserved(page: any) {
        await ElementHelper.getTextFromElement(page, FooterLocaters.footerCopyrightstext);
    }

    static async clickBacktoTopCTA(page: any) {
        await ElementHelper.clickElement(page, FooterLocaters.footerBacktoTopCTAafterLogin);
    }
    static async visibiltyBacktoTopCTA(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerBacktoTopCTAafterLogin);
    }

    static async enableBacktoTopCTA(page: any) {
        await VerificationHelpers.elementIsEnabled(page, FooterLocaters.footerBacktoTopCTAafterLogin);
    }
    static async disableBacktoTopCTA(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerBacktoTopCTAafterLogin);
    }

    static async verifyFirstColumnDisplayAtFooter(page: any) {
        await ElementHelper.isElementDisplayed(page, FooterLocaters.firstColumnAtFooterLayout)
    }

    static async verifySecondColumnDisplayAtFooter(page: any) {
        await ElementHelper.isElementDisplayed(page, FooterLocaters.secondColumnAtFooterLayout)
    }

    static async verifyThirdColumnDisplayAtFooter(page: any) {
        await ElementHelper.isElementDisplayed(page, FooterLocaters.thirdColumnAtFooterLayout)
    }

    static async verifyFourthColumnDisplayAtFooter(page: any) {
        await ElementHelper.isElementDisplayed(page, FooterLocaters.fourthColumnAtFooterLayout)
    }

    static async scrollToFooter(page: any) {
        await ElementHelper.scrollToElement(page, FooterLocaters.footerSection)
    }

    static async verifyFooterTitleAtFirstRow(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.footerTitleAtFirstRow)
    }

    static async verifyFirstRowDisplayAtFooter(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.firstRowAtFooter)
    }

    static async verifySecondRowDisplayAtFooter(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.secondRowAtFooter)
    }

    static async verifyThirdRowDisplayAtFooter(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.thirdColumnAtFooterLayout)
    }

    static async verifyFourthRowDisplayAtFooter(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.fourthColumnAtFooterLayout)
    }

    static async verifyFifthRowDisplayAtFooter(page: any) {
        await VerificationHelpers.elementIsVisible(page, FooterLocaters.fifthRowAtFooter)
    }

    static async verifyTextOfAllProducts(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListAllProducts, text);
    }

    static async verifyTextOfByTreatment(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListByTreatment, text);
    }

    static async verifyTextOfBySkinType(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListBySkinType, text);
    }

    static async verifyTextOfDailyCare(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListDailyCare, text);
    }

    static async verifyTextOfSkinConcern(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListBySkinConcern, text);
    }

    static async verifyTextOfCourses(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListCourses, text);
    }

    static async verifyTextOfProfessionalPeels(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListProfessionalPeels, text);
    }

    static async verifyTextOfSkinConcerns(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListSkinConcern, text);
    }

    static async verifyTextOfSkinTypes(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListSkinType, text);
    }

    static async verifyTextOfSkinIntelligence(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListSkinIntelligence, text);
    }

    static async verifyTextOfOurStory(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListOurStory, text);
    }

    static async verifyTextOfPeelLegacy(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListOurPeelLegacy, text);
    }

    static async verifyTextOfCareers(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListCareers, text);
    }

    static async verifyCSSPropertiesOfShopFooterTitle(page: any, property: string, value: string) {
        await VerificationHelpers.elementHasCSS(page, FooterLocaters.footerHeaderShop, property, value)
    }

    static async verifyCSSPropertiesOfLearnFooterTitle(page: any, property: string, value: string) {
        await VerificationHelpers.elementHasCSS(page, FooterLocaters.footerHeaderLearn, property, value)
    }

    static async verifyCSSPropertiesOfAboutFooterTitle(page: any, property: string, value: string) {
        await VerificationHelpers.elementHasCSS(page, FooterLocaters.footerHeaderAbout, property, value)
    }

    static async verifyCSSPropertiesOfCustomerServiceFooterTitle(page: any, property: string, value: string) {
        await VerificationHelpers.elementHasCSS(page, FooterLocaters.footerHeaderCustomerService, property, value)
    }

    static async verifyShopTitleIsDisable(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerHeaderShop)
    }

    static async verifyLearnTitleIsDisable(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerHeaderLearn)
    }

    static async verifyAboutTitleIsDisable(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerHeaderAbout)
    }

    static async verifyCustomerServiceTitleIsDisable(page: any) {
        await VerificationHelpers.elementIsDisabled(page, FooterLocaters.footerHeaderCustomerService)
    }

    static async verifyTextOfContactUs(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListContactUs, text);
    }

    static async verifyTextOfFaq(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListFAQ, text);
    }

    static async verifyTextOfShipping(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListShipping, text);
    }

    static async verifyTextOfReturns(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerListReturns, text);
    }

    static async verifyTextOfPCASkinInternational(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerPCASKINInternational, text);
    }

    static async verifyTextOfPrivacyPolicy(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerPCASKINInternational, text);
    }

    static async verifyTextOfTermsAndConditions(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerPCASKINInternational, text);
    }

    static async verifyTextOfDoNotSellMyPersonalInformation(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerPCASKINInternational, text);
    }

    static async verifyTextOfProductExcellence(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerPCASKINInternational, text);
    }

    static async verifyTextOfAllRightsReserved(page: any, text: string) {
        await VerificationHelpers.elementHasText(page, FooterLocaters.footerCopyrightstext, text);
    }
}