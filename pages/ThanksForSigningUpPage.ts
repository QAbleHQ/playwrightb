import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { ThanksForSigningUpLocators } from "../locators/ThanksSigningUpLocators";

export class ThanksForSigningUpPage {

    // Header Text Visibility
    static async isSignUpThankYouTextVisible(page: any) {
        await ElementHelper.waitForElementVisible(page,ThanksForSigningUpLocators.signUpThankYou);
        await VerificationHelpers.elementIsVisible(page, ThanksForSigningUpLocators.signUpThankYou);
    }

    static async getSignUpThankYouText(page: any) {
        return VerificationHelpers.elementIsVisible(page, ThanksForSigningUpLocators.signUpThankYou);
    }

    // User Email Visibility
    static async userEmailVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, ThanksForSigningUpLocators.userEmail);
    }

    // Resend Verification Email - Button Methods
    static async resendVerificationEmailButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, ThanksForSigningUpLocators.resendVerificationEmail);
    }

    static async resendVerificationEmailButtonClickable(page: any) {
        await ElementHelper.clickElement(page, ThanksForSigningUpLocators.resendVerificationEmail);
    }

    static async resendVerificationEmailButtonEnabled(page: any) {
        await VerificationHelpers.elementIsEnabled(page, ThanksForSigningUpLocators.resendVerificationEmail);
    }

    static async resendVerificationEmailButtonDisabled(page: any) {
        await VerificationHelpers.elementIsDisabled(page, ThanksForSigningUpLocators.resendVerificationEmail);
    }

    // Confirmation Message Visibility
    static async isConfirmationMessageVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, ThanksForSigningUpLocators.confirmationMessage);
    }

    static async getConfirmationMessageText(page: any) {
        return await ElementHelper.getTextFromElement(page, ThanksForSigningUpLocators.confirmationMessage);
    }


    static async visibilityEmailVerificationHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, ThanksForSigningUpLocators.emailVerificationHeading);
    }
}