import { VerificationHelpers } from "../utils/verificationHelper";
import { SubscriptionsLocators } from "../locators/SubscriptionsLocators";
import { ElementHelper } from "../utils/elementHelper";
import subscriptionTestData from '../testdata/pcaSkinCare.testdata.json';

export class SubscriptionsPage {

    static async leftNavigationSubscriptionVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaLeftMenuSubsription);
    }
    static async leftNavigationSubscriptionClickable(page: any) {
        await ElementHelper.clickElement(page, SubscriptionsLocators.pcaLeftMenuSubsription);
    }
    static async leftNavigationSubscriptionHover(page: any) {
        await ElementHelper.hoverOverMenu(page, SubscriptionsLocators.pcaLeftMenuSubsription);
    }
    static async leftNavigationSubscriptionHoverHighlight(page: any) {
        await ElementHelper.highlightElement(page, SubscriptionsLocators.pcaLeftMenuSubsription);
    }
    static async subscriptionHeadingTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionheader);
    }
    static async getSubscriptionHeaderText(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaSubscriptionheader);
    }
    static async productNameVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsProductName);
    }
    static async getProductNameText(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaSubscriptionDetailsProductName);
    }
    static async productImageVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsProductImage);
    }
    static async productImageClickable(page: any) {
        await ElementHelper.clickElement(page, SubscriptionsLocators.pcaSubscriptionDetailsProductImage);
    }
    static async productImageHover(page: any) {
        await ElementHelper.hoverOverMenu(page, SubscriptionsLocators.pcaSubscriptionDetailsProductImage);
    }

    static async productCodeVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsProductCode);
    }
    static async getProductCode(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaSubscriptionDetailsProductCode);
    }

    static async productPriceVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsProductPrice);
    }
    static async getProductPrice(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaSubscriptionDetailsProductPrice);
    }

    static async cancelButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsCancelBtn);
    }
    static async cancelButtonClickable(page: any) {
        await ElementHelper.clickElement(page, SubscriptionsLocators.pcaSubscriptionDetailsCancelBtn);
    }
    static async cancelButtonEnable(page: any) {
        await VerificationHelpers.elementIsEnabled(page, SubscriptionsLocators.pcaSubscriptionDetailsCancelBtn);
    }
    static async cancelButtonDisable(page: any) {
        await VerificationHelpers.elementIsDisabled(page, SubscriptionsLocators.pcaSubscriptionDetailsCancelBtn);
    }
    static async cancelButtonHover(page: any) {
        await ElementHelper.hoverOverMenu(page, SubscriptionsLocators.pcaSubscriptionDetailsCancelBtn);
    }

    static async pauseButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsPauseBtn);
    }
    static async pauseButtonClickable(page: any) {
        await ElementHelper.clickElement(page, SubscriptionsLocators.pcaSubscriptionDetailsPauseBtn);
    }
    static async pauseButtonEnable(page: any) {
        await VerificationHelpers.elementIsEnabled(page, SubscriptionsLocators.pcaSubscriptionDetailsPauseBtn);
    }
    static async pauseButtonDisable(page: any) {
        await VerificationHelpers.elementIsDisabled(page, SubscriptionsLocators.pcaSubscriptionDetailsPauseBtn);
    }
    static async pauseButtonHover(page: any) {
        await ElementHelper.hoverOverMenu(page, SubscriptionsLocators.pcaSubscriptionDetailsPauseBtn);
    }

    static async errorMessageTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsErrorMessage);
    }
    static async getErrorMessageText(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaSubscriptionDetailsErrorMessage);
    }

    static async itemQuantityTitleTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsItemQuantityLabel);
    }
    static async getItemQuantityTitleText(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaSubscriptionDetailsItemQuantityLabel);
    }

    static async itemQuantityMinusButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsItemQuantityDecreaseQtyBtn);
    }
    static async itemQuantityMinusButtonClickable(page: any) {
        await ElementHelper.clickElement(page, SubscriptionsLocators.pcaSubscriptionDetailsItemQuantityDecreaseQtyBtn);
    }
    static async itemQuantityMinusButtonEnable(page: any) {
        await VerificationHelpers.elementIsEnabled(page, SubscriptionsLocators.pcaSubscriptionDetailsItemQuantityDecreaseQtyBtn);
    }
    static async itemQuantityMinusButtonDisable(page: any) {
        await VerificationHelpers.elementIsDisabled(page, SubscriptionsLocators.pcaSubscriptionDetailsItemQuantityDecreaseQtyBtn);
    }

    static async itemQuantityPlusButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsItemQuantityIncreaseQtyBtn);
    }
    static async itemQuantityPlusButtonClickable(page: any) {
        await ElementHelper.clickElement(page, SubscriptionsLocators.pcaSubscriptionDetailsItemQuantityIncreaseQtyBtn);
    }
    static async itemQuantityPlusButtonEnable(page: any) {
        await VerificationHelpers.elementIsEnabled(page, SubscriptionsLocators.pcaSubscriptionDetailsItemQuantityIncreaseQtyBtn);
    }
    static async itemQuantityPlusButtonDisable(page: any) {
        await VerificationHelpers.elementIsDisabled(page, SubscriptionsLocators.pcaSubscriptionDetailsItemQuantityIncreaseQtyBtn);
    }

    static async itemQuantityInputClick(page: any) {
        await ElementHelper.clickElement(page, SubscriptionsLocators.pcaSubscriptionDetailsItemQuantityInputs);
    }

    static async itemQuantityInputClearAndEnterData(page: any, data: string) {
        await ElementHelper.clearAndEnterInTextField(page, SubscriptionsLocators.pcaSubscriptionDetailsItemQuantityInputs, subscriptionTestData.ItemQuantity.Value);
    }

    static async itemQuantityInputEnabled(page: any) {
        await VerificationHelpers.elementIsEnabled(page, SubscriptionsLocators.pcaSubscriptionDetailsItemQuantityInputs);
    }

    static async subscriptionErrorMessageUnderProductList(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsErrorMessage);
    }
    static async subscriptionErrorMessageText(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaSubscriptionDetailsErrorMessage);
    }

    static async errorMessageUnabletofetchshippingaddressToast(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsUnabletofetchshippingaddressToast);
    }
    static async errorMessageToasttextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsUnabletofetchshippingaddressToastText);
    }
    static async getErrorMessageToasttext(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaSubscriptionDetailsUnabletofetchshippingaddressToastText);
    }
    static async errorMessageToastCloseBtnVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsUnabletofetchshippingaddressToastCloseBtn);
    }
    static async errorMessageToastCloseBtnClick(page: any) {
        await ElementHelper.clickElement(page, SubscriptionsLocators.pcaSubscriptionDetailsUnabletofetchshippingaddressToastCloseBtn);
    }

    //Frequency DropDown
    static async frequencyDropDownTitleVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsFrequencyLabel);
    }
    static async getFrequencyDropDownTitle(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaSubscriptionDetailsFrequencyLabel);
    }

    static async frequencyDropDownVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsFrequencyDropDown);
    }
    static async frequencyDropDownClickable(page: any) {
        await ElementHelper.clickElement(page, SubscriptionsLocators.pcaSubscriptionDetailsFrequencyDropDown);
    }
    static async getFrequencyDropDownSelectedValuetext(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaSubscriptionDetailsFrequencyDropDown);
    }


    //Dynamic value select for all dropdown at test time
    static async getFrequencyDropDownValue(page: any, EnterFilterName: string) {
        await ElementHelper.selectOptionByVisibleText(page, SubscriptionsLocators.pcaSubscriptionDetailsFrequencyDropDown, EnterFilterName);
    }


    static async frequencyDropDown1DaytextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsFrequencyDropDown1Day);
    }
    static async frequencyDropDown2DaytextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsFrequencyDropDown2Days);
    }
    static async frequencyDropDown1MonthstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsFrequencyDropDown1Months);
    }
    static async frequencyDropDown3MonthstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsFrequencyDropDown3Months);
    }
    static async frequencyDropDown6MonthstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaSubscriptionDetailsFrequencyDropDown6Months);
    }


    static async filterSubscriptionHeadingVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaFilterSubscriptionTitle);
    }
    static async getFilterSubscriptionHeadingText(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaFilterSubscriptionTitle);
    }

    static async locationsDropDownVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaLocationsDropDown);
    }
    static async locationsDropDownClickable(page: any) {
        await ElementHelper.clickElement(page, SubscriptionsLocators.pcaLocationsDropDown);
    }
    static async getLocationsDropDownSelectedValuetext(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaLocationsDropDown);
    }

    //Dynamic value select for all Location dropdown.
    static async getLocationDropDownselectedValue(page: any, EnterFilterName: string) {
        await ElementHelper.selectOptionByVisibleText(page, SubscriptionsLocators.pcaCategoriesDropDown, EnterFilterName);
    }
    static async locationDropDownAlllocationstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaLocationsDropDownValueAllLocations);
    }
    static async locationDropDown24CommercialStreet92101textVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaLocationsDropDownValue24CommercialStreet92101);
    }


    static async categoriesDropDownVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaLocationsDropDown);
    }
    static async categoriesDropDownClickable(page: any) {
        await ElementHelper.clickElement(page, SubscriptionsLocators.pcaLocationsDropDown);
    }
    static async getCategoriesDropDownselectedValuetext(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaLocationsDropDown);
    }

    //Dynamic value select for All Categories dropdown.
    static async getCategoriesDropDownValue(page: any, EnterFilterName: string) {
        await ElementHelper.selectOptionByVisibleText(page, SubscriptionsLocators.pcaCategoriesDropDown, EnterFilterName);
    }

    static async categoriesDropDownAllcategoriestextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueAllcategories);
    }
    static async categoriesDropDownAntioxidantstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueAntioxidants);
    }
    static async categoriesDropDownBroadSpectrumSPFtextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueBroadSpectrumSPF);
    }
    static async categoriesDropDownCleansersAndTonerstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueCleansersAndToners);
    }
    static async categoriesDropDownEyeNeckLiptextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueEyeNeckLip);
    }
    static async categoriesDropDownMaskstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueMasks);
    }
    static async categoriesDropDownMoisturizerstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueMoisturizers);
    }
    static async categoriesDropDownRetinolstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueRetinols);
    }
    static async categoriesDropDownSerumstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueSerums);
    }
    static async categoriesDropDownSolutionSetstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueSolutionSets);
    }
    static async categoriesDropDownPeelstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValuePeels);
    }
    static async categoriesDropDownPeelAlternativetextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValuePeelAlternative);
    }
    static async categoriesDropDownRetinoidTreatmentstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueRetinoidTreatments);
    }
    static async categoriesDropDownTherapeuticMaskstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueTherapeuticMasks);
    }
    static async categoriesDropDownTreatmentEnhancementstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueTreatmentEnhancements);
    }
    static async categoriesDropDownBackbarSizestextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueBackbarSizes);
    }
    static async categoriesDropDownBackbarToolstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueBackbarTools);
    }
    static async categoriesDropDownBodyTreatmentstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueBodyTreatments);
    }
    static async categoriesDropDownExfoliantstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueExfoliants);
    }
    static async categoriesDropDownFaceSunscreentextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueFaceSunscreen);
    }
    static async categoriesDropDownFullBodySunscreentextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueFullBodySunscreen);
    }
    static async categoriesDropDownTintedSunscreentextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueTintedSunscreen);
    }
    static async categoriesDropDownWaterResistantSunscreentextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueWaterResistantSunscreen);
    }
    static async categoriesDropDownPostProceduretextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValuePostProcedure);
    }
    static async categoriesDropDownCleanserstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueCleansers);
    }
    static async categoriesDropDownFaceMoisturizerstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueFaceMoisturizers);
    }
    static async categoriesDropDownTreamentsampSerumstextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaCategoriesDropDownValueTreamentsampSerums);
    }


    static async updateSubscriptionButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaUpdateSubscriptionButton);
    }
    static async updateSubscriptionButtonClickable(page: any) {
        await ElementHelper.clickElement(page, SubscriptionsLocators.pcaUpdateSubscriptionButton);
    }
    static async updateSubscriptionButtonEnable(page: any) {
        await VerificationHelpers.elementIsEnabled(page, SubscriptionsLocators.pcaUpdateSubscriptionButton);
    }
    static async updateSubscriptionButtonDisable(page: any) {
        await VerificationHelpers.elementIsDisabled(page, SubscriptionsLocators.pcaUpdateSubscriptionButton);
    }

    static async scrollbacktotopButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaScrollbacktotop);
    }
    static async scrollbacktotopButtonClickable(page: any) {
        await ElementHelper.clickElement(page, SubscriptionsLocators.pcaScrollbacktotop);
    }

    static async yourNextShipmentMessageVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, SubscriptionsLocators.pcaYourNextShipmentMessage);
    }
    static async getYourNextShipmentMessagetext(page: any) {
        await ElementHelper.getElementText(page, SubscriptionsLocators.pcaYourNextShipmentMessage);
    }

}