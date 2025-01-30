import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { PaymentMethodsLocators } from "../locators/PaymentMethodsLocators";
import paymentMethodPage from "../testdata/pcaSkinCare.testdata.json"

export class PaymentPage {
    static async visibilityPaymentMethodHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.paymentMethodsHeading);
    }

    static async verifyPaymentMethodsHeadingText(page: any) {
        await VerificationHelpers.elementContainsText(page, PaymentMethodsLocators.paymentMethodsHeading, paymentMethodPage.PaymentMethod.heading);
    }

    static async visibilityAddNewPaymentMethodButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.addPaymentMethodBtn);
    }

    static async clickOnAddNewPaymentMethodButton(page: any) {
        await ElementHelper.clickElement(page, PaymentMethodsLocators.addPaymentMethodBtn);
    }
    static async visibilityAddPaymentMethodHeadingText(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.addPaymentMethodBtn);
    }

    static async verifyAddPaymentMethodHeadingText(page: any) {
        await VerificationHelpers.elementContainsText(page, PaymentMethodsLocators.addPaymentMethodsHeading, paymentMethodPage.AddPaymentMethod.heading);
    }

    static async visibilityCardNumberLabel(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.cardNumberLabel);
    }
    static async visibilityExpirationLabel(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.expirationLabel);
    }

    static async visibilityCVVLabel(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.CVVLabel);
    }

    static async visibilityFullNameLabel(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.fullNameLabel);
    }

    static async visibilityAddressLineLabel(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.addressLineLabel);
    }

    static async visibilitySavePaymentMethodButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.savePaymentMethodBtn);
    }

    static async visibilityCloseButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.closeBtn);
    }

    static async visibilityCardNumberField(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.cardNumberField);
    }

    static async visibilityExpirationField(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.expirationField);
    }

    static async visibilityCVVField(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.CVVField);
    }

    static async visibilityFullNameField(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.fullNameField);
    }

    static async visibilityAddressLineField(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.addressLineField);
    }

    static async isEmptyCardNumberField(page: any) {
        await VerificationHelpers.elementIsEmpty(page, PaymentMethodsLocators.cardNumberField);
    }

    static async isEmptyExpirationField(page: any) {
        await VerificationHelpers.elementIsEmpty(page, PaymentMethodsLocators.expirationField);
    }

    static async isEmptyCVVField(page: any) {
        await VerificationHelpers.elementIsEmpty(page, PaymentMethodsLocators.CVVField);
    }

    static async isEmptyFullNameField(page: any) {
        await VerificationHelpers.elementIsEmpty(page, PaymentMethodsLocators.fullNameField);
    }

    static async isEmptyAddressLineField(page: any) {
        await VerificationHelpers.elementIsEmpty(page, PaymentMethodsLocators.addressLineField);
    }

    static async clickSavePaymentMethodButton(page: any) {
        await ElementHelper.clickElement(page, PaymentMethodsLocators.savePaymentMethodBtn);
    }

    static async clickOnCloseButton(page: any) {
        await ElementHelper.clickElement(page, PaymentMethodsLocators.closeBtn);
    }

    static async clearAndEnterIntoCardNumberField(page: any) {
        await ElementHelper.clearAndEnterInTextField(page, PaymentMethodsLocators.cardNumberField, paymentMethodPage.CardDetails.CardNumber);
    }

    static async clearAndEnterIntoExpirationField(page: any) {
        await ElementHelper.clearAndEnterInTextField(page, PaymentMethodsLocators.expirationField, paymentMethodPage.CardDetails.Expiration);
    }

    static async clearAndEnterIntoCVVField(page: any) {
        await ElementHelper.clearAndEnterInTextField(page, PaymentMethodsLocators.CVVField, paymentMethodPage.CardDetails.CVV);
    }

    static async clearAndEnterIntoFullNameField(page: any) {
        await ElementHelper.clearAndEnterInTextField(page, PaymentMethodsLocators.fullNameField, paymentMethodPage.CardDetails.FullName);
    }

    static async clearAndEnterIntoAddressLineField(page: any) {
        await ElementHelper.clearAndEnterInTextField(page, PaymentMethodsLocators.addressLineField, paymentMethodPage.CardDetails.AddressLine);
    }

    static async visbilitySetAsDefaultCheckBox(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.setAsDefaultCheckBox);
    }

    static async visibilitySetAsDefaultText(page: any) {
        await VerificationHelpers.elementIsVisible(page, PaymentMethodsLocators.setAsDefaultText);
    }

    static async clickOnSetAsDefaultCheckbox(page: any) {
        await ElementHelper.clickElement(page, PaymentMethodsLocators.setAsDefaultCheckBox);
    }

    static async verifySetAsDefaultCheckboxIsChecked(page: any) {
        await VerificationHelpers.elementIsChecked(page, PaymentMethodsLocators.setAsDefaultCheckBox);
    }

    static async verifySetAsDefaultText(page: any) {
        await VerificationHelpers.elementContainsText(page, PaymentMethodsLocators.setAsDefaultText, paymentMethodPage.SetDefault.text);
    }
}